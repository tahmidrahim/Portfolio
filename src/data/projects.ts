import { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "business-management-remodeling-app",
    title: "Business Management App for Barrera's Remodeling Inc",
    subtitle:
      "Cross-platform Flutter app with separate admin and client roles, project tracking, photo updates, material selection, and Firebase backend.",
    category: "Mobile App",
    client: "Barrera's Remodeling Inc (San Diego, CA)",
    featured: true,
    summary: [
      "Cross-platform Flutter application built with separate admin and client roles.",
      "Features client and project management, photo updates, documents, and material selection.",
      "Firebase Auth, Firestore, and Storage with milestone delivery, working builds, and full handoff.",
    ],
    techChips: ["Flutter", "Dart", "Firebase Auth", "Firestore", "Firebase Storage"],
    problem:
      "Barrera's Remodeling Inc (a licensed San Diego home remodeling contractor) managed high-value kitchen, bathroom, roofing, and flooring renovations across multiple active job sites. Communicating project progress, sharing daily on-site photos, tracking material finishes, and collecting change order approvals over disparate phone calls and text threads caused operational friction and client uncertainty.",
    built: [
      "Cross-platform Flutter mobile application for iOS and Android",
      "Separate authentication portals ('For Clients' & 'For Contractors') with Google and Apple sign-in",
      "Admin Operations Dashboard with active project counts, estimates sent, approvals, and revenue totals",
      "Client Portal Dashboard featuring live project completion percentages and quick-action toolbars",
      "Detailed project tracking with address, estimated completion dates, and overall project value",
      "On-site photo progress timeline with category filters (All, Progress, Before, After)",
      "Interactive material catalog with quantity calculators and client approval flows",
      "Central document vault for estimates, contracts, change orders, invoices, and warranties",
      "Milestone payment tracker displaying balances due and payment proof uploads",
      "Digital change order approval workflow with itemized cost transparency",
      "Delivered in clear milestones with a working build at each stage and complete Firebase handoff",
    ],
    technicalDecisions: [
      "Role-Based Firebase Architecture: Designed custom Firestore security rules and authentication claims separating client views from contractor administration to ensure strict data segregation.",
      "Milestone-Driven State Management: Implemented reactive state providers for real-time progress calculations, cached photo streams, and offline-capable material selection flows.",
      "Optimized Storage Pipelines: Structured multi-stage photo uploads (Before, Framing, Tile, Rough-in, After) using Firebase Storage with automated image compression to save mobile bandwidth.",
    ],
    results:
      "Unified all client communication, photo updates, and material selections into a single branded mobile app. Eliminated project milestone confusion, streamlined change order approvals, and gave contractor operations immediate visibility over active jobs and payment statuses.",
    clientQuote:
      "A dedicated client portal and mobile app that modernized our job-site updates, estimates, and client material approvals across San Diego County.",
    thumbnail: "/assets/thumbnails/barrera.jpg",
    screenshots: [
      {
        src: "/assets/barrera/admin-dashboard.png",
        alt: "Admin Dashboard screen for Barrera's Remodeling App",
        caption: "Admin Dashboard - Project oversight, revenue metrics, and team management",
      },
      {
        src: "/assets/barrera/client-dashboard.png",
        alt: "Client Dashboard screen showing project progress",
        caption: "Client Dashboard - Real-time project progress tracking and quick actions",
      },
      {
        src: "/assets/barrera/project-tracker.png",
        alt: "Project Tracker screen with photo updates and documents",
        caption: "Project Details - Start dates, completion milestones, and value tracking",
      },
      {
        src: "/assets/barrera/material-selection.png",
        alt: "Material Selection interface screen",
        caption: "Material Selection - Client finish approvals, square footage, and pricing",
      },
    ],
  },
  {
    slug: "propvault-ai",
    title: "PropVault AI",
    subtitle:
      "Real estate asset management and portfolio analytics web platform.",
    category: "Web & Backend",
    client: "Independent Project",
    featured: false,
    summary: [
      "Real estate asset management and portfolio tracking web application.",
      "Features portfolio valuation metrics, rental yields, and automated property insights.",
      "Live web application built with modern MERN stack and deployed on Netlify.",
    ],
    techChips: ["React", "Node.js", "Express", "MongoDB"],
    problem:
      "Property managers and multi-property real estate investors often struggle with fragmented spreadsheets, delayed rental income tracking, and a lack of automated valuation insights. PropVault AI was engineered to consolidate asset monitoring, calculate ongoing yields, and deliver actionable portfolio health metrics in a clean web dashboard.",
    built: [
      "Real estate property portfolio tracker with total valuation and YTD growth analytics",
      "Rental yield performance monitoring and monthly revenue breakdown charts",
      "Property status workflows (Rented, Vacant, Under Maintenance)",
      "AI property insights and neighborhood market trend notifications",
      "Responsive web interface with dark mode aesthetics and instant filtering",
    ],
    technicalDecisions: [
      "RESTful API Architecture: Built scalable Node.js/Express endpoints for property metadata, yield calculations, and valuation history.",
      "Modular Component Design: Built reusable React card components and charts for real-time asset monitoring.",
    ],
    results:
      "Deployed a responsive property management web platform demonstrating end-to-end full stack proficiency.",
    thumbnail: "/assets/thumbnails/propvault.jpg",
    screenshots: [
      {
        src: "/assets/propvault/dashboard.png",
        alt: "PropVault AI Web Application Interface",
        caption: "PropVault AI - Portfolio value, rental yields, and AI insights",
      },
    ],
    liveDemoUrl: "https://real-estate-management01.netlify.app/",
  },
  {
    slug: "ai-vision-scanner-ocr",
    title: "AI Vision Scanner / OCR",
    subtitle:
      "Mobile document scanner and optical character recognition utility app.",
    category: "Mobile App",
    client: "Independent Project",
    featured: false,
    summary: [
      "Mobile optical character recognition and document scanner application.",
      "On-device visual document processing and structured text extraction.",
      "Built with Flutter for smooth cross-platform camera and image capture.",
    ],
    techChips: ["Flutter", "Dart", "On-Device OCR"],
    problem:
      "Manual document transcription and receipt scanning are prone to input mistakes and data security concerns when sending private records to cloud APIs. This utility provides professionals with an on-device camera scanner that instantly isolates documents, runs local optical character recognition, and exports clean formatted text without cloud dependency.",
    built: [
      "Real-time camera document viewfinder with edge detection and perspective correction",
      "On-device optical character recognition detecting text blocks with high accuracy",
      "Interactive text extraction bottom sheet allowing inline edits and cleanup",
      "One-tap export options to searchable PDF and formatted TXT files",
      "Local history storage for scanned documents and invoices",
    ],
    technicalDecisions: [
      "On-Device Machine Learning: Utilized local on-device ML Kit vision models for zero-latency scanning without sending private documents over external servers.",
      "Reactive Camera Bridging: Implemented high-performance Flutter camera stream listeners for real-time bounding box rendering.",
    ],
    results:
      "Engineered an offline-first mobile utility achieving sub-second text recognition from receipts, invoices, and business contracts.",
    thumbnail: "/assets/thumbnails/ocr.jpg",
    screenshots: [
      {
        src: "/assets/ocr/scanner.png",
        alt: "AI Vision Scanner OCR Screen",
        caption: "AI Vision Scanner - Document detection and structured text extraction",
      },
    ],
  },
  {
    slug: "real-time-audio-video",
    title: "Real-Time Voice, Video & Party Apps",
    subtitle:
      "Interactive voice rooms, live streaming, and group video party applications.",
    category: "Real-Time Audio/Video",
    client: "Independent Implementations",
    featured: false,
    summary: [
      "Multi-user interactive voice rooms and real-time audio channels.",
      "Low-latency live video streaming and interactive video party sessions.",
      "Engineered with Agora, LiveKit, and WebRTC protocols.",
    ],
    techChips: ["Agora", "LiveKit", "WebRTC", "Flutter", "Node.js"],
    problem:
      "Interactive audio/video experiences require synchronization under volatile mobile network conditions, handling speaker state, audio ducking, token permissions, and low latency across global participants simultaneously.",
    built: [
      "Interactive voice stage supporting active speaker detection with glowing visual indicators",
      "Dynamic audience grid supporting hundreds of synchronized listeners with emoji reactions",
      "Token-authenticated channel admission preventing unauthorized room intrusions",
      "Seamless mute/unmute, raise-hand queues, and co-host elevation workflows",
      "Low-latency audio and video packet routing optimized for fluctuating mobile bandwidth",
    ],
    technicalDecisions: [
      "WebRTC & SFU Architecture: Leveraged LiveKit and Agora SFU (Selective Forwarding Unit) topologies to minimize mobile device CPU usage and battery drain.",
      "Token-Based Channel Security: Built Node.js backend token generation services enforcing expiring cryptographic session keys.",
    ],
    results:
      "Delivered production-grade real-time voice and video experiences with sub-200ms latency across mobile connections.",
    thumbnail: "/assets/thumbnails/realtime.jpg",
    screenshots: [
      {
        src: "/assets/realtime/voice-room.png",
        alt: "Real-Time Voice Room Interface",
        caption: "Developer Discussion Lounge - Live voice stage and audience grid (LiveKit / Agora)",
      },
    ],
  },
  {
    slug: "university-companion-app",
    title: "University Companion & Campus Portal",
    subtitle:
      "Cross-platform mobile application for university course schedules, notices, and academic resource tracking.",
    category: "Mobile App",
    client: "Academic & Campus Project",
    featured: false,
    summary: [
      "Student academic portal mobile application built with Flutter.",
      "Features course schedules, routine tracking, campus notices, and academic materials.",
      "Open-source repository available on GitHub.",
    ],
    techChips: ["Flutter", "Dart", "Firebase", "SQLite"],
    problem:
      "University students frequently deal with fragmented course announcements across messaging apps, scattered PDF syllabus files, and unpredictable class schedule updates. This companion application consolidates academic notices, routines, and materials into an intuitive mobile interface.",
    built: [
      "Interactive course timetable and lecture schedule notifications",
      "Real-time campus notice board synced with Firebase Cloud Messaging",
      "Offline syllabus and lecture notes caching with SQLite",
      "Clean UI following Material Design principles with dark mode support",
    ],
    technicalDecisions: [
      "Offline-First Architecture: Cached academic schedules and documents locally in SQLite with background Firebase synchronization.",
      "State Management with Provider: Decoupled UI state from database queries for swift screen transitions.",
    ],
    results:
      "Published a complete, open-source university companion application demonstrating end-to-end Flutter development.",
    thumbnail: "/assets/thumbnails/university.jpg",
    screenshots: [
      {
        src: "/assets/thumbnails/university.jpg",
        alt: "University Companion Mobile App Screen",
        caption: "Campus Student Portal - Schedules, routine tracking, and academic updates",
      },
    ],
    repoUrl: "https://github.com/tahmidrahim/University-App",
  },
];
