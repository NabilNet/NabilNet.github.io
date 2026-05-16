import * as icons from "lucide-react";
import type { ComponentType } from "react";
import { motion } from "framer-motion";
import { skillDomains } from "../data/portfolio";

export function Expertise() {
  return <section id="expertise" className="section">
    <h2>Skills & Expertise</h2>
    <p className="muted mt-3 max-w-3xl">Core capabilities structured by domain for fast recruiter and client review.</p>
    <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">{skillDomains.map((domain, i) => {
      const Icon = (icons as unknown as Record<string, ComponentType<{ className?: string }>>)[domain.icon] ?? icons.Cpu;
      return <motion.article key={domain.title} className="card bg-token-surface-elevated" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ delay: i * 0.05 }} whileHover={{ y: -4 }}>
        <h3 className="flex items-center gap-2 text-lg font-semibold"><Icon className="h-4 w-4 text-token-accent" />{domain.title}</h3>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm muted">{domain.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
      </motion.article>;
    })}</div>
  </section>;
}
