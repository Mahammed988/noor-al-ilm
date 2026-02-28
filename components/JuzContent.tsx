"use client";

import Link from "next/link";
import { BookOpen, ChevronRight, Info } from "lucide-react";
import { useLanguage } from "@/components/LanguageSelector";
import { Juz } from "@/lib/data/juz";
import { CompleteSurah } from "@/lib/data/complete-surahs";

interface JuzContentProps {
  juz: Juz;
  surahsInJuz: CompleteSurah[];
}

export default function JuzContent({ juz, surahsInJuz }: JuzContentProps) {
  const language = useLanguage();

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary font-semibold mb-4">
              {language === 'en' ? `Juz ${juz.number}` : `Juz ${juz.number}`}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {language === 'en' ? juz.name.en : juz.name.om}
            </h1>
            <p className="text-xl text-muted-foreground">
              {language === 'en' 
                ? `Surah ${juz.startSurah}:${juz.startVerse} - ${juz.endSurah}:${juz.endVerse}`
                : `Suuraa ${juz.startSurah}:${juz.startVerse} - ${juz.endSurah}:${juz.endVerse}`
              }
            </p>
          </div>

          {/* Description */}
          <section className="mb-12 bg-card rounded-lg p-8 border border-border">
            <div className="flex items-center mb-4">
              <Info className="w-6 h-6 text-primary mr-3" />
              <h3 className="text-2xl font-bold">
                {language === 'en' ? 'Overview' : 'Ilaalcha Waliigalaa'}
              </h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              {language === 'en' ? juz.description.en : juz.description.om}
            </p>
          </section>

          {/* Surahs in this Juz */}
          <section className="mb-12">
            <h3 className="text-2xl font-bold mb-6">
              {language === 'en' ? 'Surahs in this Juz' : 'Suuraalee Juz kana keessa jiran'}
            </h3>
            <div className="space-y-3">
              {surahsInJuz.map((surah) => (
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
                        <p className="text-sm text-muted-foreground">
                          {language === 'en' ? surah.meaning.en : surah.meaning.om} • {surah.verses} {language === 'en' ? 'verses' : 'aayatoota'}
                        </p>
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
          </section>

          {/* Navigation */}
          <section className="flex justify-between items-center">
            {juz.number > 1 ? (
              <Link
                href={`/juz/${juz.number - 1}`}
                className="flex items-center space-x-2 px-6 py-3 bg-card border border-border rounded-lg hover:border-primary transition-colors"
              >
                <ChevronRight className="w-5 h-5 rotate-180" />
                <span>{language === 'en' ? 'Previous Juz' : 'Juz Darbee'}</span>
              </Link>
            ) : (
              <div></div>
            )}
            
            <Link
              href="/juz"
              className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
            >
              {language === 'en' ? 'All Juz' : 'Juz Hunda'}
            </Link>

            {juz.number < 30 ? (
              <Link
                href={`/juz/${juz.number + 1}`}
                className="flex items-center space-x-2 px-6 py-3 bg-card border border-border rounded-lg hover:border-primary transition-colors"
              >
                <span>{language === 'en' ? 'Next Juz' : 'Juz Itti Aanu'}</span>
                <ChevronRight className="w-5 h-5" />
              </Link>
            ) : (
              <div></div>
            )}
          </section>
        </div>
      </div>
    </div>
  );
}
