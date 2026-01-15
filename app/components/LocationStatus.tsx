import React from "react";

interface LocationStatusProps {
  location?: string;
  status?: string;
  skills?: string[];
}

export const LocationStatus: React.FC<LocationStatusProps> = ({
  location = "Santiago, CL",
  status = "OPEN TO CANADA",
  skills = ["Next.js", "GraphQL", "Microservices"],
}) => {
  return (
    <div className="space-y-4 md:text-right">
      <div className="inline-block">
        <div className="flex items-center gap-2 text-gray-400 mb-2">
          <span>📍</span>
          <span>{location}</span>
        </div>
        <div className="flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/30 rounded-lg px-4 py-2">
          <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
          <span className="text-cyan-400 font-semibold">{status}</span>
        </div>
      </div>

      <div className="mt-8 text-left md:text-right">
        <p className="text-gray-400 text-sm mb-2">Specializing in:</p>
        <div className="flex flex-wrap gap-2 justify-start md:justify-end">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-xs text-cyan-400"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
