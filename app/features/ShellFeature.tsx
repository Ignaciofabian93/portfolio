import { Terminal } from "lucide-react";

export const ShellFeature: React.FC = () => {
  const commands = [
    {
      cmd: "whoami",
      output: "Software Engineer III @ Walmart Chile - Global Tech",
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

      {/* Quick Facts */}
      <div className="bg-linear-to-br from-slate-800/50 to-slate-900/50 border border-cyan-500/20 rounded-lg p-6">
        <h3 className="text-lg font-semibold mb-4 text-cyan-400">
          Quick Facts
        </h3>
        <ul className="space-y-2 text-gray-300">
          <li className="flex items-start gap-2">
            <span className="text-cyan-400">▸</span>
            <span>
              Led Quantum Metric integration for Chilean market, coordinating
              with international teams (MX, CA, US)
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-cyan-400">▸</span>
            <span>
              Managing production deployments for 50K+ daily users across 4
              markets
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-cyan-400">▸</span>
            <span>
              Building Ekoru marketplace with environmental impact tracking
              using PostgreSQL recursive CTEs
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-cyan-400">▸</span>
            <span>
              Transitioned from sound engineer to Software Engineer III in 4
              years through intensive self-learning
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};
