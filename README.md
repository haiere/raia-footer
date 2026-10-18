<div align="center">

<img src="https://i.postimg.cc/GmWt2wch/H-blue.webp" alt="Haiere Logo" width="120" />

# Legal, Tools & Sitemap
### Raia Footer v4.0.0 — Official Legal Hub for Haiere

<p>
  <a href="https://raia-footer.netlify.app/">
    <img src="https://img.shields.io/badge/Live_Demo-raia--footer.netlify.app-00C7B7?style=for-the-badge&logo=netlify&logoColor=white" alt="Live Demo">
  </a>
  <a href="https://github.com/haiere">
    <img src="https://img.shields.io/badge/GitHub-haiere-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub">
  </a>
</p>

<p>
  <img src="https://img.shields.io/badge/version-4.0.0-6366f1?style=for-the-badge" alt="Version 4.0.0">
  <img src="https://img.shields.io/badge/updated-October_10,_2026-8b5cf6?style=for-the-badge" alt="Last updated October 10, 2026">
  <img src="https://img.shields.io/badge/license-See_License-22c55e?style=for-the-badge" alt="License">
</p>

<p>
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript">
  <img src="https://img.shields.io/badge/Accessibility-AA-10b981?style=for-the-badge&logo=accessible-icon&logoColor=white" alt="Accessibility">
  <img src="https://img.shields.io/badge/Lighthouse-%3E95-0ea5e9?style=for-the-badge&logo=lighthouse&logoColor=white" alt="Lighthouse > 95">
</p>

<p>
  <img src="https://img.shields.io/badge/Made_by-Haiere-ff69b4?style=for-the-badge" alt="Made by Haiere">
</p>

<strong>The official legal, tools, AI, and games hub for Haiere Official.</strong><br>
Privacy Policy · Terms & Conditions · Sitemap · Cookie Policy · Tools · AI / Bot · Games<br>
Modern glassmorphism interface with Indonesian and English support.

</div>

---

## Table of Contents

