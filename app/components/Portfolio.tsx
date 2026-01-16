"use client";

import { useState } from "react";
import { Terminal, Database } from "lucide-react";

// Import components
import { TerminalHeader } from "./TerminalHeader";
import { ProfileSection } from "./ProfileSection";
import { LocationStatus } from "./LocationStatus";
import { StackCard } from "./StackCard";
import { TabNavigation } from "./TabNavigation";
import { CTASection } from "./CTASection";
import { GridBackground } from "./GridBackground";

// Import features
import { ShellFeature } from "../features/ShellFeature";
import { ExperienceFeature } from "../features/ExperienceFeature";
import { WorkFeature } from "../features/WorkFeature";
import { MessageFeature } from "../features/MessageFeature";

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("shell");

  const renderTabContent = () => {
    switch (activeTab) {
      case "shell":
        return <ShellFeature />;
      case "exp":
        return <ExperienceFeature />;
      case "work":
        return <WorkFeature />;
      case "msg":
        return <MessageFeature />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-950 via-slate-900 to-slate-950 text-gray-100">
      <TerminalHeader />

      {/* Main Content */}
      <main
        className={`max-w-6xl mx-auto px-6 pt-24 pb-12 transition-all duration-1000`}
      >
        {/* Hero Section */}
        <section
          className="grid md:grid-cols-2 gap-12 items-start mb-16"
          aria-label="Profile and location"
        >
          <ProfileSection />
          <LocationStatus />
        </section>

        {/* Stack Visualization */}
        <section className="mb-12" aria-labelledby="stack-heading">
          <h2
            id="stack-heading"
            className="flex items-center gap-2 mb-6 text-gray-500"
          >
            <Terminal size={16} />
            <span className="text-sm uppercase tracking-wider">
              STACK_VISUALIZATION
            </span>
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <StackCard
              title="PERN"
              technologies={["Postgres", "Express", "React", "Node"]}
              icon={Database}
              color="purple"
            />
            <StackCard
              title="MERN"
              technologies={["Mongo", "Express", "React", "Node"]}
              icon={Database}
              color="cyan"
            />
          </div>

          {/* Architecture Cards */}
          {/* <div className="space-y-4">
            <ArchitectureCard
              title="System Architecture"
              description="Microservices & Distributed Systems"
              icon={Code}
              color="blue"
            />
            <ArchitectureCard
              title="Cloud Native"
              description="AWS • Docker • Kubernetes"
              icon={Cloud}
              color="orange"
            />
          </div> */}
        </section>

        {/* About Me Section */}
        <section className="mb-12" aria-labelledby="about-heading">
          <h2
            id="about-heading"
            className="flex items-center gap-2 mb-6 text-gray-500"
          >
            <Terminal size={16} />
            <span className="text-sm uppercase tracking-wider">ABOUT_ME</span>
          </h2>

          <div className="bg-slate-800/30 border border-slate-700/50 rounded-lg p-8 space-y-4 text-gray-300 leading-relaxed">
            <p>
              Full-stack engineer with 5+ years building scalable applications
              at enterprise and startup level. Currently at Walmart Chile
              optimizing e-commerce for international markets, and co-founding
              Ekoru, a sustainable marketplace launching April 2026.
            </p>

            <p>
              Passionate about clean architecture and building products that
              scale. Recently visited Toronto on my honeymoon, exploring
              immigration opportunities - fell in love with Canada&apos;s tech
              ecosystem and quality of life.
            </p>

            <p>
              When not coding: Playing guitar, tinkering with Raspberry Pi
              security projects, or planning the next adventure.
            </p>

            <div className="pt-4 border-t border-cyan-500/30">
              <p className="text-cyan-400 font-semibold">
                Currently seeking: Canadian opportunities with visa sponsorship
                in Vancouver or Toronto.
              </p>
            </div>
          </div>
        </section>

        {/* Professional Experience Section */}
        <section className="mb-12" aria-labelledby="experience-heading">
          <h2
            id="experience-heading"
            className="flex items-center gap-2 mb-6 text-gray-500"
          >
            <Terminal size={16} />
            <span className="text-sm uppercase tracking-wider">
              PROFESSIONAL_EXPERIENCE
            </span>
          </h2>

          <div className="space-y-6">
            {/* Walmart */}
            <div className="bg-slate-800/30 border border-slate-700/50 rounded-lg p-6 hover:border-cyan-500/50 transition-all">
              <h3 className="text-xl font-bold text-cyan-400 mb-1">
                Software Engineer III @ Walmart Chile
              </h3>
              <p className="text-sm text-gray-400 mb-3">Sept 2024 - Present</p>
              <p className="text-gray-300 mb-4">
                Developing and maintaining Chile market features in shared
                codebase. Ensuring multi-tenant compatibility across CL, MX, CA,
                US through comprehensive functional and e2e testing
              </p>
              <a
                href="/work/walmart"
                className="text-cyan-400 hover:text-cyan-300 text-sm flex items-center gap-1 transition-colors"
              >
                Read more about my work at Walmart →
              </a>
            </div>

            {/* Ekoru */}
            <div className="bg-slate-800/30 border border-slate-700/50 rounded-lg p-6 hover:border-cyan-500/50 transition-all">
              <h3 className="text-xl font-bold text-cyan-400 mb-1">
                Co-Founder & Lead Engineer @ Ekoru
              </h3>
              <p className="text-sm text-gray-400 mb-3">Apr 2025 - Present</p>
              <p className="text-gray-300 mb-4">
                Architecting sustainable marketplace with microservices and
                GraphQL Federation
              </p>
              <a
                href="/work/ekoru"
                className="text-cyan-400 hover:text-cyan-300 text-sm flex items-center gap-1 transition-colors"
              >
                Read more about Ekoru →
              </a>
            </div>

            {/* Agrosat */}
            <div className="bg-slate-800/30 border border-slate-700/50 rounded-lg p-6 hover:border-cyan-500/50 transition-all">
              <h3 className="text-xl font-bold text-cyan-400 mb-1">
                Full Stack Developer @ Agrosat
              </h3>
              <p className="text-sm text-gray-400 mb-3">Apr 2023 - Sept 2024</p>
              <p className="text-gray-300 mb-4">
                Built agricultural analytics dashboards processing 100GB+
                satellite data
              </p>
              <a
                href="/work/agrosat"
                className="text-cyan-400 hover:text-cyan-300 text-sm flex items-center gap-1 transition-colors"
              >
                Read more →
              </a>
            </div>

            {/* Freelance */}
            <div className="bg-slate-800/30 border border-slate-700/50 rounded-lg p-6 hover:border-cyan-500/50 transition-all">
              <h3 className="text-xl font-bold text-cyan-400 mb-1">
                Freelance Full Stack Developer
              </h3>
              <p className="text-sm text-gray-400 mb-3">Aug 2020 - Apr 2023</p>
              <p className="text-gray-300 mb-4">
                Delivered custom web applications for various clients. Built
                responsive SPAs, REST APIs, and integrated third-party services
              </p>
              <a
                href="/work/freelance"
                className="text-cyan-400 hover:text-cyan-300 text-sm flex items-center gap-1 transition-colors"
              >
                Read more →
              </a>
            </div>

            {/* View All Link */}
            <div className="text-center pt-4">
              <a
                href="/work"
                className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-semibold transition-colors"
              >
                View all experience →
              </a>
            </div>
          </div>
        </section>

        {/* Tab Navigation - Fixed position */}
        <nav className="mb-8" aria-label="Portfolio sections">
          <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />
        </nav>

        {/* Tab Content - Renders below navigation */}
        <section className="mb-12 min-h-100" aria-label="Portfolio content">
          {renderTabContent()}
        </section>

        {/* CTA Section */}
        <section aria-label="Contact">
          <CTASection />
        </section>
      </main>

      <GridBackground />
    </div>
  );
};

export default Portfolio;
