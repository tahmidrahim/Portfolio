"use client";

import React, { useState } from "react";
import Image from "next/image";
import { siteConfig } from "@/data/siteConfig";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const AboutSection: React.FC = () => {
  const [headshotError, setHeadshotError] = useState(false);

  return (
    <section id="about" className="py-16 sm:py-20 md:py-24 relative border-t border-[var(--border)] transition-colors overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          pill="Engineering Profile"
          title="About Me"
          description="Direct, transparent, and focused on clean software delivery."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-14 items-center">
          {/* Headshot Column with Ambient Glow & Floating Badge */}
          <div className="lg:col-span-5 flex justify-center relative py-2 overflow-hidden">
            {/* Ambient drop shadow behind photo */}
            <div className="absolute inset-0 max-w-[260px] max-h-[320px] mx-auto bg-gradient-to-tr from-teal-500/20 to-emerald-500/20 blur-3xl rounded-full pointer-events-none" />

            <div className="relative w-full max-w-[250px] sm:max-w-[290px] aspect-[4/5] rounded-[32px] overflow-hidden bg-slate-900 border-4 border-slate-200/90 dark:border-slate-800/90 shadow-2xl flex items-center justify-center group">
              {!headshotError ? (
                <>
                  <Image
                    src="/assets/headshot.jpg"
                    alt={`Photograph of ${siteConfig.name}`}
                    fill
                    sizes="(max-width: 640px) 250px, 290px"
                    className="object-cover object-[center_20%] group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    onError={() => setHeadshotError(true)}
                  />
                  {/* Subtle portrait overlay glow */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Floating verification badge at bottom of portrait */}
                  <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 z-20 flex items-center justify-between p-2.5 sm:p-3 rounded-2xl bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border border-white/20 dark:border-slate-800/80 shadow-lg">
                    <div className="flex flex-col min-w-0 pr-1">
                      <span className="text-xs font-bold text-[var(--text-primary)] leading-tight truncate">
                        Tahmid Tanjim Rahim
                      </span>
                      <span className="text-[10px] text-teal-600 dark:text-teal-400 font-semibold truncate">
                        Mobile App Developer
                      </span>
                    </div>
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shrink-0 ml-1.5" />
                  </div>
                </>
              ) : (
                <div className="w-full h-full p-6 flex flex-col items-center justify-center text-center bg-gradient-to-b from-[var(--bg-secondary)] to-[var(--bg-tertiary)]">
                  <div className="w-16 h-16 rounded-full bg-teal-500/10 text-teal-600 font-bold text-xl mb-3 flex items-center justify-center">
                    TR
                  </div>
                  <span className="text-xs font-medium text-[var(--text-secondary)] mb-2">
                    Tahmid Tanjim Rahim
                  </span>
                  <p className="text-[11px] text-[var(--text-secondary)]">
                    Place photo at:
                    <br />
                    <code className="text-[10px] text-[var(--text-tertiary)] font-mono">
                      public/assets/headshot.jpg
                    </code>
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Narrative & Bento Status Card */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="space-y-3.5 sm:space-y-4 mb-6 sm:mb-8">
              <p className="text-base sm:text-lg md:text-xl text-[var(--text-primary)] leading-relaxed font-semibold">
                {siteConfig.aboutParagraph}
              </p>
              <p className="text-xs sm:text-sm md:text-base text-[var(--text-secondary)] leading-relaxed font-normal">
                I partner with founders, small business owners, and engineering leaders who need solid cross-platform apps that work reliably from day one. Every build is accompanied by honest updates, milestone reviews, and clean documentation.
              </p>
            </div>

            {/* Currently Bento Status */}
            <div className="p-4 sm:p-6 rounded-2xl bg-white/95 dark:bg-[#0d121c]/95 border border-slate-200/90 dark:border-slate-800/90 shadow-md backdrop-blur-xl flex items-start gap-3 sm:gap-4">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-teal-500/10 dark:bg-teal-400/15 text-teal-600 dark:text-teal-400 flex items-center justify-center shrink-0 mt-0.5 border border-teal-500/20">
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <span className="text-xs uppercase tracking-wider font-bold text-teal-600 dark:text-teal-400 block mb-1">
                  Active Focus &amp; Capacity
                </span>
                <p className="text-xs sm:text-sm font-semibold text-[var(--text-primary)] leading-snug">
                  {siteConfig.currently}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
