import { Service } from "@/types";

export const services: Service[] = [
  {
    id: "mvp-build",
    title: "MVP Build",
    description:
      "Turn your product concept into a working mobile app or web MVP. Built in structured milestones with functional demos at each step so you can test early with real users.",
    deliverables: [
      "Cross-platform mobile app (Flutter) or web client",
      "Backend architecture (Firebase or Node.js/Express)",
      "Authentication, database schemas, and cloud storage",
      "Full source code repository and deployment handoff",
    ],
  },
  {
    id: "business-apps",
    title: "Business Apps & Client Portals",
    description:
      "Custom internal operations apps, client portals, and administrative dashboards that replace spreadsheets and manual communication with automated workflows.",
    deliverables: [
      "Role-based access (admin vs. client/technician portals)",
      "Project progress tracking, photo updates, and document sharing",
      "Real-time notifications and status updates",
      "Admin web/mobile control panels with full database access",
    ],
  },
  {
    id: "addons-maintenance",
    title: "Add-Ons & Maintenance",
    description:
      "Expand an existing codebase with specialized features or keep your production applications stable, updated, and performant as your business grows.",
    deliverables: [
      "Real-time audio/video integration (Agora, LiveKit, WebRTC)",
      "Third-party REST API and payment gateway integrations",
      "Native device bridging (Kotlin MethodChannel/EventChannel)",
      "Bug fixes, dependency updates, and database maintenance",
    ],
  },
];
