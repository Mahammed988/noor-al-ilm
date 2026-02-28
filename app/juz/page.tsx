"use client";

import Link from "next/link";
import { BookOpen, ChevronRight } from "lucide-react";
import { useLanguage } from "@/components/LanguageSelector";
import { getAllJuz } from "@/lib/data/juz";

export default function JuzPage() {
  const language = useLanguage();
  const allJuz = getAllJuz();

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-4xl mx-auto mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {language === 'en' ? 'Browse by Juz' : 'Juziidhaan Sakatta\'i'}
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 arabic-text text-primary">الأجزاء</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {language === 'en' 
              ? 'The Quran is divided into 30 equal parts called Juz (also known as Para). Each Juz makes it easier to complete the Quran in 30 days, especially during Ramadan.'
              : 'Qur\'aanni kutaalee walqixa 30 Juz jedhamanitti qoodameera (Para jedhamanis beekama). Juz tokkoon tokkoon Qur\'aana guyyaa 30 keessatti xumuruu salphisa, keessumaa Ramadaana keessa.'
            }
          </p>
        </div>

        {/* Juz List */}
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-4">
            {allJuz.map((juz) => (
              <Link
                key={juz.number}
                href={`/juz/${juz.number}`}
                className="block bg-card rounded-lg p-6 border border-border hover:border-primary transition-colors group"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                      {juz.number}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                        {language === 'en' ? juz.name.en : juz.name.om}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {language === 'en' 
                          ? `Surah ${juz.startSurah}:${juz.startVerse} - ${juz.endSurah}:${juz.endVerse}`
                          : `Suuraa ${juz.startSurah}:${juz.startVerse} - ${juz.endSurah}:${juz.endVerse}`
                        }
                      </p>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
                </div>
                <p className="text-sm text-muted-foreground">
                  {language === 'en' ? juz.description.en : juz.description.om}
                </p>
              </Link>
            ))}
          </div>
        </div>

        {/* Info Box */}
        <div className="max-w-4xl mx-auto mt-12">
          <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg p-8 border border-border">
            <div className="flex items-start space-x-4">
              <BookOpen className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-3">
                  {language === 'en' ? 'About Juz Division' : 'Waa\'ee Qoodama Juz'}
                </h3>
                <p className="text-muted-foreground mb-3">
                  {language === 'en'
                    ? 'The division of the Quran into 30 Juz was done to facilitate its recitation and memorization. Each Juz contains approximately 20 pages in the standard Mushaf.'
                    : 'Qur\'aana Juz 30tti qooduun dubbisuu fi yaadachuu salphisuuf godhamedha. Juz tokkoon tokkoon Mushaf waliigalaa keessatti fuula 20 fakkaatu of keessaa qaba.'
                  }
                </p>
                <p className="text-muted-foreground">
                  {language === 'en'
                    ? 'Many Muslims aim to complete one Juz per day during Ramadan, finishing the entire Quran by the end of the month.'
                    : 'Musliimoonni hedduun Ramadaana keessa guyyaatti Juz tokko xumuruu yaalu, ji\'a dhumaan Qur\'aana guutuu xumuruuf.'
                  }
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
