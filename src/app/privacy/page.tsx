import type { Metadata } from "next";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "Privacy Notice | DataGuard Ghana",
  description: "How DataGuard Ghana handles information submitted through this website.",
  alternates: { canonical: "/privacy/" },
};

const sections = [
  ["Information collected through the website", "When you use the consultation form, we may collect your name, organisation name, work email, phone number, organisation type, approximate employee count, service interest and the message you provide. Basic technical information may also be processed by our hosting provider to deliver and secure the website."],
  ["How enquiry information is used", "We use enquiry information to understand your request, prepare for an initial discussion, respond to you and, where appropriate, arrange consulting services. We will not use enquiry information for unrelated purposes without an appropriate basis."],
  ["Legal or operational basis for processing", "Enquiry information is processed to respond to your request and take steps connected with a potential engagement. Where another basis is required for a particular activity, it should be documented before that activity begins. TODO: Confirm before launch — verify the applicable lawful bases and business-specific wording."],
  ["WhatsApp and third-party services", "Submitting the form prepares a message and redirects you to WhatsApp. Your message is not sent until you confirm it within WhatsApp. WhatsApp processes information under its own terms and privacy practices. The website is hosted using Firebase Hosting, which may process technical information needed to serve and secure the site."],
  ["Information retention", "Enquiry information should be retained only for as long as needed to respond, manage a potential or active engagement, meet applicable obligations and resolve disputes. TODO: Confirm before launch — approve specific retention periods and deletion procedures."],
  ["Information security", "Reasonable organisational and technical safeguards will be used to protect enquiry information against unauthorised access, loss, misuse or disclosure. No internet transmission method can be guaranteed to be completely secure."],
  ["Individual rights", "Depending on the circumstances and applicable requirements, individuals may be able to request access to or correction of their personal information, raise an objection or concern, or ask about how their information is handled. Requests will be reviewed and responded to as appropriate."],
  ["Contact details", "Questions or requests about this notice may be directed to DataGuard Ghana by phone or WhatsApp at +233 24 505 2539, or by email at enquiry@dataguardghana.com. TODO: Confirm before launch — add any required business address."],
  ["Updates to the notice", "This notice may be updated when website practices, services or applicable requirements change. The latest version will be published on this page. TODO: Confirm before launch — add the effective date and internal review schedule."],
] as const;

export default function PrivacyPage() {
  return <article className="section-pad bg-white"><Container className="max-w-4xl"><p className="eyebrow">Privacy notice</p><h1 className="mt-4 font-[var(--font-manrope)] text-4xl font-extrabold tracking-tight text-[#0b1f33] sm:text-5xl">How we handle website enquiries</h1><p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">This notice explains the information DataGuard Ghana may collect through this website and how it is expected to be handled.</p><div className="mt-8 rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm font-semibold text-amber-950">TODO: Confirm before launch — this operational privacy notice must be reviewed against DataGuard Ghana’s final business details and practices.</div><div className="mt-12 grid gap-10">{sections.map(([title,copy]) => <section key={title}><h2 className="text-2xl font-bold text-[#0b1f33]">{title}</h2><p className="mt-3 leading-8 text-slate-600">{copy}</p></section>)}</div><p className="mt-12 border-t border-slate-200 pt-6 text-sm text-slate-500">Last updated: TODO: Confirm before launch</p></Container></article>;
}
