import { techCategories } from "../data/portfolio";
import { Cpu } from "lucide-react";

export function TechStack() {
  return <section id="skills" className="section"><h2>Technical Skills</h2><div className="mt-6 grid gap-4 md:grid-cols-2">{Object.entries(techCategories).map(([k, vals]) => <article key={k} className="card"><h3 className="flex items-center gap-2"><Cpu size={16} />{k}</h3><div className="mt-3 flex flex-wrap gap-2">{vals.map((v) => <span key={v} className="rounded-full border border-slate-300 px-3 py-1 text-xs dark:border-slate-600">{v}</span>)}</div></article>)}</div></section>;
}
