Act as a senior front-end engineer, creative UI/UX designer, motion design specialist, and premium portfolio architect.

You are working on my professional portfolio website. I want you to enhance the theme system, improve the visual experience, simplify the design, and update the content structure.

Main Goal:
Upgrade the website into a smoother, more modern, more premium, and easier-to-use professional portfolio with a dynamic theme selector and a networking-inspired animated background theme.

Important:
Before making changes, inspect the existing codebase, framework, components, styles, and theme implementation. Reuse the current architecture when possible. Do not break the existing design system. Keep the implementation clean, scalable, and maintainable.

==================================================
1. ADD A NEW THEMATIC MODE
==================================================

Currently, the website has light and dark themes.

Add two additional themes:

1. Light Mode
2. Dark Mode
3. Networking Motion Mode
4. Black Mode

The new “Networking Motion Mode” should have a dynamic animated background inspired by networking flow motion.

The animation should feel like:
- Moving network lines
- Soft flowing nodes
- Digital infrastructure traffic
- Subtle packet-flow animation
- Professional cloud/network/security aesthetic
- Elegant and not distracting

The animation should not reduce readability. Text sections must remain clear and readable.

Use subtle motion, not aggressive animation.

Possible implementation ideas:
- Animated SVG background
- Canvas-based particles/lines
- CSS radial gradients with moving network lines
- Lightweight React component if the project uses React
- No heavy dependencies unless absolutely necessary

The animation must be responsive and performant.

Respect prefers-reduced-motion:
If the user has reduced motion enabled, disable or simplify the animation.

==================================================
2. CREATE A CIRCULAR THEME SELECTOR
==================================================

Replace or enhance the existing theme toggle with a premium circular theme selector.

Design concept:
A circular selector divided into four equal quarters:

- 1/4 Light Mode
- 1/4 Dark Mode
- 1/4 Networking Motion Mode
- 1/4 Black Mode

Each quarter must visually represent its theme:
- Light Mode: clean white / soft silver / light blue accent
- Dark Mode: deep navy / slate / soft cyan accent
- Networking Motion Mode: blue / cyan / electric network flow accent
- Black Mode: pure black / graphite / minimal white accent

The selector should feel like a polished product UI element, not a basic button.

Functional requirements:
- Clicking each quarter changes the website theme
- The active theme should be visually highlighted
- Add accessible labels and keyboard navigation
- Add tooltips or small labels if appropriate
- Persist the selected theme in localStorage
- On reload, restore the selected theme
- Respect system preference only as fallback when no theme is selected

UX requirements:
- Make it simple to understand
- Avoid making the theme selector too large or intrusive
- It can be placed in the navbar, floating control, or settings area depending on the current design
- Must work perfectly on mobile

==================================================
3. ADD “NabilNet” AS A SMALL LOGO INSIDE THE CIRCLE
==================================================

Inside the circular theme selector, add a small centered logo/text mark:

“NabilNet”

Design direction:
- Keep it minimal and premium
- It can be written as text or small monogram
- It should fit inside the circle without clutter
- The logo color should adapt to the selected theme
- It should remain readable in all four modes

Possible styling:
- Small centered text
- Subtle border
- Mini-glass effect
- Tiny network node icon next to the name if appropriate

Do not make it look childish or overloaded.

==================================================
4. THEME COLOR SYSTEM
==================================================

Create a clean theme token system.

Each theme should define:
- Background
- Surface / card background
- Primary text
- Secondary text
- Muted text
- Border color
- Accent color
- Accent hover color
- Button color
- Card shadow
- Gradient background if used
- Motion background colors where applicable

Theme expectations:

Light Mode:
- Bright, clean, professional
- Soft white / off-white backgrounds
- Navy or graphite text
- Blue/cyan accent

Dark Mode:
- Premium dark navy/slate
- Good contrast
- Soft cyan/blue accent
- Elegant cards

Networking Motion Mode:
- Dark technology-inspired base
- Animated networking flow background
- Cyan/blue/electric accents
- Glassmorphism cards can be used carefully
- Text must remain readable

Black Mode:
- Minimal black aesthetic
- Near-black / pure black background
- White / gray text
- Subtle borders
- Minimal accent color
- Very elegant and focused

Do not use random colors. Make sure each theme feels intentional and visually coherent.

==================================================
5. UI/UX FRIENDLY REVIEW AND IMPROVEMENT
==================================================

Conduct a UI/UX review of the current website and improve the design to make it:

- More smooth
- Simpler to use
- More readable
- More consistent
- More elegant
- More professional
- Less overloaded
- Better structured on mobile
- Better spaced
- More consulting-grade

