import { useMemo, useState } from "react";
import { experience } from "../data/portfolio";

const filters = ["All", "Cloud", "Security", "Network", "Automation", "Datacenter", "Government", "Digital Business"];

export function ExperienceTimeline() {
  const [active, setActive] = useState("All");
  const filtered = useMemo(() => active === "All" ? experience : experience.filter((item) => item.tags.includes(active)), [active]);

  return <section id="experience" className="section">
    <h2>Professional Experience</h2>
    <div className="mt-4 flex flex-wrap gap-2">{filters.map((f) => <button key={f} className={`btn px-3 py-1 text-xs ${active === f ? "border-token-accent text-token-accent" : ""}`} onClick={() => setActive(f)}>{f}</button>)}</div>
    <div className="mt-8 space-y-4">{filtered.map((item) => <details key={`${item.company}-${item.role}`} className="card group" open={item.company === "OECD"}>
      <summary className="cursor-pointer list-none">
        <p className="text-xs font-semibold text-token-accent">{item.period} {item.location ? `· ${item.location}` : ""}</p>
        <h3 className="mt-1">{item.role} · {item.company}</h3>
        <p className="muted mt-2">{item.overview}</p>
        <div className="mt-3 flex flex-wrap gap-2">{item.tags.map((tag) => <span key={tag} className="rounded-full border border-token px-2 py-1 text-[11px]">{tag}</span>)}</div>
      </summary>
      <ul className="mt-4 list-disc space-y-1 pl-5 text-sm muted">{item.achievements.map((point) => <li key={point}>{point}</li>)}</ul>
      <p className="mt-4 rounded-xl border border-token bg-token-bg/40 p-3 text-sm"><strong>Strategic impact:</strong> {item.strategicImpact}</p>
    </details>)}</div>
  </section>;
}
