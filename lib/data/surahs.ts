export interface Surah {
  number: number;
  name: string;
  nameAr: string;
  meaning: string;
  verses: number;
  revelationType: "Meccan" | "Medinan";
}

export const surahs: Surah[] = [
  { number: 1, name: "Al-Fatihah", nameAr: "الفاتحة", meaning: "The Opening", verses: 7, revelationType: "Meccan" },
  { number: 2, name: "Al-Baqarah", nameAr: "البقرة", meaning: "The Cow", verses: 286, revelationType: "Medinan" },
  { number: 3, name: "Ali 'Imran", nameAr: "آل عمران", meaning: "Family of Imran", verses: 200, revelationType: "Medinan" },
  { number: 4, name: "An-Nisa", nameAr: "النساء", meaning: "The Women", verses: 176, revelationType: "Medinan" },
  { number: 5, name: "Al-Ma'idah", nameAr: "المائدة", meaning: "The Table Spread", verses: 120, revelationType: "Medinan" },
  { number: 6, name: "Al-An'am", nameAr: "الأنعام", meaning: "The Cattle", verses: 165, revelationType: "Meccan" },
  { number: 7, name: "Al-A'raf", nameAr: "الأعراف", meaning: "The Heights", verses: 206, revelationType: "Meccan" },
  { number: 18, name: "Al-Kahf", nameAr: "الكهف", meaning: "The Cave", verses: 110, revelationType: "Meccan" },
  { number: 36, name: "Ya-Sin", nameAr: "يس", meaning: "Ya-Sin", verses: 83, revelationType: "Meccan" },
  { number: 55, name: "Ar-Rahman", nameAr: "الرحمن", meaning: "The Most Merciful", verses: 78, revelationType: "Medinan" },
  { number: 67, name: "Al-Mulk", nameAr: "الملك", meaning: "The Sovereignty", verses: 30, revelationType: "Meccan" },
  { number: 112, name: "Al-Ikhlas", nameAr: "الإخلاص", meaning: "The Sincerity", verses: 4, revelationType: "Meccan" },
  { number: 113, name: "Al-Falaq", nameAr: "الفلق", meaning: "The Daybreak", verses: 5, revelationType: "Meccan" },
  { number: 114, name: "An-Nas", nameAr: "الناس", meaning: "Mankind", verses: 6, revelationType: "Meccan" },
];
