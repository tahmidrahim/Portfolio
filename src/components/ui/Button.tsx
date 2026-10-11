import React from "react";
import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  isExternal?: boolean;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  href,
  variant = "primary",
  size = "md",
  className = "",
  isExternal = false,
  type = "button",
  onClick,
  disabled = false,
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-50 disabled:pointer-events-none";

  const sizeStyles = {
    sm: "min-h-[40px] px-4 py-2 text-xs tracking-wide",
    md: "min-h-[44px] px-5 py-2.5 text-sm tracking-wide",
    lg: "min-h-[50px] px-7 py-3 text-base tracking-wide",
  };

  const variantStyles = {
    primary:
      "bg-gradient-to-r from-teal-600 via-teal-700 to-emerald-700 hover:from-teal-500 hover:via-teal-600 hover:to-emerald-600 dark:from-teal-500 dark:via-teal-600 dark:to-emerald-600 text-white shadow-[0_4px_16px_rgba(13,148,136,0.35)] hover:shadow-[0_8px_25px_rgba(13,148,136,0.45)] hover:-translate-y-0.5 active:translate-y-0 border border-teal-400/20",
    secondary:
      "bg-white/90 dark:bg-slate-800/90 backdrop-blur-md text-[var(--text-primary)] border border-slate-200 dark:border-slate-700/80 hover:bg-slate-50 dark:hover:bg-slate-700/80 shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0",
    outline:
      "bg-transparent border border-slate-300 dark:border-slate-700 text-[var(--text-primary)] hover:border-[var(--accent)] hover:text-[var(--accent)] hover:-translate-y-0.5 active:translate-y-0",
    ghost:
      "bg-transparent text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-secondary)]",
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  if (href) {
    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedClasses}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClasses}
    >
      {children}
    </button>
  );
};
