Act as a senior production engineer, React/Vite expert, GitHub Pages deployment specialist, and UI/UX quality reviewer.

The website is deployed at:

https://nabilnet.github.io/

The current issue:
The webpage appears blank/white in production. The site must be fully fixed and working correctly.

Your mission:
You must diagnose and fix all issues until the website works properly in production. Do not stop after partial fixes. Do not assume the build passing means the website works. The final result must render correctly in the browser.

The website recently received these changes:
- 4-theme system: light, dark, network, black
- Theme persistence via localStorage
- html[data-theme="..."] token-based styling
- Circular 4-quadrant theme selector
- Centered “NabilNet” mini-logo inside the selector
- Networking Motion Mode with lightweight canvas animation
- Updated navigation
- Updated About section
- Expand/collapse Professional Experience cards with filters
- Minimal footer with icon links
- Removed generic clutter and simplified page flow

Testing previously passed:
- npm run lint
- npm run build

However, the live production page is still blank/white.

You must fix this completely.

==================================================
NON-NEGOTIABLE RULES
==================================================

1. Do not only make superficial changes.
2. Do not stop after lint/build passes.
3. Do not ignore runtime browser errors.
4. Do not leave the site blank.
5. Do not leave broken themes.
6. Do not leave broken routing.
7. Do not leave broken GitHub Pages deployment configuration.
8. Do not leave broken imports.
9. Do not leave broken animation logic.
10. Do not remove important website sections just to hide the issue.
11. Do not say the task is complete unless the app renders correctly.
12. If a component crashes, fix the component properly.
13. If needed, simplify temporarily for debugging, then rebuild the full experience correctly.
14. The final website must be production-ready.

==================================================
STEP 1 — INSPECT THE PROJECT
==================================================

First inspect the full project structure.

Check:
- package.json
- vite.config.js or vite.config.ts
- index.html
- src/main.tsx or src/main.jsx
- src/App.tsx or src/App.jsx
- theme provider / theme hook / theme utilities
- navigation component
- circular theme selector component
- networking background component
- professional experience component
- footer component
- CSS / Tailwind configuration
- GitHub Actions workflow if present
- deployment configuration

Understand how the application is structured before editing.

==================================================
STEP 2 — FIND THE REAL ROOT CAUSE OF THE WHITE PAGE
==================================================

The white page may be caused by a runtime error, not a build error.

Investigate all likely causes:

A. GitHub Pages configuration
- Wrong Vite base path
- Wrong asset paths
- Dist folder not deployed
- GitHub Pages deploying wrong branch/folder
- Old assets cached or referenced incorrectly

B. React rendering
- App not mounting
- document.getElementById("root") is null
- index.html missing root div
- Broken ReactDOM render
- Broken import in main file

C. Router issue
- BrowserRouter not compatible with GitHub Pages setup
- Missing basename
- Route mismatch
- App renders nothing for root path
- Incorrect route configuration

D. Theme system issue
- localStorage crash
- Invalid saved theme
- Theme value mismatch
- document access before browser availability
- Undefined theme tokens
- html[data-theme] mismatch
- CSS variables missing

E. Networking animation issue
- Canvas ref is null
- getContext returns null
- animation loop crashes
- resize logic crashes
- requestAnimationFrame not cancelled
- canvas placed above content as white overlay
- z-index issue
- reduced-motion logic crash

F. Component issue
- Circular selector crash
- Experience filters crash
- Footer icon import crash
- Missing icon library
- Undefined arrays
- Invalid map over undefined
- Bad props
- Broken exports/imports

G. CSS/layout issue
- White overlay covering app
- Content rendered but invisible due to color mismatch
- z-index hiding content
- #root has no height
- body/root background mismatch
- text same color as background

==================================================
STEP 3 — FIX GITHUB PAGES CONFIGURATION
==================================================

The site is currently deployed at:

https://nabilnet.github.io/

This is the GitHub Pages root domain.

For root deployment, Vite must use:

base: "/"

Check vite.config.

If the current repository is actually deployed under a subpath, adjust accordingly, but for the current target URL, use:

base: "/"

Ensure the generated assets are referenced correctly in dist/index.html.

If GitHub Actions is used, ensure it deploys the correct folder:

