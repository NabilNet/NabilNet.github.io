import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { projects } from "../data/portfolio";

export function Projects() {
  return <section id="projects" className="section">
    <h2>Project Highlights</h2>
    <p className="muted mt-3">Selected infrastructure initiatives and the value they delivered.</p>
    <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">{projects.map((project, i) => <motion.article key={project.title} className="card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ delay: i * 0.08 }} whileHover={{ y: -4 }}>
      <h3 className="text-lg font-semibold">{project.title}</h3>
      <p className="muted mt-3 text-sm"><strong>Problem:</strong> {project.problem}</p>
      <p className="mt-2 text-sm"><strong>Technologies:</strong> {project.technologies.join(" · ")}</p>
      <p className="mt-2 text-sm"><strong>Outcome:</strong> {project.outcome}</p>
      <div className="mt-4">{project.href ? <a className="inline-flex items-center gap-2 text-sm font-medium text-token-accent" href={project.href} target="_blank" rel="noreferrer">{project.type === "github" ? <Github className="h-4 w-4" /> : <ExternalLink className="h-4 w-4" />}Open Link</a> : <span className="rounded-full border border-token px-2 py-1 text-xs muted">TODO (Editable): add project link</span>}</div>
    </motion.article>)}</div>
  </section>;
}
