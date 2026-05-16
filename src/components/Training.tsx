import { certificationTodos, certifications, education } from "../data/portfolio";

export function Training() {
  return <section id="certifications" className="section">
    <h2>Certifications & Learning</h2>
    <div className="mt-8 grid gap-4 lg:grid-cols-2">
      <article className="card">
        <h3 className="text-lg font-semibold">Certifications & Training</h3>
        <ul className="mt-4 grid gap-2 text-sm muted">{certifications.map((item) => <li key={item} className="rounded-lg border border-token bg-token-surface-elevated px-3 py-2">{item}</li>)}</ul>
        <ul className="mt-4 space-y-2 text-xs muted">{certificationTodos.map((todo) => <li key={todo}>{todo}</li>)}</ul>
      </article>
      <article className="card">
        <h3 className="text-lg font-semibold">Education</h3>
        <ul className="mt-4 space-y-2 text-sm muted">{education.map((item) => <li key={item} className="rounded-lg border border-token bg-token-surface-elevated px-3 py-2">{item}</li>)}</ul>
      </article>
    </div>
  </section>;
}
