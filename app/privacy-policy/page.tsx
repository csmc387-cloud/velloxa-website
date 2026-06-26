"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { TextScramble } from "@/components/ui/text-scramble";

export default function PrivacyPolicy() {
  return (
    <>
      <Navbar />

      <section className="relative py-20 overflow-hidden min-h-[30vh] flex items-center">
        {/* Subtle dark overlay */}
        {/* Removed dark overlay */}

        <div className="max-w-[1280px] mx-auto px-4 md:px-8 z-10 relative text-center md:text-left w-full">
          <div className="max-w-3xl">
            <span className="text-accent-cyan font-display font-semibold uppercase tracking-wider text-xs md:text-sm mb-4 block">
              Legal Info
            </span>
            <h1 className="font-display font-bold text-5xl sm:text-6xl md:text-7xl text-white tracking-tight mb-6">
              <TextScramble className="text-white" as="span">Privacy Policy</TextScramble>
            </h1>
            <p className="text-text-secondary text-base leading-relaxed">
              Last updated: June 21, 2026. Your privacy and trust are paramount to us at Velloxa.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-transparent">
        <div className="max-w-[1280px] mx-auto px-4 md:px-8 relative">
          <div className="glass-panel rounded-3xl p-8 md:p-12 shadow-2xl max-w-4xl mx-auto space-y-8 text-text-secondary text-sm md:text-base leading-relaxed">
            <div className="space-y-4">
              <h2 className="font-display font-bold text-2xl text-white">1. Introduction</h2>
              <p>
                At Velloxa (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;), we respect your privacy and are committed to protecting the personal information you share with us. This Privacy Policy details how we collect, use, and safeguard your data when you visit our website, use our services, or communicate with us.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-display font-bold text-2xl text-white">2. Information We Collect</h2>
              <p>
                We may collect personal information that you voluntarily provide to us, including but not limited to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Your name, email address, company name, and contact details when you submit our contact form or book a call.</li>
                <li>Information about your interest in our services (AI integration, Web Development, and Marketing).</li>
                <li>Usage data and analytic cookies (e.g., Google Analytics 4) to monitor website interactions, page views, and traffic sources.</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="font-display font-bold text-2xl text-white">3. How We Use Your Information</h2>
              <p>
                We use the collected information for purposes including:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Responding to inquiries submitted via our contact forms.</li>
                <li>Scheduling and coordinating consultation/discovery calls (e.g., via Calendly integration).</li>
                <li>Improving our website performance, marketing outreach, and user experience.</li>
                <li>Ensuring compliance with applicable legal and security standards.</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="font-display font-bold text-2xl text-white">4. Data Sharing and Security</h2>
              <p>
                We do not sell, rent, or trade your personal information. We implement industry-standard security measures to guard your data against unauthorized access, modification, or exposure. Access to your personal data is restricted to authorized team members and processors who need the information to perform their duties.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-display font-bold text-2xl text-white">5. Cookies and Tracking</h2>
              <p>
                We use tracking tools, including Google Analytics 4 and Hotjar, to enhance our website functionality and evaluate user conversion flows. You can configure your browser to block or alert you about these cookies, though some parts of the site may function suboptimally as a result.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-display font-bold text-2xl text-white">6. Your Rights</h2>
              <p>
                Depending on your location, you may have rights under regulations like GDPR or CCPA to access, correct, restrict, or request the deletion of your personal data. To exercise these rights, please contact us at <a href="mailto:velloxa.agency@gmail.com" className="text-accent-lime hover:underline">velloxa.agency@gmail.com</a>.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
