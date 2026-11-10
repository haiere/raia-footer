<div align="center">

<img src="https://i.postimg.cc/GmWt2wch/H-blue.webp" alt="Haiere Logo" width="120" />

# Legal, Tools & Sitemap
### Raia Footer v4.0.1 — Official Legal Hub for Haiere

<p>
  <a href="https://hajir.is-a.dev/raia-footer/">
    <img src="https://img.shields.io/badge/Live_Demo-hajir.is--a.dev/raia--footer-00C7B7?style=for-the-badge&logo=netlify&logoColor=white" alt="Live Demo">
  </a>
  <a href="https://github.com/haiere">
    <img src="https://img.shields.io/badge/GitHub-haiere-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub">
  </a>
</p>

<p>
  <img src="https://img.shields.io/badge/version-4.0.1-6366f1?style=for-the-badge" alt="Version 4.0.1">
  <img src="https://img.shields.io/badge/updated-November_10,_2026-8b5cf6?style=for-the-badge" alt="Updated November 10, 2026">
  <img src="https://img.shields.io/badge/license-See_License-22c55e?style=for-the-badge" alt="License">
</p>

<p>
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript">
  <img src="https://img.shields.io/badge/Accessibility-AA-10b981?style=for-the-badge&logo=accessible-icon&logoColor=white" alt="Accessibility AA">
  <img src="https://img.shields.io/badge/Lighthouse-%3E95-0ea5e9?style=for-the-badge&logo=lighthouse&logoColor=white" alt="Lighthouse > 95">
</p>

<p>
  <img src="https://img.shields.io/badge/theme-Aurora_Navy_%2F_Petal_Pink-7FD8CB?style=for-the-badge" alt="Aurora Navy / Petal Pink">
  <img src="https://img.shields.io/badge/fonts-Sora_%C2%B7_Inter_%C2%B7_JetBrains_Mono-ADB6C2?style=for-the-badge" alt="Sora, Inter, JetBrains Mono">
  <img src="https://img.shields.io/badge/Made_by-Haiere-ff69b4?style=for-the-badge" alt="Made by Haiere">
</p>

<p>
<img src="https://img.shields.io/badge/code_license-CC0_1.0-EF9421?style=for-the-badge&logo=creativecommons&logoColor=white" alt="Code license CC0 1.0">
</p>

<strong>Official legal, tools, AI, and games hub for Haiere.</strong><br>
Privacy · Terms · Sitemap · Cookies · Tools · AI / Bot · Games<br>
Static, dependency-free interface with Indonesian and English support.

</div>

---

## About

**Legal, Tools & Sitemap** is the central hub for the **Haiere** ecosystem. It bundles the legal documents and a directory of Haiere pages, tools, AI assistants, games, and official channels into one static site.

Design highlights:

- Aurora Navy (dark, default) and Petal Pink (light) themes
- Sora, Inter, and JetBrains Mono typography — three families, seven weights
- Indonesian and English, switchable at runtime
- Responsive layout for desktop, tablet, and mobile
- AA-level accessibility and print support
- GPU-friendly scroll reveal animations
- Zero external dependencies — no framework, no build step, no icon font

---

## Features

- Seven tabs: Privacy, Terms, Sitemap, Cookies, Tools, AI / Bot, Games
- Bilingual UI (ID / EN) with persistent preference
- Dark / light theme with persistent preference
- Inline SVG icon registry (`icons.js`) — replaces Font Awesome
- Scrollable tablist on mobile
- Cookie reference table (name, type, purpose, duration)
- Reading progress bar, back-to-top, copy-to-clipboard
- Optimized print and PDF layout
- Reduced-motion support

---

## Tech Stack

| Layer | Technology |
|---|---|
| Markup | HTML5 (semantic, ARIA) |
| Styles | CSS3 (custom properties, backdrop blur, print) |
| Scripts | Vanilla JavaScript (ES6+) |
| Icons | Inline SVG via `icons.js` |
| Fonts | Google Fonts — Sora, Inter, JetBrains Mono |
| Reveal | `IntersectionObserver` |
| Storage | `localStorage` for theme, language, consent |

No frameworks, no build tools, no backend, no external icon font.

---

## Project Structure

```text
.
├── index.html   # Structure, legal content, tools / AI / games grids
├── style.css    # Themes, layout, scroll reveal, print, responsive
├── icons.js     # Inline SVG icon registry (no external font)
├── i18n.js      # Indonesian / English translations + I18NManager
├── script.js    # Tabs, theme, language, reveal, utilities
└── README.md
```

---

Quick Start

```bash
git clone https://github.com/haiere/raia-footer.git
cd raia-footer
python3 -m http.server 8000
```

Open http://localhost:8000. Deploy to any static host (GitHub Pages, Cloudflare Pages, Netlify, Vercel). Ship the five files listed above.

