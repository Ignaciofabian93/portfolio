import Image from "next/image";
import React from "react";

interface ProfileSectionProps {
  name?: string;
  title?: string;
  company?: string;
  experience?: string;
  additionalInfo?: string;
  imageUrl?: string;
}

export const ProfileSection: React.FC<ProfileSectionProps> = ({
  name = "Ignacio",
  title = "Full-Stack",
  company = "Walmart Global Tech",
  experience = "5+ Years Experience",
  additionalInfo = "Co-Founder & CTO @ Ekoru",
  imageUrl = "/ignacio.png",
}) => {
  return (
    <div className="space-y-6">
      <div className="relative w-32 h-32 animate-float">
        <div className="absolute inset-0 bg-linear-to-br from-cyan-400 to-blue-600 rounded-full blur-xl opacity-50"></div>
        <Image
          src={imageUrl}
          width={800}
          height={800}
          alt={`${name} Profile`}
          className="relative w-full h-full rounded-full border-4 border-cyan-500/50 object-cover grayscale"
          style={{ filter: "grayscale(100%)" }}
        />
        <div className="absolute bottom-0 right-0 w-4 h-4 bg-cyan-400 rounded-full border-2 border-slate-900 animate-pulse"></div>
      </div>

      <div>
        <h1 className="text-5xl font-bold mb-2 leading-tight">
          Senior <br />
          <span className="text-gray-300">{title}</span>
          <br />
          <span className="text-cyan-400">Engineer.</span>
        </h1>
      </div>

      <div className="space-y-2 text-gray-400 border-l-2 border-cyan-500/30 pl-4">
        <div className="flex items-center gap-2">
          <span className="text-cyan-400">&gt;</span>
          <span>{company}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-cyan-400">&gt;</span>
          <span>{experience}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-cyan-400">&gt;</span>
          <span>{additionalInfo}</span>
        </div>
      </div>
    </div>
  );
};
