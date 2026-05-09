import { Cpu } from "lucide-react";
import { expertiseCategories } from "../data/portfolio";

export function Expertise() {
  return <section id="expertise" className="section">
    <h2>Expertise Areas</h2>
    <p className="muted mt-3 max-w-3xl">Core technical domains across enterprise infrastructure, cybersecurity, cloud, automation, and modern operations.</p>
    <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">{expertiseCategories.map((category) => <article key={category.title} className="card bg-token-surface-elevated p-5">
      <h3 className="flex items-center gap-2 text-lg font-semibold"><Cpu size={16} className="text-token-accent" />{category.title}</h3>
      <div className="mt-3 flex flex-wrap gap-2">{category.tags.map((tag) => <span key={tag} className="tag-token rounded-full px-3 py-1 text-xs font-medium">{tag}</span>)}</div>
    </article>)}</div>
  </section>;
}
