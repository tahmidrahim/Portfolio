import React from "react";

interface SectionHeadingProps {
  pill?: string;
  title: string;
  description?: string;
  centered?: boolean;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  pill,
  title,
  description,
  centered = false,
  className = "",
}) => {
  return (
    <div
      className={`mb-12 sm:mb-16 ${
        centered ? "text-center max-w-2xl mx-auto" : "max-w-3xl"
      } ${className}`}
    >
      {pill && (
        <div className={`mb-3.5 ${centered ? "flex justify-center" : "inline-block"}`}>
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-teal-500/10 dark:bg-teal-400/15 text-teal-700 dark:text-teal-300 border border-teal-500/20 backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-pulse" />
            {pill}
          </span>
        </div>
      )}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-[var(--text-primary)] mb-4 leading-tight">
        {title}
      </h2>
      {description && (
        <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed font-normal">
          {description}
        </p>
      )}
    </div>
  );
};
