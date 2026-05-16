You are OpenAI Codex acting as a senior React + Vite + GitHub Pages debugging engineer.

My portfolio website is currently showing a blank page after recent UI/UX upgrades.

Your mission is to fix the code strictly and make the portfolio work 100% in:
1. local development
2. production build
3. local preview
4. GitHub Pages production

Live website:
https://nabilnet.github.io/

Project stack:
React + Vite + GitHub Pages

Recent changed files:
- src/App.tsx
- src/components/Hero.tsx
- src/components/About.tsx
- src/components/Expertise.tsx
- src/components/Projects.tsx
- src/components/ExperienceTimeline.tsx
- src/components/Training.tsx
- src/components/Contact.tsx
- src/components/Footer.tsx
- src/components/Navbar.tsx
- src/components/NetworkBackground.tsx
- src/data/portfolio.ts
- src/index.css
- vite.config.ts

Important:
Do not redesign the website.
Do not add new UI features.
Do not introduce unnecessary dependencies.
Do not rewrite the full project unless absolutely required.
Focus only on fixing the blank page and stabilizing the application.

Main suspected issue:
The Vite base path may be wrong.

The site URL is:
https://nabilnet.github.io/

This is a GitHub Pages user site.

So vite.config.ts should most likely use:

base: "/"

not:

base: "/NabilNet.github.io/"

Only use base: "/NabilNet.github.io/" if the real production URL is:
https://nabilnet.github.io/NabilNet.github.io/

Step 1 — Inspect the project
Inspect:
- package.json
- index.html
- vite.config.ts
- src/main.tsx
- src/App.tsx
- all recently changed components
- src/data/portfolio.ts
- src/index.css
- GitHub Pages workflow if present

Step 2 — Reproduce the issue
Run:

npm install
npm run lint
npm run build
npm run preview -- --host 0.0.0.0 --port 4173

Also run the development server if useful:

npm run dev

Check for:
- white/blank page
- browser console errors
- failed JS/CSS assets
- 404 errors
- incorrect asset paths
- import/export errors
- React runtime crashes
- Framer Motion dependency issues
- CSS hiding the page

Step 3 — Fix Vite base path
Open vite.config.ts.

If this is present:

base: "/NabilNet.github.io/"

change it to:

base: "/"

Expected final config:

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/",
});

Then rebuild and verify assets load correctly.

Step 4 — Verify React entry point
Inspect index.html and src/main.tsx.

Confirm:
- index.html contains the correct root element
- ReactDOM.createRoot targets the correct ID
- App is imported correctly
- App renders visible content
- no condition accidentally returns null
- no provider crashes the entire app

Step 5 — Fix import/export issues
Check all components for:
- default export vs named export mismatch
- wrong import paths
- case-sensitive filename mismatch
- missing files
- broken aliases
- missing icon imports
- missing framer-motion import
- unused or invalid imports

Fix all import/export issues.

Step 6 — Make portfolio data safe
Inspect src/data/portfolio.ts and all components mapping over data.

Prevent crashes caused by undefined fields.

Use safe fallbacks:

const skills = portfolio.skills ?? [];
const projects = portfolio.projects ?? [];
const certifications = portfolio.certifications ?? [];
const experience = portfolio.experience ?? [];

Use optional chaining for optional fields:

project.links?.demo
project.links?.github
certification.verifyUrl
item.description ?? ""

No component should crash if a field is missing.

Step 7 — Check Framer Motion
If framer-motion is used, verify it exists in package.json.

If missing, either:
1. install it with npm install framer-motion, or
2. replace motion components with standard HTML elements and CSS transitions.

Prefer the smallest stable fix.

Animations must never be required for the page to render.

Step 8 — Make NetworkBackground fail-safe
NetworkBackground is a likely crash source.

Inspect src/components/NetworkBackground.tsx.

Fix it so it never breaks the page.

Rules:
- no window/document access during render
- all browser APIs must be inside useEffect
- canvas access must be guarded
- requestAnimationFrame must be cleaned up
- ResizeObserver must be guarded
- devicePixelRatio must be guarded
- if canvas fails, return null or disable animation safely
- remove production console noise
- never allow NetworkBackground to blank the whole app

If needed, temporarily remove NetworkBackground from App.tsx to confirm whether it causes the blank page.

Step 9 — Check CSS visibility
Inspect src/index.css.

Fix any rule that may hide the app:
- body display:none
- #root display:none
- opacity:0 without animation completion
- visibility:hidden
- fixed overlay covering all content
- z-index layer blocking the page
- text color same as background
- missing CSS variables causing invisible text

The page must remain readable even if animations fail.

Step 10 — Add a minimal Error Boundary
Add:

src/components/ErrorBoundary.tsx

Use it to prevent one broken section from blanking the full portfolio.

The fallback should be clean and professional:

"Something went wrong while loading this section."

Wrap risky sections:
- NetworkBackground
- Projects
- ExperienceTimeline
- Training

Do not expose technical error details in production UI.

Step 11 — Fix GitHub Actions warning if workflow exists
Inspect .github/workflows.

The log says Node.js 20 actions are deprecated.

Do not treat this as the main blank-page cause.

If a workflow exists, update it safely:
- keep official GitHub Pages deployment
- use node-version: 22
- keep actions/checkout@v4
- keep actions/setup-node@v4
- keep actions/configure-pages@v5
- use actions/upload-pages-artifact@v3 if applicable
- use actions/deploy-pages@v4 if applicable

Do not break deployment.

Step 12 — Final validation
After all fixes, run:

npm install
npm run lint
npm run build
npm run preview -- --host 0.0.0.0 --port 4173

Then verify manually:
- homepage renders
- Hero appears
- Navbar anchors work
- About appears
- Skills/Expertise appears
- Projects appears
- Experience/Journey appears
- Certifications/Training appears
- Contact appears
- Footer appears
- mobile layout works
- no blank page
- no console errors
- no failed JS/CSS assets
- no broken internal anchors

Step 13 — Final report
At the end, provide:

1. Root cause of the blank page
2. Files changed
3. Exact fixes applied
4. Whether the issue was caused by:
   - Vite base path
   - import/export mismatch
   - Framer Motion
   - NetworkBackground
   - CSS invisibility
   - GitHub Pages deployment
   - data mismatch
5. Test results:
   - npm install
   - npm run lint
   - npm run build
   - npm run preview
6. Browser console status
7. GitHub Pages deployment recommendation
8. Remaining risks, if any

Priority:
Stability first.
Design second.
The website must never show a blank page again.