Improve:
- Section spacing
- Typography hierarchy
- Card consistency
- Buttons
- Hover states
- Navigation clarity
- Mobile responsiveness
- Theme transition smoothness
- Content readability
- CTA clarity
- Visual balance

Avoid:
- Too much text in one block
- Too many competing colors
- Heavy animations
- Large cluttered sections
- Overcomplicated UI
- Overly flashy gradients
- Inconsistent spacing

Add smooth transitions:
- Theme transitions
- Card hover transitions
- Background transitions
- Button transitions

Use subtle animation only where it improves the user experience.

==================================================
6. REMOVE SPECIFIC SECTIONS
==================================================

Remove the following parts from the website:

- “Let’s Build the Future of Infrastructure”
- Skills section

If these sections exist under different names but clearly represent the same content, remove or replace them with a cleaner structure.

Do not remove the technical expertise section if it is structured as service/capability categories. Only remove the generic “skills” block if it feels like a basic skills list.

==================================================
7. UPDATE THE ABOUT ME SECTION
==================================================

Replace the current About Me content with the following polished version:

'With extensive experience across international organizations, government agencies, digital businesses, and global infrastructure environments, I specialize in designing and delivering secure, scalable, and resilient technology platforms.

My career has focused on modernizing enterprise infrastructure through cloud adoption, network transformation, cybersecurity integration, automation, datacenter modernization, and operational excellence.

I have led and contributed to strategic initiatives involving multi-cloud Disaster Recovery, Zero Trust infrastructure, secure remote access, Cisco ISE modernization, VPN platforms serving thousands of users, datacenter redesign, SD-WAN, cloud interconnectivity, and global network standardization.

My approach combines deep technical expertise with consulting-grade execution: understanding business requirements, designing robust architectures, coordinating stakeholders, managing complexity, and delivering infrastructure solutions that are secure, scalable, and future-ready.'

---

# Professional Experience

## OECD — Senior Network & Cloud Engineer

**07/2022 – Present**
**Paris, France**

Senior Engineer responsible for cloud, networking, cybersecurity, automation, datacenter, and multimedia infrastructure within an international organization serving **38 member countries** and more than **4,000 employees worldwide**.

Operating at the intersection of enterprise infrastructure, security, automation, and digital transformation, this role involves designing, modernizing, and securing complex technology environments while supporting strategic infrastructure initiatives across international teams, affiliates, and service providers.

### Scope of Responsibilities

* Design, deployment, and support of enterprise network, datacenter, cloud, security, wireless, and multimedia infrastructures.
* Technical ownership of critical infrastructure components including **Cisco Nexus, Catalyst, ACI, DNA Center, Cisco Wi-Fi, F5 BIG-IP LTM/APM, Palo Alto, Fortinet, Cisco ISE, Azure, AWS, DNS, VPN, and automation platforms**.
* Leadership of infrastructure modernization initiatives focused on scalability, security, resilience, operational efficiency, and automation.
* Coordination of large-scale technical projects involving internal teams, international affiliates, external providers, and technology partners.
* Support for secure connectivity, hybrid cloud integration, datacenter evolution, access control, remote access, and operational continuity.

### Key Achievements

* Introduced and promoted **DevOps and NetDevOps practices** within the infrastructure team, enabling more structured, automated, and repeatable operational workflows.
* Implemented modern automation capabilities using **Ansible Automation Platform, NetBox, Docker, Git, Python, and infrastructure-as-code principles**.
* Designed a **multi-cloud Disaster Recovery architecture** across **Azure and AWS**, integrating automated failover workflows using **Python and Ansible**.
* Led critical upgrades and infrastructure migrations, including:

  * Cisco ISE clusters
  * VPN gateways supporting **6,000+ remote users**
  * Core network infrastructure
  * Secure enterprise connectivity platforms
* Worked with OECD affiliates including **ITF, NEA, and IEA** to modernize interconnection solutions while maintaining strong security, compliance, and operational continuity requirements.
* Designed and supervised secure enterprise Wi-Fi deployments using **802.1X authentication** across multiple international sites.
* Contributed to the modernization of datacenter and cloud connectivity architectures, improving resilience, security posture, and operational scalability.
* Supported the standardization of infrastructure practices across international and multi-stakeholder environments.

### Strategic Impact

Strengthened the organization’s global infrastructure foundation by combining secure architecture, automation, cloud integration, and resilient design. Contributed to the transition from traditional infrastructure operations toward a more modern, automated, and security-driven operating model.

