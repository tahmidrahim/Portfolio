import React from "react";
import { faqs } from "@/data/faq";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const FaqSection: React.FC = () => {
  return (
    <section id="faq" className="py-16 sm:py-20 md:py-24 relative border-t border-[var(--border)] transition-colors overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          pill="Clear Answers"
          title="Frequently Asked Questions"
          description="Clear answers regarding project ownership, timelines, communication, and collaboration terms."
          centered
        />

        <div className="space-y-3.5 sm:space-y-4">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="group p-5 sm:p-6 md:p-7 rounded-3xl bg-white/95 dark:bg-[#0d121c]/95 border border-slate-200/90 dark:border-slate-800/90 open:border-teal-500/50 open:shadow-lg transition-all cursor-pointer backdrop-blur-xl"
            >
              <summary className="flex items-center justify-between font-bold text-sm sm:text-base md:text-lg text-[var(--text-primary)] list-none focus:outline-none gap-3">
                <span className="group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors leading-snug">
                  {faq.question}
                </span>
                <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-slate-100 dark:bg-slate-800 text-[var(--text-secondary)] flex items-center justify-center shrink-0 group-open:rotate-180 group-open:bg-teal-500 group-open:text-white transition-all shadow-xs">
                  <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <p className="mt-3.5 sm:mt-4 text-xs sm:text-sm md:text-base text-[var(--text-secondary)] leading-relaxed border-t border-slate-100 dark:border-slate-800 pt-3.5 sm:pt-4 font-normal">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};
