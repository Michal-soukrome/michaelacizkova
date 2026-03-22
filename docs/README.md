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
3. Set up the contact form (email):
   ```bash
   cp .env.example .env.local
   ```
   Edit `.env.local` with your SMTP credentials (see [Contact Form Setup](#contact-form-setup) below).
4. Run the development server:
   ```bash
   npm run dev
   ```
5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
src/
├── app/                 # Next.js App Router pages
│   ├── api/
│   │   └── contact/     # Contact form API route (Nodemailer)
│   ├── layout.tsx       # Root layout with header/footer
│   ├── page.tsx         # Homepage with hero section
│   ├── gallery/         # Gallery page
│   ├── about/           # About page
│   └── contact/         # Contact page
├── components/          # Reusable React components
│   ├── Header.tsx       # Navigation header
│   ├── Footer.tsx       # Site footer
│   ├── Hero.tsx         # Homepage hero section
│   ├── Contact.tsx      # Contact section (form + info)
│   └── Gallery.tsx      # Photo gallery component
└── lib/                 # Utilities and data
    └── photos.ts        # Photo data and types
.env.example             # Template for required env vars
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

## Contact Form Setup

The contact form sends emails through a Next.js API route (`/api/contact`) using **Nodemailer**. No separate backend server is needed — on Vercel this runs as a serverless function.

### Local development

1. Copy the template:
   ```bash
   cp .env.example .env.local
   ```
2. Fill in your SMTP credentials in `.env.local`:
   ```dotenv
   SMTP_HOST=smtp.seznam.cz
   SMTP_PORT=465
   SMTP_USER=foto.michaelacizkova@seznam.cz
   SMTP_PASS=your-password-or-app-password
   CONTACT_EMAIL=foto.michaelacizkova@seznam.cz
   ```
3. Restart the dev server (`npm run dev`).

### Vercel deployment

Add the same variables in **Vercel Dashboard → Settings → Environment Variables**, then redeploy.

### Common SMTP providers

| Provider  | Host                 | Port | Notes                 |
| --------- | -------------------- | ---- | --------------------- |
| Seznam.cz | `smtp.seznam.cz`     | 465  | Use account password  |
| Gmail     | `smtp.gmail.com`     | 465  | Requires App Password |
| Outlook   | `smtp.office365.com` | 587  | Uses STARTTLS         |

> **Tip:** For Gmail, generate an App Password at https://myaccount.google.com/apppasswords

## Customization

- Modify colors in `src/app/globals.css`
- Update animations in component files
- Add new pages in `src/app/`
- Customize Tailwind config in `tailwind.config.js`
