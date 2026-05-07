import { motion } from "framer-motion";
import { experience } from "../data/portfolio";

export function ExperienceTimeline() {
  return <section id="experience" className="section"><h2>Experience</h2><div className="mt-6 space-y-4">{experience.map((item, i) => <motion.article key={`${item.company}-${i}`} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="card"><p className="text-sm text-sky-500">{item.period}</p><h3 className="mt-1">{item.role} · {item.company}</h3><p className="muted mt-2">{item.context}</p><ul className="mt-3 list-disc pl-5 text-sm"><li>{item.achievements[0]}</li><li>{item.achievements[1]}</li></ul></motion.article>)}</div></section>;
}
