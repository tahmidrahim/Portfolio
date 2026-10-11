"use client";

import React, { useState } from "react";
import Image from "next/image";

interface PhoneFrameProps {
  src: string;
  alt: string;
  caption?: string;
  isConcept?: boolean;
  className?: string;
  priority?: boolean;
}

export const PhoneFrame: React.FC<PhoneFrameProps> = ({
  src,
  alt,
  caption,
  isConcept = false,
  className = "",
  priority = false,
}) => {
  const [hasError, setHasError] = useState(false);

  return (
    <div className={`relative flex flex-col items-center group/phone w-full max-w-[260px] sm:max-w-[280px] ${className}`}>
      {/* Outer Phone Bezel with Aerospace Bevel Styling */}
      <div className="relative w-full aspect-[9/19] rounded-[44px] sm:rounded-[48px] bg-gradient-to-b from-[#2b3542] via-[#1c232d] to-[#11171f] p-2.5 sm:p-3 shadow-[0_20px_50px_rgba(0,0,0,0.25)] dark:shadow-[0_25px_60px_rgba(0,0,0,0.65)] border-[3px] sm:border-4 border-[#3a4756] dark:border-[#27323f] ring-1 ring-white/15 dark:ring-white/10 transition-transform duration-300 group-hover/phone:-translate-y-1">
        {/* Dynamic Island / Top Camera Pill */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 z-30 flex items-center justify-center">
          <div className="w-14 h-4 bg-black rounded-full flex items-center justify-end pr-2 shadow-inner">
            <div className="w-2.5 h-2.5 rounded-full bg-[#151c24] ring-1 ring-[#374151] flex items-center justify-center">
              <div className="w-1 h-1 rounded-full bg-[#1e40af]/60" />
            </div>
          </div>
        </div>

        {/* Screen Display Area */}
        <div className="relative w-full h-full rounded-[38px] overflow-hidden bg-[var(--bg-secondary)] flex flex-col items-center justify-center border border-black/40">
          {/* Subtle Screen Glass Reflection Overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/10 pointer-events-none z-20" />

          {isConcept && (
            <div className="absolute top-6 left-3 z-30">
              <span className="px-2.5 py-0.5 text-[10px] uppercase tracking-wider font-bold bg-amber-500/90 backdrop-blur-md text-white rounded-md shadow-sm">
                UI Concept
              </span>
            </div>
          )}

          {!hasError ? (
            <Image
              src={src}
              alt={alt}
              fill
              sizes="(max-width: 640px) 280px, 300px"
              className="object-cover object-top"
              loading={priority ? undefined : "lazy"}
              priority={priority}
              onError={() => setHasError(true)}
            />
          ) : (
            /* Clean fallback placeholder */
            <div className="w-full h-full p-6 flex flex-col items-center justify-center text-center bg-gradient-to-b from-[var(--bg-secondary)] to-[var(--bg-tertiary)] border border-dashed border-[var(--border)]">
              <svg
                className="w-12 h-12 text-[var(--text-tertiary)] mb-3 opacity-60"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                />
              </svg>
              <div className="text-xs font-mono font-medium text-[var(--accent)] bg-[var(--accent-subtle)] px-2.5 py-1 rounded mb-2 max-w-full break-words">
                [Screenshot: {alt}]
              </div>
              <p className="text-[11px] text-[var(--text-secondary)] leading-relaxed">
                Add image to:
                <br />
                <code className="text-[10px] text-[var(--text-tertiary)] font-mono">
                  {src}
                </code>
              </p>
            </div>
          )}

          {/* Bottom Home Indicator Bar */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-20 w-24 h-1 bg-white/70 dark:bg-white/40 rounded-full backdrop-blur-sm pointer-events-none" />
        </div>
      </div>

      {caption && (
        <p className="mt-3.5 text-xs font-medium text-[var(--text-secondary)] text-center max-w-[280px]">
          {caption}
        </p>
      )}
    </div>
  );
};
