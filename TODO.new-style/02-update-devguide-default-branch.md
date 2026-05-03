# 02 - Update DEVGUIDE default branch to main

Change the default branch from `master` to `main` and update workflows to reference `main`.

**Files:**
- `.github/workflows/build_deploy.yml` — change trigger branch `master` → `main`, change deploy condition `refs/heads/master` → `refs/heads/main`
- `.github/workflows/links.yml` — already uses `main` (verify)
- Update remote HEAD: `git push origin main && git remote set-head origin main`
