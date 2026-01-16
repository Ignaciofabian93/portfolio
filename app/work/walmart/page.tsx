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
  ];

  const achievements = [
    "Developed Chile-specific e-commerce features serving 50K+ users",
    "Maintained shared codebase across 4 markets (CL, MX, CA, US)",
    "Implemented comprehensive functional and e2e testing strategies",
    "Ensured multi-tenant compatibility without breaking existing features",
    "Collaborated with international teams across LATAM and US",
  ];

  const responsibilities = [
    {
      title: "Feature Development",
      description:
        "Build and enhance Chile market features in Next.js micro-frontend architecture",
    },
    {
      title: "Code Maintenance",
      description:
        "Maintain and optimize existing features while ensuring backward compatibility",
    },
    {
      title: "Testing & QA",
      description:
        "Write comprehensive functional and e2e tests to validate multi-tenant functionality",
    },
    {
      title: "Cross-Market Support",
      description:
        "Ensure features work seamlessly across CL, MX, CA, and US markets",
    },
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
              <img
                src="/walmart-logo.png"
                alt="Walmart logo"
                className="w-full h-full object-contain p-2"
              />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-cyan-400 mb-2">
                Software Engineer III
              </h1>
              <p className="text-2xl text-gray-300">Walmart Chile</p>
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
              <span>Global Tech Team</span>
            </div>
          </div>
        </div>

        {/* Overview */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-cyan-400">Overview</h2>
          <div className="bg-slate-800/30 border border-slate-700/50 rounded-lg p-6">
            <p className="text-gray-300 leading-relaxed">
              Working as a Software Engineer III at Walmart Chile, I focus on
              developing and maintaining e-commerce features specifically for
              the Chilean market. The role involves working within a shared
              codebase that serves multiple international markets (Chile,
              Mexico, Canada, and United States), requiring careful attention to
              multi-tenant architecture and comprehensive testing to ensure
              feature compatibility across all regions.
            </p>
          </div>
        </section>

        {/* Key Responsibilities */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-cyan-400">
            Key Responsibilities
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {responsibilities.map((resp, idx) => (
              <div
                key={idx}
                className="bg-slate-800/30 border border-slate-700/50 rounded-lg p-6"
              >
                <h3 className="text-lg font-semibold text-cyan-400 mb-2">
                  {resp.title}
                </h3>
                <p className="text-gray-300 text-sm">{resp.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Achievements */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-cyan-400">
            Key Achievements
          </h2>
          <div className="bg-slate-800/30 border border-slate-700/50 rounded-lg p-6">
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

        {/* Technologies */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-cyan-400 flex items-center gap-2">
            <Code size={24} />
            Technologies Used
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

        {/* Technical Context */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-cyan-400">
            Technical Context
          </h2>
          <div className="bg-slate-800/30 border border-slate-700/50 rounded-lg p-6 space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-cyan-400 mb-2">
                Architecture
              </h3>
              <p className="text-gray-300">
                Micro-frontend architecture using NX monorepo with module
                federation, enabling independent deployment of features while
                maintaining shared components.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-cyan-400 mb-2">
                Testing Strategy
              </h3>
              <p className="text-gray-300">
                Comprehensive testing approach including functional tests with
                Jest, e2e tests, and multi-tenant validation to ensure features
                work correctly across all markets without breaking existing
                functionality.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-cyan-400 mb-2">
                Collaboration
              </h3>
              <p className="text-gray-300">
                Work closely with cross-functional teams across Chile, Mexico,
                Canada, and the United States, participating in code reviews,
                sprint planning, and knowledge sharing sessions.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
