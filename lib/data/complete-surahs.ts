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
      { en: "Guidance for believers", om: "Qajeelfama amantoota" },
      { en: "Importance of prayer and charity", om: "Barbaachisummaa salaataa fi sadaqaa" }
    ],
    keyLessons: [
      { en: "Believe in the unseen", om: "Waan hin mul'anne amani" },
      { en: "Establish regular prayer", om: "Salaata yeroo yeroon hundeessi" },
      { en: "Spend in charity", om: "Sadaqaa kenni" },
      { en: "Learn from past nations", om: "Saboota darbanii irraa baradhu" }
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
      { en: "Lessons from Battle of Uhud", om: "Barnoota Lola Uhud irraa" },
      { en: "Patience in trials", om: "Obsaan qormaata keessatti" },
      { en: "Trust in Allah", om: "Rabbitti amanachuu" }
    ],
    keyLessons: [
      { en: "Hold fast to Allah's rope", om: "Funyoo Rabbii jabeessitii qabadhu" },
      { en: "Be patient in adversity", om: "Rakkina keessatti obsa" },
      { en: "Learn from defeats", om: "Moʼatamuu irraa baradhu" },
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
      { en: "Inheritance rules", om: "Seera dhaala" },
      { en: "Marriage guidance", om: "Qajeelfama gaa'elaa" },
      { en: "Social justice", om: "Haqummaa hawaasaa" }
    ],
    keyLessons: [
      { en: "Treat women with justice", om: "Dubartoonni haqaan wal qunnamsiisi" },
      { en: "Fulfill orphans' rights", om: "Mirga ijoollee abbaa hin qabnee guuti" },
      { en: "Be fair in inheritance", om: "Dhaala keessatti haqaan hojjedhu" },
      { en: "Maintain family ties", om: "Hidhaa maatii eegi" }
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
      { en: "Fulfilling contracts", om: "Waliigaltee guutuu" },
      { en: "Story of the disciples", om: "Seenaa barattootaa" },
      { en: "Justice in judgment", om: "Haqummaa murtii keessatti" }
    ],
    keyLessons: [
      { en: "Fulfill your promises", om: "Waadaa kee guuti" },
      { en: "Eat only what is lawful", om: "Waan hayyamame qofa nyaadhu" },
      { en: "Judge with justice", om: "Haqaan murteessi" },
      { en: "Be grateful for blessings", om: "Eebba Rabbiitiif galateeffadhu" }
    ]
  }
];

// Function to get all 114 Surahs (first 5 detailed, rest with basic info)
export function getAllSurahs(): CompleteSurah[] {
  // Import expanded content
  try {
    const { getAllExpandedSurahs } = require('./expanded-surahs');
    return getAllExpandedSurahs();
  } catch {
    // Fallback to basic list if expanded file not available
    return completeSurahs;
  }
}
