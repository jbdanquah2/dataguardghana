import type { Metadata } from "next";
import { AboutSection, ProcessSection } from "@/components/HomeSections";

export const metadata: Metadata = {
  title: "About Us | DataGuard",
  description: "Learn why data protection matters, how we help, and how DataGuard supports compliance under data protection laws.",
};

export default function AboutPage() {
  return (
    <>
      <AboutSection />
      <ProcessSection compact />
    </>
  );
}
