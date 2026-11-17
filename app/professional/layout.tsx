import type { Metadata } from "next";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Athaya Akbar Ramdani — Professional · Information Systems · Data · Technology",
  description:
    "Professional portfolio of Athaya Akbar Ramdani — Information Systems student at Universitas Brawijaya exploring Data Analytics, Business Intelligence, and Technology.",
};

export default function ProfessionalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Nav />
      <main className="relative z-10">{children}</main>
      <Footer />
    </>
  );
}
