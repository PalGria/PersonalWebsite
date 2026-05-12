# Personal Portfolio — JM Palau Alegria

Senior Frontend Developer portfolio. Built with React 18, TypeScript, Vite, Tailwind CSS, and Contentful headless CMS.

## Tech Stack

- **React 18** + **TypeScript** (strict mode)
- **Vite** + SWC for near-instant builds and HMR
- **Tailwind CSS** with dark mode support
- **Framer Motion** for scroll-triggered animations
- **Contentful** headless CMS for all content
- **react-helmet-async** for per-page SEO
- Deployed on **Netlify**

## Features

- Dark / light mode toggle (respects system preference, persists in localStorage)
- Sticky navbar with smooth-scroll section navigation
- Framer Motion entrance animations on all sections
- SEO: OpenGraph, Twitter Cards, JSON-LD Person structured data
- Lazy-loaded routes for optimal Lighthouse score
- CV download button linking to `/public/cv.pdf`
- Projects showcase, blog, and contact sections

## Getting Started

```bash
npm install
npm run dev
```

## Environment Variables

Create a `.env` file in the root:

```
VITE_CONTENTFUL_SPACE_ID=your_space_id
VITE_CONTENTFUL_ACCESS_TOKEN=your_access_token
```

## Customisation

- **Projects**: edit `src/data/projects.ts`
- **Contact email**: edit the `EMAIL` constant in `src/components/contact/Contact.tsx`
- **CV**: drop your PDF as `public/cv.pdf`
- **Content** (bio, resume, skills, blog): managed in Contentful
