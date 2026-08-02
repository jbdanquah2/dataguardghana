import type { LucideIcon } from "lucide-react";
import {
  Building2, ClipboardCheck, FileCheck2, GraduationCap, HeartPulse, Hotel,
  Landmark, LifeBuoy, School, SearchCheck, Settings,
  Users, Workflow,
} from "lucide-react";

export type Deliverable = { title: string; description: string };
export type ProcessStep = { number: string; title: string; icon: LucideIcon; description: string; outcome: string; deliverables: string[] };
export type CardItem = { title: string; description: string; icon: LucideIcon; featured?: boolean };
export type ServiceGroup = { title: string; kicker: "Assess" | "Educate" | "Implement & support"; description: string; icon: LucideIcon; deliverables: Deliverable[] };
export type FAQ = { question: string; answer: string; category: "Getting started" | "Working with us" };

export type Testimonial = { quote: string; author: string; role: string; organisation: string };
export type Statistic = { value: string; label: string };
export type VerifiedProof = { testimonials: Testimonial[]; statistics: Statistic[] };

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Discover",
    icon: SearchCheck,
    description: "We learn how your organisation handles personal data.",
    outcome: "A clear view of your current position",
    deliverables: ["Review of existing documents", "Interviews with key team leaders", "Mapping of core data flows"],
  },
  {
    number: "02",
    title: "Prioritise",
    icon: ClipboardCheck,
    description: "We identify the gaps that matter most and rank the risks.",
    outcome: "A practical, prioritised action plan",
    deliverables: ["Detailed findings report", "Practical risk prioritisation list", "Briefing session for leadership"],
  },
  {
    number: "03",
    title: "Put it in place",
    icon: Settings,
    description: "We help build the policies, processes and staff habits you need.",
    outcome: "Controls that work in daily operations",
    deliverables: ["Plain-language policy documents", "Internal process templates", "Actionable staff guidelines"],
  },
  {
    number: "04",
    title: "Keep improving",
    icon: LifeBuoy,
    description: "We review progress and support your team as needs change.",
    outcome: "A programme that stays useful",
    deliverables: ["Regular progress check-ins", "Updates on changing regulations", "Advisory support for new systems"],
  },
];

export const serviceGroups: ServiceGroup[] = [
  {
    title: "Find your risks",
    kicker: "Assess",
    icon: SearchCheck,
    description: "Understand what data you hold, where it goes and which gaps need attention first.",
    deliverables: [
      {
        title: "Readiness assessment",
        description: "A comprehensive review of your activities and documentation to identify your primary compliance risks.",
      },
      {
        title: "Data mapping and inventory",
        description: "A clear map detailing exactly what personal data you collect, why you use it, and where it is stored.",
      },
      {
        title: "Privacy impact assessments",
        description: "A formal evaluation to spot and mitigate privacy risks before introducing new software, systems, or vendors.",
      },
    ],
  },
  {
    title: "Build confident teams",
    kicker: "Educate",
    icon: GraduationCap,
    description: "Give leaders and staff clear, role-specific guidance they can use at work.",
    deliverables: [
      {
        title: "Staff awareness training",
        description: "Interactive sessions teaching your team practical and secure habits for handling personal data daily.",
      },
      {
        title: "Leadership briefings",
        description: "Concise, non-technical briefings updating decision-makers on their legal duties and strategic data protection.",
      },
    ],
  },
  {
    title: "Make compliance practical",
    kicker: "Implement & support",
    icon: FileCheck2,
    description: "Turn recommendations into working documents, routines and ongoing support.",
    deliverables: [
      {
        title: "Policies and privacy notices",
        description: "Custom, plain-language documents written to match your organisation's real daily operating practices.",
      },
      {
        title: "Request and breach procedures",
        description: "Clear, step-by-step internal routines to help your team manage data requests or incidents calmly.",
      },
      {
        title: "Ongoing advisory support",
        description: "Professional, ad-hoc guidance whenever your team has questions about compliance, vendors, or rights.",
      },
    ],
  },
];

export const industries: CardItem[] = [
  {
    title: "Rural & community banks",
    icon: Landmark,
    featured: true,
    description: "Securing customer banking records, credit history, CCTV logs, employee files, and digital banking platforms.",
  },
  {
    title: "Savings & microfinance",
    icon: Building2,
    description: "Protecting borrower details, guarantor agreements, mobile collections data, and credit bureau filings.",
  },
  {
    title: "Schools",
    icon: School,
    description: "Safeguarding sensitive student directories, parent contacts, academic grades, and learning software logs.",
  },
  {
    title: "Healthcare",
    icon: HeartPulse,
    description: "Securing delicate patient folders, consultation notes, appointment scheduling, and supplier records.",
  },
  {
    title: "Churches & nonprofits",
    icon: Users,
    description: "Protecting member lists, donor financial records, volunteer directories, and welfare case records safely.",
  },
  {
    title: "Hotels & hospitality",
    icon: Hotel,
    description: "Managing guest reservation lists, credit card transactions, CCTV coverage, and secure guest Wi-Fi logs.",
  },
  {
    title: "SMEs & technology",
    icon: Workflow,
    description: "Securing customer user databases, mobile app analytics, cloud storage tools, and remote developer team logs.",
  },
];

export const faqs: FAQ[] = [
  {
    category: "Getting started",
    question: "Does data protection apply to a small organisation?",
    answer: "Yes. If your organisation collects, holds, or uses information about individuals, it is likely to have data protection responsibilities regardless of its size.",
  },
  {
    category: "Getting started",
    question: "What happens during a readiness assessment?",
    answer: "We review your operations, review your existing documentation, and assess staff habits. We then deliver a clear, actionable gap analysis report.",
  },
  {
    category: "Getting started",
    question: "What is personal data?",
    answer: "Any information that identifies a person, such as names, phone numbers, email addresses, national IDs, photos, bank details, or location data.",
  },
  {
    category: "Working with us",
    question: "Can you train our staff?",
    answer: "Yes. We deliver targeted, practical training tailored for executive boards, department managers, or general front-office staff.",
  },
  {
    category: "Working with us",
    question: "Can you prepare policies and privacy notices?",
    answer: "Yes. We write or refine operational documents and notices to ensure they reflect your actual data practices in plain, direct language.",
  },
  {
    category: "Working with us",
    question: "Do you guarantee complete compliance?",
    answer: "No. Compliance is an ongoing process of improvement. We identify gaps and build practical, repeatable routines that keep risk low.",
  },
  {
    category: "Working with us",
    question: "Is our information kept confidential?",
    answer: "Absolutely. All engagement notes, client details, and shared documents are protected with strict professional confidentiality.",
  },
];

export const quizQuestions = [
  "We do not have a complete record of the personal data we use.",
  "Our privacy notices or internal policies are missing or out of date.",
  "Staff have not received formal data protection training recently.",
  "We do not have a documented process for data requests or breaches.",
  "New systems and suppliers are introduced without a privacy review.",
] as const;

export const navItems = [
  ["Home", ""],
  ["Services", "services"],
  ["Industries", "industries"],
  ["How It Works", "process"],
  ["About", "about"],
  ["Contact", "contact"],
] as const;

// Verified proof data. Keep empty unless approved to prevent showing empty section.
export const verifiedProof: VerifiedProof = {
  testimonials: [],
  statistics: [],
};
