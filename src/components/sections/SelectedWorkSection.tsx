import React from "react";
import Image from "next/image";
import { projects } from "@/data/projects";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TechBadge } from "@/components/ui/TechBadge";
import { Button } from "@/components/ui/Button";

export const SelectedWorkSection: React.FC = () => {
  return (
    <section id="work" className="py-16 sm:py-20 md:py-24 bg-slate-50/50 dark:bg-slate-950/30 border-t border-[var(--border)] transition-colors overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          pill="Featured Portfolio"
          title="Selected Work"
          description="Real business applications, interactive portals, and specialized mobile utilities built for cross-platform delivery."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
          {projects.map((project) => (
            <div
              key={project.slug}
              className="flex flex-col justify-between rounded-3xl bg-white/95 dark:bg-[#0d121c]/95 border border-slate-200/90 dark:border-slate-800/90 p-5 sm:p-7 md:p-8 hover:border-teal-500/50 hover:shadow-2xl hover:shadow-teal-500/10 transition-all duration-300 hover:-translate-y-1 group relative overflow-hidden backdrop-blur-xl"
            >
              {/* Card top subtle shine line */}
              <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-teal-500/0 to-transparent group-hover:via-teal-500/50 transition-colors" />

              <div>
                {/* Visual Portfolio Thumbnail Showcase */}
                <div className="relative w-full aspect-[16/9] rounded-2xl mb-5 sm:mb-6 overflow-hidden bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 shadow-md">
                  <Image
                    src={project.thumbnail}
                    alt={`Showcase thumbnail for ${project.title}`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  {/* Subtle dark gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity" />
                  
                  {/* Floating category pill in top corner of thumbnail */}
                  <div className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3 z-10">
                    <span className="px-2 sm:px-2.5 py-0.5 sm:py-1 text-[10px] sm:text-[11px] font-bold uppercase tracking-wider bg-black/75 backdrop-blur-md text-white rounded-lg border border-white/10 shadow-sm">
                      {project.category}
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400">
                    {project.category}
                  </span>
                  <span className="text-[11px] sm:text-xs font-medium text-[var(--text-tertiary)] bg-slate-100 dark:bg-slate-800 px-2.5 py-0.5 rounded-full border border-slate-200 dark:border-slate-700 truncate max-w-[180px] sm:max-w-[220px]">
                    {project.client}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl md:text-2xl font-extrabold text-[var(--text-primary)] mb-2.5 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors leading-snug">
                  {project.title}
                </h3>

                <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed mb-5 sm:mb-6 font-normal">
                  {project.subtitle}
                </p>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-6 sm:mb-7">
                  {project.techChips.map((tech) => (
                    <TechBadge key={tech} label={tech} size="sm" />
                  ))}
                </div>
              </div>

              {/* Actions: Responsive wrap */}
              <div className="pt-4 sm:pt-5 border-t border-slate-200/80 dark:border-slate-800/80 flex flex-wrap items-center gap-2.5 sm:gap-3">
                <Button href={`/work/${project.slug}`} size="sm" className="w-full sm:w-auto">
                  {project.slug === "business-management-remodeling-app" ? "Read Case Study" : "View Details"}
                  <svg className="w-3.5 h-3.5 ml-1.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Button>

                {project.liveDemoUrl && (
                  <Button
                    href={project.liveDemoUrl}
                    isExternal
                    variant="secondary"
                    size="sm"
                    className="w-full sm:w-auto"
                  >
                    Live Demo
                    <svg className="w-3.5 h-3.5 ml-1.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </Button>
                )}

                {project.repoUrl && (
                  <Button
                    href={project.repoUrl}
                    isExternal
                    variant="outline"
                    size="sm"
                    className="w-full sm:w-auto"
                  >
                    Repository
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
