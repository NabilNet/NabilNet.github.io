import { certifications } from "../data/portfolio";
export function Certifications(){return <section className="section"><h2>Certifications</h2><div className="grid md:grid-cols-2 gap-3">{certifications.map((c)=><div key={c} className="card">{c}</div>)}</div></section>;}
