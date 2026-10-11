import { ProcessStep } from "@/types";

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Scope & Milestones",
    description:
      "We define exact project requirements, data flows, and screen deliverables. The project is split into predictable milestones with clear acceptance criteria.",
    guarantee: "No vague promises: every milestone has a fixed deliverable checklist.",
  },
  {
    number: "02",
    title: "Build with Working Demos",
    description:
      "I develop the frontend app and backend services concurrently. At the completion of each milestone, you get a testable working build to test on your own device.",
    guarantee: "You see actual working software at every stage, not just mockups.",
  },
  {
    number: "03",
    title: "Test & Polish",
    description:
      "Rigorous quality assurance across mobile device form factors, edge network conditions, authentication flows, and error boundaries before launch.",
    guarantee: "Zero unresolved regressions; reliable offline/online state handling.",
  },
  {
    number: "04",
    title: "Complete Handoff",
    description:
      "I deliver clean, well-commented source code, invite you as admin to your Firebase/cloud backend, transfer repository ownership, and provide setup documentation.",
    guarantee: "You own 100% of your code and backend credentials with zero vendor lock-in.",
  },
];
