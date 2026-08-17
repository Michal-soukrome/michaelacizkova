# Michaela Čížková Photography Portfolio

A stunning, high-performance Next.js 16 photography portfolio featuring black and white imagery. Built with modern best practices, optimal performance, and beautiful animations.

## ✨ Features

### Performance & Optimization

- ⚡ **Next.js 16** with React 19 and App Router
- 🖼️ **Optimized Image Component** with blur placeholders and lazy loading
- 📦 **AVIF/WebP Support** for next-gen image formats
- 🎯 **Smart Caching** with 1-year TTL for static assets
- 🚀 **Package Optimization** for lucide-react and framer-motion
- 📊 **Performance Monitoring** utilities included

### Modern Design

- 🎨 **Stunning Black & White** color scheme
- ✨ **Smooth Animations** powered by Framer Motion
- 📱 **Fully Responsive** design for all devices
- 🌊 **Parallax Effects** on hero section
- 🎭 **Glass Morphism** UI components
- 🔄 **Smooth Scrolling** with custom scrollbar

### Components

- 🏠 **Hero Section** with carousel and parallax
- 🖼️ **Gallery** with category filters and lightbox
- 👤 **About** with interactive timeline
- 💼 **Services** showcase with feature lists
- 💬 **Testimonials** carousel with ratings
- 📧 **Contact Form** with modern design
- 🦶 **Enhanced Footer** with social links

### Developer Experience

- 📝 **TypeScript** for type safety
- 🎯 **ESLint** configured
- 🎨 **Tailwind CSS v4** with custom utilities
- 🔍 **SEO Optimized** with comprehensive metadata
- ♿ **Accessibility** focused
- 📱 **Mobile First** approach

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Set up contact form email (see Contact Form section below)
cp .env.example .env.local
# → Edit .env.local with your SMTP credentials

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

## 📁 Project Structure

```
src/
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts     # Contact form API (Nodemailer)
│   ├── globals.css          # Global styles and custom utilities
│   ├── layout.tsx           # Root layout with metadata
│   ├── page.tsx             # Home page
│   └── loading.tsx          # Loading state component
├── components/
│   ├── About.tsx            # About section with timeline
│   ├── Contact.tsx          # Contact form (submits to /api/contact)
│   ├── Footer.tsx           # Enhanced footer
│   ├── Gallery.tsx          # Photo gallery with filters
│   ├── Header.tsx           # Navigation header
│   ├── Hero.tsx             # Hero section with carousel
│   ├── OptimizedImage.tsx   # Performance-optimized image component
│   ├── Section.tsx          # Reusable section wrapper
│   ├── Services.tsx         # Services showcase
│   └── Testimonials.tsx     # Client testimonials
└── lib/
    ├── photos.ts            # Photo data and types
    └── performance.ts       # Performance utilities
.env.example                   # Template for SMTP env vars
```

## 🎨 Customization

### Update Portfolio Images

Edit `src/lib/photos.ts` to add your own images:

```typescript
export const photos: Photo[] = [
  {
    id: "1",
    src: "https://your-image-url.com/photo.jpg",
    alt: "Description",
    title: "Photo Title",
    category: "Portraits",
    size: "large",
  },
  // Add more photos...
];
```

### Modify Color Scheme

Update colors in `src/app/globals.css`:

```css
:root {
  --background: #000000;
  --foreground: #ffffff;
}
```

### Configure Next.js

Optimize settings in `next.config.ts`:

```typescript
const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      // Add your image hosting domains
    ],
  },
};
```

## 🔧 Performance Best Practices

This project implements numerous performance optimizations:

1. **Image Optimization**
   - Automatic format selection (AVIF/WebP/JPEG)
   - Responsive image sizing
   - Lazy loading with intersection observer
   - Blur placeholders during load

2. **Caching Strategy**
   - Long-term caching for static assets (1 year)
   - Proper cache headers
   - Optimized bundle splitting

3. **Code Optimization**
   - Package import optimization
   - Tree shaking enabled
   - Minimal runtime overhead

4. **User Experience**
   - Smooth animations with reduced motion support
   - Fast page transitions
   - Optimized font loading

## 📊 SEO & Metadata

Comprehensive SEO implementation:

- Open Graph tags for social sharing
- Twitter Card metadata
- Structured data ready
- Semantic HTML
- Accessible components

## 🛠️ Technologies Used

- **Framework:** Next.js 16
- **UI Library:** React 19
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Carousel:** Embla Carousel
- **Email:** Nodemailer (contact form)
- **Language:** TypeScript

## 📝 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📧 Contact Form

For inquiries about photography services or this portfolio:

- Email: foto.michaelacizkova@seznam.cz
- Location: Prague, Czech Republic

### How the contact form works

The form on the website submits to a **Next.js API route** (`/api/contact`) which sends emails via **Nodemailer**. No separate backend is required — on Vercel this runs as a serverless function automatically.

**Architecture:**

```
Browser (form) → POST /api/contact → Nodemailer → SMTP server → your inbox
```

### Setup

1. Copy `.env.example` to `.env.local`
2. Fill in SMTP credentials (see table below)
3. Restart dev server or redeploy

| Variable        | Description                                 | Example                          |
| --------------- | ------------------------------------------- | -------------------------------- |
| `SMTP_HOST`     | SMTP server hostname                        | `smtp.seznam.cz`                 |
| `SMTP_PORT`     | Port (465 for SSL, 587 for STARTTLS)        | `465`                            |
| `SMTP_USER`     | Login / sender email                        | `foto.michaelacizkova@seznam.cz` |
| `SMTP_PASS`     | Password or app-specific password           | `••••••••`                       |
| `CONTACT_EMAIL` | Recipient (optional, defaults to SMTP_USER) | `foto.michaelacizkova@seznam.cz` |

For **Vercel**, add these in Dashboard → Settings → Environment Variables.

---

Built with ❤️ using Next.js and modern web technologies
