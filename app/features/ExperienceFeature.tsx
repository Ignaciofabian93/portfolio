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
      company: "Walmart Global Tech",
      position: "Software Engineer III",
      period: "Jul 2022 - Present",
      location: "Santiago, Chile",
      description: [
        "Architected and developed features for Walmart Chile marketplace using Next.js and GraphQL",
        "Led migration of US features to Chilean market, adapting to local regulations and user needs",
        "Implemented micro-frontend architecture using NX monorepo with module federation",
        "Optimized performance resulting in 35% faster page load times",
        "Collaborated with cross-functional teams across US and LATAM regions",
      ],
      technologies: [
        "Next.js",
        "TypeScript",
        "GraphQL",
        "NX Monorepo",
        "React",
        "Node.js",
      ],
    },
    {
      company: "Ekoru",
      position: "Co-Founder & CTO",
      period: "Jan 2024 - Present",
      location: "Santiago, Chile",
      description: [
        "Founded sustainable marketplace platform connecting eco-conscious consumers and vendors",
        "Designed and implemented microservices architecture using NestJS and GraphQL Federation",
        "Built multi-language catalog system supporting Spanish and English markets",
        "Established DevOps practices with Docker, Kubernetes, and CI/CD pipelines",
        "Leading technical strategy and team of 3 developers",
      ],
      technologies: [
        "NestJS",
        "GraphQL Federation",
        "Prisma",
        "PostgreSQL",
        "Docker",
        "Kubernetes",
      ],
    },
    {
      company: "Previous Company",
      position: "Full-Stack Developer",
      period: "Mar 2020 - Jun 2022",
      location: "Santiago, Chile",
      description: [
        "Developed RESTful APIs and web applications using MERN stack",
        "Implemented authentication and authorization systems with JWT",
        "Created responsive UI components with React and Tailwind CSS",
        "Integrated third-party payment gateways and APIs",
        "Mentored junior developers and conducted code reviews",
      ],
      technologies: ["React", "Node.js", "Express", "MongoDB", "AWS", "Redis"],
    },
  ];

  return (
    <div className="space-y-6 animate-fadeIn">
      <div className="flex items-center gap-2 mb-4 text-gray-500">
        <Briefcase size={16} />
        <span className="text-sm uppercase tracking-wider">
          PROFESSIONAL_EXPERIENCE
        </span>
      </div>

      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="bg-slate-800/30 border border-slate-700/50 rounded-lg p-6 hover:border-cyan-500/50 transition-all"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
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
            </div>

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
          </div>
        ))}
      </div>
    </div>
  );
};
