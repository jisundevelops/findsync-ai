import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FindSync AI - Smart Lost & Found Platform",
  description:
    "AI-Powered Smart Lost & Found Platform by Team Tech Avengers",
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