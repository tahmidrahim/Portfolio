import React from "react";
import { skillCategories } from "@/data/skills";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TechBadge } from "@/components/ui/TechBadge";

export const TechStackSection: React.FC = () => {
  return (
    <section id="stack" className="py-16 sm:py-20 md:py-24 bg-slate-50/50 dark:bg-slate-950/30 border-t border-[var(--border)] transition-colors overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          pill="Technical Toolkit"
          title="Tools &amp; Technologies"
          description="Specific tools and technologies I use to build robust mobile applications, backend services, and real-time experiences."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {skillCategories.map((cat) => (
            <div
              key={cat.category}
              className="p-5 sm:p-7 md:p-8 rounded-3xl bg-white/95 dark:bg-[#0d121c]/95 border border-slate-200/90 dark:border-slate-800/90 shadow-md backdrop-blur-xl relative overflow-hidden"
            >
              <div className="flex items-center gap-2 mb-4 sm:mb-5">
                <span className="w-2 h-2 rounded-full bg-teal-500 shrink-0" />
                <h3 className="text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400">
                  {cat.category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2 sm:gap-2.5">
                {cat.skills.map((skill) => (
                  <TechBadge key={skill} label={skill} size="md" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
