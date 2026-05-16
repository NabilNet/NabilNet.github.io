import { certifications, education } from "../data/portfolio";

export function Training() {
  return <section id="certifications" className="section">
    <h2>Certifications & Education</h2>
    <div className="mt-8 grid gap-4 lg:grid-cols-2">
      <article className="card">
        <h3 className="text-lg font-semibold">Certifications</h3>
        <ul className="mt-4 grid gap-2 text-sm muted">{certifications.map((item) => <li key={item} className="rounded-lg border border-token bg-token-surface-elevated px-3 py-2">{item}</li>)}</ul>
      </article>
      <article className="card">
        <h3 className="text-lg font-semibold">Education</h3>
        <ul className="mt-4 space-y-3 text-sm muted">{education.map((item) => <li key={item.degree} className="rounded-lg border border-token bg-token-surface-elevated px-3 py-3"><p className="font-medium text-token-text">{item.degree}</p><p>{item.institution}</p><p>{item.period}</p></li>)}</ul>
      </article>
    </div>
  </section>;
}
