# ⚡ HyperFetch Engine — Premium Product Landing Page

> **Acdyon Technologies Engineering Challenge** — *"Build It Like You Mean It"*  
> **Track Selected**: Part 2 — The Premium Home Page  
> **Repository**: [AdityaGupta-28/Acdyon](https://github.com/AdityaGupta-28/Acdyon)

---

## 🌟 Overview

**HyperFetch Engine** is a developer platform built for resilient, continuous web data extraction. It addresses real-world scraper challenges: anti-bot TLS fingerprinting (Cloudflare/Akamai bypass), residential IP rotation, and automated AST structural DOM drift healing when target website markup changes overnight.

This repository contains the full production landing page built with **MERN Architecture** (Express.js API server + React Vite frontend with a custom CSS design token system).

---

## ✨ Features & Craftsmanship

- **🚀 Hero Section**: High-impact value proposition featuring a live API backend health status pill (`API: 24ms`) that continuously pings the Express server.
- **🎮 Interactive Product Sandbox**: A live extraction playground connected to `/api/extract-demo`. Reviewers can trigger simulated extractions across target profiles (Job Boards, E-Commerce, SPAs) and inspect real-time JSON payloads, JA3 stealth telemetry, and AST selector repair logs.
- **🧬 Pipeline Architecture Deep Dive**: Interactive 4-stage visualizer detailing TLS Sanitization, Smart Proxy Cascading, Stealth Playwright execution, and AST DOM Repair.
- **💻 Developer SDK Snippets**: Tabbed code viewer for cURL, Node.js (`@hyperfetch/sdk`), Python (`hyperfetch-py`), and Go with copy-to-clipboard functionality.
- **🎨 Dark & Light Mode Support**: Obsidian dark mode by default with daylight light mode toggle (persisted via `localStorage`).
- **📱 Fluid Responsiveness**: Tested at 390px mobile viewport (iPhone width) and 1440px desktop viewport with zero horizontal overflow.
- **🛡️ Strict Zero-Fake-Data Policy**: 100% compliant with challenge constraints — 0 fake user counts, 0 fake client logos, and 0 fake testimonials.
- **🕹️ Bonus Round Easter Egg**: Typing the **Konami Code** (`↑ ↑ ↓ ↓ ← → ← → B A`) or triple-clicking the footer build badge (`BUILD: v1.4.2-acd`) opens the hidden **Acdyon Engineering Dev HUD**.

---

## 🛠️ Tech Stack

- **Frontend**: React 18, Vite, Lucide Icons, Custom CSS Variable Design System.
- **Backend**: Node.js, Express.js, CORS.
- **Architecture**: Monorepo workspace setup with concurrent script execution.

---

## 🚀 Quick Start (Local Setup)

### Prerequisites
- Node.js `v18+`
- npm `v9+`

### 1. Install Dependencies
```bash
npm run install:all
```

### 2. Start Backend & Frontend Concurrently
```bash
npm run dev
```

Open your browser at **[http://localhost:3000](http://localhost:3000)**.

---

## 📂 Project Structure

```
Acdyonasgn/
├── README.md               # Project documentation
├── DECISIONS.md            # 1-Page technical decision document
├── .gitignore              # Git ignore rules
├── package.json            # Root workspace orchestrator
├── server/
│   ├── package.json
│   └── index.js            # Express API backend (/api/health, /api/extract-demo)
└── client/
    ├── package.json
    ├── vite.config.js
    ├── index.html
    └── src/
        ├── main.jsx
        ├── App.jsx
        ├── styles/
        │   └── index.css   # Custom CSS variable design system
        ├── utils/
        │   └── konami.js   # Konami code event hook
        └── components/
            ├── Navbar.jsx
            ├── Hero.jsx
            ├── InteractiveDemo.jsx   # Live extraction playground
            ├── Architecture.jsx      # Pipeline visualizer
            ├── CodeExamples.jsx      # Multi-language SDK tabs
            ├── Features.jsx          # Technical capabilities grid
            ├── FAQ.jsx               # Ethics & ToS Q&A
            ├── EasterEggModal.jsx    # Secret Dev HUD modal
            └── Footer.jsx            # Footer with triple-click badge trigger
```

---

## 📑 Decisions & Trade-Offs

Read [`DECISIONS.md`](./DECISIONS.md) for the 1-page document detailing:
1. Technical architecture rationale (MERN choice & interactive product showcase).
2. Time limit trade-offs and 1-week production expansion plan.
3. AI tool usage disclosure and manual craftsmanship verification.
