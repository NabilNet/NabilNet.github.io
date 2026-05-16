export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location?: string;
  overview: string;
  achievements: string[];
  strategicImpact: string;
  tags: string[];
}

export interface SkillDomain {
  title: string;
  icon: string;
  bullets: string[];
}

export interface ProjectItem {
  title: string;
  problem: string;
  technologies: string[];
  outcome: string;
  href?: string;
  type: "github" | "demo";
}

export const heroPillars = ["Network Architecture", "Cloud Infrastructure", "Automation", "Security by Design", "Operational Reliability"];

export const aboutSummary = "I design and operate secure, scalable infrastructure that connects networking, cloud platforms, and automation into reliable services. My focus is translating business requirements into resilient architectures, reducing operational risk, and improving delivery speed through practical engineering standards.";

export const engineeringMindset = [
  "Architecture decisions grounded in reliability, maintainability, and security.",
  "Automation-first approach for repeatability, faster recovery, and cleaner operations.",
  "Cross-domain collaboration across networking, cloud, platform, and security teams.",
  "Continuous learning mindset with hands-on labs and iterative technical improvement."
];

export const skillDomains: SkillDomain[] = [
  { title: "Networking", icon: "Network", bullets: ["Designing campus, datacenter, WAN, and hybrid interconnect topologies.", "Strong routing and segmentation foundations (BGP, OSPF, ACL policy models).", "Multi-vendor delivery across Cisco, Juniper, and Arista environments."] },
  { title: "Cloud", icon: "Cloud", bullets: ["Hybrid and multi-cloud connectivity across Azure, AWS, and GCP.", "Cloud network security controls and resilient access patterns.", "Disaster recovery and availability-focused architecture planning."] },
  { title: "Automation", icon: "Workflow", bullets: ["Automating provisioning and operations with Ansible and Python.", "Source-controlled workflows with Git-backed change discipline.", "Reducing manual drift through templates and repeatable runbooks."] },
  { title: "DevOps / CI-CD", icon: "GitBranch", bullets: ["Infrastructure lifecycle alignment with CI/CD practices.", "Composable tooling with Docker and API-driven integrations.", "Faster, safer delivery through validation and staged rollout habits."] },
  { title: "Security Fundamentals", icon: "ShieldCheck", bullets: ["Zero Trust principles in network and identity architecture.", "Secure remote access and segmentation-aware policy design.", "Practical hardening across firewall, NAC, and edge services."] },
  { title: "Monitoring & Troubleshooting", icon: "Activity", bullets: ["Telemetry-driven diagnostics for network and service stability.", "Structured incident response and root-cause-oriented analysis.", "Operational dashboards that support proactive decision-making."] }
];

export const projects: ProjectItem[] = [
  { title: "Multi-Cloud DR Connectivity Blueprint", problem: "Recovery workflows were fragmented across cloud platforms and on-prem infrastructure.", technologies: ["Azure", "AWS", "VPN", "Routing Policy", "Automation"], outcome: "Delivered a resilient connectivity model with clearer failover procedures and reduced recovery uncertainty.", type: "github" },
  { title: "Enterprise VPN Service Modernization", problem: "Legacy remote access gateways created scaling and operational bottlenecks.", technologies: ["VPN", "Cisco", "Firewall", "Identity Controls"], outcome: "Improved remote access reliability for large user populations with stronger security guardrails.", type: "github" },
  { title: "NetDevOps Foundations Program", problem: "Network operations depended on manual changes and inconsistent execution.", technologies: ["Ansible", "NetBox", "Python", "Git"], outcome: "Introduced repeatable automation workflows that reduced human error and improved change confidence.", type: "github" }
];

export const certifications = [
  "Architecture, Infrastructure & Security in Azure",
  "NetDevOps with Ansible Automation Platform, Docker, and NetBox",
  "Network Automation with Python",
  "Implementing and Configuring Cisco ISE",
  "Architecting with Google Cloud Platform",
  "SecNumAcadémie ANSSI"
];

export const certificationTodos = [
  "TODO (Editable): Add certification IDs and issue dates.",
  "TODO (Editable): Add links to official credential verification pages."
];

export const education = [
  "Claude Bernard University Lyon 1 — Master's Degree, Computer Systems & Networks",
  "University of Skikda — Engineering Degree, Computer Science"
];

export const experience: ExperienceItem[] = [
  { company: "OECD", role: "Senior Network & Cloud Engineer", period: "2022 – Present", location: "Paris, France", overview: "Leading secure, scalable infrastructure initiatives across networking, cloud, and automation.", achievements: ["Led enterprise modernization initiatives spanning cloud connectivity and security architecture.", "Implemented practical NetDevOps workflows to improve consistency and delivery speed.", "Supported critical migration programs for identity and remote access platforms."], strategicImpact: "Improved resilience and operational maturity across core infrastructure services.", tags: ["Cloud", "Network", "Security", "Automation"] },
  { company: "American Battle Monuments Commission", role: "Network & Cloud Engineer", period: "2019 – 2022", overview: "Contributed to global infrastructure modernization in a regulated environment.", achievements: ["Supported cloud migration and standardized network service delivery.", "Built automation workflows to reduce repetitive operational work.", "Collaborated with security teams on secure access transformation."], strategicImpact: "Enabled more reliable and secure infrastructure operations at global scale.", tags: ["Government", "Cloud", "Security", "Automation"] }
];

export const strategicCapabilities = [] as { title: string; description: string; icon: string; linkLabel?: string }[];