dist

Recommended GitHub Pages workflow:

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
STEP 4 — MAKE APP MOUNTING BULLETPROOF
==================================================

Check index.html.

It must contain:

<div id="root"></div>

Check main.tsx/main.jsx.

Use a safe structure similar to:

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

Do not allow silent failure.

==================================================
STEP 5 — FIX ROUTING FOR GITHUB PAGES
==================================================

If the project uses react-router-dom:

For a simple portfolio website, prefer HashRouter for GitHub Pages reliability.

Use:

import { HashRouter } from "react-router-dom";

<HashRouter>
  <App />
</HashRouter>

If the project does not need routing, remove unnecessary router complexity and render App directly.

If BrowserRouter is kept, ensure basename and routes are correct for:

https://nabilnet.github.io/

The root URL must render the homepage.

==================================================
STEP 6 — HARDEN THE THEME SYSTEM
==================================================

The theme system must be safe and consistent.

Allowed theme values must be exactly:

light
dark
network
black

Make sure every file uses the exact same values.

Avoid mismatches such as:
- networking
- motion
- network-motion
- blackMode
- dark-mode

Use a single source of truth.

Example:

export const THEMES = ["light", "dark", "network", "black"] as const;
export type Theme = typeof THEMES[number];

export function isValidTheme(value: unknown): value is Theme {
  return typeof value === "string" && THEMES.includes(value as Theme);
}

export function getInitialTheme(): Theme {
  if (typeof window === "undefined") return "light";

  try {
    const saved = window.localStorage.getItem("theme");
    if (isValidTheme(saved)) return saved;

    const prefersDark = window.matchMedia?.("(prefers-color-scheme: dark)")?.matches;
    return prefersDark ? "dark" : "light";
  } catch {
    return "light";
  }
}

When applying the theme:

useEffect(() => {
  document.documentElement.setAttribute("data-theme", theme);

  try {
    localStorage.setItem("theme", theme);
  } catch {
    // ignore storage errors safely
  }
}, [theme]);

Requirements:
- Invalid saved theme must not crash the app.
- localStorage failure must not crash the app.
- Theme switch must not crash the app.
- html[data-theme] must always be set.
- All four themes must have complete CSS variables.

==================================================
STEP 7 — FIX THE CIRCULAR THEME SELECTOR
==================================================

The circular 4-quadrant selector must work safely.

Requirements:
- Four clickable quadrants
- Each quadrant changes theme
- Active theme is visually highlighted
- Center shows “NabilNet”
- Works on desktop and mobile
- Keyboard accessible
- aria-labels on controls
- No undefined class names
- No broken icon imports
- No crash if theme is undefined
- No layout overflow

If SVG is used, ensure:
- viewBox is correct
- buttons/paths are clickable
- pointer events are correct
- text is readable
- no hydration/browser issue

If regular buttons are used, ensure:
- accessible button elements
- clear labels
- stable layout

==================================================
STEP 8 — FIX NETWORKING MOTION BACKGROUND
==================================================

The Networking Motion Mode must be safe.

Requirements:
- Must not crash the app
- Must not cover the page with a white overlay
- Must only appear or animate when theme === "network"
- Must be behind the content
- Must use pointer-events: none
- Must have safe canvas initialization
- Must cancel requestAnimationFrame on cleanup
- Must remove resize listeners on cleanup
- Must respect prefers-reduced-motion
- Must handle devicePixelRatio safely
- Must handle null canvas/context safely

Use defensive logic like:

const canvas = canvasRef.current;
if (!canvas) return;

const ctx = canvas.getContext("2d");
if (!ctx) return;

If an error happens in the animation, it must fail gracefully and never prevent the page from rendering.

CSS requirement:

.network-background {
  position: fixed;
  inset: 0;
  z-index: 0;
  pointer-events: none;
}

.app-content {
  position: relative;
  z-index: 1;
}

Do not put the canvas above the content.

==================================================
STEP 9 — FIX CSS TOKENS AND GLOBAL LAYOUT
==================================================

Ensure global CSS is stable.

Required base CSS:

html,
body,
#root {
  min-height: 100%;
  margin: 0;
}

