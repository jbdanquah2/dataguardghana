import Link from "next/link";
import { Container } from "@/components/Container";

export default function NotFound() {
  return <section className="section-pad min-h-[60vh] bg-[#f8fafc]"><Container className="text-center"><p className="eyebrow">404</p><h1 className="mt-4 text-4xl font-extrabold text-[#0b1f33]">Page not found</h1><p className="mx-auto mt-4 max-w-md leading-7 text-slate-600">The page you requested does not exist or may have moved.</p><Link href="/" className="btn btn-primary mt-7">Return home</Link></Container></section>;
}
