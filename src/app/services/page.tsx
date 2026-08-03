import type { Metadata } from "next";
import { ServicesPageContent } from "@/components/HomeSections";

export const metadata: Metadata = {
  title: "Services | DataGuard",
  description: "Data protection reviews, staff training, policies, and practical support for organisations in Ghana.",
};

export default function ServicesPage() {
  return <ServicesPageContent />;
}
