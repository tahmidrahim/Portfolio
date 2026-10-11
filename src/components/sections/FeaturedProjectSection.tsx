import React from "react";
import { projects } from "@/data/projects";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TechBadge } from "@/components/ui/TechBadge";
import { Button } from "@/components/ui/Button";
import { PhoneFrame } from "@/components/ui/PhoneFrame";

export const FeaturedProjectSection: React.FC = () => {
  const featured = projects.find((p) => p.featured) || projects[0];

  return (
    <section className="relative py-16 sm:py-20 md:py-24 bg-slate-50/70 dark:bg-slate-950/40 border-y border-[var(--border)] transition-colors overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          pill="Flagship Case Study"
          title={featured.title}
          description={`Direct client collaboration: ${featured.client}`}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 items-center bg-white/95 dark:bg-[#0d121c]/95 p-5 sm:p-8 md:p-10 lg:p-12 rounded-3xl border border-slate-200/90 dark:border-slate-800/90 shadow-xl backdrop-blur-xl relative overflow-hidden">
          {/* Subtle top border highlight */}
          <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-teal-500/50 to-transparent" />

          {/* Narrative & Details */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400 mb-3 sm:mb-4">
              <span className="w-2 h-2 rounded-full bg-teal-500 shrink-0" />
              <span>Full-Stack Mobile Solution</span>
            </div>

            <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[var(--text-primary)] mb-4 sm:mb-5 leading-snug">
              Dual-role business operating portal built with Flutter &amp; Firebase
            </h3>

            <div className="space-y-3 mb-6 sm:mb-7">
              {featured.summary.map((line, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-teal-500/10 dark:bg-teal-400/15 text-teal-600 dark:text-teal-400 flex items-center justify-center shrink-0 mt-0.5 border border-teal-500/20">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
                    {line}
                  </p>
                </div>
              ))}
            </div>

            {/* Tech Chips */}
            <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-6 sm:mb-7">
              {featured.techChips.map((chip) => (
                <TechBadge key={chip} label={chip} size="sm" />
              ))}
            </div>

            {/* Read Case Study Button */}
            <div>
              <Button href={`/work/${featured.slug}`} size="lg" className="w-full sm:w-auto">
                Read in-depth case study
                <svg className="w-4 h-4 ml-2 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Button>
            </div>
          </div>

          {/* Two Responsive Phone Frames: flex-col on mobile/tablet, md:flex-row on desktop */}
          <div className="lg:col-span-6 flex flex-col md:flex-row items-center justify-center gap-6 relative py-2 overflow-hidden">
            <div className="phone-ambient-glow opacity-80" />
            <PhoneFrame
              src={featured.screenshots[0].src}
              alt={featured.screenshots[0].alt}
              caption="Admin operations view"
              className="w-full max-w-[240px] sm:max-w-[260px]"
            />
            <PhoneFrame
              src={featured.screenshots[1].src}
              alt={featured.screenshots[1].alt}
              caption="Client progress tracker"
              className="w-full max-w-[240px] sm:max-w-[260px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
