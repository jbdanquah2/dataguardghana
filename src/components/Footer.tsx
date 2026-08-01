import Link from "next/link";
import { Brand } from "./Brand";
import { Container } from "./Container";
import { navItems } from "@/data/content";

export function Footer() {
  return <footer className="bg-[#071827] py-14 text-slate-300">
    <Container>
      <div className="grid gap-10 border-b border-white/10 pb-10 md:grid-cols-[1.5fr_1fr_1fr]">
        <div><Brand inverse /><p className="mt-5 max-w-md text-sm leading-7 text-slate-400">DataGuard Ghana provides practical data protection education, assessment, implementation and ongoing support for organisations in Ghana.</p></div>
        <div><h2 className="text-sm font-bold uppercase tracking-widest text-white">Navigate</h2><div className="mt-4 grid grid-cols-2 gap-3 text-sm">{navItems.map(([label,id]) => <a href={`/#${id}`} key={id} className="hover:text-white">{label}</a>)}<Link href="/privacy" className="hover:text-white">Privacy Notice</Link></div></div>
        <div><h2 className="text-sm font-bold uppercase tracking-widest text-white">Contact</h2><address className="mt-4 grid gap-3 text-sm not-italic"><a href="tel:+233245052539" className="hover:text-white">+233 24 505 2539</a><a href="mailto:enquiry@dataguardghana.com" className="hover:text-white">enquiry@dataguardghana.com</a><span>Ghana</span></address></div>
      </div>
      <div className="mt-8 grid gap-4 text-xs leading-6 text-slate-500 md:grid-cols-[auto_1fr] md:items-start md:gap-10"><p>© 2026 DataGuard Ghana. All rights reserved.</p><p className="md:text-right">DataGuard Ghana provides data protection consulting and implementation support. Information on this website does not constitute legal advice and does not create a consultant-client relationship.</p></div>
    </Container>
  </footer>;
}
