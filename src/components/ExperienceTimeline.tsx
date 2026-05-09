import { motion } from "framer-motion";
import { experience } from "../data/portfolio";

export function ExperienceTimeline() {
  return <section id="experience" className="section">
    <h2>Professional Experience</h2>
    <div className="mt-8 space-y-4 border-l border-slate-300 pl-5 dark:border-slate-700">{experience.map((item, i) => <motion.article key={`${item.company}-${item.role}`} initial={{ opacity: 0, x: -12 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.04 }} className="card relative">
      <span className="absolute -left-[1.85rem] top-6 h-3 w-3 rounded-full bg-sky-500" />
      <p className="text-sm font-semibold text-sky-500">{item.period}</p>
      <h3 className="mt-1">{item.role} · {item.company}</h3>
      <p className="muted mt-2">{item.summary}</p>
      <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-700 dark:text-slate-300">{item.highlights.map((point) => <li key={point}>{point}</li>)}</ul>
    </motion.article>)}</div>
  </section>;
}
