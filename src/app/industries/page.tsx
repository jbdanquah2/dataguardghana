import type { Metadata } from "next";
import { IndustriesSection } from "@/components/HomeSections";

export const metadata: Metadata = {
  title: "Industries | DataGuard",
  description: "We help banks, schools, clinics, and businesses keep personal details safe.",
};

export default function IndustriesPage() {
  return <IndustriesSection />;
}
