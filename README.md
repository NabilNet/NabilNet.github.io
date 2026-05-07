Act as a senior React/Vite/GitHub Pages deployment engineer and debugging expert.

I need you to fix my portfolio website because the site is not visible after deployment/testing.

Context:
This is a React + TypeScript + Vite portfolio deployed on GitHub Pages.

Repository:
NabilNet.github.io

Production URL:
https://NabilNet.github.io

Important:
This is a GitHub username Pages repository, not a project repository.
Therefore Vite must use:
base: "/"

Current testing status:
✅ npm install
✅ npm run build completed successfully earlier after source updates
⚠️ npm ci && npm run build had an intermittent environment-level execution stall/warning in the Codex container
✅ workflow is now deterministic with lockfile
✅ rg -n "Certifications|certifications" src || true
✅ cat .github/workflows/deploy.yml
✅ cat vite.config.ts

Problem:
The website is not visible after deployment.
I need you to inspect and fix all possible root causes that can make a Vite React GitHub Pages website show a blank page, not load assets, or not display content.

Main objective:
Make the deployed website visible and working correctly at:
https://NabilNet.github.io

You must debug and fix the project directly.

Mandatory checks and fixes:

1. Check vite.config.ts
Ensure it contains exactly the correct GitHub Pages configuration for a username repository:

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/",
});

Do not use:
base: "/NabilNet.github.io/"
Do not use:
base: "./"
Do not use any repository subpath.

2. Check package.json
Verify:
- scripts are valid
- build script uses vite build
- dev script uses vite
- preview script uses vite preview
- dependencies include React, React DOM, Vite, TypeScript, Tailwind, Framer Motion, Lucide React if used
- no broken or missing dependency exists

Expected scripts:

"scripts": {
  "dev": "vite",
  "build": "tsc -b && vite build",
  "preview": "vite preview"
}

If TypeScript build is too strict and blocks deployment because of non-critical issues, fix the TypeScript errors properly. Do not bypass quality unless absolutely necessary.

3. Check index.html
Ensure:
- It contains <div id="root"></div>
- It correctly references /src/main.tsx
- There are no wrong absolute paths
- There is no broken script path
- There is no base href that breaks GitHub Pages

Expected structure:

<div id="root"></div>
<script type="module" src="/src/main.tsx"></script>

4. Check src/main.tsx
Ensure React is mounted correctly.

Expected:

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

If the project uses App.tsx default export, make sure the import is correct.

5. Check App.tsx
Ensure:
- App returns visible content
- App imports all components correctly
- No component import path is broken
- No component causes runtime crash
- No undefined data is mapped without fallback
- No browser-only API is used before checking availability
- Theme localStorage access does not crash rendering
- NabilBot does not crash rendering
- Framer Motion usage does not crash rendering

If one section is causing the blank page, isolate and fix it.

6. Check Tailwind and CSS
Ensure:
- Tailwind is configured correctly
- index.css imports Tailwind directives
- No global CSS makes the body, root, or app invisible
- No color issue makes text invisible on background
- No z-index overlay hides the whole page
- No fixed element blocks the full page
- html, body, #root have proper min-height
- body background and text colors are readable in both light and dark mode

Add safe global CSS if needed:

html {
  scroll-behavior: smooth;
}

html,
body,
#root {
  min-height: 100%;
}

body {
  margin: 0;
}

7. Check dark/light mode
The website must be visible in both modes.

Fix:
- Poor contrast in light mode
- White text on white background
- Dark text on dark background
- Chatbot unreadable text
- Buttons with invisible labels
- Cards without readable text

The light mode must use an Apple-inspired readable palette:
- Background: #F5F5F7
- Surface: #FFFFFF
- Text: #111827
- Secondary text: #4B5563
- Muted text: #6B7280
- Border: rgba(17, 24, 39, 0.10)
- Accent: #007AFF

Dark mode:
- Background: #050816
- Surface: #0B1020
- Text: #F8FAFC
- Secondary text: #CBD5E1
- Muted text: #94A3B8
- Border: rgba(148, 163, 184, 0.18)
- Accent: #38BDF8

