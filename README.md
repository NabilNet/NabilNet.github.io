Act as a senior frontend engineer, premium UI/UX designer, design-system expert, and production code reviewer.

I want you to improve the current NabilNet portfolio website design and theme experience.

Main objective:
Refine the theme selector, improve theme/color harmony, conduct a UI/UX and design review, fix all visual/errors issues, and re-add the “Expertise Areas / Skills” section using the previous #5 style/structure.

Do not rewrite the whole website unnecessarily. Inspect the existing implementation first, then apply targeted improvements.

==================================================
1. MAKE THE CIRCULAR THEME SELECTOR SMALLER
==================================================

The current circular 4-theme selector is too large.

Make it smaller, cleaner, and more elegant.

Requirements:
- Reduce the circle size significantly.
- It should feel like a compact premium control, not a dominant visual element.
- Keep the 4-quadrant concept:
  - Light
  - Dark
  - Network
  - Black
- Keep the centered “NabilNet” mini-logo, but make it proportionally smaller.
- Ensure the logo remains readable.
- Ensure the selector works on desktop and mobile.
- Avoid layout shifts in the navbar.
- Keep hover/active states visible but subtle.
- Keep accessible labels/tooltips.
- Keep keyboard accessibility.

Suggested sizing:
- Desktop: around 44px–56px diameter
- Mobile: around 40px–48px diameter
- Center logo/text should be very small and clean
- Do not make the selector oversized.

==================================================
2. MAKE THE THEME SELECTOR MORE DYNAMIC BUT STILL SUBTLE
==================================================

Add subtle dynamic interaction to the selector.

Examples:
- Soft rotation on hover
- Gentle glow on active theme
- Slight scale on hover
- Smooth quadrant highlight
- Tiny pulse on the selected quadrant
- Smooth transition when changing theme

Important:
- Keep it professional.
- Do not make it childish.
- Do not add heavy animation.
- Respect prefers-reduced-motion.
- Animation must not affect performance.
- Animation must not create visual noise.

==================================================
3. FIX WRITING/TEXT COLORS AND THEME HARMONY
==================================================

Review and correct all text colors across all themes.

The problem:
Some text colors and theme colors do not match well or may have weak contrast.

Your task:
Conduct a full theme/color review and fix the design tokens.

Check all four themes:
- Light
- Dark
- Network
- Black

For each theme, ensure:
- Main text is readable
- Secondary text is readable
- Muted text is still visible
- Links are visible
- Buttons have good contrast
- Cards are clearly separated from the background
- Borders are subtle but visible
- Badges/tags are readable
- Footer icons are visible
- Experience cards are readable
- Expertise/skills tags are readable
- Network motion background does not reduce readability

Use a consistent token system based on:

--color-bg
--color-surface
--color-surface-elevated
--color-text
--color-text-muted
--color-border
--color-accent
--color-accent-hover
--color-card-shadow
--color-tag-bg
--color-tag-text
--color-link
--color-button-bg
--color-button-text

Make sure every theme defines all variables.

Do not use random hardcoded colors unless absolutely necessary.
Prefer CSS variables/theme tokens.

==================================================
4. CONDUCT A UI/UX REVIEW AND FIX ERRORS
==================================================

Conduct a complete UI/UX review of the website and correct problems.

Review:
- Navigation clarity
- Theme selector size and placement
- Section spacing
- Visual hierarchy
- Font sizes
- Paragraph readability
- Card spacing
- Button consistency
- Mobile responsiveness
- Touch targets
- Footer simplicity
- Experience section readability
- Background animation readability
- Overall page flow

Correct:
- Misaligned elements
- Overloaded blocks
- Poor spacing
- Weak contrast
- Bad hover states
- Inconsistent border radius
- Inconsistent card shadows
- Broken mobile layouts
- Text that is too large/small
- Sections that feel too dense
- Visual clutter
- Any obvious CSS/layout errors

The final UI should feel:
- Smooth
- Simple to use
- Premium
- Professional
- Modern
- Executive-focused
- Technically credible
- Easy to read

==================================================
5. CONDUCT A DESIGN REVIEW AND CORRECT ISSUES
==================================================

Act as a design reviewer and improve the visual identity.

Design goals:
- Premium infrastructure architect portfolio
- Apple-like simplicity
- Consulting-grade structure
- Clean enterprise technology aesthetic
- Elegant color system
- Smooth but restrained motion
- Strong readability
- Mature visual language

Correct:
- Inconsistent colors
- Inconsistent spacing
- Unbalanced sections
- Overly heavy gradients
- Cheap-looking effects
- Poor card hierarchy
- Weak typography
- Too much visual noise
- Footer clutter
- Theme selector dominance

Use:
- Better spacing
- Better contrast
- Cleaner typography scale
- Cleaner card design
- More coherent accent colors
- More consistent section rhythm
- More subtle shadows
- More polished hover states

==================================================
6. RE-ADD “EXPERTISE AREAS / SKILLS” SECTION
==================================================

Re-add the Expertise Areas / Skills section that was previously removed.

