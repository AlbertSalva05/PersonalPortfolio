# JAS Portfolio (React build)

Personal portfolio of James Albert Salva (JAS), Senior Lead Developer and UI/UX Designer.
Live: https://jas-portfolio-3z5b.onrender.com/ · Build: 20261105e

Static site. React 18 (UMD from unpkg) renders the page templates in the browser through `js/runtime.js`. No build step needed to host it.

## Pages
- `index.html`: home (hero with design/code views, selected work, experience, certificates, resources, contact)
- `projects.html`: all projects with search, filters and screen galleries
- `privacy.html`: privacy and terms
- `404.html`: not-found page (noindex)

## Files
| Path | What it is |
|---|---|
| `css/home.css`, `projects.css`, `privacy.css` | Page styles |
| `js/runtime.js` | Template renderer (React) |
| `js/home.js`, `projects.js`, `privacy.js` | Page content and behaviour |
| `assets/` | Project screenshots (WebP), certificates (PDF + JPG), résumé PDF, share images |
| `assets/thumbs/`, `assets/wall/` | Small WebP previews for cards and the hero wall |
| `assets/icons/` | Favicon set: SVG mark, 32 px PNG, Apple touch icon, 192/512 and maskable icons |
| `favicon.ico` | 16/32/48 px icon for older browsers |
| `robots.txt`, `sitemap.xml`, `site.webmanifest` | Crawling, indexing and install metadata |
| `render.yaml` | Render static-site config: security and cache headers, `/projects`, `/privacy`, `/resume` routes |

## Third-party
React 18.3.1 (unpkg), three.js 0.160 (jsDelivr), pdf.js 2.16 (cdnjs), Simple Icons (cdn.simpleicons.org), Google Fonts (Newsreader, Schibsted Grotesk).

## Deploy (Render)
1. Delete the old files in the repo first (including `assets/`), then copy this folder in.
2. Push with Git or GitHub Desktop (not web drag-and-drop: it caps at 100 files).
3. Render, `jas-portfolio`: Manual Deploy, then "Clear build cache & deploy".
4. Hard refresh (Ctrl+Shift+R).

If the domain changes, replace `https://jas-portfolio-3z5b.onrender.com` in the pages, `sitemap.xml` and `robots.txt`.
