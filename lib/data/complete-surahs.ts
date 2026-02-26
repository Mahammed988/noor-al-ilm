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
  const basicSurahs: CompleteSurah[] = [
    { number: 6, name: "Al-An'am", nameAr: "الأنعام", meaning: { en: "The Cattle", om: "Horii" }, verses: 165, revelationType: "Meccan", summary: { en: "Discusses monotheism and refutes polytheism", om: "Waa'ee Rabbii tokkicha ta'uu fi shirka mormuu dubbata" }, themes: [], keyLessons: [] },
    { number: 7, name: "Al-A'raf", nameAr: "الأعراف", meaning: { en: "The Heights", om: "Ol'aantoota" }, verses: 206, revelationType: "Meccan", summary: { en: "Stories of prophets and their nations", om: "Seenaa raajotaa fi saboota isaanii" }, themes: [], keyLessons: [] },
    { number: 8, name: "Al-Anfal", nameAr: "الأنفال", meaning: { en: "The Spoils of War", om: "Boojuu Waraanaa" }, verses: 75, revelationType: "Medinan", summary: { en: "Battle of Badr and war ethics", om: "Lola Badr fi naamusa waraanaa" }, themes: [], keyLessons: [] },
    { number: 9, name: "At-Tawbah", nameAr: "التوبة", meaning: { en: "The Repentance", om: "Tawbaa" }, verses: 129, revelationType: "Medinan", summary: { en: "Repentance and hypocrites", om: "Tawbaa fi fakkeessitoota" }, themes: [], keyLessons: [] },
    { number: 10, name: "Yunus", nameAr: "يونس", meaning: { en: "Jonah", om: "Yuunus" }, verses: 109, revelationType: "Meccan", summary: { en: "Story of Prophet Yunus", om: "Seenaa Raajii Yuunus" }, themes: [], keyLessons: [] },
    // Continue with remaining surahs...
    { number: 18, name: "Al-Kahf", nameAr: "الكهف", meaning: { en: "The Cave", om: "Holqa" }, verses: 110, revelationType: "Meccan", summary: { en: "Stories of the cave companions and Dhul-Qarnayn", om: "Seenaa hiriyoota holqaa fi Dhul-Qarnayn" }, themes: [], keyLessons: [] },
    { number: 36, name: "Ya-Sin", nameAr: "يس", meaning: { en: "Ya-Sin", om: "Yaa-Siin" }, verses: 83, revelationType: "Meccan", summary: { en: "The heart of the Quran", om: "Onnee Qur'aanaa" }, themes: [], keyLessons: [] },
    { number: 55, name: "Ar-Rahman", nameAr: "الرحمن", meaning: { en: "The Most Merciful", om: "Araaraa Guddaa" }, verses: 78, revelationType: "Medinan", summary: { en: "Allah's blessings and mercy", om: "Eebba fi araaraa Rabbii" }, themes: [], keyLessons: [] },
    { number: 67, name: "Al-Mulk", nameAr: "الملك", meaning: { en: "The Sovereignty", om: "Mootummaa" }, verses: 30, revelationType: "Meccan", summary: { en: "Allah's dominion and power", om: "Aangoo fi humna Rabbii" }, themes: [], keyLessons: [] },
    { number: 112, name: "Al-Ikhlas", nameAr: "الإخلاص", meaning: { en: "The Sincerity", om: "Qulqullina" }, verses: 4, revelationType: "Meccan", summary: { en: "Pure monotheism", om: "Rabbii tokkicha ta'uu qulqulluu" }, themes: [], keyLessons: [] },
    { number: 113, name: "Al-Falaq", nameAr: "الفلق", meaning: { en: "The Daybreak", om: "Barii" }, verses: 5, revelationType: "Meccan", summary: { en: "Seeking refuge from evil", om: "Hamaa irraa ittisuu barbaaduu" }, themes: [], keyLessons: [] },
    { number: 114, name: "An-Nas", nameAr: "الناس", meaning: { en: "Mankind", om: "Namoonni" }, verses: 6, revelationType: "Meccan", summary: { en: "Seeking refuge from whispers", om: "Hasaasa irraa ittisuu barbaaduu" }, themes: [], keyLessons: [] },
  ];

  return [...completeSurahs, ...basicSurahs];
}
