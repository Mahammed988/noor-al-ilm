export interface Hadith {
  id: string;
  collection: string;
  book: string;
  number: string;
  arabic: string;
  translation: string;
  narrator: string;
  grade: string;
  topic: string[];
}

export const sampleHadith: Hadith[] = [
  {
    id: "bukhari-1",
    collection: "Sahih al-Bukhari",
    book: "Book of Faith",
    number: "1",
    arabic: "إِنَّمَا الأَعْمَالُ بِالنِّيَّاتِ، وَإِنَّمَا لِكُلِّ امْرِئٍ مَا نَوَى",
    translation: "Actions are judged by intentions, and every person will be rewarded according to their intention.",
    narrator: "Umar ibn al-Khattab",
    grade: "Sahih (Authentic)",
    topic: ["Intention", "Faith", "Actions"]
  },
  {
    id: "bukhari-2",
    collection: "Sahih al-Bukhari",
    book: "Book of Faith",
    number: "2",
    arabic: "بُنِيَ الإِسْلاَمُ عَلَى خَمْسٍ",
    translation: "Islam is built upon five pillars: testifying that there is no god but Allah and Muhammad is His messenger, establishing prayer, giving zakat, fasting Ramadan, and performing Hajj.",
    narrator: "Abdullah ibn Umar",
    grade: "Sahih (Authentic)",
    topic: ["Five Pillars", "Faith", "Islam"]
  },
  {
    id: "muslim-1",
    collection: "Sahih Muslim",
    book: "Book of Faith",
    number: "1",
    arabic: "الإِيمَانُ بِضْعٌ وَسَبْعُونَ شُعْبَةً",
    translation: "Faith has seventy-odd branches, the highest of which is saying 'There is no god but Allah' and the lowest is removing harmful things from the road.",
    narrator: "Abu Hurairah",
    grade: "Sahih (Authentic)",
    topic: ["Faith", "Good Deeds", "Character"]
  }
];
