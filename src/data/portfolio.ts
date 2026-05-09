export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location?: string;
  overview: string;
  scope?: string[];
  achievements: string[];
  strategicImpact: string;
  tags: string[];
}

export const aboutIntro = [
  "With extensive experience across international organizations, government agencies, digital businesses, and global infrastructure environments, I specialize in designing and delivering secure, scalable, and resilient technology platforms.",
  "My career has focused on modernizing enterprise infrastructure through cloud adoption, network transformation, cybersecurity integration, automation, datacenter modernization, and operational excellence.",
  "I have led and contributed to strategic initiatives involving multi-cloud Disaster Recovery, Zero Trust infrastructure, secure remote access, Cisco ISE modernization, VPN platforms serving thousands of users, datacenter redesign, SD-WAN, cloud interconnectivity, and global network standardization.",
  "My approach combines deep technical expertise with consulting-grade execution: understanding business requirements, designing robust architectures, coordinating stakeholders, managing complexity, and delivering infrastructure solutions that are secure, scalable, and future-ready."
];

export const identityPillars = ["Global Infrastructure", "Zero Trust", "Multi-Cloud", "NetDevOps", "Resilient Architecture"];

export const experience: ExperienceItem[] = [
  { company: "OECD", role: "Senior Network & Cloud Engineer", period: "07/2022 – Present", location: "Paris, France", overview: "Senior Engineer responsible for cloud, networking, cybersecurity, automation, datacenter, and multimedia infrastructure in an international organization.", scope: ["Design and support of enterprise network, datacenter, cloud, security, wireless, and multimedia infrastructure.", "Technical ownership across Cisco, F5, Palo Alto, Fortinet, Cisco ISE, Azure, AWS, DNS, VPN, and automation platforms.", "Leadership of modernization initiatives focused on scalability, resilience, and automation."], achievements: ["Introduced DevOps and NetDevOps practices with structured operational workflows.", "Implemented automation using Ansible, NetBox, Docker, Git, Python, and IaC principles.", "Designed multi-cloud DR across Azure and AWS with automated failover workflows.", "Led critical migrations including Cisco ISE clusters and VPN gateways serving 6,000+ users."], strategicImpact: "Strengthened global infrastructure through secure architecture, automation, and resilient cloud integration.", tags: ["Cloud", "Security", "Network", "Automation", "Datacenter"] },
  { company: "American Battle Monuments Commission", role: "Network & Cloud Engineer", period: "04/2019 – 06/2022", overview: "Supported global network, cloud, security, and communication platforms in a highly regulated U.S. government context.", achievements: ["Contributed to Azure Government Cloud migration and modernization.", "Designed automation workflows to improve reliability and reduce manual operations.", "Defined enterprise network and communication standards for global consistency.", "Supported secure access transformation with Zscaler and cybersecurity teams."], strategicImpact: "Contributed to modernization of global government infrastructure with secure access and automation.", tags: ["Government", "Cloud", "Security", "Automation"] },
  { company: "eDreams ODIGEO", role: "Network & Cloud Engineer", period: "10/2017 – 03/2019", overview: "Enabled resilient, scalable infrastructure across hybrid and multi-cloud environments for a digital business.", achievements: ["Designed cloud network architectures across AWS, GCP, and Azure.", "Supported Kubernetes infrastructure and Google Cloud Interconnect.", "Improved resilience and scalability through telemetry-driven optimization."], strategicImpact: "Enabled scalable multi-cloud connectivity and global network modernization.", tags: ["Digital Business", "Cloud", "Network", "Datacenter"] },
  { company: "OECD", role: "Senior Network & Multimedia Engineer", period: "03/2016 – 09/2017", overview: "Supported enterprise network, security, wireless, and multimedia modernization initiatives.", achievements: ["Led ISP migration from SFR to Zayo.", "Managed relocation and migration for ~1,500 users.", "Prepared Cisco ACI POC and secure interconnection architecture for affiliates."], strategicImpact: "Supported major transformation initiatives and next-generation datacenter preparation.", tags: ["Network", "Security", "Datacenter"] },
  { company: "eDreams ODIGEO", role: "Network & Data Center Engineer", period: "09/2014 – 02/2016", overview: "Supported international datacenter, WAN, security, and wireless infrastructure.", achievements: ["Designed and deployed next-generation datacenter infrastructure in France and Spain.", "Integrated Cisco Nexus, ToR architectures, Cisco ASA, Check Point, and F5 platforms.", "Collaborated with telecom operators to deliver scalable connectivity."], strategicImpact: "Modernized datacenter and connectivity foundations for resilient operations.", tags: ["Datacenter", "Network", "Security", "Digital Business"] },
  { company: "Sonangol", role: "Network & Data Center Engineer", period: "03/2014 – 08/2014", overview: "Supported campus network modernization, secure connectivity, and unified communications.", achievements: ["Designed campus network infrastructure across four buildings.", "Integrated Cisco Call Manager, video conferencing, and IP telephony.", "Designed secure components with ASA firewalls, IPSEC VPN, and RSA authentication."], strategicImpact: "Delivered secure and scalable campus connectivity for enterprise operations.", tags: ["Network", "Security", "Datacenter"] },
  { company: "Gemalto", role: "Network & Data Center Engineer", period: "01/2014 – 03/2014", overview: "Supported WAN migration and ITIL-based change management in global environments.", achievements: ["Executed global network change operations.", "Presented infrastructure changes to CAB boards.", "Maintained service continuity during WAN migration activities."], strategicImpact: "Supported reliable transformation through governance and operational continuity.", tags: ["Network", "Governance"] },
  { company: "Subsea 7", role: "Network & Telecommunication Engineer", period: "04/2010 – 12/2013", overview: "Designed and supported enterprise connectivity across offices, datacenters, and vessels.", achievements: ["Deployed LAN infrastructure across 30 offices, 6 datacenters, and 10 vessels.", "Managed Cisco environments with 1,200+ network devices.", "Implemented MPLS, VSAT, DIA internet, UC, VPN, and firewall infrastructures."], strategicImpact: "Delivered resilient global connectivity across complex distributed and offshore environments.", tags: ["Network", "Security", "Global Connectivity"] },
  { company: "Freeson IT", role: "Network & System Engineer", period: "09/2008 – 08/2009", overview: "Provided infrastructure deployment, technical support, and systems administration.", achievements: ["Deployed and configured servers, switches, and user workstations.", "Maintained and optimized network and system infrastructure.", "Supported day-to-day IT operations and service reliability."], strategicImpact: "Built foundational enterprise engineering capability for long-term infrastructure leadership.", tags: ["Network", "Systems"] }
];

