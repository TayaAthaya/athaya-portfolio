import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import GalaxyBackground from "@/components/ui/GalaxyBackground";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Athaya Akbar Ramdani",
  description:
    "A journey of learning, building, and becoming. Explore the professional and personal world of Athaya Akbar Ramdani.",
  keywords: [
    "Athaya Akbar Ramdani",
    "Information Systems",
    "Data Analytics",
    "Business Intelligence",
    "Universitas Brawijaya",
    "Portfolio",
  ],
  authors: [{ name: "Athaya Akbar Ramdani" }],
  openGraph: {
    title: "Athaya Akbar Ramdani",
    description: "A journey of learning, building, and becoming.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-[#090909] text-white antialiased overflow-x-hidden relative min-h-screen">
        <SmoothScrollProvider>
          <GalaxyBackground />
          <main className="relative z-10">{children}</main>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
