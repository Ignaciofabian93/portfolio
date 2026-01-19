import React from "react";
import { Briefcase, ExternalLink, Github } from "lucide-react";

interface Project {
  name: string;
  role: string;
  description: string;
  fullDescription: string[];
  tech: string[];
  status: string;
  statusColor: "green" | "blue" | "yellow";
  link?: string;
  github?: string;
}

export const WorkFeature: React.FC = () => {
  const projects: Project[] = [
    {
      name: "Ekoru - Sustainable Marketplace",
      role: "Co-Founder & Lead Engineer",
      description:
        "Environmental marketplace with impact tracking across 15+ product categories",
      fullDescription: [
        "Architecting complete platform as sole developer using microservices architecture",
        "Implemented GraphQL Federation connecting 4+ independent services",
        "Designed hierarchical environmental impact scoring with PostgreSQL recursive CTEs",
        "Built multi-language catalog system (Spanish, English, French) with i18n infrastructure",
        "Managing DevOps: Docker containerization, GitHub Actions CI/CD, IONOS cloud deployment",
      ],
      tech: [
        "NestJS",
        "GraphQL Federation",
        "Prisma",
        "PostgreSQL",
        "Next.js",
        "TypeScript",
        "Docker",
      ],
      status: "Beta Launch Apr 2026",
      statusColor: "yellow",
      link: "https://www.ekoru.cl",
    },
    {
      name: "Walmart Chile - Quantum Metric Integration",
      role: "Software Engineer III",
      description:
        "Analytics integration enabling data-driven optimization for 50K+ users",
      fullDescription: [
        "Led end-to-end integration without prior documentation or internal support",
        "Coordinated with international teams (MX, CA, US) for code review and architecture approval",
        "Enabled marketing and UX teams to analyze user behavior and reduce cart abandonment",
        "Implemented session tracking and event capturing across micro-frontend architecture",
        "Documented implementation process for future market integrations",
      ],
      tech: [
        "Next.js",
        "TypeScript",
        "Quantum Metric SDK",
        "Module Federation",
        "NX Monorepo",
      ],
      status: "Production",
      statusColor: "green",
    },
    {
      name: "Agrobooks - Field Data Collection",
      role: "Full Stack Developer @ Agrosat",
      description:
        "React Native mobile apps for agricultural field data with offline sync",
      fullDescription: [
        "Developed multiple mobile apps from scratch using React Native and Expo SDK",
        "Implemented offline-first architecture with local storage and background sync",
        "Built camera integration for field evidence capture and documentation",
        "Created data collection forms for planting, harvest, pests, and chemical treatments",
        "Deployed to both App Store and Google Play serving agricultural companies",
      ],
      tech: [
        "React Native",
        "Expo SDK",
        "Offline-First",
        "Camera API",
        "Background Sync",
      ],
      status: "Production",
      statusColor: "green",
    },
  ];

  const getStatusColorClasses = (color: string) => {
    const colors = {
      green: "bg-green-500/10 border-green-500/30 text-green-400",
      blue: "bg-blue-500/10 border-blue-500/30 text-blue-400",
      yellow: "bg-yellow-500/10 border-yellow-500/30 text-yellow-400",
    };
    return colors[color as keyof typeof colors] || colors.green;
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      <h2 className="flex items-center gap-2 mb-4 text-gray-500">
        <Briefcase size={16} />
        <span className="text-sm uppercase tracking-wider">
          FEATURED_PROJECTS
        </span>
      </h2>

      <div className="grid gap-6">
        {projects.map((project, idx) => (
          <article
            key={idx}
            className="bg-slate-800/30 border border-slate-700/50 rounded-lg p-6 hover:border-cyan-500/50 transition-all"
          >
            <div className="flex justify-between items-start mb-3">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-1">
                  <h3 className="text-xl font-bold text-cyan-400">
                    {project.name}
                  </h3>
                  <div className="flex items-center gap-2">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-cyan-400 transition-colors"
                        aria-label="Project Website"
                      >
                        <ExternalLink size={16} />
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-cyan-400 transition-colors"
                        aria-label="GitHub Repository"
                      >
                        <Github size={16} />
                      </a>
                    )}
                  </div>
                </div>
                <p className="text-gray-400 text-sm">{project.role}</p>
              </div>
              <span
                className={`px-3 py-1 border rounded-full text-xs whitespace-nowrap ${getStatusColorClasses(
                  project.statusColor
                )}`}
              >
                {project.status}
              </span>
            </div>

            <p className="text-gray-300 mb-3 font-medium">
              {project.description}
            </p>

            <ul className="space-y-1 mb-4">
              {project.fullDescription.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-sm text-gray-400"
                >
                  <span className="text-cyan-400 mt-0.5">▸</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="px-2 py-1 bg-slate-700/50 border border-slate-600 rounded text-xs"
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
