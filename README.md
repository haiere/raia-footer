<div align="center">

<img src="https://i.postimg.cc/GmWt2wch/H-blue.webp" alt="Haiere logo" width="120" />

# Legal, Tools & Sitemap
### Raia Footer v4.0.2: Official Legal Hub for Haiere

<p>
  <a href="https://hajir.is-a.dev/raia-footer/">
    <img src="https://img.shields.io/badge/Live_Demo-hajir.is--a.dev/raia--footer-00C7B7?style=for-the-badge&logo=netlify&logoColor=white" alt="Live demo">
  </a>
  <a href="https://github.com/haiere">
    <img src="https://img.shields.io/badge/GitHub-haiere-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub">
  </a>
</p>

<p>
  <img src="https://img.shields.io/badge/version-4.0.2-6366f1?style=for-the-badge" alt="Version 4.0.2">
  <img src="https://img.shields.io/badge/updated-November_13,_2026-8b5cf6?style=for-the-badge" alt="Updated November 13, 2026">
  <img src="https://img.shields.io/badge/license-CC0_1.0-EF9421?style=for-the-badge&logo=creativecommons&logoColor=white" alt="License CC0 1.0">
</p>

<p>
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript">
  <img src="https://img.shields.io/badge/GSAP-88CE02?style=for-the-badge&logo=greensock&logoColor=black" alt="GSAP">
</p>

<p>
  <img src="https://img.shields.io/badge/theme-Aurora_Navy-7FD8CB?style=for-the-badge" alt="Aurora Navy theme">
  <img src="https://img.shields.io/badge/fonts-Sora_%C2%B7_Inter_%C2%B7_JetBrains_Mono-ADB6C2?style=for-the-badge" alt="Sora, Inter, JetBrains Mono">
  <img src="https://img.shields.io/badge/Made_by-Haiere-ff69b4?style=for-the-badge" alt="Made by Haiere">
</p>

<strong>Official legal, tools, AI, and games hub for Haiere.</strong><br>
Privacy · Terms · Sitemap · Cookies · Tools · AI / Bot · Games<br>
Static interface with Indonesian and English support.

</div>

---

## About

**Legal, Tools & Sitemap** is the central hub for the Haiere ecosystem. It puts the legal documents and a directory of Haiere pages, tools, AI assistants, and games into one static site. Each section has its own address, so you can link straight to the part you need, such as `/#privacy`.

The site is written in plain HTML, CSS, and JavaScript. It has no framework and no build step.

---

## Features

- Seven sections: Privacy, Terms of Use, Sitemap, Cookies, Tools, AI / Bot, and Games
- Section links that work with the address bar, back and forward buttons, and shared links
- Indonesian and English interface, with the choice saved in the browser
- Dark (default) and light themes, with the choice saved in the browser
- Keyboard navigation between sections with the arrow keys, Home, and End
- Mobile menu and a section bar that scrolls sideways on small screens
- Cookie reference table with name, type, purpose, and duration
- Copy-to-clipboard buttons for summaries and credits
- Reading progress bar and back-to-top button
- Print styles that print the section you are viewing
- Reduced-motion support, which turns off animations
- Icons drawn as inline SVG, with no icon font

---

## Tech Stack

- HTML5 with semantic landmarks and ARIA attributes
- CSS3 with custom properties, responsive layout, and print styles
- Vanilla JavaScript (ES6+)
- GSAP 3.12.5 with ScrollTrigger, loaded from cdnjs
- Google Fonts: Sora, Inter, and JetBrains Mono
- Inline SVG icon sprite
- `localStorage` for theme and language

---

## Getting Started

### Prerequisites

- A modern web browser
- Optional: Python 3, or any static file server, for local preview
- Internet access to load Google Fonts and GSAP from their CDNs

### Installation

```bash
git clone https://github.com/haiere/raia-footer.git
cd raia-footer
```

### Environment Variables

None. The project does not use environment variables or API keys.

### Running Locally

```bash
python3 -m http.server 8000
```

Open http://localhost:8000 in your browser.

### Build

This project has no build step. Deploy the files as they are.

---

## Usage

1. Pick a section from the tab bar, the header menu, or the footer links.
2. Use the arrow keys, Home, and End to move between tabs from the keyboard.
3. Use the moon or sun button in the header to switch between dark and light themes.
4. Use the ID / EN button in the header to switch the language.
5. Use the copy button on a summary or credit box to copy its text.
6. Use the printer button or your browser's print command. Only the section you are viewing is printed.

---

## Project Structure

```text
.
├── index.html   # Page structure, legal content, tools, AI, and games
├── style.css    # Themes, layout, responsive rules, animation states, print styles
├── script.js    # Section routing, theme, mobile menu, copy, progress bar, GSAP reveals
├── i18n.js      # Indonesian and English translations
└── README.md
```

---

## Customization

**Add a language.** Add a new entry to the `DICT` object in `i18n.js`, with the same keys as `en` and `id`. Then add the language code to `SUPPORTED`. The header button switches between two languages, so a third language also needs a change to the toggle logic in `i18n.js`.

**Add a section.** Add a `<section>` with an `id` that matches the route, such as `id="podcast"`. Add the same name to `ROUTES` in `script.js`. Add a tab link with `data-route="podcast"` to the tab bar, and add its text to both language objects in `i18n.js`.

