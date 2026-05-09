Act as a senior React + Vite production engineer, GitHub Pages deployment expert, GitHub Actions specialist, frontend runtime debugging expert, UI reliability reviewer, and production incident fixer.

My website is deployed here:

https://nabilnet.github.io/

Current problem:
The website shows a blank/white page in production.

Additional deployment problem:
GitHub Actions deployment failed at:

Run actions/deploy-pages@v4

Error:
Failed to get ID Token.
Client network socket disconnected before secure TLS connection was established.
Ensure GITHUB_TOKEN has permission "id-token: write".

Important:
npm run lint and npm run build may pass, but the deployed website is still blank. Therefore, you must debug runtime, deployment, asset path, routing, theme, and GitHub Actions issues. Do not stop at a successful build.

Recent project context:
The website recently received the following changes:
- 4-theme system: light, dark, network, black
- Theme persistence via localStorage
- Theme applied through html[data-theme="..."]
- Compact circular 4-quadrant theme selector
- Centered “NabilNet” mini-logo inside selector
- Networking Motion Mode using canvas animation
- Navbar updated with links to page sections
- About section updated
- Strategic Capabilities section added
- Professional Experience section updated
- Expertise Areas section reintroduced
- Training/Education section updated
- Contact/Footer updated
- Design tokens standardized across themes
- Hero subtitle reduced
- Hardcoded colors replaced with theme tokens

Recently changed files:
- src/App.tsx
- src/components/ThemeToggle.tsx
- src/components/Navbar.tsx
- src/components/Hero.tsx
- src/components/Expertise.tsx
- src/components/StrategicCapabilities.tsx
- src/components/Training.tsx
- src/components/Contact.tsx
- src/data/portfolio.ts
- src/index.css

Your mission:
Fix everything necessary so the website works perfectly in production on GitHub Pages.

The final website must:
- Render correctly at https://nabilnet.github.io/
- Not show a blank white page
- Have no runtime console errors
- Deploy successfully through GitHub Actions
- Support all 4 themes correctly
- Keep the compact theme selector
- Keep the network motion background safely
- Keep the Expertise Areas section
- Keep the updated page structure
- Pass lint and build
- Be production-ready

==================================================
0. NON-NEGOTIABLE RULES
==================================================

Do not guess blindly.
Do not stop after npm run build passes.
Do not say it works unless the page renders visibly.
Do not remove major sections just to hide errors.
Do not ignore runtime errors.
Do not ignore GitHub Pages base path issues.
Do not ignore GitHub Actions permissions.
Do not ignore deployment artifact issues.
Do not leave theme names inconsistent.
Do not leave broken canvas animation code.
Do not leave broken imports.
Do not leave broken section data.
Do not leave a blank page.

If necessary, temporarily simplify the app to identify the crashing component, but restore the full website after the root cause is fixed.

==================================================
1. INSPECT THE PROJECT FIRST
==================================================

Inspect the full project before editing.

Check:
- package.json
- vite.config.ts or vite.config.js
- index.html
- src/main.tsx or src/main.jsx
- src/App.tsx
- src/index.css
- src/data/portfolio.ts
- src/components/ThemeToggle.tsx
- src/components/Navbar.tsx
- src/components/Hero.tsx
- src/components/StrategicCapabilities.tsx
- src/components/Expertise.tsx
- src/components/Training.tsx
- src/components/Contact.tsx
- Any Experience component
- Any NetworkBackground or canvas component
- Any ErrorBoundary component
- Tailwind config if used
- GitHub Actions workflow under .github/workflows/

Understand the current architecture before modifying code.

==================================================
2. IDENTIFY WHY THE PAGE IS BLANK
==================================================

The blank page may be caused by:

A. Deployment / GitHub Pages issue
- Wrong Vite base
- Wrong asset paths
- GitHub Pages deploying wrong folder
- GitHub Pages source not set to GitHub Actions
- dist folder not uploaded
- old deployment still active
- workflow failed before deploying

B. Runtime React issue
- App crashes during render
- Missing import/export
- Undefined component
- map/filter on undefined
- invalid theme value
- localStorage crash
- canvas crash
- SVG/theme selector crash
- footer icon import crash

C. Routing issue
- BrowserRouter incompatible with GitHub Pages setup
- basename missing
- root route not rendering
- route mismatch

D. CSS issue
- content exists but is invisible
- white text on white background
- opacity: 0
- display: none
- z-index overlay
- canvas above content
- missing root/body height
- missing theme tokens

E. GitHub Actions issue
- deploy-pages cannot get ID token
- missing id-token: write
- missing pages: write
- repository Pages source is not GitHub Actions
- transient GitHub runner TLS/OIDC issue

You must investigate and fix the real causes.

