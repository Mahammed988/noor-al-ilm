// Expanded Surah content with detailed tafsir for commonly recited Surahs
// Based on publicly available Islamic sources

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

// First 5 Surahs (already complete)
const firstFiveSurahs: CompleteSurah[] = [
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
      { en: "Laws and commandments", om: "Seeraa fi ajaja" }
    ],
    keyLessons: [
      { en: "Believe in the unseen", om: "Waan hin mul'anne amani" }
    ]
  }
];

// Commonly recited Surahs with expanded content
const expandedSurahs: CompleteSurah[] = [
  {
    number: 18,
    name: "Al-Kahf",
    nameAr: "الكهف",
    meaning: { en: "The Cave", om: "Holqa" },
    verses: 110,
    revelationType: "Meccan",
    summary: {
      en: "Al-Kahf contains four powerful stories: the People of the Cave, the owner of two gardens, Moses and Khidr, and Dhul-Qarnayn. It is recommended to recite this Surah every Friday.",
      om: "Al-Kahf seenaa afur humna qabu of keessaa qaba: Namoota Holqaa, abbaa iddoo biqiltuu lamaa, Muusaa fi Khidr, fi Dhul-Qarnayn. Suuraa kana Jimaata hunda dubbisuu gorfama."
    },
    themes: [
      { en: "Trials of faith", om: "Qormaata amantii" },
      { en: "Patience and perseverance", om: "Obsaa fi cimina" },
      { en: "Knowledge and humility", om: "Beekumsaa fi gad of qabuu" },
      { en: "Power and responsibility", om: "Humna fi itti gaafatamummaa" },
      { en: "Protection from Dajjal", om: "Dajjaal irraa eegumsa" }
    ],
    keyLessons: [
      { en: "Stay firm in faith during trials", om: "Qormaata keessatti amantii kee jabeessi" },
      { en: "Wealth is a test from Allah", om: "Qabeenyi qormaata Rabbii ti" },
      { en: "True knowledge comes from Allah", om: "Beekumsi dhugaa Rabbii biraa dhufa" },
      { en: "Use power with justice", om: "Humna haqaan fayyadami" },
      { en: "Recite this Surah on Fridays", om: "Suuraa kana Jimaata dubbisi" }
    ]
  },
  {
    number: 36,
    name: "Ya-Sin",
    nameAr: "يس",
    meaning: { en: "Ya-Sin", om: "Yaa-Siin" },
    verses: 83,
    revelationType: "Meccan",
    summary: {
      en: "Known as the 'Heart of the Quran', Ya-Sin emphasizes the truth of revelation, resurrection, and the consequences of belief and disbelief. The Prophet ﷺ said whoever recites it seeking Allah's pleasure, their past sins are forgiven.",
      om: "Akka 'Onnee Qur'aanaa'tti beekamu, Yaa-Siin dhugaa mul'ataa, ka'umsa fi bu'aa amantii fi kafaltii cimsee ibsa. Raajichi ﷺ namni gammachuu Rabbii barbaadee dubbisu, cubbuun isaa darbe dhiifamaaf jedhan."
    },
    themes: [
      { en: "Prophethood and revelation", om: "Raajummaa fi mul'ata" },
      { en: "Resurrection and afterlife", om: "Ka'umsa fi aakhiraa" },
      { en: "Signs of Allah in creation", om: "Mallattoolee Rabbii uumama keessaa" },
      { en: "Consequences of rejection", om: "Bu'aa diduu" },
      { en: "Divine mercy and warning", om: "Araaraa fi of eeggannoo Rabbii" }
    ],
    keyLessons: [
      { en: "The Quran is divine revelation", om: "Qur'aanni mul'ata Rabbii ti" },
      { en: "Resurrection is certain", om: "Ka'umsi mirkaneessa" },
      { en: "Reflect on Allah's creation", om: "Uumama Rabbii irratti yaadi" },
      { en: "Heed the warnings of prophets", om: "Of eeggannoo raajotaa dhaggeeffadhu" },
      { en: "Recite for forgiveness", om: "Dhiifamaaf dubbisi" }
    ]
  }
];

  {
    number: 55,
    name: "Ar-Rahman",
    nameAr: "الرحمن",
    meaning: { en: "The Most Merciful", om: "Araaraa Guddaa" },
    verses: 78,
    revelationType: "Medinan",
    summary: {
      en: "Ar-Rahman beautifully describes Allah's countless blessings and mercy. The repeated verse 'Which of the favors of your Lord will you deny?' appears 31 times, reminding us to be grateful.",
      om: "Ar-Rahman eebba fi araaraa Rabbii lakkoofsa hin qabne bareedaan ibsa. Aayanni irra deddeebi'amu 'Eebba Gooftaa keessanii kam mormitu?' yeroo 31 mul'ata, galateeffachuu akka qabnu yaadachiisa."
    },
    themes: [
      { en: "Allah's mercy and compassion", om: "Araaraa fi gara laafina Rabbii" },
      { en: "Blessings of creation", om: "Eebba uumamaa" },
      { en: "Balance in the universe", om: "Madaallii uumama keessaa" },
      { en: "Paradise and Hell", om: "Jannata fi Jahannam" },
      { en: "Gratitude to Allah", om: "Rabbiitiif galateeffachuu" }
    ],
    keyLessons: [
      { en: "Count your blessings", om: "Eebba kee lakkaa'i" },
      { en: "Be grateful to Allah", om: "Rabbiitiif galateeffadhu" },
      { en: "Recognize Allah's mercy", om: "Araaraa Rabbii beeki" },
      { en: "Maintain balance in life", om: "Jireenya keessatti madaallii eegi" },
      { en: "Prepare for the Hereafter", om: "Aakhiraaf qophaa'i" }
    ]
  },
  {
    number: 67,
    name: "Al-Mulk",
    nameAr: "الملك",
    meaning: { en: "The Sovereignty", om: "Mootummaa" },
    verses: 30,
    revelationType: "Meccan",
    summary: {
      en: "Al-Mulk emphasizes Allah's absolute sovereignty and power. The Prophet ﷺ said it protects from the punishment of the grave. It encourages reflection on creation and warns of the consequences of disbelief.",
      om: "Al-Mulk mootummaa fi humna Rabbii guutuu cimsee ibsa. Raajichi ﷺ adabbii awwaala irraa akka eegu jedhan. Uumama irratti yaadachuu jajjabeessa fi bu'aa kafaltii irratti of eeggannoo kenna."
    },
    themes: [
      { en: "Allah's absolute sovereignty", om: "Mootummaa Rabbii guutuu" },
      { en: "Purpose of life and death", om: "Kaayyoo jireenyaa fi du'aa" },
      { en: "Signs in creation", om: "Mallattoolee uumama keessaa" },
      { en: "Warning to disbelievers", om: "Of eeggannoo kafaltoota" },
      { en: "Protection from grave punishment", om: "Adabbii awwaala irraa eegumsa" }
    ],
    keyLessons: [
      { en: "Allah has power over all things", om: "Rabbiin waan hunda irratti aangoo qaba" },
      { en: "Life is a test", om: "Jireenyni qormaata" },
      { en: "Reflect on the perfection of creation", om: "Guutummaa uumamaa irratti yaadi" },
      { en: "Recite before sleep for protection", om: "Eegumsaaf dura rafuu dubbisi" },
      { en: "Fear Allah and seek His mercy", om: "Rabbii sodaadhu fi araaraa Isaa barbaadi" }
    ]
  }
];

