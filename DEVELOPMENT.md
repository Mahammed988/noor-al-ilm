# Development Guide

## Project Structure

```
noor-al-ilm/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with providers
│   ├── page.tsx           # Homepage
│   ├── globals.css        # Global styles
│   ├── tafsir/           # Tafsir section
│   ├── hadith/           # Hadith section
│   ├── ramadan/          # Ramadan section
│   ├── womens-fiqh/      # Women's Fiqh section
│   ├── search/           # Search functionality
│   └── about/            # About page
├── components/            # Reusable React components
│   ├── Header.tsx        # Navigation header
│   ├── Footer.tsx        # Footer component
│   └── ThemeProvider.tsx # Theme context provider
├── lib/                  # Utility functions and data
│   └── data/            # Static data files
│       ├── surahs.ts    # Surah information
│       └── hadith.ts    # Hadith samples
└── public/              # Static assets
```

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Fonts**: Google Fonts (Inter, Amiri)

## Development Workflow

### Running the Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

### Building for Production

```bash
npm run build
npm start
```

### Linting

```bash
npm run lint
```

## Adding New Content

### Adding a New Surah

1. Add surah data to `lib/data/surahs.ts`
2. Create detailed content in `app/tafsir/[id]/page.tsx`
3. Include:
   - Summary
   - Key themes
   - Verse-by-verse tafsir
   - Practical reflections

### Adding Hadith

1. Add hadith to `lib/data/hadith.ts`
2. Create collection pages in `app/hadith/[collection]/page.tsx`
3. Include:
   - Arabic text
   - Translation
   - Narrator chain
   - Brief explanation
   - Related topics

### Adding New Sections

1. Create new directory in `app/`
2. Add `page.tsx` for main section page
3. Add subsections as needed
4. Update navigation in `components/Header.tsx`
5. Add links in `components/Footer.tsx`

## Styling Guidelines

### Color Scheme

- **Primary**: Emerald/Teal (Islamic green)
- **Secondary**: Cream/Beige (warm neutrals)
- **Accent**: Navy/Deep blue
- **Background**: Light cream (light mode), Dark teal (dark mode)

### Typography

- **English**: Inter (sans-serif)
- **Arabic**: Amiri (serif)
- Use `.arabic-text` class for Arabic content

### Component Patterns

```tsx
// Card Component Pattern
<div className="bg-card rounded-lg p-6 border border-border">
  <h3 className="text-xl font-bold mb-3">Title</h3>
  <p className="text-muted-foreground">Content</p>
</div>

// Arabic Text Pattern
<p className="arabic-text text-2xl text-primary">
  النص العربي
</p>

// Button Pattern
<button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity">
  Click Me
</button>
```

## Best Practices

### Code Style

- Use TypeScript for type safety
- Follow React best practices
- Use functional components with hooks
- Keep components small and focused
- Extract reusable logic into custom hooks

### Performance

- Use Next.js Image component for images
- Implement lazy loading for heavy content
- Minimize client-side JavaScript
- Use server components where possible
- Optimize fonts and assets

### Accessibility

- Use semantic HTML
- Include ARIA labels where needed
- Ensure keyboard navigation works
- Maintain good color contrast
- Test with screen readers

### Content Guidelines

- Always cite sources
- Use authentic hadith only
- Reference classical scholars
- Provide context for rulings
- Include Arabic with translations
- Add transliterations where helpful

## Testing

### Manual Testing Checklist

- [ ] All pages load correctly
- [ ] Navigation works on all devices
- [ ] Dark mode toggles properly
- [ ] Arabic text displays correctly
- [ ] Links are functional
- [ ] Forms validate properly
- [ ] Search functionality works
- [ ] Mobile responsive design

### Browser Testing

Test on:
- Chrome/Edge
- Firefox
- Safari
- Mobile browsers (iOS Safari, Chrome Mobile)

## Future Development

### Phase 1: Core Content
- [ ] Complete all 114 Surahs
- [ ] Add more hadith collections
- [ ] Expand Ramadan content
- [ ] Complete Women's Fiqh sections

### Phase 2: Features
- [ ] User authentication
- [ ] Bookmark system
- [ ] Progress tracking
- [ ] Notes and highlights
- [ ] Full-text search

### Phase 3: Advanced
- [ ] Audio recitations
- [ ] Video lessons
- [ ] Interactive quizzes
- [ ] Community features
- [ ] Mobile apps

### Phase 4: Backend
- [ ] Database integration
- [ ] API development
- [ ] Admin dashboard
- [ ] Content management system
- [ ] User profiles

## Contributing

### Code Contributions

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

### Content Contributions

1. Ensure authenticity of sources
2. Provide references
3. Follow formatting guidelines
4. Review for accuracy
5. Submit for review

## Resources

### Islamic Resources
- [Quran.com](https://quran.com)
- [Sunnah.com](https://sunnah.com)
- [IslamQA.info](https://islamqa.info)

### Development Resources
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)

---

May Allah make this project a means of spreading beneficial knowledge.
