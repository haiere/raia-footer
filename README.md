# Legal & Sitemap

The official legal documentation hub for **Haiere Official**, featuring the **Privacy Policy**, **Terms & Conditions**, **Sitemap**, and **Cookie Policy** in a modern glassmorphism interface.

> **Status:** Active  
> **Last updated:** August 12, 2026  
> **Technologies:** HTML5, CSS3, and JavaScript  
> **License:** See the [License](#license) section.

***

## Table of Contents

- [About the Project](#about-the-project)
- [Features](#features)
- [Project Structure](#project-structure)
- [Requirements](#requirements)
- [Installation](#installation)
- [Usage](#usage)
- [Configuration](#configuration)
- [Haiere Ecosystem](#haiere-ecosystem)
- [Legal Documents](#legal-documents)
- [Accessibility](#accessibility)
- [Development](#development)
- [Troubleshooting](#troubleshooting)
- [License](#license)
- [Author](#author)

***

## About the Project

**Legal & Sitemap** serves as the central legal and navigation hub for the Haiere ecosystem. It brings together the main legal documents and provides a complete sitemap covering Haiere pages, projects, tools, content, and official channels.

The interface includes:

- Glassmorphism design.
- Dark and light themes.
- Indonesian and English language support.
- Responsive layouts for desktop and mobile devices.
- Accessibility and print support.

> **Architecture update — August 12, 2026:**  
> The project no longer uses a single self-contained `index.html` file. HTML, CSS, and JavaScript are now separated into individual files to simplify development and maintenance.

***

## Features

- **Tabbed legal content** — Switch between Privacy Policy, Terms & Conditions, Sitemap, and Cookie Policy.
- **Bilingual support** — Toggle the interface and legal content between Indonesian and English.
- **Dark and light themes** — Follow the system preference or switch themes manually.
- **Persistent preferences** — Store theme and language preferences using `localStorage`.
- **Interactive table of contents** — Navigate quickly to specific sections of each legal document.
- **Scroll spy** — Highlight the section currently being viewed.
- **Comprehensive sitemap** — Display Haiere pages, projects, tools, content, and official channels.
- **Cookie policy table** — Show cookie names, types, purposes, and durations.
- **Version history** — Track updates to legal documents through a changelog.
- **Glassmorphism UI** — Use backdrop blur, subtle shadows, and smooth transitions.
- **Responsive design** — Optimized for desktop, tablet, and mobile devices.
- **Accessibility support** — Include skip links, ARIA attributes, keyboard navigation, and reduced-motion support.
- **Print-friendly layout** — Optimized for printing and PDF export.

***

## Project Structure

```text
.
├── index.html   # Page structure and main content
├── style.css    # Styles, themes, responsive layout, and print rules
├── script.js    # Tabs, themes, language switching, TOC, and localStorage
└── README.md    # Project documentation
```

The separated structure allows HTML, CSS, and JavaScript to be modified independently.

***

## Requirements

- A modern web browser such as Chrome, Firefox, Edge, or Safari.
- JavaScript enabled.
- An internet connection to load Google Fonts and Font Awesome.
- A static web server if the project will be deployed online.

The project does not require:

- A backend.
- A database.
- Build tools.
- A package manager.
- A JavaScript framework.
- Additional server-side runtime dependencies.

***

## Installation

### Run Locally

Clone the repository and enter the project directory:

```bash
git clone <REPOSITORY-URL>
cd <PROJECT-DIRECTORY>
```

Start a local web server. For example, using Python:

```bash
python3 -m http.server 8000
```

Open the following address in your browser:

```text
http://localhost:8000
```

You may also open `index.html` directly for basic testing. However, using a local web server is recommended for testing relative files and resources accurately.

### Deployment

Because this is a static website, the project can be deployed to services such as:

- GitHub Pages.
- Cloudflare Pages.
- Netlify.
- Vercel.
- Any compatible static web server.

Make sure the following files are included in the deployment directory:

```text
index.html
style.css
script.js
```

***

## Usage

### Tab Navigation

Use the tab buttons at the top of the page to open:

- Privacy Policy.
- Terms & Conditions.
- Sitemap.
- Cookie Policy.

Each document includes a table of contents with links to its individual sections.

### Theme Switching

Click the moon or sun icon in the header to switch between themes.

- The selected theme is saved in `localStorage`.
- The preference persists across sessions.
- The system preference can be used as the initial theme.

| Theme | Description |
|---|---|
| Dark | Deep navy background with gradients and glass overlays. |
| Light | Clean light background with soft shadows and glass effects. |

### Language Switching

Use the language switcher in the header to switch between:

| Language | Toggle Label |
|---|---|
| Indonesian | `ID` |
| English | `EN` |

The legal content, navigation labels, and page metadata update according to the selected language.

### Sitemap

The **Sitemap** tab provides an overview of:

- Main pages: Home, Showcase, Tools, and RAIA.
- Haiere ecosystem projects.
- Navigation paths.
- Music collections and digital tools.
- Social media and contact channels.

***

## Legal Documents

### Privacy Policy

Includes:

- Privacy commitment and transparency principles.
- Types of collected data.
- Voluntary information, anonymous analytics, and local preferences.
- Cookie usage and third-party services.
- Security measures such as HTTPS, CSP, and input validation.
- User rights to access, correct, or delete data.
- Policy change procedures and contact information.

### Terms & Conditions

Includes:

- Intellectual property ownership and licensing.
- Personal and commercial usage terms.
- Prohibited activities, including redistribution and scraping.
- Limitation of liability.
- As-is usage conditions.
- Applicable law in Indonesia.
- Bogor jurisdiction.
- Terms update procedures.

### Sitemap

Includes:

- Complete website navigation structure.
- Haiere project directory.
- Content and tools listing.
- Social media and contact information.
- Version history and changelog.

### Cookie Policy

Includes:

- An explanation of cookies.
- Cookie names, types, purposes, and durations.
- Third-party cookies.
- Google Analytics, Formspree, and external platforms.
- Browser-based cookie controls.
- Consent banner and Google Analytics opt-out options.
- Policy update procedures.

***

## Configuration

No special configuration is required. User preferences are stored locally in the browser using `localStorage`.

| Setting | Available Values |
|---|---|
| Theme | Dark or Light |
| Language | Indonesian or English |
| Preference storage | `localStorage` |

***

## Haiere Ecosystem

The Sitemap provides direct links to the following Haiere projects:

| Project | Description |
|---|---|
| HajirSync | LRC generator for synchronized lyrics. |
| Raia Delta | Text difference and comparison tool. |
| Raia Scrub | Metadata cleaner for images and PDF files. |
| Raia Vault | Secure password manager. |
| Signature Music | Web-based music player. |
| RAIA AI | AI chatbot supporting more than nine providers. |

***

## Accessibility

The project follows several accessibility practices:

- Skip link for keyboard navigation.
- Semantic HTML structure.
- ARIA roles and attributes for tabs and panels.
- Keyboard navigation support.
- Arrow key, `Home`, and `End` key support.
- Visible focus indicators for interactive elements.
- `prefers-reduced-motion` support.
- `prefers-reduced-transparency` support.
- High-contrast colors for dark and light themes.
- Print-optimized document layout.

***

## Development

### `index.html`

Responsible for:

- Page structure.
- Legal document markup.
- Tab navigation.
- Table of contents.
- Metadata and accessibility landmarks.

### `style.css`

Responsible for:

- Layout and responsive behavior.
- Dark and light themes.
- Glassmorphism effects.
- Animations and transitions.
- Focus states.
- Print stylesheets.
- Reduced-motion and reduced-transparency preferences.

### `script.js`

Responsible for:

- Tab switching.
- Theme switching.
- Language switching.
- Saving preferences to `localStorage`.
- Scroll spy and table-of-contents navigation.
- Keyboard navigation.
- Bilingual content management.

No build or compilation process is required. After modifying a file, refresh the browser to see the changes.

***

## Adding a Translation

1. Open `script.js`.
2. Find the `translations` object.
3. Add a new language key, such as `fr`.
4. Copy the structure of the `id` or `en` object.
5. Translate all string values.
6. Add the language label to the language switcher if necessary.
7. Test every tab and navigation element.

Example:

```javascript
const translations = {
  id: {
    // Indonesian translations
  },
  en: {
    // English translations
  },
  fr: {
    // French translations
  }
};
```

***

## Adding a New Tab

1. Add a new tab button to the tab list in `index.html`.
2. Assign the tab a unique ID.
3. Add a corresponding content section.
4. Set `role="tabpanel"` on the content panel.
5. Add the required translations to the `translations` object.
6. Ensure the tab logic in `script.js` recognizes the new tab.
7. Test mouse, keyboard, mobile, and print behavior.

***

## Troubleshooting

### Translations Are Not Updating

- Make sure JavaScript is enabled.
- Confirm that the language switcher is being clicked correctly.
- Check the browser DevTools Console for errors.
- Ensure all required translation keys are available.

### Theme Preference Is Not Persisting

- Make sure the browser allows `localStorage`.
- Avoid private or incognito mode.
- Check for `localStorage` errors in the DevTools Console.
- Clear site data and set the theme again if necessary.

### Table of Contents Links Are Not Scrolling

- Confirm that the target section IDs match the link targets.
- Make sure JavaScript is enabled.
- Older browsers may not support smooth scrolling.
- Scroll manually if smooth scrolling is unavailable.

### Cookie Table Is Not Displaying

- Check that the HTML table structure is valid.
- Make sure the table is not hidden by CSS.
- Confirm that the browser supports the required CSS features.
- Check the Console if the table is generated dynamically.

### Print Output Is Missing Styles

- Use the browser’s built-in print function.
- Confirm that the `@media print` stylesheet is loaded.
- Enable background graphics in the print settings if required.
- Review the layout in print preview before exporting.

***

## License

This project is part of the official Haiere website.

All legal content, text, branding, and related assets are owned by Haiere. The code license follows the license file included in the repository.

***

## Author

Developed by **Haiere** and **HajirStudio** as part of the official Haiere legal documentation hub.

***

**Last updated:** August 12, 2026