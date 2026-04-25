# CSCV Home Page Demo

Static demo of the revamped Chelsea Supporters Club Vancouver home page, exported from Claude Design.

## What's here

- `Home.html` — the main home page (entry point)
- `index.html` — redirects to `Home.html` so default-index hosts work
- `shared/styles.css` — design tokens + global styles
- `shared/components.jsx` — Nav, Footer, CookieBanner, PageHeader (compiled in-browser via Babel)
- `uploads/` — image assets
- Other `*.html` files — sibling pages (Memberships, Matches, FAQs, etc.) so the home-page nav and CTAs are clickable end-to-end

## Preview locally

```bash
cd cscv-demo
python3 -m http.server 8765
```

Then open http://localhost:8765 — `file://` won't work because Babel needs to fetch the JSX via HTTP.

## Deploy as an emailable link (easiest path)

**Netlify Drop** — fastest, no account required for the first deploy:

1. Open https://app.netlify.com/drop
2. Drag the `cscv-demo` folder onto the page
3. Wait ~30 seconds — you'll get a URL like `https://random-name-123.netlify.app`
4. Email that link

**Alternatives**
- **Surge** — `npm i -g surge && surge .` (asks for email + sets a subdomain)
- **GitHub Pages** — push to a repo, enable Pages on `main` / root
- **Vercel** — `npx vercel` from inside the folder

## Notes for reviewers

- This is a *prototype* built in HTML/CSS/React-via-Babel. Production would be rebuilt in a real framework (Next.js, etc.).
- The countdown timer, leaderboard, fixtures, and stats are placeholder data.
- "Reserve Seat" buttons link to opentable.com generically — real integration TBD.
- Newsletter form is wired to local state only (no backend yet).