==================================================
3. FIX GITHUB ACTIONS DEPLOYMENT ERROR
==================================================

The workflow failed with:

Failed to get ID Token.
Ensure GITHUB_TOKEN has permission "id-token: write".

Fix the GitHub Actions workflow.

Find the Pages deployment workflow in:

.github/workflows/

Replace or correct it using this stable workflow:

name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: github-pages
  cancel-in-progress: false

jobs:
  build:
    name: Build
    runs-on: ubuntu-latest

    steps:
      - name: Checkout repository
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm

      - name: Install dependencies
        run: npm ci

      - name: Build project
        run: npm run build

      - name: Configure GitHub Pages
        uses: actions/configure-pages@v5

      - name: Upload production artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist

  deploy:
    name: Deploy
    runs-on: ubuntu-latest
    needs: build

    permissions:
      pages: write
      id-token: write

    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}

    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4

Important:
- Keep top-level permissions.
- Also keep deploy job permissions for safety.
- The deploy job must use actions/deploy-pages@v4.
- The build job must upload ./dist using actions/upload-pages-artifact@v3.
- GitHub Pages repository settings must use Source: GitHub Actions.
- Do not use “Deploy from branch” with this workflow.

If the workflow already has these permissions and fails with:
Client network socket disconnected before secure TLS connection was established

then treat that part as a possible transient GitHub runner/OIDC network issue. Re-run the workflow after validating YAML. But still fix any missing permissions or workflow structure.

==================================================
4. VERIFY GITHUB REPOSITORY SETTINGS
==================================================

Add a deployment note in the final report:

Repository settings must be:

Settings → Pages → Build and deployment → Source: GitHub Actions

Also check:

Settings → Actions → General

Ensure:
- Actions are enabled
- Workflow permissions are not overly restricted
- GitHub Actions is allowed to create deployments if required

Do not modify frontend code for the OIDC error unless the build itself fails. The OIDC error is a deployment pipeline problem.

==================================================
5. FIX VITE BASE CONFIGURATION
==================================================

The production URL is:

https://nabilnet.github.io/

This is a root GitHub Pages user site.

Check vite.config.ts or vite.config.js.

For this deployment target, use:

base: "/"

Example:

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/",
});

Do not use:
base: "/nabilnet.github.io/"
base: "/repo-name/"
base: "./"

unless the project is actually deployed under a subpath.

After running npm run build, inspect dist/index.html.

Expected:
- JS and CSS assets should resolve from /assets/...
- dist/assets should exist
- No broken asset path should be generated

==================================================
6. VERIFY PACKAGE.JSON
==================================================

Check package.json.

Ensure scripts are correct:

"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview",
  "lint": "..."
}

If lint exists, keep it.
If preview does not exist, add:

"preview": "vite preview"

Do not change unrelated metadata unless necessary.

==================================================
7. VERIFY INDEX.HTML AND REACT MOUNTING
==================================================

Check index.html.

It must include:

<div id="root"></div>

Check src/main.tsx or src/main.jsx.

Use a safe structure:

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element #root was not found.");
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

If the project currently mounts incorrectly, fix it.

==================================================
8. FIX ROUTING FOR GITHUB PAGES
==================================================

If the project uses react-router-dom:

For a simple portfolio website, prefer HashRouter for GitHub Pages reliability.

Use:

import { HashRouter } from "react-router-dom";

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);

If the website is a single-page portfolio and does not need React Router, remove unnecessary routing complexity and render App directly.

If BrowserRouter is kept, ensure:
- basename is correct
- root path renders the homepage
- there is no route mismatch

The root URL https://nabilnet.github.io/ must render the homepage.

==================================================
9. ADD TEMPORARY DEBUG STRATEGY IF ROOT CAUSE IS UNCLEAR
==================================================

If the root cause is not obvious, temporarily replace App.tsx with a visible debug render:

function App() {
  return (
    <main
      style={{
        minHeight: "100vh",
        padding: "40px",
        background: "white",
        color: "black",
        fontFamily: "system-ui, sans-serif"
      }}
    >
      NabilNet Portfolio Debug Render OK
    </main>
  );
}

Confirm the app renders.

Then re-enable components one by one:
1. Theme system
2. Navbar
3. Hero
4. About
5. StrategicCapabilities
6. Experience
7. Expertise
8. Training
9. Contact/Footer
10. ThemeToggle
11. Network background

Identify the exact crashing component.

Fix the component properly.

Important:
Do not leave this debug fallback as the final app.

==================================================
10. HARDEN THE THEME SYSTEM
==================================================

Theme values must be exactly:

light
dark
network
black

Search the entire codebase for inconsistent values:
- networking
- networkMode
- network-motion
- motion
- blackMode
- darkMode

