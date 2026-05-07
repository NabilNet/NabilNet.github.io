import { techStack } from "../data/portfolio";
export function TechStack(){return <section className="section"><h2>Technical Stack</h2><div className="space-y-4">{Object.entries(techStack).map(([k,v])=><div key={k}><h3>{k}</h3><div className="mt-2 flex flex-wrap gap-2">{v.map((i)=><span key={i} className="badge">{i}</span>)}</div></div>)}</div></section>;}
