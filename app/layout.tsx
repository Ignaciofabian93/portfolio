import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const siteUrl = "https://ignaciorodriguez.dev";
const siteName = "Ignacio Rodríguez";
const siteTitle =
  "Ignacio Rodríguez - Full-Stack Software Engineer | Next.js, GraphQL & Microservices Expert";
const siteDescription =
  "Senior Full-Stack Software Engineer with 5+ years of experience at Walmart Global Tech. Expert in Next.js, GraphQL Federation, Microservices, and cloud architecture. Co-Founder & CTO at Ekoru. Open to opportunities in Canada (Vancouver/Toronto).";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  keywords: [
    // Core Skills
    "Full-Stack Engineer",
    "Software Engineer",
    "Full-Stack Software Developer",
    // Frontend
    "Next.js Developer",
    "React Developer",
    "TypeScript",
    "TailwindCSS",
    "Frontend Architecture",
    // Backend
    "GraphQL Federation",
    "NestJS",
    "Node.js",
    "Microservices Architecture",
    "RESTful APIs",
    // Database & Infrastructure
    "PostgreSQL",
    "AWS",
    "Docker",
    "Kubernetes",
    // Tools & Practices
    "CI/CD",
    "Git",
    "Agile",
    "System Design",
    // Companies & Location
    "Walmart Global Tech",
    "Ekoru",
    "Chile",
    "Canada Immigration",
    "Remote Developer",
    // Specific Technologies
    "Apollo GraphQL",
    "NX Monorepo",
    "Quantum Metric",
    "Analytics Integration",
  ],
  authors: [
    {
      name: "Ignacio Fabián Rodríguez Rulas",
      url: siteUrl,
    },
  ],
  creator: "Ignacio Rodríguez",
  publisher: "Ignacio Rodríguez",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: siteName,
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Ignacio Rodríguez - Full-Stack Software Engineer",
        type: "image/png",
      },
      {
        url: `${siteUrl}/ignacio.png`,
        width: 800,
        height: 800,
        alt: "Ignacio Rodríguez Profile Picture",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: [`${siteUrl}/og-image.png`],
    creator: "@ignaciofabian93", // Actualiza con tu handle de Twitter si lo tienes
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: siteUrl,
  },
  verification: {
    google: "your-google-verification-code", // Agregar después de verificar en Google Search Console
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${siteUrl}/#person`,
        name: "Ignacio Fabián Rodríguez Rulas",
        alternateName: "Ignacio Rodríguez",
        description: siteDescription,
        url: siteUrl,
        image: {
          "@type": "ImageObject",
          url: `${siteUrl}/ignacio.png`,
          width: 800,
          height: 800,
        },
        jobTitle: "Full-Stack Software Engineer",
        worksFor: [
          {
            "@type": "Organization",
            name: "Walmart Global Tech",
            sameAs: "https://tech.walmart.com/",
          },
          {
            "@type": "Organization",
            name: "Ekoru",
            sameAs: "https://www.ekoru.cl",
            foundingDate: "2024",
            founder: {
              "@id": `${siteUrl}/#person`,
            },
          },
        ],
        knowsAbout: [
          "Next.js",
          "React",
          "GraphQL Federation",
          "TypeScript",
          "Node.js",
          "NestJS",
          "Microservices Architecture",
          "AWS",
          "Docker",
          "Kubernetes",
          "PostgreSQL",
          "CI/CD",
          "System Design",
        ],
        sameAs: [
          "https://github.com/Ignaciofabian93",
          "https://www.linkedin.com/in/ignacio-rodríguez-rulas/",
        ],
        address: {
          "@type": "PostalAddress",
          addressLocality: "Santiago",
          addressRegion: "Santiago Metropolitan",
          addressCountry: "CL",
        },
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: siteName,
        description: siteDescription,
        publisher: {
          "@id": `${siteUrl}/#person`,
        },
        inLanguage: "en-US",
      },
      {
        "@type": "WebPage",
        "@id": `${siteUrl}/#webpage`,
        url: siteUrl,
        name: siteTitle,
        isPartOf: {
          "@id": `${siteUrl}/#website`,
        },
        about: {
          "@id": `${siteUrl}/#person`,
        },
        description: siteDescription,
        inLanguage: "en-US",
      },
      {
        "@type": "ProfilePage",
        "@id": `${siteUrl}/#profilepage`,
        mainEntity: {
          "@id": `${siteUrl}/#person`,
        },
        url: siteUrl,
        name: siteTitle,
        description: siteDescription,
      },
    ],
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <meta name="theme-color" content="#0a0a0a" />
        <meta name="msapplication-TileColor" content="#0a0a0a" />
      </head>
      <body className={`${jetbrainsMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
