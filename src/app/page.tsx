import { FAQSection } from "@/components/FAQSection";
import {
  ComplianceChallenge, ContactSection, Hero, IndustriesSection, ProcessSection,
  ReadinessChecklist, ServicesSection, TrustStrip, WhyDataGuard,
} from "@/components/HomeSections";

export default function Home() {
  return <>
    <Hero />
    <TrustStrip />
    <ComplianceChallenge />
    <ProcessSection />
    <ServicesSection />
    <IndustriesSection />
    <WhyDataGuard />
    <ReadinessChecklist />
    <FAQSection />
    <ContactSection />
  </>;
}
