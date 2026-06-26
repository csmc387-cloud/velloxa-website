"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, CheckCircle2, AlertCircle, ArrowUpRight, Loader2 } from "lucide-react";
import { InstagramIcon } from "@/components/SocialIcons";
import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
import StartProjectButton from "@/components/StartProjectButton";
import { TextScramble } from "@/components/ui/text-scramble";


// Form Validation Schema
const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  company: z.string().optional(),
  serviceInterest: z.string().min(1, "Please select a service of interest."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: "success" | "error"; message: string } | null>(null);
  const [emailCopied, setEmailCopied] = useState(false);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText("velloxa.agency@gmail.com");
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      serviceInterest: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus({ type: "success", message: result.message });
        reset();
      } else {
        setSubmitStatus({
          type: "error",
          message: result.message || "Something went wrong. Please try again.",
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "Network error. Please check your connection and try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const socials = [
    { icon: <InstagramIcon size={20} className="w-5 h-5" />, href: "https://www.instagram.com/velloxa.agency/", name: "Instagram" },
  ];

  return (
    <>
      <Navbar />

      <section className="relative py-20 overflow-hidden">
        
        {/* A subtle dark overlay to ensure text remains highly readable against the vibrant gradient */}
        <div className="absolute inset-0 z-0 bg-bg-primary/40 backdrop-blur-[2px]"></div>

        <div className="max-w-[1280px] mx-auto px-4 md:px-8 z-10 relative">
          <div className="text-center md:text-left max-w-3xl mb-12">
            <span className="text-accent-lime font-display font-semibold uppercase tracking-wider text-xs md:text-sm mb-4 block">
              Contact Us
            </span>
            <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl text-white tracking-tight mb-6 flex flex-wrap gap-x-3 gap-y-1 justify-center md:justify-start items-center">
              <TextScramble className="text-white" as="span">Let's Build</TextScramble>
              <TextScramble className="text-accent-lime" as="span">Your System</TextScramble>
            </h1>
            <p className="text-text-secondary text-base md:text-lg leading-relaxed">
              Have a project in mind? Whether you're looking for passion-driven marketing or bespoke web development, fill out the brief form below and send it to us to get started.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="max-w-3xl mx-auto space-y-8"
          >
            {/* Left Column: Form */}
            <div className="glass-panel !bg-bg-primary/40 !backdrop-blur-[2px] rounded-2xl p-4 sm:p-6 md:p-8 !shadow-none">
              <AnimatePresence mode="wait">
                {submitStatus?.type === "success" ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center justify-center py-12 text-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200, damping: 15 }}
                      className="w-16 h-16 rounded-full bg-accent-lime/10 border border-accent-lime flex items-center justify-center text-accent-lime mb-6"
                      suppressHydrationWarning
                    >
                      <CheckCircle2 size={36} />
                    </motion.div>
                    <h3 className="font-display font-bold text-2xl text-white mb-3">
                      Enquiry Received!
                    </h3>
                    <p className="text-text-secondary text-sm max-w-sm leading-relaxed mb-6">
                      {submitStatus.message}
                    </p>
                    <Button variant="secondary" onClick={() => setSubmitStatus(null)} className="px-6 py-2 text-sm">
                      Send Another Message
                    </Button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit(onSubmit)}
                    className="space-y-6"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    {submitStatus?.type === "error" && (
                      <div className="p-4 rounded-[6px] bg-red-500/10 border border-red-500/30 flex items-start gap-3 text-red-400 text-sm">
                        <span suppressHydrationWarning className="inline-flex flex-shrink-0 mt-0.5">
                          <AlertCircle size={18} />
                        </span>
                        <span>{submitStatus.message}</span>
                      </div>
                    )}

                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="block text-xs font-semibold text-text-primary uppercase tracking-wider mb-2">
                        Your Name <span className="text-accent-lime">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        {...register("name")}
                        className={`w-full bg-black/75 backdrop-blur-md border ${
                          errors.name ? "border-red-500/40 focus:border-red-500 focus:ring-1 focus:ring-red-500/20" : "border-white/12 focus:border-accent-lime focus:ring-1 focus:ring-accent-lime/20"
                        } rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:bg-black/85 transition-all duration-150`}
                        placeholder="e.g. Marcus Aurelius"
                      />
                      {errors.name && (
                        <p className="mt-1.5 text-xs text-red-400 font-medium">{errors.name.message}</p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold text-text-primary uppercase tracking-wider mb-2">
                        Email Address <span className="text-accent-lime">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        {...register("email")}
                        className={`w-full bg-black/75 backdrop-blur-md border ${
                          errors.email ? "border-red-500/40 focus:border-red-500 focus:ring-1 focus:ring-red-500/20" : "border-white/12 focus:border-accent-lime focus:ring-1 focus:ring-accent-lime/20"
                        } rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:bg-black/85 transition-all duration-150`}
                        placeholder="e.g. marcus@empire.com"
                      />
                      {errors.email && (
                        <p className="mt-1.5 text-xs text-red-400 font-medium">{errors.email.message}</p>
                      )}
                    </div>

                    {/* Company */}
                    <div>
                      <label htmlFor="company" className="block text-xs font-semibold text-text-primary uppercase tracking-wider mb-2">
                        Company Name <span className="text-text-secondary">(Optional)</span>
                      </label>
                      <input
                        id="company"
                        type="text"
                        {...register("company")}
                        className="w-full bg-black/75 backdrop-blur-md border border-white/12 focus:border-accent-lime focus:ring-1 focus:ring-accent-lime/20 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:bg-black/85 transition-all duration-150"
                        placeholder="e.g. Rome Logistics"
                      />
                    </div>

                    {/* Service Interest */}
                    <div>
                      <label htmlFor="serviceInterest" className="block text-xs font-semibold text-text-primary uppercase tracking-wider mb-2">
                        Service Interest <span className="text-accent-lime">*</span>
                      </label>
                      <select
                        id="serviceInterest"
                        {...register("serviceInterest")}
                        className={`w-full bg-black/75 backdrop-blur-md border ${
                          errors.serviceInterest ? "border-red-500/40 focus:border-red-500 focus:ring-1 focus:ring-red-500/20" : "border-white/12 focus:border-accent-lime focus:ring-1 focus:ring-accent-lime/20"
                        } rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:bg-black/85 transition-all duration-150 appearance-none cursor-pointer`}
                      >
                        <option value="" disabled className="bg-bg-surface">Select a service...</option>
                        <option value="AI Integration" className="bg-bg-surface">AI Integration & Automation</option>
                        <option value="Web Dev" className="bg-bg-surface">Bespoke Web Development</option>
                        <option value="Marketing" className="bg-bg-surface">Passion-Led Marketing</option>
                        <option value="Other" className="bg-bg-surface">Other Technical Enquiry</option>
                      </select>
                      {errors.serviceInterest && (
                        <p className="mt-1.5 text-xs text-red-400 font-medium">{errors.serviceInterest.message}</p>
                      )}
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="message" className="block text-xs font-semibold text-text-primary uppercase tracking-wider mb-2">
                        Your Project Details <span className="text-accent-lime">*</span>
                      </label>
                      <textarea
                        id="message"
                        rows={5}
                        {...register("message")}
                        className={`w-full bg-black/75 backdrop-blur-md border ${
                          errors.message ? "border-red-500/40 focus:border-red-500 focus:ring-1 focus:ring-red-500/20" : "border-white/12 focus:border-accent-lime focus:ring-1 focus:ring-accent-lime/20"
                        } rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:bg-black/85 transition-all duration-150 resize-y`}
                        placeholder="Tell us about the workflows you want to automate or your web requirements..."
                      />
                      {errors.message && (
                        <p className="mt-1.5 text-xs text-red-400 font-medium">{errors.message.message}</p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <StartProjectButton
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full relative flex items-center justify-center gap-2 group/btn"
                      >
                        {isSubmitting ? (
                          <>
                            <span suppressHydrationWarning className="inline-flex animate-spin">
                              <Loader2 className="h-4 w-4 text-white" />
                            </span>
                            <span>Sending Enquiry...</span>
                          </>
                        ) : (
                          <>
                            <span>Send Message</span>
                            <span suppressHydrationWarning className="inline-flex transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1">
                              <ArrowUpRight className="h-4 w-4" />
                            </span>
                          </>
                        )}
                      </StartProjectButton>
                    </div>

                    {/* reCAPTCHA disclaimer */}
                    <p className="text-[11px] text-text-secondary text-center leading-relaxed">
                      This form is protected by reCAPTCHA v3 compliance. Google's{" "}
                      <a href="#" className="underline hover:text-accent-lime">Privacy Policy</a> and{" "}
                      <a href="#" className="underline hover:text-accent-lime">Terms of Service</a> apply.
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>

            {/* Direct Channels (placed below the form) */}
            <div className="glass-panel !bg-bg-primary/40 !backdrop-blur-[2px] rounded-2xl p-4 sm:p-6 md:p-8 space-y-4 !shadow-none">
              <h3 className="font-display font-semibold text-base text-text-primary">
                Direct Channels
              </h3>

              <div className="space-y-3">
                <button
                  onClick={handleCopyEmail}
                  className="flex items-center gap-3 text-sm text-text-secondary hover:text-accent-lime transition-colors group cursor-pointer focus:outline-none"
                >
                  <div suppressHydrationWarning className="w-8 h-8 rounded-[4px] bg-white/5 border border-white/10 flex items-center justify-center text-accent-cyan group-hover:text-accent-lime">
                    {emailCopied ? (
                      <CheckCircle2 size={16} className="text-accent-lime" />
                    ) : (
                      <Mail size={16} />
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    <span>velloxa.agency@gmail.com</span>
                    <span
                      className={`text-[10px] bg-accent-lime/10 border border-accent-lime/20 text-accent-lime px-1.5 py-0.5 rounded transition-all duration-300 ${
                        emailCopied ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2 pointer-events-none"
                      }`}
                    >
                      Copied!
                    </span>
                  </div>
                </button>

                <a
                  href="tel:+919266544745"
                  className="flex items-center gap-3 text-sm text-text-secondary hover:text-accent-lime transition-colors group"
                >
                  <div suppressHydrationWarning className="w-8 h-8 rounded-[4px] bg-white/5 border border-white/10 flex items-center justify-center text-accent-cyan group-hover:text-accent-lime">
                    <Phone size={16} />
                  </div>
                  <span>+91 92665 44745</span>
                </a>

                <a
                  href="tel:+919711886700"
                  className="flex items-center gap-3 text-sm text-text-secondary hover:text-accent-lime transition-colors group"
                >
                  <div suppressHydrationWarning className="w-8 h-8 rounded-[4px] bg-white/5 border border-white/10 flex items-center justify-center text-accent-cyan group-hover:text-accent-lime">
                    <Phone size={16} />
                  </div>
                  <span>+91 97118 86700</span>
                </a>
              </div>

              <div className="pt-4 flex items-center justify-between">
                <span className="text-xs text-text-secondary">Follow us:</span>
                <div className="flex gap-3">
                  {socials.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-text-secondary hover:text-accent-lime hover:scale-110 duration-300 transition-all"
                      aria-label={social.name}
                    >
                      <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 hover:border-accent-lime/30 hover:bg-white/10 flex items-center justify-center transition-all duration-300">
                        {social.icon}
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}
