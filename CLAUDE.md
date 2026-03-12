# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the CalConnect DEVGUIDE - a Jekyll-based documentation site for calendaring and scheduling standards (iCalendar, CalDAV, CardDAV, vCard, etc.). The site is published at https://devguide.calconnect.org.

## Build Commands

```bash
# Install dependencies
bundle install

# Build the site
bundle exec jekyll build

# Serve locally with live reload
bundle exec jekyll serve

# Build for production (with baseurl for GitHub Pages)
JEKYLL_ENV=production bundle exec jekyll build
```

## Architecture

### Jekyll Collections

The site uses two Jekyll collections defined in `_config.yml`:

- **pages**: Main content pages at `_pages/` (permalink: `/:path/`)
- **appendixes**: Appendix content at `_appendixes/` (permalink: `/Appendix/:path/`)

### Layouts

- `default.html`: Base layout with head, header, feedback, footer, and script includes
- `page.html`: Simple container wrapper (inherits from default)
- `toc.html`: Table of Contents page with recursive page listing
- `toc-type.html`: Content pages with sidebar navigation and breadcrumbs
- `home.html`: Homepage layout

### Page Front Matter

Pages use a hierarchical structure with these front matter keys:

```yaml
---
layout: toc-type
title: Page Title
parent: "/ParentPath"        # Parent page path
mainParent: "SectionName"    # Top-level section name for sidebar
parents: "Name:/path;Name2:/path2"  # Breadcrumb chain (semicolon-separated)
order: 400                   # Sort order in navigation
---
```

### Navigation System

- `_includes/toc-sidebar.html`: Recursive sidebar navigation that builds the tree based on `parent` and `mainParent` front matter
- `_includes/toc-entry.html`: Entry rendering for Table of Contents page
- `_includes/toc-mainPage-placeholder.html`: Renders child links for placeholder pages with no content

## Deployment

- GitHub Actions workflow at `.github/workflows/build_deploy.yml`
- Builds with Ruby 3.2 and Jekyll 4.3.4
- Deploys to GitHub Pages on push to `master` branch
- Uses `JEKYLL_LOG_LEVEL=debug` for verbose build output

## Link Checking

The `.github/workflows/links.yml` workflow runs lychee link checker on all HTML files in `_site/` after build.

## Editorial Conventions

From `_appendixes/How-to-Contribute.md`:

- Use blockquote (`>`) for RFC quotes
- Link to HTML versions of RFCs at `http://tools.ietf.org/html/rfcXXXX`
- Use deep links with anchors when possible (e.g., `#section-1.2`)
- XML comments `<!-- comment -->` can be used for invisible annotations

## PlantUML

The site supports PlantUML diagrams. Configuration in `_config.yml`:
- JAR at `_bin/plantuml.jar`
- Generated images stored in `_plantuml/` temp folder

## Local Development Setup (Mac)

1. `brew install plantuml`
2. `gem install bundler jekyll`
3. `gem install jekyll-plantuml`
4. `bundle install`
5. `bundle exec jekyll serve`
