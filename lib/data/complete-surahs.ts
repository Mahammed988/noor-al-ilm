export interface SurahTranslation {
  en: string;
  om: string;
}

export interface CompleteSurah {
  number: number;
  name: string;
  nameAr: string;
  meaning: SurahTranslation;
  verses: number;
  revelationType: "Meccan" | "Medinan";
  summary: SurahTranslation;
  themes: SurahTranslation[];
  keyLessons: SurahTranslation[];
}

export const completeSurahs: CompleteSurah[] = [
  {
    number: 1,
    name: "Al-Fatihah",
    nameAr: "الفاتحة",
    meaning: { en: "The Opening", om: "Bana" },
    verses: 7,
    revelationType: "Meccan",
    summary: {
      en: "Al-Fatihah is the opening chapter of the Quran, recited in every unit of prayer. It encompasses praise of Allah, acknowledgment of His sovereignty, and a supplication for guidance.",
      om: "Al-Faatihaan boqonnaa jalqabaa Qur'aanaa yoo ta'u, yuunitii salaataa hunda keessatti dubbifama. Galata Rabbii, mootummaa Isaa beekuu fi karaa sirrii kadhachuu of keessaa qaba."
    },
    themes: [
      { en: "Praise and glorification of Allah", om: "Galata fi ulfina Rabbii" },
      { en: "Acknowledgment of Allah's mercy", om: "Araaraa Rabbii beekuu" },
      { en: "The Day of Judgment", om: "Guyyaa Murtii" },
      { en: "Seeking guidance", om: "Karaa sirrii barbaaduu" },
      { en: "The straight path", om: "Karaa qajeelaa" }
    ],
    keyLessons: [
      { en: "Begin everything with Allah's name", om: "Waan hunda maqaa Rabbiitiin jalqabi" },
      { en: "Worship Allah alone", om: "Rabbii qofa waaqeffadhu" },
      { en: "Seek help only from Allah", om: "Gargaarsa Rabbii qofa barbaadi" },
      { en: "Ask for guidance daily", om: "Guyyaa guyyaan karaa sirrii kadhatu" }
    ]
  },
  {
    number: 2,
    name: "Al-Baqarah",
    nameAr: "البقرة",
    meaning: { en: "The Cow", om: "Sa'a" },
    verses: 286,
    revelationType: "Medinan",
    summary: {
      en: "The longest chapter of the Quran, covering faith, law, history of previous prophets, and guidance for the Muslim community.",
      om: "Boqonnaa Qur'aanaa kan dheeraa ta'e, waa'ee amantii, seeraa, seenaa raajota darbanii fi qajeelfama hawaasa Musliimotaaf kennu of keessaa qaba."
    },
    themes: [
      { en: "Faith and belief", om: "Amantii fi iman" },
      { en: "Laws and commandments", om: "Seeraa fi ajaja" },
      { en: "Stories of previous nations", om: "Seenaa saboota darbanii" },
      { en: "Guidance for believers", om: "Qajeelfama amantoota" }
    ],
    keyLessons: [
      { en: "Believe in the unseen", om: "Waan hin mul'anne amani" },
      { en: "Establish regular prayer", om: "Salaata yeroo yeroon hundeessi" },
      { en: "Spend in charity", om: "Sadaqaa kenni" }
    ]
  },
  {
    number: 3,
    name: "Ali 'Imran",
    nameAr: "آل عمران",
    meaning: { en: "Family of Imran", om: "Maatii Imraan" },
    verses: 200,
    revelationType: "Medinan",
    summary: {
      en: "Discusses the stories of Mary and Jesus, the Battle of Uhud, and emphasizes unity among believers.",
      om: "Seenaa Maryam fi Isa, Lola Uhud fi walitti dhufeenya amantoota gidduutti jiru cimsuu irratti mari'ata."
    },
    themes: [
      { en: "Story of Mary and Jesus", om: "Seenaa Maryam fi Isa" },
      { en: "Unity of believers", om: "Tokkummaa amantoota" },
      { en: "Lessons from Battle of Uhud", om: "Barnoota Lola Uhud irraa" }
    ],
    keyLessons: [
      { en: "Hold fast to Allah's rope", om: "Funyoo Rabbii jabeessitii qabadhu" },
      { en: "Be patient in adversity", om: "Rakkina keessatti obsa" },
      { en: "Maintain unity", om: "Tokkummaa eegi" }
    ]
  },
  {
    number: 4,
    name: "An-Nisa",
    nameAr: "النساء",
    meaning: { en: "The Women", om: "Dubartoonni" },
    verses: 176,
    revelationType: "Medinan",
    summary: {
      en: "Addresses women's rights, family law, inheritance, marriage, and social justice.",
      om: "Mirga dubartootaa, seera maatii, dhaala, gaa'elaa fi haqummaa hawaasaa irratti dubbata."
    },
    themes: [
      { en: "Women's rights", om: "Mirga dubartootaa" },
      { en: "Family law", om: "Seera maatii" },
      { en: "Inheritance rules", om: "Seera dhaala" }
    ],
    keyLessons: [
      { en: "Treat women with justice", om: "Dubartoonni haqaan wal qunnamsiisi" },
      { en: "Fulfill orphans' rights", om: "Mirga ijoollee abbaa hin qabnee guuti" }
    ]
  },
  {
    number: 5,
    name: "Al-Ma'idah",
    nameAr: "المائدة",
    meaning: { en: "The Table Spread", om: "Maaddii Diriirfame" },
    verses: 120,
    revelationType: "Medinan",
    summary: {
      en: "Discusses lawful and unlawful foods, treaties, and the story of Jesus and his disciples.",
      om: "Nyaata hayyamamaa fi dhowwame, waliigaltee fi seenaa Isa fi barattoota isaa irratti mari'ata."
    },
    themes: [
      { en: "Halal and Haram", om: "Halaalaa fi Haraamaa" },
      { en: "Fulfilling contracts", om: "Waliigaltee guutuu" }
    ],
    keyLessons: [
      { en: "Fulfill your promises", om: "Waadaa kee guuti" },
      { en: "Eat only what is lawful", om: "Waan hayyamame qofa nyaadhu" }
    ]
  }
];