---

## American Battle Monuments Commission — Network & Cloud Engineer

**04/2019 – 06/2022**

Network and Cloud Engineer for a U.S. government agency operating globally, contributing to secure infrastructure modernization, cloud adoption, network transformation, and cybersecurity-aligned architecture initiatives.

This role involved supporting global network, cloud, security, and communication platforms in a highly regulated environment requiring resilience, operational continuity, and strong alignment with security standards.

### Scope of Responsibilities

* Design and support of next-generation network, cloud, and security solutions.
* Contribution to infrastructure modernization initiatives across global locations.
* Support for secure remote access, cloud connectivity, network segmentation, and communication platforms.
* Collaboration with cybersecurity teams on access control, threat management, and security architecture.
* Support for production environments requiring high availability, secure operations, and global coordination.

### Technology Scope

* SD-WAN
* SD-Access
* Next-Generation Firewalls
* Zscaler ZIA / ZPA
* Microsoft Azure Government Cloud
* AWS
* DevOps platforms
* Microsoft Teams Telephony
* Secure remote access
* Enterprise communication platforms

### Key Achievements

* Contributed to the migration toward **Azure Government Cloud**, supporting cloud transformation in a U.S. government context.
* Designed automation workflows to improve production reliability, accelerate operational activities, and reduce manual intervention.
* Defined enterprise network and communication standards to improve consistency, scalability, and governance across the organization.
* Worked closely with cybersecurity teams on access control, threat management, secure connectivity, and infrastructure protection.
* Participated in Microsoft Teams telephony migration initiatives, supporting the modernization of enterprise communication services.
* Collaborated on global infrastructure modernization programs involving cloud, network, security, and communication platforms.
* Supported the adoption of modern secure access models, including Zscaler-based cloud security and remote access capabilities.

### Strategic Impact

Contributed to the modernization of a global government infrastructure landscape by supporting cloud migration, security transformation, secure access modernization, automation, and global network standardization.

---

## eDreams ODIGEO — Network & Cloud Engineer

**10/2017 – 03/2019**

Network and Cloud Engineer for a leading European online travel company with more than **2,000 employees**, supporting scalable cloud, network, and connectivity platforms across a fast-paced digital business environment.

This role focused on enabling resilient, scalable, and high-performing infrastructure services across hybrid and multi-cloud environments supporting business-critical digital platforms.

### Scope of Responsibilities

* Design and support of SDN, SD-WAN, hybrid cloud, and multi-cloud infrastructure.
* Management of enterprise network services across cloud and on-premise environments.
* Support for international WAN, LAN, wireless, internet connectivity, cloud interconnect, security, and monitoring platforms.
* Collaboration with infrastructure, cloud, and operations teams to support digital platform scalability and performance.
* Contribution to global network service deployment and infrastructure transformation initiatives.

### Key Achievements

* Designed scalable cloud network architectures across:

  * AWS
  * Google Cloud Platform
  * Microsoft Azure
* Supported Kubernetes infrastructure and **Google Cloud Interconnect** integration.
* Managed WAN, LAN, wireless, internet connectivity, security, and monitoring environments across multiple sites.
* Improved network resilience and scalability through telemetry-driven optimization and operational visibility improvements.
* Coordinated the deployment of new global network services and infrastructure initiatives.
* Supported hybrid cloud connectivity patterns enabling more flexible, scalable, and resilient business operations.
* Contributed to infrastructure modernization in a high-growth, cloud-enabled digital company.

### Strategic Impact

Enabled scalable and resilient infrastructure capabilities for a major European digital business by supporting multi-cloud connectivity, cloud networking, Kubernetes integration, and global network modernization.

---

## OECD — Senior Network & Multimedia Engineer

**03/2016 – 09/2017**

Senior Network and Multimedia Engineer supporting enterprise network, security, wireless, and multimedia infrastructure modernization within an international organization.

The role combined technical delivery, infrastructure design, secure connectivity, and project coordination across enterprise and affiliate environments.

### Scope of Responsibilities

* Design and implementation of modern enterprise network, datacenter, wireless, and security solutions.
* Support for infrastructure modernization programs involving Cisco ACI, Cisco NGFW, Cisco ISE, F5 BIG-IP, Cisco Wireless, and UCOPIA.
* Coordination of network migration, relocation, interconnection, and modernization initiatives.
* Collaboration with internal IT teams, service providers, and affiliates to ensure secure and reliable connectivity.

### Key Achievements

