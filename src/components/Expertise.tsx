import { Cpu } from "lucide-react";
import { expertiseCategories } from "../data/portfolio";

export function Expertise() {
  return <section id="expertise" className="section">
    <h2>Technical Expertise</h2>
    <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">{expertiseCategories.map((category) => <article key={category.title} className="card p-5">
      <h3 className="flex items-center gap-2 text-lg"><Cpu size={16} className="text-sky-500" />{category.title}</h3>
      <div className="mt-3 flex flex-wrap gap-2">{category.tags.map((tag) => <span key={tag} className="rounded-full border border-slate-300 px-3 py-1 text-xs dark:border-slate-600">{tag}</span>)}</div>
    </article>)}</div>
  </section>;
}
