# Kevin Owino — Portfolio

A single-page portfolio site styled around the world you actually work in: API requests, transaction logs, and an M-Pesa STK Push flow as the hero demo.

## Files

- `index.html` — page structure and content
- `styles.css` — the whole design system (colors, type, layout)
- `script.js` — the animated STK Push demo + small interactions

## Before you publish — fill these in

Real contact details, employment history, and education from your CV are now in place. Two things are still placeholders:

| Where | Placeholder | File |
|---|---|---|
| Contact card | `github` and `linkedin` fields — currently `href="#"` with "add your … URL" text | `index.html` (search `add your`) |
| Project log | Add live links if any projects are publicly deployed (currently text-only) | `index.html` |

Your CV lists references (Abdulrazaaq Adan, Kevin Tole, Fredrick Oloo) — I left those off the public site since personal contact details for third parties usually shouldn't go on a public page. Share those directly with employers instead.

## Deploy with GitHub Pages

1. Create a new repository on GitHub — if you want it at `https://<username>.github.io`, name the repo exactly `<username>.github.io`. Otherwise any repo name works and the site will live at `https://<username>.github.io/<repo-name>`.
2. Push these three files (`index.html`, `styles.css`, `script.js`) to the repo root:
   ```bash
   git init
   git add index.html styles.css script.js README.md
   git commit -m "Portfolio site"
   git branch -M main
   git remote add origin https://github.com/<username>/<repo-name>.git
   git push -u origin main
   ```
3. On GitHub: go to **Settings → Pages**.
4. Under **Build and deployment**, set **Source** to `Deploy from a branch`, branch `main`, folder `/ (root)`.
5. Save. GitHub gives you a URL within a minute or two — usually `https://<username>.github.io/<repo-name>`.

## Local preview

No build step — just open `index.html` in a browser, or run a tiny local server:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Customizing further

- Colors and type live at the top of `styles.css` under `:root` — change the CSS variables to retheme everything in one place.
- The STK Push demo steps are an array in `script.js` (`stkSteps`) — edit the text or timing there.
- Project entries are `<article class="ledger-row">` blocks in `index.html` — copy one to add a new project.