* Led ISP migration from **SFR to Zayo**, supporting improved connectivity performance and service reliability.
* Managed relocation and infrastructure migration activities for approximately **1,500 users**.
* Designed secure firewall interconnection architecture for OECD affiliates.
* Prepared and coordinated a **Cisco ACI Proof of Concept** for datacenter modernization.
* Supported enterprise wireless and access control modernization using Cisco and UCOPIA technologies.
* Contributed to the evolution of datacenter architecture toward more scalable and policy-driven models.

### Strategic Impact

Supported major infrastructure transformation initiatives, including connectivity modernization, user relocation, secure affiliate interconnection, and preparation for next-generation datacenter architecture.

---

## eDreams ODIGEO — Network & Data Center Engineer

**09/2014 – 02/2016**

Network and Data Center Engineer responsible for supporting international datacenter, MAN, WAN, security, and wireless infrastructure across multiple offices and operational environments.

This role focused on the design, deployment, and operational support of next-generation datacenter and connectivity platforms across France, Spain, and international business locations.

### Scope of Responsibilities

* Design and support of datacenter, MAN, WAN, LAN, security, and wireless infrastructures.
* Support for network and security platforms across multiple international offices.
* Collaboration with telecom operators, technology vendors, and international infrastructure teams.
* Contribution to datacenter modernization, secure connectivity, and multi-site operational reliability.

### Key Achievements

* Designed and deployed next-generation datacenter infrastructures across **France and Spain**.
* Integrated and supported modern datacenter and security technologies including:

  * Cisco Nexus
  * Top-of-Rack architectures
  * Cisco ASA
  * Check Point
  * F5 BIG-IP LTM / GTM
* Collaborated with international teams on multi-site infrastructure operations.
* Worked with telecom operators and hardware vendors to deliver scalable connectivity solutions.
* Supported resilient network architectures for business-critical digital services.
* Contributed to improved infrastructure scalability, security, and operational consistency.

### Strategic Impact

Helped modernize the company’s datacenter and connectivity foundations by deploying scalable network architectures, strengthening security controls, and supporting international infrastructure operations.

---

## Sonangol — Network & Data Center Engineer

**03/2014 – 08/2014**

Network and Data Center Engineer supporting campus network modernization, secure connectivity, unified communications, and infrastructure deployment initiatives.

### Key Achievements

* Designed and implemented campus network infrastructure across **four buildings** using Cisco technologies.
* Integrated unified communications solutions including:

  * Cisco Call Manager
  * Video conferencing
  * IP telephony
* Designed secure infrastructure components using:

  * Cisco ASA firewalls
  * IPSEC VPN
  * RSA authentication
* Supported secure connectivity, communication services, and network availability across the campus environment.
* Contributed to the modernization of enterprise communication and security infrastructure.

### Strategic Impact

Delivered a secure and scalable campus network foundation supporting enterprise communication, secure access, and operational connectivity across multiple buildings.

---

## Gemalto — Network & Data Center Engineer

**01/2014 – 03/2014**

Network and Data Center Engineer supporting WAN migration activities and ITIL-based infrastructure change management within a global technology environment.

### Scope of Responsibilities

* Support for WAN migration and global network change operations.
* Coordination of technical changes in line with ITIL governance practices.
* Preparation and presentation of infrastructure changes to CAB boards.
* Support for high-availability network environments requiring operational continuity.

### Key Achievements

* Executed and coordinated global network change operations.
* Presented infrastructure changes to Change Advisory Boards.
* Ensured service continuity and operational stability during WAN migration activities.
* Supported infrastructure governance through structured change management processes.
* Contributed to reliable execution of network changes across international environments.

### Strategic Impact

Supported global network transformation activities while maintaining strong change governance, operational continuity, and infrastructure reliability.

---

## Subsea 7 — Network & Telecommunication Engineer

**04/2010 – 12/2013**

Network and Telecommunication Engineer responsible for designing, deploying, and supporting enterprise network, security, wireless, unified communication, and connectivity infrastructures across global and offshore environments.

This role involved large-scale infrastructure delivery across offices, datacenters, and vessels located across Europe, Africa, and the Middle East.

### Scope of Responsibilities

* Design and support of enterprise network, security, wireless, and unified communication infrastructures.
* Deployment and maintenance of LAN, WAN, MPLS, VSAT, internet, VPN, firewall, and Cisco UC solutions.
* Support for office, datacenter, and vessel connectivity across multiple regions.
* Delivery of on-site migration, training, troubleshooting, and infrastructure support.
* Management of large-scale Cisco-based network environments.

### Key Achievements

