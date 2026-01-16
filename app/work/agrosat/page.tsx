import Link from "next/link";
import { ArrowLeft, Calendar, MapPin, Code, Satellite } from "lucide-react";
import { TerminalHeader } from "../../components/TerminalHeader";

export default function AgrosatPage() {
  const technologies = [
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "Python",
    "AWS S3",
    "D3.js",
    "Chart.js",
    "TypeScript",
    "Redis",
  ];

  const features = [
    {
      title: "Satellite Data Processing",
      description:
        "Built pipelines to process and analyze 100GB+ of satellite imagery data for agricultural insights",
    },
    {
      title: "Interactive Dashboards",
      description:
        "Developed real-time analytics dashboards with custom visualizations for crop monitoring",
    },
    {
      title: "API Development",
      description:
        "Created RESTful APIs for data access, processing, and third-party integrations",
    },
    {
      title: "Data Visualization",
      description:
        "Implemented advanced charting and mapping solutions using D3.js for geographic data",
    },
    {
      title: "Performance Optimization",
      description:
        "Optimized database queries and implemented caching strategies for large datasets",
    },
    {
      title: "Cloud Infrastructure",
      description:
        "Set up AWS infrastructure for data storage, processing, and application hosting",
    },
  ];

  const achievements = [
    "Processed and analyzed 100GB+ of satellite imagery data",
    "Built responsive dashboards handling real-time agricultural metrics",
    "Optimized data queries reducing load time by 60%",
    "Implemented caching layer with Redis for frequently accessed data",
    "Developed custom map visualizations for geographic crop analysis",
    "Created automated data ingestion pipelines from satellite sources",
    "Collaborated with agronomists to translate data into actionable insights",
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
                src="/agrosat-logo.png"
                alt="Agrosat logo"
                className="w-full h-full object-contain p-2"
              />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-red-400 mb-2">
                Full Stack Developer
              </h1>
              <p className="text-2xl text-gray-300">Agrosat</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-6 text-gray-400">
            <div className="flex items-center gap-2">
              <Calendar size={18} className="text-red-400" />
              <span>Apr 2023 - Sept 2024</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={18} className="text-red-400" />
              <span>Santiago, Chile</span>
            </div>
            <div className="flex items-center gap-2">
              <Satellite size={18} className="text-red-400" />
              <span>AgriTech Industry</span>
            </div>
          </div>
        </div>

        {/* Overview */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-red-400">Overview</h2>
          <div className="bg-slate-800/30 border border-red-500/30 rounded-lg p-6">
            <p className="text-gray-300 leading-relaxed mb-4">
              At Agrosat, I worked on building agricultural analytics platforms
              that processed massive amounts of satellite imagery data to
              provide farmers and agronomists with actionable insights about
              crop health, irrigation needs, and field conditions.
            </p>
            <p className="text-gray-300 leading-relaxed">
              The role involved handling large-scale data processing, building
              interactive dashboards, and creating visualizations that made
              complex agricultural data accessible and actionable for
              non-technical users.
            </p>
          </div>
        </section>

        {/* Key Features Built */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-red-400">
            Key Projects & Features
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="bg-slate-800/30 border border-red-500/30 rounded-lg p-6"
              >
                <h3 className="text-lg font-semibold text-red-400 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-300 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Achievements */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-red-400">
            Key Achievements
          </h2>
          <div className="bg-slate-800/30 border border-red-500/30 rounded-lg p-6">
            <ul className="space-y-3">
              {achievements.map((achievement, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">▸</span>
                  <span className="text-gray-300">{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Technologies */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-red-400 flex items-center gap-2">
            <Code size={24} />
            Technologies Used
          </h2>
          <div className="flex flex-wrap gap-3">
            {technologies.map((tech, idx) => (
              <span
                key={idx}
                className="px-4 py-2 bg-slate-800/50 border border-red-500/30 rounded-lg text-red-400 text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Technical Challenges */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-red-400">
            Technical Challenges Solved
          </h2>
          <div className="bg-slate-800/30 border border-red-500/30 rounded-lg p-6 space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-red-400 mb-2">
                Large Data Handling
              </h3>
              <p className="text-gray-300">
                Implemented efficient data processing pipelines to handle 100GB+
                of satellite imagery. Used chunking strategies and background
                jobs to process data without blocking the application.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-red-400 mb-2">
                Performance Optimization
              </h3>
              <p className="text-gray-300">
                Reduced dashboard load times by 60% through database query
                optimization, implementing Redis caching for frequently accessed
                data, and using pagination for large datasets.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-red-400 mb-2">
                Data Visualization
              </h3>
              <p className="text-gray-300">
                Created custom map visualizations using D3.js to display
                geographic crop data with color-coded health indicators,
                allowing farmers to identify problem areas quickly.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-red-400 mb-2">
                Cloud Infrastructure
              </h3>
              <p className="text-gray-300">
                Set up AWS S3 for efficient satellite data storage and
                implemented automated data ingestion pipelines that processed
                new imagery daily.
              </p>
            </div>
          </div>
        </section>

        {/* Impact */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-red-400">Impact</h2>
          <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-6">
            <p className="text-gray-300 leading-relaxed">
              The dashboards and analytics tools I built helped farmers and
              agronomists make data-driven decisions about irrigation, pest
              control, and harvest timing. The platform processed data for
              thousands of hectares of farmland, contributing to more efficient
              water usage and improved crop yields.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
