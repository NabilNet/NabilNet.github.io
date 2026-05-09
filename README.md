Act as a senior React + Vite production engineer, GitHub Pages deployment expert, runtime debugging specialist, and frontend reliability reviewer.

The website is:

https://nabilnet.github.io/

The website is currently showing a blank white page again in production.

Important context:
The latest changes were successfully implemented and committed. The project passes:

✅ npm run lint
✅ npm run build

Files recently changed:
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

Recent implementation summary:
- Page flow was updated to:
  Hero → About → Strategic Capabilities → Experience → Expertise → Training/Education → Contact/Footer
- Sections are wired directly into App.tsx
- Circular theme selector was made compact, around 44–48px
- 4 themes are supported:
  light
  dark
  network
  black
- Theme selector includes subtle motion and prefers-reduced-motion support
- Navbar includes explicit section links
- Design tokens were standardized across all themes
- Expertise Areas section was reintroduced
- Hardcoded colors were replaced with theme tokens
- Hero subtitle was reduced in size
- Strategic Infrastructure Capabilities was updated
- Training/Contact/Capabilities were updated to honor theme tokens

Despite this, the production website is blank/white.

Your mission:
Diagnose and fix the real cause of the blank page permanently. Do not stop just because lint/build pass. The actual success condition is that the website renders correctly in production.

==================================================
1. NON-NEGOTIABLE RULES
==================================================

Do not guess.
Do not apply cosmetic changes only.
Do not remove major sections just to hide the problem.
Do not leave the website blank.
Do not stop after npm run build passes.
Do not ignore runtime errors.
Do not ignore GitHub Pages path issues.
Do not leave broken theme logic.
Do not leave broken imports.
Do not leave broken canvas/theme selector logic.
Do not finish until the app renders visibly.

The final website must:
- Render correctly locally
- Build successfully
- Work on GitHub Pages
- Show visible content
- Support all 4 themes
- Keep the compact theme selector
- Keep the Expertise Areas section
- Keep the updated page flow
- Avoid runtime crashes

==================================================
2. FIRST: INSPECT THE REAL FAILURE
==================================================

Investigate the blank page as a runtime/deployment issue.

Check:
- Browser console errors
- Network errors for missing JS/CSS chunks
- Incorrect asset paths
- Incorrect Vite base path
- GitHub Pages deployment config
- React runtime crashes
- Theme selector runtime crashes
- Network background runtime crashes
- Undefined imports or exports
- Data rendering issues
- map/filter on undefined
- invalid localStorage/theme value
- CSS hiding content
- z-index overlay issues
- text rendered white on white
- #root height/layout problems

Do not assume lint/build passing means the app is safe.

==================================================
3. VERIFY VITE + GITHUB PAGES CONFIGURATION
==================================================

The production URL is:

https://nabilnet.github.io/

This is a root GitHub Pages domain.

Check vite.config.ts or vite.config.js.

For this root domain, the expected Vite base is:

base: "/"

If the project is deployed from a user/organization GitHub Pages repository named nabilnet.github.io, the base must remain "/".

Do not use:
base: "/nabilnet.github.io/"
base: "/repo-name/"
base: "./"

unless the actual deployment path proves otherwise.

After build, inspect dist/index.html.

Confirm generated assets look like:

/assets/...

not:

/nabilnet.github.io/assets/...
/some-repo/assets/...
./assets/... if it breaks production

Fix the base path if needed.

==================================================
4. VERIFY GITHUB ACTIONS / DEPLOYMENT
==================================================

Check the deployment workflow.

The workflow must:
- checkout the repo
- install dependencies
- run npm ci
- run npm run build
- deploy the dist folder
- use Node 20 or later
- deploy to GitHub Pages correctly

If workflow is missing or wrong, fix it.

Recommended workflow:

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
  group: pages
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Setup Pages
        uses: actions/configure-pages@v5

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build

    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4

==================================================
5. MAKE APP MOUNTING SAFE
==================================================

Check index.html.

It must contain:

<div id="root"></div>