Fix all mismatches.

Use one source of truth:

export const THEMES = ["light", "dark", "network", "black"] as const;

export type Theme = typeof THEMES[number];

export function isValidTheme(value: unknown): value is Theme {
  return typeof value === "string" && THEMES.includes(value as Theme);
}

Use safe theme initialization:

export function getInitialTheme(): Theme {
  if (typeof window === "undefined") return "light";

  try {
    const saved = window.localStorage.getItem("theme");
    if (isValidTheme(saved)) return saved;

    const prefersDark =
      window.matchMedia?.("(prefers-color-scheme: dark)")?.matches;

    return prefersDark ? "dark" : "light";
  } catch {
    return "light";
  }
}

Apply theme safely:

useEffect(() => {
  document.documentElement.setAttribute("data-theme", theme);

  try {
    window.localStorage.setItem("theme", theme);
  } catch {
    // Never crash if storage is unavailable
  }
}, [theme]);

Requirements:
- Invalid localStorage value must not crash app
- Missing localStorage must not crash app
- Theme defaults safely to light or system fallback
- html[data-theme] must always be set
- All components must use the same theme names

==================================================
11. FIX THE CIRCULAR THEME SELECTOR
==================================================

Check src/components/ThemeToggle.tsx.

The selector must:
- Stay compact, around 44–48px visual size
- Keep 4 quadrants
- Keep centered NabilNet mini-logo
- Change theme on click
- Work on mobile
- Work with keyboard
- Have aria-labels
- Have visible focus states
- Respect prefers-reduced-motion
- Not crash if current theme is invalid
- Not use undefined theme values
- Not rely on missing icons or broken imports

If the current SVG/quadrant implementation is unstable, simplify it into a robust compact 4-button circular CSS layout.

Important:
The selector must never crash the whole page.

==================================================
12. FIX NETWORK MOTION BACKGROUND
==================================================

The network canvas background must be safe.

Check any component responsible for:
- canvas animation
- network background
- moving nodes
- linking lines

Requirements:
- Only run animation when theme === "network"
- Do not run if reduced motion is enabled
- Check canvasRef.current before using it
- Check getContext("2d") before drawing
- Cancel requestAnimationFrame on cleanup
- Remove resize listeners on cleanup
- Handle devicePixelRatio safely
- Never throw during render
- Never block app rendering
- Never cover content with a white overlay

Safe pattern:

const canvas = canvasRef.current;
if (!canvas) return;

const ctx = canvas.getContext("2d");
if (!ctx) return;

CSS must keep canvas behind content:

.network-background {
  position: fixed;
  inset: 0;
  z-index: 0;
  pointer-events: none;
}

.app-shell,
.app-content,
main {
  position: relative;
  z-index: 1;
}

If animation fails, page must still render.

==================================================
13. FIX GLOBAL CSS AND THEME TOKENS
==================================================

Check src/index.css.

Add or verify base CSS:

html,
body,
#root {
  min-height: 100%;
  margin: 0;
}

