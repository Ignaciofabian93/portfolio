import { ImageResponse } from "next/og";

// Image metadata
export const alt = "Ignacio Rodríguez - Full-Stack Software Engineer";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

// Image generation
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          background:
            "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)",
          padding: "80px",
          position: "relative",
        }}
      >
        {/* Profile Image Circle - Top Right */}
        <div
          style={{
            position: "absolute",
            top: "60px",
            right: "80px",
            width: "180px",
            height: "180px",
            borderRadius: "50%",
            border: "4px solid #06b6d4",
            background: "#1e293b",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "80px",
          }}
        >
          👨‍💻
        </div>

        {/* Badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            background: "rgba(6, 182, 212, 0.2)",
            border: "2px solid #06b6d4",
            borderRadius: "8px",
            padding: "12px 24px",
            marginBottom: "40px",
          }}
        >
          <div
            style={{
              width: "8px",
              height: "8px",
              background: "#06b6d4",
              borderRadius: "50%",
              marginRight: "12px",
            }}
          />
          <span
            style={{
              color: "#06b6d4",
              fontSize: "20px",
              fontWeight: 700,
              letterSpacing: "2px",
            }}
          >
            SOFTWARE ENGINEER
          </span>
        </div>

        {/* Name */}
        <h1
          style={{
            fontSize: "80px",
            fontWeight: 700,
            color: "#e2e8f0",
            margin: "0 0 20px 0",
            letterSpacing: "-2px",
          }}
        >
          Ignacio Rodríguez
        </h1>

        {/* Subtitle */}
        <p
          style={{
            fontSize: "32px",
            color: "#94a3b8",
            margin: "0 0 40px 0",
            maxWidth: "800px",
            lineHeight: 1.4,
          }}
        >
          Full-Stack Engineer specializing in Next.js, GraphQL & Microservices
        </p>

        {/* Tech Stack */}
        <div
          style={{
            display: "flex",
            gap: "16px",
            flexWrap: "wrap",
          }}
        >
          {["Next.js", "GraphQL", "TypeScript", "Microservices", "AWS"].map(
            (tech) => (
              <div
                key={tech}
                style={{
                  background: "rgba(30, 41, 59, 0.8)",
                  border: "1px solid rgba(6, 182, 212, 0.3)",
                  borderRadius: "8px",
                  padding: "12px 24px",
                  color: "#06b6d4",
                  fontSize: "20px",
                  fontWeight: 600,
                }}
              >
                {tech}
              </div>
            )
          )}
        </div>

        {/* Footer */}
        <div
          style={{
            position: "absolute",
            bottom: "60px",
            left: "80px",
            right: "80px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span
            style={{
              color: "#06b6d4",
              fontSize: "24px",
              fontFamily: "monospace",
            }}
          >
            ignaciorodriguez.dev
          </span>
          <span
            style={{
              color: "#94a3b8",
              fontSize: "24px",
            }}
          >
            🇨🇱 Santiago → 🇨🇦 Canada
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
