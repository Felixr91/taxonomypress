# Taxonomy Press

Vite + React + TypeScript. Deployed on Netlify from GitHub.

## Run it

```bash
npm install
npm run dev      # local site at http://localhost:5173
npm run build    # production build into /dist
```

## Where things live

| To change...                         | Edit                                 |
| ------------------------------------ | ------------------------------------ |
| Floral Observer issues, subscription | `src/data/issues.ts`                 |
| Home page projects                   | `src/data/projects.ts`               |
| Free printables                      | `src/data/printables.ts`             |
| Species list                         | `src/data/species.ts`                |
| Field notes passage                  | `src/content/FieldNotes.tsx`         |
| House inks strip                     | `src/data/inks.ts`                   |
| Nav, footer links, contact email     | `src/data/site.ts`                   |
| Page layouts                         | `src/pages/*.tsx`                    |
| Shared pieces (cards, sections)      | `src/components/`                    |
| Styles                               | `src/styles/`                        |
| Images, fonts, PDFs                  | `public/img`, `public/fonts`, `public/downloads` |

**Adding an image:** put the file in `public/img`, then add `image: { src: '/img/file.jpg', alt: '...' }` to the entry. Without `image`, a placeholder box shows.

**Adding an issue:** copy an entry in `src/data/issues.ts`, change the fields, and it shows up on the page.

## Components

- `primitives.tsx`: `PageMeta`, `Overprint`, `ImageSlot`, `Plate`, `MetaRow`, `InstagramIcon`
- `links.tsx`: `SmartLink` (router link or plain link), `LinkButton`
- `sections.tsx`: `CtaSection`, `PageHero`
- `InkStrip.tsx`: the house inks swatch row
- `grid.ts`: `cardSpan()`, card widths that always fill a row
- `cards.tsx`: `IssueCard`, `SubscriptionFeature`, `ProjectCard`, `DownloadCard`, `SpeciesRail`
- `Layout.tsx`, `SiteHeader.tsx`, `SiteFooter.tsx`: shared on every page

## Deploy

1. Push this folder to a GitHub repo.
2. In Netlify: Add new site > Import from Git > pick the repo.
3. `netlify.toml` already sets the build command, the `dist` folder, and redirects
   (including old `.html` URLs to the new routes).
