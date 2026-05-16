import { experience } from "../data/portfolio";

export function ExperienceTimeline() {
  return <section id="experience" className="section">
    <h2>Experience</h2>
    <div className="mt-8 space-y-4">{experience.map((item, idx) => <details key={`${item.company}-${item.role}`} className="card group" open={idx === 0}>
      <summary className="cursor-pointer list-none">
        <p className="text-xs font-semibold text-token-accent">{item.period}</p>
        <h3 className="mt-1">{item.role}</h3>
        <p className="muted text-sm">{item.company}</p>
        <p className="muted mt-2 text-sm">{item.overview}</p>
      </summary>
      <ul className="mt-4 list-disc space-y-1 pl-5 text-sm muted">{item.achievements.map((point) => <li key={point}>{point}</li>)}</ul>
      <p className="mt-4 text-sm"><strong>Technologies:</strong> {item.technologies.join(", ")}</p>
    </details>)}</div>
  </section>;
}
