import React from "react";
import { Briefcase, Calendar, MapPin } from "lucide-react";

interface Experience {
  company: string;
  position: string;
  period: string;
  location: string;
  description: string[];
  technologies: string[];
}

export const ExperienceFeature: React.FC = () => {
  const experiences: Experience[] = [
    {
      company: "Walmart Chile - Global Tech",
      position: "Software Engineer III",
      period: "Sept 2024 - Present",
      location: "Santiago, Chile (Remote)",
      description: [
        "Full-stack development for customer journey (homepage → cart) serving 50K+ daily users across 4 markets",
        "Led Quantum Metric analytics integration coordinating with international teams (MX, CA, US)",
        "Migrating legacy Lider.cl features to Walmart.com standards in shared NX monorepo",
        "Managing monthly production deployments with documentation, security approvals, and rollback procedures",
        "Implementing comprehensive testing strategies ensuring multi-tenant compatibility",
      ],
      technologies: [
        "Next.js",
        "TypeScript",
        "GraphQL",
        "NX Monorepo",
        "Module Federation",
        "Jest",
      ],
    },
    {
      company: "EKORU",
      position: "Co-Founder & Lead Engineer",
      period: "Apr 2025 - Present",
      location: "Santiago, Chile",
      description: [
        "Architecting sustainable marketplace platform as sole developer (beta launch April 2026)",
        "Implementing microservices with NestJS, Apollo Federation, GraphQL, and PostgreSQL",
        "Designed environmental impact scoring system using recursive CTEs across 15+ product categories",
        "Built multi-language infrastructure supporting Spanish, English, and French",
        "Managing complete development stack: Docker, CI/CD pipelines, IONOS cloud infrastructure",
      ],
      technologies: [
        "NestJS",
        "GraphQL Federation",
        "Prisma",
        "PostgreSQL",
        "Next.js",
        "Docker",
      ],
    },
    {
      company: "Agrosat",
      position: "Full Stack Developer",
      period: "Apr 2023 - Sept 2024",
      location: "Santiago, Chile",
      description: [
        "Refactored legacy React dashboards from class components to modern functional components with hooks",
        "Developed React Native mobile applications (Agrobooks) from scratch using Expo SDK",
        "Built real-time tractor GPS tracking system using MQTT protocol with map visualizations",
        "Managed end-to-end lifecycle: requirements gathering → development → deployment (App Store, Google Play, AWS)",
        "Created agricultural field data collection apps with offline-first architecture",
      ],
      technologies: [
        "React",
        "React Native",
        "Expo SDK",
        "Node.js",
        "MQTT",
        "MongoDB",
      ],
    },
  ];

  return (
    <div className="space-y-6 animate-fadeIn">
      <h2 className="flex items-center gap-2 mb-4 text-gray-500">
        <Briefcase size={16} />
        <span className="text-sm uppercase tracking-wider">
          PROFESSIONAL_EXPERIENCE
        </span>
      </h2>

      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <article
            key={index}
            className="bg-slate-800/30 border border-slate-700/50 rounded-lg p-6 hover:border-cyan-500/50 transition-all"
          >
            <header className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold text-cyan-400 mb-1">
                  {exp.position}
                </h3>
                <p className="text-lg text-gray-300 mb-2">{exp.company}</p>
              </div>
              <div className="flex flex-col md:items-end gap-1 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <Calendar size={14} />
                  <span>{exp.period}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={14} />
                  <span>{exp.location}</span>
                </div>
              </div>
            </header>

            <ul className="space-y-2 mb-4">
              {exp.description.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-gray-300">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2">
              {exp.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-slate-700/50 border border-slate-600 rounded text-xs text-gray-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};
