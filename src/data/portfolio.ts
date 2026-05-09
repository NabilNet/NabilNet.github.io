export interface ExpertiseCategory {
  title: string;
  tags: string[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  summary: string;
  highlights: string[];
}

export interface ProjectItem {
  title: string;
  strategicScope: string;
  technologies: string[];
  contributions: string[];
  businessValue: string;
  icon: string;
}

export interface CapabilityItem {
  title: string;
  description: string;
  icon: string;
  linkLabel?: string;
}

export interface ContributionItem {
  title: string;
  description: string;
  bullets: string[];
  icon: string;
}

export const identityPillars = ["Global Infrastructure", "Zero Trust", "Multi-Cloud", "NetDevOps", "AI-Driven Operations"];

export const professionalSummary = "Experienced infrastructure engineering professional specialized in designing, modernizing, automating, and securing complex enterprise environments across networking, cloud, cybersecurity, automation, telecom, and global infrastructure domains.";

export const contributionCards: ContributionItem[] = [
  {
    title: "Infrastructure Automation & Operational Excellence",
    description: "Building automation-first operating models that improve reliability, reduce manual effort, and accelerate issue resolution.",
    bullets: ["Designed automation workflows for recurring infrastructure operations.", "Supported automated remediation patterns with cybersecurity and infrastructure teams.", "Enabled NetDevOps delivery using version control, documentation, and repeatable pipelines.", "Improved operational consistency through Python and orchestration-first practices."],
    icon: "Workflow"
  },
  {
    title: "Zero Trust & Cybersecurity Transformation",
    description: "Aligning network and cloud architecture with Zero Trust security objectives and identity-aware controls.",
    bullets: ["Contributed to secure access architecture and segmentation strategy initiatives.", "Supported NAC and identity-based policy enforcement across enterprise environments.", "Integrated security controls across cloud, hybrid, and network domains."],
    icon: "ShieldCheck"
  },
  {
    title: "Microsoft Teams Telephony Migration",
    description: "Modernizing collaboration infrastructure through cloud-based enterprise telephony transformation.",
    bullets: ["Supported technical migration activities toward Microsoft Teams telephony.", "Coordinated with network, telecom, and infrastructure stakeholders for readiness.", "Contributed to connectivity and continuity planning during transition."],
    icon: "PhoneCall"
  },
  {
    title: "Global Infrastructure Delivery",
    description: "Delivering resilient, secure, and scalable infrastructure services across multi-region enterprise environments.",
    bullets: ["Supported global network and cloud connectivity initiatives.", "Contributed to multi-site architecture planning and high-availability patterns.", "Delivered enterprise-grade platforms focused on continuity and performance."],
    icon: "Globe"
  }
];

export const strategicCapabilities: CapabilityItem[] = [
  { title: "Managed Infrastructure Operations", description: "Operating secure and high-performing enterprise environments with measurable SLAs, proactive remediation, and platform governance.", icon: "ServerCog", linkLabel: "Learn more" },
  { title: "Network Infrastructure Architecture", description: "Designing scalable campus, datacenter, and global connectivity blueprints aligned with performance and resilience targets.", icon: "Network", linkLabel: "Learn more" },
  { title: "Cybersecurity & Zero Trust", description: "Embedding identity-aware controls, segmentation, and secure remote access into modern infrastructure architectures.", icon: "Shield", linkLabel: "Learn more" },
  { title: "Cloud & Multi-Cloud Connectivity", description: "Engineering cloud interconnect, hybrid routing, and secure cross-platform patterns for Azure, AWS, and GCP ecosystems.", icon: "CloudCog", linkLabel: "Learn more" },
  { title: "Automation & NetDevOps", description: "Building codified infrastructure operations using Ansible, Python, and Git-based workflows to improve delivery velocity.", icon: "Bot", linkLabel: "Learn more" },
  { title: "Disaster Recovery & Resilience", description: "Designing recovery architectures, failover workflows, and continuity strategies for mission-critical enterprise platforms.", icon: "LifeBuoy", linkLabel: "Learn more" },
  { title: "Infrastructure Observability", description: "Implementing telemetry, monitoring, and analytics foundations that strengthen visibility and operational decision making.", icon: "ChartNoAxesCombined", linkLabel: "Learn more" },
  { title: "Technical Leadership & Consulting", description: "Providing architecture leadership, cross-functional alignment, and execution guidance for transformation programs.", icon: "BriefcaseBusiness", linkLabel: "Learn more" }
];

export const experience: ExperienceItem[] = [
  { company: "eDreams ODIGEO", role: "Network & Cloud Engineer", period: "2017–2019", summary: "Managed and supported cloud and network infrastructures across Europe with focus on scalability, resilience, and multi-cloud connectivity.", highlights: ["Designed cloud components across AWS, Azure, and GCP.", "Supported Kubernetes-related infrastructure connectivity needs.", "Improved visibility, reliability, and global service delivery."] },
  { company: "OECD", role: "Senior Network & Multimedia Engineer", period: "2016–2017", summary: "Supported enterprise network and multimedia services in an international organization.", highlights: ["Contributed to service reliability and communication infrastructure continuity."] },
  { company: "eDreams ODIGEO", role: "Data Center Engineer", period: "Earlier Role", summary: "Contributed to datacenter infrastructure operations across enterprise environments.", highlights: ["Supported network, compute, and connectivity reliability initiatives."] },
  { company: "Sonangol Angola", role: "Network & Data Center Engineer", period: "Earlier Role", summary: "Supported business-critical connectivity and infrastructure availability.", highlights: ["Delivered operational support for datacenter and network platforms."] },
  { company: "Gemalto", role: "Network Engineer", period: "Earlier Role", summary: "Worked on enterprise network operations and secure connectivity.", highlights: ["Improved network service reliability and infrastructure operations."] },
  { company: "Subsea 7", role: "Global Network & Telecom Engineer", period: "Earlier Role", summary: "Supported global telecom and network infrastructure services.", highlights: ["Contributed to international connectivity and enterprise communications."] },
  { company: "Freeson IT", role: "System & Network Engineer", period: "Earlier Role", summary: "Delivered systems and network engineering support for user and infrastructure services.", highlights: ["Supported connectivity, operations, and technical support capabilities."] }
];

export const projects: ProjectItem[] = [
  { title: "Multi-Cloud Disaster Recovery Platform", strategicScope: "Cross-cloud recovery architecture across Azure and AWS for business continuity.", technologies: ["Azure", "AWS", "Ansible", "Python"], contributions: ["Designed multi-cloud DR architecture and failover model.", "Supported automated service restoration workflows.", "Standardized recovery procedures and resilience controls."], businessValue: "Strengthened continuity readiness and improved response to disruption scenarios.", icon: "ShieldCheck" },
  { title: "Enterprise Network Automation Platform", strategicScope: "NetDevOps platform to modernize operational delivery and reduce manual effort.", technologies: ["Ansible Automation Platform", "NetBox", "Docker", "Git", "Python", "REST APIs"], contributions: ["Built automation workflows for operations and configuration management.", "Integrated source-of-truth and Git-based change principles.", "Enabled repeatable and auditable deployment patterns."], businessValue: "Increased operational efficiency while lowering configuration drift and toil.", icon: "Workflow" },
  { title: "Secure Zero Trust Infrastructure", strategicScope: "Enterprise Zero Trust implementation focused on access, segmentation, and secure connectivity.", technologies: ["Cisco ISE", "Palo Alto", "Fortinet", "Zscaler", "Cloudflare", "NAC", "VPN"], contributions: ["Supported secure access architecture and NAC enforcement.", "Contributed to segmentation and policy control implementation.", "Aligned network and cloud controls with cybersecurity objectives."], businessValue: "Improved security posture by reducing implicit trust and hardening critical assets.", icon: "LockKeyhole" },
  { title: "Datacenter Modernization", strategicScope: "Modern datacenter architecture focused on scale, resiliency, and high availability.", technologies: ["Spine-Leaf", "EVPN-VXLAN", "Cisco Nexus", "Multi-site Resiliency"], contributions: ["Designed spine-leaf datacenter patterns.", "Supported EVPN-VXLAN modernization initiatives.", "Improved multi-site resiliency and operational consistency."], businessValue: "Enabled a scalable, future-ready datacenter foundation for enterprise workloads.", icon: "Building2" }
];

export const expertiseCategories: ExpertiseCategory[] = [
  { title: "Networking", tags: ["Cisco", "Juniper", "Arista", "Cisco Nexus", "SD-WAN", "EVPN-VXLAN", "BGP", "OSPF", "MPLS"] },
  { title: "Security", tags: ["Palo Alto", "Fortinet", "Check Point", "Cisco ISE", "F5", "Zscaler", "Zero Trust", "NAC"] },
  { title: "Cloud", tags: ["Azure", "AWS", "Google Cloud", "Hybrid Cloud", "Multi-Cloud", "Kubernetes", "Cloud Connectivity"] },
  { title: "Automation & NetDevOps", tags: ["Ansible", "Python", "NetBox", "Docker", "Git", "REST APIs", "CI/CD"] },
  { title: "Monitoring & Analytics", tags: ["SolarWinds", "Splunk", "Telemetry", "Operational Dashboards", "Infrastructure Observability"] },
  { title: "AI & Innovation", tags: ["AI Infrastructure", "AI Agents", "Intelligent Automation", "AI-Driven Operations"] }
];

export const training = ["Azure Architecture, Infrastructure & Security", "NetDevOps with Ansible Automation Platform", "Network Automation with Python", "Cisco ISE — SISE", "Google Cloud Platform Architecture", "DevOps with Docker", "F5 BIG-IP LTM", "Cisco ASA Firewall Solutions", "Cisco Unified Communications"];

export const education = ["Claude Bernard University Lyon 1 — Master’s Degree, Computer Systems & Networks", "University of Skikda — Engineering Degree, Computer Science"];
