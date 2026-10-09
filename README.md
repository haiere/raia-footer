<div align="center">

<img src="https://i.postimg.cc/GmWt2wch/H-blue.webp" alt="Haiere Logo" width="120" />

# Legal & Sitemap
### Raia Footer v3.9.b — Official Legal Hub for Haiere

<p>
  <a href="https://raia-footer.netlify.app/">
    <img src="https://img.shields.io/badge/Live_Demo-raia--footer.netlify.app-00C7B7?style=for-the-badge&logo=netlify&logoColor=white" alt="Live Demo">
  </a>
  <a href="https://github.com/haiere">
    <img src="https://img.shields.io/badge/GitHub-haiere-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub">
  </a>
</p>

<p>
  <img src="https://img.shields.io/badge/version-3.9.b-6366f1?style=for-the-badge" alt="Version 3.9.b">
  <img src="https://img.shields.io/badge/updated-October_9,_2026-8b5cf6?style=for-the-badge" alt="Last updated October 9, 2026">
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

<strong>The official legal documentation hub for Haiere Official.</strong><br>
Privacy Policy · Terms & Conditions · Sitemap · Cookie Policy<br>
Modern glassmorphism interface with Indonesian & English support.

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
- [Haiere Ecosystem](#haiere-ecosystem)
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

**Legal & Sitemap** is the central legal and navigation hub for the **Haiere** ecosystem. It brings together all important legal documents and provides a complete sitemap covering Haiere pages, projects, tools, content, and official channels.

The interface is built with a modern **glassmorphism** design and supports:

- Glassmorphism UI
- Dark and light themes
- Indonesian and English language support
- Responsive layout for desktop, tablet, and mobile
- Accessibility and print support
- Fast static site — no backend required

> **Architecture update — October 9, 2026:**  
> The project now uses separated files: `index.html`, `style.css`, `i18n.js`, and `script.js`. Translations are managed in `i18n.js` for easier maintenance and future language additions.

---

## Features

- **Tabbed legal content** — Switch between Privacy Policy, Terms & Conditions, Sitemap, and Cookie Policy.
- **Bilingual support** — Toggle the interface and legal content between Indonesian and English.
- **Dark and light themes** — Follow system preference or switch manually.
- **Persistent preferences** — Theme and language are stored in `localStorage`.
- **Interactive table of contents** — Navigate quickly to specific sections of each legal document.
- **Scroll spy** — Highlights the section currently being viewed.
- **Comprehensive sitemap** — Displays Haiere pages, projects, tools, content, and official channels.
- **Cookie policy table** — Shows cookie names, types, purposes, and durations.
- **Version history** — Track updates to legal documents through a changelog.
- **Glassmorphism UI** — Backdrop blur, subtle shadows, and smooth transitions.
- **Responsive design** — Optimized for desktop, tablet, and mobile devices.
- **Accessibility support** — Skip links, ARIA attributes, keyboard navigation, and reduced-motion support.
- **Print-friendly layout** — Optimized for printing and PDF export.
- **Back to top** — Smooth scroll button for long pages.
- **Progress bar** — Visual reading progress indicator.

---

## Tech Stack

| Technology | Purpose |
|---|---|
| HTML5 | Page structure and semantic content |
| CSS3 | Glassmorphism, themes, responsive layout, print styles |
| JavaScript (ES6+) | Tabs, theme switching, i18n, scroll spy, TOC |
| `localStorage` | Persistent user preferences |
| Google Fonts | Inter, Plus Jakarta Sans, JetBrains Mono |
| Font Awesome | Icons |

No frameworks, no build tools, no backend.

---

## Project Structure

```text
.
├── index.html      # Page structure & legal content
├── style.css       # Themes, glassmorphism, responsive & print styles
├── i18n.js         # Indonesian/English translations + I18NManager
├── script.js       # Tabs, theme, scroll spy, TOC, utilities
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

You may also open index.html directly for basic testing. However, using a local web server is recommended for accurate testing of relative files and resources.

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

Each document includes a table of contents with links to its individual sections.

Theme Switching

Click the moon or sun icon in the header to switch between themes.

· The selected theme is saved in localStorage.
· The preference persists across sessions.
· The system preference can be used as the initial theme.

Theme Description
Dark Deep navy background with gradients and glass overlays.
Light Clean light background with soft shadows and glass effects.

Language Switching

Use the language switcher in the header to switch between:

Language Toggle Label
Indonesian ID
English EN

The legal content, navigation labels, and page metadata update according to the selected language.

Sitemap

The Sitemap tab provides an overview of:

· Main pages: Home, Showcase, Tools, and RAIA.
· Haiere ecosystem projects.
· Navigation paths.
· Music collections and digital tools.
· Social media and contact channels.

Print and PDF

Use the print button in the header or your browser’s print function. The layout is optimized for printing and PDF export.

---

Configuration

No special configuration is required. User preferences are stored locally in the browser using localStorage.

Setting Available Values Storage Key
Theme Dark or Light theme
Language Indonesian or English raiaLang
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

Haiere Ecosystem

The Sitemap provides direct links to the following Haiere projects:

Project Description Link
HajirSync LRC generator for synchronized lyrics. Visit
Raia Delta Text difference and comparison tool. Visit
Raia Scrub Metadata cleaner for images and PDF files. Visit
Raia Vault Secure password manager. Visit
Signature Music Web-based music player. Visit
RaiaMinify Minify your files. Visit
RAIA AI AI chatbot supporting more than nine providers. Visit

---

Accessibility

The project follows several accessibility best practices:

· Skip link for keyboard navigation.
· Semantic HTML structure.
· ARIA roles and attributes for tabs and panels.
· Keyboard navigation support.
· Arrow key, Home, and End key support.
· Visible focus indicators for interactive elements.
· prefers-reduced-motion support.
· prefers-reduced-transparency support.
· High-contrast colors for dark and light themes.
· Print-optimized document layout.

---

Development

index.html

Responsible for:

· Page structure.
· Legal document markup.
· Tab navigation.
· Table of contents.
· Metadata and accessibility landmarks.

style.css

Responsible for:

· Layout and responsive behavior.
· Dark and light themes.
· Glassmorphism effects.
· Animations and transitions.
· Focus states.
· Print stylesheets.
· Reduced-motion and reduced-transparency preferences.

i18n.js

Responsible for:

· Indonesian and English translations.
· I18NManager for applying translations.
· Saving language preference to localStorage.
· Language change listeners.

script.js

Responsible for:

· Tab switching.
· Theme switching.
· Language toggle UI.
· Scroll spy and table-of-contents navigation.
· Keyboard navigation.
· Progress bar and back-to-top button.
· Copy buttons and utilities.

No build or compilation process is required. After modifying a file, refresh the browser to see the changes.

---

Adding a New Tab

1. Add a new tab button to the tab list in index.html.
2. Assign the tab a unique ID.
3. Add a corresponding content section with role="tabpanel".
4. Add the required translations to i18n.js.
5. Ensure the tab logic in script.js recognizes the new tab.
6. Test mouse, keyboard, mobile, and print behavior.

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

Table of Contents Links Are Not Scrolling

· Confirm that the target section IDs match the link targets.
· Make sure JavaScript is enabled.
· Older browsers may not support smooth scrolling.
· Scroll manually if smooth scrolling is unavailable.

Cookie Table Is Not Displaying

· Check that the HTML table structure is valid.
· Make sure the table is not hidden by CSS.
· Confirm that the browser supports the required CSS features.
· Check the Console if the table is generated dynamically.

Print Output Is Missing Styles

· Use the browser’s built-in print function.
· Confirm that the @media print stylesheet is loaded.
· Enable background graphics in the print settings if required.
· Review the layout in print preview before exporting.

---

License

This project is part of the official Haiere website.

All legal content, text, branding, and related assets are owned by Haiere. The code license follows the license file included in the repository.

See the License section for more information.

---

Author

Developed by Haiere and HajirStudio as part of the official Haiere legal documentation hub.

· GitHub: @haiere
· Main site: hajir.is-a.dev
· Live demo: raia-footer.netlify.app

---

Changelog

v3.9.b — October 9, 2026

· Legal page rebuilt. Cleaner, more modern, and easier to read.
· Language simplified for all ages.
· Files neatly separated: index.html, style.css, i18n.js, script.js.
· Language settings moved to i18n.js for easy new language additions.
· Accessibility and performance optimized (Lighthouse > 95).
· Rebranded from Muhaajir to Haiere with the H logo.

---

<div align="center">

Last updated: October 9, 2026
Made by Haiere

</div>