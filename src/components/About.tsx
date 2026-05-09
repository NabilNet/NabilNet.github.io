import * as icons from "lucide-react";
import type { ComponentType } from "react";
import { contributionCards } from "../data/portfolio";

export function About() {
  return <section id="about" className="section">
    <h2>Professional Summary & Value Proposition</h2>
    <p className="muted mt-3 max-w-4xl">I help organizations modernize infrastructure through security-by-design, global enterprise delivery, hybrid multi-cloud architecture, Zero Trust transformation, automation-driven operations, and business continuity planning.</p>
    <div className="mt-8 grid gap-4 md:grid-cols-2">{contributionCards.map((card) => {
      const Icon = (icons as unknown as Record<string, ComponentType<{ className?: string }>>)[card.icon] ?? icons.Star;
      return <article key={card.title} className="card transition duration-300 hover:-translate-y-1 hover:shadow-sky-500/20">
        <Icon className="mb-3 text-sky-400" />
        <h3>{card.title}</h3>
        <p className="muted mt-2">{card.description}</p>
        <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-slate-700 dark:text-slate-300">{card.bullets.map((b) => <li key={b}>{b}</li>)}</ul>
      </article>;
    })}</div>
  </section>;
}
