import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import GalaxyBackground from "@/components/ui/GalaxyBackground";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Athaya Akbar Ramdani — Information Systems · Data · Technology",
  description:
    "Personal portfolio of Athaya Akbar Ramdani — Information Systems student at Universitas Brawijaya exploring Data Analytics, Business Intelligence, and Technology.",
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
    description: "Information Systems student building with data, technology, and curiosity.",
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
        {/* Global animated galaxy stars & grid background */}
        <GalaxyBackground />

        <Nav />
        <main className="relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