Check src/main.tsx or src/main.jsx.

Make sure React mounts safely.

Use this structure:

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

If the app uses routing, check whether the router is causing the blank page.

For a simple portfolio on GitHub Pages, prefer HashRouter if BrowserRouter causes production routing issues.

==================================================
6. ADD A TEMPORARY VISIBLE FALLBACK FOR DEBUGGING
==================================================

If the root cause is not immediately obvious, temporarily replace App.tsx with a minimal visible render:

function App() {
  return (
    <main style={{ padding: 40, color: "black", background: "white", minHeight: "100vh" }}>
      NabilNet Portfolio Debug Render OK
    </main>
  );
}

Confirm it renders.

Then progressively restore:
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

Find the exact component that causes the blank page.

Once identified, fix the broken component properly.

Do not leave the debug fallback as the final result.

==================================================
7. HARDEN THE THEME SYSTEM
==================================================

Theme values must be exactly:

light
dark
network
black

Search the entire codebase for mismatches such as:
- networking
- networkMode
- network-motion
- motion
- blackMode
- darkMode

Fix all mismatches.

Create or verify a single source of truth:

export const THEMES = ["light", "dark", "network", "black"] as const;
export type Theme = typeof THEMES[number];

export function isValidTheme(value: unknown): value is Theme {
  return typeof value === "string" && THEMES.includes(value as Theme);
}

Theme initialization must be defensive:

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

Applying the theme must be safe:

useEffect(() => {
  document.documentElement.setAttribute("data-theme", theme);

  try {
    window.localStorage.setItem("theme", theme);
  } catch {
    // Storage can fail in some environments. Never crash the app.
  }
}, [theme]);

Requirements:
- Invalid localStorage theme must not crash the app
- Missing localStorage must not crash the app
- document access must be inside browser-safe code
- Every theme must have complete CSS tokens
- No undefined theme value may reach UI logic

==================================================
8. HARDEN THE THEME SELECTOR
==================================================

The compact circular selector may be causing a runtime crash.

Check src/components/ThemeToggle.tsx carefully.

Fix:
- Undefined theme props
- Missing onChange handlers
- Invalid SVG path/click logic
- Bad keyboard handlers
- Invalid aria values
- Broken icon imports
- CSS class mismatches
- Event handlers using invalid theme names
- Tooltips relying on missing data
- Active state errors

The selector must:
- Render safely even if theme is missing
- Fall back to light
- Use button semantics or accessible SVG controls
- Support keyboard navigation
- Respect prefers-reduced-motion
- Stay compact
- Never crash the app

If the selector is complex and unstable, simplify it into a stable 4-button circular layout using CSS, while keeping the 4-quadrant visual concept.

==================================================
9. HARDEN THE NETWORK BACKGROUND
==================================================

If there is a network/canvas background, it must never crash the app.

Check:
- canvasRef.current exists
- getContext("2d") exists
- requestAnimationFrame cleanup exists
- resize listener cleanup exists
- devicePixelRatio is safe
- prefers-reduced-motion is handled safely
- animation only runs for theme === "network"
- no code runs before canvas exists
- no SSR/browser mismatch

Use safe logic:

const canvas = canvasRef.current;
if (!canvas) return;

const ctx = canvas.getContext("2d");
if (!ctx) return;

Always cancel animation frame on cleanup:

return () => {
  cancelAnimationFrame(animationFrameId);
  window.removeEventListener("resize", resizeCanvas);
};

Canvas CSS must not cover the content:

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

If canvas fails, the site must still render.

==================================================
10. FIX CSS THAT MAY HIDE CONTENT
==================================================

Check src/index.css.

Make sure the app cannot become visually blank because of CSS.

Required base CSS:

html,
body,
#root {
  min-height: 100%;
  margin: 0;
}

body {
  min-height: 100vh;
  background: var(--color-bg);
  color: var(--color-text);
}

#root {
  min-height: 100vh;
}

