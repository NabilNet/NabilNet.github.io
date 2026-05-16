You are OpenAI Codex acting as a strict senior production debugging engineer.

The website is still blank in production:

https://nabilnet.github.io/

Codex previously said the issue was fixed by changing Vite base from "/NabilNet.github.io/" to "/", but the live website is still blank for the user.

This means local build success is NOT enough.

Your mission:
Find the real remaining production issue and fix it completely.

Important:
Be strict.
Do not redesign.
Do not add new features.
Do not claim success only because npm run build passes.
Do not stop until the live deployed website renders correctly.
Do not give a generic answer.
You must inspect the deployed production output and compare it with the local build.

Current known context:
- Stack: React + Vite
- Hosting: GitHub Pages user site
- Live URL: https://nabilnet.github.io/
- Vite base should be "/"
- Previous changed files:
  - vite.config.ts
  - src/App.tsx
  - src/components/NetworkBackground.tsx
  - src/main.tsx
  - .github/workflows/deploy.yml

Previous tests passed:
- npm install
- npm run lint
- npm run build
- npm run preview

But production is still blank.

STRICT TASK 1 — Verify the live deployed HTML
Fetch or inspect:

https://nabilnet.github.io/

Check the real production HTML.

Verify:
- Does it reference the latest built JS file?
- Does it reference the latest built CSS file?
- Are asset paths correct?
- Are script tags pointing to /assets/...?
- Are script files returning HTTP 200?
- Are CSS files returning HTTP 200?
- Are they returning correct MIME types?
- Is the deployed HTML old or stale?
- Is the GitHub Pages artifact actually updated?

If the live HTML still references old paths like:

/NabilNet.github.io/assets/...

then the latest build was NOT deployed correctly.

STRICT TASK 2 — Compare local dist with live production
Run:

npm run build

Then inspect:

dist/index.html

Compare dist/index.html with the live HTML at:

https://nabilnet.github.io/

Check whether they match.

If they do not match:
- The deployment workflow is publishing the wrong artifact
- GitHub Pages is serving an old build
- The wrong branch/source is configured
- The deployment did not complete correctly

Fix the deployment workflow or Pages configuration accordingly.

STRICT TASK 3 — Inspect GitHub Pages workflow
Open:

.github/workflows/deploy.yml

Verify it does exactly this:

1. checkout repository
2. setup Node 22
3. npm ci or npm install
4. npm run build
5. upload dist as Pages artifact
6. deploy Pages artifact

The workflow must publish the correct folder:

dist

Not:
build
public
root directory
old branch output

Use a safe workflow like this if needed:

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
  cancel-in-progress: true

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 22
          cache: npm

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Upload Pages artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: dist

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

STRICT TASK 4 — Check package scripts
Open package.json.

Verify:
- build script is correct
- Vite builds to dist
- no custom output directory mismatch
- no predeploy/deploy script publishing another folder
- no gh-pages package pushing stale output

If both GitHub Actions Pages and gh-pages package are being used, identify the conflict.

There must be only one clear deployment strategy.

STRICT TASK 5 — Check GitHub Pages source mode
Determine whether GitHub Pages is configured to deploy from:

A. GitHub Actions

or

B. branch/folder such as main/docs or gh-pages

If the workflow deploys via Actions but GitHub Pages is configured to branch mode, the live site may still serve an old build.

Fix the repository Pages setup recommendation.

Expected:
For the workflow above, Pages source should be:

GitHub Actions

STRICT TASK 6 — Inspect live browser console errors
Use a browser or headless check to inspect the live page.

Check:
- console errors
- network errors
- failed JavaScript
- failed CSS
- failed image assets
- MIME type errors
- React runtime error
- uncaught exceptions
- blank root after script loads

If there is a runtime error, identify the exact component and fix it.

STRICT TASK 7 — Add emergency production visibility guard
If React crashes before rendering, add a temporary but professional fallback.

In src/main.tsx:
- verify root element exists
- wrap render in a try/catch
- display a minimal fallback message only if React fails to mount

Do not leave ugly debug text if the app works.

Example:

try {
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} catch (error) {
  root.innerHTML = `
    <main style="padding:24px;font-family:system-ui">
      <h1>Portfolio loading issue</h1>
      <p>The portfolio could not be loaded. Please try again later.</p>
    </main>
  `;
}

STRICT TASK 8 — Add App-level ErrorBoundary
Make sure the whole app is wrapped in an ErrorBoundary.

Example:

<ErrorBoundary>
  <App />
</ErrorBoundary>

This is required because section-level boundaries are not enough if App, Navbar, theme logic, or global providers crash.

STRICT TASK 9 — Temporarily isolate suspicious components
If the live runtime still crashes, test by disabling components one by one:

1. NetworkBackground
2. Framer Motion animated wrappers
3. Theme provider or theme switching logic
4. Projects
5. Training
6. ExperienceTimeline
7. Navbar

Find the exact component causing the blank page.

Do not guess.

STRICT TASK 10 — Check asset case sensitivity
GitHub Pages is case-sensitive.

Verify:
- import paths match actual filenames exactly
- image filenames match exact casing
- component filenames match exact casing
- repo name casing is not used in base path

Examples to check:
- Hero.tsx vs hero.tsx
- NetworkBackground.tsx vs networkBackground.tsx
- portfolio.ts vs Portfolio.ts

STRICT TASK 11 — Cache-busting check
After deployment, verify the live index.html references the new hashed assets.

If the browser still shows old files:
- hard refresh
- check GitHub Pages deployment timestamp
- verify latest Actions run completed
- verify the commit hash deployed
- verify no service worker is caching old assets

If a service worker exists, disable it or unregister it unless intentionally used.

STRICT TASK 12 — Final proof required
Do not finish with “it should work”.

Final response must include proof:

1. Live production HTML checked: yes/no
2. Live JS asset HTTP status: 200 or error
3. Live CSS asset HTTP status: 200 or error
4. Console errors on live site: list exact errors or say none found
5. dist/index.html matches live index.html: yes/no
6. GitHub Pages source mode: GitHub Actions or branch
7. Exact root cause
8. Files changed
9. Commands run
10. Final live URL confirmed rendering

Required final commands:

npm ci
npm run lint
npm run build
npm run preview -- --host 0.0.0.0 --port 4173

Then deploy and verify:

https://nabilnet.github.io/

Success criteria:
- No blank page
- Hero visible
- Navbar visible
- Sections visible
- JS and CSS assets load with 200 status
- No console runtime error
- GitHub Pages serves the latest dist artifact

Do not stop before proving the production website works.
