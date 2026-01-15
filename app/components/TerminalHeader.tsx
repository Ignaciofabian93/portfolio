import React from "react";
import { Github, Linkedin } from "lucide-react";

interface TerminalHeaderProps {
  githubUrl?: string;
  linkedinUrl?: string;
}

export const TerminalHeader: React.FC<TerminalHeaderProps> = ({
  githubUrl = "https://github.com/yourusername",
  linkedinUrl = "https://linkedin.com/in/yourprofile",
}) => {
  return (
    <div className="fixed top-0 left-0 right-0 bg-slate-900/80 backdrop-blur-sm border-b border-cyan-500/30 px-6 py-3 z-50">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <span className="ml-4 text-cyan-400">git::main</span>
        </div>
        <div className="flex items-center gap-4">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-cyan-400 transition-colors"
            aria-label="GitHub Profile"
          >
            <Github size={20} />
          </a>
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-cyan-400 transition-colors"
            aria-label="LinkedIn Profile"
          >
            <Linkedin size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};
