# Patrick Craig — Personal Website

Source for [patrickjcraig.github.io/personal-website](https://patrickjcraig.github.io/personal-website/), a personal/academic site for Patrick Craig (PhD candidate, University of Florida SCAN Lab).

## Structure

The site is a set of static, self-contained HTML pages (no build step):

| Page | Description |
|---|---|
| `index.dc.html` | Home — combines the hero, research overview, publications, patents, and about/contact sections into one scrollable page (this is the main entry point). |
| `Research.dc.html` | Research detail page. |
| `Publications.dc.html` | Publications list. |
| `Patents.dc.html` | Patents list. |
| `About.dc.html` | About / CV / funding & programs. |
| `Gallery.dc.html` | Image gallery. |
| `Accessibility.dc.html`, `Privacy.dc.html` | Policy pages. |
| `index.html` | Plain redirect to `index.dc.html` (so the site root resolves correctly). |
| `Patrick Craig - Site.dc.html` | Early design-direction mockups; not linked from site navigation. |

Supporting files:

- `assets/` — images (headshot, gallery photos, CV PDF) and `assets/logos/` (collaborator/partner logos used on the Research page).
- `uploads/` — user-uploaded documents and pasted images (resumes, abstracts, publication lists).
- `_ds/` — the "Industry" design-system bundle (shared CSS/JS/tokens) the pages are built on.
- `image-slot.js`, `continuous-scroll.js`, `support.js` — page-level scripting (image upload/reframe slots, scroll effects, nav/shared behavior).
- `.nojekyll` — disables GitHub Pages' Jekyll processing so folders like `_ds/` aren't excluded from the deploy.

## Local preview

These are plain static files — serve the directory root with any static file server, e.g.:

```
python -m http.server 8000
```

then open `http://localhost:8000/index.dc.html`.

## Deployment

Hosted on GitHub Pages, deploying from the `main` branch root. Pushing to `main` triggers a redeploy automatically — no build/CI step required.

## Editing images

Images embedded via `<image-slot>` (see `image-slot.js`) are user-fillable placeholders: click to browse or drag-and-drop a replacement image directly in the page. Dropped images persist via a `.image-slots.state.json` sidecar alongside the HTML. Logos with an author-set `src` (the collaborator/partner logos on the Research page) render that image until replaced.
