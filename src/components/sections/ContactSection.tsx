"use client";

import React, { useState } from "react";
import { siteConfig } from "@/data/siteConfig";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { shouldRenderContact, isTodo } from "@/lib/utils";

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "Mobile App (Flutter)",
    budget: "$2,000 - $5,000",
    message: "",
    "bot-field": "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData["bot-field"]) return;

    setStatus("submitting");

    try {
      const encoded = new URLSearchParams({
        "form-name": "contact",
        ...formData,
      }).toString();

      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encoded,
      });

      if (response.ok) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          projectType: "Mobile App (Flutter)",
          budget: "$2,000 - $5,000",
          message: "",
          "bot-field": "",
        });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-20 md:py-24 bg-slate-50/50 dark:bg-slate-950/30 border-t border-[var(--border)] transition-colors relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          pill="Start a Project"
          title="Let's Build Something Solid"
          description="Have an app idea, need an MVP, or looking for a custom business client portal? Let's discuss your scope, deliverables, and timeline."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-14">
          {/* Left Column: Direct Channels */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-[var(--text-primary)] mb-2.5 sm:mb-3">
                Direct Channels
              </h3>
              <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed mb-6 sm:mb-8">
                Prefer direct messaging or want to book an introductory 15-minute call? Reach out through any of these channels:
              </p>

              <div className="space-y-3.5 sm:space-y-4 mb-6 sm:mb-8">
                {/* Email */}
                {shouldRenderContact(siteConfig.email) && (
                  <div className="p-4 sm:p-5 rounded-2xl bg-white/95 dark:bg-[#0d121c]/95 border border-slate-200/90 dark:border-slate-800/90 shadow-sm backdrop-blur-xl hover:border-teal-500/50 transition-colors">
                    <span className="text-[10px] uppercase tracking-wider font-bold text-teal-600 dark:text-teal-400 block mb-1">
                      Direct Email
                    </span>
                    {!isTodo(siteConfig.email) ? (
                      <a
                        href={`mailto:${siteConfig.email}`}
                        className="text-xs sm:text-sm font-bold text-[var(--text-primary)] hover:text-teal-600 dark:hover:text-teal-400 transition-colors break-all"
                      >
                        {siteConfig.email}
                      </a>
                    ) : (
                      <span className="text-xs sm:text-sm font-mono text-[var(--accent)] bg-[var(--accent-subtle)] px-2 py-0.5 rounded break-all">
                        {siteConfig.email}
                      </span>
                    )}
                  </div>
                )}

                {/* LinkedIn */}
                <div className="p-4 sm:p-5 rounded-2xl bg-white/95 dark:bg-[#0d121c]/95 border border-slate-200/90 dark:border-slate-800/90 shadow-sm backdrop-blur-xl hover:border-teal-500/50 transition-colors">
                  <span className="text-[10px] uppercase tracking-wider font-bold text-teal-600 dark:text-teal-400 block mb-1">
                    LinkedIn Profile
                  </span>
                  <a
                    href={siteConfig.links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs sm:text-sm font-bold text-[var(--text-primary)] hover:text-teal-600 dark:hover:text-teal-400 transition-colors inline-flex items-center gap-1.5"
                  >
                    <span>Connect on LinkedIn</span>
                    <svg className="w-3.5 h-3.5 fill-current text-[#0a66c2] shrink-0" viewBox="0 0 24 24">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.32a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24" />
                    </svg>
                  </a>
                </div>

                {/* Call Booking */}
                {shouldRenderContact(siteConfig.calendlyUrl) && (
                  <div className="p-4 sm:p-5 rounded-2xl bg-white/95 dark:bg-[#0d121c]/95 border border-slate-200/90 dark:border-slate-800/90 shadow-sm backdrop-blur-xl hover:border-teal-500/50 transition-colors">
                    <span className="text-[10px] uppercase tracking-wider font-bold text-teal-600 dark:text-teal-400 block mb-1">
                      Intro Call Schedule
                    </span>
                    {!isTodo(siteConfig.calendlyUrl) ? (
                      <a
                        href={siteConfig.calendlyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs sm:text-sm font-bold text-teal-600 dark:text-teal-400 hover:underline inline-flex items-center gap-1.5"
                      >
                        <span>Book 15 minutes</span>
                        <svg className="w-3.5 h-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    ) : (
                      <span className="text-xs sm:text-sm font-mono text-[var(--accent)] bg-[var(--accent-subtle)] px-2 py-0.5 rounded break-all">
                        {siteConfig.calendlyUrl}
                      </span>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* Response Promise */}
            <div className="p-4 sm:p-5 rounded-2xl bg-teal-500/10 dark:bg-teal-400/15 border border-teal-500/20 text-xs text-[var(--text-secondary)]">
              <span className="font-bold text-teal-800 dark:text-teal-300 block mb-1">
                Guaranteed Response Time
              </span>
              <span className="font-medium">{siteConfig.replyTimePromise}</span>
            </div>
          </div>

          {/* Right Column: Netlify Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-5 sm:p-8 md:p-10 rounded-3xl bg-white/95 dark:bg-[#0d121c]/95 border border-slate-200/90 dark:border-slate-800/90 shadow-xl backdrop-blur-xl relative overflow-hidden">
              <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-teal-500/50 to-transparent" />

              <h3 className="text-xl sm:text-2xl font-extrabold text-[var(--text-primary)] mb-5 sm:mb-6">
                Send a Project Inquiry
              </h3>

              {status === "success" ? (
                <div className="p-6 sm:p-8 rounded-2xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-300 dark:border-emerald-800 text-center">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-emerald-100 dark:bg-emerald-900 text-emerald-600 dark:text-emerald-300 mx-auto flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h4 className="text-base sm:text-lg font-bold text-emerald-800 dark:text-emerald-200 mb-1">
                    Message Sent Successfully
                  </h4>
                  <p className="text-xs sm:text-sm text-emerald-700 dark:text-emerald-400">
                    Thank you for reaching out. I will review your requirements and reply shortly.
                  </p>
                </div>
              ) : (
                <form
                  name="contact"
                  method="POST"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                  onSubmit={handleSubmit}
                  className="space-y-4 sm:space-y-5"
                >
                  <input type="hidden" name="form-name" value="contact" />
                  <p className="hidden">
                    <label>
                      Don&apos;t fill this out if you&apos;re human:{" "}
                      <input
                        name="bot-field"
                        value={formData["bot-field"]}
                        onChange={handleChange}
                      />
                    </label>
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-xs font-bold uppercase tracking-wider text-[var(--text-secondary)] mb-1.5 sm:mb-2"
                      >
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Alex Miller"
                        className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-slate-50 dark:bg-[#07090e] border border-slate-200 dark:border-slate-800 text-sm text-[var(--text-primary)] placeholder-[var(--text-tertiary)] focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition-all outline-none"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs font-bold uppercase tracking-wider text-[var(--text-secondary)] mb-1.5 sm:mb-2"
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="alex@company.com"
                        className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-slate-50 dark:bg-[#07090e] border border-slate-200 dark:border-slate-800 text-sm text-[var(--text-primary)] placeholder-[var(--text-tertiary)] focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition-all outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                    <div>
                      <label
                        htmlFor="projectType"
                        className="block text-xs font-bold uppercase tracking-wider text-[var(--text-secondary)] mb-1.5 sm:mb-2"
                      >
                        Project Type
                      </label>
                      <select
                        id="projectType"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-slate-50 dark:bg-[#07090e] border border-slate-200 dark:border-slate-800 text-sm text-[var(--text-primary)] focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition-all outline-none cursor-pointer"
                      >
                        <option value="Mobile App (Flutter)">Mobile App (Flutter)</option>
                        <option value="Business App / Portal">Business App / Portal</option>
                        <option value="MVP Build">MVP Build</option>
                        <option value="Real-Time Audio / Video">Real-Time Audio / Video</option>
                        <option value="Backend / API Services">Backend / API Services</option>
                        <option value="Maintenance & Add-Ons">Maintenance & Add-Ons</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="budget"
                        className="block text-xs font-bold uppercase tracking-wider text-[var(--text-secondary)] mb-1.5 sm:mb-2"
                      >
                        Estimated Budget
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-slate-50 dark:bg-[#07090e] border border-slate-200 dark:border-slate-800 text-sm text-[var(--text-primary)] focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition-all outline-none cursor-pointer"
                      >
                        <option value="<$2,000">&lt; $2,000</option>
                        <option value="$2,000 - $5,000">$2,000 - $5,000</option>
                        <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                        <option value="$10,000+">$10,000+</option>
                        <option value="To be discussed">To be discussed</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs font-bold uppercase tracking-wider text-[var(--text-secondary)] mb-1.5 sm:mb-2"
                    >
                      Project Overview &amp; Timeline
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Briefly describe what you are looking to build, milestones, target devices..."
                      className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-slate-50 dark:bg-[#07090e] border border-slate-200 dark:border-slate-800 text-sm text-[var(--text-primary)] placeholder-[var(--text-tertiary)] focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition-all outline-none resize-none"
                    />
                  </div>

                  {status === "error" && (
                    <p className="text-xs text-red-500 font-medium">
                      Failed to send message. Please email directly at {siteConfig.email}.
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-500 hover:to-emerald-500 text-white text-sm font-bold shadow-lg shadow-teal-500/25 hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all disabled:opacity-50 border border-teal-400/20 cursor-pointer"
                  >
                    {status === "submitting" ? "Sending inquiry..." : "Send Project Inquiry"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
