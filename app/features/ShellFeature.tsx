import {
  Terminal,
  // Code, Cloud, Database
} from "lucide-react";

export const ShellFeature: React.FC = () => {
  const commands = [
    {
      cmd: "whoami",
      output: "Senior Software Engineer @ Walmart Chile - Global Tech",
    },
    {
      cmd: "cat skills.txt",
      output:
        "React • Next.js • Node.js • TypeScript • GraphQL • Microservices • AWS • Docker • CI/CD • React Native",
    },
    {
      cmd: "ls experience/",
      output: "Walmart Chile/ Ekoru/ Microservices/ Cloud-Architecture/",
    },
    {
      cmd: "echo $SPECIALIZATION",
      output: "Building scalable enterprise solutions",
    },
  ];

  // const stats = [
  //   {
  //     icon: Terminal,
  //     label: "Lines of Code",
  //     value: "500K+",
  //     color: "text-cyan-400",
  //   },
  //   {
  //     icon: Code,
  //     label: "Projects Delivered",
  //     value: "25+",
  //     color: "text-purple-400",
  //   },
  //   {
  //     icon: Cloud,
  //     label: "Cloud Deployments",
  //     value: "50+",
  //     color: "text-orange-400",
  //   },
  //   {
  //     icon: Database,
  //     label: "Databases Optimized",
  //     value: "15+",
  //     color: "text-green-400",
  //   },
  // ];

  return (
    <div className="space-y-6 animate-fadeIn">
      <div className="flex items-center gap-2 mb-4 text-gray-500">
        <Terminal size={16} />
        <span className="text-sm uppercase tracking-wider">
          TERMINAL_OUTPUT
        </span>
      </div>

      {/* Terminal Commands */}
      <div className="bg-slate-900/50 border border-cyan-500/30 rounded-lg p-6 font-mono">
        <div className="space-y-4">
          {commands.map((item, index) => (
            <div key={index} className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-cyan-400">$</span>
                <span className="text-gray-300">{item.cmd}</span>
              </div>
              <div className="pl-4 text-gray-400">{item.output}</div>
            </div>
          ))}
          <div className="flex items-center gap-2 mt-6">
            <span className="text-cyan-400">$</span>
            <span className="text-gray-300 animate-pulse">_</span>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div
              key={index}
              className="bg-slate-800/30 border border-slate-700/50 rounded-lg p-4 hover:border-cyan-500/50 transition-all"
            >
              <Icon className={`${stat.color} mb-2`} size={24} />
              <div className="text-2xl font-bold text-white mb-1">
                {stat.value}
              </div>
              <div className="text-xs text-gray-400">{stat.label}</div>
            </div>
          );
        })}
      </div> */}

      {/* Quick Facts */}
      <div className="bg-linear-to-br from-slate-800/50 to-slate-900/50 border border-cyan-500/20 rounded-lg p-6">
        <h3 className="text-lg font-semibold mb-4 text-cyan-400">
          Quick Facts
        </h3>
        <ul className="space-y-2 text-gray-300">
          <li className="flex items-center gap-2">
            <span className="text-cyan-400">▸</span>
            <span>
              Deployed and tested microservices across 4 markets (CL, MX, CA,
              US)
            </span>
          </li>
          <li className="flex items-center gap-2">
            <span className="text-cyan-400">▸</span>
            <span>
              Optimized existing Walmart microservices for market-specific
              requirements
            </span>
          </li>
          <li className="flex items-center gap-2">
            <span className="text-cyan-400">▸</span>
            <span>
              Building scalable marketplace platform with GraphQL Federation
            </span>
          </li>
          <li className="flex items-center gap-2">
            <span className="text-cyan-400">▸</span>
            <span>
              Led multi-tenant testing and deployment strategies for enterprise
              systems
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};
