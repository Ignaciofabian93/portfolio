import Link from "next/link";
import { ArrowLeft, Calendar, MapPin, Code, Satellite } from "lucide-react";
import { TerminalHeader } from "../../components/TerminalHeader";

export default function AgrosatPage() {
  const technologies = [
    "React",
    "React Native",
    "Expo SDK",
    "Node.js",
    "Express",
    "MongoDB",
    "PostgreSQL",
    "MQTT Protocol",
    "AWS EC2",
    "Leaflet",
    "Mapbox",
    "TypeScript",
    "Redux",
    "Zustand",
  ];

  const mainProjects = [
    {
      title: "Legacy React Dashboard Modernization",
      type: "Web Application",
      description:
        "Complete refactoring of agricultural monitoring dashboards from class components to modern functional components with hooks",
      details: [
        "Migrated legacy React class components to functional components with hooks",
        "Refactored outdated syntax and improved code quality following modern best practices",
        "Implemented real-time MQTT data integration for tractor GPS tracking in cultivation fields",
        "Built dashboards displaying field worker metrics tracking cultivation-to-harvest lifecycle",
        "Created pest tracking and chemical treatment logging interfaces for agronomists",
      ],
    },
    {
      title: "Agrobooks Mobile Application",
      type: "Mobile Development",
      description:
        "React Native mobile apps for field data collection with image evidence and offline capabilities",
      details: [
        "Developed multiple 'Agrobooks' apps from scratch using React Native with Expo SDK",
        "Modernized existing apps with outdated syntax to current React Native standards",
        "Implemented comprehensive data collection: planting dates, harvest records, pest reports, chemical applications",
        "Built image capture and attachment system for field evidence documentation",
        "Created offline-first architecture syncing data to dashboards when connectivity available",
        "Deployed to both App Store and Google Play Store",
      ],
    },
  ];

  const achievements = [
    "Refactored multiple legacy React dashboards from class components to modern functional components with hooks, improving code maintainability and performance",
    "Built real-time tractor tracking system using MQTT protocol displaying GPS locations on interactive maps for cultivation field monitoring",
    "Developed complete mobile applications (Agrobooks) from requirements gathering through deployment to App Store and Google Play",
    "Created field worker productivity dashboards tracking complete agricultural lifecycle: planting, cultivation, pest management, chemical treatments, and harvest",
    "Implemented image evidence capture and storage system integrated for field documentation",
    "Managed end-to-end deployment process: from requirements to production on Agrosat servers, AWS, and mobile app stores",
    "Worked directly with agronomists to translate field requirements into functional software features",
  ];

  const responsibilities = [
    {
      title: "Legacy Code Modernization",
      description:
        "Complete refactoring of React dashboards with class components and outdated patterns to modern functional components with hooks and current best practices",
    },
    {
      title: "Full-Stack Dashboard Development",
      description:
        "Built agricultural monitoring dashboards integrating MQTT data for real-time GPS tracking, field worker metrics, and cultivation lifecycle management",
    },
    {
      title: "Mobile App Development",
      description:
        "Developed and modernized React Native mobile applications (Agrobooks) for field data collection, image capture, and offline-first data synchronization",
    },
    {
      title: "End-to-End Product Ownership",
      description:
        "Managed complete software lifecycle: requirements gathering, development, testing, and deployment to Agrosat servers, AWS, App Store, and Google Play",
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
          <div className="bg-slate-800/30 border border-red-500/30 rounded-lg px-4 py-4">
            <p className="text-gray-300 leading-relaxed mb-4">
              At Agrosat, I worked as a full-stack developer responsible for
              modernizing legacy agricultural monitoring systems and developing
              new mobile applications for field data collection. The role
              involved both refactoring existing React dashboards with outdated
              practices and building new React Native applications from scratch.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              My work spanned the complete software development lifecycle:
              gathering requirements from agronomists and field workers,
              developing web dashboards and mobile apps, integrating real-time
              data streams (MQTT for GPS tracking), and managing deployments to
              company servers, AWS, and mobile app stores.
            </p>
            <p className="text-gray-300 leading-relaxed">
              The systems I built and modernized helped agricultural companies
              track tractor movements in cultivation fields, monitor field
              worker productivity throughout the cultivation-to-harvest
              lifecycle, and manage pest control and chemical treatment
              documentation with photographic evidence.
            </p>
          </div>
        </section>

        {/* Main Projects */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-red-400">Key Projects</h2>

          {mainProjects.map((project, idx) => (
            <div
              key={idx}
              className="bg-slate-800/30 border border-red-500/30 rounded-lg px-4 py-4 mb-6"
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-xl font-semibold text-red-400 mb-1">
                    {project.title}
                  </h3>
                  <span className="text-sm text-gray-400">{project.type}</span>
                </div>
              </div>

              <p className="text-gray-300 mb-4">{project.description}</p>

              <div className="bg-slate-900/50 border border-red-500/20 rounded-lg px-4 py-4">
                <ul className="space-y-2 text-gray-300 text-sm">
                  {project.details.map((detail, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-red-400">▸</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </section>

        {/* Core Responsibilities */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-red-400">
            Core Responsibilities
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {responsibilities.map((resp, idx) => (
              <div
                key={idx}
                className="bg-slate-800/30 border border-red-500/30 rounded-lg px-4 py-4"
              >
                <h3 className="text-lg font-semibold text-red-400 mb-2">
                  {resp.title}
                </h3>
                <p className="text-gray-300 text-sm">{resp.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Technical Deep Dive */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-red-400">
            Technical Implementation
          </h2>
          <div className="bg-slate-800/30 border border-red-500/30 rounded-lg px-4 py-4 space-y-6">
            {/* React Modernization */}
            <div>
              <h3 className="text-lg font-semibold text-red-400 mb-3">
                React Legacy Modernization
              </h3>
              <div className="bg-slate-900/50 border border-red-500/20 rounded-lg px-4 py-4">
                <p className="text-gray-300 text-sm mb-3">
                  Inherited dashboards built with React class components and
                  outdated patterns. Systematically refactored to modern
                  functional components with hooks.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-2 text-gray-300">
                    <span className="text-red-400">•</span>
                    <span>
                      <strong className="text-red-400">Before:</strong> Class
                      components with lifecycle methods, this.state,
                      componentDidMount
                    </span>
                  </div>
                  <div className="flex items-start gap-2 text-gray-300">
                    <span className="text-red-400">•</span>
                    <span>
                      <strong className="text-red-400">After:</strong>{" "}
                      Functional components with useState, useEffect, custom
                      hooks for reusable logic
                    </span>
                  </div>
                  <div className="flex items-start gap-2 text-gray-300">
                    <span className="text-red-400">•</span>
                    <span>
                      <strong className="text-red-400">Impact:</strong> Improved
                      code maintainability, reduced bundle size, easier testing
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Real-time Tracking */}
            <div>
              <h3 className="text-lg font-semibold text-red-400 mb-3">
                Real-Time GPS Tracking with MQTT
              </h3>
              <div className="bg-slate-900/50 border border-red-500/20 rounded-lg px-4 py-4">
                <p className="text-gray-300 text-sm mb-3">
                  Implemented tractor GPS tracking system using MQTT protocol
                  for real-time location updates displayed on interactive maps.
                </p>
                <div className="grid md:grid-cols-2 gap-3 text-sm">
                  <div>
                    <p className="text-red-400 font-semibold mb-1">
                      Technology Stack:
                    </p>
                    <ul className="space-y-1 text-gray-300">
                      <li>• MQTT protocol for real-time data</li>
                      <li>• Leaflet and Mapbox for map visualizations</li>
                      <li>• WebSocket connections</li>
                      <li>• MongoDB for historical tracking</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-red-400 font-semibold mb-1">
                      Features Built:
                    </p>
                    <ul className="space-y-1 text-gray-300">
                      <li>• Live tractor position updates</li>
                      <li>• Historical route playback</li>
                      <li>• Field coverage visualization</li>
                      <li>• Multi-tractor monitoring</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Development */}
            <div>
              <h3 className="text-lg font-semibold text-red-400 mb-3">
                React Native Mobile Development (Agrobooks)
              </h3>
              <div className="bg-slate-900/50 border border-red-500/20 rounded-lg px-4 py-4">
                <p className="text-gray-300 text-sm mb-3">
                  Developed field data collection apps from scratch and
                  modernized existing apps with outdated React Native syntax.
                </p>
                <div className="space-y-3">
                  <div>
                    <p className="text-red-400 font-semibold text-sm mb-2">
                      Core Features:
                    </p>
                    <ul className="space-y-1 text-gray-300 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-red-400">▸</span>
                        <span>
                          <strong>Data Collection:</strong> Planting dates, crop
                          types, harvest records, pest incidents, chemical
                          treatments
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-400">▸</span>
                        <span>
                          <strong>Image Capture:</strong> Camera integration for
                          field evidence, pest photos, treatment documentation
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-400">▸</span>
                        <span>
                          <strong>Offline-First:</strong> Local data storage
                          with background sync when internet available
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-400">▸</span>
                        <span>
                          <strong>Data Sync:</strong> Background synchronization
                          to web dashboards when connectivity available
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-red-500/10 border border-red-500/20 rounded px-3 py-2">
                    <p className="text-red-400 font-semibold text-sm mb-1">
                      Full Ownership:
                    </p>
                    <p className="text-gray-300 text-xs">
                      Managed complete lifecycle: requirements gathering with
                      agronomists → development → testing → App Store submission
                      → Google Play deployment → production monitoring
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Field Worker Dashboards */}
            <div>
              <h3 className="text-lg font-semibold text-red-400 mb-3">
                Agricultural Lifecycle Dashboards
              </h3>
              <div className="bg-slate-900/50 border border-red-500/20 rounded-lg px-4 py-4">
                <p className="text-gray-300 text-sm mb-3">
                  Built comprehensive dashboards displaying field worker
                  productivity and complete cultivation-to-harvest tracking.
                </p>
                <div className="grid md:grid-cols-2 gap-3 text-sm">
                  <div>
                    <p className="text-red-400 font-semibold mb-1">
                      Tracked Metrics:
                    </p>
                    <ul className="space-y-1 text-gray-300">
                      <li>• Planting progress by field</li>
                      <li>• Pest incident reports</li>
                      <li>• Chemical treatment logs</li>
                      <li>• Harvest yield data</li>
                      <li>• Worker productivity metrics</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-red-400 font-semibold mb-1">
                      Dashboard Features:
                    </p>
                    <ul className="space-y-1 text-gray-300">
                      <li>• Real-time data updates</li>
                      <li>• Historical trend analysis</li>
                      <li>• Image evidence viewer</li>
                      <li>• Export to PDF/Excel</li>
                      <li>• Multi-farm management</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-red-400">
            Key Achievements
          </h2>
          <div className="bg-slate-800/30 border border-red-500/30 rounded-lg px-4 py-4">
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
            Tech Stack
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

        {/* Deployment Experience */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-red-400">
            Deployment & Infrastructure
          </h2>
          <div className="bg-slate-800/30 border border-red-500/30 rounded-lg px-4 py-4">
            <p className="text-gray-300 mb-4">
              Managed complete deployment pipeline for both web applications and
              mobile apps:
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-slate-900/50 border border-red-500/20 rounded-lg px-4 py-3">
                <p className="text-red-400 font-semibold text-sm mb-2">
                  Agrosat Servers
                </p>
                <p className="text-gray-300 text-xs">
                  Direct deployment to company infrastructure for web dashboards
                  and APIs
                </p>
              </div>
              <div className="bg-slate-900/50 border border-red-500/20 rounded-lg px-4 py-3">
                <p className="text-red-400 font-semibold text-sm mb-2">
                  AWS Cloud
                </p>
                <p className="text-gray-300 text-xs">
                  EC2 for dashboard hosting, data processing pipelines for
                  agricultural analytics
                </p>
              </div>
              <div className="bg-slate-900/50 border border-red-500/20 rounded-lg px-4 py-3">
                <p className="text-red-400 font-semibold text-sm mb-2">
                  Mobile App Stores
                </p>
                <p className="text-gray-300 text-xs">
                  App Store (iOS) and Google Play (Android) submission and
                  deployment
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Impact */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-red-400">
            Business Impact
          </h2>
          <div className="bg-red-500/10 border border-red-500/30 rounded-lg px-4 py-4">
            <p className="text-gray-300 leading-relaxed mb-3">
              The systems I built and modernized enabled agricultural companies
              to:
            </p>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-red-400">✓</span>
                <span>
                  Monitor tractor operations in real-time across thousands of
                  hectares
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400">✓</span>
                <span>
                  Track complete cultivation lifecycle from planting to harvest
                  with photographic evidence
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400">✓</span>
                <span>
                  Document pest incidents and chemical treatments for compliance
                  and analysis
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400">✓</span>
                <span>
                  Improve field worker productivity through data-driven insights
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400">✓</span>
                <span>
                  Enable offline data collection in remote fields with automatic
                  synchronization
                </span>
              </li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}
