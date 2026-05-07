# NabilNet Portfolio

Premium dark-mode-first personal portfolio for a senior Network, Cloud, Security, Automation, and NetDevOps engineer.

## Tech Stack
- React + TypeScript + Vite
- Tailwind CSS
- Framer Motion
- Lucide React
- GitHub Actions + GitHub Pages

## Local Setup
```bash
npm install
```

## Commands
```bash
npm run dev
npm run build
npm run preview
npm run lint
```

## Features
- Premium responsive design with dark-mode-first experience
- Light/dark theme toggle with localStorage persistence and system preference fallback
- Animated hero, cards, timeline, and section reveal effects
- NabilBot assistant with predefined smart responses (frontend only)
- SEO-friendly semantic structure and accessible controls

## GitHub Pages Deployment
This repository is a username GitHub Pages repo (`NabilNet.github.io`), so Vite is configured with `base: "/"`.

Workflow file: `.github/workflows/deploy.yml`
- Triggers on push to `main` and `workflow_dispatch`
- Builds with Node 20
- Uploads `dist` as Pages artifact
- Deploys using official GitHub Pages actions

### What to do in GitHub
1. Push code to `main`.
2. Open **Settings → Pages**.
3. Set **Source** to **GitHub Actions**.
4. Push a new commit (or run the workflow manually).
5. Open: https://NabilNet.github.io

## NabilBot behavior
- Floating button: **Ask NabilBot**
- Glassmorphism chat panel with welcome message, quick prompts, keyword matching, and fallback response
- No backend and no external AI API key
