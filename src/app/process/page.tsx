import type { Metadata } from "next";
import { ProcessSection } from "@/components/HomeSections";

export const metadata: Metadata = {
  title: "Our Process | DataGuard",
  description: "A simple, four-step path to learn, review, fix, and keep your data safe.",
};

export default function ProcessPage() {
  return <ProcessSection />;
}
