Act as a senior React/Vite/GitHub Pages deployment engineer and debugging expert.

Premium Apple-inspired portfolio for Nabil Nettour, Senior Network, Cloud & Automation Engineer.

Context:
This is a React + TypeScript + Vite portfolio deployed on GitHub Pages.

## Design System
- Elegant light mode (#F5F5F7 background, #111827 text)
- Premium dark mode (#050816 background, #F8FAFC text)
- Glassmorphism panels, rounded cards, smooth shadows, subtle motion

## Features
- Sticky blurred navbar with theme toggle
- Hero with executive messaging and CTA actions
- Expertise / Experience / Projects / Skills / Training sections
- **NabilBot** (frontend-only assistant with smart keyword responses)
- Contact section with real links

## Theme behavior
- Saves selected theme in `localStorage`
- Uses system preference when no saved theme exists

## Local development
```bash
npm install
npm run dev
npm run build
npm run preview
```

## GitHub Pages deployment
- Workflow: `.github/workflows/deploy.yml`
- Build output: `dist`
- Vite base for username site: `/`

## Contact
- Email: nabil.nettour@gmail.com
- LinkedIn: https://www.linkedin.com/in/nabil-n-25785216/
- GitHub: https://github.com/NabilNet