* Designed and deployed LAN infrastructure across:

  * 30 offices
  * 6 datacenters
  * 10 vessels
  * Europe, Africa, and Middle East regions
* Managed large-scale Cisco environments with more than **1,200 network devices**.
* Implemented and supported:

  * MPLS connectivity
  * VSAT satellite connectivity
  * DIA internet services
  * Cisco Unified Communications
  * VPN and firewall infrastructures
* Delivered on-site technical training and migration support across multiple international locations.
* Supported operational connectivity for demanding environments, including offshore and remote sites.
* Contributed to global infrastructure standardization and service reliability.

### Strategic Impact

Delivered resilient global connectivity across complex, distributed, and offshore environments, enabling secure communications, operational continuity, and scalable network services across multiple regions.

---

## Freeson IT — Network & System Engineer

**09/2008 – 08/2009**

Network and System Engineer providing infrastructure deployment, technical support, troubleshooting, and systems administration services.

### Key Achievements

* Deployed and configured servers, Cisco switches, user workstations, and network components.
* Maintained and optimized network and system infrastructures.
* Provided technical support and troubleshooting for users and infrastructure services.
* Supported day-to-day IT operations, system availability, and network reliability.
* Built foundational expertise in enterprise networking, systems administration, and technical operations.

### Strategic Impact

Developed a strong technical foundation in network and system engineering, supporting reliable IT operations and infrastructure service delivery.

---

# Executive Experience Summary

Across more than a decade of experience, I have contributed to the design, modernization, and operation of complex infrastructure environments across international organizations, government agencies, digital companies, energy, telecom, and technology sectors.

My experience spans:

* Enterprise network architecture
* Cloud and multi-cloud infrastructure
* Secure access and Zero Trust models
* Datacenter modernization
* Automation and NetDevOps
* Disaster Recovery architecture
* Global connectivity
* Wireless and access control
* Unified communications
* Infrastructure governance and change management

I bring a strong combination of hands-on technical depth, architecture capability, operational discipline, and transformation mindset, enabling organizations to build secure, resilient, scalable, and automation-ready infrastructure platforms.

---

# Premium Portfolio Introduction Version

With extensive experience across international organizations, government agencies, digital businesses, and global infrastructure environments, I specialize in designing and delivering secure, scalable, and resilient technology platforms.

My career has focused on modernizing enterprise infrastructure through cloud adoption, network transformation, cybersecurity integration, automation, datacenter modernization, and operational excellence.

I have led and contributed to strategic initiatives involving multi-cloud Disaster Recovery, Zero Trust infrastructure, secure remote access, Cisco ISE modernization, VPN platforms serving thousands of users, datacenter redesign, SD-WAN, cloud interconnectivity, and global network standardization.

My approach combines deep technical expertise with consulting-grade execution: understanding business requirements, designing robust architectures, coordinating stakeholders, managing complexity, and delivering infrastructure solutions that are secure, scalable, and future-ready.
'

==================================================
8. UPDATE PROFESSIONAL EXPERIENCE
==================================================

Update the Professional Experience section using the following roles and structure.

Make the section premium, readable, and executive-level.

Preferred layout options:
- Vertical timeline
- Expandable accordion
- Experience cards
- Alternating timeline cards
- Clean consulting-style blocks

Each experience should include:
- Company name
- Role title
- Dates
- Location if available
- Short role overview
- Scope of responsibilities
- Key achievements
- Strategic impact

Use the following professional experience content:

A . OECD — Senior Network & Cloud Engineer

07/2022 – Present
Paris, France

Senior Engineer responsible for cloud, networking, cybersecurity, automation, datacenter, and multimedia infrastructure within an international organization serving 38 member countries and more than 4,000 employees worldwide.

Operating at the intersection of enterprise infrastructure, security, automation, and digital transformation, this role involves designing, modernizing, and securing complex technology environments while supporting strategic infrastructure initiatives across international teams, affiliates, and service providers.

