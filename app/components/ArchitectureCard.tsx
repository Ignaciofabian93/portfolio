import React from "react";
import { ExternalLink, LucideIcon } from "lucide-react";

interface ArchitectureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  color: "blue" | "orange";
  onClick?: () => void;
}

export const ArchitectureCard: React.FC<ArchitectureCardProps> = ({
  title,
  description,
  icon: Icon,
  color,
  onClick,
}) => {
  const colorClasses = {
    blue: {
      border: "hover:border-blue-500/50",
      bg: "bg-blue-500/20 group-hover:bg-blue-500/30",
      text: "text-blue-400",
      hoverIcon: "group-hover:text-blue-400",
    },
    orange: {
      border: "hover:border-orange-500/50",
      bg: "bg-orange-500/20 group-hover:bg-orange-500/30",
      text: "text-orange-400",
      hoverIcon: "group-hover:text-orange-400",
    },
  };

  const colors = colorClasses[color];

  return (
    <div
      className={`bg-slate-800/30 border border-slate-700/50 rounded-lg p-6 ${colors.border} transition-all group cursor-pointer`}
      onClick={onClick}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div
            className={`w-12 h-12 ${colors.bg} rounded-lg flex items-center justify-center transition-colors`}
          >
            <Icon className={colors.text} size={24} />
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-1">{title}</h4>
            <p className="text-gray-400 text-sm">{description}</p>
          </div>
        </div>
        <ExternalLink
          className={`text-gray-600 ${colors.hoverIcon} transition-colors`}
          size={20}
        />
      </div>
    </div>
  );
};