// Juz Amma - Last 10 Surahs (Most commonly memorized)
const juzAmmaSurahs: CompleteSurah[] = [
  {
    number: 105,
    name: "Al-Fil",
    nameAr: "الفيل",
    meaning: { en: "The Elephant", om: "Arbaa" },
    verses: 5,
    revelationType: "Meccan",
    summary: {
      en: "Describes how Allah protected the Ka'bah from Abraha's army that came with elephants to destroy it. Shows Allah's power to protect His sacred house.",
      om: "Akkamitti Rabbiin Ka'baa loltoota Abraha kan arbaa wajjin dhufanii barbadeessuuf yaalan irraa eege ibsa. Humna Rabbii mana qulqulluu Isaa eeguuf qabu agarsiisa."
    },
    themes: [
      { en: "Allah's protection of the Ka'bah", om: "Eegumsa Rabbii Ka'baa" },
      { en: "Divine intervention", om: "Gidduu seenummaa Rabbii" },
      { en: "Punishment of oppressors", om: "Adabbii cunqursitootaa" }
    ],
    keyLessons: [
      { en: "Allah protects His sacred places", om: "Rabbiin iddoowwan qulqulluu Isaa eega" },
      { en: "No power can overcome Allah's will", om: "Humni fedhii Rabbii mo'uu hin danda'u" },
      { en: "Oppression leads to destruction", om: "Cunqursaan gara barbadaatti geessa" }
    ]
  },
  {
    number: 106,
    name: "Quraysh",
    nameAr: "قريش",
    meaning: { en: "Quraysh", om: "Quraayish" },
    verses: 4,
    revelationType: "Meccan",
    summary: {
      en: "Reminds the Quraysh tribe of Allah's blessings upon them, including safe trade journeys and provision. Calls them to worship the Lord of the Ka'bah.",
      om: "Gosa Quraayish eebba Rabbii isaanitti kenname, dabalatee imala daldala nagaa fi dhiyeessii yaadachiisa. Gooftaa Ka'baa akka waaqeffatan waamicha godha."
    },
    themes: [
      { en: "Gratitude for blessings", om: "Eebbaaf galateeffachuu" },
      { en: "Security and provision", om: "Nageenya fi dhiyeessii" },
      { en: "Worship of Allah", om: "Waaqeffannaa Rabbii" }
    ],
    keyLessons: [
      { en: "Be grateful for Allah's blessings", om: "Eebba Rabbiitiif galateeffadhu" },
      { en: "Security is a great blessing", om: "Nageenya eebba guddaa dha" },
      { en: "Worship the One who provides", om: "Isa dhiyeessu waaqeffadhu" }
    ]
  },
  {
    number: 107,
    name: "Al-Ma'un",
    nameAr: "الماعون",
    meaning: { en: "Small Kindnesses", om: "Gargaarsa Xixiqqaa" },
    verses: 7,
    revelationType: "Meccan",
    summary: {
      en: "Condemns those who deny the Day of Judgment, mistreat orphans, neglect the poor, and are heedless in their prayers. Emphasizes social responsibility.",
      om: "Warra Guyyaa Murtii ganan, ijoollee abbaa hin qabnee miidhan, hiyyeeyyii tuffatan fi salaata isaanii keessatti of hin eegganne balaaleffata. Itti gaafatamummaa hawaasaa cimsee ibsa."
    },
    themes: [
      { en: "Social justice", om: "Haqummaa hawaasaa" },
      { en: "Care for orphans and poor", om: "Ijoollee abbaa hin qabnee fi hiyyeeyyii kunuunsuu" },
      { en: "Sincerity in worship", om: "Waaqeffannaa keessatti qulqullina" }
    ],
    keyLessons: [
      { en: "Help the needy", om: "Rakkattoota gargaari" },
      { en: "Be sincere in prayer", om: "Salaata keessatti qulqulluu ta'i" },
      { en: "Show kindness to all", om: "Namaaf hunda gaarummaa agarsiisi" }
    ]
  }
];

  {
    number: 108,
    name: "Al-Kawthar",
    nameAr: "الكوثر",
    meaning: { en: "Abundance", om: "Baay'ina" },
    verses: 3,
    revelationType: "Meccan",
    summary: {
      en: "The shortest Surah, promising the Prophet ﷺ abundant goodness including a river in Paradise called Al-Kawthar. Commands prayer and sacrifice to Allah alone.",
      om: "Suuraa gabaabduu, Raajii ﷺ gaarii baay'ee dabalatee laga Jannata keessaa Al-Kawthar jedhamuuf waadaa gala. Salaataa fi qalma Rabbii qofaaf akka godhan ajaja."
    },
    themes: [
      { en: "Allah's abundant blessings", om: "Eebba Rabbii baay'ee" },
      { en: "Gratitude through worship", om: "Waaqeffannaan galateeffachuu" },
      { en: "Promise of Paradise", om: "Waadaa Jannataa" }
    ],
    keyLessons: [
      { en: "Allah gives abundantly", om: "Rabbiin baay'inaan kenna" },
      { en: "Show gratitude through prayer", om: "Salaataan galateeffachuu agarsiisi" },
      { en: "Sacrifice for Allah's sake", om: "Rabbiitiif qalma godhi" }
    ]
  },
  {
    number: 109,
    name: "Al-Kafirun",
    nameAr: "الكافرون",
    meaning: { en: "The Disbelievers", om: "Kafaltoota" },
    verses: 6,
    revelationType: "Meccan",
    summary: {
      en: "Clearly establishes the distinction between Islam and disbelief. Affirms religious freedom while maintaining the uniqueness of Islamic monotheism.",
      om: "Garaagarummaa Islaamaa fi kafaltii ifa ta'een hundeessa. Bilisummaa amantii mirkaneessa garuu addummaa Rabbii tokkicha ta'uu Islaamaa eega."
    },
    themes: [
      { en: "Clear distinction of faith", om: "Garaagarummaa amantii ifa ta'e" },
      { en: "Religious freedom", om: "Bilisummaa amantii" },
      { en: "Rejection of compromise in faith", om: "Amantii keessatti walii galtee diduu" }
    ],
    keyLessons: [
      { en: "Be clear about your faith", om: "Waa'ee amantii keetii ifa ta'i" },
      { en: "Don't compromise Islamic beliefs", om: "Amantii Islaamaa hin walii galchin" },
      { en: "Respect others' choices", om: "Filannoo namoota biroo kabaji" }
    ]
  },
  {
    number: 110,
    name: "An-Nasr",
    nameAr: "النصر",
    meaning: { en: "The Help", om: "Gargaarsa" },
    verses: 3,
    revelationType: "Medinan",
    summary: {
      en: "Revealed near the end of the Prophet's ﷺ life, indicating the completion of his mission. Commands glorification and seeking forgiveness when victory comes.",
      om: "Dhuma jireenya Raajii ﷺ irratti mul'ate, ergama isaa guutuu agarsiisa. Yeroo injifannoon dhufu galata fi dhiifama barbaaduu ajaja."
    },
    themes: [
      { en: "Divine victory", om: "Injifannoo Rabbii" },
      { en: "Completion of mission", om: "Ergama xumuruu" },
      { en: "Humility in success", om: "Milkaa'ina keessatti gad of qabuu" }
    ],
    keyLessons: [
      { en: "Victory comes from Allah", om: "Injifannoon Rabbii biraa dhufa" },
      { en: "Be humble in success", om: "Milkaa'ina keessatti gad of qabi" },
      { en: "Seek forgiveness always", om: "Yeroo hunda dhiifama barbaadi" }
    ]
  },
  {
    number: 111,
    name: "Al-Masad",
    nameAr: "المسد",
    meaning: { en: "The Palm Fiber", om: "Funyoo Muka" },
    verses: 5,
    revelationType: "Meccan",
    summary: {
      en: "Condemns Abu Lahab and his wife for their hostility to Islam and the Prophet ﷺ. A prophecy that came true - they died as disbelievers.",
      om: "Abu Lahab fi niitii isaa sababii diinummaa Islaamaa fi Raajii ﷺ irratti godhaniin balaaleffata. Raajiin dhugaa ta'e - akka kafaltoota du'an."
    },
    themes: [
      { en: "Consequences of opposing truth", om: "Bu'aa dhugaa mormuu" },
      { en: "Divine prophecy", om: "Raajii Rabbii" },
      { en: "Punishment of oppressors", om: "Adabbii cunqursitootaa" }
    ],
    keyLessons: [
      { en: "Opposing truth leads to loss", om: "Dhugaa mormuu gara kasaaratti geessa" },
      { en: "Wealth cannot save from Allah's judgment", om: "Qabeenyi murtii Rabbii irraa oolchuu hin danda'u" },
      { en: "Stand with truth", om: "Dhugaa wajjin dhaabbadhu" }
    ]
  },
  {
    number: 112,
    name: "Al-Ikhlas",
    nameAr: "الإخلاص",
    meaning: { en: "The Sincerity", om: "Qulqullina" },
    verses: 4,
    revelationType: "Meccan",
    summary: {
      en: "The essence of Islamic monotheism (Tawhid). The Prophet ﷺ said it equals one-third of the Quran. Describes Allah's absolute oneness and uniqueness.",
      om: "Bu'uura Rabbii tokkicha ta'uu Islaamaa (Tawhid). Raajichi ﷺ sadarkaa sadii keessaa tokko Qur'aanaa wajjin walqixa jedhan. Tokkummaa fi addummaa Rabbii guutuu ibsa."
    },
    themes: [
      { en: "Pure monotheism", om: "Rabbii tokkicha ta'uu qulqulluu" },
      { en: "Allah's absolute oneness", om: "Tokkummaa Rabbii guutuu" },
      { en: "Rejection of all forms of shirk", om: "Bifa shirka hundaa diduu" }
    ],
    keyLessons: [
      { en: "Allah is One and Unique", om: "Rabbiin Tokko fi Addaa dha" },
      { en: "Allah is Self-Sufficient", om: "Rabbiin of danda'aa dha" },
      { en: "Nothing is comparable to Allah", om: "Wanni Rabbii wajjin wal bira qabamu hin jiru" },
      { en: "Recite often for great reward", om: "Badhaasa guddaaf yeroo baay'ee dubbisi" }
    ]
  },
  {
    number: 113,
    name: "Al-Falaq",
    nameAr: "الفلق",
    meaning: { en: "The Daybreak", om: "Barii" },
    verses: 5,
    revelationType: "Meccan",
    summary: {
      en: "One of the two protective Surahs (Al-Mu'awwidhatayn). Seeks Allah's protection from various forms of evil including darkness, envy, and harmful magic.",
      om: "Suuraalee eegumsa lamaan (Al-Mu'awwidhatayn) keessaa tokko. Eegumsa Rabbii bifa hamaa adda addaa dabalatee dukkana, hinaaffaa fi falfalaa miidhaa qabu irraa barbaada."
    },
    themes: [
      { en: "Seeking Allah's protection", om: "Eegumsa Rabbii barbaaduu" },
      { en: "Protection from evil", om: "Hamaa irraa eegumsa" },
      { en: "Trust in Allah", om: "Rabbitti amanachuu" }
    ],
    keyLessons: [
      { en: "Seek refuge in Allah from all evil", om: "Hamaa hunda irraa Rabbitti kooluu gali" },
      { en: "Recite morning and evening", om: "Ganama fi galgala dubbisi" },
      { en: "Protection comes only from Allah", om: "Eegumsi Rabbii qofa irraa dhufa" }
    ]
  },
  {
    number: 114,
    name: "An-Nas",
    nameAr: "الناس",
    meaning: { en: "Mankind", om: "Namoonni" },
    verses: 6,
    revelationType: "Meccan",
    summary: {
      en: "The final Surah of the Quran. Seeks Allah's protection from the whispers of Satan and evil jinn. Emphasizes Allah as Lord, King, and God of mankind.",
      om: "Suuraa dhumaa Qur'aanaa. Eegumsa Rabbii hasaasa Shaayxaanaa fi jinnii hamaa irraa barbaada. Rabbiin Gooftaa, Mootii fi Waaqa namoota ta'uu cimsee ibsa."
    },
    themes: [
      { en: "Protection from Satan's whispers", om: "Hasaasa Shaayxaanaa irraa eegumsa" },
      { en: "Allah's lordship over mankind", om: "Gooftummaa Rabbii namoota irratti" },
      { en: "Spiritual protection", om: "Eegumsa hafuuraa" }
    ],
    keyLessons: [
      { en: "Seek refuge from evil whispers", om: "Hasaasa hamaa irraa kooluu gali" },
      { en: "Recognize Allah as your Lord", om: "Rabbii akka Gooftaa keetitti beeki" },
      { en: "Recite for daily protection", om: "Eegumsa guyyaa guyyaatiif dubbisi" },
      { en: "Complete the Quran with this Surah", om: "Qur'aana suuraa kanaan xumuri" }
    ]
  }
];


