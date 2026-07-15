"use client";
import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { GridPattern } from "@/components/ui/grid-pattern";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

interface FooterLink {
  label: string;
  href: string;
}

interface SocialLink {
  icon: React.ReactNode;
  href: string;
  label: string;
}

interface FooterProps {
  brandName?: string;
  brandDescription?: string;
  socialLinks?: SocialLink[];
  navLinks?: FooterLink[];
  creatorName?: string;
  creatorUrl?: string;

  className?: string;
}

const defaultSocialLinks: SocialLink[] = [];

const defaultNavLinks: FooterLink[] = [
  {
    label: "Privacy Policy",
    href: "/privacy-policy",
  },
];

export const Footer = ({
  brandName = "Velloxa",
  brandDescription = "Empowering small businesses by integrating cutting-edge AI technologies, building premium custom websites, and orchestrating passion-led marketing.",
  socialLinks = defaultSocialLinks,
  navLinks = defaultNavLinks,
  creatorName,
  creatorUrl,
  className,
}: FooterProps) => {
  return (
    <section className={cn("relative w-full mt-0 overflow-hidden", className)}>
      <footer className="bg-bg-primary mt-20 relative">
        <motion.div 
          className="max-w-7xl flex flex-col justify-between mx-auto min-h-[30rem] sm:min-h-[35rem] md:min-h-[40rem] relative z-10 p-4 py-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="flex flex-col mb-12 sm:mb-20 md:mb-0 w-full">
            <div className="w-full flex flex-col items-center">
              <motion.div variants={itemVariants} className="space-y-4 flex flex-col items-center flex-1">
                <div className="flex items-center gap-2">
                  {brandName === "Velloxa" ? (
                    <Link
                      href="/"
                      className="flex items-center hover:opacity-80 transition-opacity"
                    >
                      <Image
                        src="/velloxa-logo.svg"
                        alt="Velloxa Logo"
                        width={120}
                        height={48}
                        className="h-12 w-auto object-contain"
                      />
                    </Link>
                  ) : (
                    <span className="text-white text-3xl font-bold">
                      {brandName}
                    </span>
                  )}
                </div>
                <p className="text-text-secondary font-medium text-center w-full max-w-sm sm:w-96 px-4 sm:px-0 text-sm leading-relaxed">
                  {brandDescription}
                </p>
              </motion.div>

              {socialLinks.length > 0 && (
                <motion.div variants={itemVariants} className="flex mb-8 mt-6 gap-4">
                  {socialLinks.map((link, index) => (
                    <Link
                      key={index}
                      href={link.href}
                      className="text-text-secondary hover:text-white transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10 flex items-center justify-center hover:scale-110 duration-300 transition-all">
                        <div className="w-5 h-5">
                          {link.icon}
                        </div>
                      </div>
                      <span className="sr-only">{link.label}</span>
                    </Link>
                  ))}
                </motion.div>
              )}

              {navLinks.length > 0 && (
                <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-6 text-sm font-semibold text-text-secondary max-w-full px-4 mt-8">
                  {navLinks.map((link, index) => (
                    <Link
                      key={index}
                      className="hover:text-accent-lime duration-300 transition-colors"
                      href={link.href}
                    >
                      {link.label}
                    </Link>
                  ))}
                </motion.div>
              )}
            </div>
          </div>

          <motion.div variants={itemVariants} className="mt-20 md:mt-24 flex flex-col gap-2 md:gap-1 items-center justify-center md:flex-row md:items-center md:justify-between px-4 md:px-0">
            <p className="text-xs text-text-secondary text-center md:text-left">
              © {new Date().getFullYear()} {brandName}. All rights reserved.
            </p>
            {creatorName && creatorUrl && (
              <nav className="flex gap-4">
                <Link
                  href={creatorUrl}
                  target="_blank"
                  className="text-xs text-text-secondary hover:text-white transition-colors duration-300 hover:font-medium"
                >
                  Crafted by {creatorName}
                </Link>
              </nav>
            )}
          </motion.div>
        </motion.div>

        {/* Grid pattern background */}
        <GridPattern
          width={60}
          height={60}
          strokeDasharray="4 4"
          className="stroke-white/[0.04] fill-white/[0.01] pointer-events-none absolute inset-0 h-full w-full [mask-image:radial-gradient(800px_circle_at_bottom,white,transparent)]"
        />

        {/* Large background text */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
          className="bg-gradient-to-b from-white/10 via-white/5 to-transparent bg-clip-text text-transparent leading-none absolute left-0 right-0 bottom-0 font-extrabold tracking-tighter pointer-events-none select-none text-center whitespace-nowrap z-0"
          style={{
            fontSize: "clamp(6rem, 26vw, 40rem)",
          }}
        >
          {brandName.toUpperCase()}
        </motion.div>

      </footer>
    </section>
  );
};

export default Footer;
