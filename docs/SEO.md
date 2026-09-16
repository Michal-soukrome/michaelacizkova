# SEO Reference and Audit

Last reviewed: 2026-09-11

This document records the SEO implementation currently present in the Next.js application, the places where the name `Michaela Čížková` is exposed, and the follow-up work needed to keep search engines and social previews aligned with the site.

## SEO Summary

The site currently covers the main technical SEO layers:

- Next.js App Router metadata in `src/app/layout.tsx`.
- Page-specific titles and descriptions in `src/lib/pageMetadata.ts`.
- Open Graph and Twitter Card metadata.
- `lang="cs"` on the root HTML element.
- Robots directives and a sitemap route.
- Structured data for the homepage, FAQ page, and blog posts.
- Semantic business identity using `Person`, `ProfessionalService`, `Photographer`, `WebSite`, `WebPage`, `Service`, `Offer`, and `FAQPage` schema types.
- Descriptive image `alt` text in the main branded components.
- Local SEO signals for Mladějov, Český ráj, Jičín, Turnov, Sobotka, and Mladá Boleslav.

## Source Map

| SEO surface | Implementation | Current behavior |
|---|---|---|
| Global metadata | `src/app/layout.tsx` | Defines the title template, description, keywords, author, creator, Open Graph, Twitter, robots, icons, locale, geographic metadata, and `metadataBase`. |
| Page metadata | `src/lib/pageMetadata.ts` and route `page.tsx` files | Supplies titles and descriptions for home, FAQ, contact, about, portfolio, services, blog, and not-found pages. |
| Homepage JSON-LD | `src/seo/schemas/homepage.ts`, rendered by `src/app/page.tsx` | Publishes a graph containing the photographer, business, website, homepage, portrait, service areas, and offers. |
| FAQ JSON-LD | `src/seo/schemas/faq.ts`, rendered by `src/app/faq/page.tsx` | Publishes an `FAQPage` with the questions visible on the FAQ page. |
| Blog JSON-LD | `src/seo/schemas/blogPost.ts`, rendered by `src/app/blog/[slug]/page.tsx` | Generates `BlogPosting` data from Sanity content, including title, excerpt, dates, image, author, publisher, and canonical URL. |
| Robots | `src/app/robots.ts` | Allows all crawlers and points them to the production sitemap. |
| Sitemap | `src/app/sitemap.ts` | Combines static URLs with blog URLs loaded from Sanity. |
| Public machine-readable profile | `public/llms.txt` | Describes the photographer, services, locations, equipment, and preferred citation. |
| Image accessibility and relevance | `src/components/About.tsx`, `Header.tsx`, `HomeAbout.tsx`, `OptimizedImage.tsx` | Uses descriptive alt text and optimized Next.js images. |

## Metadata Inventory

| Route | Metadata source | Title focus |
|---|---|---|
| `/` | `homePageMetadata` | Family and wedding photographer in Český ráj |
| `/faq` | `faqPageMetadata` | Frequently asked questions about photography |
| `/kontakt` | `contactPageMetadata` | Booking and contact |
| `/o-mne` | `aboutPageMetadata` | Michaela and her photography approach |
| `/portfolio` | `portfolioPageMetadata` | Family, wedding, and newborn portfolio |
| `/sluzby` | `servicesPageMetadata` | Photography services and packages |
| `/blog` | `blogPageMetadata` | Photography tips in Český ráj |
| `/blog/[slug]` | `generateMetadata()` in the dynamic route | Sanity post title and excerpt |
| not found | `notFoundPageMetadata` | Page not found |

The root layout adds the suffix `| Michaela Čížková` to route titles through the Next.js title template. The blog detail route supplies its own title and description dynamically.

## Structured Data Inventory

### Homepage graph

`src/seo/schemas/homepage.ts` publishes one `@graph` containing:

- `Person` for Michaela Čížková.
- `ProfessionalService` and `Photographer` for the business.
- `WebSite` for `michaelacizkova.cz`.
- `WebPage` for the homepage.
- `ImageObject` for the portrait.
- `OfferCatalog` with `Service` and `Offer` entries for family, newborn, studio, wedding, and reportage photography.
- `areaServed` and `serviceArea` entries for Český ráj and the surrounding cities.
- `sameAs` links for Facebook, Instagram, and Firmy.cz.
- Contact details, IČO, address, coordinates, and price information.

### FAQ page

`src/seo/schemas/faq.ts` publishes an `FAQPage` containing the questions and answers displayed by the FAQ component. The schema should remain synchronized with the visible FAQ content; search engines may ignore FAQ markup that is not visible or differs from the page.

### Blog detail pages

`src/seo/schemas/blogPost.ts` publishes a `BlogPosting` per Sanity article. The author points to the shared `#person` entity and the publisher points to the shared `#business` entity, which is a good identity-linking pattern.

The JSON-LD is escaped before insertion on blog pages so post content cannot accidentally terminate the script element.

## `Michaela Čížková` Identity Surfaces

The exact full name is currently present in these public or SEO-relevant surfaces:

