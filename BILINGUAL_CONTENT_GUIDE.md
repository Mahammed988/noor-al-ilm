# Bilingual Content Guide - English & Oromo (Afaan Oromoo)

## ✅ What's Been Implemented

### Language System
- ✅ Language selector component (EN/OM toggle)
- ✅ Language persistence (localStorage)
- ✅ Translation system infrastructure
- ✅ Oromo language support added

### Sample Content Added
- ✅ 5 complete Surahs with bilingual tafsir (Al-Fatihah, Al-Baqarah, Ali 'Imran, An-Nisa, Al-Ma'idah)
- ✅ 6 Hadith with bilingual translations (Bukhari, Muslim, Riyad as-Salihin)
- ✅ Basic structure for all 114 Surahs
- ✅ Bilingual UI translations

---

## 📋 Content Structure

### Files Created:
1. `lib/i18n/translations.ts` - UI translations
2. `lib/data/complete-surahs.ts` - All Surahs with bilingual content
3. `lib/data/complete-hadith.ts` - Hadith collections with bilingual content
4. `components/LanguageSelector.tsx` - Language toggle component

---

## 🎯 Next Steps: Adding Complete Content

### Phase 1: Complete All 114 Surahs

You need to add detailed tafsir for the remaining 109 Surahs. Here's the structure:

```typescript
{
  number: 6,
  name: "Al-An'am",
  nameAr: "الأنعام",
  meaning: { 
    en: "The Cattle", 
    om: "Horii" 
  },
  verses: 165,
  revelationType: "Meccan",
  summary: {
    en: "English summary here...",
    om: "Cuunfaa Afaan Oromootiin..."
  },
  themes: [
    { en: "Theme 1 in English", om: "Mata-duree 1 Afaan Oromootiin" },
    { en: "Theme 2 in English", om: "Mata-duree 2 Afaan Oromootiin" }
  ],
  keyLessons: [
    { en: "Lesson 1 in English", om: "Barnoota 1 Afaan Oromootiin" },
    { en: "Lesson 2 in English", om: "Barnoota 2 Afaan Oromootiin" }
  ]
}
```

### Phase 2: Add Complete Hadith Collections

#### Sahih al-Bukhari (7,563 hadith)
- Currently: 3 sample hadith
- Need: Remaining ~7,560 hadith

#### Sahih Muslim (7,190 hadith)
- Currently: 2 sample hadith
- Need: Remaining ~7,188 hadith

#### Riyad as-Salihin (1,900+ hadith)
- Currently: 1 sample hadith
- Need: Remaining ~1,899 hadith

---

## 📚 Resources for Content

### For Tafsir (English):
1. **Tafsir Ibn Kathir** - Available at: https://quran.com
2. **Tafsir al-Jalalayn** - Available at: https://altafsir.com
3. **Tafsir as-Sa'di** - Available at: https://quran.com

### For Tafsir (Oromo):
1. **Qur'aana Afaan Oromootiin** - Contact Oromo Islamic scholars
2. **Islamic Center of Oromia** - For authentic translations
3. **Oromo Muslim Scholars** - For review and verification

### For Hadith (English):
1. **Sunnah.com** - Complete hadith collections
2. **Hadith.com** - Searchable database
3. **IslamicFinder** - Hadith collections

### For Hadith (Oromo):
1. **Oromo Islamic Literature** - Existing translations
2. **Oromo Scholars** - For new translations
3. **Islamic Universities in Ethiopia** - Academic resources

---

## 🔧 How to Add Content

### Adding a Complete Surah:

1. Open `lib/data/complete-surahs.ts`
2. Find the surah in the `basicSurahs` array
3. Replace with complete data:

```typescript
{
  number: 6,
  name: "Al-An'am",
  nameAr: "الأنعام",
  meaning: { en: "The Cattle", om: "Horii" },
  verses: 165,
  revelationType: "Meccan",
  summary: {
    en: "Al-An'am discusses the oneness of Allah, refutes polytheism, and presents arguments for monotheism through signs in creation.",
    om: "Al-An'am waa'ee Rabbii tokkicha ta'uu dubbata, shirka morma, fi ragaalee uumama keessaa karaa tokkummaa Rabbiitiif dhiheessa."
  },
  themes: [
    { en: "Monotheism (Tawhid)", om: "Rabbii Tokkicha Ta'uu (Tawhid)" },
    { en: "Refutation of polytheism", om: "Shirka Mormuu" },
    { en: "Signs in creation", om: "Mallattoolee uumama keessaa" },
    { en: "Prophethood", om: "Raajummaa" },
    { en: "Resurrection", om: "Ka'umsa" }
  ],
  keyLessons: [
    { en: "Worship Allah alone", om: "Rabbii qofa waaqeffadhu" },
    { en: "Reflect on creation", om: "Uumama irratti yaadi" },
    { en: "Follow the prophets", om: "Raajota hordofi" },
    { en: "Prepare for the Hereafter", om: "Aakhiraaf qophaa'i" }
  ]
}
```

### Adding Hadith:

1. Open `lib/data/complete-hadith.ts`
2. Add to the appropriate collection array:

