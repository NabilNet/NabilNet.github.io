import * as icons from "lucide-react";
import { motion } from "framer-motion";
import type { ComponentType } from "react";
import { projects } from "../data/portfolio";

export function Projects() {
  return <section id="projects" className="section">
    <h2>Featured Projects</h2>
    <div className="mt-8 grid gap-4 md:grid-cols-2">{projects.map((project, i) => {
      const Icon = (icons as unknown as Record<string, ComponentType<{ className?: string }>>)[project.icon] ?? icons.FolderKanban;
      return <motion.article key={project.title} whileHover={{ y: -4 }} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} className="card">
        <div className="mb-2 flex items-center gap-2 text-sky-500"><Icon className="h-4 w-4" /><span className="text-xs font-semibold uppercase tracking-wider">Strategic Initiative</span></div>
        <h3>{project.title}</h3>
        <p className="muted mt-2"><strong>Scope:</strong> {project.strategicScope}</p>
        <p className="mt-2 text-sm"><strong>Technologies:</strong> {project.technologies.join(" • ")}</p>
        <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-700 dark:text-slate-300">{project.contributions.map((contribution) => <li key={contribution}>{contribution}</li>)}</ul>
        <p className="mt-4 text-sm text-emerald-700 dark:text-emerald-400"><strong>Business Value:</strong> {project.businessValue}</p>
      </motion.article>;
    })}</div>
  </section>;
}
