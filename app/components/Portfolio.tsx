"use client";

import { useState } from "react";
import { Terminal, Database, Code, Cloud } from "lucide-react";

// Import components
import { TerminalHeader } from "./TerminalHeader";
import { ProfileSection } from "./ProfileSection";
import { LocationStatus } from "./LocationStatus";
import { StackCard } from "./StackCard";
import { ArchitectureCard } from "./ArchitectureCard";
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
              title="MERN"
              technologies={["Mongo", "Express", "React", "Node"]}
              icon={Database}
              color="cyan"
            />
            <StackCard
              title="PERN"
              technologies={["Postgres", "Express", "React", "Node"]}
              icon={Database}
              color="purple"
            />
          </div>

          {/* Architecture Cards */}
          <div className="space-y-4">
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
