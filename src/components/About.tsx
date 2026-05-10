import { aboutIntro } from "../data/portfolio";

export function About() {
  return <section id="about" className="section">
    <h2>Senior Network, Security, Cloud &amp; Automation Engineer with over 15 years of experience designing, deploying, and automating secure, scalable, and high-performance IT infrastructures across complex global environments.

Recognized for deep expertise in enterprise and datacenter networking, including Cisco Spine-Leaf architectures, Juniper switching and routing, and advanced EVPN-VXLAN fabrics for scalable and resilient network design. Strong background in multi-vendor environments (Cisco, Juniper, Arista, HP), with proven capabilities in BGP, OSPF, and large-scale routing architectures.

Extensive experience with network access control and segmentation, leveraging technologies such as Cisco ISE (NAC, 802.1X), and advanced security ecosystems including Fortinet, Palo Alto, Check Point, and F5 BIG-IP LTM/APM, complemented by centralized monitoring and analytics using Splunk.

Highly skilled in infrastructure automation and orchestration, using tools such as Ansible Automation Platform, NetBox, Python, Docker and Git enabling NetDevOps practices and accelerating operational efficiency.

Strong expertise in cloud networking and security, including performance optimization and protection with Cloudflare (WAF, DNS, Proxy, Bot Management), and hands-on experience leading hybrid and multi-cloud deployments across Azure, GCP, and AWS.

Proven track record in delivering large-scale international network transformation programs, including SD-WAN and SD-Access initiatives, combining technical excellence, strategic vision, and leadership to drive resilient, secure, and future-ready infrastructures.</h2>
    <div className="mt-6 space-y-4 card">
      {aboutIntro.map((paragraph) => <p key={paragraph} className="muted leading-relaxed">{paragraph}</p>)}
    </div>
  </section>;
}
