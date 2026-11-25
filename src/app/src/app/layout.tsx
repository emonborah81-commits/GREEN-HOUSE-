import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Green House | Sports & Cultural Portal",
  description:
    "Official Green House Sports and Cultural Participation Portal of Rev. William Ward Senior Secondary School.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