body {
  min-height: 100vh;
}

#root {
  min-height: 100vh;
}

Theme tokens must exist for all four themes.

Example required variables:
- --color-bg
- --color-surface
- --color-surface-elevated
- --color-text
- --color-text-muted
- --color-border
- --color-accent
- --color-accent-hover
- --color-card-shadow

For every theme, define all variables.

Make sure:
- Light theme text is visible on light background
- Dark theme text is visible on dark background
- Network theme text is visible on animated background
- Black theme text is visible on black background
- Cards have readable surfaces
- No white overlay covers the app
- No transparent text accidentally disappears

==================================================
STEP 10 — FIX PROFESSIONAL EXPERIENCE SECTION
==================================================

The Professional Experience section must render correctly.

Requirements:
- Data array must be defined before use
- Filtering must not crash
- Expand/collapse state must be safe
- Empty filter results must show a clean fallback
- Technology tags must render safely
- Strategic impact must be visible
- No map over undefined
- No duplicate invalid keys
- No giant unreadable text block
- Mobile layout must be clean

If needed, convert the data into a stable array like:

const experiences = [
  {
    company: "OECD",
    role: "Senior Network & Cloud Engineer",
    dates: "07/2022 – Present",
    location: "Paris, France",
    summary: "...",
    tags: ["Cloud", "Security", "Network", "Automation"],
    achievements: [...],
    impact: "..."
  }
];

==================================================
STEP 11 — FIX FOOTER ICONS
==================================================

The footer must render safely.

Requirements:
- LinkedIn icon link
- GitHub icon link
- Email icon link
- Resume icon link if available
- Small icons only
- aria-labels
- No broken icon imports
- If the icon library is broken or missing, replace with inline SVG icons
- Links must not crash rendering
- Footer must be minimal and responsive

==================================================
STEP 12 — ADD ERROR BOUNDARY
==================================================

Add a small React Error Boundary around non-critical visual sections.

At minimum, protect:
- Networking background
- Theme selector
- Professional Experience section

The full page must not go blank if one visual component crashes.

If using class component:

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error(error, info);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback ?? null;
    }

    return this.props.children;
  }
}

Use appropriate TypeScript typing if the project uses TypeScript.

Do not hide critical errors silently during development, but prevent production blank screen.

==================================================
STEP 13 — ADD A TEMPORARY DEBUGGING STRATEGY IF NEEDED
==================================================

If the root cause is not immediately obvious:

1. Temporarily render a minimal App:

function App() {
  return <main style={{ padding: 40 }}>NabilNet Portfolio is loading correctly.</main>;
}

2. Confirm the page renders.
3. Re-enable components one by one:
   - Theme provider
   - Global layout
   - Header
   - Theme selector
   - Network background
   - About
   - Experience
   - Footer

4. Identify the exact component causing the blank page.
5. Fix that component properly.
6. Restore the complete website.

Do not leave the minimal fallback as the final version.

==================================================
STEP 14 — FINAL WEBSITE REQUIREMENTS
==================================================

The final website must include:

- Working homepage
- Working navigation
- Working light theme
- Working dark theme
- Working network theme
- Working black theme
- Working circular 4-quadrant theme selector
- Working NabilNet center logo
- Working networking motion background
- Updated About section
- Working Professional Experience section
- Working filters/expand-collapse
- Minimal footer with icon links
- Mobile responsive layout
- No blank white page
- No runtime console errors
- No broken assets
- No broken deployment path

==================================================
STEP 15 — RUN VALIDATION COMMANDS
==================================================

Run:

npm install

Then:

npm run lint

Then:

npm run build

If available:

npm run preview

Fix every issue until all commands pass.

After build, inspect dist/index.html and confirm:
- JS/CSS assets are referenced correctly
- Asset paths work for https://nabilnet.github.io/
- No incorrect repository subpath is being used

==================================================
STEP 16 — FINAL ANSWER FORMAT
==================================================

When done, provide a clear final report with:

1. Root cause of the white page
2. Files changed
3. Fixes applied
4. Theme system validation
5. GitHub Pages deployment validation
6. Commands executed
7. Build/lint status
8. Remaining notes, if any

Do not finish until the website is fully functional and production-ready.
