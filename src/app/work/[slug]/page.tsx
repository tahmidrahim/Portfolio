import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { projects } from "@/data/projects";
import { siteConfig } from "@/data/siteConfig";
import { TechBadge } from "@/components/ui/TechBadge";
import { Button } from "@/components/ui/Button";
import { PhoneFrame } from "@/components/ui/PhoneFrame";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: `Project Not Found | ${siteConfig.name}`,
    };
  }

  return {
    title: `${project.title} | ${siteConfig.name} - Mobile App Developer`,
    description: `${project.subtitle} Built with Flutter, Firebase, and clear milestones.`,
    openGraph: {
      title: `${project.title} - Case Study`,
      description: project.subtitle,
      url: `${siteConfig.siteUrl}/work/${project.slug}`,
      type: "article",
    },
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const projectIndex = projects.findIndex((p) => p.slug === slug);

  if (projectIndex === -1) {
    notFound();
  }

  const project = projects[projectIndex];
  const nextProject = projects[(projectIndex + 1) % projects.length];

  const isTodoText = (text?: string) => !text || text.includes("[" + "TODO");

  return (
    <article className="py-12 sm:py-16 md:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation Breadcrumb */}
        <div className="mb-8">
          <Link
            href="/#work"
            className="inline-flex items-center text-sm font-medium text-[var(--accent)] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded p-1"
          >
            <svg
              className="w-4 h-4 mr-1.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to all work
          </Link>
        </div>

        {/* Case Study Hero */}
        <header className="mb-14 pb-12 border-b border-[var(--border)]">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[var(--accent-subtle)] text-[var(--accent)] mb-4">
            {project.category} Case Study
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--text-primary)] tracking-tight leading-[1.2] mb-6">
            {project.title}
          </h1>

          <p className="text-lg sm:text-xl text-[var(--text-secondary)] leading-relaxed mb-10 max-w-3xl">
            {project.subtitle}
          </p>

          {/* Metadata Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 p-6 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border)] mb-8">
            <div>
              <span className="text-xs uppercase tracking-wider font-semibold text-[var(--text-tertiary)] block mb-1">
                Client
              </span>
              <span className="text-sm font-medium text-[var(--text-primary)]">
                {project.client}
              </span>
            </div>

            <div>
              <span className="text-xs uppercase tracking-wider font-semibold text-[var(--text-tertiary)] block mb-1">
                Role
              </span>
              <span className="text-sm font-medium text-[var(--text-primary)]">
                Mobile App Developer
              </span>
            </div>

            <div>
              <span className="text-xs uppercase tracking-wider font-semibold text-[var(--text-tertiary)] block mb-1">
                Timeline
              </span>
              <span className="text-sm font-medium text-[var(--text-primary)]">
                Milestone Phased Builds
              </span>
            </div>

            <div>
              <span className="text-xs uppercase tracking-wider font-semibold text-[var(--text-tertiary)] block mb-1">
                Platform
              </span>
              <span className="text-sm font-medium text-[var(--text-primary)]">
                Cross-Platform (Flutter)
              </span>
            </div>
          </div>

          {/* Tech Badges */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-[var(--text-tertiary)] mr-2">
              Stack:
            </span>
            {project.techChips.map((tech) => (
              <TechBadge key={tech} label={tech} size="sm" />
            ))}
          </div>
        </header>

        {/* Section 1: The Problem */}
        <section className="mb-16">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs font-mono font-bold text-[var(--accent)] bg-[var(--accent-subtle)] px-2.5 py-1 rounded">
              01
            </span>
            <h2 className="text-2xl font-bold text-[var(--text-primary)]">
              The Problem
            </h2>
          </div>
          <div className="p-6 sm:p-8 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border)]">
            {!isTodoText(project.problem) ? (
              <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed">
                {project.problem}
              </p>
            ) : (
              <div className="text-sm font-mono text-[var(--accent)] bg-[var(--accent-subtle)] px-3 py-1.5 rounded inline-block">
                {project.problem}
              </div>
            )}
          </div>
        </section>

        {/* Section 2: What I Built */}
        <section className="mb-16">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs font-mono font-bold text-[var(--accent)] bg-[var(--accent-subtle)] px-2.5 py-1 rounded">
              02
            </span>
            <h2 className="text-2xl font-bold text-[var(--text-primary)]">
              What I Built
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[var(--text-secondary)] mb-6">
            Delivered end-to-end in milestone phases, with a verified working build at each stage and full source code handover.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.built.map((feature, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 p-4 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border)] hover:border-[var(--accent)] transition-colors"
              >
                <div className="w-5 h-5 rounded-full bg-[var(--accent-subtle)] text-[var(--accent)] flex items-center justify-center shrink-0 mt-0.5">
                  <svg
                    className="w-3.5 h-3.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span className="text-sm font-medium text-[var(--text-primary)] leading-snug">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: Key Technical Decisions */}
        <section className="mb-16">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs font-mono font-bold text-[var(--accent)] bg-[var(--accent-subtle)] px-2.5 py-1 rounded">
              03
            </span>
            <h2 className="text-2xl font-bold text-[var(--text-primary)]">
              Key Technical Decisions
            </h2>
          </div>

          <div className="space-y-4">
            {project.technicalDecisions && project.technicalDecisions.length > 0 ? (
              project.technicalDecisions.map((decision, idx) => (
                <div
                  key={idx}
                  className="p-5 sm:p-6 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border)]"
                >
                  {!isTodoText(decision) ? (
                    <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
                      {decision}
                    </p>
                  ) : (
                    <span className="text-xs font-mono text-[var(--accent)] bg-[var(--accent-subtle)] px-2.5 py-1 rounded">
                      {decision}
                    </span>
                  )}
                </div>
              ))
            ) : (
              <div className="p-5 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border)]">
                <span className="text-xs text-[var(--text-secondary)]">
                  Architecture and implementation specifications are defined per project milestone.
                </span>
              </div>
            )}
          </div>
        </section>

        {/* Section 4: Results & Impact */}
        <section className="mb-16">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs font-mono font-bold text-[var(--accent)] bg-[var(--accent-subtle)] px-2.5 py-1 rounded">
              04
            </span>
            <h2 className="text-2xl font-bold text-[var(--text-primary)]">
              Results & Client Impact
            </h2>
          </div>
          <div className="p-6 sm:p-8 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border)]">
            {!isTodoText(project.results) ? (
              <p className="text-base sm:text-lg text-[var(--text-primary)] leading-relaxed font-medium">
                {project.results}
              </p>
            ) : (
              <div className="text-sm font-mono text-[var(--accent)] bg-[var(--accent-subtle)] px-3 py-1.5 rounded inline-block">
                {project.results}
              </div>
            )}
          </div>
        </section>

        {/* Section 5: Client Quote */}
        {project.clientQuote && (
          <section className="mb-16">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xs font-mono font-bold text-[var(--accent)] bg-[var(--accent-subtle)] px-2.5 py-1 rounded">
                05
              </span>
              <h2 className="text-2xl font-bold text-[var(--text-primary)]">
                Client Feedback
              </h2>
            </div>
            <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[var(--bg-secondary)] to-[var(--bg-tertiary)] border border-[var(--border)]">
              {!isTodoText(project.clientQuote) ? (
                <blockquote className="relative">
                  <p className="text-base sm:text-xl text-[var(--text-primary)] italic leading-relaxed mb-4">
                    &ldquo;{project.clientQuote}&rdquo;
                  </p>
                  <cite className="text-xs uppercase tracking-wider font-semibold text-[var(--accent)] not-italic">
                    — {project.client}
                  </cite>
                </blockquote>
              ) : (
                <div className="text-sm font-mono text-[var(--accent)] bg-[var(--accent-subtle)] px-3 py-1.5 rounded inline-block">
                  {project.clientQuote}
                </div>
              )}
            </div>
          </section>
        )}

        {/* Section 6: Screenshot Gallery */}
        <section className="mb-20">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs font-mono font-bold text-[var(--accent)] bg-[var(--accent-subtle)] px-2.5 py-1 rounded">
              06
            </span>
            <h2 className="text-2xl font-bold text-[var(--text-primary)]">
              Application Gallery
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[var(--text-secondary)] mb-8">
            Verified production screens from the Barrera&apos;s Remodeling Inc Flutter application.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
            {project.screenshots.map((screen, idx) => (
              <PhoneFrame
                key={idx}
                src={screen.src}
                alt={screen.alt}
                caption={screen.caption}
                isConcept={screen.isConcept}
                className="w-full"
              />
            ))}
          </div>
        </section>

        {/* Section 7: Next Project & Navigation Footer */}
        <footer className="pt-10 border-t border-[var(--border)] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
          <Button href="/#work" variant="outline" className="w-full sm:w-auto">
            ← Back to all work
          </Button>

          {nextProject && nextProject.slug !== project.slug && (
            <Button href={`/work/${nextProject.slug}`} variant="secondary" className="w-full sm:w-auto">
              Next: {nextProject.title} →
            </Button>
          )}

          <Button href="/#contact" className="w-full sm:w-auto">
            Start a project discussion
          </Button>
        </footer>
      </div>
    </article>
  );
}
