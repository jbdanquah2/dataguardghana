"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { Container } from "./Container";
import { SectionHeading } from "./SectionHeading";
import { faqs } from "@/data/content";

export function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);
  return <section id="faqs" className="section-pad bg-white">
    <Container className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
      <SectionHeading label="Frequently asked questions" title="Clear answers to common questions" copy="A practical starting point for understanding our work and how an engagement may help." />
      <div className="divide-y divide-slate-200 border-y border-slate-200">
        {faqs.map((faq, index) => {
          const expanded = open === index;
          return <div key={faq.question}>
            <h3><button type="button" onClick={() => setOpen(expanded ? null : index)} aria-expanded={expanded} aria-controls={`faq-panel-${index}`} className="flex w-full items-center justify-between gap-4 py-5 text-left font-[var(--font-manrope)] text-base font-bold text-[#0b1f33] hover:text-[#0f766e]">{faq.question}<ChevronDown className={`shrink-0 transition-transform ${expanded ? "rotate-180" : ""}`} size={20} /></button></h3>
            <div id={`faq-panel-${index}`} role="region" className={expanded ? "pb-5" : "hidden"}><p className="max-w-3xl text-sm leading-7 text-slate-600">{faq.answer}</p></div>
          </div>;
        })}
      </div>
    </Container>
  </section>;
}
