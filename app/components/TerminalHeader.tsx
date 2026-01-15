import { Github, Linkedin } from "lucide-react";
import Link from "next/link";

export const TerminalHeader: React.FC = () => {
  const githubUrl = "https://github.com/Ignaciofabian93";
  const linkedinUrl = "https://www.linkedin.com/in/ignacio-rodríguez-rulas/";

  const headerTitle = "ignacio@portfolio:~$";

  const socialLinks = [
    { icon: <Github size={20} />, url: githubUrl, label: "GitHub Profile" },
    {
      icon: <Linkedin size={20} />,
      url: linkedinUrl,
      label: "LinkedIn Profile",
    },
  ];

  const menuColors = ["bg-red-500", "bg-yellow-500", "bg-green-500"];

  return (
    <header className="fixed top-0 left-0 right-0 bg-slate-900/80 backdrop-blur-sm border-b border-cyan-500/30 px-6 py-3 z-50">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <div className="flex gap-2">
            {menuColors.map((color, index) => (
              <div
                key={index}
                className={"w-3 h-3 rounded-full " + color}
              ></div>
            ))}
          </div>
          <span className="ml-4 text-cyan-400">{headerTitle}</span>
        </div>
        <div className="flex items-center gap-4">
          {socialLinks.map(({ icon, url, label }) => (
            <Link
              key={url}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-colors"
              aria-label={label}
            >
              {icon}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};
