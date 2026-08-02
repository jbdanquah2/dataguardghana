import {
  Hero,
  IndustriesChips,
  ServicesSection,
  ProcessSection,
  VerifiedProofSection,
  ReadinessChecklist,
  FinalWhatsAppCTA,
} from "@/components/HomeSections";

export default function Home() {
  return (
    <>
      <Hero />
      <IndustriesChips />
      <ServicesSection preview />
      <ProcessSection compact />
      <VerifiedProofSection />
      <ReadinessChecklist />
      <FinalWhatsAppCTA />
    </>
  );
}
