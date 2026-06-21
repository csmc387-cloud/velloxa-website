"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cpu, Code2, Rocket, Check, ArrowRight, ArrowDown } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
import Card from "@/components/Card";
import { TextScramble } from "@/components/ui/text-scramble";


interface ProcessStep {
  name: string;
  desc: string;
}

interface ServiceData {
  id: string;
  title: string;
  tagline: string;
  icon: React.ReactNode;
  overview: string;
  features: string[];
  process: ProcessStep[];
  tools: string[];
  caseStudy: {
    metric: string;
    details: string;
  };
}

const servicesData: ServiceData[] = [
  {
    id: "ai",
    title: "AI Integration",
    tagline: "Automate operations and elevate decisions with smart agentic pipelines.",
    icon: <Cpu size={24} />,
    overview: "We construct custom AI automation pipelines that integrate seamlessly into your existing workflows. Rather than applying generic ChatGPT wrappers, we build custom agent systems, fine-tune models on your proprietary documentation, and deploy localized solutions that protect your sensitive company data while dramatically reducing human operational overhead.",
    features: [
      "Automated email triage and auto-reply pipelines",
      "Smart customer support chatbots equipped with company-specific context",
      "Intelligent document classification, scanning, and data extraction",
      "Seamless API integrations with OpenAI, Anthropic, and open-source models",
    ],
    process: [
      { name: "Discovery", desc: "We map your operational bottlenecks and find clear AI use cases." },
      { name: "Strategy", desc: "We design the data pipeline structure and evaluate privacy needs." },
      { name: "Centralise", desc: "We program custom agent systems and centralise backend database layers." },
    ],
    tools: ["OpenAI", "Anthropic", "LangChain", "Python", "Supabase", "Hugging Face"],
    caseStudy: {
      metric: "82% Auto-Resolved Queries",
      details: "Embedded a customer support AI for a local distributor, managing 82% of basic logistics queries instantly, saving 34 staff hours weekly, and boosting client satisfaction score by 18%.",
    },
  },
  {
    id: "web",
    title: "Web Development",
    tagline: "Ultra-fast, accessible websites built for maximum user conversion.",
    icon: <Code2 size={24} />,
    overview: "We design and build bespoke web applications using the most robust frameworks in the industry. Your site will load instantly, adapt beautifully across all screen sizes, and feature custom animations that engage your audience. Every line of code is optimized for SEO rankings and accessibility (WCAG 2.1 AA) so that you convert visitors into qualified leads.",
    features: [
      "Responsive, touch-friendly structures (WCAG 2.1 AA compliant)",
      "Zustand state management and high-end Framer Motion animations",
      "Secure Spring Boot & PostgreSQL database configurations",
      "Interactive data charts, graphs, and client portals",
    ],
    process: [
      { name: "Discovery", desc: "We analyze competitor websites and structure page wireframes." },
      { name: "Strategy", desc: "We select the exact tech stack modules and map system databases." },
      { name: "Centralise", desc: "We centralise the frontend design system and backend." },
    ],
    tools: ["React", "Next.js", "Tailwind CSS", "Spring Boot", "PostgreSQL", "Vercel"],
    caseStudy: {
      metric: "0.8s Total Load Time",
      details: "Rebuilt a client service directory from WordPress into Next.js. Page load time dropped from 3.9s to 0.8s, resulting in a 6.2% increase in consultation form submissions.",
    },
  },
  {
    id: "marketing",
    title: "Passion Marketing",
    tagline: "Authentic, SEO-focused campaigns that tell your brand's true story.",
    icon: <Rocket size={24} />,
    overview: "We reject typical cookie-cutter marketing campaigns. Instead, we dive into what makes your business unique, structuring campaigns that speak directly to your target audience. We combine technical SEO blueprints, high-converting copy layouts, and precise analytics tracking to ensure every marketing dollar translates into qualified pipeline leads.",
    features: [
      "High-converting landing page designs structured for ad groups",
      "Authentic copy development that avoids generic corporate jargon",
      "Advanced Google Analytics 4 (GA4) custom event tracking",
      "Hotjar scroll-map audits to identify user conversion friction",
    ],
    process: [
      { name: "Discovery", desc: "We audit your current organic rank and identify competitor keyword gaps." },
      { name: "Strategy", desc: "We build a detailed content tree and map key conversion goals." },
      { name: "Centralise", desc: "We centralise landing page UX and draft high-performance campaigns." },
    ],
    tools: ["GA4", "Hotjar", "Google Search Console", "Figma", "SEMrush", "Ahrefs"],
    caseStudy: {
      metric: "+180% Organic Reach",
      details: "Engineered a content blueprint and structured schema layout for a service provider, driving a 180% increase in search traffic and generating 42 new inquiries within 90 days.",
    },
  },
];

