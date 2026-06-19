import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import PersistentBackground from "@/components/PersistentBackground";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Velloxa — AI Integration, Web Dev & Passion Marketing",
    template: "%s | Velloxa"
  },
  description: "Velloxa is a forward-thinking agency specializing in AI integration for small businesses, bespoke web development, and passion-led marketing.",
  metadataBase: new URL("https://velloxa.com"),
  openGraph: {
    title: "Velloxa — AI Integration, Web Dev & Passion Marketing",
    description: "Velloxa is a forward-thinking agency specializing in AI integration for small businesses, bespoke web development, and passion-led marketing.",
    url: "https://velloxa.com",
    siteName: "Velloxa",
    locale: "en_US",
    type: "website",
  },
  other: {
    "darkreader-lock": "true",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full bg-bg-primary text-text-primary flex flex-col antialiased selection:bg-accent-lime selection:text-bg-primary relative" suppressHydrationWarning>
        {/* Persistent background shader gradient */}
        <PersistentBackground />
        <div className="relative z-10 w-full flex-grow flex flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}
