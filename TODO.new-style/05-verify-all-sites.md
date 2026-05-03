# 05 - Verify all three sites build

1. **calconnect.org**: `cd calconnect.org && bundle install && npm ci && bundle exec jekyll build` — verify no regressions
2. **DEVGUIDE**: `cd DEVGUIDE && bundle install && npm ci && bundle exec jekyll serve` — verify sidebar, dark mode, PlantUML, content
3. **standards.calconnect.org**: `cd standards.calconnect.org && bundle install && npm ci && bundle exec jekyll build` — verify document rendering, doc-type badges, sidebar
