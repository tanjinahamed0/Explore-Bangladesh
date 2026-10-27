# Explore Bangladesh

A responsive travel portfolio built with React, Vite, TypeScript, React Router, and Lucide icons. The interface recreates five supplied design references with reusable components, real routes, local photography, and practical sample content.

## Features

- Homepage with destination search, experience links, and travel calls to action
- Eleven data-driven destination pages with attractions, transport, seasons, tips, galleries, and related places
- Destination search plus category, region, budget, and sorting controls
- Six readable travel articles with category filtering and related destination links
- Responsive navigation, mobile menu, accessible forms, image fallbacks, and a custom 404 page
- Page-specific titles and meta descriptions
- Honest frontend-only contact and newsletter demonstrations
- Local openly licensed images with linked attribution on the About page

## Routes

| Route | Page |
| --- | --- |
| `/` | Homepage |
| `/destinations` | Searchable destination listing |
| `/destinations/:slug` | Destination details |
| `/guides` | Travel guides and stories |
| `/guides/:slug` | Full article |
| `/about` | About, contact demo, and photo credits |

Destination and article content lives in `src/data/destinations.ts` and `src/data/guides.ts`.

## Run locally

Use Node.js 22.12 or newer and npm.

```bash
npm install
npm run dev
```

Open the local URL printed by Vite, normally `http://localhost:5173`.

## Checks and production build

```bash
npm run lint
npm run build
npm run preview
```

The production site is generated in `dist/`.

## Deploy to Vercel

1. Push the project to a GitHub repository.
2. Import that repository in Vercel.
3. Keep the detected Vite settings: `npm run build` for the build command and `dist` for the output directory.
4. Deploy.

`vercel.json` includes the SPA rewrite needed for direct visits to nested routes. No environment variables, paid APIs, database, or backend are required to display the website.

## Contact and newsletter configuration

The forms currently validate input in the browser only. They do **not** send email, subscribe users, or store submissions.

To make them operational, connect the submit handlers to a real backend or a form/email service, move any secret keys to server-side environment variables, add server-side validation and spam protection, and update the interface only after the service confirms success. Never place private API keys in client-side source code.

## Photography

The site uses locally stored Wikimedia Commons photographs rather than the design screenshots. Author names, licenses, and source links are available in the **Photo credits** section of `/about`. Images are cropped by CSS for their layouts. Review the linked license terms before reusing or modifying the photographs.

No travel business contact details or social profiles are invented in this project.
