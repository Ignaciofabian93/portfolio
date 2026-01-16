import Link from "next/link";
import { ArrowLeft, Briefcase } from "lucide-react";
import { TerminalHeader } from "../components/TerminalHeader";
import Image from "next/image";

export default function WorkPage() {
  const experiences = [
    {
      slug: "walmart",
      company: "Walmart Chile",
      position: "Software Engineer III",
      period: "Sept 2024 - Present",
      description:
        "Developing and maintaining Chile market features in shared codebase. Ensuring multi-tenant compatibility across CL, MX, CA, US through comprehensive functional and e2e testing",
      logo: "/walmart-logo.webp",
      color: "border-blue-500/50",
    },
    {
      slug: "ekoru",
      company: "Ekoru",
      position: "Co-Founder & Lead Engineer",
      period: "Apr 2025 - Present",
      description:
        "Architecting sustainable marketplace with microservices and GraphQL Federation",
      logo: "/ekoru-logo.webp",
      color: "border-green-500/50",
    },
    {
      slug: "agrosat",
      company: "Agrosat",
      position: "Full Stack Developer",
      period: "Apr 2023 - Sept 2024",
      description:
        "Built agricultural analytics dashboards processing 100GB+ satellite data",
      logo: "/agrosat-logo.webp",
      color: "border-red-500/50",
    },
    {
      slug: "freelance",
      company: "Freelance",
      position: "Full Stack Developer",
      period: "2020 - 2023",
      description:
        "Delivered custom web applications for various clients. Built responsive SPAs, REST APIs, and integrated third-party services",
      logo: "/freelance-img.webp",
      color: "border-cyan-500/50",
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
        <section className="space-y-6">
          {experiences.map((exp) => (
            <Link
              key={exp.slug}
              href={`/work/${exp.slug}`}
              className={`block bg-slate-800/30 border ${exp.color} rounded-lg p-6 hover:bg-slate-800/50 transition-all group`}
            >
              <div className="flex items-start gap-6">
                {/* Logo */}
                <div className="shrink-0 w-20 h-20 bg-white rounded-lg flex items-center justify-center overflow-hidden">
                  <Image
                    width={200}
                    height={100}
                    src={exp.logo}
                    alt={`${exp.company} logo`}
                    className="w-10/12 h-10/12 object-contain p-2"
                  />
                </div>

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

        {/* Stats Section */}
        <section className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="bg-slate-800/30 border border-cyan-500/30 rounded-lg p-6">
            <div className="text-3xl font-bold text-cyan-400 mb-2">5+</div>
            <div className="text-gray-400">Years Experience</div>
          </div>
          <div className="bg-slate-800/30 border border-cyan-500/30 rounded-lg p-6">
            <div className="text-3xl font-bold text-cyan-400 mb-2">4</div>
            <div className="text-gray-400">Companies</div>
          </div>
          <div className="bg-slate-800/30 border border-cyan-500/30 rounded-lg p-6">
            <div className="text-3xl font-bold text-cyan-400 mb-2">20+</div>
            <div className="text-gray-400">Projects Delivered</div>
          </div>
        </section>
      </main>
    </div>
  );
}
