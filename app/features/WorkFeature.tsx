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
      name: "Ekoru Marketplace",
      role: "Co-Founder & CTO",
      description: "Sustainable marketplace with multi-language catalog system",
      fullDescription: [
        "Built a comprehensive marketplace platform focused on sustainable and eco-friendly products",
        "Implemented GraphQL Federation for seamless microservices communication",
        "Developed multi-language support for Spanish and English markets",
        "Created vendor management system with inventory tracking",
        "Integrated payment processing and order management systems",
      ],
      tech: [
        "NestJS",
        "GraphQL Federation",
        "Prisma",
        "PostgreSQL",
        "Next.js",
        "Microservices",
      ],
      status: "Launching Apr 2026",
      statusColor: "yellow",
      link: "https://ekoru.com",
    },
    {
      name: "Walmart Chile Features",
      role: "Software Engineer III",
      description:
        "Migration and customization of US features for Chilean market",
      fullDescription: [
        "Led the adaptation of Walmart US e-commerce features for the Chilean market",
        "Implemented locale-specific features including currency, payment methods, and shipping",
        "Built reusable component library used across multiple Walmart LATAM sites",
        "Optimized bundle size and improved Core Web Vitals scores",
        "Established testing framework with 85% code coverage",
      ],
      tech: [
        "Next.js",
        "NX Monorepo",
        "GraphQL",
        "TypeScript",
        "React Query",
        "Jest",
      ],
      status: "Production",
      statusColor: "green",
    },
    {
      name: "Real-Time Analytics Dashboard",
      role: "Lead Developer",
      description:
        "Enterprise analytics platform with real-time data visualization",
      fullDescription: [
        "Developed real-time analytics dashboard processing 10K+ events per second",
        "Implemented WebSocket connections for live data updates",
        "Created customizable widgets and dashboard builder",
        "Integrated with multiple data sources and APIs",
        "Built export functionality for reports in multiple formats",
      ],
      tech: ["React", "D3.js", "Socket.io", "Node.js", "Redis", "MongoDB"],
      status: "Production",
      statusColor: "green",
      github: "https://github.com/yourusername/analytics-dashboard",
    },
    {
      name: "API Gateway & Microservices",
      role: "Backend Architect",
      description: "Scalable microservices architecture with API gateway",
      fullDescription: [
        "Designed and implemented microservices architecture for e-commerce platform",
        "Built API gateway handling authentication, rate limiting, and routing",
        "Implemented service mesh for inter-service communication",
        "Set up monitoring and logging with Prometheus and Grafana",
        "Established CI/CD pipelines for automated testing and deployment",
      ],
      tech: [
        "Node.js",
        "Express",
        "Docker",
        "Kubernetes",
        "PostgreSQL",
        "RabbitMQ",
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
