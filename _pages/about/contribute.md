---
layout: toc-type
title: How to Contribute
parent: "/about/"
parents: About:/about
order: 2
permalink: "/about/contribute/"
---

Contributions are welcome! Here's how you can help improve this guide.

## Report an Issue

Found an error, have a suggestion, or want to request new content? Open an issue at [github.com/CalConnect/DEVGUIDE/issues](https://github.com/CalConnect/DEVGUIDE/issues).

## Join the Mailing List

The editorial team monitors the [CalConnect Calendar Developer's List](http://lists.calconnect.org/listinfo.cgi/caldeveloper-l-calconnect.org). Send comments and corrections there.

## Submit a Pull Request

1. Fork the [DEVGUIDE repository](https://github.com/CalConnect/DEVGUIDE).
2. Create a branch for your changes.
3. Add or edit content in `_pages/` using Markdown with YAML front matter.
4. Submit a pull request against the `main` branch.

Changes merged to `main` are deployed automatically via GitHub Actions.

## Editorial Conventions

- Use blockquote (`>`) when quoting text from an RFC.
- Always link to the RFC using `https://www.rfc-editor.org/rfc/rfcXXXX`.
- Use deep links with section anchors where possible (e.g. `#section-3.1`).
- Use `<!-- comments -->` for internal annotations that should not appear on the rendered page.
- Keep page titles concise. The layout renders an `<h1>` automatically — do not add a markdown `# heading` in the content.

## Page Front Matter

Every page needs these YAML fields:

```yaml
---
layout: toc-type
title: Page Title
parent: "/parent-section/"
parents: Section Name:/parent-section
order: 1
permalink: "/parent-section/page-slug/"
---
```

- `layout` — `toc-type` (section pages with sidebar) or `page` (standalone)
- `parent` — URL of the parent page (must include trailing slash)
- `mainParent` — Name of the top-level section (controls sidebar grouping)
- `parents` — Breadcrumb trail in `Title:URL` format
- `order` — Sort order among siblings

## Running Locally

**Prerequisites:** Ruby 3.2+, Node.js 24+, [PlantUML](https://plantuml.com/) (optional, for diagrams).

```
git clone https://github.com/CalConnect/DEVGUIDE.git
cd DEVGUIDE
bundle install && npm ci
bundle exec jekyll serve
```

The site will be available at `http://localhost:4000`.

## Content Structure

- **`_pages/`** — Main content sections. Each section has an index file and a subdirectory for child pages.
- **`_layouts/`** — Page layouts (`toc-type` for section pages with sidebar, `page` for standalone pages).
- **`_includes/`** — Shared templates (header, footer, sidebar navigation).
- **`_frontend/`** — CSS (Tailwind) and JavaScript entry points.
- **`assets/`** — Static assets (images, favicons).
