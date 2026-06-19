'use client'
import React, { useState } from 'react'
import Link from 'next/link'

interface StartProjectButtonProps {
  text?: string;
  className?: string;
  href?: string;
  type?: "button" | "submit";
  disabled?: boolean;
  onClick?: () => void;
  children?: React.ReactNode;
}

export default function StartProjectButton({ 
  text = "Start a Project", 
  className = "",
  href,
  type = "button",
  disabled = false,
  onClick,
  children
}: StartProjectButtonProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [isPressed, setIsPressed] = useState(false)

  // Default href to "/contact" unless this is a submit button or has an onClick handler
  const targetHref = (type === "submit" || onClick) ? href : (href ?? "/contact");

  const widthClass = className.includes('w-') ? '' : 'w-fit';
  const baseClasses = `group relative border-2 flex justify-center items-center gap-3 border-white/70 rounded-full px-6 h-12 
                 bg-white/10 transition-all duration-500 ease-out hover:border-accent-lime hover:shadow-lg hover:shadow-accent-lime/30 
                 hover:scale-105 active:scale-95 overflow-hidden backdrop-blur-sm z-10 whitespace-nowrap
                 before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent 
                 before:via-white/5 before:to-transparent before:translate-x-[-100%] 
                 hover:before:translate-x-[100%] before:transition-transform before:duration-700 before:pointer-events-none 
                 disabled:opacity-50 disabled:pointer-events-none ${widthClass} ${className}`;

  const content = (
    <>
      {/* Subtle glow effect */}
      <div className='absolute inset-0 rounded-full bg-gradient-to-r from-accent-lime/0 via-accent-lime/25 to-accent-lime/0 
                      opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none'></div>
      
      {/* Text / Children */}
      <span className='text-white font-medium tracking-wide text-sm transition-all duration-300 
                       group-hover:text-accent-lime relative z-10 flex items-center justify-center gap-2 pointer-events-none'>
        {children || text}
      </span>
      
      {/* Hover state border animation */}
      <div className='absolute inset-0 rounded-full border-2 border-accent-lime/0 
                      group-hover:border-accent-lime/35 transition-all duration-500 
                      animate-pulse opacity-0 group-hover:opacity-100 pointer-events-none'></div>
    </>
  );

  const sharedProps = {
    className: baseClasses,
    onMouseEnter: () => setIsHovered(true),
    onMouseLeave: () => {
      setIsHovered(false)
      setIsPressed(false)
    },
    onMouseDown: () => setIsPressed(true),
    onMouseUp: () => setIsPressed(false),
    onClick: onClick
  };

  if (targetHref) {
    return (
      <Link href={targetHref} {...sharedProps}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} disabled={disabled} {...sharedProps}>
      {content}
    </button>
  );
}
