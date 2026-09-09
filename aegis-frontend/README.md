# AEGIS

AEGIS is a cinematic cognitive-defense interface for detecting synthetic media,
manipulation patterns, and suspicious digital signals.

## Run locally

```bash
npm install
npm run dev
```

Open `/` for the public experience or `/dashboard` for the interactive command
center.

## Current scope

- The landing page is a five-scene Three.js/GSAP cinematic scroll experience.
- Dashboard analysis flows are deliberately local demonstrations with explicit
  validation, loading, result, and error states.
- No credentials, model keys, or backend URLs are required for the current build.
- `aegis-backend` is reserved for the future FastAPI detection services; model,
  authentication, database, and persistence integrations are not implemented yet.

## Deployment

This package produces a static site and can be deployed to any static host:

```bash
npm run build
npm run preview
```

Deploy the generated `dist/` directory. Configure SPA fallback routing if the
host does not automatically serve `index.html` for `/dashboard`. When backend
services are introduced, keep their URLs and credentials in deployment
environment variables rather than committing them to the repository.

## Quality checks

```bash
npm run lint
npm run build
```