```typescript
{
  id: "bukhari-4",
  collection: "Sahih al-Bukhari",
  collectionAr: "صحيح البخاري",
  book: { en: "Book of Prayer", om: "Kitaaba Salaataa" },
  number: "500",
  arabic: "Arabic text here",
  translation: {
    en: "English translation here",
    om: "Hiika Afaan Oromootiin"
  },
  narrator: "Narrator name",
  grade: { en: "Sahih (Authentic)", om: "Sahih (Dhugaa)" },
  topics: [
    { en: "Prayer", om: "Salaata" },
    { en: "Worship", om: "Waaqeffannaa" }
  ],
  explanation: {
    en: "Detailed explanation in English",
    om: "Ibsa bal'aa Afaan Oromootiin"
  }
}
```

---

## 🌍 Oromo Language Guidelines

### Common Islamic Terms in Oromo:

| Arabic/English | Oromo (Afaan Oromoo) |
|----------------|----------------------|
| Allah | Rabbii |
| Prayer (Salah) | Salaata |
| Fasting (Sawm) | Soomuu |
| Charity (Zakat) | Zakaa |
| Pilgrimage (Hajj) | Hajii |
| Faith (Iman) | Amantii |
| Islam | Islaama |
| Muslim | Musliima |
| Quran | Qur'aana |
| Hadith | Hadith |
| Prophet | Raajii |
| Mosque | Masgiida |
| Believer | Amantaa |
| Worship | Waaqeffannaa |
| Mercy | Araaraa |
| Forgiveness | Dhiifama |
| Paradise | Jannata |
| Hell | Jahannam |
| Angel | Malaayika |
| Book | Kitaaba |

### Oromo Sentence Structure:
- Subject-Object-Verb (SOV) order
- Use appropriate verb conjugations
- Respect formal/informal distinctions
- Use proper Islamic terminology

---

## 📊 Progress Tracking

### Surahs Completed:
- [x] 1. Al-Fatihah (Complete)
- [x] 2. Al-Baqarah (Complete)
- [x] 3. Ali 'Imran (Complete)
- [x] 4. An-Nisa (Complete)
- [x] 5. Al-Ma'idah (Complete)
- [ ] 6-114: Need detailed tafsir

### Hadith Completed:
- [x] Bukhari: 3 hadith
- [x] Muslim: 2 hadith
- [x] Riyad: 1 hadith
- [ ] Need: ~16,000+ more hadith

---

## 🤝 Collaboration Needed

### Oromo Translators Needed For:
1. Tafsir translations (109 Surahs)
2. Hadith translations (~16,000 hadith)
3. UI text translations
4. Content review and verification

### Where to Find Oromo Translators:
1. **Islamic Centers in Ethiopia**
   - Addis Ababa Islamic Affairs Council
   - Oromia Islamic Affairs Bureau
   
2. **Universities**
   - Haramaya University (Islamic Studies)
   - Jimma University (Islamic Studies)
   
3. **Online Communities**
   - Oromo Muslim scholars on social media
   - Islamic forums in Oromo language
   
4. **Professional Services**
   - Translation agencies in Ethiopia
   - Freelance platforms (Upwork, Fiverr)

---

## 💡 Automated Content Addition

### Option 1: API Integration
Consider integrating with:
- Quran.com API (for English tafsir)
- Sunnah.com API (for hadith)
- Custom Oromo translation API (if available)

### Option 2: Bulk Import
Create a script to import from:
- CSV files
- JSON files
- Database dumps

### Option 3: Content Management System
Build an admin panel to:
- Add/edit Surahs
- Add/edit Hadith
- Manage translations
- Review submissions

---

## 🔄 Update Process

After adding content:

```bash
# 1. Test locally
npm run dev

# 2. Build to verify
npm run build

# 3. Commit changes
git add .
git commit -m "Add Surah X with bilingual tafsir"

# 4. Push to GitHub
git push

# 5. Vercel auto-deploys!
```

---

## 📝 Quality Checklist

Before adding content, ensure:
- [ ] Arabic text is correct
- [ ] English translation is accurate
- [ ] Oromo translation is accurate
- [ ] Sources are cited
- [ ] Formatting is consistent
- [ ] No typos or errors
- [ ] Content is reviewed by scholars

---

## 🎯 Priority Order

### High Priority (Do First):
1. Complete the 5 daily prayer Surahs (Al-Fatihah done ✓)
2. Add Jumu'ah Surah (Al-Jumu'ah)
3. Add commonly recited Surahs (Ya-Sin, Ar-Rahman, Al-Mulk)
4. Add last 10 Surahs (Juz Amma)

### Medium Priority:
1. Add remaining Medinan Surahs
2. Add remaining Meccan Surahs
3. Complete Sahih Bukhari
4. Complete Sahih Muslim

### Low Priority:
1. Add additional tafsir sources
2. Add more hadith collections
3. Add audio recitations
4. Add advanced features

---

## 📞 Support

For help with Oromo translations:
- Contact Oromo Islamic scholars
- Join Oromo Muslim communities
- Consult Islamic universities in Ethiopia

For technical help:
- Check DEVELOPMENT.md
- Review code comments
- Test locally before deploying

---

**May Allah accept this work and make it beneficial for the Oromo-speaking Muslim community and all Muslims worldwide.**

**Rabbiin hojii kana haa fudhatuutii hawaasa Musliima Afaan Oromoo dubbatuu fi Muslimoota addunyaa hundaaf bu'aa qabeessa haa godhu.**

**بارك الله فيكم**