Scope of Responsibilities
Design, deployment, and support of enterprise network, datacenter, cloud, security, wireless, and multimedia infrastructures.
Technical ownership of critical infrastructure components including Cisco Nexus, Catalyst, ACI, DNA Center, Cisco Wi-Fi, F5 BIG-IP LTM/APM, Palo Alto, Fortinet, Cisco ISE, Azure, AWS, DNS, VPN, and automation platforms.
Leadership of infrastructure modernization initiatives focused on scalability, security, resilience, operational efficiency, and automation.
Coordination of large-scale technical projects involving internal teams, international affiliates, external providers, and technology partners.
Support for secure connectivity, hybrid cloud integration, datacenter evolution, access control, remote access, and operational continuity.
Key Achievements
Introduced and promoted DevOps and NetDevOps practices within the infrastructure team, enabling more structured, automated, and repeatable operational workflows.
Implemented modern automation capabilities using Ansible Automation Platform, NetBox, Docker, Git, Python, and infrastructure-as-code principles.
Designed a multi-cloud Disaster Recovery architecture across Azure and AWS, integrating automated failover workflows using Python and Ansible.
Led critical upgrades and infrastructure migrations, including:
Cisco ISE clusters
VPN gateways supporting 6,000+ remote users
Core network infrastructure
Secure enterprise connectivity platforms
Worked with OECD affiliates including ITF, NEA, and IEA to modernize interconnection solutions while maintaining strong security, compliance, and operational continuity requirements.
Designed and supervised secure enterprise Wi-Fi deployments using 802.1X authentication across multiple international sites.
Contributed to the modernization of datacenter and cloud connectivity architectures, improving resilience, security posture, and operational scalability.
Supported the standardization of infrastructure practices across international and multi-stakeholder environments.
Strategic Impact

Strengthened the organization’s global infrastructure foundation by combining secure architecture, automation, cloud integration, and resilient design. Contributed to the transition from traditional infrastructure operations toward a more modern, automated, and security-driven operating model.

B. American Battle Monuments Commission — Network & Cloud Engineer

04/2019 – 06/2022

Network and Cloud Engineer for a U.S. government agency operating globally, contributing to secure infrastructure modernization, cloud adoption, network transformation, and cybersecurity-aligned architecture initiatives.

This role involved supporting global network, cloud, security, and communication platforms in a highly regulated environment requiring resilience, operational continuity, and strong alignment with security standards.

Scope of Responsibilities
Design and support of next-generation network, cloud, and security solutions.
Contribution to infrastructure modernization initiatives across global locations.
Support for secure remote access, cloud connectivity, network segmentation, and communication platforms.
Collaboration with cybersecurity teams on access control, threat management, and security architecture.
Support for production environments requiring high availability, secure operations, and global coordination.
Technology Scope
SD-WAN
SD-Access
Next-Generation Firewalls
Zscaler ZIA / ZPA
Microsoft Azure Government Cloud
AWS
DevOps platforms
Microsoft Teams Telephony
Secure remote access
Enterprise communication platforms
Key Achievements
Contributed to the migration toward Azure Government Cloud, supporting cloud transformation in a U.S. government context.
Designed automation workflows to improve production reliability, accelerate operational activities, and reduce manual intervention.
Defined enterprise network and communication standards to improve consistency, scalability, and governance across the organization.
Worked closely with cybersecurity teams on access control, threat management, secure connectivity, and infrastructure protection.
Participated in Microsoft Teams telephony migration initiatives, supporting the modernization of enterprise communication services.
Collaborated on global infrastructure modernization programs involving cloud, network, security, and communication platforms.
Supported the adoption of modern secure access models, including Zscaler-based cloud security and remote access capabilities.
Strategic Impact

Contributed to the modernization of a global government infrastructure landscape by supporting cloud migration, security transformation, secure access modernization, automation, and global network standardization.

C. eDreams ODIGEO — Network & Cloud Engineer

10/2017 – 03/2019

Network and Cloud Engineer for a leading European online travel company with more than 2,000 employees, supporting scalable cloud, network, and connectivity platforms across a fast-paced digital business environment.

This role focused on enabling resilient, scalable, and high-performing infrastructure services across hybrid and multi-cloud environments supporting business-critical digital platforms.

Scope of Responsibilities
Design and support of SDN, SD-WAN, hybrid cloud, and multi-cloud infrastructure.
Management of enterprise network services across cloud and on-premise environments.
Support for international WAN, LAN, wireless, internet connectivity, cloud interconnect, security, and monitoring platforms.
Collaboration with infrastructure, cloud, and operations teams to support digital platform scalability and performance.
Contribution to global network service deployment and infrastructure transformation initiatives.
Key Achievements
Designed scalable cloud network architectures across:
AWS
Google Cloud Platform
Microsoft Azure
Supported Kubernetes infrastructure and Google Cloud Interconnect integration.
Managed WAN, LAN, wireless, internet connectivity, security, and monitoring environments across multiple sites.
Improved network resilience and scalability through telemetry-driven optimization and operational visibility improvements.
Coordinated the deployment of new global network services and infrastructure initiatives.
Supported hybrid cloud connectivity patterns enabling more flexible, scalable, and resilient business operations.
Contributed to infrastructure modernization in a high-growth, cloud-enabled digital company.
Strategic Impact

