import type { Metadata } from "next";
import { ContactSection } from "@/components/HomeSections";

export const metadata: Metadata = {
  title: "Contact Us | DataGuard",
  description: "Ask for a data protection review. Contact DataGuard today.",
};

export default function ContactPage() {
  return <ContactSection />;
}
