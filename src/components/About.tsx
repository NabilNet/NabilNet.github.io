import { aboutSummary, engineeringMindset } from "../data/portfolio";

export function About() {
  return <section id="about" className="section">
    <h2>About</h2>
    <article className="card mt-6">
      <p className="muted leading-relaxed">{aboutSummary}</p>
      <ul className="mt-5 grid gap-3 md:grid-cols-2">{engineeringMindset.map((item) => <li key={item} className="rounded-xl border border-token bg-token-surface-elevated p-3 text-sm muted">{item}</li>)}</ul>
    </article>
  </section>;
}
