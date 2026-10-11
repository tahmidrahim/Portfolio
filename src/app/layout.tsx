import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/data/siteConfig";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: siteConfig.metaTitle,
  description: siteConfig.metaDescription,
  metadataBase: new URL(siteConfig.siteUrl),
  keywords: [
    "mobile app developer",
    "Flutter",
    "Firebase",
    "Node.js",
    "Dart",
    "client portal",
    "admin dashboard",
    "MVP developer",
    "Bangladesh",
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.siteUrl }],
  creator: siteConfig.name,
  openGraph: {
    title: siteConfig.metaTitle,
    description: siteConfig.metaDescription,
    url: siteConfig.siteUrl,
    siteName: `${siteConfig.name} - Portfolio`,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.metaTitle,
    description: siteConfig.metaDescription,
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLdPerson = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    jobTitle: "Mobile App Developer",
    address: {
      "@type": "PostalAddress",
      addressCountry: "Bangladesh",
    },
    url: siteConfig.siteUrl,
    sameAs: [
      siteConfig.links.github,
      siteConfig.links.linkedin,
    ],
    knowsAbout: [
      "Flutter",
      "Dart",
      "Firebase",
      "Node.js",
      "REST APIs",
      "Docker",
      "Real-Time Video/Audio",
    ],
  };

  const jsonLdService = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: `${siteConfig.name} - Mobile App Development`,
    description: siteConfig.metaDescription,
    provider: {
      "@type": "Person",
      name: siteConfig.name,
    },
    areaServed: "Worldwide",
    serviceType: [
      "Mobile App Development",
      "MVP Development",
      "Client Portals & Admin Dashboards",
      "Backend & Cloud Services",
    ],
  };

  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${inter.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark')
                } else {
                  document.documentElement.classList.remove('dark')
                }
              } catch (_) {}
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdPerson) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdService) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[var(--bg-primary)] text-[var(--text-primary)] antialiased transition-colors">
        {/* Netlify static hidden form definition required for static site export detection */}
        <form
          name="contact"
          data-netlify="true"
          netlify-honeypot="bot-field"
          hidden
        >
          <input type="text" name="name" />
          <input type="email" name="email" />
          <select name="projectType">
            <option value="Mobile App (Flutter)">Mobile App (Flutter)</option>
            <option value="Business App / Portal">Business App / Portal</option>
            <option value="MVP Build">MVP Build</option>
            <option value="Real-Time Audio / Video">Real-Time Audio / Video</option>
            <option value="Backend / API Services">Backend / API Services</option>
            <option value="Maintenance & Add-Ons">Maintenance & Add-Ons</option>
          </select>
          <select name="budget">
            <option value="To be discussed">To be discussed</option>
            <option value="<$1,000">&lt; $1,000</option>
            <option value="$1,000 - $2,500">$1,000 - $2,500</option>
            <option value="$2,500 - $5,000">$2,500 - $5,000</option>
            <option value="$5,000+">$5,000+</option>
          </select>
          <textarea name="message"></textarea>
          <input type="hidden" name="bot-field" />
        </form>

        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
