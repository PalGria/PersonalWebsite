# Personal Portfolio — JM Palau Alegria

Senior Frontend Developer portfolio. Built with React 18, TypeScript, Vite, Tailwind CSS, and Contentful headless CMS, statically prerendered with [vite-react-ssg](https://github.com/Daydreamer-riri/vite-react-ssg).

## Tech Stack

- **React 18** + **TypeScript** (strict mode)
- **Vite** + SWC, prerendered to static HTML at build time (vite-react-ssg)
- **React Router 6** data routes with build-time loaders
- **Tailwind CSS** with dark mode support
- **Framer Motion** for scroll-triggered animations (respects `prefers-reduced-motion`)
- **Contentful** headless CMS for all content — fetched only at build time
- Self-hosted on a VPS as static files

## Features

- Every page (home, each blog post, 404) is prerendered HTML: fast first paint and full SEO / social previews
- The Contentful SDK and access token never ship to the browser
- Dark / light mode toggle (respects system preference, persists in localStorage, no flash on load)
- Sticky navbar with smooth-scroll section navigation and scroll spy
- SEO: per-page title/description, canonical, OpenGraph, Twitter Cards, JSON-LD Person structured data
- CV download button linking to `/public/cv.pdf`
- Projects showcase, blog, and contact sections

## Getting Started

```bash
npm install
npm run dev      # dev server with SSR (loaders run on the server)
npm run build    # lint + typecheck + prerender into dist/
npm run preview
```

## Environment Variables

Copy `.env.example` to `.env` and fill in:

```
VITE_CONTENTFUL_SPACE_ID=your_space_id
VITE_CONTENTFUL_ACCESS_TOKEN=your_delivery_api_token
# Optional, defaults to https://palgria.es
VITE_SITE_URL=
```

## Deployment

`npm run build` outputs a fully static site in `dist/`: `index.html`, `blog/<slug>.html` for each post and `404.html`. Copy it to the VPS and configure the web server to resolve extensionless URLs to `.html` files and to serve `404.html` for anything else. With nginx:

```nginx
root /var/www/palgria.es;

location / {
  try_files $uri $uri.html $uri/ =404;
}

error_page 404 /404.html;

location /assets/ {
  add_header Cache-Control "public, max-age=31536000, immutable";
}
```

Do **not** use an SPA fallback (`try_files ... /index.html`): unknown URLs would get the home page HTML instead of a real 404.

## Content updates

Content is fetched from Contentful **at build time**, so publishing in Contentful does not update the live site by itself. Rebuild and redeploy after publishing (or automate it, e.g. a Contentful webhook that triggers the build on the VPS or in CI).

## Customisation

- **Content** (bio, resume, skills, brands, projects, blog, contact email): managed in Contentful
- **Site metadata** (name, description, home entry ID, CV filename): `src/config/site.ts`
- **CV**: drop your PDF as `public/cv.pdf`
- **Social preview image**: `public/og-image.png` (1200×630)
