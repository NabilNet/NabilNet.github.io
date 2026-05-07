export interface ExpertiseItem { title: string; description: string; icon: string }
export interface ExperienceItem { company: string; role: string; period: string; summary: string }
export interface ProjectItem { title: string; problem: string; solution: string; technologies: string[]; impact: string }

export const expertise: ExpertiseItem[] = [
  { title: "Cloud Architecture", description: "Designing secure multi-cloud landing zones and resilient network topologies.", icon: "Cloud" },
  { title: "Network Engineering", description: "Building scalable enterprise networks with SD-WAN, ACI, and high availability patterns.", icon: "Network" },
  { title: "Security Infrastructure", description: "Zero Trust-aligned controls across identity, segmentation, perimeter, and policy.", icon: "Shield" },
  { title: "Automation & NetDevOps", description: "Automating infrastructure lifecycle with Ansible, Python, GitOps, and NetBox-driven source of truth.", icon: "Bot" },
  { title: "Disaster Recovery", description: "Architecting cross-region and cross-cloud recovery strategies for critical services.", icon: "LifeBuoy" },
  { title: "Infrastructure Modernization", description: "Transforming legacy estates into observable, secure, and automated platforms.", icon: "Rocket" }
];

export const experience: ExperienceItem[] = [
  { company: "OECD-OCDE", role: "Senior Network & Cloud Engineer", period: "2022 – Present", summary: "Leading enterprise cloud-network architecture, security controls, and automation acceleration." },
  { company: "American Battle Monuments Commission", role: "Network & Cloud Engineer", period: "2019 – 2022", summary: "Implemented resilient cloud connectivity and modernized network operations for mission-critical services." },
  { company: "eDreams ODIGEO", role: "Network & Cloud Engineer", period: "2017 – 2019", summary: "Drove cloud networking and security improvements supporting high-traffic global platforms." },
  { company: "OECD-OCDE", role: "Senior Network & Multimedia Engineer", period: "2016 – 2017", summary: "Enhanced core infrastructure performance and reliability through architecture and service optimization." },
  { company: "eDreams ODIGEO", role: "Network & Data Center Engineer", period: "2014 – 2016", summary: "Delivered data center and network upgrades with improved uptime and operational governance." },
  { company: "Sonangol Angola", role: "Network & Data Center Engineer", period: "2014", summary: "Supported critical infrastructure refresh initiatives and network resiliency improvements." },
  { company: "Gemalto", role: "Network & Data Center Engineer", period: "2014", summary: "Contributed to secure network and data center operations in a highly regulated environment." },
  { company: "Subsea 7", role: "Network & Telecommunication Engineer", period: "2010 – 2013", summary: "Managed global communications infrastructure with emphasis on reliability and service continuity." },
  { company: "Freeson IT", role: "Network and System Engineer", period: "2008 – 2009", summary: "Built foundational expertise across network, systems, and service delivery operations." }
];

export const projects: ProjectItem[] = [
  { title: "Cross-Cloud Disaster Recovery Architecture", problem: "Business-critical applications lacked unified failover across providers.", solution: "Designed active-standby topology across AWS and Azure with automated recovery runbooks.", technologies: ["AWS", "Azure", "BGP", "Terraform", "Ansible"], impact: "Reduced RTO/RPO risk and improved executive confidence in continuity planning." },
  { title: "Enterprise Network Automation Platform", problem: "Manual change workflows increased lead time and configuration drift.", solution: "Implemented NetBox + Ansible + Git pipeline for intent-based provisioning and compliance.", technologies: ["Ansible", "Python", "NetBox", "Git", "Docker"], impact: "Cut repetitive manual effort and improved deployment consistency at scale." },
  { title: "Secure Wi-Fi and Identity-Based Access", problem: "Legacy access model lacked granular user/device control.", solution: "Rolled out policy-driven access with Cisco ISE, segmentation, and integrated certificate workflows.", technologies: ["Cisco ISE", "PKI", "NAC", "Wi-Fi", "Zero Trust"], impact: "Strengthened security posture while improving user onboarding experience." },
  { title: "Multi-Cloud Network Modernization", problem: "Fragmented networking patterns slowed application delivery and troubleshooting.", solution: "Standardized cloud transit architecture, observability, and secure interconnect controls.", technologies: ["GCP", "Azure", "AWS", "Palo Alto", "F5"], impact: "Enabled faster delivery cycles and better operational visibility across teams." }
];

export const techStack = {
  Cloud: ["AWS", "Azure", "GCP"],
  Network: ["Cisco ACI", "SD-WAN", "SD-Access", "Nexus", "Catalyst", "Wi-Fi"],
  Security: ["Cisco ISE", "Palo Alto", "Fortinet", "F5", "VPN", "Zero Trust"],
  Automation: ["Ansible", "Python", "Docker", "Git", "NetBox"],
  "Monitoring & Operations": ["SolarWinds", "DNS", "ITIL", "CAB", "Change Management"]
};

export const certifications = [
  "Architecture, Infrastructure & Security in Azure",
  "NetDevOps with Ansible Automation Platform, Docker, and NetBox",
  "Network Automation with Python Bootcamp",
  "Cisco Identity Services Engine",
  "Architecting with Google Cloud Platform",
  "Certified Meraki Network Operator",
  "DevOps with Docker",
  "SecNumAcadémie ANSSI",
  "Networking in Google Cloud",
  "F5 BIG-IP LTM",
  "Cisco ASA Firewall",
  "Cisco Unified Communication Manager"
];
