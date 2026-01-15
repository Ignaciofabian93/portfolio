import React from "react";
import { Terminal, Code, Briefcase, Mail, LucideIcon } from "lucide-react";

interface Tab {
  id: string;
  label: string;
  icon: LucideIcon;
}

interface TabNavigationProps {
  activeTab: string;
  onTabChange: (tabId: string) => void;
}

const tabs: Tab[] = [
  { id: "shell", label: "Shell", icon: Terminal },
  { id: "exp", label: "Exp", icon: Code },
  { id: "work", label: "Work", icon: Briefcase },
  { id: "msg", label: "Msg", icon: Mail },
];

export const TabNavigation: React.FC<TabNavigationProps> = ({
  activeTab,
  onTabChange,
}) => {
  return (
    <div className="grid grid-cols-4 gap-4" role="tablist">
      {tabs.map((tab) => {
        const Icon = tab.icon;
        return (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            role="tab"
            aria-selected={activeTab === tab.id}
            aria-controls={`${tab.id}-panel`}
            className={`flex flex-col items-center gap-2 py-4 border-t-2 transition-colors ${
              activeTab === tab.id
                ? "border-cyan-500 text-cyan-400"
                : "border-transparent text-gray-600 hover:text-gray-400"
            }`}
            aria-label={tab.label}
          >
            <Icon size={24} />
            <span className="text-xs uppercase tracking-wider">
              {tab.label}
            </span>
          </button>
        );
      })}
    </div>
  );
};
