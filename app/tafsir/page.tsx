import Link from "next/link";
import { BookOpen, ChevronRight } from "lucide-react";

const surahs = [
  { number: 1, name: "Al-Fatihah", nameAr: "الفاتحة", verses: 7, meaning: "The Opening" },
  { number: 2, name: "Al-Baqarah", nameAr: "البقرة", verses: 286, meaning: "The Cow" },
  { number: 3, name: "Ali 'Imran", nameAr: "آل عمران", verses: 200, meaning: "Family of Imran" },
  { number: 4, name: "An-Nisa", nameAr: "النساء", verses: 176, meaning: "The Women" },
  { number: 18, name: "Al-Kahf", nameAr: "الكهف", verses: 110, meaning: "The Cave" },
  { number: 36, name: "Ya-Sin", nameAr: "يس", verses: 83, meaning: "Ya-Sin" },
  { number: 55, name: "Ar-Rahman", nameAr: "الرحمن", verses: 78, meaning: "The Most Merciful" },
  { number: 67, name: "Al-Mulk", nameAr: "الملك", verses: 30, meaning: "The Sovereignty" },
];

export default function TafsirPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-4xl mx-auto mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Tafsir</h1>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 arabic-text text-primary">التفسير</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore the meanings and wisdom of the Quran through classical tafsir works including 
            Tafsir Ibn Kathir and Tafsir al-Jalalayn
          </p>
        </div>

        {/* Tafsir Sources */}
        <div className="max-w-4xl mx-auto mb-12">
          <h3 className="text-2xl font-bold mb-6">Available Tafsir Sources</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card rounded-lg p-6 border border-border">
              <h4 className="text-xl font-semibold mb-2">Tafsir Ibn Kathir</h4>
              <p className="arabic-text text-primary mb-3">تفسير ابن كثير</p>
              <p className="text-sm text-muted-foreground">
                Comprehensive classical tafsir by Imam Ibn Kathir, known for its reliance on 
                authentic hadith and scholarly interpretation
              </p>
            </div>
            <div className="bg-card rounded-lg p-6 border border-border">
              <h4 className="text-xl font-semibold mb-2">Tafsir al-Jalalayn</h4>
              <p className="arabic-text text-primary mb-3">تفسير الجلالين</p>
              <p className="text-sm text-muted-foreground">
                Concise and accessible tafsir by Jalal ad-Din al-Mahalli and Jalal ad-Din as-Suyuti, 
                widely studied for its clarity
              </p>
            </div>
          </div>
        </div>

        {/* Surah List */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-6">Browse by Surah</h3>
          <div className="space-y-3">
            {surahs.map((surah) => (
              <Link
                key={surah.number}
                href={`/tafsir/${surah.number}`}
                className="block bg-card rounded-lg p-6 border border-border hover:border-primary transition-colors group"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                      {surah.number}
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold group-hover:text-primary transition-colors">
                        {surah.name}
                      </h4>
                      <p className="text-sm text-muted-foreground">{surah.meaning} • {surah.verses} verses</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="arabic-text text-2xl text-primary">
                      {surah.nameAr}
                    </div>
                    <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-muted-foreground">More surahs coming soon...</p>
          </div>
        </div>
      </div>
    </div>
  );
}