Check for:
- opacity: 0 on body/main/app
- display: none accidentally applied
- visibility: hidden
- transform moving content off-screen
- white text on white background
- z-index overlay above content
- fixed background covering the whole page
- theme token missing fallback values
- html[data-theme] selector mismatch

Every token must exist for every theme:

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

Add safe fallbacks where useful:

color: var(--color-text, #0f172a);
background: var(--color-bg, #ffffff);

==================================================
11. HARDEN DATA-DRIVEN SECTIONS
==================================================

Check src/data/portfolio.ts and all components consuming it.

Possible blank-page causes:
- undefined exports
- wrong import names
- map over undefined
- filter over undefined
- duplicate IDs
- missing required fields
- experience.tags undefined
- capability.icon undefined
- training array undefined
- expertise array undefined

Fix by:
- Exporting stable arrays
- Providing defaults
- Avoiding map/filter on possibly undefined values
- Using optional chaining only where appropriate
- Adding fallback empty arrays

Example:

const safeExperiences = Array.isArray(experiences) ? experiences : [];

safeExperiences.map(...)

All data-driven components must render safely even if a field is missing.

==================================================
12. ADD ERROR BOUNDARY TO PREVENT FULL WHITE PAGE
==================================================

Add a small ErrorBoundary component.

Use it around non-critical sections:

- ThemeToggle
- StrategicCapabilities
- Experience
- Expertise
- Training
- Contact
- Network background

The full website must not go blank if one section crashes.

Example:

class ErrorBoundary extends React.Component<
  { children: React.ReactNode; fallback?: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("Section crashed:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback ?? null;
    }

    return this.props.children;
  }
}

Use TypeScript-safe typing if the project uses TypeScript.

Do not use ErrorBoundary to hide all problems. Use it to prevent the whole site from turning blank while still fixing the actual root cause.

==================================================
13. VERIFY APP.TSX WIRING
==================================================

Check src/App.tsx.

The App should render direct sections safely.

Expected logical structure:

function App() {
  return (
    <div className="app-shell">
      <NetworkBackground />
      <Navbar />
      <main>
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

Make sure:
- All imported components exist
- All exports match imports
- No component is imported with wrong casing
- No circular imports cause undefined components
- App always returns visible content
- main is not hidden
- z-index keeps content above background

==================================================
14. VERIFY NAVBAR LINKS
==================================================

Navbar section links must match actual section IDs.

If navbar links use:
#about
#capabilities
#experience
#expertise
#training
#contact

Then sections must have corresponding IDs.

Example:

<section id="capabilities">

Broken anchor links should not blank the page, but mismatches should be fixed.

==================================================
15. VERIFY PRODUCTION BUILD OUTPUT
==================================================

Run:

npm run lint
npm run build

Then inspect:
- dist/index.html
- dist/assets

Confirm:
- dist exists
- JS and CSS assets exist
- index.html references valid assets
- no wrong base path
- no missing CSS

If possible run:

npm run preview

Open the local preview and verify:
- Page is visible
- No runtime errors
- Theme selector works
- Network theme works
- All sections render

==================================================
16. FINAL ACCEPTANCE CRITERIA
==================================================

The work is complete only when:

- The website no longer shows a blank white page
- The homepage visibly renders
- App.tsx renders all intended sections
- Theme selector works
- light theme works
- dark theme works
- network theme works
- black theme works
- Network background does not crash the app
- Expertise section renders
- Strategic Capabilities renders
- Experience renders
- Training/Education renders
- Contact/Footer renders
- Navbar links work
- Text colors are readable
- No runtime console errors
- npm run lint passes
- npm run build passes
- GitHub Pages config is correct for https://nabilnet.github.io/

==================================================
17. FINAL REPORT REQUIRED
==================================================

When finished, provide a final report with:

1. Exact root cause of the blank page
2. Files changed
3. Fixes applied
4. Theme system fixes
5. GitHub Pages deployment fixes
6. Runtime safety improvements
7. Commands run
8. Build/lint status
9. Any remaining deployment note

Do not mark the task complete unless the website is fully functional.
