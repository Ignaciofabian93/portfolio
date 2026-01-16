import Link from "next/link";
import { ArrowLeft, Calendar, Code, Briefcase } from "lucide-react";
import { TerminalHeader } from "../../components/TerminalHeader";

export default function FreelancePage() {
  const technologies = [
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "PostgreSQL",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "AWS",
    "REST APIs",
    "JWT Auth",
    "Stripe",
  ];

  const projectTypes = [
    {
      title: "E-commerce Platforms",
      description:
        "Built custom online stores with payment integration, inventory management, and admin dashboards",
      count: "5+ projects",
    },
    {
      title: "Business Websites",
      description:
        "Developed responsive corporate websites with CMS integration for easy content management",
      count: "10+ projects",
    },
    {
      title: "SaaS Applications",
      description:
        "Created subscription-based web applications with authentication, billing, and user management",
      count: "3 projects",
    },
    {
      title: "REST APIs",
      description:
        "Built backend APIs for mobile apps and third-party integrations with comprehensive documentation",
      count: "8+ APIs",
    },
    {
      title: "Landing Pages",
      description:
        "Designed and developed high-converting landing pages with analytics integration",
      count: "15+ pages",
    },
    {
      title: "Dashboard Applications",
      description:
        "Created admin panels and analytics dashboards with data visualization",
      count: "4 projects",
    },
  ];

  const services = [
    "Full-stack web application development",
    "REST API design and implementation",
    "Database design and optimization",
    "Third-party service integration (Stripe, SendGrid, etc.)",
    "Authentication and authorization systems",
    "Responsive UI/UX implementation",
    "Performance optimization and SEO",
    "Deployment and hosting setup",
  ];

  const achievements = [
    "Delivered 40+ projects successfully across various industries",
    "Maintained 95% client satisfaction rate with repeat business",
    "Built scalable solutions that grew with client businesses",
    "Integrated payment systems processing $100K+ in transactions",
    "Reduced client operational costs through automation",
    "Provided ongoing support and maintenance for long-term clients",
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
            <div className="w-24 h-24 bg-slate-900 border-2 border-cyan-500/30 rounded-lg flex items-center justify-center overflow-hidden">
              <img
                src="/terminal.png"
                alt="Terminal"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-cyan-400 mb-2">
                Freelance Full Stack Developer
              </h1>
              <p className="text-2xl text-gray-300">Independent Contractor</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-6 text-gray-400">
            <div className="flex items-center gap-2">
              <Calendar size={18} className="text-cyan-400" />
              <span>2020 - 2023</span>
            </div>
            <div className="flex items-center gap-2">
              <Briefcase size={18} className="text-cyan-400" />
              <span>40+ Projects Delivered</span>
            </div>
          </div>
        </div>

        {/* Overview */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-cyan-400">Overview</h2>
          <div className="bg-slate-800/30 border border-cyan-500/30 rounded-lg p-6">
            <p className="text-gray-300 leading-relaxed mb-4">
              Worked as an independent full-stack developer delivering custom
              web solutions for clients across various industries. Specialized
              in building responsive web applications, REST APIs, and
              integrating third-party services to solve business problems.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Managed the entire development lifecycle from requirements
              gathering and design to deployment and maintenance, ensuring
              clients received scalable and maintainable solutions.
            </p>
          </div>
        </section>

        {/* Project Types */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-cyan-400">
            Project Types
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {projectTypes.map((project, idx) => (
              <div
                key={idx}
                className="bg-slate-800/30 border border-cyan-500/30 rounded-lg p-6"
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-semibold text-cyan-400">
                    {project.title}
                  </h3>
                  <span className="text-xs bg-cyan-500/20 text-cyan-400 px-2 py-1 rounded">
                    {project.count}
                  </span>
                </div>
                <p className="text-gray-300 text-sm">{project.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Services Provided */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-cyan-400">
            Services Provided
          </h2>
          <div className="bg-slate-800/30 border border-cyan-500/30 rounded-lg p-6">
            <ul className="grid md:grid-cols-2 gap-3">
              {services.map((service, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">▸</span>
                  <span className="text-gray-300">{service}</span>
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

        {/* Achievements */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-cyan-400">
            Key Achievements
          </h2>
          <div className="bg-slate-800/30 border border-cyan-500/30 rounded-lg p-6">
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

        {/* Client Industries */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-cyan-400">
            Industries Served
          </h2>
          <div className="bg-slate-800/30 border border-cyan-500/30 rounded-lg p-6">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-center">
              <div className="py-3">
                <div className="text-2xl mb-1">🛒</div>
                <div className="text-gray-300 text-sm">E-commerce</div>
              </div>
              <div className="py-3">
                <div className="text-2xl mb-1">🏢</div>
                <div className="text-gray-300 text-sm">Corporate</div>
              </div>
              <div className="py-3">
                <div className="text-2xl mb-1">🎓</div>
                <div className="text-gray-300 text-sm">Education</div>
              </div>
              <div className="py-3">
                <div className="text-2xl mb-1">🏥</div>
                <div className="text-gray-300 text-sm">Healthcare</div>
              </div>
              <div className="py-3">
                <div className="text-2xl mb-1">🎨</div>
                <div className="text-gray-300 text-sm">Creative</div>
              </div>
              <div className="py-3">
                <div className="text-2xl mb-1">💼</div>
                <div className="text-gray-300 text-sm">Consulting</div>
              </div>
            </div>
          </div>
        </section>

        {/* Working Style */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-cyan-400">
            Working Style
          </h2>
          <div className="bg-slate-800/30 border border-cyan-500/30 rounded-lg p-6 space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-cyan-400 mb-2">
                Client Communication
              </h3>
              <p className="text-gray-300">
                Maintained regular communication with clients through video
                calls, project management tools, and detailed progress reports.
                Ensured requirements were clearly understood before development.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-cyan-400 mb-2">
                Agile Approach
              </h3>
              <p className="text-gray-300">
                Worked in iterative cycles with frequent demos and feedback
                sessions. Delivered working software early and incorporated
                client feedback throughout the development process.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-cyan-400 mb-2">
                Quality Assurance
              </h3>
              <p className="text-gray-300">
                Implemented comprehensive testing strategies, performed code
                reviews, and ensured cross-browser compatibility. Provided
                documentation and training for client teams.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
