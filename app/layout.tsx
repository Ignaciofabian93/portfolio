import type { Metadata } from "next";
import { Inria_Serif, Lato } from "next/font/google";
import "./globals.css";

const lato = Lato({ weight: ["400"], subsets: ["latin"] });
export const inria = Inria_Serif({
  weight: ["700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ignacio Rodríguez Rulas",
  description: "Personal portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={lato.className}>{children}</body>
    </html>
  );
}
