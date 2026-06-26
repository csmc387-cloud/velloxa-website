"use client";

import { Cpu, Code2, Rocket, Check, ArrowRight, ArrowDown } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Card from "@/components/Card";
import { TextScramble } from "@/components/ui/text-scramble";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";

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
  return (
    <>
      <Navbar />

      <section className="relative pt-20 pb-16 overflow-hidden">
        {/* Removed dark overlay */}

        <div className="max-w-[1280px] mx-auto px-4 md:px-8 z-10 relative text-center flex flex-col items-center">
          <div className="max-w-3xl mx-auto flex flex-col items-center bg-black/20 backdrop-blur-md border border-white/10 rounded-3xl p-8 sm:p-12 shadow-2xl">
            <span className="text-accent-lime font-display font-semibold uppercase tracking-wider text-xs md:text-sm mb-4 block">
              What We Do
            </span>
            <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-accent-lime tracking-tight mb-6 flex flex-wrap gap-x-3 gap-y-1 justify-center items-center">
              <TextScramble className="text-accent-lime" as="span">Precision</TextScramble>
              <TextScramble className="text-accent-cyan" as="span">Solutions</TextScramble>
              <TextScramble className="text-accent-lime" as="span">for</TextScramble>
              <TextScramble className="text-accent-lime" as="span">Growing</TextScramble>
              <TextScramble className="text-white" as="span">SMEs</TextScramble>
            </h1>
            <p className="text-white/80 text-base leading-relaxed max-w-2xl mx-auto">
              We leverage modern technology, clean code, and authentic communication to optimize your operations and capture search traffic.
            </p>
          </div>
        </div>
      </section>

      <div className="flex flex-col relative w-full pt-28 md:pt-28">
        {servicesData.map((service, index) => (
          <ContainerScroll
            key={service.id}
            titleComponent={
              <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-[4.5rem] font-bold leading-none text-accent-lime flex items-center justify-center gap-2">
                <span className="scale-[1.1] xs:scale-[1.2] sm:scale-[1.3] md:scale-[1.2] origin-center transform block">{service.icon}</span>
                <span>{service.title}</span>
              </h1>
            }
          >
            <div className="w-full h-full p-3 md:p-6 flex flex-col gap-6 md:gap-8 bg-transparent text-white overflow-y-auto scrollbar-none">
              <div className="col-span-full pb-1 flex flex-col items-center gap-4 text-center mt-1">
                <Card className="!border-2 !border-white/12 hover:!border-accent-cyan hover:!shadow-[0_8px_30px_rgba(0,255,204,0.25)] max-w-full lg:max-w-xl w-full flex-shrink-0 mx-auto text-center">
                  <div className="flex items-center justify-center gap-3 mb-3">
                    <div className="text-accent-lime font-display font-bold text-2xl">
                      {service.caseStudy.metric}
                    </div>
                    <span className="text-[9px] px-2 py-0.5 rounded-full bg-accent-cyan/15 text-accent-cyan font-display font-bold uppercase tracking-wider">
                      Impact Metrics
                    </span>
                  </div>
                  <p className="text-text-secondary text-xs leading-relaxed mx-auto max-w-md">
                    {service.caseStudy.details}
                  </p>
                </Card>
              </div>

              <div className="flex flex-col items-center text-center">
                <p className="text-text-secondary text-sm md:text-base leading-relaxed mb-6 max-w-4xl mx-auto">
                  {service.overview}
                </p>

                <h3 className="font-display font-semibold text-lg md:text-xl text-accent-lime mb-3">
                  Key Capabilities
                </h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 w-full max-w-md md:max-w-3xl mx-auto text-left">
                  {service.features.map((feat) => (
                    <li key={feat} className="flex gap-3 text-sm text-text-secondary leading-relaxed">
                      <div className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-accent-cyan/15 flex items-center justify-center text-accent-cyan">
                        <Check size={12} />
                      </div>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 pb-6">
                <h3 className="font-display font-bold text-xl md:text-2xl text-accent-lime mb-4 text-center">
                  Our Direct Process
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
                  {service.process.map((step, idx) => (
                    <div key={step.name} className="flex flex-col items-center text-center relative w-full px-2">
                      {idx !== service.process.length - 1 && (
                        <div className="hidden md:flex absolute top-0 h-8 left-[calc(50%+20px)] w-[calc(100%-40px)] items-center">
                          <div className="flex-1 h-[1px] bg-gradient-to-r from-border/60 to-accent-lime/40" />
                          <ArrowRight className="w-3.5 h-3.5 text-accent-lime/60 -ml-1 flex-shrink-0" />
                        </div>
                      )}

                      <div className="flex-shrink-0 w-7 h-7 rounded-full bg-bg-surface border border-border flex items-center justify-center text-xs font-bold text-accent-lime z-10 mb-2 shadow-md transition-colors hover:border-accent-lime/60">
                        {idx + 1}
                      </div>

                      <div className="space-y-1 px-4">
                        <h4 className="font-display font-semibold text-sm text-text-primary">
                          {step.name}
                        </h4>
                        <p className="text-xs text-text-secondary leading-relaxed max-w-[220px] md:max-w-[180px] mx-auto">
                          {step.desc}
                        </p>
                      </div>

                      {idx !== service.process.length - 1 && (
                        <div className="flex md:hidden mt-2 text-accent-lime/40">
                          <ArrowDown className="w-3.5 h-3.5 animate-pulse" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ContainerScroll>
        ))}
      </div>

      <Footer />
    </>
  );
}
