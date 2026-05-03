# 03 - Migrate standards.calconnect.org to Tailwind/Vite

Full migration from Materialize CSS to shared calconnect-theme with Tailwind/Vite.

## Node.js tooling to create

| File | Source |
|---|---|
| `package.json` | Same as DEVGUIDE (no Vue deps) |
| `vite.config.ts` | Same as DEVGUIDE (no Vue plugin) |
| `postcss.config.js` | Copy from DEVGUIDE |
| `config/vite.json` | Copy from DEVGUIDE (use port 3038) |
| `_frontend/entrypoints/application.css` | Tailwind v4 with standards-specific `@source` paths + doc-type/stage color `@theme` tokens |
| `_frontend/entrypoints/application.js` | Copy from DEVGUIDE |
| `_frontend/js/theme.js` | Copy from calconnect-theme |
| `_frontend/js/navigation.js` | Copy from calconnect-theme |

## Config updates

- `Gemfile`: add `calconnect-theme` (path:), add `jekyll-vite`, remove `minima`, `rubocop`
- `_config.yml`: set `theme: calconnect-theme`, add vite/node excludes

## Layouts to rewrite

| Layout | What to do |
|---|---|
| `default.html` | Replace with `layout: base` + `{{ content }}` |
| `document.html` | Keep Liquid logic, replace Materialize classes with Tailwind |
| `toc-type.html` | Same as DEVGUIDE: Materialize → `.documentation`/`.docs-nav`/`.nav-items` |
| `toc.html` | `container` → `max-w-4xl mx-auto` |
| `page.html` | `container` → `max-w-4xl mx-auto py-8 px-4` |

## Includes to rewrite

| Include | What to do |
|---|---|
| `head.html` | Replace with Inter/JetBrains Mono, critical CSS, `{% vite_stylesheet_tag %}` |
| `header.html` | Materialize nav → Tailwind glass navbar with standards links + dark mode toggle |
| `footer.html` | Materialize footer → Tailwind grid footer |
| `script.html` | jQuery/Materialize/init.js → `{% vite_javascript_tag %}` + GA |
| `document.html` | Keep Liquid logic, replace CSS classes for type badges/stage badges/download buttons |
| `toc-sidebar.html` | `menu-sidebar` → `nav-items` etc. |
| `find-doc.html` | Update CSS classes |
| `copyright.html` | Update CSS classes |

## Doc-type/stage colors

Extract from `_sass/_main.scss` SCSS maps and express as Tailwind `@theme` tokens in `application.css`:
- standard: #0AC442, directive: #540D6E, guide: #D183C9, specification: #65AFFF, report: #3A405A, amendment: #F26430, corrigendum: #C84630, administrative: #BFAE48, advisory: #BD9391
- proposal: #39A0ED, working-draft: #2D7393, committee-draft: #2A6B7C, draft-standard: #1C7F7A, final-draft: #53C170, published: #069E2D, withdrawn: #004E64, cancelled: #2E382E

## Files to delete

- `_sass/materialize/` (entire directory)
- `_sass/main.scss`, `_sass/_main.scss`, `_sass/_metanorma-index.scss`
- `assets/materialize.scss`, `assets/main.scss`, `assets/metanorma-index.scss`
- `js/jquery.min.js`, `js/materialize.min.js`, `js/init.js`
- `fonts/roboto/` (if exists)

## Preserve untouched

- `Makefile`, `scripts/`, `src-documents/`, `bib/`, `bibcoll/`, `csd/`, `_input/`
- `flake.nix`, `flake.lock`, `.envrc`
- `_data/` (doesn't exist — navigation is hardcoded)
- CI workflow (`.github/workflows/build_deploy.yml`) — add Node.js setup step