Enabled scalable and resilient infrastructure capabilities for a major European digital business by supporting multi-cloud connectivity, cloud networking, Kubernetes integration, and global network modernization.

D. OECD — Senior Network & Multimedia Engineer

03/2016 – 09/2017

Senior Network and Multimedia Engineer supporting enterprise network, security, wireless, and multimedia infrastructure modernization within an international organization.

The role combined technical delivery, infrastructure design, secure connectivity, and project coordination across enterprise and affiliate environments.

Scope of Responsibilities
Design and implementation of modern enterprise network, datacenter, wireless, and security solutions.
Support for infrastructure modernization programs involving Cisco ACI, Cisco NGFW, Cisco ISE, F5 BIG-IP, Cisco Wireless, and UCOPIA.
Coordination of network migration, relocation, interconnection, and modernization initiatives.
Collaboration with internal IT teams, service providers, and affiliates to ensure secure and reliable connectivity.
Key Achievements
Led ISP migration from SFR to Zayo, supporting improved connectivity performance and service reliability.
Managed relocation and infrastructure migration activities for approximately 1,500 users.
Designed secure firewall interconnection architecture for OECD affiliates.
Prepared and coordinated a Cisco ACI Proof of Concept for datacenter modernization.
Supported enterprise wireless and access control modernization using Cisco and UCOPIA technologies.
Contributed to the evolution of datacenter architecture toward more scalable and policy-driven models.
Strategic Impact

Supported major infrastructure transformation initiatives, including connectivity modernization, user relocation, secure affiliate interconnection, and preparation for next-generation datacenter architecture.

E. eDreams ODIGEO — Network & Data Center Engineer

09/2014 – 02/2016

Network and Data Center Engineer responsible for supporting international datacenter, MAN, WAN, security, and wireless infrastructure across multiple offices and operational environments.

This role focused on the design, deployment, and operational support of next-generation datacenter and connectivity platforms across France, Spain, and international business locations.

Scope of Responsibilities
Design and support of datacenter, MAN, WAN, LAN, security, and wireless infrastructures.
Support for network and security platforms across multiple international offices.
Collaboration with telecom operators, technology vendors, and international infrastructure teams.
Contribution to datacenter modernization, secure connectivity, and multi-site operational reliability.
Key Achievements
Designed and deployed next-generation datacenter infrastructures across France and Spain.
Integrated and supported modern datacenter and security technologies including:
Cisco Nexus
Top-of-Rack architectures
Cisco ASA
Check Point
F5 BIG-IP LTM / GTM
Collaborated with international teams on multi-site infrastructure operations.
Worked with telecom operators and hardware vendors to deliver scalable connectivity solutions.
Supported resilient network architectures for business-critical digital services.
Contributed to improved infrastructure scalability, security, and operational consistency.
Strategic Impact

Helped modernize the company’s datacenter and connectivity foundations by deploying scalable network architectures, strengthening security controls, and supporting international infrastructure operations.

F. Sonangol — Network & Data Center Engineer

03/2014 – 08/2014

Network and Data Center Engineer supporting campus network modernization, secure connectivity, unified communications, and infrastructure deployment initiatives.

Key Achievements
Designed and implemented campus network infrastructure across four buildings using Cisco technologies.
Integrated unified communications solutions including:
Cisco Call Manager
Video conferencing
IP telephony
Designed secure infrastructure components using:
Cisco ASA firewalls
IPSEC VPN
RSA authentication
Supported secure connectivity, communication services, and network availability across the campus environment.
Contributed to the modernization of enterprise communication and security infrastructure.
Strategic Impact

Delivered a secure and scalable campus network foundation supporting enterprise communication, secure access, and operational connectivity across multiple buildings.

G. Gemalto — Network & Data Center Engineer

01/2014 – 03/2014

Network and Data Center Engineer supporting WAN migration activities and ITIL-based infrastructure change management within a global technology environment.

Scope of Responsibilities
Support for WAN migration and global network change operations.
Coordination of technical changes in line with ITIL governance practices.
Preparation and presentation of infrastructure changes to CAB boards.
Support for high-availability network environments requiring operational continuity.
Key Achievements
Executed and coordinated global network change operations.
Presented infrastructure changes to Change Advisory Boards.
Ensured service continuity and operational stability during WAN migration activities.
Supported infrastructure governance through structured change management processes.
Contributed to reliable execution of network changes across international environments.
Strategic Impact

