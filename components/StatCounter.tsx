"use client";

import { useEffect, useState, useRef } from "react";

interface StatCounterProps {
  target: number;
  duration?: number; // ms
  prefix?: string;
  suffix?: string;
  label: string;
  numberClassName?: string;
}

export default function StatCounter({
  target,
  duration = 1200,
  prefix = "",
  suffix = "",
  label,
  numberClassName = "",
}: StatCounterProps) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let startTimestamp: number | null = null;
          const step = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            setCount(Math.floor(progress * target));
            if (progress < 1) {
              window.requestAnimationFrame(step);
            }
          };
          window.requestAnimationFrame(step);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [target, duration, hasAnimated]);

  return (
    <div ref={elementRef} className="flex flex-col items-center justify-center p-4 text-center">
      <div className={`font-display font-bold text-4xl md:text-5xl lg:text-6xl text-accent-lime tracking-tight ${numberClassName}`}>
        {prefix}
        {count}
        {suffix}
      </div>
      <div className="mt-2 text-xs md:text-sm text-text-secondary font-medium tracking-wider uppercase">
        {label}
      </div>
    </div>
  );
}
