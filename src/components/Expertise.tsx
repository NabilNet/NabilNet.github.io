import { motion } from "framer-motion";
import { skillDomains, whatIDo } from "../data/portfolio";

export function Expertise() {
  return <>
    <section id="what-i-do" className="section pt-0">
      <h2>What I Do</h2>
      <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-5">{whatIDo.map((item, i) => <motion.article key={item.title} className="card bg-token-surface-elevated h-full" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.04 }}>
        <h3 className="text-base font-semibold">{item.title}</h3>
        <p className="muted mt-3 text-sm">{item.description}</p>
      </motion.article>)}</div>
    </section>
    <section id="expertise" className="section pt-0">
      <h2>Skills</h2>
      <div className="mt-8 grid gap-4 md:grid-cols-2">{skillDomains.map((domain, i) => <motion.article key={domain.title} className="card bg-token-surface-elevated" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.04 }}>
        <h3 className="text-lg font-semibold">{domain.title}</h3>
        <div className="mt-3 flex flex-wrap gap-2">{domain.skills.map((skill) => <span key={skill} className="tag-token rounded-full px-3 py-1 text-xs">{skill}</span>)}</div>
      </motion.article>)}</div>
    </section>
  </>;
}