Supported global network transformation activities while maintaining strong change governance, operational continuity, and infrastructure reliability.

H. Subsea 7 — Network & Telecommunication Engineer

04/2010 – 12/2013

Network and Telecommunication Engineer responsible for designing, deploying, and supporting enterprise network, security, wireless, unified communication, and connectivity infrastructures across global and offshore environments.

This role involved large-scale infrastructure delivery across offices, datacenters, and vessels located across Europe, Africa, and the Middle East.

Scope of Responsibilities
Design and support of enterprise network, security, wireless, and unified communication infrastructures.
Deployment and maintenance of LAN, WAN, MPLS, VSAT, internet, VPN, firewall, and Cisco UC solutions.
Support for office, datacenter, and vessel connectivity across multiple regions.
Delivery of on-site migration, training, troubleshooting, and infrastructure support.
Management of large-scale Cisco-based network environments.
Key Achievements
Designed and deployed LAN infrastructure across:
30 offices
6 datacenters
10 vessels
Europe, Africa, and Middle East regions
Managed large-scale Cisco environments with more than 1,200 network devices.
Implemented and supported:
MPLS connectivity
VSAT satellite connectivity
DIA internet services
Cisco Unified Communications
VPN and firewall infrastructures
Delivered on-site technical training and migration support across multiple international locations.
Supported operational connectivity for demanding environments, including offshore and remote sites.
Contributed to global infrastructure standardization and service reliability.
Strategic Impact

Delivered resilient global connectivity across complex, distributed, and offshore environments, enabling secure communications, operational continuity, and scalable network services across multiple regions.

G. Freeson IT — Network & System Engineer

09/2008 – 08/2009

Network and System Engineer providing infrastructure deployment, technical support, troubleshooting, and systems administration services.

Key Achievements
Deployed and configured servers, Cisco switches, user workstations, and network components.
Maintained and optimized network and system infrastructures.
Provided technical support and troubleshooting for users and infrastructure services.
Supported day-to-day IT operations, system availability, and network reliability.
Built foundational expertise in enterprise networking, systems administration, and technical operations.
Strategic Impact

Developed a strong technical foundation in network and system engineering, supporting reliable IT operations and infrastructure service delivery.

==================================================
9. EXPERIENCE SECTION UX REQUIREMENT
==================================================

The professional experience section is long, so make it easy to navigate.

Recommended behavior:
- Show a short preview for each role
- Allow users to expand/collapse details
- Keep the page clean
- Avoid displaying all details in giant text blocks by default
- Add visual tags for technologies
- Add strategic impact as a highlighted note
- Use consistent formatting across all roles

Add filters only if useful:
- Cloud
- Security
- Network
- Automation
- Datacenter
- Government
- Digital Business

Do not overcomplicate the user experience.

==================================================
10. FOOTER AND GENERAL CLEANUP
==================================================

Keep the footer minimal.

Footer should only include:
- Small icon links
- LinkedIn
- GitHub
- Email
- Resume/CV if available
- Optional location/contact icon

Footer requirements:
- Small icons
- Horizontal alignment
- Accessible aria-labels
- Smooth hover effect
- Minimal copyright
- No large text blocks

==================================================
11. ACCESSIBILITY REQUIREMENTS
==================================================

Ensure:
- Proper contrast in all four themes
- Keyboard navigation for theme selector
- aria-labels for icon buttons
- Focus states
- Reduced motion support
- Semantic HTML
- Correct heading hierarchy
- Mobile-friendly tap targets

==================================================
12. PERFORMANCE REQUIREMENTS
==================================================

The networking motion theme must not hurt performance.

Requirements:
- No heavy animation library unless already used in the project
- Use CSS/SVG/canvas efficiently
- Pause or simplify animation when not visible if possible
- Respect reduced motion
- Avoid layout shifts
- Keep Lighthouse performance reasonable

==================================================
13. FINAL VALIDATION
==================================================

After implementation:
- Run lint if available
- Run type-check if available
- Run build if available
- Fix all errors
- Check all four themes
- Check mobile layout
- Check footer icons
- Check the circular theme selector
- Check the networking motion background
- Ensure no broken links or broken imports
- Summarize the files changed and the key improvements made

==================================================
14. STYLE EXPECTATION
==================================================

The final website should feel like:
- A premium senior infrastructure architect portfolio
- A consulting-grade executive profile
- Modern enterprise technology design
- Smooth, simple, and easy to use
- Technically impressive without being flashy
- Clean enough for recruiters, executives, and technical leaders
