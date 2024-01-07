import { data } from "./data/data";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `${data.about.name[0]} ${data.about.name[1]} | GigEmpower`,
  description:
    "Empowering students to leverage freelancing over conventional jobs",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}