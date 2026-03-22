# 🚀 Quick Start Guide

## Installation & Setup

```bash
# 1. Install dependencies
npm install

# 2. Set up contact form email
cp .env.example .env.local
# → Open .env.local and fill in your SMTP credentials
#   (see "Contact Form" section below for details)

# 3. Run development server
npm run dev

# 4. Open browser
# Visit http://localhost:3000
```

## 📋 What Was Enhanced

### ✅ Performance

- Image optimization (AVIF/WebP)
- 1-year caching
- Lazy loading
- Code splitting
- Package optimization

### ✅ Components

- OptimizedImage (with blur placeholder)
- Enhanced Gallery (with filters & lightbox)
- Parallax Hero
- Timeline About section
- Modern Testimonials
- Professional Contact form
- Enhanced Services cards
- Updated Footer

### ✅ Design

- Black & white theme
- Glass morphism effects
- Smooth animations
- Custom scrollbar
- Gradient backgrounds
- Responsive layouts

### ✅ SEO

- Meta tags
- Open Graph
- Twitter Cards
- Semantic HTML
- Accessibility

## 🎨 Customization

### Update Images

Edit `src/lib/photos.ts`:

```typescript
{
  id: "1",
  src: "YOUR_IMAGE_URL",
  title: "Your Title",
  category: "Portraits",
  size: "large"
}
```

### Change Colors

Edit `src/app/globals.css`:

```css
:root {
  --background: #000000;
  --foreground: #ffffff;
}
```

### Update Content

- Hero: `src/components/Hero.tsx`
- About: `src/components/About.tsx`
- Services: `src/components/Services.tsx`
- Contact: `src/components/Contact.tsx`
- Testimonials: `src/components/Testimonials.tsx`

## 📱 Key Features

✅ Category filters in gallery
✅ Lightbox with keyboard navigation
✅ Parallax effects
✅ Smooth animations
✅ Mobile responsive
✅ SEO optimized
✅ Accessibility ready
✅ Performance optimized
✅ Working contact form (Nodemailer)

## 🔧 Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS v4
- Framer Motion
- Lucide Icons
- Embla Carousel
- Nodemailer (contact form email)

## � Contact Form

The contact form sends emails via a **Next.js API route** + **Nodemailer**. No separate backend needed.

### Quick setup

```bash
cp .env.example .env.local
```

Then edit `.env.local`:

```dotenv
SMTP_HOST=smtp.seznam.cz
SMTP_PORT=465
SMTP_USER=foto.michaelacizkova@seznam.cz
SMTP_PASS=your-password
CONTACT_EMAIL=foto.michaelacizkova@seznam.cz
```

Restart the dev server after editing.

### Vercel deployment

Add the same env vars in **Vercel Dashboard → Settings → Environment Variables**, then redeploy.

### How it works

```
User fills form → POST /api/contact → Nodemailer → SMTP → your inbox
```

Files involved:

- `src/app/api/contact/route.ts` – API handler
- `src/components/Contact.tsx` – form UI with loading/success/error states
- `.env.example` – env var template

## �📦 Build & Deploy

```bash
# Build for production
npm run build

# Start production server
npm start

# Or deploy to Vercel
vercel deploy
```

## 📝 Important Files

- `next.config.ts` - Image & performance config
- `src/app/layout.tsx` - SEO metadata
- `src/app/globals.css` - Styles & utilities
- `src/lib/photos.ts` - Portfolio images
- `src/lib/performance.ts` - Performance utils

## 🎯 What's New

1. **OptimizedImage Component** - Automatic optimization
2. **Category Filters** - Filter photos by type
3. **Enhanced Lightbox** - Better UX with animations
4. **Parallax Hero** - Stunning first impression
5. **Timeline** - Visual about section
6. **Glass Cards** - Modern UI design
7. **Performance Utils** - Monitoring & optimization
8. **SEO Complete** - Ready for search engines

## ⚡ Performance Tips

1. Use OptimizedImage for all images
2. Images are auto-optimized to AVIF/WebP
3. Lazy loading is automatic
4. Categories improve UX
5. Code is split automatically

## 🐛 Troubleshooting

**If dev server fails:**

```bash
rm -rf node_modules
npm install
npm run dev
```

**If images don't load:**

- Check `next.config.ts` remotePatterns
- Add your image host domains

**If styles look wrong:**

- Clear browser cache
- Check Tailwind CSS config

## 📚 Documentation

See these files for more info:

- `README-NEW.md` - Full documentation
- `ENHANCEMENTS.md` - Complete change log
- Component files - Inline comments

---

**Ready to launch!** 🚀

Your photographer portfolio is now production-ready with world-class performance and design.
