"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Jenkins",
    role: "Operations Director",
    company: "Apex Logistics",
    quote: "Velloxa completely transformed our warehouse routing with their custom AI integration. We've seen a 35% reduction in dispatch times, and their web interface is incredibly intuitive. True experts.",
    rating: 5,
    avatar: "SJ",
  },
  {
    id: 2,
    name: "David Chen",
    role: "Founder",
    company: "Solas Web Solutions",
    quote: "The web development work delivered by Velloxa was flawless. They built a custom React site that is lightning fast, visually striking, and has already doubled our online enquiries. Highly recommend!",
    rating: 5,
    avatar: "DC",
  },
  {
    id: 3,
    name: "Emma Harrison",
    role: "Marketing VP",
    company: "Velo Brands",
    quote: "Their passion-led marketing campaigns breathed new life into our branding. We didn't want standard corporate boilerplate; Velloxa brought genuine excitement and creativity that boosted our customer acquisition.",
    rating: 5,
    avatar: "EH",
  },
];

export default function TestimonialsCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (!isPaused) {
      timerRef.current = setInterval(nextSlide, 5000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused]);

  return (
    <div
      className="glass-panel rounded-2xl max-w-3xl mx-auto px-6 md:px-12 py-10 shadow-2xl relative overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Testimonial Content Wrapper */}
      <div className="relative min-h-[220px] flex items-center justify-center">
        {testimonials.map((testimonial, idx) => (
          <div
            key={testimonial.id}
            className={`w-full text-center transition-all duration-500 absolute top-1/2 -translate-y-1/2 ${
              idx === activeIndex
                ? "opacity-100 translate-x-0 scale-100 pointer-events-auto"
                : "opacity-0 translate-x-12 scale-95 pointer-events-none"
            }`}
          >
            {/* Stars */}
            <div className="flex justify-center gap-1 mb-4">
              {Array.from({ length: testimonial.rating }).map((_, i) => (
                <Star key={i} size={16} fill="#BAFF7A" stroke="#BAFF7A" />
              ))}
            </div>

            {/* Quote */}
            <blockquote className="font-sans text-lg md:text-xl font-medium text-accent-cyan italic leading-relaxed mb-6">
              &quot;{testimonial.quote}&quot;
            </blockquote>

            {/* Client Info */}
            <div className="flex items-center justify-center gap-3">
              <div className="w-10 h-10 rounded-full bg-bg-subtle border border-border flex items-center justify-center font-display font-bold text-xs text-accent-lime">
                {testimonial.avatar}
              </div>
              <div className="text-left">
                <cite className="not-italic font-display font-semibold text-text-primary text-sm">
                  {testimonial.name}
                </cite>
                <div className="text-xs text-text-secondary">
                  {testimonial.role}, <span className="text-accent-lime">{testimonial.company}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Control Buttons */}
      <div className="flex justify-between items-center mt-12 md:mt-8 px-4">
        <button
          onClick={prevSlide}
          className="w-10 h-10 rounded-[6px] border border-border bg-bg-surface flex items-center justify-center text-text-secondary hover:text-accent-lime hover:border-accent-lime transition-colors cursor-pointer"
          aria-label="Previous Testimonial"
        >
          <ChevronLeft size={20} />
        </button>

        {/* Indicators */}
        <div className="flex gap-2">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                idx === activeIndex ? "w-6 bg-accent-lime" : "bg-border hover:bg-text-secondary"
              }`}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          className="w-10 h-10 rounded-[6px] border border-border bg-bg-surface flex items-center justify-center text-text-secondary hover:text-accent-lime hover:border-accent-lime transition-colors cursor-pointer"
          aria-label="Next Testimonial"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}
