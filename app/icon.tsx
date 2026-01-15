/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from "next/og";
import { readFile } from "fs/promises";
import { join } from "path";

// Image metadata
export const size = {
  width: 32,
  height: 32,
};

export const contentType = "image/png";

// Image generation
export default async function Icon() {
  // Read the image from public folder
  const imageData = await readFile(
    join(process.cwd(), "public", "ignacio.png")
  );
  const base64Image = `data:image/png;base64,${imageData.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "transparent",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "50%",
            overflow: "hidden",
            display: "flex",
          }}
        >
          <img
            src={base64Image}
            alt="Icon"
            width="32"
            height="32"
            style={{
              objectFit: "cover",
              filter: "grayscale(100%)",
            }}
          />
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
