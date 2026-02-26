export interface HadithTranslation {
  en: string;
  om: string;
}

export interface CompleteHadith {
  id: string;
  collection: string;
  collectionAr: string;
  book: HadithTranslation;
  number: string;
  arabic: string;
  translation: HadithTranslation;
  narrator: string;
  grade: HadithTranslation;
  topics: HadithTranslation[];
  explanation: HadithTranslation;
}

export const sahihBukhariHadith: CompleteHadith[] = [
  {
    id: "bukhari-1",
    collection: "Sahih al-Bukhari",
    collectionAr: "صحيح البخاري",
    book: { en: "Book of Revelation", om: "Kitaaba Mul'ataa" },
    number: "1",
    arabic: "إِنَّمَا الأَعْمَالُ بِالنِّيَّاتِ، وَإِنَّمَا لِكُلِّ امْرِئٍ مَا نَوَى",
    translation: {
      en: "Actions are judged by intentions, and every person will be rewarded according to their intention.",
      om: "Hojiin kaayyoo isaatiin madaalama, namni hundis kaayyoo isaatiin badhaafama."
    },
    narrator: "Umar ibn al-Khattab",
    grade: { en: "Sahih (Authentic)", om: "Sahih (Dhugaa)" },
    topics: [
      { en: "Intention", om: "Kaayyoo" },
      { en: "Sincerity", om: "Qulqullina" },
      { en: "Actions", om: "Hojii" }
    ],
    explanation: {
      en: "This hadith emphasizes that the value of any action depends on the intention behind it. A good deed done with pure intention for Allah's sake is rewarded, while the same deed done for show or worldly gain has no spiritual value.",
      om: "Hadiin kun gatii hojii kamiyyuu kaayyoo isaa duubaan jiru irratti hundaa'uu ibsa. Hojiin gaarii kaayyoo qulqulluu Rabbiif godhamuun badhaafama, hojiin walfakkeessuu ykn bu'aa addunyaatiif godhamuun garuu gatii hafuuraa hin qabu."
    }
  },
  {
    id: "bukhari-2",
    collection: "Sahih al-Bukhari",
    collectionAr: "صحيح البخاري",
    book: { en: "Book of Faith", om: "Kitaaba Amantii" },
    number: "8",
    arabic: "بُنِيَ الإِسْلاَمُ عَلَى خَمْسٍ: شَهَادَةِ أَنْ لاَ إِلَهَ إِلاَّ اللَّهُ وَأَنَّ مُحَمَّدًا رَسُولُ اللَّهِ، وَإِقَامِ الصَّلاَةِ، وَإِيتَاءِ الزَّكَاةِ، وَالحَجِّ، وَصَوْمِ رَمَضَانَ",
    translation: {
      en: "Islam is built upon five pillars: testifying that there is no god but Allah and Muhammad is His messenger, establishing prayer, giving zakat, performing Hajj, and fasting Ramadan.",
      om: "Islaamni utubaawwan shan irratti ijaarame: Rabbii malee Waaqni hin jiru fi Muhammad ergamaa Isaa ta'uu ragaa ba'uu, salaata hundeessuu, zakaa kennuu, Hajii raawwachuu fi Ramadaana soomuu."
    },
    narrator: "Abdullah ibn Umar",
    grade: { en: "Sahih (Authentic)", om: "Sahih (Dhugaa)" },
    topics: [
      { en: "Five Pillars", om: "Utubaawwan Shanan" },
      { en: "Faith", om: "Amantii" },
      { en: "Islam", om: "Islaama" }
    ],
    explanation: {
      en: "This fundamental hadith outlines the five pillars that form the foundation of Islamic practice. Every Muslim must fulfill these obligations to complete their faith.",
      om: "Hadiin bu'uuraa kun utubaawwan shanan amala Islaamaa bu'uura ta'an ibsa. Musliimni hundi dirqamoota kana guutuun amantii isaanii guutuuf dirqama."
    }
  },
  {
    id: "bukhari-3",
    collection: "Sahih al-Bukhari",
    collectionAr: "صحيح البخاري",
    book: { en: "Book of Knowledge", om: "Kitaaba Beekumsa" },
    number: "79",
    arabic: "مَنْ يُرِدِ اللَّهُ بِهِ خَيْرًا يُفَقِّهْهُ فِي الدِّينِ",
    translation: {
      en: "Whoever Allah wishes good for, He gives them understanding of the religion.",
      om: "Namni Rabbiin gaarii isaaf barbaadu, amantii keessatti hubannoo isaaf kenna."
    },
    narrator: "Muawiya",
    grade: { en: "Sahih (Authentic)", om: "Sahih (Dhugaa)" },
    topics: [
      { en: "Knowledge", om: "Beekumsa" },
      { en: "Understanding", om: "Hubannoo" },
      { en: "Religion", om: "Amantii" }
    ],
    explanation: {
      en: "This hadith shows that religious knowledge and understanding is a blessing from Allah. Seeking knowledge is a sign of Allah's favor.",
      om: "Hadiin kun beekumsaa fi hubannoo amantii eebba Rabbii ta'uu agarsiisa. Beekumsa barbaaduu mallattoo arjummaa Rabbii ti."
    }
  }
];

