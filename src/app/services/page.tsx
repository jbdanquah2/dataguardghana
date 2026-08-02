import type { Metadata } from "next";
import { ServicesSection } from "@/components/HomeSections";

export const metadata: Metadata = {
  title: "Services | DataGuard",
  description: "Learn about our data services like reviews, training, policy writing, and help.",
};

export default function ServicesPage() {
  return <ServicesSection />;
}
