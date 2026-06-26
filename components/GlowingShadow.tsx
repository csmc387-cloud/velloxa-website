"use client";

import { type ReactNode } from "react";

interface GlowingShadowProps {
  children: ReactNode;
  baseHue?: number; // HSL hue value: e.g. 88 (lime), 168 (cyan), 270 (purple)
}

export function GlowingShadow({ children, baseHue = 88 }: GlowingShadowProps) {
  return (
    <div 
      className="glow-container" 
      style={{ "--base-hue": baseHue } as React.CSSProperties}
    >
      <span className="glow"></span>
      <div className="glow-content">
        {children}
      </div>
    </div>
  );
}
