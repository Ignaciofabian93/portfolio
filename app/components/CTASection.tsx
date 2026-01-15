import React from "react";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  email?: string;
  buttonText?: string;
}

export const CTASection: React.FC<CTASectionProps> = ({
  title = "Architecting scalable solutions at Walmart.",
  subtitle = "Ready to bring enterprise expertise to Canada.",
  email = "ignaciofabian93@gmail.com",
  buttonText = "Contact Me",
}) => {
  return (
    <div className="bg-linear-to-br from-cyan-900/30 to-blue-900/30 border border-cyan-500/30 rounded-2xl p-8 text-center">
      <h2 className="text-gray-300 mb-2">{title}</h2>
      <p className="text-gray-400 mb-6">{subtitle}</p>
      <a
        href={`mailto:${email}`}
        className="inline-flex items-center gap-2 bg-white text-slate-900 px-8 py-4 rounded-full font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all hover:shadow-lg hover:shadow-cyan-400/50 hover:scale-105"
      >
        {buttonText} <span>→</span>
      </a>
    </div>
  );
};
