# Rj's Cake Shop — Website

A Next.js (App Router) marketing site for **Rj's Cake Shop**, a custom
vintage-cake bakery in Surrey, BC.

## Business info used on this site

- **Name:** Rj's Cake Shop
- **Address:** 13628 81A Ave, Surrey, BC V3W 3N7 (Kings Landing plaza)
- **Phone:** (778) 918-4162
- **Instagram:** [@rjs.cakeshop](https://www.instagram.com/rjs.cakeshop/)
- **Google rating:** 4.4

Pricing and store hours weren't publicly listed anywhere I could verify, so
they're intentionally left off the site rather than guessed. Add them once
you have them — see "Where to edit things" below.

## Photos

The photos currently in the site are free-license stock photos from
Unsplash (hot-linked, no download needed) used as realistic placeholders —
they are **not** actual photos of Rj's Cake Shop's cakes. I wasn't able to
pull the shop's real Instagram photos in automatically, and this build
environment doesn't have an image-generation tool available, so no AI
images were generated either. Swap in the bakery's real photos (or run
them through an AI image tool of your choice) before launch — see below.

## Requirements

- Node.js 18.18+ (Node 20 LTS recommended)
- npm (or pnpm/yarn if you prefer — just adjust the commands below)

## Run it locally

```bash
npm install
npm run dev
```

Visit http://localhost:3000

## Project structure

```
app/
  layout.js          # fonts + SEO metadata
  page.js             # assembles the page from the sections below
  globals.css
  components/
    Header.js
    Hero.js
    About.js
    Flavors.js         # "Signature Cakes" cards — edit flavours/names here
    Gallery.js          # photo grid — swap image URLs/paths here
    OrderSteps.js
    Contact.js          # address, phone, Instagram, embedded map
    Footer.js
    Scallop.js          # the scalloped "piping border" divider used site-wide
    Reveal.js           # small scroll-reveal wrapper
```

## Where to edit things

- **Text/copy:** each section is its own file in `app/components/`.
- **Photos:** replace the Unsplash URLs in `Hero.js`, `About.js`, and
  `Gallery.js`. To use your own image files instead of remote URLs, drop
  them into `/public` and reference them as `/your-file.jpg`.
- **Colours/fonts:** `tailwind.config.js` (palette) and `app/layout.js`
  (Google Fonts: Fraunces + Jost).
- **Hours/pricing:** not currently on the site — easiest place to add
  hours is `Contact.js`, and pricing notes live in `Flavors.js`.

## Deploying to Vercel

**Option A — Vercel CLI**

```bash
npm install -g vercel
vercel login
vercel        # first deploy, follow the prompts
vercel --prod # promote to production
```

**Option B — GitHub + Vercel dashboard (recommended for ongoing edits)**

1. Push this folder to a new GitHub repository.
2. Go to https://vercel.com/new and import that repository.
3. Framework preset auto-detects as Next.js — no extra config needed.
4. Click **Deploy**. Every future push to `main` redeploys automatically.

No environment variables are required for this project.
