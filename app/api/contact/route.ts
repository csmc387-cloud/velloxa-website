import { NextResponse, NextRequest } from "next/server";
import { z } from "zod";
import fs from "fs";
import path from "path";

// Simple in-memory rate limiting map
// key: IP, value: timestamp array
const rateLimitMap = new Map<string, number[]>();
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 hour
const MAX_SUBMISSIONS = 5;

const contactSchema = z.object({
  name: z.string().min(1, "Name is required."),
  email: z.string().email("Please enter a valid email address."),
  company: z.string().optional(),
  serviceInterest: z.string().min(1, "Please select an interest."),
  message: z.string().min(10, "Message must be at least 10 characters."),
  recaptchaToken: z.string().optional(),
});

export async function POST(request: NextRequest) {
  try {
    // 1. IP-based Rate Limiting
    const ip = request.headers.get("x-forwarded-for") || "127.0.0.1";
    const now = Date.now();
    
    let clientTimestamps = rateLimitMap.get(ip) || [];
    // Filter out timestamps older than the rate limit window
    clientTimestamps = clientTimestamps.filter((ts) => now - ts < RATE_LIMIT_WINDOW);
    
    if (clientTimestamps.length >= MAX_SUBMISSIONS) {
      return NextResponse.json(
        { message: "Too many submissions. Please try again after an hour." },
        { status: 429 }
      );
    }
    
    // Add current timestamp
    clientTimestamps.push(now);
    rateLimitMap.set(ip, clientTimestamps);

    // 2. Parse and Validate Request Body
    const body = await request.json();
    const result = contactSchema.safeParse(body);

    if (!result.success) {
      // Map validation errors
      const fieldErrors: Record<string, string> = {};
      result.error.issues.forEach((err) => {
        if (err.path[0]) {
          fieldErrors[err.path[0].toString()] = err.message;
        }
      });
      return NextResponse.json({ errors: fieldErrors }, { status: 400 });
    }

    const { name, email, company, serviceInterest, message } = result.data;

    // 3. Save Submission to the Client Intake Form (Excel) inside the workspace
    const excelFilePath = path.join(process.cwd(), "Client Intake Form - Claude.xlsx");
    
    try {
      if (fs.existsSync(excelFilePath)) {
        const xlsx = require("xlsx");
        const fileBuffer = fs.readFileSync(excelFilePath);
        const workbook = xlsx.read(fileBuffer, { type: "buffer" });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        
        // Append the new submission to the Excel sheet
        // Columns: Your Name, Email Address, Company Name, Service Interest, Your Project Details
        xlsx.utils.sheet_add_aoa(worksheet, [[name, email, company || "N/A", serviceInterest, message]], {origin: -1});
        
        const outBuffer = xlsx.write(workbook, { type: "buffer", bookType: "xlsx" });
        fs.writeFileSync(excelFilePath, outBuffer);
      } else {
        console.error("Client Intake Form not found at", excelFilePath);
        return NextResponse.json({ message: "Excel file not found at " + excelFilePath }, { status: 500 });
      }
    } catch (err: any) {
      console.error("Error writing to Excel file", err);
      return NextResponse.json({ message: "Error writing to Excel file: " + err.message }, { status: 500 });
    }

    // 4. Return Success Response
    return NextResponse.json(
      { message: "Thank you! We'll be in touch within 24 hours." },
      { status: 200 }
    );

  } catch (error) {
    console.error("Error in contact API route:", error);
    return NextResponse.json(
      { message: "An internal server error occurred. Please try again later." },
      { status: 500 }
    );
  }
}