**Change colors and fonts.** Every color, radius, font, and shadow is a custom property in `style.css`. Dark values live under `:root`, and light values live under `[data-theme="light"]`.

---

## Scroll Reveal

Cards, list items, callouts, and tables in the active section fade and rise into view once, using GSAP and ScrollTrigger. Only `opacity` and `transform` are animated.

When `prefers-reduced-motion: reduce` is set, the GSAP reveal is skipped and transitions are turned off. If GSAP does not load, the page still works. Content is shown without the reveal effect.

---

## Storage

The site stores two values in `localStorage`:

| Key | Purpose | Values |
|---|---|---|
| `haiere_lang` | Interface language | `en`, `id` |
| `haiere_theme` | Color theme | `dark`, `light` |

Nothing is sent to a server. The values stay in the visitor's browser.

---

## Tools

| Name | Description | Link |
|---|---|---|
| HajirSync | Sync lyrics with your song. | https://hajirsync.haiere.workers.dev/ |
| Raia Vault | A personal password vault. | https://raia-vault.haiere.workers.dev/ |
| Raia Scrub | Clean the metadata from your files. | https://raia-scrub.haiere.workers.dev/ |
| Raia Delta | Compare two texts and spot the differences. | https://raia-delta.haiere.workers.dev/ |
| Raia Minify | Shrink the size of HTML, CSS, and JS files. | https://raiaminify.haiere.workers.dev/ |
| RaiaSpace | A digital workspace from Raia. | https://raiaspace.haiere.workers.dev |
| Calc | A simple calculator for everyday needs. | https://hajir.is-a.dev/calc |
| QRe | Make QR codes in your browser. Everything is processed locally. | https://hajir.is-a.dev/qre |

## AI / Bot

| Name | Description | Link |
|---|---|---|
| Raia | An AI chatbot that works with many model providers. | https://hajir.is-a.dev/raia-ai/ |
| Kirana | An AI assistant from Haiere. | https://hajir.is-a.dev/kirana |

## Games

| Name | Description | Link |
|---|---|---|
| Chess | The classic game of chess. | https://hajir.is-a.dev/chess |
| Loveyou | A small game with a sweet theme. | https://hajir.is-a.dev/loveyou |
| Orbit Weaver | A game about orbits and motion. | https://hajir.is-a.dev/game/orbit-weaver.html |
| Starfall | A game about falling stars. | https://hajir.is-a.dev/game/starfall.html |

## Ecosystem

| Project | Description | Link |
|---|---|---|
| HajirSync | LRC lyrics generator. | https://hajirsync.haiere.workers.dev/ |
| Raia Delta | Text difference checker. | https://raia-delta.haiere.workers.dev/ |
| Raia Scrub | Metadata cleaner. | https://raia-scrub.haiere.workers.dev/ |
| Raia Vault | Password manager. | https://raia-vault.haiere.workers.dev/ |
| Signature Music | Web music player. | https://signature-music.netlify.app |
| RaiaMinify | File minifier. | https://raiaminify.haiere.workers.dev/ |
| QRe | QR code generator. | https://hajir.is-a.dev/qre |
| RAIA AI | AI chatbot with 9+ providers. | https://hajir.is-a.dev/raia-ai/ |

---

## Accessibility

- A skip link leads directly to the main content.
- Landmarks: header, main, footer, and labeled navigation.
- Visible focus outlines on every interactive element.
- Touch targets are at least 44 by 44 px.
- The active section is marked with `aria-current`.
- Icon-only buttons have `aria-label` text in the selected language.
- Colors are chosen with WCAG AA contrast as the target, in both themes.
- Reduced-motion support is included.
- External links use `rel="noopener noreferrer"`.

---

## Contact

- Author: Haiere
- Email: isthajir@proton.me
- GitHub: @haiere
- Site: hajir.is-a.dev
- Demo: hajir.is-a.dev/raia-footer

---

## License

**Code** is released under [CC0 1.0 Universal](https://creativecommons.org/publicdomain/zero/1.0/), which places it in the public domain. You may copy, change, and share it without credit.

**Content** includes all legal text, music, artwork, and branding, which are © Haiere. CC0 does not apply to the content. See the Terms of Use for the rules on personal and commercial use.

---

## Changelog

### v4.0.2: November 13, 2026

- Sections open from hash links such as `/#privacy` and `/#tools`.
- Icons are drawn as one inline SVG sprite.
- Scroll reveal uses GSAP and ScrollTrigger.
- Removed a duplicated footer block.
- Copy and layout refined for phones and desktops.
- Interface text is available in Indonesian and English, with the choice saved in the browser.

### v4.0.1: November 10, 2026

- Dark default theme and light theme via CSS custom properties
- Typography: Sora, Inter, and JetBrains Mono
- New tool: QRe, a browser-based QR code generator with local processing
- Inline SVG icon registry (`icons.js`) replaces Font Awesome
- Official contact email: isthajir@proton.me

### v4.0.0: October 10, 2026

- Added Tools, AI / Bot, and Games sections
- Scroll reveal for content sections
- Staggered grids, capped at 360 ms
- Scrollable section bar on mobile
- Reduced-motion handling
- External links use `target="_blank"` with `rel="noopener noreferrer"`

---

<div align="center">

Last updated: November 13, 2026 · Made by Haiere

</div>
