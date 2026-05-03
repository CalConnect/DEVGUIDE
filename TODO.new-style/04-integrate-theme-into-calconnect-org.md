# 04 - Integrate theme into calconnect.org

Remove duplicated files now provided by calconnect-theme gem.

## Config updates

- `Gemfile`: add `gem "calconnect-theme", path: "../calconnect-theme"`, remove `minima`
- `_config.yml`: change `theme: minima` → `theme: calconnect-theme`

## Files to delete (now in theme)

- `_layouts/base.html`
- `_layouts/default.html`
- `_layouts/page.html`
- `_includes/head.html`
- `_includes/breadcrumbs.html`
- `_includes/feedback.html`
- `_includes/google-analytics.html`
- `_includes/custom-head.html`
- `_frontend/js/theme.js`
- `_frontend/js/navigation.js`

## Files to keep (site-specific overrides)

- `_includes/header.html`, `_includes/footer.html`
- `_includes/news-card.html`, `_includes/script.html`
- `_layouts/home.html`, `_layouts/category.html`, `_layouts/news-*.html`
- `_frontend/entrypoints/application.css` (site-specific @source paths)
- `_frontend/entrypoints/application.js` (Vue news search)
- `_frontend/components/`, `_frontend/composables/`
- `_data/`, `vite.config.ts`
