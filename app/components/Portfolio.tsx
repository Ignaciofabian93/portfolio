"use client";

import React, { useState, useEffect } from "react";
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
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState("shell");

  useEffect(() => {
    setIsVisible(true);
  }, []);

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
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-gray-100">
      <TerminalHeader />

      {/* Main Content */}
      <div
        className={`max-w-6xl mx-auto px-6 pt-24 pb-12 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Hero Section */}
        <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
          <ProfileSection />
          <LocationStatus />
        </div>

        {/* Stack Visualization */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-6 text-gray-500">
            <Terminal size={16} />
            <span className="text-sm uppercase tracking-wider">
              STACK_VISUALIZATION
            </span>
          </div>

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
        </div>

        {/* Tab Navigation - Fixed position */}
        <div className="mb-8">
          <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />
        </div>

        {/* Tab Content - Renders below navigation */}
        <div className="mb-12 min-h-[400px]">
          {renderTabContent()}
        </div>

        {/* CTA Section */}
        <CTASection />
      </div>

      <GridBackground />
    </div>
  );
};

export default Portfolio;