export default function Services() {
  const [activeTab, setActiveTab] = useState("ai");

  const activeService = servicesData.find((s) => s.id === activeTab) || servicesData[0];

  return (
    <>
      <Navbar />

      <section className="relative py-20 overflow-hidden">
        
        {/* A subtle dark overlay to ensure text remains highly readable against the vibrant gradient */}
        <div className="absolute inset-0 z-0 bg-bg-primary/40 backdrop-blur-[2px]"></div>

        <div className="max-w-[1280px] mx-auto px-4 md:px-8 z-10 relative text-center flex flex-col items-center">
          <div className="max-w-3xl mx-auto flex flex-col items-center">
            <span className="text-accent-lime font-display font-semibold uppercase tracking-wider text-xs md:text-sm mb-4 block">
              What We Do
            </span>
            <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-white tracking-tight mb-6 flex flex-wrap gap-x-3 gap-y-1 justify-center items-center">
              <TextScramble className="text-white" as="span">Precision Solutions for</TextScramble>
              <TextScramble className="text-accent-cyan" as="span">Growing SMEs</TextScramble>
            </h1>
            <p className="text-white text-base leading-relaxed max-w-2xl mx-auto">
              We leverage modern technology, clean code, and authentic communication to optimize your operations and capture search traffic.
            </p>
          </div>
        </div>
      </section>

      {/* Tab Selector Section */}
      <section className="bg-bg-primary/40 backdrop-blur-[2px] py-4">
        <div className="max-w-[1280px] mx-auto px-4 md:px-8">
          <div className="flex justify-center gap-2 md:gap-4 overflow-x-auto scrollbar-none py-2">
            {servicesData.map((service) => (
              <button
                key={service.id}
                onClick={() => setActiveTab(service.id)}
                className={`flex items-center justify-center gap-2 px-4 md:px-5 py-2.5 rounded-[6px] font-display font-bold text-sm tracking-wide transition-all cursor-pointer whitespace-nowrap border ${
                  activeTab === service.id
                    ? "bg-accent-lime text-bg-primary border-accent-lime shadow-sm"
                    : "bg-bg-primary/40 backdrop-blur-[2px] text-text-secondary border-white/12 hover:bg-bg-primary/60 hover:border-white/20 hover:text-white"
                }`}
              >
                {service.icon}
                <span className="hidden md:inline">{service.title}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Active Service Content Section */}
      <section className="py-20 bg-transparent min-h-[60vh]">
        <div className="max-w-[1280px] mx-auto px-4 md:px-8 relative grid">
          <AnimatePresence>
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="col-start-1 row-start-1 glass-panel !bg-bg-primary/40 !backdrop-blur-[2px] rounded-3xl p-8 md:p-12 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start"
            >
              {/* Header Info: Title, Tagline and Case Study Highlight */}
              <div className="col-span-full pb-8 flex flex-col items-center gap-8 text-center">
                <div className="max-w-3xl">
                  <h2 className="font-display font-bold text-4xl md:text-5xl text-text-primary mb-3">
                    {activeService.title}
                  </h2>
                  <p className="text-accent-cyan font-sans text-sm font-semibold">
                    {activeService.tagline}
                  </p>
                </div>
                
                <Card className="border-accent-cyan/30 hover:border-accent-cyan/80 !bg-bg-primary/40 !backdrop-blur-[2px] max-w-full lg:max-w-xl w-full flex-shrink-0 mx-auto text-center">
                  <div className="flex items-center justify-center gap-3 mb-3">
                    <div className="text-accent-lime font-display font-bold text-2xl">
                      {activeService.caseStudy.metric}
                    </div>
                    <span className="text-[9px] px-2 py-0.5 rounded-full bg-accent-cyan/15 text-accent-cyan font-display font-bold uppercase tracking-wider">
                      Impact Metrics
                    </span>
                  </div>
                  <p className="text-text-secondary text-xs leading-relaxed mx-auto max-w-md">
                    {activeService.caseStudy.details}
                  </p>
                </Card>
              </div>

              {/* Core details */}
              <div className="col-span-full lg:col-span-12 flex flex-col items-center text-center">
                <p className="text-text-secondary text-sm leading-relaxed mb-10 max-w-4xl mx-auto">
                  {activeService.overview}
                </p>

                {/* Feature List */}
                <h3 className="font-display font-semibold text-xl text-text-primary mb-6">
                  Key Capabilities
                </h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 mb-8 w-full max-w-4xl mx-auto text-left">
                  {activeService.features.map((feat) => (
                    <li key={feat} className="flex gap-3 text-sm text-text-secondary leading-relaxed">
                      <div className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-accent-cyan/15 flex items-center justify-center text-accent-cyan">
                        <Check size={12} />
                      </div>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Our Direct Process (Horizontal & Centered Layout) */}
              <div className="col-span-full pt-10 mt-2">
                <h3 className="font-display font-bold text-2xl text-text-primary mb-8 text-center">
                  Our Direct Process
                </h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                  {activeService.process.map((step, idx) => (
                    <div key={step.name} className="flex flex-col items-center text-center relative px-2">
                      {/* Horizontal connecting line with arrow on tablet/desktop */}
                      {idx !== activeService.process.length - 1 && (
                        <div className="hidden sm:flex absolute top-0 h-8 left-[calc(50%+20px)] w-[calc(100%-40px)] items-center">
                          <div className="flex-1 h-[1px] bg-gradient-to-r from-border/60 to-accent-lime/40" />
                          <ArrowRight className="w-3.5 h-3.5 text-accent-lime/60 -ml-1 flex-shrink-0" />
                        </div>
                      )}
                      
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-bg-surface border border-border flex items-center justify-center text-xs font-bold text-accent-lime z-10 mb-4 shadow-md transition-colors hover:border-accent-lime/60">
                        {idx + 1}
                      </div>
                      
                      <div className="space-y-2">
                        <h4 className="font-display font-semibold text-sm text-text-primary">
                          {step.name}
                        </h4>
                        <p className="text-xs text-text-secondary leading-relaxed max-w-[180px] mx-auto">
                          {step.desc}
                        </p>
                      </div>

                      {/* Vertical connecting arrow on mobile */}
                      {idx !== activeService.process.length - 1 && (
                        <div className="flex sm:hidden mt-5 -mb-1 text-accent-lime/40">
                          <ArrowDown className="w-4 h-4 animate-pulse" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      <Footer />
    </>
  );
}