export const training = ["Azure Architecture, Infrastructure & Security", "NetDevOps with Ansible Automation Platform", "Network Automation with Python", "Cisco ISE — SISE", "Google Cloud Platform Architecture"];

export const education = ["Claude Bernard University Lyon 1 — Master’s Degree, Computer Systems & Networks", "University of Skikda — Engineering Degree, Computer Science"];

export const strategicCapabilities = [
  { title: "Global Network Architecture", description: "Designing resilient enterprise backbones across datacenter, campus, WAN, and cloud interconnect domains.", icon: "Globe", linkLabel: "Architecture & Standards" },
  { title: "Cybersecurity Integration", description: "Embedding Zero Trust controls, segmentation, identity, and secure remote access into infrastructure programs.", icon: "ShieldCheck", linkLabel: "Secure by Design" },
  { title: "Cloud & Hybrid Platforms", description: "Leading multi-cloud and hybrid connectivity patterns that balance governance, performance, and reliability.", icon: "Cloud", linkLabel: "Hybrid Cloud Delivery" },
  { title: "Automation & Operations", description: "Driving NetDevOps, observability, and remediation workflows for scalable and repeatable infrastructure operations.", icon: "Workflow", linkLabel: "Operational Excellence" }
] as { title: string; description: string; icon: string; linkLabel?: string }[];
export const expertiseCategories = [
  { title: "Networking", tags: ["Cisco", "Juniper", "Arista", "Cisco Nexus", "Catalyst", "ACI", "SD-WAN", "EVPN-VXLAN", "BGP", "OSPF", "MPLS", "Datacenter Networking", "Global Network Architecture"] },
  { title: "Security", tags: ["Palo Alto", "Fortinet", "Check Point", "Cisco ISE", "F5", "Zscaler", "Cloudflare", "VPN", "NAC", "Zero Trust", "Network Segmentation", "Secure Remote Access"] },
  { title: "Cloud", tags: ["Microsoft Azure", "AWS", "Google Cloud Platform", "Hybrid Cloud", "Multi-Cloud", "Cloud Connectivity", "Kubernetes", "Cloud Interconnect", "Cloud Security"] },
  { title: "Automation & NetDevOps", tags: ["Ansible", "Ansible Automation Platform", "NetBox", "Python", "Docker", "Git", "REST APIs", "CI/CD", "Infrastructure Automation", "Automated Remediation"] },
  { title: "Monitoring & Analytics", tags: ["SolarWinds", "Splunk", "Telemetry", "Infrastructure Monitoring", "Operational Dashboards", "Performance Monitoring", "Infrastructure Observability"] },
  { title: "AI & Innovation", tags: ["AI Infrastructure", "AI Agents", "Intelligent Automation", "AI-Driven Operations", "Infrastructure Optimization", "Automation-Driven Service Management"] }
] as { title: string; tags: string[] }[];
export const projects = [] as { title: string; strategicScope: string; technologies: string[]; contributions: string[]; businessValue: string; icon: string }[];
