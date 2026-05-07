import { motion } from "framer-motion";
import { training } from "../data/portfolio";

export function Training() {
  return (
    <section id="training" className="section">
      <h2>Training & Continuous Learning</h2>
      <p className="muted mb-6">Continuous learning across cloud, networking, security, automation, and infrastructure modernization.</p>
      <div className="grid gap-4 md:grid-cols-2">
        {training.map((item, i) => (
          <motion.article key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }} className="card">
            <p className="text-xs uppercase tracking-wide text-sky-500">{item.domain}</p>
            <h3 className="mt-1">{item.title}</h3>
            <p className="muted mt-1">{item.date}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
