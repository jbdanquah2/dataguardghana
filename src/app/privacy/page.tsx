import type { Metadata } from "next";
import { Container } from "@/components/Container";

export const metadata: Metadata = { title: "Privacy Notice | DataGuard", description: "How DataGuard handles website and communication information." };

const sections = [
  ["Information collected by this website", "The website does not operate an enquiry form, user account or analytics service. Our hosting provider may process basic technical information needed to deliver and secure the website."],
  ["WhatsApp, phone and email", "Contact links open WhatsApp, your phone application or your email application. Information you choose to send is processed by the relevant provider under its own terms and is received by DataGuard for the purpose of responding to your enquiry."],
  ["How enquiry information is used", "We use information you send to understand your request, respond to you and, where appropriate, arrange or deliver consulting services."],
  ["Retention and security", "Enquiry information should be retained only as long as needed for the relevant conversation, engagement and applicable obligations. Reasonable safeguards will be used to protect it."],
  ["Your questions and requests", "Questions about how DataGuard handles personal information may be sent to enquiry@dataguardghana.com or raised by phone or WhatsApp at +233 24 505 2539."],
] as const;

export default function PrivacyPage() {
  return <article className="section-pad bg-white"><Container className="max-w-4xl"><p className="eyebrow">Privacy notice</p><h1 className="mt-4 text-4xl font-extrabold text-[#0b1f33] sm:text-5xl">How we handle your information</h1><p className="mt-5 text-lg leading-8 text-slate-600">A clear summary of what happens when you visit this website or choose to contact DataGuard.</p><div className="mt-12 grid gap-9">{sections.map(([title, copy]) => <section key={title}><h2 className="text-2xl font-bold text-[#0b1f33]">{title}</h2><p className="mt-3 leading-8 text-slate-600">{copy}</p></section>)}</div></Container></article>;
}
