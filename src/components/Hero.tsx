import { motion } from "framer-motion";
import { Cloud, Shield, Workflow } from "lucide-react";

export function Hero() {
  const metrics = ["15+ Years of Experience", "Multi-Cloud Expertise", "Enterprise Security & Automation", "Global Infrastructure Projects"];
  return <section id="home" className="relative overflow-hidden px-4 py-20">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.2),transparent_50%)]" />
    <div className="mx-auto max-w-6xl"><motion.h1 initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-sky-400 via-indigo-400 to-emerald-400 text-transparent bg-clip-text">Senior Network, Cloud & Automation Engineer</motion.h1>
    <p className="mt-4 text-xl text-slate-300">Designing resilient, secure, and automated infrastructure for global organizations.</p>
    <p className="mt-3 max-w-4xl text-slate-400">I specialize in cloud networking, cybersecurity infrastructure, network automation, disaster recovery architecture, and enterprise-scale infrastructure modernization across AWS, Azure, GCP, Cisco, F5, Palo Alto, Ansible, Docker, Python, and NetBox.</p>
    <div className="mt-6 flex flex-wrap gap-3"><button className="btn">View Experience</button><button className="btn">Explore Projects</button><button className="btn">Ask NabilBot</button></div>
    <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-3">{metrics.map((m)=><div key={m} className="card text-sm">{m}</div>)}</div>
    <div className="pointer-events-none absolute right-10 top-24 hidden md:flex gap-4 text-sky-300/40"><Cloud/><Shield/><Workflow/></div>
    </div></section>;
}