- [About the Project](#about-the-project)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Requirements](#requirements)
- [Installation](#installation)
- [Usage](#usage)
- [Configuration](#configuration)
- [Internationalization](#internationalization)
- [Legal Documents](#legal-documents)
- [Tools Directory](#tools-directory)
- [AI and Bot Directory](#ai-and-bot-directory)
- [Games Directory](#games-directory)
- [Haiere Ecosystem](#haiere-ecosystem)
- [Scroll and Animation System](#scroll-and-animation-system)
- [Accessibility](#accessibility)
- [Development](#development)
- [Adding a Translation](#adding-a-translation)
- [Adding a New Tab](#adding-a-new-tab)
- [Troubleshooting](#troubleshooting)
- [License](#license)
- [Author](#author)
- [Changelog](#changelog)

---

## About the Project

**Legal, Tools & Sitemap** is the central hub for the **Haiere** ecosystem. It brings together all important legal documents and provides a complete directory covering Haiere pages, projects, tools, AI assistants, games, and official channels.

The interface is built with a modern **glassmorphism** design and supports:

- Glassmorphism UI with subtle gradients
- Dark and light themes
- Indonesian and English language support
- Responsive layout for desktop, tablet, and mobile
- Accessibility and print support
- Smooth, GPU-friendly scroll reveal animations
- Fast static site with no backend required

> **Architecture update — October 10, 2026:**
> The project uses separated files: `index.html`, `style.css`, `i18n.js`, and `script.js`. Version v4.0.0 adds three new sections (Tools, AI / Bot, Games), rebuilds the scroll animation system, and improves accessibility across all interactive cards.

---

## Features

- **Seven-tab navigation** — Privacy Policy, Terms & Conditions, Sitemap, Cookie Policy, Tools, AI / Bot, and Games.
- **Bilingual support** — Toggle the interface and content between Indonesian and English.
- **Dark and light themes** — Follow system preference or switch manually.
- **Persistent preferences** — Theme and language are stored in `localStorage`.
- **Comprehensive sitemap** — Displays Haiere pages, projects, tools, content, and official channels.
- **Tools directory** — Direct cards to HajirSync, Raia Vault, Raia Scrub, Raia Delta, Raia Minify, RaiaSpace, and Calc.
- **AI / Bot directory** — Direct cards to Raia and Kirana.
- **Games directory** — Direct cards to Chess, Loveyou, Orbit Weaver, and Starfall.
- **Cookie policy table** — Shows cookie names, types, purposes, and durations.
- **Version history** — Track updates through a changelog.
- **Scroll reveal animations** — Smooth, GPU-friendly reveals using `IntersectionObserver` and CSS transforms.
- **Glassmorphism UI** — Backdrop blur, subtle shadows, and smooth transitions.
- **Responsive design** — Optimized for desktop, tablet, and mobile devices.
- **Accessibility support** — Skip links, ARIA attributes, keyboard navigation, and reduced-motion support.
- **Print-friendly layout** — Optimized for printing and PDF export.
- **Back to top** — Smooth scroll button for long pages.
- **Progress bar** — Visual reading progress indicator.
- **Copy utilities** — Copy credit and summary text with one tap.

---

## Tech Stack

| Technology | Purpose |
|---|---|
| HTML5 | Page structure and semantic content |
| CSS3 | Glassmorphism, themes, responsive layout, scroll reveal, print styles |
| JavaScript (ES6+) | Tabs, theme switching, i18n, scroll reveal, utilities |
| `IntersectionObserver` | Scroll reveal animations without external libraries |
| `localStorage` | Persistent user preferences |
| Google Fonts | Inter, Plus Jakarta Sans, JetBrains Mono |
| Font Awesome | Icons |

No frameworks, no build tools, no backend, no animation libraries.

---

## Project Structure

```text
.
├── index.html      # Page structure, legal content, tools, AI, games
├── style.css       # Themes, glassmorphism, scroll reveal, responsive & print styles
├── i18n.js         # Indonesian/English translations + I18NManager
├── script.js       # Tabs, theme, scroll reveal, utilities
└── README.md       # This documentation
```

The separated structure allows HTML, CSS, JavaScript, and translations to be modified independently.

---

Requirements

· A modern web browser such as Chrome, Firefox, Edge, or Safari.
· JavaScript enabled.
· An internet connection to load Google Fonts and Font Awesome.
· A static web server if deploying online.

Not required:

· Backend
· Database
· Build tools
· Package manager
· JavaScript framework
· Server-side runtime
· Animation library

---

Installation

Run Locally

Clone the repository and enter the project directory:

```bash
git clone https://github.com/haiere/raia-footer.git
cd raia-footer
```

Start a local web server. For example, using Python:

```bash
python3 -m http.server 8000
```

Open the following address in your browser:

```text
http://localhost:8000
```

You may also open index.html directly for basic testing. Using a local web server is recommended for accurate testing of relative files and resources.

Deployment

Because this is a static website, it can be deployed to:

· GitHub Pages — Settings → Pages → Deploy from branch main / root.
· Cloudflare Pages
· Netlify
· Vercel
· Any compatible static web server

Make sure the following files are included in the deployment directory:

```text
index.html
style.css
i18n.js
script.js
```

---

Usage

Tab Navigation

Use the tab buttons at the top of the page to open:

· Privacy Policy
· Terms & Conditions
· Sitemap
· Cookie Policy
· Tools
· AI / Bot
· Games

The tablist scrolls horizontally on small screens so all tabs remain reachable without wrapping.

Theme Switching

Click the moon or sun icon in the header to switch between themes.

· The selected theme is saved in localStorage under raiaTheme.
· The preference persists across sessions.
· The system preference is used as the initial theme.

Theme Description
Dark Deep navy background with gradients and glass overlays.
Light Clean light background with soft shadows and glass effects.

Language Switching

Use the language switcher in the header to switch between:

Language Toggle Label
Indonesian ID
English EN

The content, navigation labels, and page metadata update according to the selected language. The choice is stored in localStorage under raiaLang.

Print and PDF

Use the print button in the header or your browser's print function. The layout is optimized for printing and PDF export. All tabs are expanded in the print view so the entire document can be printed at once.

---

Configuration

No special configuration is required. User preferences are stored locally in the browser using localStorage.

Setting Available Values Storage Key
Theme light or dark raiaTheme
Language id or en raiaLang
Cookie consent Accepted or Declined haiere-cookie
RAIA settings Provider, model, parameters raia_state_v1

---

Internationalization

All translations live in i18n.js under window.I18N.

```javascript
window.I18N = {
  id: {
    'nav.home': 'Beranda',
    'nav.music': 'Musik',
    // ...
  },
  en: {
    'nav.home': 'Home',
    'nav.music': 'Music',
    // ...
  }
};
```

The I18NManager handles:

· Applying translations to [data-i18n], [data-i18n-aria], and [data-i18n-placeholder].
· Updating <title> via data-title-key.
· Saving language preference in localStorage under raiaLang.
· Notifying listeners when the language changes.

Adding a Translation

1. Open i18n.js.
2. Add a new language object under window.I18N, for example fr.
3. Copy the structure of the id or en object.
4. Translate all string values.
5. Update the language toggle in script.js if necessary.
6. Test every tab and navigation element.

Example:

```javascript
window.I18N = {
  id: { /* Indonesian translations */ },
  en: { /* English translations */ },
  fr: { /* French translations */ }
};
```

---

Legal Documents

Privacy Policy

Includes:

· Privacy commitment and transparency principles.
· Types of collected data.
· Voluntary information, anonymous analytics, and local preferences.
· Cookie usage and third-party services.
· Security measures such as HTTPS, CSP, and input validation.
· User rights to access, correct, or delete data.
· Policy change procedures and contact information.

Terms & Conditions

Includes:

· Intellectual property ownership and licensing.
· Personal and commercial usage terms.
· Prohibited activities, including redistribution and scraping.
· Limitation of liability.
· As-is usage conditions.
· Applicable law in Indonesia.
· Bogor jurisdiction.
· Terms update procedures.

Sitemap

Includes:

· Complete website navigation structure.
· Haiere project directory.
· Content and tools listing.
· Social media and contact information.
· Version history and changelog.

Cookie Policy

Includes:

· An explanation of cookies.
· Cookie names, types, purposes, and durations.
· Third-party cookies.
· Google Analytics, Formspree, and external platforms.
· Browser-based cookie controls.
· Consent banner and Google Analytics opt-out options.
· Policy update procedures.

---

Tools Directory

The Tools tab provides direct access to the following digital tools. Every card opens in a new tab with rel="noopener noreferrer" and is fully keyboard accessible.

Tool Description Link
HajirSync A tool to sync lyrics with the song. https://hajirsync.haiere.workers.dev/
Raia Vault A personal password vault. https://raia-vault.haiere.workers.dev/
Raia Scrub Metadata cleaner for your files. https://raia-scrub.haiere.workers.dev/
Raia Delta Text diff checker to spot differences. https://raia-delta.haiere.workers.dev/
Raia Minify Shrink file size (HTML, CSS, JS). https://raiaminify.haiere.workers.dev/
RaiaSpace A digital workspace from Raia. https://hajir.is-a.dev/raiaspace
Calc A simple calculator for daily needs. https://hajir.is-a.dev/calc

Each card displays an icon, the tool name, a short description, and an "Open Tool" call-to-action with an external link indicator.

---

AI and Bot Directory

The AI / Bot tab provides access to the following assistants. Cards use the same visual language as the Tools section.

Name Description Link
Raia AI chatbot with support for many model providers. https://raia.is-a.bot/
Kirana An AI assistant by Haiere. https://hajir.is-a.dev/kirana

Each card carries an AI badge and a "Start Chat" call-to-action.

---

Games Directory

The Games tab provides access to the following browser games.

Game Description Link
Chess The classic game of chess. https://hajir.is-a.dev/chess
Loveyou A small game with a sweet theme. https://hajir.is-a.dev/loveyou
Orbit Weaver A game about orbits and motion. https://hajir.is-a.dev/game/orbit-weaver.html
Starfall A game about falling stars. https://hajir.is-a.dev/game/starfall.html

Each card displays an icon, the game name, a short description, and a "Play" call-to-action.

---

Haiere Ecosystem

The Sitemap provides direct links to the following Haiere projects.

Project Description Link
HajirSync LRC generator for synchronized lyrics. https://hajirsync.haiere.workers.dev/
Raia Delta Text difference and comparison tool. https://raia-delta.haiere.workers.dev/
Raia Scrub Metadata cleaner for images and PDF files. https://raia-scrub.haiere.workers.dev/
Raia Vault Secure password manager. https://raia-vault.haiere.workers.dev/
Signature Music Web-based music player. https://signature-music.netlify.app/
RaiaMinify Minify your files. https://raiaminify.haiere.workers.dev/
RAIA AI AI chatbot supporting more than nine providers. https://raia.is-a.bot/

---

Scroll and Animation System

Version v4.0.0 introduces a rebuilt animation system designed to be smooth, natural, and layout-safe.

Principles

· Animations use only opacity and transform so the browser can hand them off to the GPU.
· No layout-triggering properties (such as top, height, or margin) are animated.
· Elements are revealed when they enter the viewport using IntersectionObserver.
· Once revealed, an element is unobserved to avoid redundant work.

Implementation

Elements mark themselves with a data-scroll-reveal attribute:

```html
<div class="tool-card" data-scroll-reveal>
  ...
</div>
```

The CSS handles the visual state:

```css
[data-scroll-reveal] {
  opacity: 0;
  transform: translate3d(0, 22px, 0);
  transition: opacity 0.7s var(--reveal-ease),
              transform 0.7s var(--reveal-ease);
  transition-delay: var(--reveal-delay, 0ms);
}

[data-scroll-reveal].is-revealed {
  opacity: 1;
  transform: translate3d(0, 0, 0);
}
```

The JavaScript observer is defined in script.js:

```javascript
const obs = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-revealed');
      obs.unobserve(entry.target);
    }
  });
}, { threshold: 0.08, rootMargin: '0px 0px -50px 0px' });
```

Stagger

Grid items are staggered by a small, capped delay (maximum 360 ms) so groups appear in a natural sequence without feeling slow:

```javascript
children.forEach((el, i) => {
  el.style.setProperty('--reveal-delay', Math.min(i * 60, 360) + 'ms');
});
```

Reduced Motion

When the user prefers reduced motion, the animation system is disabled entirely. Elements appear immediately without transition.

Tab Awareness

Because inactive tab panels use display: none, elements inside them are not observed until the tab becomes active. A custom event (raia:tabchange) is dispatched on tab activation so the observer can pick up newly visible elements.

---

Accessibility

The project follows several accessibility best practices:

· Skip link for keyboard navigation.
· Semantic HTML structure.
· ARIA roles and attributes for tabs and panels.
· Keyboard navigation support for tabs (arrow keys, Home, End).
· Visible focus indicators for interactive elements.
· Full-card clickable areas remain focusable as anchors.
· Reduced-motion support for all transitions and reveals.
· High-contrast colors for dark and light themes.
· Print-optimized document layout.
· External links use target="_blank" with rel="noopener noreferrer".

---

Development

index.html

Responsible for:

· Page structure.
· Legal document markup.
· Tab navigation.
· Tools, AI / Bot, and Games sections.
· Metadata and accessibility landmarks.

style.css

Responsible for:

· Layout and responsive behavior.
· Dark and light themes.
· Glassmorphism effects.
· Scroll reveal animations.
· Focus states.
· Print stylesheets.
· Reduced-motion preferences.

i18n.js

Responsible for:

· Indonesian and English translations.
· I18NManager for applying translations.
· Saving language preference to localStorage.
· Language change listeners.

script.js

Responsible for:

· Tab switching and hash-based routing.
· Theme switching.
· Language toggle UI.
· Scroll reveal via IntersectionObserver.
· Progress bar and back-to-top button.
· Copy buttons and utilities.

No build or compilation process is required. After modifying a file, refresh the browser to see the changes.

---

Adding a New Tab

1. Add a new tab button to the tab list in index.html.
2. Assign the tab a unique ID and data-target matching the panel ID.
3. Add a corresponding content section with role="tabpanel".
4. Add the required translations to i18n.js.
5. If the tab contains a grid, add the grid class to the stagger selector in script.js (for example, .tools-grid).
6. Test mouse, keyboard, mobile, and print behavior.

Example tab markup:

```html
<li role="none">
  <button class="tab-btn" id="tab-example" role="tab"
          aria-controls="example-panel" aria-selected="false"
          tabindex="-1" data-target="example-panel">
    <i class="fas fa-star" aria-hidden="true"></i>
    <span data-i18n="tab.example">Example</span>
  </button>
</li>
```

---

Troubleshooting

Translations Are Not Updating

· Make sure JavaScript is enabled.
· Confirm that the language switcher is being clicked correctly.
· Check the browser DevTools Console for errors.
· Ensure all required translation keys are available in i18n.js.

Theme Preference Is Not Persisting

· Make sure the browser allows localStorage.
· Avoid private or incognito mode.
· Check for localStorage errors in the DevTools Console.
· Clear site data and set the theme again if necessary.

Scroll Reveal Elements Do Not Appear

· Confirm that the element has the data-scroll-reveal attribute.
· Check that script.js is loaded after i18n.js.
· Verify in the Console that no JavaScript error interrupts execution.
· If the element is inside a hidden tab panel, ensure it is inside a container that triggers the raia:tabchange event.

Tablist Is Not Scrolling on Mobile

· Confirm that .tablist has overflow-x: auto (defined in style.css).
· Check that the browser supports overflow-x (all modern browsers do).
· On desktop, the tablist displays all tabs inline without scroll.

Cookie Table Is Not Displaying

· Check that the HTML table structure is valid.
· Make sure the table is not hidden by CSS.
· Confirm that the browser supports the required CSS features.

Print Output Is Missing Styles

· Use the browser's built-in print function.
· Confirm that the @media print stylesheet is loaded.
· Enable background graphics in the print settings if required.
· Review the layout in print preview before exporting.

Reveal Animation Feels Choppy

· Confirm that prefers-reduced-motion is not enabled in the OS (which disables animations by design).
· Test in a Chromium-based browser for the best transform / opacity performance.
· Avoid adding a large number of data-scroll-reveal elements per viewport; the system is tuned for grouped grids.

---

License

This project is part of the official Haiere website.

All legal content, text, branding, and related assets are owned by Haiere. The code license follows the license file included in the repository.

See the License section for more information.

---

Author

Developed by Haiere and HajirStudio as part of the official Haiere hub.

· GitHub: @haiere
· Main site: hajir.is-a.dev
· Live demo: raia-footer.netlify.app

---

Changelog

v4.0.0 — October 10, 2026

· Added three new tabs: Tools, AI / Bot, and Games.
· Rebuilt the scroll animation system using IntersectionObserver and GPU-friendly opacity / transform transitions.
· Added automatic stagger (capped at 360 ms) for grid items.
· Tablist is now horizontally scrollable on small screens without wrapping.
· Added reduced-motion handling that fully disables reveal animations.
· All external links now use target="_blank" with rel="noopener noreferrer".
· Improved keyboard navigation and focus states on all interactive cards.
· Updated version strings and metadata across all files.
· No new dependencies introduced — pure HTML, CSS, and JavaScript.

v3.9.b & last xxxxxxx xx, 2026

· Legal page rebuilt. Cleaner, more modern, and easier to read.
· Language simplified for all ages.
· Files neatly separated: index.html, style.css, i18n.js, script.js.
· Language settings moved to i18n.js for easy new language additions.
· Accessibility and performance optimized (Lighthouse > 95).
· Rebranded from Muhaajir to Haiere with the H logo.

---

<div align="center">

Last updated: October 10, 2026
Made by Haiere

</div>