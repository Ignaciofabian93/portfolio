import Link from "next/link";
import {
  ArrowLeft,
  Calendar,
  MapPin,
  Code,
  Rocket,
  ExternalLink,
} from "lucide-react";
import { TerminalHeader } from "../../components/TerminalHeader";

export default function EkoruPage() {
  const technologies = [
    "NestJS",
    "GraphQL Federation",
    "Prisma",
    "PostgreSQL",
    "Next.js",
    "TypeScript",
    "Docker",
    "React",
    "Microservices",
    "Zustand",
    "JWT Authentication",
  ];

  const features = [
    {
      title: "Multi-language Catalog System",
      description:
        "Building comprehensive product catalog with i18n infrastructure supporting multiple languages (Spanish, English, French). Designed for easy expansion to additional markets without code changes",
    },
    {
      title: "Vendor Management Platform",
      description:
        "Developing vendor and admin portals with inventory tracking, product management, and analytics dashboard (in progress)",
    },
    {
      title: "GraphQL Federation Gateway",
      description:
        "Architected federated GraphQL API enabling seamless communication between microservices with type-safe schema stitching",
    },
    {
      title: "Authentication & Authorization",
      description:
        "Implemented JWT-based authentication system with role-based access control for users, vendors, and administrators",
    },
    {
      title: "Product Catalog Service",
      description:
        "Built microservice handling product CRUD operations, category management, and multi-language content with PostgreSQL",
    },
    {
      title: "Environmental Impact Tracking",
      description:
        "Designed hierarchical database system calculating measurable environmental metrics (carbon footprint, water usage, recyclability) across 15+ product categories with category-specific factors",
    },
  ];

  const achievements = [
    "Architected complete microservices ecosystem from scratch",
    "Implemented GraphQL Federation for seamless service communication",
    "Designed hierarchical environmental impact scoring system with PostgreSQL recursive CTEs",
    "Built category-specific sustainability metrics for 15+ product types",
    "Designed environmental score calculation system with on-demand computation",
    "Built multi-language infrastructure supporting Spanish, English, and French (expandable)",
    "Established DevOps practices with Docker containerization",
    "Designed database schema handling complex product relationships and environmental data",
    "Set up CI/CD pipelines with GitHub Actions for automated testing and deployment",
    "Implementing vendor and admin portal for collecting sustainability data",
  ];

  const inProgress = [
    {
      feature: "Payment Integration",
      status: "Planned",
      description:
        "Secure payment processing with Chilean providers (Transbank, Mercado Pago)",
    },
    {
      feature: "Order Management System",
      status: "Planned",
      description:
        "End-to-end order processing with status tracking and notifications",
    },
    {
      feature: "Vendor Dashboard",
      status: "In progress",
      description: "Complete vendor portal for inventory and sales management",
    },
    {
      feature: "Kubernetes Orchestration",
      status: "Planned",
      description:
        "Migration from Docker Compose to Kubernetes for production scaling",
    },
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-950 via-slate-900 to-slate-950 text-gray-100">
      <TerminalHeader />

      <main className="max-w-4xl mx-auto px-8 pt-24 pb-12">
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
          <div className="flex flex-row items-center gap-6 mb-8">
            <div className="text-left">
              <h1 className="text-4xl font-bold text-green-400 mb-2">
                Co-Founder & Lead Engineer
              </h1>
              <p className="text-2xl text-gray-300">EKORU</p>
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
              <span>Beta Launch: April 2026</span>
            </div>
          </div>
        </div>

        {/* Agregar después de la línea 88, después del Header */}
        <div className="mb-8 flex flex-wrap gap-4">
          <Link
            href="https://www.ekoru.cl"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-green-500/20 
               border border-green-500/50 rounded-lg text-green-400 
               hover:bg-green-500/30 transition-colors font-semibold"
          >
            <ExternalLink size={18} />
            <span>Visit Landing Page</span>
          </Link>

          <span className="inline-flex items-center gap-2 px-4 py-3 text-gray-400 text-sm">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            Platform in active development
          </span>
        </div>

        {/* Overview */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-green-400">Overview</h2>
          <div className="bg-slate-800/30 border border-green-500/30 rounded-lg p-4">
            <p className="text-gray-300 leading-relaxed mb-4">
              As Co-Founder and Lead Engineer at EKORU, I&apos;m building a
              sustainable marketplace platform from scratch that connects
              eco-conscious consumers with environmentally responsible vendors.
              The platform focuses on promoting sustainable products while
              providing a seamless shopping experience.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              Currently architecting the entire technical infrastructure as sole
              technical developer (alongside 2 business co-founders) using
              modern microservices architecture with GraphQL Federation,
              ensuring scalability and maintainability as the platform grows.
              The system is designed to support multiple languages and markets
              from day one.
            </p>
            <p className="text-gray-300 leading-relaxed">
              <strong className="text-green-400">Current Stage:</strong>{" "}
              Building MVP for beta launch in April 2026 with core features
              (catalog, vendor onboarding, environmental scoring). Full
              e-commerce functionality (payments, orders) planned for production
              launch in October 2026.{" "}
              <Link
                href="https://www.ekoru.cl"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 hover:text-green-300 underline ml-1"
              >
                Visit our landing page
              </Link>{" "}
              to learn more about the vision.
            </p>
          </div>
        </section>

        {/* Key Features Built */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-green-400">
            Features Completed & In Development
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="bg-slate-800/30 border border-green-500/30 rounded-lg px-4 py-4"
              >
                <h3 className="text-lg font-semibold text-green-400 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-300 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* In Progress Features */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-yellow-400">
            Roadmap & In Progress
          </h2>
          <div className="space-y-3">
            {inProgress.map((item, idx) => (
              <div
                key={idx}
                className="bg-slate-800/30 border border-yellow-500/30 rounded-lg px-4 py-4"
              >
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-semibold text-yellow-400">
                    {item.feature}
                  </h3>
                  <span className="text-xs px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-full">
                    {item.status}
                  </span>
                </div>
                <p className="text-gray-300 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Achievements */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-green-400">
            Technical Achievements
          </h2>
          <div className="bg-slate-800/30 border border-green-500/30 rounded-lg px-4 py-4">
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
          <div className="bg-slate-800/30 border border-green-500/30 rounded-lg px-4 py-4 space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-green-400 mb-2">
                Microservices Design
              </h3>
              <p className="text-gray-300">
                Building independent services for catalog, authentication, and
                future services (orders, payments, vendors), each with its own
                database and API. Services communicate through GraphQL
                Federation, enabling independent scaling and deployment.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-green-400 mb-2">
                Database Strategy
              </h3>
              <p className="text-gray-300">
                Using PostgreSQL with Prisma ORM for type-safe database access.
                Designed schema to handle complex product relationships,
                multi-language content, hierarchical categories, and
                environmental data with efficient querying using recursive CTEs.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-green-400 mb-2">
                DevOps & Infrastructure
              </h3>
              <p className="text-gray-300">
                Containerized all services with Docker and Docker Compose for
                development and staging environments. Implemented CI/CD
                pipelines with GitHub Actions for automated testing and
                deployment. Kubernetes orchestration planned for production
                scaling.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-green-400 mb-2">
                Frontend Architecture
              </h3>
              <p className="text-gray-300">
                Next.js application with server-side rendering for optimal SEO
                and performance. Internationalization (i18n) infrastructure
                supporting Spanish, English, and French with easy expansion to
                additional languages.
              </p>
            </div>
          </div>
        </section>

        {/* Environmental Impact System */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-green-400">
            Environmental Impact Tracking System
          </h2>

          <div className="bg-slate-800/30 border border-green-500/30 rounded-lg px-4 py-4 space-y-6">
            {/* Overview */}
            <div>
              <h3 className="text-lg font-semibold text-green-400 mb-3">
                Measurable Environmental Impact
              </h3>
              <p className="text-gray-300 mb-4">
                Designed and implemented a comprehensive environmental impact
                scoring system that quantifies the sustainability of products
                across multiple categories. The system uses a hierarchical
                database structure with PostgreSQL recursive CTEs to track and
                calculate environmental metrics at product, subcategory, and
                category levels.
              </p>
            </div>

            {/* Technical Implementation */}
            <div className="bg-slate-900/50 border border-green-500/20 rounded-lg px-4 py-4">
              <h4 className="text-md font-semibold text-green-400 mb-3">
                Technical Implementation
              </h4>

              {/* Database Schema */}
              <div className="mb-4">
                <p className="text-gray-400 text-sm font-mono mb-2">
                  Database Schema:
                </p>
                <div className="bg-slate-950 rounded p-3 text-sm font-mono">
                  <p className="text-cyan-400">Category</p>
                  <p className="text-gray-400 ml-4">
                    ↳ environmental_impact_factors (JSON)
                  </p>
                  <p className="text-gray-400 ml-4">
                    ↳ sustainability_metrics (JSON)
                  </p>
                  <p className="text-cyan-400 mt-2">SubCategory</p>
                  <p className="text-gray-400 ml-4">
                    ↳ inherits parent category factors (via recursive CTE)
                  </p>
                  <p className="text-gray-400 ml-4">
                    ↳ category-specific overrides available
                  </p>
                  <p className="text-cyan-400 mt-2">Product</p>
                  <p className="text-gray-400 ml-4">
                    ↳ computed_impact_score (0-100, calculated on-demand)
                  </p>
                  <p className="text-gray-400 ml-4">
                    ↳ impact_breakdown (detailed metrics)
                  </p>
                </div>
              </div>

              {/* What is Recursive CTE */}
              <div className="mb-4 bg-cyan-500/10 border border-cyan-500/30 rounded px-4 py-2">
                <p className="text-cyan-400 text-sm font-semibold mb-1">
                  💡 What is Recursive CTE?
                </p>
                <p className="text-gray-300 text-xs">
                  A Common Table Expression (CTE) that references itself to
                  traverse hierarchical data. In EKORU, when a product is in
                  &quot;Android Smartphones&quot;, a recursive CTE walks up the
                  tree (Android → Smartphones → Electronics → Root) to inherit
                  environmental factors from parent categories, with optional
                  overrides at each level.
                </p>
              </div>

              {/* Calculation Logic */}
              <div>
                <p className="text-gray-400 text-sm font-mono mb-2">
                  Impact Calculation:
                </p>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">▸</span>
                    <span>
                      <strong className="text-green-400">
                        Carbon Footprint:
                      </strong>{" "}
                      Calculated based on product materials, production process,
                      and transportation distance
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">▸</span>
                    <span>
                      <strong className="text-green-400">Water Usage:</strong>{" "}
                      Estimated water consumption during manufacturing and
                      product lifecycle
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">▸</span>
                    <span>
                      <strong className="text-green-400">
                        Recyclability Score:
                      </strong>{" "}
                      Product materials recyclability percentage and end-of-life
                      disposal impact
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* User-Facing Features (Planned) */}
            <div>
              <h4 className="text-md font-semibold text-green-400 mb-3">
                User-Facing Impact Dashboard (Planned)
              </h4>
              <div className="bg-slate-900/50 border border-green-500/20 rounded-lg px-4 py-4">
                <p className="text-gray-300 mb-3">
                  Planning interactive dashboard allowing users to:
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">▸</span>
                    <span>
                      <strong>Compare Products:</strong> Side-by-side
                      environmental impact comparison within the same category
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">▸</span>
                    <span>
                      <strong>Track Personal Impact:</strong> Cumulative
                      environmental savings based on sustainable purchases vs.
                      conventional alternatives
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">▸</span>
                    <span>
                      <strong>Filter by Sustainability:</strong> Search and
                      filter products based on specific environmental criteria
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">▸</span>
                    <span>
                      <strong>Educational Tooltips:</strong> Contextual
                      explanations of each environmental metric
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Technical Challenges */}
            <div>
              <h4 className="text-md font-semibold text-green-400 mb-3">
                Technical Challenges Solved
              </h4>
              <div className="space-y-3">
                <div className="bg-slate-900/50 border border-green-500/20 rounded-lg px-4 py-4">
                  <h5 className="text-green-400 font-semibold mb-2">
                    Hierarchical Data Inheritance with Recursive CTEs
                  </h5>
                  <p className="text-gray-300 text-sm">
                    Implemented efficient PostgreSQL queries with recursive
                    Common Table Expressions to inherit environmental factors
                    from parent categories while allowing subcategory-specific
                    overrides. Optimized query performance with proper indexing
                    on category hierarchy and materialized paths.
                  </p>
                </div>

                <div className="bg-slate-900/50 border border-green-500/20 rounded-lg p-4">
                  <h5 className="text-green-400 font-semibold mb-2">
                    Multi-language Data Architecture
                  </h5>
                  <p className="text-gray-300 text-sm">
                    Architected internationalization (i18n) system for
                    environmental impact descriptions, category names, and
                    tooltips. Currently supporting Spanish, English, and French
                    (using AI translation tools for French) with infrastructure
                    designed for easy expansion to additional languages without
                    database schema changes.
                  </p>
                </div>

                <div className="bg-slate-900/50 border border-green-500/20 rounded-lg p-4">
                  <h5 className="text-green-400 font-semibold mb-2">
                    Scalable Microservices with GraphQL Federation
                  </h5>
                  <p className="text-gray-300 text-sm">
                    Architected federated GraphQL schema allowing independent
                    microservices to expose their own types and resolvers. Each
                    service owns its domain (catalog, auth, future: orders,
                    payments) and can be developed, tested, and deployed
                    independently without affecting others. When adding a new
                    service, only the gateway configuration requires updating -
                    existing services remain untouched. This separation enables
                    parallel development and reduces deployment risk.
                  </p>
                </div>
              </div>
            </div>

            {/* Impact Metrics */}
            <div className="bg-green-500/10 border border-green-500/30 rounded-lg px-4 py-4">
              <h4 className="text-md font-semibold text-green-400 mb-3">
                Target Metrics (Beta Launch)
              </h4>
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <p className="text-3xl font-bold text-green-400">500+</p>
                  <p className="text-gray-300 text-sm">
                    Products with impact scores for beta
                  </p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-green-400">15+</p>
                  <p className="text-gray-300 text-sm">
                    Product categories with custom environmental metrics
                  </p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-green-400">3</p>
                  <p className="text-gray-300 text-sm">
                    Languages supported (ES, EN, FR)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Current Status */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-green-400">
            Project Status & Timeline
          </h2>
          <div className="space-y-4">
            {/* Beta Launch */}
            <div className="bg-green-500/10 border border-green-500/30 rounded-lg px-4 py-4 md:px-6 md:py-6">
              <div className="flex items-start gap-3">
                <Rocket className="text-green-400 shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="text-lg font-semibold text-green-400 mb-2">
                    Beta Launch - April 2026
                  </h3>
                  <p className="text-gray-300 mb-3">
                    Minimum Viable Product with core functionality: product
                    catalog, vendor onboarding, environmental impact scoring,
                    and basic search/filtering. Focus on validating market fit
                    and gathering user feedback.
                  </p>
                  <p className="text-gray-400 text-sm">
                    <strong>Beta Features:</strong> Catalog browsing, vendor
                    listings, sustainability scores, multi-language support,
                    user accounts (no payments yet)
                  </p>
                  <p className="text-gray-400 text-sm mt-3">
                    📍{" "}
                    <Link
                      href="https://www.ekoru.cl"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-400 hover:text-green-300 underline"
                    >
                      Visit www.ekoru.cl
                    </Link>{" "}
                    to learn more about our mission and vision
                  </p>
                </div>
              </div>
            </div>

            {/* Production Launch */}
            <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg px-4 py-4 md:px-6 md:py-6">
              <div className="flex items-start gap-3">
                <Rocket className="text-blue-400 shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="text-lg font-semibold text-blue-400 mb-2">
                    Full Production Launch - October 2026 (Target)
                  </h3>
                  <p className="text-gray-300 mb-3">
                    Complete e-commerce platform with payment processing, order
                    management, vendor dashboards, and enhanced security
                    features. Migration to Kubernetes for production-grade
                    orchestration.
                  </p>
                  <p className="text-gray-400 text-sm">
                    <strong>Additional Features:</strong> Transbank/Mercado Pago
                    integration, order tracking, vendor analytics, customer
                    reviews, advanced admin tools
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
