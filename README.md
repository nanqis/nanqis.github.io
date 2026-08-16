# Hannan Balqis — Portfolio

Interactive PHP-programmer–themed portfolio (React + Vite).

## Develop

```bash
npm install
npm run dev
```

## Publish to GitHub Pages (no Actions build)

Build and sync into `docs/` (this is what you commit and push):

```bash
npm run build:pages
```

Then commit the updated `docs/` folder and push to `main`.

In the repo: **Settings → Pages → Deploy from a branch → `main` / `/docs`**.

`dist/` stays gitignored; only `docs/` is published.