---

Usage

· Tabs — click or use ← → Home End to navigate.
· Theme — header button toggles dark / light; saved in localStorage.
· Language — header button toggles ID / EN; saved in localStorage.
· Print — header button or browser print; every panel expands.

Storage keys: raiaTheme, raiaLang, haiere-cookie.

---

Directories

Tools

Name Description Link
HajirSync Sync lyrics with the song. https://hajirsync.haiere.workers.dev/
Raia Vault Personal password vault. https://raia-vault.haiere.workers.dev/
Raia Scrub Metadata cleaner for your files. https://raia-scrub.haiere.workers.dev/
Raia Delta Text diff checker. https://raia-delta.haiere.workers.dev/
Raia Minify Minify HTML, CSS, JS. https://raiaminify.haiere.workers.dev/
RaiaSpace Digital workspace from Raia. https://raiaspace.haiere.workers.dev
Calc Simple calculator. https://hajir.is-a.dev/calc
QRe Browser-based QR code generator with local processing. https://hajir.is-a.dev/qre

AI / Bot

Name Description Link
Raia AI chatbot, multi-provider. https://hajir.is-a.dev/raia-ai/
Kirana AI assistant by Haiere. https://hajir.is-a.dev/kirana

Games

Name Description Link
Chess Classic chess. https://hajir.is-a.dev/chess
Loveyou Small game with a sweet theme. https://hajir.is-a.dev/loveyou
Orbit Weaver A game about orbits and motion. https://hajir.is-a.dev/game/orbit-weaver.html
Starfall A game about falling stars. https://hajir.is-a.dev/game/starfall.html

Ecosystem

Project Description Link
HajirSync LRC generator. https://hajirsync.haiere.workers.dev/
Raia Delta Text difference tool. https://raia-delta.haiere.workers.dev/
Raia Scrub Metadata cleaner. https://raia-scrub.haiere.workers.dev/
Raia Vault Password manager. https://raia-vault.haiere.workers.dev/
Signature Music Web music player. https://signature-music.netlify.app
RaiaMinify File minifier. https://raiaminify.haiere.workers.dev/
QRe QR code generator. https://hajir.is-a.dev/qre
RAIA AI AI chatbot, 9+ providers. https://hajir.is-a.dev/raia-ai/

---

Scroll Reveal

Elements opt in with data-scroll-reveal:

```html
<div class="tool-card" data-scroll-reveal>...</div>
```

Only opacity and transform are animated so the compositor handles them off the main thread. IntersectionObserver reveals each element once, then unobserves it. Grid items receive a small stagger capped at 360 ms. When prefers-reduced-motion: reduce is set, the system is skipped entirely and elements appear immediately.

---

Customization

Add a language — copy the id or en object in i18n.js, translate the values, wire the toggle in script.js if needed.

Add a tab — add a <button role="tab" data-target="…"> to .tablist, a matching <section role="tabpanel">, and the tab.* translations. If it contains a grid, add its selector to the stagger list in script.js.

Restyle — every color, radius, font, and shadow lives as a custom property in style.css under :root (Aurora Navy) and [data-theme="light"] (Petal Pink).

---

Accessibility

· Skip link and semantic landmarks
· ARIA roles on tabs and panels
· Full keyboard navigation with visible focus
· Contrast tuned for both themes (AA)
· Reduced-motion support
· External links use rel="noopener noreferrer"
· Print stylesheet for clean PDF export

---

Contact

· Author: Haiere
· Email: isthajir@proton.me
· GitHub: @haiere
· Site: hajir.is-a.dev
· Demo: hajir.is-a.dev/raia-footer

---

## License

**Code** — released under [CC0 1.0 Universal](https://creativecommons.org/publicdomain/zero/1.0/) (public domain). Copy, modify, and redistribute freely, no attribution required.

**Content** — all legal text, music, artwork, and branding are © Haiere. CC0 does not apply to the content; see the Terms of Use for personal and commercial usage rules.

---

Changelog

v4.0.1 — November 10, 2026

· Aurora Navy palette (dark default) and Petal Pink (light) via CSS custom properties
· Typography refreshed: Sora, Inter, JetBrains Mono — three families, seven weights
· New tool: QRe, a browser-based QR code generator with local processing
· Inline SVG icon registry (icons.js) replaces Font Awesome
· Official contact email: isthajir@proton.me
· Updated version strings and metadata across all files

v4.0.0 — October 10, 2026

· Added Tools, AI / Bot, and Games tabs
· Rebuilt scroll reveal with IntersectionObserver
· Staggered grids, capped at 360 ms
· Scrollable tablist on mobile
· Reduced-motion handling
· External links use target="_blank" with rel="noopener noreferrer"

---

<div align="center">

Last updated: November 10, 2026 · Made by Haiere

</div>