"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { TextScramble } from "@/components/ui/text-scramble";

export default function TermsAndConditions() {
  return (
    <>
      <Navbar />

      <section className="relative py-20 overflow-hidden min-h-[30vh] flex items-center">
        {/* Subtle dark overlay */}
        <div className="absolute inset-0 z-0 bg-bg-primary/40 backdrop-blur-[2px]"></div>

        <div className="max-w-[1280px] mx-auto px-4 md:px-8 z-10 relative text-center md:text-left w-full">
          <div className="max-w-3xl">
            <span className="text-accent-cyan font-display font-semibold uppercase tracking-wider text-xs md:text-sm mb-4 block">
              Legal Info
            </span>
            <h1 className="font-display font-bold text-5xl sm:text-6xl md:text-7xl text-white tracking-tight mb-6">
              <TextScramble className="text-white" as="span">Terms & Conditions</TextScramble>
            </h1>
            <p className="text-text-secondary text-base leading-relaxed">
              Last updated: June 21, 2026. Please review our terms before utilizing our services.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-transparent">
        <div className="max-w-[1280px] mx-auto px-4 md:px-8 relative">
          <div className="glass-panel !bg-bg-primary/40 !backdrop-blur-[2px] rounded-3xl p-8 md:p-12 shadow-2xl max-w-4xl mx-auto space-y-8 text-text-secondary text-sm md:text-base leading-relaxed">
            <div className="space-y-4">
              <h2 className="font-display font-bold text-2xl text-white">1. Acceptance of Terms</h2>
              <p>
                By accessing or using the Velloxa website and our services, you agree to be bound by these Terms & Conditions. If you do not agree to all of these terms, please do not access this site or utilize our services.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-display font-bold text-2xl text-white">2. Scope of Services</h2>
              <p>
                Velloxa specializes in:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>AI Integration: Building agentic automation pipelines and integrating artificial intelligence technologies for small and medium-sized enterprises.</li>
                <li>Web Development: Creating custom web applications, APIs, and responsive design systems.</li>
                <li>Passion Marketing: Organizing high-impact digital marketing campaigns, SEO architecture, and analytics tracking.</li>
              </ul>
              <p>
                Specific deliverables, pricing, and project milestones will be defined in a separate Statement of Work (SOW) or Service Agreement signed by both parties.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-display font-bold text-2xl text-white">3. Intellectual Property</h2>
              <p>
                All content, graphics, layouts, logo designs, code, and materials created by Velloxa on this website are the intellectual property of Velloxa unless otherwise specified. You may not reproduce, copy, or redistribute any materials from this website without our explicit written permission.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-display font-bold text-2xl text-white">4. User Responsibilities</h2>
              <p>
                You agree to use this website and our services for lawful purposes only. You must not:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Attempt to bypass, disable, or tamper with the website's security, API endpoints, or contact forms.</li>
                <li>Provide false or misleading information in contact forms or during scheduling calls.</li>
                <li>Upload or transmit any malicious software, viruses, or harmful scripts.</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="font-display font-bold text-2xl text-white">5. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by law, Velloxa shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from your access to, use of, or inability to use this website, or any errors or omissions in the content.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-display font-bold text-2xl text-white">6. Governing Law</h2>
              <p>
                These terms are governed by and construed in accordance with the local laws, without regard to conflict of law principles. Any legal action or proceeding related to your access to or use of the website shall be instituted in the competent courts of our operating jurisdiction.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-display font-bold text-2xl text-white">7. Contact Information</h2>
              <p>
                If you have any questions or clarifications regarding these Terms & Conditions, please reach out to us at <a href="mailto:velloxa.agency@gmail.com" className="text-accent-lime hover:underline">velloxa.agency@gmail.com</a>.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