- `public/llms.txt`: preferred citation, photographer profile, and descriptive business text.
- `src/app/layout.tsx`: default title, title template, keywords, author, creator, Open Graph title/site name, and Twitter title.
- `src/lib/pageMetadata.ts`: home, contact, about, and portfolio page titles/descriptions.
- `src/seo/schemas/homepage.ts`: `Person`, business name, `WebSite`, and entity relationships.
- `src/seo/schemas/blogPost.ts`: blog author and publisher name.
- `src/components/Header.tsx`: logo alt text.
- `src/components/Hero.tsx`: visible surname in the hero treatment.
- `src/components/HomeAbout.tsx`: portrait alt text.
- `src/components/About.tsx`: visible heading and portrait alt text.
- `src/components/Footer.tsx`: visible business name and copyright notice.

Related identity variants also appear in the codebase:

- `Michaela Čížková – fotografka` for the business entity.
- `Michaela Čížková Fotografie` for the social sharing site name.
- `Michaela Čížková — fotografka` and `Michaela Čížková - portrét` in image alt text.
- `michaelacizkova_foto` in the Instagram profile URL.

Keep the spelling, accents, business descriptor, phone number, email address, IČO, address, and social profile URLs consistent across these surfaces. This supports entity reconciliation between the website, social profiles, directories, and local search listings.

## Findings and Priorities

### High priority

1. **Fix portrait URLs in homepage structured data.**
   `src/seo/schemas/homepage.ts` uses `/assets/img/portret.jpeg` for `Person.image`, `ProfessionalService.image`, and `ImageObject.contentUrl`. The repository contains `public/assets/portret.jpeg`, so the production URL should be `https://michaelacizkova.cz/assets/portret.jpeg` unless an `/assets/img` deployment path is intentionally generated elsewhere.

2. **Correct the sitemap route list.**
   `src/app/sitemap.ts` includes `/galerie`, but the implemented route is `/portfolio`. It also omits the implemented `/faq` route. Replace `/galerie` with `/portfolio` and include `/faq`.

### Medium priority

3. **Add explicit canonical metadata.**
   `metadataBase` provides a base URL for URL resolution, but it does not document an explicit canonical URL for every route. Add route-level `alternates.canonical` values, especially for dynamic blog pages, when the canonical URL strategy is finalized.

4. **Use stable sitemap `lastModified` values.**
   Static pages currently receive `new Date()` on every sitemap request, which makes unchanged pages look newly modified. Use known content dates or omit `lastModified` for pages without a real modification timestamp. Blog entries should prefer `_updatedAt` when available rather than only `publishedAt`.

5. **Validate structured data before publishing changes.**
   Test the homepage, FAQ, and at least one blog detail URL with Google's Rich Results Test and Schema Markup Validator. Check that every `image`, `url`, `@id`, and social profile URL resolves publicly.

### Lower priority

6. **Review visible FAQ copy for schema quality.**
   The FAQ schema contains apparent typos such as `comic` and `Cílem are`. Correct the visible answer and schema source together so the structured data remains an exact representation of the page.

7. **Keep metadata descriptions distinct and search-intent focused.**
   The current descriptions target useful services and locations. Continue avoiding duplicate descriptions when new landing pages are added, and keep each title readable rather than accumulating keywords.

8. **Add page-specific social images where useful.**
   The site currently shares the portrait globally. Service, portfolio, blog, and contact pages can use relevant `openGraph.images` when a stable representative image exists.

## Recommended Validation Checklist

- [ ] Run `npm run lint`.
- [ ] Run `npm run build` to verify metadata routes, sitemap generation, and Sanity-backed pages.
- [ ] Open `/robots.txt` and confirm the production sitemap URL.
- [ ] Open `/sitemap.xml` and confirm `/portfolio` and `/faq` are present while `/galerie` is absent unless that route is added.
- [ ] Inspect rendered HTML for one homepage, FAQ, and blog page and confirm one intended JSON-LD block per feature.
- [ ] Validate JSON-LD with Schema Markup Validator and Google Rich Results Test.
- [ ] Confirm the portrait URL returns HTTP 200.
- [ ] Confirm every canonical URL, Open Graph URL, and `sameAs` URL resolves to the intended public page.
- [ ] Check title length, description length, heading hierarchy, image alt text, keyboard access, and mobile rendering for each primary route.
- [ ] Re-check Google Search Console after deployment for indexing, sitemap, enhancement, and Core Web Vitals reports.

## Maintenance Rules

When adding a route:

1. Add unique metadata in `src/lib/pageMetadata.ts` or the route's `generateMetadata()` function.
2. Add the canonical route to `src/app/sitemap.ts` if it should be indexed.
3. Decide whether the route needs JSON-LD and link it to the shared `#person`, `#business`, or `#website` entities where appropriate.
4. Use absolute, publicly reachable image URLs in structured data.
5. Keep visible content and structured data synchronized.
6. Add meaningful alt text to editorial and branded images.
7. Test the built route and validate the resulting structured data.
