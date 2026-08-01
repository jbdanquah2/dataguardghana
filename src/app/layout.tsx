import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope", display: "swap" });
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "DataGuard Ghana | Practical Data Protection Support",
  description: "DataGuard Ghana helps rural banks, schools, healthcare organisations, SMEs and other organisations assess privacy risks and implement practical data protection measures.",
  keywords: ["Data protection Ghana", "Data protection consultant Ghana", "Data protection training Ghana", "Data protection assessment Ghana", "Privacy compliance Ghana", "Data protection for rural banks", "Data protection officer support Ghana", "Data protection policies Ghana"],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website", locale: "en_GH", url: "/", siteName: "DataGuard Ghana",
    title: "DataGuard Ghana | Practical Data Protection Support",
    description: "Practical data protection education, assessment, implementation and ongoing support for organisations in Ghana.",
  },
  twitter: { card: "summary", title: "DataGuard Ghana | Practical Data Protection Support", description: "Practical data protection support for organisations in Ghana." },
  icons: { icon: "/icon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const organisation = {
    "@context": "https://schema.org", "@type": "Organization", "@id": `${siteUrl}/#organization`,
    name: "DataGuard Ghana", url: siteUrl, telephone: "+233245052539", email: "enquiry@dataguardghana.com", areaServed: { "@type": "Country", name: "Ghana" },
    description: "Practical data protection education, assessment, implementation and ongoing support for organisations in Ghana.",
  };
  const service = {
    "@context": "https://schema.org", "@type": "Service", "@id": `${siteUrl}/#service`,
    name: "Data Protection Consulting and Implementation Support", provider: { "@id": `${siteUrl}/#organization` },
    areaServed: { "@type": "Country", name: "Ghana" },
    serviceType: ["Data protection readiness assessment", "Data protection training", "Privacy policies and notices", "Ongoing compliance support"],
  };
  return <html lang="en"><body className={`${inter.variable} ${manrope.variable} antialiased`}>
    <a href="#main-content" className="fixed left-3 top-3 z-[100] -translate-y-20 rounded-md bg-white px-4 py-2 font-bold text-[#0b1f33] shadow-lg focus:translate-y-0">Skip to content</a>
    <Header /><main id="main-content">{children}</main><Footer />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organisation).replace(/</g, "\\u003c") }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(service).replace(/</g, "\\u003c") }} />
  </body></html>;
}
