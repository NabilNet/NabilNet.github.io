import * as icons from "lucide-react";
import type { ComponentType } from "react";
import { strategicCapabilities } from "../data/portfolio";

export function StrategicCapabilities() {
  return <section id="capabilities" className="section">
    <h2>Strategic Infrastructure Capabilities</h2>
    <p className="muted mt-3">Helping organizations design, secure, automate, and modernize mission-critical technology environments.</p>
    <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{strategicCapabilities.map((capability) => {
      const Icon = (icons as unknown as Record<string, ComponentType<{ className?: string }>>)[capability.icon] ?? icons.Layers;
      return <article key={capability.title} className="card group p-5 transition duration-300 hover:-translate-y-1 hover:shadow-sky-500/20">
        <Icon className="mb-3 h-5 w-5 text-token-accent" />
        <h3 className="text-lg">{capability.title}</h3>
        <p className="muted mt-2 text-sm">{capability.description}</p>
        <span className="mt-4 inline-block text-xs font-semibold tracking-wide text-token-accent opacity-70 transition group-hover:opacity-100">{capability.linkLabel}</span>
      </article>;
    })}</div>
  </section>;
}