body {
  min-height: 100vh;
  background: var(--color-bg, #ffffff);
  color: var(--color-text, #0f172a);
}

#root {
  min-height: 100vh;
}

Ensure no CSS causes blank page:
- opacity: 0
- display: none
- visibility: hidden
- content moved off-screen
- white overlay
- z-index issue
- text same color as background

Each theme must define all tokens:

html[data-theme="light"] {
  --color-bg: ...;
  --color-surface: ...;
  --color-surface-elevated: ...;
  --color-text: ...;
  --color-text-muted: ...;
  --color-border: ...;
  --color-accent: ...;
  --color-accent-hover: ...;
  --color-card-shadow: ...;
  --color-tag-bg: ...;
  --color-tag-text: ...;
  --color-link: ...;
  --color-button-bg: ...;
  --color-button-text: ...;
}

html[data-theme="dark"] {
  all same tokens...
}

html[data-theme="network"] {
  all same tokens...
}

html[data-theme="black"] {
  all same tokens...
}

If tokens are missing, add them.

Use fallbacks where useful:

color: var(--color-text, #0f172a);
background: var(--color-bg, #ffffff);

==================================================
14. HARDEN DATA-DRIVEN SECTIONS
==================================================

Check src/data/portfolio.ts.

Ensure all exported arrays exist and match imports.

Potential arrays:
- capabilities
- experiences
- expertiseAreas
- training
- education
- contactLinks
- projects

Check every component that imports these arrays.

Fix:
- wrong import names
- wrong export names
- undefined arrays
- map over undefined
- filter over undefined
- missing tags
- missing IDs
- duplicate keys
- missing fields

Use safe fallbacks:

const safeExperiences = Array.isArray(experiences) ? experiences : [];

Do not allow one malformed item to crash the whole page.

==================================================
15. ADD ERROR BOUNDARY
==================================================

Add a small ErrorBoundary component if not already present.

Use it around non-critical sections so the entire page does not become blank.

Protect:
- ThemeToggle
- NetworkBackground
- StrategicCapabilities
- Experience
- Expertise
- Training
- Contact

TypeScript-safe example:

import React from "react";

type ErrorBoundaryProps = {
  children: React.ReactNode;
  fallback?: React.ReactNode;
};

type ErrorBoundaryState = {
  hasError: boolean;
};

export class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: unknown, info: unknown) {
    console.error("Section crashed:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback ?? null;
    }

    return this.props.children;
  }
}

Important:
Do not use ErrorBoundary to hide all problems. Fix the actual root cause too.

==================================================
16. VERIFY APP.TSX STRUCTURE
==================================================

Check src/App.tsx.

The page should render a visible structure similar to:

function App() {
  return (
    <div className="app-shell">
      <ErrorBoundary>
        <NetworkBackground />
      </ErrorBoundary>

      <ErrorBoundary fallback={<div />}>
        <Navbar />
      </ErrorBoundary>

      <main className="app-content">
        <Hero />
        <About />
        <StrategicCapabilities />
        <Experience />
        <Expertise />
        <Training />
        <Contact />
      </main>
    </div>
  );
}

Requirements:
- All imported components exist
- Imports match exports
- App always returns visible content
- Content is above background
- Section order is preserved:
  Hero → About → Strategic Capabilities → Experience → Expertise → Training/Education → Contact/Footer

==================================================
17. VERIFY NAVBAR SECTION IDS
==================================================

Navbar links should match real section IDs.

If Navbar links to:
#about
#capabilities
#experience
#expertise
#training
#contact

Then matching sections must include:
<section id="about">
<section id="capabilities">
<section id="experience">
<section id="expertise">
<section id="training">
<section id="contact">

Fix any mismatch.

==================================================
18. VERIFY FOOTER ICONS
==================================================

The footer/contact section should use small icon links.

Requirements:
- LinkedIn
- GitHub
- Email
- Resume if available
- aria-labels
- no broken icon imports
- no undefined link values

If icon library imports are causing crash, replace with inline SVG icons.

==================================================
19. RUN LOCAL VALIDATION
==================================================

Run:

npm install

Then:

npm run lint

Then:

npm run build

Then, if preview exists:

npm run preview

Fix every issue.

After build:
- inspect dist/index.html
- inspect dist/assets
- confirm JS/CSS files exist
- confirm paths are correct for https://nabilnet.github.io/

==================================================
20. VERIFY PRODUCTION DEPLOYMENT PATH
==================================================

Because this is the root user site:

https://nabilnet.github.io/

Vite base should be:

base: "/"

GitHub Pages should deploy:

./dist

GitHub Pages source should be:

GitHub Actions

If the repository is not the root user page repository and is actually deployed under a path, explain this clearly and adjust base accordingly. But for the target URL above, root base is expected.

==================================================
21. HANDLE THE OIDC/TLS ERROR CORRECTLY
==================================================

The error:

Client network socket disconnected before secure TLS connection was established

can be transient.

But first ensure:
- permissions include id-token: write
- permissions include pages: write
- deploy job has id-token: write
- GitHub Pages source is GitHub Actions
- artifact is uploaded correctly

After correcting workflow:
- re-run the failed workflow
- if the same TLS/OIDC error happens again with correct YAML, re-run once more before changing frontend code
- document that it may be a temporary GitHub runner/OIDC network issue

==================================================
22. FINAL ACCEPTANCE CRITERIA
==================================================

Task is complete only when:

- GitHub Actions workflow is corrected
- deploy-pages@v4 has id-token: write
- pages: write is present
- dist artifact is uploaded
- Vite base is correct
- npm run lint passes
- npm run build passes
- app renders locally
- deployed site renders at https://nabilnet.github.io/
- no blank white page
- no runtime console errors
- all sections render
- all four themes work
- compact theme selector works
- network background does not crash
- Expertise section appears
- navbar links work
- footer icons work
- responsive layout works

==================================================
23. FINAL REPORT REQUIRED
==================================================

When finished, provide a final report with:

1. Root cause of the blank page
2. Root cause of the GitHub Actions deployment error
3. Files changed
4. Frontend fixes applied
5. Theme system fixes applied
6. GitHub Pages/Vite config fixes applied
7. GitHub Actions workflow fixes applied
8. Commands run
9. Lint/build status
10. Deployment notes
11. Any remaining manual GitHub repository setting to verify

Do not mark the task complete unless the website is fully functional and production-ready.
