# NewsX

A category-based news reader built with React and deployed on GitHub Pages.

## Why this was updated

The original version used `newsapi.org`, which blocks browser requests on free plans outside localhost.
This version uses **The Guardian Open Platform** (`api-key=test`) so it stays current and works from GitHub Pages without a backend.

## Feed behavior

- Categories are mapped to Guardian sections (Business, Sports, Technology, etc.).
- Headlines are fetched live and sorted by latest from the source API.
- When article images are missing or blocked, the app uses a local fallback placeholder image.

## Run locally

1. Install dependencies:

```bash
npm install
```

2. Start dev server:

```bash
npm start
```

## Deploy to GitHub Pages

This project is configured for:

`https://vikasvk1.github.io/News-App`

Deploy command:

```bash
npm run deploy
```

## Scripts

- `npm start`: Run local development server
- `npm test`: Run tests
- `npm run build`: Create production build
- `npm run deploy`: Build + publish to `gh-pages` branch
