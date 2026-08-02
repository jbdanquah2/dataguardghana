"use client";

import { ChevronDown, MessageCircle } from "lucide-react";
import { useState } from "react";
import { Container } from "./Container";
import { SectionHeading } from "./SectionHeading";
import { faqs } from "@/data/content";
import { createWhatsAppUrl } from "@/lib/whatsapp";

export function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);
  const categories = ["Getting started", "Working with us"] as const;
  return <section className="section-pad bg-white"><Container><SectionHeading label="Frequently asked questions" title="Straight answers, without the jargon" copy="A quick starting point for understanding data protection and how we work." /><div className="mt-12 grid gap-10 lg:grid-cols-2">{categories.map(category => <div key={category}><p className="eyebrow">{category}</p><div className="mt-4 divide-y divide-slate-200 border-y border-slate-200">{faqs.map((faq, index) => faq.category === category && <div key={faq.question}><h3><button type="button" onClick={() => setOpen(open === index ? null : index)} aria-expanded={open === index} className="flex w-full items-center justify-between gap-4 py-5 text-left font-bold text-[#0b1f33] hover:text-[#0f766e]">{faq.question}<ChevronDown className={`shrink-0 transition-transform ${open === index ? "rotate-180" : ""}`} size={19} /></button></h3>{open === index && <p className="pb-5 text-sm leading-7 text-slate-600">{faq.answer}</p>}</div>)}</div></div>)}</div><div className="mt-12 rounded-2xl bg-[#0b1f33] p-7 text-white sm:flex sm:items-center sm:justify-between"><div><h2 className="text-2xl font-bold">Still have a question?</h2><p className="mt-2 text-sm text-slate-300">Start a private conversation with our team.</p></div><a href={createWhatsAppUrl("Hello DataGuard, I have a question about your data protection services.")} target="_blank" rel="noreferrer" className="btn btn-light mt-5 sm:mt-0"><MessageCircle size={18} />Ask on WhatsApp</a></div></Container></section>;
}
