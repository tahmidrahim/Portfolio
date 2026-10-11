import React from "react";
import { processSteps } from "@/data/process";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const ProcessSection: React.FC = () => {
  return (
    <section id="process" className="py-20 sm:py-24 bg-slate-50/50 dark:bg-slate-950/30 border-t border-[var(--border)] transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          pill="Working Methodology"
          title="Predictable Milestone Delivery"
          description="A structured four-stage process designed to eliminate surprises, deliver functional test builds at every milestone, and give you complete ownership."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((step) => (
            <div
              key={step.number}
              className="flex flex-col justify-between p-6 sm:p-7 rounded-3xl bg-white/95 dark:bg-[#0d121c]/95 border border-slate-200/90 dark:border-slate-800/90 hover:border-teal-500/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group backdrop-blur-xl relative overflow-hidden"
            >
              <div>
                <span className="text-3xl font-black text-teal-600 dark:text-teal-400 font-mono tracking-tighter mb-4 block group-hover:scale-105 transition-transform">
                  {step.number}
                </span>
                <h3 className="text-lg font-bold text-[var(--text-primary)] mb-2.5">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed mb-6 font-normal">
                  {step.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200/80 dark:border-slate-800/80">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--text-tertiary)] block mb-1">
                  Milestone Guarantee
                </span>
                <p className="text-xs text-[var(--text-primary)] font-semibold flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                  {step.guarantee}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
