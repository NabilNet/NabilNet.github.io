import { motion } from "framer-motion";
import { projects } from "../data/portfolio";

export function Projects() {
  return <section id="projects" className="section"><h2>Projects</h2><div className="mt-6 grid gap-4 md:grid-cols-2">{projects.map((p, i) => <motion.article key={p.title} whileHover={{ y: -4 }} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.07 }} className="card"><h3>{p.title}</h3><p className="muted mt-2"><strong>Challenge:</strong> {p.challenge}</p><p className="muted mt-2"><strong>Solution:</strong> {p.solution}</p><p className="mt-2 text-sm text-emerald-600 dark:text-emerald-400"><strong>Impact:</strong> {p.impact}</p></motion.article>)}</div></section>;
}
