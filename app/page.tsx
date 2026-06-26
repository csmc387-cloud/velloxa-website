"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
import StartProjectButton from "@/components/StartProjectButton";

import StatCounter from "@/components/StatCounter";
import { TextScramble } from "@/components/ui/text-scramble";
import { Features } from "@/components/Features";
import { Phone } from "lucide-react";


export default function Home() {
  // Removed unused variables

  return (
    <div className="relative min-h-screen">
      <div className="relative z-10">
        <Navbar />

        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">

          {/* Removed dark overlay to show full gradient */}

          <div className="max-w-[1280px] w-full mx-auto px-4 md:px-8 z-10 text-center">
            
            <div className="max-w-5xl mx-auto relative">
              {/* Word-by-word fade-up headline */}
              <h1 className="font-display font-black text-6xl sm:text-7xl md:text-8xl lg:text-9xl leading-[1.05] tracking-tighter text-white mb-12 drop-shadow-2xl flex flex-col justify-center items-center text-center gap-y-0">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.0, ease: "easeOut" }}
                >
                  <TextScramble className="text-white" as="span">We Build.</TextScramble>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.25, ease: "easeOut" }}
                >
                  <TextScramble className="text-accent-cyan" as="span">We Integrate.</TextScramble>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
                >
                  <TextScramble className="text-accent-lime" as="span">You Grow.</TextScramble>
                </motion.div>
              </h1>

              {/* Hero CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:hidden"
              >
                <StartProjectButton />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Social Proof Bar */}
        <section className="bg-transparent py-12">
          <div className="max-w-[1280px] mx-auto px-4 md:px-8">
            <div className="flex flex-col items-center justify-center gap-8">
              <StatCounter target={2} duration={1200} prefix="More than " suffix="×" label="Average Client ROI" textSize="text-6xl md:text-7xl lg:text-8xl" />
              <StatCounter target={100} duration={1200} suffix="%" label="On-Time Product Delivery" textSize="text-6xl md:text-7xl lg:text-8xl" />
            </div>
          </div>
        </section>

        <Features />

        <section className="hidden md:flex py-24 bg-transparent relative overflow-hidden justify-center items-center">
          {/* Ambient subtle glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-accent-lime/5 blur-[80px] pointer-events-none" />

          <div className="max-w-4xl w-full mx-auto px-4 z-10 relative">
            <div className="bg-black/20 backdrop-blur-md border border-white/10 rounded-3xl p-12 md:p-16 text-center shadow-2xl">
              <h2 className="font-display font-bold text-3xl md:text-5xl text-accent-lime tracking-tight mb-6">
                Ready to integrate AI into your business?
              </h2>
              <p className="text-text-secondary text-base leading-relaxed mb-8 max-w-2xl mx-auto">
                Schedule a free, no-obligation discovery call. We&apos;ll map out your current workflows and identify the highest impact automation opportunities.
              </p>
              <StartProjectButton href="/contact" className="h-14 w-full text-base">
                <Phone size={18} className="mr-1" />
                Book a Call
              </StartProjectButton>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}
