import React from "react";
import Link from "next/link";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  href?: string;
  children: React.ReactNode;
}

export default function Button({
  variant = "primary",
  href,
  children,
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-display font-bold text-[15px] tracking-[0.5px] rounded-[6px] transition-all duration-150 ease-in-out cursor-pointer hover:scale-[1.02] hover:brightness-110 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none px-6 py-3";

  const variants = {
    primary: "bg-accent-lime text-bg-primary shadow-sm hover:shadow-accent-lime/20",
    secondary: "border border-accent-cyan text-accent-cyan bg-transparent hover:bg-accent-cyan/10",
    ghost: "bg-transparent text-accent-lime hover:bg-accent-lime/5",
  };

  const combinedClasses = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
}