export const sahihMuslimHadith: CompleteHadith[] = [
  {
    id: "muslim-1",
    collection: "Sahih Muslim",
    collectionAr: "صحيح مسلم",
    book: { en: "Book of Faith", om: "Kitaaba Amantii" },
    number: "1",
    arabic: "الإِيمَانُ بِضْعٌ وَسَبْعُونَ شُعْبَةً، فَأَفْضَلُهَا قَوْلُ لاَ إِلَهَ إِلاَّ اللَّهُ، وَأَدْنَاهَا إِمَاطَةُ الأَذَى عَنِ الطَّرِيقِ",
    translation: {
      en: "Faith has seventy-odd branches, the highest of which is saying 'There is no god but Allah' and the lowest is removing harmful things from the road.",
      om: "Amantiin damee torbaatamaa fi tokko qaba, kan olaanaan 'Rabbii malee Waaqni hin jiru' jechuu fi kan gad aanaan waan nama miidhu karaa irraa kaasuu dha."
    },
    narrator: "Abu Hurairah",
    grade: { en: "Sahih (Authentic)", om: "Sahih (Dhugaa)" },
    topics: [
      { en: "Faith", om: "Amantii" },
      { en: "Good Deeds", om: "Hojii Gaarii" },
      { en: "Character", om: "Amala" }
    ],
    explanation: {
      en: "This hadith teaches that faith is not just belief but includes all good actions, from the greatest (testimony of faith) to the smallest (removing harm from people's path).",
      om: "Hadiin kun amantiin amantii qofa osoo hin taane hojii gaarii hunda, guddaa (ragaa amantii) hanga xixiqqaatti (miidhaa karaa namoota irraa kaasuu) akka of keessaa qabu barsiisa."
    }
  },
  {
    id: "muslim-2",
    collection: "Sahih Muslim",
    collectionAr: "صحيح مسلم",
    book: { en: "Book of Purification", om: "Kitaaba Qulqullina" },
    number: "223",
    arabic: "الطَّهُورُ شَطْرُ الإِيمَانِ",
    translation: {
      en: "Purification is half of faith.",
      om: "Qulqullinni walakkaa amantii ti."
    },
    narrator: "Abu Malik al-Ash'ari",
    grade: { en: "Sahih (Authentic)", om: "Sahih (Dhugaa)" },
    topics: [
      { en: "Purification", om: "Qulqullina" },
      { en: "Cleanliness", om: "Qulqullummaa" },
      { en: "Faith", om: "Amantii" }
    ],
    explanation: {
      en: "This hadith emphasizes the importance of physical and spiritual purity in Islam. Cleanliness is an essential part of faith.",
      om: "Hadiin kun barbaachisummaa qulqullina qaamaa fi hafuuraa Islaama keessatti cimsee ibsa. Qulqullummaan kutaa barbaachisaa amantii ti."
    }
  }
];

export const riyadAsSalihinHadith: CompleteHadith[] = [
  {
    id: "riyadh-1",
    collection: "Riyad as-Salihin",
    collectionAr: "رياض الصالحين",
    book: { en: "Book of Sincerity", om: "Kitaaba Qulqullina" },
    number: "1",
    arabic: "إِنَّمَا الأَعْمَالُ بِالنِّيَّاتِ",
    translation: {
      en: "Actions are judged by intentions.",
      om: "Hojiin kaayyoo isaatiin madaalama."
    },
    narrator: "Umar ibn al-Khattab",
    grade: { en: "Sahih (Authentic)", om: "Sahih (Dhugaa)" },
    topics: [
      { en: "Sincerity", om: "Qulqullina" },
      { en: "Intention", om: "Kaayyoo" }
    ],
    explanation: {
      en: "The foundation of all righteous deeds is sincere intention for Allah's sake.",
      om: "Bu'uurri hojii qajeelaa hundaa kaayyoo qulqulluu Rabbiif ta'uu dha."
    }
  }
];

export function getAllHadith(): CompleteHadith[] {
  return [...sahihBukhariHadith, ...sahihMuslimHadith, ...riyadAsSalihinHadith];
}

export function getHadithByCollection(collection: string): CompleteHadith[] {
  switch (collection.toLowerCase()) {
    case 'bukhari':
      return sahihBukhariHadith;
    case 'muslim':
      return sahihMuslimHadith;
    case 'riyadh':
      return riyadAsSalihinHadith;
    default:
      return getAllHadith();
  }
}
