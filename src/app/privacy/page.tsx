import type { Metadata } from "next";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "Privacy Notice | DataGuard Ghana",
  description: "Comprehensive Privacy Notice explaining how DataGuard Ghana handles personal data under the Data Protection Act, 2012 (Act 843).",
};

const sections = [
  {
    title: "1. Introduction & Scope",
    content: "DataGuard Ghana (“we,” “us,” or “our”) is committed to protecting the privacy, confidentiality, and security of personal information entrusted to us. This Privacy Notice explains how we collect, use, share, and protect your personal information when you visit our website, complete our data protection readiness checks, or communicate with us via email, phone, and WhatsApp. As a professional compliance consultancy, we act as a Data Controller under the Data Protection Act, 2012 (Act 843) of Ghana. This notice ensures transparent data management practices in absolute alignment with the statutory guidance of Ghana's Data Protection Commission (DPC)."
  },
  {
    title: "2. Personal Information We Collect",
    content: "To support your compliance journey and deliver our services, we collect various types of personal information, including:\n\n• Communication Data: Your name, email address, phone number, job title, and organisation name when you contact us via email, phone calls, or WhatsApp.\n• Consulting Context: Information regarding your organisation’s current operations, departments, systems, databases, and identified compliance gaps that you share during enquiries, pilot programs, or consultation bookings.\n• Quiz Data: Your raw responses to our client-side 2-minute readiness check (note that quiz responses are processed entirely locally and are not persisted or analysed on our servers unless you explicitly choose to share them with us via WhatsApp).\n• Technical Data: Basic network configuration metadata, including IP addresses, browser types, and standard access logs collected passively by our hosting provider for cybersecurity monitoring and service delivery purposes."
  },
  {
    title: "3. Lawful Bases for Processing (Act 843)",
    content: "Under Section 18 of the Data Protection Act, 2012 (Act 843), we process your personal information only when a valid lawful basis is established. We rely on the following bases:\n\n• Consent (Section 20): Where you choose to share your readiness quiz results with us, subscribe to educational updates, or request direct consultation.\n• Performance of Contract: To prepare professional consulting proposals, execute training workshops, deliver readiness assessments, or carry out our services as defined in our client engagements.\n• Legitimate Interests: To administer, protect, and optimize our digital brochure site, coordinate secure communications, maintain our professional files, and defend our systems against unauthorized access.\n• Legal Obligation: To fulfill statutory tax reporting with the Ghana Revenue Authority (GRA) or corporate registry filings under the Office of the Registrar of Companies (ORC)."
  },
  {
    title: "4. How We Use Your Information",
    content: "We process your personal data for the following specific purposes:\n\n• To respond to your direct consultations, quotes, and advisory requests.\n• To evaluate your readiness quiz responses and propose tailored compliance actions.\n• To plan, organize, and deliver executive briefings, staff training workshops, and gap assessments.\n• To manage ongoing outsourced Data Protection Officer (DPO) contracts and annual reviews.\n• To secure our systems, prevent fraudulent activity, and analyze website uptime and access metrics."
  },
  {
    title: "5. Data Sharing and Third-Party Disclosures",
    content: "We enforce strict professional confidentiality. We do not sell, rent, lease, or trade your personal information with third-party marketing companies. We only disclose personal data in the following restricted scenarios:\n\n• Secure Service Providers: Trusted hosting platforms, encrypted communication tools (like WhatsApp/Meta Business), or professional business suite providers acting as Data Processors under strict confidentiality agreements.\n• Professional Partners: Certified Data Protection Supervisors (DPS), corporate lawyers, cybersecurity auditors, or records-management specialists, but only when their expert intervention is formally requested and authorized by you.\n• Statutory Mandates: When required by the Data Protection Commission (DPC), law enforcement, or courts under the applicable laws of the Republic of Ghana."
  },
  {
    title: "6. Data Security & Technical Safeguards",
    content: "Consistent with Section 20 of Act 843 and our internal security policies, we implement robust administrative, technical, and physical controls to protect your data, including:\n\n• End-to-end device and laptop encryption.\n• Multifactor authentication (MFA) across all professional business accounts, emails, and cloud storage folders.\n• Distinct database and file segmentation, keeping each client’s documentation in separate secure silos.\n• Password managers to protect access controls and enforce secure, unique credentials.\n• Standard principles of data minimization—we only inspect your database configurations or files to assess them, avoiding capturing full copies where possible."
  },
  {
    title: "7. Data Retention and Deletion",
    content: "We store personal information only for as long as necessary to fulfill the purposes for which it was collected, as well as to satisfy legal, accounting, tax, or professional advisory requirements. \n\n• Inactive Enquiries: Information shared during initial WhatsApp or email enquiries that do not proceed to a formal engagement is securely deleted or anonymized within twelve (12) months.\n• Active Clients: Project documentation, training logs, and gap analysis evidence are retained for the duration of our contract, and thereafter for statutory recordkeeping periods (typically up to six years under Ghanaian corporate laws) before being permanently destroyed."
  },
  {
    title: "8. Your Data Subject Rights under Act 843",
    content: "Ghana’s Data Protection Act, 2012 grants you powerful and enforceable rights as a data subject. You have the right to:\n\n• Right of Access (Section 21): Request confirmation of whether we process your data and receive a clear copy of your records.\n• Right of Correction/Rectification (Section 31): Direct us to correct or update inaccurate, incomplete, or out-of-date personal files.\n• Right of Erasure/Deletion (Section 32): Request that we permanently delete or destroy your personal data under certain criteria.\n• Right of Objection (Section 28): Oppose the processing of your personal data for direct marketing, educational mailings, or profiling.\n• Right to Object to Automated Decisions (Section 30): Protect yourself against significant decisions made solely by automated tools.\n\nTo exercise any of these rights, please email us. If you believe your rights have been violated, you also maintain the absolute statutory right to lodge a formal complaint with the Data Protection Commission (DPC) at www.dataprotection.org.gh."
  },
  {
    title: "9. Contact and Administrative Information",
    content: "If you have questions, concerns, or requests regarding this Privacy Notice, our information handling practices, or to exercise your rights under Act 843, please contact our Managing Consultant at:\n\n• Email: enquiry@dataguardghana.com\n• Phone & WhatsApp: +233 24 505 2539\n• Delivery Model: On-site and remote consulting services\n• Location: Accra, Greater Accra Region, Ghana\n\nLast Updated: August 2026"
  }
];

export default function PrivacyPage() {
  return (
    <article className="section-pad bg-white">
      <Container className="max-w-4xl">
        <p className="eyebrow">Data Protection Compliance</p>
        <h1 className="mt-4 text-4xl font-extrabold text-[#0b1f33] sm:text-5xl tracking-tight leading-tight">
          How We Handle Your Information
        </h1>
        <p className="mt-5 text-lg leading-8 text-slate-600">
          A legally comprehensive, plain-language breakdown of our privacy commitment, designed in accordance with the Data Protection Act, 2012 (Act 843) of Ghana.
        </p>
        
        <div className="mt-12 divide-y divide-slate-100">
          {sections.map(({ title, content }) => (
            <section key={title} className="py-8 first:pt-0 last:pb-0">
              <h2 className="text-xl font-bold text-[#0b1f33] tracking-tight">{title}</h2>
              <div className="mt-4 text-sm leading-7 text-slate-600 whitespace-pre-line">
                {content}
              </div>
            </section>
          ))}
        </div>
      </Container>
    </article>
  );
}
