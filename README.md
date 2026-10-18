# JAS Portfolio — Render deploy

Static site, no build step. Push the **contents of this folder** as the repo root.

```
index.html  projects.html  privacy.html  404.html
css/        home.css · projects.css · privacy.css
js/         runtime.js (page engine) · home.js · projects.js · privacy.js
assets/     images, thumbnails, certificate PDFs
render.yaml robots.txt sitemap.xml site.webmanifest
```

## Render
- Blueprint: New → Blueprint → pick repo → Apply.
- Or manual: New → Static Site · Root directory: *(empty)* · Build command: `echo ok` · Publish directory: `./`

## Notes
- Pages must be served over http(s) — opening index.html straight from disk won't load the page scripts.
- React, fonts and three.js load from public CDNs.
- URLs assume `https://jas-portfolio.onrender.com`; if yours differs, find-and-replace it in the HTML files, robots.txt and sitemap.xml.
