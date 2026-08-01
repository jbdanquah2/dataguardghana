import type { LucideIcon } from "lucide-react";
import {
  Building2, ClipboardCheck, FileSearch, GraduationCap, HeartPulse,
  Hotel, Landmark, LifeBuoy, Network, School, SearchCheck,
  Settings, ShieldCheck, Users, Workflow,
} from "lucide-react";

export type ProcessStep = { number: string; title: string; description: string; deliverables: string[]; icon: LucideIcon };
export type CardItem = { title: string; description: string; icon: LucideIcon; featured?: boolean };
export type FAQ = { question: string; answer: string };

export const processSteps: ProcessStep[] = [
  { number: "01", title: "Educate", icon: GraduationCap, description: "We explain the organisation’s responsibilities in clear language and provide role-specific awareness training for management and staff.", deliverables: ["Executive briefings", "Staff awareness sessions", "Department-specific guidance", "Data protection induction materials"] },
  { number: "02", title: "Assess", icon: SearchCheck, description: "We review how personal data is collected, used, stored, accessed, shared and retained across the organisation.", deliverables: ["Compliance gap assessment", "Data inventory", "Processing activity review", "Risk identification", "Readiness report"] },
  { number: "03", title: "Implement", icon: Settings, description: "We help the organisation introduce practical policies, notices, processes and controls based on the risks identified.", deliverables: ["Privacy notices", "Internal data protection policy", "Data retention schedule", "Consent and request procedures", "Incident and breach response process", "Processor and supplier review documents"] },
  { number: "04", title: "Support", icon: LifeBuoy, description: "We provide continued assistance as the organisation improves its privacy programme and responds to new operational needs.", deliverables: ["Periodic compliance reviews", "Staff refresher sessions", "Documentation updates", "Data subject request support", "Ongoing advisory services"] },
];

export const services: CardItem[] = [
  { title: "Data Protection Readiness Assessment", icon: ClipboardCheck, description: "A structured review of the organisation’s current practices, documentation, risks and priority compliance needs." },
  { title: "Data Mapping and Inventory", icon: Network, description: "Identify the personal data you collect, where it comes from, why it is used, who can access it and where it is stored." },
  { title: "Policies and Privacy Notices", icon: FileSearch, description: "Develop or review practical privacy notices, internal policies, retention schedules and data-handling procedures." },
  { title: "Staff Awareness Training", icon: GraduationCap, description: "Practical training on confidentiality, secure data handling, individual rights and incident reporting." },
  { title: "Data Protection Impact Assessments", icon: SearchCheck, description: "Assess projects or processing activities that may create significant privacy risks." },
  { title: "Data Subject Request Procedures", icon: Users, description: "Create processes for receiving, verifying, tracking and responding to requests involving applicable individual rights." },
  { title: "Data Breach Preparedness", icon: ShieldCheck, description: "Develop internal reporting, escalation, investigation and response procedures for suspected personal data breaches." },
  { title: "Ongoing Compliance Support", icon: LifeBuoy, description: "Periodic reviews, document updates and practical guidance for organisations without a full internal privacy team." },
];

export const industries: CardItem[] = [
  { title: "Rural and Community Banks", icon: Landmark, featured: true, description: "Support for customer records, account opening, employee information, loan documentation, CCTV, third-party providers and digital banking." },
  { title: "Savings, Loans and Microfinance", icon: Building2, description: "Practical controls for borrower information, guarantor details, credit assessments, mobile communications, collections and verification." },
  { title: "Schools and Educational Institutions", icon: School, description: "Support for student and parent records, admissions, staff files, reports, photographs, online learning and safeguarding information." },
  { title: "Healthcare Organisations", icon: HeartPulse, description: "Guidance for patient records, appointments, health data, employee information and third-party service providers." },
  { title: "Churches and Nonprofits", icon: Users, description: "Support for membership databases, donors, registrations, counselling records, volunteers and beneficiary information." },
  { title: "Hotels and Hospitality", icon: Hotel, description: "Guidance for guest records, bookings, identification documents, payments, CCTV, Wi-Fi access and employee information." },
  { title: "SMEs and Technology Companies", icon: Workflow, description: "Privacy foundations for customer accounts, websites, applications, employees, analytics, cloud systems and international users." },
];

export const faqs: FAQ[] = [
  { question: "What is personal data?", answer: "Personal data is information that identifies a person directly or can be combined with other information to identify them. Examples include names, telephone numbers, email addresses, identification numbers, photographs, financial information, location data and employee or customer records." },
  { question: "Does data protection apply only to large companies?", answer: "No. Any organisation that collects or uses personal data may have data protection responsibilities, regardless of its size." },
  { question: "What happens during a readiness assessment?", answer: "We review the organisation’s activities, documentation, systems and data-handling practices. We then provide a prioritised report showing strengths, gaps, risks and recommended next steps." },
  { question: "Do you provide staff training?", answer: "Yes. Training can be delivered to management, general staff or specific departments based on their responsibilities." },
  { question: "Can you prepare policies and privacy notices?", answer: "Yes. We can develop new documents or review existing ones to ensure they reflect the organisation’s actual operations." },
  { question: "Can DataGuard Ghana act as our Data Protection Officer?", answer: "DataGuard Ghana can discuss ongoing advisory and data protection support arrangements based on the organisation’s needs, structure and applicable requirements. The appropriate arrangement will be determined after an initial consultation." },
  { question: "Do you guarantee that an organisation is fully compliant?", answer: "No consultant can responsibly guarantee complete compliance based on a single review. We identify gaps, recommend practical improvements and support the organisation in building and maintaining stronger data protection practices." },
  { question: "Is our information kept confidential?", answer: "Information shared during an engagement will be handled confidentially and used only for delivering the agreed services, subject to the applicable engagement terms." },
];

export const readinessItems = [
  "We do not have a complete record of the personal data we hold.",
  "Our privacy notice has not been reviewed recently.",
  "Staff members have not received formal data protection training.",
  "We are unsure how long different records should be retained.",
  "We do not have a documented process for personal data requests.",
  "We use third-party vendors without reviewing their data-handling practices.",
  "We do not have a clear personal data breach response procedure.",
  "New systems or projects are introduced without a privacy risk assessment.",
  "Responsibility for data protection is not clearly assigned.",
];

export const navItems = [
  ["About", "about"], ["Process", "process"], ["Services", "services"],
  ["Industries", "industries"], ["FAQs", "faqs"], ["Contact", "contact"],
] as const;

export const formOptions = {
  organisations: ["Rural or Community Bank", "Savings and Loans", "Microfinance Institution", "School or Educational Institution", "Healthcare Organisation", "Church or Religious Organisation", "Hotel or Hospitality Business", "NGO or Nonprofit", "Technology Company", "Other SME"],
  employees: ["1–10", "11–25", "26–50", "51–100", "101–250", "251+", "Not sure"],
  services: ["Data Protection Readiness Assessment", "Staff Training", "Policies and Privacy Notices", "Data Mapping and Inventory", "Data Protection Impact Assessment", "Data Breach Preparedness", "Ongoing Compliance Support", "Not Sure Yet"],
};

export const dashboardItems = ["Policies and notices", "Staff awareness", "Data inventory", "Risk assessment", "Data subject requests", "Security and breach procedures"];
