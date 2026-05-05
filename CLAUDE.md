# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

CalConnect DEVGUIDE is a Jekyll-based static site providing a developer's guide for calendaring and scheduling standards (iCalendar, CalDAV, CardDAV, vCard, jsCalendar, iTIP, iMIP). The live site is at https://devguide.calconnect.org.

Uses the shared `jekyll-calconnect-theme` gem for layouts, includes, and design tokens. The theme provides Tailwind CSS v4 via Vite, dark mode support, and documentation sidebar styling.

## Build & Serve Commands

- **Install dependencies:** `bundle install && npm ci`
- **Build the site:** `bundle exec jekyll build`
- **Local dev server:** `bundle exec jekyll serve`
- **Build for production:** `JEKYLL_ENV=production bundle exec jekyll build`

Ruby 3.2, Node.js 24. Jekyll 4.3 with jekyll-vite plugin.

## Deployment

- **GitHub Actions** builds and deploys to GitHub Pages on push to `main`
- **Firebase** hosting config exists in `firebase.json` (redirect rules)
- The `_site/` directory is the build output (gitignored)

## Site Architecture

### Theme

Uses `jekyll-calconnect-theme` gem (at `../jekyll-calconnect-theme/`). The theme provides:
- **Layouts**: `base` (HTML shell), `default` (documentation sidebar), `page` (simple wrapper)
- **Includes**: `head.html` (fonts, critical CSS, Vite), `header.html`/`footer.html` (stubs), `breadcrumbs.html`, `feedback.html`, `google-analytics.html`
- **SCSS**: `_sass/calconnect/` partials for documentation layout, sidebar nav, typography, dark mode
- **Frontend JS**: `theme.js` (dark/light toggle), `navigation.js` (mobile menu)
- **Assets**: Logo SVGs (purple/white)

Local `_layouts/` and `_includes/` files override the theme.

### Content Collections

Two Jekyll collections drive the site:

- **`pages`** (`_pages/`) — Main content sections. Each top-level section has an index `.md` file and a subdirectory with child pages. Permalink: `/:path/`
- **`appendixes`** (`_appendixes/`) — Supplementary content (Glossary, Standards, Links, Examples). Permalink: `/Appendix/:path/`

### Page Front Matter (Navigation)

- `parent` — Path to parent page (e.g., `"/"` for top-level, `"/iCalendar-Topics"` for children)
- `order` — Sort order within siblings
- `mainParent` — Groups pages under a top-level section for sidebar display
- `parents` — Semicolon-separated breadcrumb trail in `Title:URL` format
- `childs` — Comma-separated list of child page titles (for active-state highlighting)
- `layout` — `default`, `page`, `home`, `toc`, `toc-type`, `post`

### Layouts

- `default` → theme's `base` (head, header, main, footer, Vite JS)
- `page` → `default` (simple max-width container)
- `home` → `default` (landing page with hero and icon grid)
- `toc` → `default` (Table of Contents with hierarchical listing)
- `toc-type` → `default` (section landing page with breadcrumb, content, and sidebar)
- `post` → `default` (blog-style article)

### CSS / Frontend

- **Tailwind CSS v4** via Vite + jekyll-vite
- Entry point: `_frontend/entrypoints/application.css` (Tailwind + `@theme` design tokens)
- JS entry: `_frontend/entrypoints/application.js` (imports theme.js + navigation.js)
- Fonts: Inter (body) + JetBrains Mono (code), loaded via Google Fonts
- Dark mode: class-based (`html.dark`), toggled via `theme.js` with localStorage

### Includes

- `head.html` — Overrides theme: DEVGUIDE-specific title and favicon
- `header.html` — Overrides theme: DEVGUIDE nav links + dark mode toggle
- `footer.html` — Overrides theme: DEVGUIDE page/appendix links
- `script.html` — GA4 tracking (production only)
- `toc-sidebar.html` — Recursive sidebar navigation (front-matter-driven)
- `toc-entry.html` — Recursive ToC entry renderer
- `toc-mainPage-placeholder.html` — Renders child links for section landing pages

### Plugin: PlantUML

`_plugins/jekyll-plantuml.rb` provides a `{% plantuml %}` Liquid tag that generates SVG diagrams using `_bin/plantuml.jar`.

## Content Structure

Top-level sections (each is a `_pages/*.md` index + subdirectory):

| Section | Topics |
|---|---|
| iCalendar Topics | Best Practices, Dates/Times, History, Recurrences, Validation |
| CalDAV | Client/Server implementations, libraries, building clients, FAQs |
| CardDAV | Client implementations |
| Scheduling | FreeBusy, iTIP, vAvailability, vPoll |
| Tasks | Introduction, Component |
| Time Zones | Best Practices, Sources, TZDS |
| Data Model | Simple Event, UID, Detailed Description |
| vCard | vCard 4, vCard 5 |
| jsCalendar Topics | Introduction, Implementations |
| iMIP | Internet Scheduling |
| iTIP | iTIP scheduling |
| Publishing | Publishing calendars |
| Other Topics | Calendar spam |

## CI Workflows

- **`build_deploy`** — Builds with Jekyll + Vite and deploys to GitHub Pages on push to `main`
- **`links`** — Runs lychee link checker on built `_site/` HTML

## Conventions

- Content files are Markdown (`.md`) with YAML front matter
- 2-space indentation, LF line endings, UTF-8 encoding (`.editorconfig`)
- Pages with `published: false` in front matter are excluded from navigation
