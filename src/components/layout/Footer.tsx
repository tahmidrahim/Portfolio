import React from "react";
import { siteConfig } from "@/data/siteConfig";

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-slate-200/80 dark:border-slate-800/80 bg-white/70 dark:bg-slate-950/70 backdrop-blur-xl pt-12 sm:pt-16 pb-10 sm:pb-12 transition-colors overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 sm:gap-8 pb-10 sm:pb-12 border-b border-slate-200/80 dark:border-slate-800/80">
          <div>
            <div className="flex items-center gap-2.5 mb-2.5">
              <span className="font-extrabold text-lg sm:text-xl tracking-tight text-[var(--text-primary)]">
                {siteConfig.name}
              </span>
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 ring-4 ring-emerald-500/20" />
            </div>
            <p className="text-xs sm:text-sm text-[var(--text-secondary)] max-w-md leading-relaxed">
              Mobile app developer based in {siteConfig.location}. Building business apps, client portals, and backends with Flutter, Firebase, and Node.js.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-sm">
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/10 dark:bg-teal-400/15 border border-teal-500/20 text-xs font-semibold text-teal-800 dark:text-teal-300">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
              Available for new projects
            </div>
          </div>
        </div>

        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 text-xs text-[var(--text-tertiary)] text-center sm:text-left">
          <div className="flex flex-wrap justify-center sm:justify-start gap-4 sm:gap-5 font-medium">
            <a
              href={siteConfig.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
            >
              GitHub
            </a>
            <a
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href={siteConfig.links.fiverr}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
            >
              Fiverr
            </a>
          </div>

          <p className="text-xs">
            © {new Date().getFullYear()} {siteConfig.name}. Built with Next.js, Flutter design principles &amp; Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
};
