import React from "react";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export default function Card({ children, className = "", ...props }: CardProps) {
  const hasCustomHoverBorder = className.includes("hover:!border-");
  const hasCustomHoverShadow = className.includes("hover:!shadow-");

  const defaultHoverClasses = [
    "hover:-translate-y-1",
    !hasCustomHoverBorder && "hover:!border-accent-lime/60",
    !hasCustomHoverShadow && "hover:!shadow-[0_8px_30px_rgba(186,255,122,0.15)]"
  ].filter(Boolean).join(" ");

  return (
    <div
      className={`glass-panel rounded-[12px] shadow-sm p-6 transition-all duration-150 ease-out ${defaultHoverClasses} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
