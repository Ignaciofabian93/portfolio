import Link from "next/link";
import { ArrowLeft, Calendar, MapPin, Users, Code } from "lucide-react";
import { TerminalHeader } from "../../components/TerminalHeader";

export default function WalmartPage() {
  const technologies = [
    "Next.js",
    "TypeScript",
    "GraphQL",
    "NX Monorepo",
    "React",
    "Node.js",
    "Jest",
    "React Query",
    "Micro-frontends",
    "Module Federation",
    "Quantum Metric",
  ];

  const achievements = [
    "Led Quantum Metric analytics integration for Chilean market without prior documentation, coordinating with international teams (MX, CA, US) for code review and approval",
    "Manage monthly production deployments for Chilean market web application, handling documentation, security approvals, deployment execution, and rollback procedures as part of team rotation", // NUEVO
    "Enabled marketing, UX, and product teams to analyze user behavior and web conflicts, contributing to reduced cart abandonment and increased conversion rates",
    "Migrated legacy Lider.cl features to Walmart.com standards across full-stack (frontend + backend)",
    "Maintained shared codebase across 4 international markets (CL, MX, CA, US) ensuring multi-tenant compatibility",
    "Developed and tested features for complete user journey: homepage → navigation → product discovery → cart",
    "Collaborated with international teams positioning Chilean team for direct integration into global development workflows",
  ];
  const responsibilities = [
    {
      title: "User Journey Development",
      description:
        "Full-stack development for complete customer journey from homepage navigation, product browsing, adding to cart - everything before checkout (handled by separate team)",
    },
    {
      title: "Legacy Migration",
      description:
        "Migrating legacy Lider.cl features and business logic to Walmart.com standards, ensuring consistency with international markets while maintaining Chilean market requirements",
    },
    {
      title: "Analytics Integration Leadership",
      description:
        "Led Quantum Metric integration for Chilean market, coordinating with international stakeholders and enabling data-driven decision making for marketing and UX teams",
    },
    {
      title: "Multi-Tenant Architecture",
      description:
        "Working in shared NX monorepo with module federation, ensuring features work seamlessly across CL, MX, CA, and US markets without breaking existing functionality",
    },
  ];

  const keyProjects = [
    {
      title: "Quantum Metric Integration - Chilean Market",
      period: "May 2025",
      description:
        "Led end-to-end integration of Quantum Metric analytics platform for Chilean market scope",
      challenges: [
        "No prior documentation or internal support available",
        "Required coordination with international teams across 3 markets",
        "Complex integration with existing micro-frontend architecture",
      ],
      approach: [
        "Proactively contacted Quantum Metric integration leads from MX, CA, and US teams",
        "Studied their implementations and adapted patterns to Chilean market requirements",
        "Submitted code for international review and incorporated feedback",
        "Documented implementation process for future reference",
      ],
      impact: [
        "Enabled marketing team to analyze user behavior and optimize campaigns",
        "Provided UX team with session replay and heatmap data for design improvements",
        "Identified web conflicts and bottlenecks contributing to cart abandonment",
        "Positioned Chilean team as key contributor to international analytics strategy",
      ],
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
              <h1 className="text-4xl font-bold text-cyan-400 mb-2">
                Software Engineer III
              </h1>
              <p className="text-2xl text-gray-300">
                Walmart Chile - Global Tech
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-6 text-gray-400">
            <div className="flex items-center gap-2">
              <Calendar size={18} className="text-cyan-400" />
              <span>Sept 2024 - Present</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={18} className="text-cyan-400" />
              <span>Santiago, Chile (Remote)</span>
            </div>
            <div className="flex items-center gap-2">
              <Users size={18} className="text-cyan-400" />
              <span>International Team (CL, MX, CA, US)</span>
            </div>
          </div>
        </div>

        {/* Overview */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-cyan-400">Overview</h2>
          <div className="bg-slate-800/30 border border-cyan-500/30 rounded-lg px-4 py-4">
            <p className="text-gray-300 leading-relaxed mb-4">
              As Software Engineer III at Walmart Chile, I work on the customer
              journey team responsible for the complete shopping experience from
              homepage navigation through cart management (pre-checkout). My
              role involves full-stack development in a shared NX monorepo
              serving multiple international markets.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              The primary focus is migrating legacy Lider.cl features to
              Walmart.com standards while maintaining multi-tenant compatibility
              across Chilean, Mexican, Canadian, and US markets. This requires
              careful coordination with international teams and comprehensive
              testing to ensure features work seamlessly across all regions.
            </p>
            <p className="text-gray-300 leading-relaxed">
              <strong className="text-cyan-400">Current Stage:</strong>{" "}
              Successfully migrated majority of legacy features. Chilean team is
              positioned to join international development workflows directly,
              working in unified cross-market teams for future feature
              development.
            </p>
          </div>
        </section>

        {/* Key Project: Quantum Metric */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-cyan-400 flex items-center gap-2">
            Featured Project: Quantum Metric Integration
          </h2>

          {keyProjects.map((project, idx) => (
            <div
              key={idx}
              className="bg-slate-800/30 border border-cyan-500/30 rounded-lg px-4 py-4 space-y-6"
            >
              <div>
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-semibold text-cyan-400">
                    {project.title}
                  </h3>
                  <span className="text-sm px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full">
                    {project.period}
                  </span>
                </div>
                <p className="text-gray-300">{project.description}</p>
              </div>

              {/* Challenge */}
              <div className="bg-slate-900/50 border border-cyan-500/20 rounded-lg px-4 py-4">
                <h4 className="text-md font-semibold text-cyan-400 mb-3">
                  The Challenge
                </h4>
                <ul className="space-y-2 text-gray-300 text-sm">
                  {project.challenges.map((challenge, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-cyan-400">▸</span>
                      <span>{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Approach */}
              <div className="bg-slate-900/50 border border-cyan-500/20 rounded-lg px-4 py-4">
                <h4 className="text-md font-semibold text-cyan-400 mb-3">
                  My Approach
                </h4>
                <ul className="space-y-2 text-gray-300 text-sm">
                  {project.approach.map((step, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-cyan-400">{i + 1}.</span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Impact */}
              <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-lg px-4 py-4">
                <h4 className="text-md font-semibold text-cyan-400 mb-3">
                  Business Impact
                </h4>
                <ul className="space-y-2 text-gray-300 text-sm">
                  {project.impact.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-cyan-400">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technical Details */}
              <div className="bg-slate-900/50 border border-cyan-500/20 rounded-lg px-4 py-4">
                <h4 className="text-md font-semibold text-cyan-400 mb-3">
                  Technical Implementation
                </h4>
                <p className="text-gray-300 text-sm mb-3">
                  Integrated Quantum Metric&apos;s JavaScript SDK into Next.js
                  micro-frontend architecture, ensuring proper initialization
                  across module-federated components. Implemented session
                  tracking, event capturing, and custom data layer integration
                  while maintaining performance and respecting user privacy
                  settings.
                </p>
                <div className="grid md:grid-cols-2 gap-3 text-sm">
                  <div>
                    <p className="text-cyan-400 font-semibold mb-1">
                      Key Features:
                    </p>
                    <ul className="space-y-1 text-gray-300">
                      <li>• Session replay integration</li>
                      <li>• Heatmap data collection</li>
                      <li>• Custom event tracking</li>
                      <li>• Error monitoring</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-cyan-400 font-semibold mb-1">
                      Technical Considerations:
                    </p>
                    <ul className="space-y-1 text-gray-300">
                      <li>• Module federation compatibility</li>
                      <li>• Performance optimization</li>
                      <li>• Privacy compliance</li>
                      <li>• Multi-tenant configuration</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Key Responsibilities */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-cyan-400">
            Core Responsibilities
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {responsibilities.map((resp, idx) => (
              <div
                key={idx}
                className="bg-slate-800/30 border border-cyan-500/30 rounded-lg px-4 py-4"
              >
                <h3 className="text-lg font-semibold text-cyan-400 mb-2">
                  {resp.title}
                </h3>
                <p className="text-gray-300 text-sm">{resp.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Release Management */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-cyan-400">
            Release Management & Production Deployments
          </h2>

          <div className="bg-slate-800/30 border border-cyan-500/30 rounded-lg px-4 py-4">
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-cyan-400 mb-3">
                Production Release Responsibilities
              </h3>
              <p className="text-gray-300 mb-4">
                Team rotates weekly production deployment responsibilities for
                Chilean market web application. Typically perform production
                releases once per month as part of the rotation, managing
                end-to-end deployment process including documentation, security
                approvals, and rollback procedures.
              </p>
            </div>

            <div className="space-y-4">
              {/* Pre-Deployment */}
              <div className="bg-slate-900/50 border border-cyan-500/20 rounded-lg px-4 py-4">
                <h4 className="text-md font-semibold text-cyan-400 mb-3">
                  Pre-Deployment Process
                </h4>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400">▸</span>
                    <span>
                      <strong>Change Documentation:</strong> Complete deployment
                      documentation detailing all changes, version numbers,
                      affected features, and impacted systems
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400">▸</span>
                    <span>
                      <strong>Evidence Collection:</strong> Gather test results,
                      code review approvals, and QA sign-offs demonstrating
                      change validation
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400">▸</span>
                    <span>
                      <strong>Team Coordination:</strong> Document all
                      developers and teams involved in the changes being
                      deployed
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400">▸</span>
                    <span>
                      <strong>Approval Workflow:</strong> Request and obtain
                      approvals from security team and architecture leads before
                      proceeding
                    </span>
                  </li>
                </ul>
              </div>

              {/* Deployment Execution */}
              <div className="bg-slate-900/50 border border-cyan-500/20 rounded-lg px-4 py-4">
                <h4 className="text-md font-semibold text-cyan-400 mb-3">
                  Deployment Execution
                </h4>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400">▸</span>
                    <span>
                      <strong>Production Deployment:</strong> Execute weekly
                      production releases following approved deployment runbooks
                      and procedures
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400">▸</span>
                    <span>
                      <strong>Health Monitoring:</strong> Verify successful
                      deployment through health checks and monitoring dashboards
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400">▸</span>
                    <span>
                      <strong>Performance Validation:</strong> Monitor key
                      metrics (page load times, error rates, user sessions) to
                      ensure production stability
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400">▸</span>
                    <span>
                      <strong>Rollback Execution:</strong> Perform immediate
                      rollback procedures when issues are detected, minimizing
                      user impact and downtime
                    </span>
                  </li>
                </ul>
              </div>

              {/* Post-Deployment */}
              <div className="bg-slate-900/50 border border-cyan-500/20 rounded-lg px-4 py-4">
                <h4 className="text-md font-semibold text-cyan-400 mb-3">
                  Post-Deployment Activities
                </h4>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400">▸</span>
                    <span>
                      <strong>Production Verification:</strong> Validate all
                      deployed features functioning correctly in production
                      environment
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400">▸</span>
                    <span>
                      <strong>Incident Management:</strong> Monitor for
                      production incidents and coordinate with teams for rapid
                      resolution if issues arise
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400">▸</span>
                    <span>
                      <strong>Stakeholder Communication:</strong> Notify
                      relevant teams and stakeholders of successful deployment
                      or any issues encountered
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Key Skills Demonstrated */}
            <div className="mt-4 bg-cyan-500/10 border border-cyan-500/30 rounded-lg px-4 py-4 mt-6">
              <h4 className="text-md font-semibold text-cyan-400 mb-3">
                Skills Demonstrated
              </h4>
              <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-300">
                <div className="space-y-1">
                  <p>✓ Production release management</p>
                  <p>✓ Change documentation & compliance</p>
                  <p>✓ Security approval workflows</p>
                  <p>✓ Stakeholder coordination</p>
                </div>
                <div className="space-y-1">
                  <p>✓ Deployment automation & CI/CD</p>
                  <p>✓ Production monitoring & observability</p>
                  <p>✓ Incident response & rollback procedures</p>
                  <p>✓ Risk management & mitigation</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-cyan-400">
            Key Achievements
          </h2>
          <div className="bg-slate-800/30 border border-cyan-500/30 rounded-lg px-4 py-4">
            <ul className="space-y-3">
              {achievements.map((achievement, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">▸</span>
                  <span className="text-gray-300">{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Technical Context */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-cyan-400">
            Technical Architecture
          </h2>
          <div className="bg-slate-800/30 border border-cyan-500/30 rounded-lg px-4 py-4 space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-cyan-400 mb-2">
                Micro-Frontend Architecture
              </h3>
              <p className="text-gray-300">
                NX monorepo with module federation enabling independent
                micro-frontend deployment while sharing common components and
                utilities across markets. Each market (CL, MX, CA, US) can
                customize features while maintaining core functionality parity.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-cyan-400 mb-2">
                User Journey Scope
              </h3>
              <p className="text-gray-300">
                Responsible for complete pre-checkout experience: homepage
                navigation, category browsing, product search and discovery,
                product detail pages, add-to-cart functionality, and cart
                management. Checkout and payment handled by separate specialized
                team.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-cyan-400 mb-2">
                Testing Strategy
              </h3>
              <p className="text-gray-300">
                Comprehensive multi-tenant testing approach using Jest for unit
                and functional tests, plus end-to-end testing ensuring features
                work correctly across all four markets without breaking existing
                functionality. Special attention to cart abandonment tracking
                and conversion optimization.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-cyan-400 mb-2">
                International Collaboration
              </h3>
              <p className="text-gray-300">
                Daily coordination with cross-functional teams across Chile,
                Mexico, Canada, and United States. Participating in
                international code reviews, sprint planning, and architecture
                discussions. Chilean team transitioning to direct integration
                with global development workflows.
              </p>
            </div>
          </div>
        </section>

        {/* Technologies */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-cyan-400 flex items-center gap-2">
            <Code size={24} />
            Tech Stack
          </h2>
          <div className="flex flex-wrap gap-3">
            {technologies.map((tech, idx) => (
              <span
                key={idx}
                className="px-4 py-2 bg-slate-800/50 border border-cyan-500/30 rounded-lg text-cyan-400 text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Impact Metrics */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-cyan-400">
            Scale & Impact
          </h2>
          <div className="bg-slate-800/30 border border-cyan-500/30 rounded-lg px-4 py-4">
            <div className="grid md:grid-cols-4 gap-6">
              <div>
                <p className="text-3xl font-bold text-cyan-400">50K+</p>
                <p className="text-gray-300 text-sm">
                  Daily active users (Chilean market)
                </p>
              </div>
              <div>
                <p className="text-3xl font-bold text-cyan-400">4</p>
                <p className="text-gray-300 text-sm">
                  International markets (CL, MX, CA, US)
                </p>
              </div>
              <div>
                <p className="text-3xl font-bold text-cyan-400">~12</p>
                <p className="text-gray-300 text-sm">
                  Production deployments managed per year
                </p>
              </div>
              <div>
                <p className="text-3xl font-bold text-cyan-400">100%</p>
                <p className="text-gray-300 text-sm">
                  Successful rollback execution when needed
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
