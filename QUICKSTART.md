# Quick Start Guide

## نور العلم - Path of Knowledge

Get your Islamic learning platform up and running in minutes!

## Prerequisites

- Node.js 18 or higher
- npm (comes with Node.js)

## Installation & Setup

### 1. Navigate to Project Directory

```bash
cd noor-al-ilm
```

### 2. Install Dependencies (Already Done)

Dependencies are already installed. If you need to reinstall:

```bash
npm install
```

### 3. Start Development Server

```bash
npm run dev
```

The application will start at [http://localhost:3000](http://localhost:3000)

## What's Included

### ✅ Fully Functional Pages

1. **Homepage** - Beautiful landing page with section overview
2. **Tafsir Section** - Quranic exegesis with detailed Surah pages
3. **Hadith Section** - Authentic hadith collections
4. **Ramadan Section** - Complete Ramadan fiqh guide
5. **Women's Fiqh** - Comprehensive women's rulings
6. **Search Page** - Search functionality (UI ready)
7. **About Page** - Project information

### ✅ Features

- 🌙 Dark/Light mode toggle
- 📱 Fully responsive design
- 🎨 Beautiful Islamic aesthetic
- 🔤 Arabic & English typography
- ⚡ Fast performance
- ♿ Accessible design

## Project Structure

```
noor-al-ilm/
├── app/              # All pages and routes
├── components/       # Reusable components
├── lib/             # Data and utilities
└── public/          # Static assets
```

## Available Scripts

```bash
# Development server
npm run dev

# Production build
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

## Next Steps

### For Development

1. **Add More Content**
   - Add more Surahs in `app/tafsir/[id]/page.tsx`
   - Add hadith collections in `app/hadith/`
   - Expand fiqh sections

2. **Customize Design**
   - Edit colors in `app/globals.css`
   - Modify components in `components/`
   - Update Tailwind config in `tailwind.config.ts`

3. **Add Features**
   - Implement search functionality
   - Add user authentication
   - Create bookmark system
   - Add progress tracking

### For Deployment

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions.

**Quick Deploy to Vercel:**
1. Push to GitHub
2. Import on [vercel.com](https://vercel.com)
3. Deploy automatically!

## Key Files to Know

- `app/layout.tsx` - Root layout with theme provider
- `app/page.tsx` - Homepage
- `components/Header.tsx` - Navigation
- `components/Footer.tsx` - Footer
- `app/globals.css` - Global styles
- `tailwind.config.ts` - Tailwind configuration

## Customization Tips

### Change Colors

Edit `app/globals.css`:

```css
:root {
  --primary: 160 45% 35%;  /* Change this */
  --accent: 220 50% 45%;   /* And this */
}
```

### Add New Page

1. Create `app/new-page/page.tsx`
2. Add link in `components/Header.tsx`
3. Done!

### Modify Arabic Font

Edit `app/layout.tsx`:

```typescript
import { Amiri } from "next/font/google";
// Change to another Arabic font
```

## Troubleshooting

### Port Already in Use

```bash
# Use different port
npm run dev -- -p 3001
```

### Build Errors

```bash
# Clear cache and rebuild
rm -rf .next
npm run build
```

### Styling Issues

```bash
# Restart dev server
# Press Ctrl+C, then npm run dev
```

## Getting Help

- Check [DEVELOPMENT.md](./DEVELOPMENT.md) for detailed development guide
- Check [DEPLOYMENT.md](./DEPLOYMENT.md) for deployment help
- Review Next.js docs: [nextjs.org/docs](https://nextjs.org/docs)

## Sample Content

The project includes sample content for:
- Surah Al-Fatihah (complete tafsir)
- Laylatul Qadr guide (complete)
- Multiple section overviews
- Sample hadith data

## What to Build Next

1. **Content**: Add more Surahs and hadith
2. **Backend**: Set up database and API
3. **Auth**: Add user authentication
4. **Features**: Bookmarks, notes, progress tracking
5. **Mobile**: Create mobile apps

---

**Ready to Start?**

```bash
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000)

---

بارك الله فيكم - May Allah bless you!

This project is created for the sake of Allah. May it be a source of beneficial knowledge.
