import React from "react";
import { HeroSection } from "@/components/sections/HeroSection";
import { FeaturedProjectSection } from "@/components/sections/FeaturedProjectSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { SelectedWorkSection } from "@/components/sections/SelectedWorkSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { TechStackSection } from "@/components/sections/TechStackSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function HomePage() {
  return (
    <div className="w-full">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Featured Case Study */}
      <FeaturedProjectSection />

      {/* 3. Services */}
      <ServicesSection />

      {/* 4. Selected Work */}
      <SelectedWorkSection />

      {/* 5. How I Work (Process) */}
      <ProcessSection />

      {/* 6. About */}
      <AboutSection />

      {/* 7. Tools and Stack */}
      <TechStackSection />

      {/* 8. FAQ */}
      <FaqSection />

      {/* 9. Contact */}
      <ContactSection />
    </div>
  );
}
