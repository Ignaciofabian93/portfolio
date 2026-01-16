import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title:
    "Ignacio - Full-Stack Software Engineer | Next.js, GraphQL & Microservices",
  description:
    "Full-Stack Software Engineer with 5+ years of experience specializing in Next.js, GraphQL, and Microservices. Building scalable solutions at Walmart Global Tech. Co-Founder & CTO at Ekoru. Available for opportunities in Canada.",
  keywords: [
    "Full-Stack Engineer",
    "Next.js",
    "GraphQL",
    "Microservices",
    "React",
    "Node.js",
    "TypeScript",
    "AWS",
    "Docker",
    "Kubernetes",
  ],
  authors: [{ name: "Ignacio Rodríguez" }],
  openGraph: {
    title: "Ignacio - Full-Stack Software Engineer",
    description:
      "Full-Stack Software Engineer specializing in Next.js, GraphQL, and Microservices. Building scalable solutions at Walmart Global Tech.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ignacio - Full-Stack Software Engineer",
    description:
      "Full-Stack Software Engineer specializing in Next.js, GraphQL, and Microservices.",
  },
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Ignacio Rodríguez",
    jobTitle: "Full-Stack Software Engineer",
    description:
      "Full-Stack Software Engineer with 5+ years of experience specializing in Next.js, GraphQL, and Microservices",
    worksFor: {
      "@type": "Organization",
      name: "Walmart Global Tech",
    },
    alumniOf: {
      "@type": "Organization",
      name: "Ekoru",
    },
    knowsAbout: [
      "Next.js",
      "React",
      "GraphQL",
      "TypeScript",
      "Node.js",
      "Microservices",
      "AWS",
      "Docker",
      "Kubernetes",
      "NestJS",
      "PostgreSQL",
    ],
    sameAs: [
      "https://github.com/Ignaciofabian93",
      "https://www.linkedin.com/in/ignacio-rodríguez-rulas/",
    ],
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={`${jetbrainsMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