8. Check NabilBot
Ensure:
- NabilBot does not crash the page
- The circular chatbot launcher is visible
- It does not cover the entire page
- Its z-index is high enough but not destructive
- It works in light and dark mode
- It uses safe state management
- It uses predefined answers only
- It handles empty input safely
- It handles unknown questions safely

If NabilBot causes runtime issues, fix it or temporarily make it fail-safe instead of crashing the entire website.

9. Check assets and images
The website must not break because of missing images or logos.

Rules:
- Do not rely on unavailable local image paths
- Do not import files that do not exist
- If technology logos are used, ensure the files exist
- Prefer safe Lucide icons, text initials, gradients, or inline SVG placeholders
- No broken image imports
- No external image dependency that can break the build

10. Check router usage
If React Router is used:
- Ensure GitHub Pages does not break routing
- Prefer a single-page portfolio without BrowserRouter if routing is not needed
- If BrowserRouter exists and causes blank page or route issues, replace with anchor-based navigation
- Avoid client routes unless properly configured

For this portfolio, prefer simple section IDs:
#home
#about
#expertise
#experience
#projects
#skills
#training
#contact

11. Check GitHub Actions deployment workflow
Ensure .github/workflows/deploy.yml is valid.

Required workflow:

name: Deploy Portfolio to GitHub Pages

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
    name: Build portfolio
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
    name: Deploy to GitHub Pages
    needs: build
    runs-on: ubuntu-latest

    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}

    steps:
      - name: Deploy artifact to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4

12. Check GitHub Pages compatibility
Ensure:
- dist is generated correctly
- dist/index.html exists after build
- JS and CSS assets are referenced correctly
- No asset path points to /NabilNet.github.io/
- No asset path points to local dev-only paths
- The final build works with Vite preview

13. Add a temporary visible diagnostic marker if needed
If the blank page root cause is unclear, add a small non-intrusive diagnostic marker in the footer or console log, then remove it once fixed.

Example:
console.info("NabilNet portfolio loaded successfully");

Do not leave ugly debugging UI in the final design.

14. Run validation commands
Run these commands and fix any issue found:

npm install
npm run build

Then inspect:
dist/index.html

Check with:
ls -la dist
find dist -maxdepth 2 -type f | head -50

Also run:
rg -n "NabilNet.github.io|/NabilNet.github.io/|base:" .
rg -n "Certifications|certifications" src || true
rg -n "document.getElementById|createRoot|localStorage|window" src

15. Fix visibility and runtime risks
Specifically look for:
- App not imported correctly
- Missing default export
- Broken component imports
- Invalid JSX
- Invalid Tailwind classes that break layout
- Text color same as background
- Full-screen overlay hiding content
- Chatbot panel always open and covering page
- Theme initialization crashing on first render
- Mapping over undefined arrays
- Framer Motion invalid component usage
- Missing key props
- Broken file names after renaming Certifications to Training

16. Make the website visibly render even if data fails
Add defensive coding:
- portfolio data arrays should default to []
- NabilBot data should default safely
- Components should not crash if optional fields are missing
- Use fallback text where needed

17. Final expected result
After your fixes:
- The website must be visible locally
- The website must build successfully
- The GitHub Actions workflow must deploy successfully
- The site must work at https://NabilNet.github.io
- Light mode must be readable
- Dark mode must be readable
- NabilBot must be visible as a circular dynamic assistant
- Projects, skills, training, experience, and contact sections must display correctly

18. Final response format
When finished, provide:
- Root cause found
- Files changed
- Fixes applied
- Build result
- Deployment notes
- Any manual GitHub setting I must verify

Manual GitHub setting reminder:
Go to:
GitHub repository → Settings → Pages → Build and deployment → Source

Select:
GitHub Actions

Then push to main or run the workflow manually.

Important:
Do not only explain.
Actually inspect and fix the code.
Do not deliver partial fixes.
Do not remove the premium Apple-inspired design.
Do not remove NabilBot.
Do not rename Training back to Certifications.
Do not change Vite base away from "/".
