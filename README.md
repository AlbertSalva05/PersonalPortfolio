# Deploying to Render

Static site — no build step.

## Option A: Blueprint (render.yaml)
1. Push this repo to GitHub/GitLab. Keep `render.yaml` at the **repo root** (move it up one level from `deploy/`; it already points `rootDir: deploy`).
2. Render dashboard → **New → Blueprint** → pick the repo → Apply.

## Option B: Manual static site
1. Render dashboard → **New → Static Site** → pick the repo.
2. Root directory: `deploy` · Build command: *(leave empty)* · Publish directory: `.`
3. Add the headers from `render.yaml` under **Settings → Headers** (optional, improves caching).

## After the first deploy
- Your URL will be `https://<service-name>.onrender.com`. The files assume `https://jas-portfolio.onrender.com` — if yours differs (or you add a custom domain), find-and-replace that string in `index.html`, `projects.html`, `privacy.html`, `robots.txt` and `sitemap.xml`.
- Run PageSpeed Insights on the live URL.
- Submit `/sitemap.xml` in Google Search Console.

## Files
- `index.html` — portfolio home
- `projects.html` — all projects (the home page also reads its project list)
- `privacy.html` — privacy and terms
- `404.html` — not-found page (Render serves it automatically)
- `support.js` — page runtime (loads React from unpkg CDN)
- `assets/` — images, thumbnails, certificate PDFs
