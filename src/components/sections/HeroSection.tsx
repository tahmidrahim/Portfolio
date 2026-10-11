import React from "react";
import { siteConfig } from "@/data/siteConfig";
import { Button } from "@/components/ui/Button";
import { PhoneFrame } from "@/components/ui/PhoneFrame";
import { shouldRenderContact, getSafeLink, isTodo } from "@/lib/utils";

export const HeroSection: React.FC = () => {
  return (
    <section className="relative pt-8 pb-16 sm:pt-12 sm:pb-20 md:pt-20 md:pb-28 overflow-hidden">
      {/* Ambient background mesh glow */}
      <div className="ambient-hero-mesh" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Narrative & CTA */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            {/* Status Indicator */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-teal-500/10 dark:bg-teal-400/15 border border-teal-500/20 text-xs font-semibold text-teal-700 dark:text-teal-300 mb-6 self-start backdrop-blur-md shadow-sm max-w-full">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="truncate">Available for projects · {siteConfig.location}</span>
            </div>

            {/* Headline */}
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold tracking-tight text-[var(--text-primary)] leading-[1.15] mb-5 sm:mb-6">
              I build <span className="gradient-text">high-impact mobile apps</span>, client portals &amp; the backend behind them.
            </h1>

            {/* Subline */}
            <p className="text-base sm:text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed mb-6 sm:mb-8 max-w-2xl font-normal">
              Flutter, Firebase and Node.js. Delivered in transparent milestones with working builds at every stage and 100% full source handoff.
            </p>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-5 sm:mb-6">
              <Button href="#work" size="lg" className="w-full sm:w-auto">
                See selected work
                <svg className="w-4 h-4 ml-2 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Button>
              {shouldRenderContact(siteConfig.calendlyUrl) && (
                <Button
                  href={getSafeLink(siteConfig.calendlyUrl) || "#contact"}
                  isExternal={!isTodo(siteConfig.calendlyUrl)}
                  variant="secondary"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  Book a 15-min call
                </Button>
              )}
            </div>

            {/* LinkedIn, Gmail & GitHub Quick Links */}
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 mb-7 sm:mb-8">
              <span className="text-xs font-semibold text-[var(--text-tertiary)] uppercase tracking-wider mr-0.5">
                Connect:
              </span>
              
              {/* LinkedIn */}
              <a
                href={siteConfig.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/95 dark:bg-[#0d121c]/95 border border-slate-200 dark:border-slate-800 text-xs font-semibold text-[var(--text-primary)] hover:text-teal-600 dark:hover:text-teal-400 hover:border-teal-500/50 hover:-translate-y-0.5 transition-all shadow-xs"
                title="Connect on LinkedIn"
              >
                <svg className="w-4 h-4 fill-current text-[#0a66c2]" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.32a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24" />
                </svg>
                <span>LinkedIn</span>
              </a>

              {/* Gmail / Email */}
              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/95 dark:bg-[#0d121c]/95 border border-slate-200 dark:border-slate-800 text-xs font-semibold text-[var(--text-primary)] hover:text-teal-600 dark:hover:text-teal-400 hover:border-teal-500/50 hover:-translate-y-0.5 transition-all shadow-xs"
                title={`Email ${siteConfig.email}`}
              >
                <svg className="w-4 h-4 text-[#ea4335]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
                <span>Gmail</span>
              </a>

              {/* GitHub */}
              <a
                href={siteConfig.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/95 dark:bg-[#0d121c]/95 border border-slate-200 dark:border-slate-800 text-xs font-semibold text-[var(--text-primary)] hover:text-teal-600 dark:hover:text-teal-400 hover:border-teal-500/50 hover:-translate-y-0.5 transition-all shadow-xs"
                title="View GitHub Profile"
              >
                <svg className="w-4 h-4 fill-current text-[var(--text-primary)]" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
                <span>GitHub</span>
              </a>
            </div>

            {/* Quick Proof Chips */}
            <div className="flex flex-wrap items-center gap-2 mb-7 sm:mb-8">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 sm:px-3 py-1 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border)] text-[var(--text-secondary)] shadow-xs">
                <svg className="w-3.5 h-3.5 text-teal-500 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Cross-Platform Flutter
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 sm:px-3 py-1 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border)] text-[var(--text-secondary)] shadow-xs">
                <svg className="w-3.5 h-3.5 text-teal-500 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Milestone-Based Sprints
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 sm:px-3 py-1 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border)] text-[var(--text-secondary)] shadow-xs">
                <svg className="w-3.5 h-3.5 text-teal-500 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Full Code Handoff
              </span>
            </div>

            {/* Trust Line & Client Snippet */}
            <div className="pt-6 border-t border-[var(--border)] max-w-xl">
              <div className="flex items-start sm:items-center gap-3 p-3.5 sm:p-4 rounded-xl bg-slate-100/60 dark:bg-slate-900/60 border border-[var(--border)] shadow-xs">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-teal-500/10 text-teal-600 dark:text-teal-400 flex items-center justify-center shrink-0 mt-0.5 sm:mt-0">
                  <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs sm:text-sm font-medium text-[var(--text-secondary)] italic leading-relaxed">
                    &ldquo;{siteConfig.clientReviewSnippet}&rdquo;
                  </p>
                  <p className="text-[11px] font-semibold text-teal-600 dark:text-teal-400 mt-1">
                    — Client, US Remodeling Company
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Smartphone Mockup with 3D Aura */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end relative py-4">
            {/* Ambient Radial Colored Glow Aura */}
            <div className="phone-ambient-glow" />

            {/* Floating Top Badge (visible on desktop) */}
            <div className="absolute top-2 right-2 sm:right-6 z-30 hidden xl:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/95 dark:bg-slate-900/95 border border-slate-200 dark:border-slate-800 shadow-lg backdrop-blur-md text-xs font-semibold text-[var(--text-primary)]">
              <span className="w-2 h-2 rounded-full bg-teal-500 shrink-0" />
              <span>Flutter 3.x Engine</span>
            </div>

            {/* Floating Bottom Badge (visible on desktop) */}
            <div className="absolute bottom-12 left-2 sm:left-4 z-30 hidden xl:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/95 dark:bg-slate-900/95 border border-slate-200 dark:border-slate-800 shadow-lg backdrop-blur-md text-xs font-semibold text-[var(--text-primary)]">
              <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
              <span>Firebase Cloud Auth</span>
            </div>

            <PhoneFrame
              src="/assets/barrera/admin-dashboard.png"
              alt="Admin Dashboard - US Remodeling Company"
              caption="Admin operations & milestone dashboard (Flutter + Firebase)"
              priority={true}
              className="max-w-[260px] sm:max-w-[290px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
