import type { Metadata } from "next";
import { FAQSection } from "@/components/FAQSection";

export const metadata: Metadata = {
  title: "FAQs | DataGuard",
  description: "Get clear answers to common questions about personal data, safety, and rules.",
};

export default function FAQsPage() {
  return <FAQSection />;
}
