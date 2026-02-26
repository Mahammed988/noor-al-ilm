import { notFound } from "next/navigation";
import { BookOpen, Lightbulb, Heart } from "lucide-react";

const surahData: Record<string, any> = {
  "1": {
    number: 1,
    name: "Al-Fatihah",
    nameAr: "الفاتحة",
    meaning: "The Opening",
    verses: 7,
    summary: "Al-Fatihah is the opening chapter of the Quran and is recited in every unit of prayer. It encompasses praise of Allah, acknowledgment of His sovereignty, and a supplication for guidance.",
    themes: [
      "Praise and glorification of Allah",
      "Acknowledgment of Allah's mercy and sovereignty",
      "The Day of Judgment",
      "Seeking guidance and help from Allah alone",
      "The straight path vs. paths of misguidance"
    ],
    keyVerses: [
      {
        number: 1,
        arabic: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
        translation: "In the name of Allah, the Most Gracious, the Most Merciful",
        tafsir: "This verse establishes the foundation of beginning every action with Allah's name, invoking His mercy and compassion. The two names Ar-Rahman and Ar-Rahim emphasize Allah's encompassing mercy."
      },
      {
        number: 5,
        arabic: "إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ",
        translation: "You alone we worship, and You alone we ask for help",
        tafsir: "This verse represents the core of Islamic monotheism (Tawhid). It combines both worship and reliance solely on Allah, rejecting all forms of shirk (associating partners with Allah)."
      },
      {
        number: 6,
        arabic: "اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ",
        translation: "Guide us to the straight path",
        tafsir: "The straight path refers to Islam and the way of those who follow Allah's guidance. This is a continuous supplication that Muslims make in every prayer, acknowledging constant need for Allah's guidance."
      }
    ],
    reflections: [
      "Reflect on how you begin your daily actions - are they preceded with Allah's name?",
      "Consider the balance between worship (ibadah) and seeking help (isti'anah) in your life",
      "Contemplate the paths mentioned: the straight path, the path of those who earned anger, and those who went astray",
      "This surah is recited at least 17 times daily in the five prayers - reflect on its profound meanings"
    ]
  }
};

export default function SurahPage({ params }: { params: { id: string } }) {
  const surah = surahData[params.id];

  if (!surah) {
    notFound();
  }

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary font-semibold mb-4">
              Surah {surah.number}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{surah.name}</h1>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 arabic-text text-primary">{surah.nameAr}</h2>
            <p className="text-xl text-muted-foreground">{surah.meaning} • {surah.verses} verses</p>
          </div>

          {/* Summary */}
          <section className="mb-12 bg-card rounded-lg p-8 border border-border">
            <div className="flex items-center mb-4">
              <BookOpen className="w-6 h-6 text-primary mr-3" />
              <h3 className="text-2xl font-bold">Summary</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">{surah.summary}</p>
          </section>

          {/* Key Themes */}
          <section className="mb-12 bg-card rounded-lg p-8 border border-border">
            <div className="flex items-center mb-6">
              <Lightbulb className="w-6 h-6 text-primary mr-3" />
              <h3 className="text-2xl font-bold">Key Themes</h3>
            </div>
            <ul className="space-y-3">
              {surah.themes.map((theme: string, index: number) => (
                <li key={index} className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                  <span className="text-muted-foreground">{theme}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Key Verses with Tafsir */}
          <section className="mb-12">
            <h3 className="text-2xl font-bold mb-6">Selected Verses & Explanations</h3>
            <div className="space-y-8">
              {surah.keyVerses.map((verse: any) => (
                <div key={verse.number} className="bg-card rounded-lg p-8 border border-border">
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
                      Verse {verse.number}
                    </span>
                  </div>
                  <div className="arabic-text text-3xl mb-6 leading-loose text-primary">
                    {verse.arabic}
                  </div>
                  <div className="mb-6 p-4 bg-secondary/50 rounded-lg">
                    <p className="text-lg italic">{verse.translation}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-primary">Tafsir:</h4>
                    <p className="text-muted-foreground leading-relaxed">{verse.tafsir}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Practical Reflections */}
          <section className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg p-8 border border-border">
            <div className="flex items-center mb-6">
              <Heart className="w-6 h-6 text-primary mr-3" />
              <h3 className="text-2xl font-bold">Practical Reflections</h3>
            </div>
            <div className="space-y-4">
              {surah.reflections.map((reflection: string, index: number) => (
                <div key={index} className="flex items-start">
                  <span className="inline-block w-8 h-8 bg-primary/10 text-primary rounded-full flex items-center justify-center font-semibold mr-4 flex-shrink-0">
                    {index + 1}
                  </span>
                  <p className="text-muted-foreground pt-1">{reflection}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
