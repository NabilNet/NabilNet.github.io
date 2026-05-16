import { motion } from "framer-motion";
import { projects } from "../data/portfolio";

export function Projects() {
  return <section id="projects" className="section">
    <h2>Selected Projects</h2>
    <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">{projects.map((project, i) => <motion.article key={project.title} className="card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ delay: i * 0.05 }}>
      <h3 className="text-lg font-semibold">{project.title}</h3>
      <p className="muted mt-3 text-sm">{project.description}</p>
      <div className="mt-4 flex flex-wrap gap-2">{project.skills.map((skill) => <span key={skill} className="tag-token rounded-full px-2.5 py-1 text-[11px]">{skill}</span>)}</div>
    </motion.article>)}</div>
  </section>;
}