// Function to get all 114 Surahs
export function getAllSurahs(): CompleteSurah[] {
  // All 114 Surahs - first 5 are complete, rest have basic info
  const allSurahs: CompleteSurah[] = [
    ...completeSurahs,
    // Remaining Surahs 6-114 with basic information
    { number: 6, name: "Al-An'am", nameAr: "الأنعام", meaning: { en: "The Cattle", om: "Horii" }, verses: 165, revelationType: "Meccan", summary: { en: "Discusses monotheism and refutes polytheism", om: "Waa'ee Rabbii tokkicha ta'uu fi shirka mormuu dubbata" }, themes: [], keyLessons: [] },
    { number: 7, name: "Al-A'raf", nameAr: "الأعراف", meaning: { en: "The Heights", om: "Ol'aantoota" }, verses: 206, revelationType: "Meccan", summary: { en: "Stories of prophets and their nations", om: "Seenaa raajotaa fi saboota isaanii" }, themes: [], keyLessons: [] },
    { number: 8, name: "Al-Anfal", nameAr: "الأنفال", meaning: { en: "The Spoils of War", om: "Boojuu Waraanaa" }, verses: 75, revelationType: "Medinan", summary: { en: "Battle of Badr and war ethics", om: "Lola Badr fi naamusa waraanaa" }, themes: [], keyLessons: [] },
    { number: 9, name: "At-Tawbah", nameAr: "التوبة", meaning: { en: "The Repentance", om: "Tawbaa" }, verses: 129, revelationType: "Medinan", summary: { en: "Repentance and hypocrites", om: "Tawbaa fi fakkeessitoota" }, themes: [], keyLessons: [] },
    { number: 10, name: "Yunus", nameAr: "يونس", meaning: { en: "Jonah", om: "Yuunus" }, verses: 109, revelationType: "Meccan", summary: { en: "Story of Prophet Yunus", om: "Seenaa Raajii Yuunus" }, themes: [], keyLessons: [] },
    { number: 11, name: "Hud", nameAr: "هود", meaning: { en: "Hud", om: "Huud" }, verses: 123, revelationType: "Meccan", summary: { en: "Stories of prophets", om: "Seenaa raajotaa" }, themes: [], keyLessons: [] },
    { number: 12, name: "Yusuf", nameAr: "يوسف", meaning: { en: "Joseph", om: "Yuusuf" }, verses: 111, revelationType: "Meccan", summary: { en: "Story of Prophet Yusuf", om: "Seenaa Raajii Yuusuf" }, themes: [], keyLessons: [] },
    { number: 13, name: "Ar-Ra'd", nameAr: "الرعد", meaning: { en: "The Thunder", om: "Bakakkaa" }, verses: 43, revelationType: "Medinan", summary: { en: "Signs of Allah in nature", om: "Mallattoolee Rabbii uumama keessaa" }, themes: [], keyLessons: [] },
    { number: 14, name: "Ibrahim", nameAr: "إبراهيم", meaning: { en: "Abraham", om: "Ibraahim" }, verses: 52, revelationType: "Meccan", summary: { en: "Story of Prophet Ibrahim", om: "Seenaa Raajii Ibraahim" }, themes: [], keyLessons: [] },
    { number: 15, name: "Al-Hijr", nameAr: "الحجر", meaning: { en: "The Rocky Tract", om: "Dhagaa" }, verses: 99, revelationType: "Meccan", summary: { en: "Protection of the Quran", om: "Eegumsa Qur'aanaa" }, themes: [], keyLessons: [] },
    { number: 16, name: "An-Nahl", nameAr: "النحل", meaning: { en: "The Bee", om: "Kanniisa" }, verses: 128, revelationType: "Meccan", summary: { en: "Blessings of Allah", om: "Eebba Rabbii" }, themes: [], keyLessons: [] },
    { number: 17, name: "Al-Isra", nameAr: "الإسراء", meaning: { en: "The Night Journey", om: "Imala Halkan" }, verses: 111, revelationType: "Meccan", summary: { en: "Night journey of the Prophet", om: "Imala halkan Raajii" }, themes: [], keyLessons: [] },
    { number: 18, name: "Al-Kahf", nameAr: "الكهف", meaning: { en: "The Cave", om: "Holqa" }, verses: 110, revelationType: "Meccan", summary: { en: "Stories of the cave companions", om: "Seenaa hiriyoota holqaa" }, themes: [], keyLessons: [] },
    { number: 19, name: "Maryam", nameAr: "مريم", meaning: { en: "Mary", om: "Maryam" }, verses: 98, revelationType: "Meccan", summary: { en: "Story of Mary and Jesus", om: "Seenaa Maryam fi Isa" }, themes: [], keyLessons: [] },
    { number: 20, name: "Ta-Ha", nameAr: "طه", meaning: { en: "Ta-Ha", om: "Xaa-Haa" }, verses: 135, revelationType: "Meccan", summary: { en: "Story of Prophet Musa", om: "Seenaa Raajii Muusaa" }, themes: [], keyLessons: [] }
  ];
  
  // Add remaining Surahs 21-114
  const remainingSurahs = [
    { number: 21, name: "Al-Anbiya", nameAr: "الأنبياء", verses: 112 },
    { number: 22, name: "Al-Hajj", nameAr: "الحج", verses: 78 },
    { number: 23, name: "Al-Mu'minun", nameAr: "المؤمنون", verses: 118 },
    { number: 24, name: "An-Nur", nameAr: "النور", verses: 64 },
    { number: 25, name: "Al-Furqan", nameAr: "الفرقان", verses: 77 },
    { number: 26, name: "Ash-Shu'ara", nameAr: "الشعراء", verses: 227 },
    { number: 27, name: "An-Naml", nameAr: "النمل", verses: 93 },
    { number: 28, name: "Al-Qasas", nameAr: "القصص", verses: 88 },
    { number: 29, name: "Al-Ankabut", nameAr: "العنكبوت", verses: 69 },
    { number: 30, name: "Ar-Rum", nameAr: "الروم", verses: 60 },
    { number: 31, name: "Luqman", nameAr: "لقمان", verses: 34 },
    { number: 32, name: "As-Sajdah", nameAr: "السجدة", verses: 30 },
    { number: 33, name: "Al-Ahzab", nameAr: "الأحزاب", verses: 73 },
    { number: 34, name: "Saba", nameAr: "سبأ", verses: 54 },
    { number: 35, name: "Fatir", nameAr: "فاطر", verses: 45 },
    { number: 36, name: "Ya-Sin", nameAr: "يس", verses: 83 },
    { number: 37, name: "As-Saffat", nameAr: "الصافات", verses: 182 },
    { number: 38, name: "Sad", nameAr: "ص", verses: 88 },
    { number: 39, name: "Az-Zumar", nameAr: "الزمر", verses: 75 },
    { number: 40, name: "Ghafir", nameAr: "غافر", verses: 85 },
    { number: 41, name: "Fussilat", nameAr: "فصلت", verses: 54 },
    { number: 42, name: "Ash-Shuraa", nameAr: "الشورى", verses: 53 },
    { number: 43, name: "Az-Zukhruf", nameAr: "الزخرف", verses: 89 },
    { number: 44, name: "Ad-Dukhan", nameAr: "الدخان", verses: 59 },
    { number: 45, name: "Al-Jathiyah", nameAr: "الجاثية", verses: 37 },
    { number: 46, name: "Al-Ahqaf", nameAr: "الأحقاف", verses: 35 },
    { number: 47, name: "Muhammad", nameAr: "محمد", verses: 38 },
    { number: 48, name: "Al-Fath", nameAr: "الفتح", verses: 29 },
    { number: 49, name: "Al-Hujurat", nameAr: "الحجرات", verses: 18 },
    { number: 50, name: "Qaf", nameAr: "ق", verses: 45 },
    { number: 51, name: "Adh-Dhariyat", nameAr: "الذاريات", verses: 60 },
    { number: 52, name: "At-Tur", nameAr: "الطور", verses: 49 },
    { number: 53, name: "An-Najm", nameAr: "النجم", verses: 62 },
    { number: 54, name: "Al-Qamar", nameAr: "القمر", verses: 55 },
    { number: 55, name: "Ar-Rahman", nameAr: "الرحمن", verses: 78 },
    { number: 56, name: "Al-Waqi'ah", nameAr: "الواقعة", verses: 96 },
    { number: 57, name: "Al-Hadid", nameAr: "الحديد", verses: 29 },
    { number: 58, name: "Al-Mujadila", nameAr: "المجادلة", verses: 22 },
    { number: 59, name: "Al-Hashr", nameAr: "الحشر", verses: 24 },
    { number: 60, name: "Al-Mumtahanah", nameAr: "الممتحنة", verses: 13 },
    { number: 61, name: "As-Saf", nameAr: "الصف", verses: 14 },
    { number: 62, name: "Al-Jumu'ah", nameAr: "الجمعة", verses: 11 },
    { number: 63, name: "Al-Munafiqun", nameAr: "المنافقون", verses: 11 },
    { number: 64, name: "At-Taghabun", nameAr: "التغابن", verses: 18 },
    { number: 65, name: "At-Talaq", nameAr: "الطلاق", verses: 12 },
    { number: 66, name: "At-Tahrim", nameAr: "التحريم", verses: 12 },
    { number: 67, name: "Al-Mulk", nameAr: "الملك", verses: 30 },
    { number: 68, name: "Al-Qalam", nameAr: "القلم", verses: 52 },
    { number: 69, name: "Al-Haqqah", nameAr: "الحاقة", verses: 52 },
    { number: 70, name: "Al-Ma'arij", nameAr: "المعارج", verses: 44 },
    { number: 71, name: "Nuh", nameAr: "نوح", verses: 28 },
    { number: 72, name: "Al-Jinn", nameAr: "الجن", verses: 28 },
    { number: 73, name: "Al-Muzzammil", nameAr: "المزمل", verses: 20 },
    { number: 74, name: "Al-Muddaththir", nameAr: "المدثر", verses: 56 },
    { number: 75, name: "Al-Qiyamah", nameAr: "القيامة", verses: 40 },
    { number: 76, name: "Al-Insan", nameAr: "الإنسان", verses: 31 },
    { number: 77, name: "Al-Mursalat", nameAr: "المرسلات", verses: 50 },
    { number: 78, name: "An-Naba", nameAr: "النبأ", verses: 40 },
    { number: 79, name: "An-Nazi'at", nameAr: "النازعات", verses: 46 },
    { number: 80, name: "Abasa", nameAr: "عبس", verses: 42 },
    { number: 81, name: "At-Takwir", nameAr: "التكوير", verses: 29 },
    { number: 82, name: "Al-Infitar", nameAr: "الإنفطار", verses: 19 },
    { number: 83, name: "Al-Mutaffifin", nameAr: "المطففين", verses: 36 },
    { number: 84, name: "Al-Inshiqaq", nameAr: "الإنشقاق", verses: 25 },
    { number: 85, name: "Al-Buruj", nameAr: "البروج", verses: 22 },
    { number: 86, name: "At-Tariq", nameAr: "الطارق", verses: 17 },
    { number: 87, name: "Al-A'la", nameAr: "الأعلى", verses: 19 },
    { number: 88, name: "Al-Ghashiyah", nameAr: "الغاشية", verses: 26 },
    { number: 89, name: "Al-Fajr", nameAr: "الفجر", verses: 30 },
    { number: 90, name: "Al-Balad", nameAr: "البلد", verses: 20 },
    { number: 91, name: "Ash-Shams", nameAr: "الشمس", verses: 15 },
    { number: 92, name: "Al-Layl", nameAr: "الليل", verses: 21 },
    { number: 93, name: "Ad-Duhaa", nameAr: "الضحى", verses: 11 },
    { number: 94, name: "Ash-Sharh", nameAr: "الشرح", verses: 8 },
    { number: 95, name: "At-Tin", nameAr: "التين", verses: 8 },
    { number: 96, name: "Al-Alaq", nameAr: "العلق", verses: 19 },
    { number: 97, name: "Al-Qadr", nameAr: "القدر", verses: 5 },
    { number: 98, name: "Al-Bayyinah", nameAr: "البينة", verses: 8 },
    { number: 99, name: "Az-Zalzalah", nameAr: "الزلزلة", verses: 8 },
    { number: 100, name: "Al-Adiyat", nameAr: "العاديات", verses: 11 },
    { number: 101, name: "Al-Qari'ah", nameAr: "القارعة", verses: 11 },
    { number: 102, name: "At-Takathur", nameAr: "التكاثر", verses: 8 },
    { number: 103, name: "Al-Asr", nameAr: "العصر", verses: 3 },
    { number: 104, name: "Al-Humazah", nameAr: "الهمزة", verses: 9 },
    { number: 105, name: "Al-Fil", nameAr: "الفيل", verses: 5 },
    { number: 106, name: "Quraysh", nameAr: "قريش", verses: 4 },
    { number: 107, name: "Al-Ma'un", nameAr: "الماعون", verses: 7 },
    { number: 108, name: "Al-Kawthar", nameAr: "الكوثر", verses: 3 },
    { number: 109, name: "Al-Kafirun", nameAr: "الكافرون", verses: 6 },
    { number: 110, name: "An-Nasr", nameAr: "النصر", verses: 3 },
    { number: 111, name: "Al-Masad", nameAr: "المسد", verses: 5 },
    { number: 112, name: "Al-Ikhlas", nameAr: "الإخلاص", verses: 4 },
    { number: 113, name: "Al-Falaq", nameAr: "الفلق", verses: 5 },
    { number: 114, name: "An-Nas", nameAr: "الناس", verses: 6 }
  ].map(s => ({
    ...s,
    meaning: { en: s.name, om: s.name },
    revelationType: "Meccan" as const,
    summary: { en: "Content being prepared", om: "Qabiyyeen qophaa'aa jira" },
    themes: [],
    keyLessons: []
  }));
  
  return [...allSurahs, ...remainingSurahs];
}
