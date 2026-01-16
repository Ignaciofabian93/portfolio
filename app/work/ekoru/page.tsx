import Link from "next/link";
import { ArrowLeft, Calendar, MapPin, Code, Rocket } from "lucide-react";
import { TerminalHeader } from "../../components/TerminalHeader";
import Image from "next/image";

export default function EkoruPage() {
  const technologies = [
    "NestJS",
    "GraphQL Federation",
    "Prisma",
    "PostgreSQL",
    "Next.js",
    "TypeScript",
    "Docker",
    "Kubernetes",
    "React",
    "Microservices",
  ];

  const features = [
    {
      title: "Multi-language Catalog System",
      description:
        "Built comprehensive product catalog supporting Spanish and English markets with seamless language switching",
    },
    {
      title: "Vendor Management Platform",
      description:
        "Developed vendor portal with inventory tracking, product management, and analytics dashboard",
    },
    {
      title: "GraphQL Federation Gateway",
      description:
        "Architected federated GraphQL API enabling seamless communication between microservices",
    },
    {
      title: "Payment Integration",
      description:
        "Integrated secure payment processing with multiple providers for Chilean and international markets",
    },
    {
      title: "Order Management System",
      description:
        "Built end-to-end order processing system with real-time status tracking and notifications",
    },
    {
      title: "Sustainability Scoring",
      description:
        "Developed eco-friendly product scoring system to highlight sustainable choices",
    },
  ];

  const achievements = [
    "Architected complete microservices ecosystem from scratch",
    "Implemented GraphQL Federation for seamless service communication",
    "Built multi-language support for Spanish and English markets",
    "Established DevOps practices with Docker and Kubernetes",
    "Created comprehensive vendor management platform",
    "Designed database schema handling complex product relationships",
    "Set up CI/CD pipelines for automated testing and deployment",
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-950 via-slate-900 to-slate-950 text-gray-100">
      <TerminalHeader />

      <main className="max-w-4xl mx-auto px-6 pt-24 pb-12">
        {/* Back Link */}
        <Link
          href="/work"
          className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 mb-8 transition-colors"
        >
          <ArrowLeft size={20} />
          <span>Back to Work</span>
        </Link>

        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-24 h-24 bg-white rounded-lg flex items-center justify-center overflow-hidden">
              <Image
                src="/ekoru-logo.webp"
                alt="Ekoru logo"
                className="w-full h-full object-contain p-2"
              />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-green-400 mb-2">
                Co-Founder & Lead Engineer
              </h1>
              <p className="text-2xl text-gray-300">Ekoru</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-6 text-gray-400">
            <div className="flex items-center gap-2">
              <Calendar size={18} className="text-green-400" />
              <span>Apr 2025 - Present</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={18} className="text-green-400" />
              <span>Santiago, Chile</span>
            </div>
            <div className="flex items-center gap-2">
              <Rocket size={18} className="text-green-400" />
              <span>Launching April 2026</span>
            </div>
          </div>
        </div>

        {/* Overview */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-green-400">Overview</h2>
          <div className="bg-slate-800/30 border border-green-500/30 rounded-lg p-6">
            <p className="text-gray-300 leading-relaxed mb-4">
              As Co-Founder and Lead Engineer at Ekoru, I&apos;m building a
              sustainable marketplace platform that connects eco-conscious
              consumers with environmentally responsible vendors. The platform
              focuses on promoting sustainable products while providing a
              seamless shopping experience.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Currently architecting the entire technical infrastructure using
              modern microservices architecture with GraphQL Federation,
              ensuring scalability and maintainability as the platform grows.
              The system is designed to support multiple languages and markets
              from day one.
            </p>
          </div>
        </section>

        {/* Key Features Built */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-green-400">
            Key Features Built
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="bg-slate-800/30 border border-green-500/30 rounded-lg p-6"
              >
                <h3 className="text-lg font-semibold text-green-400 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-300 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Achievements */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-green-400">
            Technical Achievements
          </h2>
          <div className="bg-slate-800/30 border border-green-500/30 rounded-lg p-6">
            <ul className="space-y-3">
              {achievements.map((achievement, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">▸</span>
                  <span className="text-gray-300">{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Technologies */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-green-400 flex items-center gap-2">
            <Code size={24} />
            Tech Stack
          </h2>
          <div className="flex flex-wrap gap-3">
            {technologies.map((tech, idx) => (
              <span
                key={idx}
                className="px-4 py-2 bg-slate-800/50 border border-green-500/30 rounded-lg text-green-400 text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Architecture */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-green-400">
            System Architecture
          </h2>
          <div className="bg-slate-800/30 border border-green-500/30 rounded-lg p-6 space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-green-400 mb-2">
                Microservices Design
              </h3>
              <p className="text-gray-300">
                Built independent services for catalog, orders, payments, and
                vendors, each with its own database and API. Services
                communicate through GraphQL Federation, enabling independent
                scaling and deployment.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-green-400 mb-2">
                Database Strategy
              </h3>
              <p className="text-gray-300">
                Using PostgreSQL with Prisma ORM for type-safe database access.
                Designed schema to handle complex product relationships,
                multi-language content, and vendor management.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-green-400 mb-2">
                DevOps & Infrastructure
              </h3>
              <p className="text-gray-300">
                Containerized all services with Docker, orchestrated with
                Kubernetes for easy scaling. Implemented CI/CD pipelines for
                automated testing, building, and deployment.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-green-400 mb-2">
                Frontend Architecture
              </h3>
              <p className="text-gray-300">
                Next.js application with server-side rendering for optimal SEO
                and performance. Multi-language support with seamless switching
                between Spanish and English.
              </p>
            </div>
          </div>
        </section>

        {/* Current Status */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-green-400">
            Project Status
          </h2>
          <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-6">
            <div className="flex items-start gap-3 mb-4">
              <Rocket className="text-green-400 flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="text-lg font-semibold text-green-400 mb-2">
                  Launching April 2026
                </h3>
                <p className="text-gray-300">
                  Currently in active development with core features being
                  finalized. Platform architecture is complete, focusing on
                  onboarding vendors and expanding product catalog. Beta testing
                  phase planned for early 2026.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