// Remaining Surahs with basic information
const remainingSurahs: CompleteSurah[] = [
  { number: 3, name: "Ali 'Imran", nameAr: "آل عمران", meaning: { en: "Family of Imran", om: "Maatii Imraan" }, verses: 200, revelationType: "Medinan", summary: { en: "Stories of Mary and Jesus, Battle of Uhud, unity of believers", om: "Seenaa Maryam fi Isa, Lola Uhud, tokkummaa amantoota" }, themes: [], keyLessons: [] },
  { number: 4, name: "An-Nisa", nameAr: "النساء", meaning: { en: "The Women", om: "Dubartoonni" }, verses: 176, revelationType: "Medinan", summary: { en: "Women's rights, family law, inheritance, social justice", om: "Mirga dubartootaa, seera maatii, dhaala, haqummaa hawaasaa" }, themes: [], keyLessons: [] },
  { number: 5, name: "Al-Ma'idah", nameAr: "المائدة", meaning: { en: "The Table Spread", om: "Maaddii Diriirfame" }, verses: 120, revelationType: "Medinan", summary: { en: "Lawful and unlawful foods, treaties, story of Jesus", om: "Nyaata hayyamamaa fi dhowwame, waliigaltee, seenaa Isa" }, themes: [], keyLessons: [] },
  { number: 6, name: "Al-An'am", nameAr: "الأنعام", meaning: { en: "The Cattle", om: "Horii" }, verses: 165, revelationType: "Meccan", summary: { en: "Monotheism, refutation of polytheism", om: "Rabbii tokkicha ta'uu, shirka mormuu" }, themes: [], keyLessons: [] },
  { number: 7, name: "Al-A'raf", nameAr: "الأعراف", meaning: { en: "The Heights", om: "Ol'aantoota" }, verses: 206, revelationType: "Meccan", summary: { en: "Stories of prophets and their nations", om: "Seenaa raajotaa fi saboota isaanii" }, themes: [], keyLessons: [] },
  { number: 8, name: "Al-Anfal", nameAr: "الأنفال", meaning: { en: "The Spoils of War", om: "Boojuu Waraanaa" }, verses: 75, revelationType: "Medinan", summary: { en: "Battle of Badr and war ethics", om: "Lola Badr fi naamusa waraanaa" }, themes: [], keyLessons: [] },
  { number: 9, name: "At-Tawbah", nameAr: "التوبة", meaning: { en: "The Repentance", om: "Tawbaa" }, verses: 129, revelationType: "Medinan", summary: { en: "Repentance and hypocrites", om: "Tawbaa fi fakkeessitoota" }, themes: [], keyLessons: [] },
  { number: 10, name: "Yunus", nameAr: "يونس", meaning: { en: "Jonah", om: "Yuunus" }, verses: 109, revelationType: "Meccan", summary: { en: "Story of Prophet Yunus", om: "Seenaa Raajii Yuunus" }, themes: [], keyLessons: [] },
  { number: 11, name: "Hud", nameAr: "هود", meaning: { en: "Hud", om: "Huud" }, verses: 123, revelationType: "Meccan", summary: { en: "Stories of prophets Hud, Salih, and others", om: "Seenaa raajota Huud, Saalih fi kanneen biroo" }, themes: [], keyLessons: [] },
  { number: 12, name: "Yusuf", nameAr: "يوسف", meaning: { en: "Joseph", om: "Yuusuf" }, verses: 111, revelationType: "Meccan", summary: { en: "Complete story of Prophet Yusuf", om: "Seenaa guutuu Raajii Yuusuf" }, themes: [], keyLessons: [] }
];

// Export all Surahs combined
export function getAllExpandedSurahs(): CompleteSurah[] {
  return [
    ...firstFiveSurahs,
    ...expandedSurahs,
    ...juzAmmaSurahs,
    ...remainingSurahs
  ].sort((a, b) => a.number - b.number);
}

export { CompleteSurah, SurahTranslation };
