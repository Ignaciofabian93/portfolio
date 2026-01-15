import React from "react";
import { LucideIcon } from "lucide-react";

interface StackCardProps {
  title: string;
  technologies: string[];
  icon: LucideIcon;
  color: "cyan" | "purple";
}

export const StackCard: React.FC<StackCardProps> = ({
  title,
  technologies,
  icon: Icon,
  color,
}) => {
  const colorClasses = {
    cyan: {
      border: "border-cyan-500/30 hover:border-cyan-500/60",
      shadow: "hover:shadow-cyan-500/20",
      text: "text-cyan-400",
      hoverBorder: "group-hover:border-cyan-500/50",
    },
    purple: {
      border: "border-purple-500/30 hover:border-purple-500/60",
      shadow: "hover:shadow-purple-500/20",
      text: "text-purple-400",
      hoverBorder: "group-hover:border-purple-500/50",
    },
  };

  const colors = colorClasses[color];

  return (
    <div
      className={`bg-slate-800/50 border ${colors.border} rounded-lg p-6 transition-all hover:shadow-lg ${colors.shadow} group`}
    >
      <div className="flex items-center gap-3 mb-4">
        <Icon className={colors.text} size={28} />
        <h3 className={`text-xl font-bold ${colors.text}`}>{title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, index) => (
          <span
            key={index}
            className={`px-3 py-1 bg-slate-700/50 border border-slate-600 rounded text-sm ${colors.hoverBorder} transition-colors`}
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};
