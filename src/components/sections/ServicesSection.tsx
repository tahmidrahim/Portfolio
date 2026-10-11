import React from "react";
import { services } from "@/data/services";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-16 sm:py-20 md:py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          pill="Capabilities &amp; Scope"
          title="Direct Engineering Services"
          description="Tailored development engagements for founders, business operators, and product teams needing high-reliability mobile execution."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`flex flex-col justify-between p-6 sm:p-8 rounded-3xl bg-white/95 dark:bg-[#0d121c]/95 border border-slate-200/90 dark:border-slate-800/90 hover:border-teal-500/50 hover:shadow-xl hover:shadow-teal-500/5 hover:-translate-y-1 transition-all duration-300 group backdrop-blur-xl relative overflow-hidden ${
                index === 2 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              {/* Card top shine */}
              <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-teal-500/0 to-transparent group-hover:via-teal-500/50 transition-colors" />

              <div>
                <div className="w-12 h-12 rounded-2xl bg-teal-500/10 dark:bg-teal-400/15 text-teal-700 dark:text-teal-300 font-extrabold text-sm flex items-center justify-center mb-6 border border-teal-500/20 group-hover:scale-110 transition-transform shadow-xs">
                  0{index + 1}
                </div>
                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-3 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-6 font-normal">
                  {service.description}
                </p>
              </div>

              <div className="pt-6 border-t border-slate-200/80 dark:border-slate-800/80">
                <div className="text-xs uppercase tracking-wider font-bold text-[var(--text-tertiary)] mb-3.5">
                  Included deliverables
                </div>
                <ul className="space-y-3">
                  {service.deliverables.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-[var(--text-secondary)]">
                      <div className="w-4 h-4 rounded-full bg-teal-500/15 text-teal-600 dark:text-teal-400 flex items-center justify-center shrink-0 mt-0.5">
                        <svg
                          className="w-2.5 h-2.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
