import { aboutHighlights, aboutSummary, positioningStatement } from "../data/portfolio";

export function About() {
  return <section id="about" className="section">
    <h2>About Me</h2>
    <article className="card mt-6 space-y-5">
      <p className="muted leading-relaxed">{aboutSummary}</p>
      <blockquote className="rounded-xl border border-token-accent/50 bg-token-surface-elevated p-4 text-sm italic">“{positioningStatement}”</blockquote>
      <ul className="grid gap-3 md:grid-cols-2">{aboutHighlights.map((item) => <li key={item} className="rounded-xl border border-token bg-token-surface-elevated p-3 text-sm muted">{item}</li>)}</ul>
    </article>
  </section>;
}
