export interface ExpertiseItem {
  title: string;
  description: string;
  icon: string;
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  context: string;
  responsibilities: string[];
  achievements: string[];
  technologies: string[];
}

export interface ProjectItem {
  title: string;
  challenge: string;
  solution: string;
  technologies: string[];
  impact: string;
  icon: string;
}

export interface TrainingItem {
  title: string;
  date: string;
  domain: "Cloud" | "Network" | "Security" | "Automation" | "Infrastructure";
}

export const expertise: ExpertiseItem[] = [
  {
    title: "Cloud Architecture",
    description: "Designing scalable, resilient, and secure cloud connectivity and multi-cloud infrastructure across AWS, Azure, and GCP.",
    icon: "Cloud"
  },
  {
    title: "Network Engineering",
    description: "Designing, modernizing, and operating enterprise LAN, WAN, Wi-Fi, SD-WAN, SD-Access, ACI, data center, and global connectivity architectures.",
    icon: "Network"
  },
  {
    title: "Security Infrastructure",
    description: "Implementing secure access, firewalling, VPN, identity-based network access, Zero Trust principles, and enterprise-grade protection.",
    icon: "Shield"
  },
  {
    title: "Automation & NetDevOps",
    description: "Automating network and infrastructure operations using Ansible, Python, Docker, Git, NetBox, and modern DevOps workflows.",
    icon: "Bot"
  },
  {
    title: "Disaster Recovery & Resilience",
    description: "Designing business continuity and disaster recovery architectures, including cross-cloud failover and service restoration workflows.",
    icon: "LifeBuoy"
  },
  {
    title: "Enterprise Modernization",
    description: "Leading infrastructure modernization initiatives, migrations, upgrades, and transformation programs across complex global environments.",
    icon: "Rocket"
  }
];

export const experience: ExperienceItem[] = [
  { company: "OECD-OCDE", role: "Senior Network & Cloud Engineer", period: "07/2022 – Present", context: "Senior engineer supporting cloud, networking, security, automation, and multimedia infrastructure for a major international economic organization with 38 member countries and more than 4,000 employees.", responsibilities: ["Enterprise network architecture and cloud networking strategy.", "Security infrastructure, DR architecture, and network automation delivery.", "Technical coordination across providers, site directors, and internal teams."], achievements: ["Introduced NetDevOps practices with Ansible Automation Platform, NetBox, Docker, and Git.", "Proposed and designed cross-cloud disaster recovery architecture across Azure and AWS.", "Designed Ansible/Python failover and service restoration workflows.", "Supported secure affiliate interconnections with ITF, NEA, and IEA.", "Led secure Wi-Fi infrastructure design with 802.1X authentication.", "Managed complex upgrades for remote access and Cisco ISE NAC platforms."], technologies: ["Cisco ISE", "Cisco ACI", "Cisco DNA", "Cisco Nexus", "Catalyst 9K", "F5 BIG-IP LTM/APM", "Palo Alto", "Fortinet", "Azure", "AWS", "Ansible", "Python", "Docker", "NetBox", "SolarWinds"] },
  { company: "American Battle Monuments Commission", role: "Network & Cloud Engineer", period: "04/2019 – 06/2022", context: "Network and cloud engineer for an independent U.S. government agency with more than 500 employees worldwide.", responsibilities: ["Designed and supported next-generation network and cloud solutions.", "Defined network and communication standards.", "Worked with cybersecurity teams on proactive access and threat controls."], achievements: ["Delivered SD-WAN, SD-Access, NGFW, Zscaler, ZPA, ZIA, PZEN, AWS, and Azure solutions.", "Contributed to Azure Gov Cloud migration efforts.", "Participated in Microsoft Teams telephony migration.", "Built automation solutions to reduce recurring production issues."], technologies: ["SD-WAN", "SD-Access", "NGFW", "Zscaler", "AWS", "Azure", "DevOps", "Network Security"] },
  { company: "eDreams ODIGEO", role: "Global IT Operations Network & Cloud Engineer", period: "10/2017 – 03/2019", context: "Network and cloud engineer for a major online travel agency with more than 2,000 employees across Europe.", responsibilities: ["Designed cloud and network architectures across AWS, GCP, and Azure.", "Supported connectivity between on-prem and cloud services."], achievements: ["Improved network performance through telemetry and monitoring.", "Coordinated procurement and rollout of new network services."], technologies: ["AWS", "GCP", "Azure", "Kubernetes", "Cloud Interconnect", "WAN", "LAN", "Wi-Fi", "Monitoring"] },
  { company: "OECD-OCDE", role: "Senior Network & Multimedia Engineer", period: "03/2016 – 09/2017", context: "Infrastructure modernization and enterprise network/security program support.", responsibilities: ["Led major migration and relocation network activities.", "Designed secure affiliate firewall interconnections."], achievements: ["Led ISP migration from SFR to Zayo.", "Supported relocation of 1,500 users.", "Prepared Cisco ACI data center modernization proof of concept."], technologies: ["Cisco ACI", "Cisco NGFW", "F5 BIG-IP LTM", "Cisco ISE", "WLC 5508", "UCOPIA"] }
];

export const projects: ProjectItem[] = [
  { title: "Cross-Cloud Disaster Recovery Architecture", challenge: "Ensure business continuity and reduce downtime for critical enterprise services across cloud environments.", solution: "Designed a cross-cloud DR architecture across Azure and AWS with failover orchestration, automated recovery workflows, and resilience planning.", technologies: ["Azure", "AWS", "Ansible", "Python", "Cloud Networking"], impact: "Improved resilience, reduced recovery complexity, and enabled faster restoration of critical services.", icon: "ShieldCheck" },
  { title: "Enterprise Network Automation Platform", challenge: "Reduce manual operations, configuration errors, and repetitive network tasks.", solution: "Introduced NetDevOps practices using Ansible Automation Platform, NetBox, Docker, Git, and Python.", technologies: ["Ansible", "Python", "NetBox", "Docker", "Git", "Cisco"], impact: "Improved operational efficiency, standardization, and infrastructure reliability.", icon: "Workflow" }
];

export const techCategories = {
  Cloud: ["AWS", "Azure", "GCP", "Azure Gov Cloud", "Cloud Interconnect", "Multi-cloud"],
  Network: ["Cisco ACI", "SD-WAN", "SD-Access", "Nexus", "Catalyst", "LAN/WAN/Wi-Fi", "MPLS", "VSAT", "DIA"],
  Security: ["Cisco ISE", "Palo Alto", "Fortinet", "F5 BIG-IP", "VPN", "IPsec", "Zero Trust", "NAC", "802.1X", "Zscaler", "RSA"],
  "Automation & NetDevOps": ["Ansible", "Python", "Docker", "Git", "NetBox", "Automation Workflows", "IaC mindset"],
  Operations: ["SolarWinds", "DNS", "Monitoring", "ITIL", "CAB", "Change Management", "Stakeholder Coordination"]
};

export const training: TrainingItem[] = [
  { title: "Architecture, Infrastructure & Security in Azure", date: "June 2025", domain: "Cloud" },
  { title: "NetDevOps with Ansible Automation Platform, Docker, and NetBox", date: "February 2025", domain: "Automation" },
  { title: "Network Automation with Python Bootcamp", date: "June 2024", domain: "Automation" },
  { title: "Implementing and Configuring Cisco Identity Services Engine", date: "October 2023", domain: "Security" }
];
