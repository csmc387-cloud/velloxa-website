import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-bg-surface border-t border-border mt-auto">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8 py-12 md:py-16">
        <div className="flex flex-col items-center text-center">
          {/* Brand Info */}
          <div className="flex flex-col items-center">
            <Link
              href="/"
              className="font-display font-bold text-2xl tracking-wider text-text-primary hover:text-accent-lime transition-colors"
            >
              VELLOXA<span className="text-accent-cyan">.</span>
            </Link>
            <p className="mt-4 text-text-secondary text-sm max-w-sm leading-relaxed">
              Empowering small businesses by integrating cutting-edge AI technologies, building premium custom websites, and orchestrating passion-led marketing.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-text-secondary">
          <p>© {currentYear} Velloxa. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-accent-lime transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-accent-lime transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
