import React from "react";

export const GridBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none opacity-10 -z-10">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(to right, #06b6d4 1px, transparent 1px),
                           linear-gradient(to bottom, #06b6d4 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      ></div>
    </div>
  );
};
