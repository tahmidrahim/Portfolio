import React from "react";

interface TechBadgeProps {
  label: string;
  size?: "sm" | "md";
  className?: string;
}

export const TechBadge: React.FC<TechBadgeProps> = ({
  label,
  size = "md",
  className = "",
}) => {
  const sizeClasses =
    size === "sm"
      ? "text-xs px-2.5 py-0.5"
      : "text-xs md:text-sm px-3 py-1";

  return (
    <span
      className={`inline-flex items-center font-medium rounded-full bg-[var(--bg-secondary)] text-[var(--text-secondary)] border border-[var(--border)] transition-colors hover:border-[var(--accent)] hover:text-[var(--text-primary)] ${sizeClasses} ${className}`}
    >
      {label}
    </span>
  );
};
