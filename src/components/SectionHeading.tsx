export function SectionHeading({ label, title, copy, light = false }: { label: string; title: string; copy?: string; light?: boolean }) {
  return (
    <div>
      <p className={`eyebrow ${light ? "!text-[#e4bd51]" : ""}`}>{label}</p>
      <h2 className={`section-title ${light ? "!text-white" : ""}`}>{title}</h2>
      {copy && <p className={`mt-5 max-w-2xl text-[1.05rem] leading-8 ${light ? "text-slate-300" : "text-slate-600"}`}>{copy}</p>}
    </div>
  );
}
