"use client";
import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { InstagramIcon } from "@/components/SocialIcons";
import { GridPattern } from "@/components/ui/grid-pattern";

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
  brandIcon?: React.ReactNode;
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
  brandIcon,
  className,
}: FooterProps) => {
  return (
    <section className={cn("relative w-full mt-0 overflow-hidden", className)}>
      <footer className="bg-bg-primary mt-20 relative">
        <div className="max-w-7xl flex flex-col justify-between mx-auto min-h-[30rem] sm:min-h-[35rem] md:min-h-[40rem] relative z-10 p-4 py-10">
          <div className="flex flex-col mb-12 sm:mb-20 md:mb-0 w-full">
            <div className="w-full flex flex-col items-center">
              <div className="space-y-4 flex flex-col items-center flex-1">
                <div className="flex items-center gap-2">
                  {brandName === "Velloxa" ? (
                    <Link
                      href="/"
                      className="flex items-center hover:opacity-80 transition-opacity"
                    >
                      <img
                        src="/velloxa-logo.svg"
                        alt="Velloxa Logo"
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
              </div>

              {socialLinks.length > 0 && (
                <div className="flex mb-8 mt-6 gap-4">
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
                </div>
              )}

              {navLinks.length > 0 && (
                <div className="flex flex-wrap justify-center gap-6 text-sm font-semibold text-text-secondary max-w-full px-4 mt-8">
                  {navLinks.map((link, index) => (
                    <Link
                      key={index}
                      className="hover:text-accent-lime duration-300 transition-colors"
                      href={link.href}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="mt-20 md:mt-24 flex flex-col gap-2 md:gap-1 items-center justify-center md:flex-row md:items-center md:justify-between px-4 md:px-0">
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
          </div>
        </div>

        {/* Grid pattern background */}
        <GridPattern
          width={60}
          height={60}
          strokeDasharray="4 4"
          className="stroke-white/[0.04] fill-white/[0.01] pointer-events-none absolute inset-0 h-full w-full [mask-image:radial-gradient(800px_circle_at_bottom,white,transparent)]"
        />

        {/* Large background text */}
        <div
          className="bg-gradient-to-b from-white/10 via-white/5 to-transparent bg-clip-text text-transparent leading-none absolute left-0 right-0 bottom-0 font-extrabold tracking-tighter pointer-events-none select-none text-center whitespace-nowrap z-0"
          style={{
            fontSize: "clamp(6rem, 26vw, 40rem)",
          }}
        >
          {brandName.toUpperCase()}
        </div>

      </footer>
    </section>
  );
};

export default Footer;
