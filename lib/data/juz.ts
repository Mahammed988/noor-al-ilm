export interface JuzTranslation {
  en: string;
  om: string;
}

export interface Juz {
  number: number;
  name: JuzTranslation;
  startSurah: number;
  startVerse: number;
  endSurah: number;
  endVerse: number;
  description: JuzTranslation;
}

export const allJuz: Juz[] = [
  {
    number: 1,
    name: { en: "Juz 1", om: "Juz 1" },
    startSurah: 1,
    startVerse: 1,
    endSurah: 2,
    endVerse: 141,
    description: {
      en: "Begins with Al-Fatihah and covers the opening of Al-Baqarah, discussing faith, guidance, and the stories of Adam and the Children of Israel.",
      om: "Al-Faatihaadhaan jalqaba, jalqaba Al-Baqarah of keessaa qaba, waa'ee amantii, qajeelfamaa fi seenaa Aadaamaa fi Ijoollee Israa'iil dubbata."
    }
  },
  {
    number: 2,
    name: { en: "Juz 2", om: "Juz 2" },
    startSurah: 2,
    startVerse: 142,
    endSurah: 2,
    endVerse: 252,
    description: {
      en: "Continues Al-Baqarah with laws of fasting, Hajj, marriage, and the famous Ayat al-Kursi.",
      om: "Al-Baqarah itti fufa, seera soomaa, Hajjii, gaa'elaa fi Aayat al-Kursi beekamaa of keessaa qaba."
    }
  },
  {
    number: 3,
    name: { en: "Juz 3", om: "Juz 3" },
    startSurah: 2,
    startVerse: 253,
    endSurah: 3,
    endVerse: 92,
    description: {
      en: "Completes Al-Baqarah and begins Ali 'Imran, discussing charity, unity, and the story of Mary.",
      om: "Al-Baqarah xumura, Ali 'Imran jalqaba, waa'ee sadaqaa, tokkummaa fi seenaa Maryam dubbata."
    }
  },
  {
    number: 4,
    name: { en: "Juz 4", om: "Juz 4" },
    startSurah: 3,
    startVerse: 93,
    endSurah: 4,
    endVerse: 23,
    description: {
      en: "Continues Ali 'Imran with Battle of Uhud lessons, then begins An-Nisa on family law and women's rights.",
      om: "Ali 'Imran itti fufa barnoota Lola Uhud waliin, An-Nisa jalqaba waa'ee seera maatii fi mirga dubartootaa."
    }
  },
  {
    number: 5,
    name: { en: "Juz 5", om: "Juz 5" },
    startSurah: 4,
    startVerse: 24,
    endSurah: 4,
    endVerse: 147,
    description: {
      en: "Continues An-Nisa with marriage laws, inheritance, and justice in society.",
      om: "An-Nisa itti fufa seera gaa'elaa, dhaala fi haqummaa hawaasaa keessaa waliin."
    }
  },
  {
    number: 6,
    name: { en: "Juz 6", om: "Juz 6" },
    startSurah: 4,
    startVerse: 148,
    endSurah: 5,
    endVerse: 81,
    description: {
      en: "Completes An-Nisa and begins Al-Ma'idah on lawful foods, treaties, and Jesus's story.",
      om: "An-Nisa xumura, Al-Ma'idah jalqaba waa'ee nyaata hayyamamaa, waliigaltee fi seenaa Isa."
    }
  },
  {
    number: 7,
    name: { en: "Juz 7", om: "Juz 7" },
    startSurah: 5,
    startVerse: 82,
    endSurah: 6,
    endVerse: 110,
    description: {
      en: "Completes Al-Ma'idah and begins Al-An'am on monotheism and refuting polytheism.",
      om: "Al-Ma'idah xumura, Al-An'am jalqaba waa'ee Rabbii tokkicha ta'uu fi shirka mormuu."
    }
  },
  {
    number: 8,
    name: { en: "Juz 8", om: "Juz 8" },
    startSurah: 6,
    startVerse: 111,
    endSurah: 7,
    endVerse: 87,
    description: {
      en: "Continues Al-An'am and begins Al-A'raf with stories of prophets and their nations.",
      om: "Al-An'am itti fufa, Al-A'raf jalqaba seenaa raajotaa fi saboota isaanii waliin."
    }
  },
  {
    number: 9,
    name: { en: "Juz 9", om: "Juz 9" },
    startSurah: 7,
    startVerse: 88,
    endSurah: 8,
    endVerse: 40,
    description: {
      en: "Continues Al-A'raf and begins Al-Anfal on Battle of Badr and war ethics.",
      om: "Al-A'raf itti fufa, Al-Anfal jalqaba waa'ee Lola Badr fi naamusa waraanaa."
    }
  },
  {
    number: 10,
    name: { en: "Juz 10", om: "Juz 10" },
    startSurah: 8,
    startVerse: 41,
    endSurah: 9,
    endVerse: 92,
    description: {
      en: "Completes Al-Anfal and begins At-Tawbah on repentance and hypocrites.",
      om: "Al-Anfal xumura, At-Tawbah jalqaba waa'ee tawbaa fi fakkeessitoota."
    }
  },
  {
    number: 11,
    name: { en: "Juz 11", om: "Juz 11" },
    startSurah: 9,
    startVerse: 93,
    endSurah: 11,
    endVerse: 5,
    description: {
      en: "Completes At-Tawbah, covers Yunus, and begins Hud with prophet stories.",
      om: "At-Tawbah xumura, Yunus of keessaa qaba, Hud jalqaba seenaa raajotaa waliin."
    }
  },
  {
    number: 12,
    name: { en: "Juz 12", om: "Juz 12" },
    startSurah: 11,
    startVerse: 6,
    endSurah: 12,
    endVerse: 52,
    description: {
      en: "Continues Hud and covers most of Yusuf, the beautiful story of Prophet Joseph.",
      om: "Hud itti fufa, Yusuf irra baay'ee of keessaa qaba, seenaa bareedaa Raajii Yuusuf."
    }
  },
  {
    number: 13,
    name: { en: "Juz 13", om: "Juz 13" },
    startSurah: 12,
    startVerse: 53,
    endSurah: 15,
    endVerse: 1,
    description: {
      en: "Completes Yusuf, covers Ar-Ra'd, Ibrahim, and begins Al-Hijr.",
      om: "Yusuf xumura, Ar-Ra'd, Ibrahim of keessaa qaba, Al-Hijr jalqaba."
    }
  },
  {
    number: 14,
    name: { en: "Juz 14", om: "Juz 14" },
    startSurah: 15,
    startVerse: 2,
    endSurah: 16,
    endVerse: 128,
    description: {
      en: "Continues Al-Hijr and covers An-Nahl on Allah's blessings and gratitude.",
      om: "Al-Hijr itti fufa, An-Nahl of keessaa qaba waa'ee eebba Rabbii fi galata."
    }
  },
  {
    number: 15,
    name: { en: "Juz 15", om: "Juz 15" },
    startSurah: 17,
    startVerse: 1,
    endSurah: 18,
    endVerse: 74,
    description: {
      en: "Covers Al-Isra on the Night Journey and most of Al-Kahf with cave companions story.",
      om: "Al-Isra of keessaa qaba waa'ee Imala Halkan, Al-Kahf irra baay'ee seenaa hiriyoota holqaa waliin."
    }
  },
  {
    number: 16,
    name: { en: "Juz 16", om: "Juz 16" },
    startSurah: 18,
    startVerse: 75,
    endSurah: 20,
    endVerse: 135,
    description: {
      en: "Completes Al-Kahf, covers Maryam on Mary and Jesus, and most of Ta-Ha on Moses.",
      om: "Al-Kahf xumura, Maryam of keessaa qaba waa'ee Maryam fi Isa, Ta-Ha irra baay'ee waa'ee Muusaa."
    }
  },
  {
    number: 17,
    name: { en: "Juz 17", om: "Juz 17" },
    startSurah: 21,
    startVerse: 1,
    endSurah: 22,
    endVerse: 78,
    description: {
      en: "Covers Al-Anbiya on prophets and Al-Hajj on pilgrimage rituals.",
      om: "Al-Anbiya of keessaa qaba waa'ee raajotaa, Al-Hajj waa'ee aadaa Hajjii."
    }
  },
  {
    number: 18,
    name: { en: "Juz 18", om: "Juz 18" },
    startSurah: 23,
    startVerse: 1,
    endSurah: 25,
    endVerse: 20,
    description: {
      en: "Covers Al-Mu'minun on believers' qualities, An-Nur on light and modesty, and begins Al-Furqan.",
      om: "Al-Mu'minun of keessaa qaba waa'ee amala amantoota, An-Nur waa'ee ifa fi qaanessaa, Al-Furqan jalqaba."
    }
  },
  {
    number: 19,
    name: { en: "Juz 19", om: "Juz 19" },
    startSurah: 25,
    startVerse: 21,
    endSurah: 27,
    endVerse: 55,
    description: {
      en: "Continues Al-Furqan, covers Ash-Shu'ara on poets and prophets, and most of An-Naml.",
      om: "Al-Furqan itti fufa, Ash-Shu'ara of keessaa qaba waa'ee walaloo fi raajotaa, An-Naml irra baay'ee."
    }
  },
  {
    number: 20,
    name: { en: "Juz 20", om: "Juz 20" },
    startSurah: 27,
    startVerse: 56,
    endSurah: 29,
    endVerse: 45,
    description: {
      en: "Completes An-Naml, covers Al-Qasas on Moses's story, and begins Al-Ankabut.",
      om: "An-Naml xumura, Al-Qasas of keessaa qaba seenaa Muusaa, Al-Ankabut jalqaba."
    }
  },
  {
    number: 21,
    name: { en: "Juz 21", om: "Juz 21" },
    startSurah: 29,
    startVerse: 46,
    endSurah: 33,
    endVerse: 30,
    description: {
      en: "Continues Al-Ankabut, covers Ar-Rum, Luqman, As-Sajdah, and begins Al-Ahzab.",
      om: "Al-Ankabut itti fufa, Ar-Rum, Luqman, As-Sajdah of keessaa qaba, Al-Ahzab jalqaba."
    }
  },
  {
    number: 22,
    name: { en: "Juz 22", om: "Juz 22" },
    startSurah: 33,
    startVerse: 31,
    endSurah: 36,
    endVerse: 27,
    description: {
      en: "Continues Al-Ahzab, covers Saba, Fatir, and begins Ya-Sin.",
      om: "Al-Ahzab itti fufa, Saba, Fatir of keessaa qaba, Ya-Sin jalqaba."
    }
  },
  {
    number: 23,
    name: { en: "Juz 23", om: "Juz 23" },
    startSurah: 36,
    startVerse: 28,
    endSurah: 39,
    endVerse: 31,
    description: {
      en: "Continues Ya-Sin, covers As-Saffat, Sad, and begins Az-Zumar.",
      om: "Ya-Sin itti fufa, As-Saffat, Sad of keessaa qaba, Az-Zumar jalqaba."
    }
  },
  {
    number: 24,
    name: { en: "Juz 24", om: "Juz 24" },
    startSurah: 39,
    startVerse: 32,
    endSurah: 41,
    endVerse: 46,
    description: {
      en: "Continues Az-Zumar, covers Ghafir, and begins Fussilat.",
      om: "Az-Zumar itti fufa, Ghafir of keessaa qaba, Fussilat jalqaba."
    }
  },
  {
    number: 25,
    name: { en: "Juz 25", om: "Juz 25" },
    startSurah: 41,
    startVerse: 47,
    endSurah: 45,
    endVerse: 37,
    description: {
      en: "Continues Fussilat, covers Ash-Shuraa, Az-Zukhruf, Ad-Dukhan, and Al-Jathiyah.",
      om: "Fussilat itti fufa, Ash-Shuraa, Az-Zukhruf, Ad-Dukhan, Al-Jathiyah of keessaa qaba."
    }
  },
  {
    number: 26,
    name: { en: "Juz 26", om: "Juz 26" },
    startSurah: 46,
    startVerse: 1,
    endSurah: 51,
    endVerse: 30,
    description: {
      en: "Covers Al-Ahqaf, Muhammad, Al-Fath, Al-Hujurat, Qaf, and begins Adh-Dhariyat.",
      om: "Al-Ahqaf, Muhammad, Al-Fath, Al-Hujurat, Qaf of keessaa qaba, Adh-Dhariyat jalqaba."
    }
  },
  {
    number: 27,
    name: { en: "Juz 27", om: "Juz 27" },
    startSurah: 51,
    startVerse: 31,
    endSurah: 57,
    endVerse: 29,
    description: {
      en: "Continues Adh-Dhariyat, covers At-Tur, An-Najm, Al-Qamar, Ar-Rahman, Al-Waqi'ah, and Al-Hadid.",
      om: "Adh-Dhariyat itti fufa, At-Tur, An-Najm, Al-Qamar, Ar-Rahman, Al-Waqi'ah, Al-Hadid of keessaa qaba."
    }
  },
  {
    number: 28,
    name: { en: "Juz 28", om: "Juz 28" },
    startSurah: 58,
    startVerse: 1,
    endSurah: 66,
    endVerse: 12,
    description: {
      en: "Covers Al-Mujadila through At-Tahrim - surahs on social issues and family matters.",
      om: "Al-Mujadila hanga At-Tahrim - suuraalee waa'ee dhimma hawaasaa fi maatii."
    }
  },
  {
    number: 29,
    name: { en: "Juz 29", om: "Juz 29" },
    startSurah: 67,
    startVerse: 1,
    endSurah: 77,
    endVerse: 50,
    description: {
      en: "Covers Al-Mulk through Al-Mursalat - surahs on the Hereafter and accountability.",
      om: "Al-Mulk hanga Al-Mursalat - suuraalee waa'ee Aakhiraa fi itti gaafatamummaa."
    }
  },
  {
    number: 30,
    name: { en: "Juz 30 (Juz Amma)", om: "Juz 30 (Juz Amma)" },
    startSurah: 78,
    startVerse: 1,
    endSurah: 114,
    endVerse: 6,
    description: {
      en: "The final Juz containing short surahs from An-Naba to An-Nas, commonly memorized and recited.",
      om: "Juz dhumaa suuraalee gabaaboo An-Naba hanga An-Nas of keessaa qabu, yeroo baay'ee yaadatamanii dubbifaman."
    }
  }
];

export function getAllJuz(): Juz[] {
  return allJuz;
}

export function getJuzByNumber(number: number): Juz | undefined {
  return allJuz.find(j => j.number === number);
}
