# Tahmid Tanjim Rahim - Personal Portfolio

A high-performance, accessible personal portfolio website built with **Next.js 15.5.27**, **TypeScript**, and **Tailwind CSS**. Designed specifically for winning paid projects from founders, small-business owners, and agencies seeking mobile apps (Flutter), client portals, admin dashboards, and full-stack MVPs.

---

## 📌 Framework & Version Pinning
- **Framework**: Next.js App Router
- **Pinned Version**: `next@15.5.27`
- **Output Mode**: Static HTML Export (`output: 'export'`) for instant CDN edge delivery on Netlify.

---

## 🖼️ Image Optimization & Assets Guide

Next.js is configured with `images: { unoptimized: true }` inside `next.config.ts` to enable seamless static export without requiring a Node.js image optimization server runtime.

### Requirements for Supplying Images:
1. **Format**: Please supply images in modern **WebP** (or AVIF/PNG) formats for optimal payload size and sharp rendering.
2. **Dimensions & Layout Shift**: Always supply screenshots with clean 19.5:9 mobile aspect ratios (e.g. `1080x2340` or `1170x2532`, max about 1080px wide). The `PhoneFrame` and `next/image` components use explicit aspect ratios, container sizing, and `loading="lazy"` to guarantee zero Cumulative Layout Shift (CLS).
3. **Screenshot Directories**:
   - `public/assets/headshot.jpg`: Professional headshot photo.
   - `public/assets/barrera/admin-dashboard.png`: Admin operations dashboard.
   - `public/assets/barrera/client-dashboard.png`: Client progress tracker.
   - `public/assets/barrera/project-tracker.png`: Project tracker & documents screen.
   - `public/assets/barrera/material-selection.png`: Material finish & selection screen.
   - `public/assets/propvault/dashboard.png`: PropVault AI web app screenshot.
   - `public/assets/ocr/scanner.png`: AI Vision OCR mobile scanner screenshot.
   - `public/assets/realtime/voice-room.png`: Real-time voice/video application screenshot.

*Note: If an image file is not present, the application gracefully renders a labeled wireframe placeholder inside `PhoneFrame`, preventing broken image icons or visual degradation.*

---

## ✅ Step-by-Step Checklist for Launching Your Site

### 1. How to Add Your Screenshots
- Export screenshots from your Flutter emulator or physical device.
- Convert them to **WebP** format, keeping width at approximately **1080px max** (e.g. `1080x2340`).
- Place the files in their respective folders:
  - `public/assets/barrera/admin-dashboard.png`
  - `public/assets/barrera/client-dashboard.png`
  - `public/assets/barrera/project-tracker.png`
  - `public/assets/barrera/material-selection.png`
  - `public/assets/headshot.jpg` (or webp)
- If a screenshot file is absent, the site automatically renders a clean wireframe placeholder with no layout shifts or broken image icons.

### 2. How to Fill in `src/data/siteConfig.ts`
Open [`src/data/siteConfig.ts`](file:///d:/Development/Portfolio/src/data/siteConfig.ts) and replace the placeholders:
- `email`: Your project inquiry email (e.g. `tahmid@example.com`).
- `whatsapp`: Your international WhatsApp phone number (e.g. `+8801XXXXXXXXX`).
- `calendlyUrl`: Your 15-minute booking URL (e.g. `https://calendly.com/your-handle/15min`).
- `clientReviewSnippet`: A 1-sentence client quote or trust line for the hero section.
- `replyTimePromise`: Your SLA (e.g. `Replies within 24 hours`).
- `overlapHours`: Your working hours that overlap with US/EU timezones (e.g. `2 PM – 10 PM GMT+6 (8 AM – 4 PM UTC)`).

*Note: In development mode, any remaining `[TODO]` contact cards are visible so you can see them. In production builds, any contact link that still contains `[TODO]` is safely hidden to guarantee that broken `mailto:`, `wa.me`, or Calendly links never appear to clients.*

### 3. How to Add a Project in `src/data/projects.ts`
To add a new project, simply append an object to the `projects` array in [`src/data/projects.ts`](file:///d:/Development/Portfolio/src/data/projects.ts):
```ts
{
  slug: "your-project-slug",
  title: "Project Title",
  subtitle: "1-2 sentence subtitle describing the project.",
  category: "Mobile App",
  client: "Client Name or Industry",
  featured: false,
  summary: ["Key highlight 1", "Key highlight 2", "Key highlight 3"],
  techChips: ["Flutter", "Dart", "Firebase"],
  built: ["Feature 1", "Feature 2", "Feature 3"],
  screenshots: [
    {
      src: "/assets/your-folder/screen-1.png",
      alt: "Screen description",
      caption: "Caption under mockup",
    }
  ],
  liveDemoUrl: "https://your-demo-url.com", // Optional: hide if not available
  repoUrl: "https://github.com/...",        // Optional: hide if not available
}
```
The site automatically generates the `/work/[slug]` static route and includes it in `sitemap.xml`!

### 4. How to Run `check:todos:strict` Before Deploying
Before deploying, ensure no unresolved placeholder text ships to production:
```bash
npm run check:todos:strict
```
If any `[TODO` markers remain, the script will print the exact files and lines and exit with an error code, protecting your site from incomplete content.

### 5. How to Deploy to Netlify
1. Connect your GitHub repository to Netlify.
2. In the Netlify build settings:
   - **Build command**: `npm run predeploy && npm run build` (or `npm run build`)
   - **Publish directory**: `out`
3. Netlify automatically detects the static form in `src/app/layout.tsx` and routes incoming submissions to your Netlify Forms inbox.

---

## 🛠️ Development Commands

```bash
# Start local development server
npm run dev

# Run linter (zero warnings)
npm run lint

# Scan for content TODO placeholders
npm run check:todos

# Strict pre-deployment check (fails if any TODO is found)
npm run check:todos:strict

# Run link verification against static export
npm run verify:links

# Build static production export
npm run build
```
