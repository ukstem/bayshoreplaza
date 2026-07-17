# Bayshore Plaza — teaser website

Static, mobile-first teaser site for Bayshore Plaza (Boundbrook, Port Antonio,
Portland, Jamaica). Built by Cloudbotics Web Services as a Phase-1 validation
asset. Plain HTML/CSS/JS — no build step, no backend, no database.

## Structure

```
index.html            Home: hero, amenities, map, visit info, leasing contact
directory.html        Searchable/filterable shop directory
shop-demo.html        Sample shop profile (fictional demo — the sales exhibit)
for-businesses.html   Pitch page for shop owners with pricing tiers
css/styles.css        All styles (mobile-first, breakpoints at 640px / 960px)
js/main.js            Mobile nav toggle
js/directory.js       Directory search + category filtering
data/shops.js         Shop listings — EDIT THIS after the tenant walk-through
```

## Editing shop listings

All directory entries live in `data/shops.js` as a plain JS array. Each entry
has `name`, `category`, `unit`, `phone`, `whatsapp` and `blurb`. Set
`whatsapp` to the shop's number in international format without `+` or spaces
(e.g. `"18761234567"`) to show a WhatsApp "Message" button. Entries marked
`placeholder: true` are generic seeds — replace them with real tenant names.

## Finding placeholders

Every piece of placeholder content is marked with an HTML/JS comment:

```
grep -rn "PLACEHOLDER" .
```

## Deploying

The site is plain static files — upload the folder anywhere.

**Netlify:** drag the `bayshore-plaza` folder onto https://app.netlify.com/drop
(or `netlify deploy --prod --dir .` with the CLI).

**Vercel:** `vercel --prod` from this folder (framework preset: "Other").

**GitHub Pages:** push this folder to a repo, then Settings → Pages →
deploy from branch → root.

The real domain (bayshoreplaza.com) is already set in the Open Graph URLs,
JSON-LD and promo templates.

## Local preview

Any static server works, e.g.:

```
python3 -m http.server 8000
```

then open http://localhost:8000

## Images

- `img/demo-*.jpg` — AI-generated images for the fictional demo shop on
  shop-demo.html only. Real tenant pages must use real photos.
- `og-image.jpg` — social share card (1200×630), generated from
  `og-card.html`. To regenerate after editing the card:
  `chrome --headless --screenshot=og-image.png --window-size=1200,630 og-card.html`
  then convert to JPEG.

## Promo kit (promo/)

WhatsApp Status launch cards (1080×1920), built from `promo/status-card.html`
over AI-generated backgrounds in `promo/bg/`. Seven prebuilt cards:
`status-launch.jpg` (plaza-wide announcement) plus one per category
(food, groceries, pharmacy, fashion, electronics, beauty).

Rebuild all: `./promo/build-status-cards.sh`
Personalized card for one shop: `./promo/build-status-cards.sh food "Shop Name" 12`

The domain pill reads from the `DOMAIN` constant in `status-card.html` —
update it when the real domain exists, then re-run the script. The promo/
folder is a working kit, not part of the website; exclude it when deploying
if you want (nothing links to it).

## Performance notes

- No frameworks or UI kits; the only external requests are two Google Fonts
  families and the OpenStreetMap embed (lazy-loaded).
- Image slots are CSS placeholders. When adding real photos, compress to
  ~100–200 KB (e.g. squoosh.app), size them to their display size, and add
  `loading="lazy"` to everything below the fold.
