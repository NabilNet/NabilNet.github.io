import { motion } from "framer-motion";
import { identityPillars } from "../data/portfolio";

export function Hero() {
  return <section id="home" className="section pt-20">
    <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="card relative overflow-hidden">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-token-accent">Senior Network, Security, Cloud & Automation Engineer</p>
      <h1 className="mt-3 max-w-5xl text-4xl font-semibold leading-tight md:text-6xl">Designing resilient, secure, and scalable Network, Campus, and Data Center platforms for global digital transformation.</h1>
      <p className="muted mt-4 max-w-[680px] text-[0.95rem] leading-[1.5] md:text-[1.08rem]">Expert-level architecture, security, and automation execution across enterprise networking, campus infrastructure, and mission-critical data center environments.</p>
      <div className="mt-5 flex flex-wrap gap-2">{identityPillars.map((pillar) => <span key={pillar} className="rounded-full border border-token px-3 py-1 text-xs font-medium">{pillar}</span>)}</div>
    </motion.div>
  </section>;
}
