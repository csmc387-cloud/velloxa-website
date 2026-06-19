import React from "react";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export default function Card({ children, className = "", ...props }: CardProps) {
  return (
    <div
      className={`glass-panel rounded-[12px] shadow-sm p-6 transition-all duration-150 ease-out hover:-translate-y-1 hover:!border-accent-lime/60 hover:!shadow-[0_8px_30px_rgba(186,255,122,0.15)] ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
