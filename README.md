# Photographer Portfolio

A modern, sleek photography portfolio website built with Next.js, Tailwind CSS, and Framer Motion. Features a black and white design focused on showcasing images.

## Features

- **Image-focused design** with responsive gallery
- **Black and white theme** for a sleek, professional look
- **Smooth animations** powered by Framer Motion
- **Responsive layout** optimized for all devices
- **TypeScript** for type safety
- **Next.js App Router** for modern routing and performance

## Tech Stack

- **Framework:** Next.js 14+ with App Router
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Language:** TypeScript
- **Linting:** ESLint

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
src/
├── app/                 # Next.js App Router pages
│   ├── layout.tsx       # Root layout with header/footer
│   ├── page.tsx         # Homepage with hero section
│   ├── gallery/         # Gallery page
│   ├── about/           # About page
│   └── contact/         # Contact page
├── components/          # Reusable React components
│   ├── Header.tsx       # Navigation header
│   ├── Footer.tsx       # Site footer
│   ├── Hero.tsx         # Homepage hero section
│   └── Gallery.tsx      # Photo gallery component
└── lib/                 # Utilities and data
    └── photos.ts        # Photo data and types
public/images/           # Static photo assets
```

## Adding Photos

1. Place your images in `public/images/`
2. Update `src/lib/photos.ts` with photo metadata
3. Images will automatically be optimized by Next.js

## Deployment

Deploy to Vercel, Netlify, or any platform supporting Next.js:

```bash
npm run build
npm start
```

## Customization

- Modify colors in `src/app/globals.css`
- Update animations in component files
- Add new pages in `src/app/`
- Customize Tailwind config in `tailwind.config.js`