It should use the same structure/style as the previous #5 section, but make it more premium and consistent with the new design.

Section title suggestion:
“Expertise Areas”

Subtitle suggestion:
“Core technical domains across enterprise infrastructure, cybersecurity, cloud, automation, and modern operations.”

Include these expertise categories:

1. Networking
Skills/tags:
Cisco, Juniper, Arista, Cisco Nexus, Catalyst, ACI, SD-WAN, EVPN-VXLAN, BGP, OSPF, MPLS, Datacenter Networking, Global Network Architecture

2. Security
Skills/tags:
Palo Alto, Fortinet, Check Point, Cisco ISE, F5, Zscaler, Cloudflare, VPN, NAC, Zero Trust, Network Segmentation, Secure Remote Access

3. Cloud
Skills/tags:
Microsoft Azure, AWS, Google Cloud Platform, Hybrid Cloud, Multi-Cloud, Cloud Connectivity, Kubernetes, Cloud Interconnect, Cloud Security

4. Automation & NetDevOps
Skills/tags:
Ansible, Ansible Automation Platform, NetBox, Python, Docker, Git, REST APIs, CI/CD, Infrastructure Automation, Automated Remediation

5. Monitoring & Analytics
Skills/tags:
SolarWinds, Splunk, Telemetry, Infrastructure Monitoring, Operational Dashboards, Performance Monitoring, Infrastructure Observability

6. AI & Innovation
Skills/tags:
AI Infrastructure, AI Agents, Intelligent Automation, AI-Driven Operations, Infrastructure Optimization, Automation-Driven Service Management

Design requirements:
- Use clean cards or a responsive grid
- Each expertise area should have a clear title
- Use readable skill tags/badges
- Avoid making the section too dense
- Use consistent spacing
- Use theme-aware colors
- Cards must adapt correctly to all themes
- The section must be readable on mobile

Important:
Do not re-add a generic messy skills section.
It must feel like a premium “Expertise Areas” section.

==================================================
7. POSITION OF THE EXPERTISE SECTION
==================================================

Place the Expertise Areas section in a logical place.

Recommended page order:
1. Hero
2. About
3. Strategic Infrastructure Capabilities
4. Professional Experience
5. Expertise Areas
6. Featured Projects / Certifications / Education if present
7. Footer

If the existing structure is different, choose the best placement that improves flow.

==================================================
8. CHECK RESPONSIVENESS
==================================================

Test and fix the layout for:
- Desktop
- Tablet
- Mobile

Especially check:
- Circular selector size on mobile
- Navigation layout
- Experience cards
- Expertise cards
- Footer icons
- Network motion background
- Long text wrapping
- Tags wrapping
- Card spacing

No horizontal scrolling should occur.

==================================================
9. ACCESSIBILITY REQUIREMENTS
==================================================

Ensure:
- Good contrast across all themes
- aria-labels on theme selector buttons
- Footer icons have aria-labels
- Keyboard focus states are visible
- prefers-reduced-motion is respected
- Buttons have sufficient touch target size
- Semantic headings are logical
- Links are readable and identifiable

==================================================
10. TECHNICAL QUALITY REQUIREMENTS
==================================================

Do not leave:
- TypeScript errors
- ESLint errors
- Runtime errors
- Broken imports
- Missing variables
- Unused variables
- Duplicate theme values
- Inconsistent theme names
- Broken responsive styles
- Broken localStorage logic

Keep theme names consistent:
- light
- dark
- network
- black

Do not mix:
- networking
- networkMode
- motion
- network-motion

==================================================
11. FINAL VALIDATION
==================================================

Run:

npm run lint
npm run build

If available:

npm run preview

Fix all issues until the commands pass.

Final result must:
- Render correctly
- Have a smaller and more elegant theme selector
- Have subtle dynamic interactions
- Have readable text colors across all themes
- Have a coherent design system
- Include the re-added Expertise Areas section
- Work on mobile
- Have no runtime errors
- Feel more polished, smooth, and professional

Please reduce the visual size of the hero subtitle text:

“Designing resilient and secure enterprise platforms for global network and infrastructure modernization.”

Requirements:
- Make the text smaller and more elegant.
- Keep it readable and professional.
- Reduce font-size, line-height, and max-width if needed.
- On desktop, use a moderate subtitle size instead of a large headline style.
- On mobile, make it compact and well-spaced.
- Keep the text color theme-aware and readable across light, dark, network, and black modes.
- Do not reduce the main hero title size unless necessary.

Suggested styling:
- Desktop: font-size around 1rem to 1.125rem
- Mobile: font-size around 0.9rem to 1rem
- Line-height: around 1.5
- Max-width: around 680px
- Opacity or muted color can be slightly reduced, but contrast must remain accessible.

==================================================
12. FINAL RESPONSE EXPECTED
==================================================

When finished, provide:
- Summary of UI/UX improvements
- Summary of design fixes
- Theme/color fixes applied
- Expertise Areas section added
- Files changed
- Commands run
- Confirmation that lint/build passed
