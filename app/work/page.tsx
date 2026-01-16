import Link from "next/link";
import { ArrowLeft, Briefcase } from "lucide-react";
import { TerminalHeader } from "../components/TerminalHeader";

export default function WorkPage() {
  const experiences = [
    {
      slug: "walmart",
      company: "Walmart Chile",
      position: "Software Engineer III",
      period: "Sept 2024 - Present",
      description:
        "Developing and maintaining Chile market features in shared codebase. Ensuring multi-tenant compatibility across CL, MX, CA, US through comprehensive functional and e2e testing",
      borderColor: "rgb(59 130 246 / 0.5)", // blue-500/50
    },
    {
      slug: "ekoru",
      company: "EKORU",
      position: "Co-Founder & Lead Engineer",
      period: "Apr 2025 - Present",
      description:
        "Architecting sustainable marketplace with microservices and GraphQL Federation",
      borderColor: "rgb(34 197 94 / 0.5)", // green-500/50
    },
    {
      slug: "agrosat",
      company: "Agrosat",
      position: "Full Stack Developer",
      period: "Apr 2023 - Sept 2024",
      description:
        "Built agricultural analytics dashboards and mobile apps processing 100GB+ satellite data",
      borderColor: "rgb(239 68 68 / 0.5)", // red-500/50
    },
    {
      slug: "freelance",
      company: "Freelance",
      position: "Full Stack Developer",
      period: "Aug 2020 - Apr 2023",
      description:
        "Delivered custom web applications for various clients. Built responsive SPAs, REST APIs, and integrated third-party services",
      borderColor: "rgb(6 182 212 / 0.5)", // cyan-500/50
    },
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-950 via-slate-900 to-slate-950 text-gray-100">
      <TerminalHeader />

      <main className="max-w-6xl mx-auto px-6 pt-24 pb-12">
        {/* Back Link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 mb-8 transition-colors"
        >
          <ArrowLeft size={20} />
          <span>Back to Portfolio</span>
        </Link>

        {/* Header */}
        <section className="mb-12">
          <h1 className="flex items-center gap-3 text-4xl font-bold mb-4">
            <Briefcase className="text-cyan-400" size={32} />
            <span>Professional Experience</span>
          </h1>
          <p className="text-gray-400 text-lg">
            5+ years building scalable applications at enterprise and startup
            level
          </p>
        </section>

        {/* Experience List */}
        <section className="space-y-6 mb-8">
          {experiences.map((exp) => (
            <Link
              key={exp.slug}
              href={`/work/${exp.slug}`}
              className="block bg-slate-800/30 border rounded-lg p-6 hover:bg-slate-800/50 transition-all group"
              style={{ borderColor: exp.borderColor }}
            >
              <div className="flex items-start gap-6">
                {/* Content */}
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-cyan-400 mb-1 group-hover:text-cyan-300 transition-colors">
                    {exp.position}
                  </h2>
                  <p className="text-lg text-gray-300 mb-2">{exp.company}</p>
                  <p className="text-sm text-gray-400 mb-3">{exp.period}</p>
                  <p className="text-gray-300">{exp.description}</p>

                  <div className="mt-4 text-cyan-400 group-hover:text-cyan-300 flex items-center gap-1 transition-colors">
                    <span>Read more</span>
                    <span className="group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </section>
      </main>
    </div>
  );
}
