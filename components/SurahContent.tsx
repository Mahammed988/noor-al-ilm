"use client";

import { BookOpen, Lightbulb, Heart } from "lucide-react";
import { useLanguage } from "@/components/LanguageSelector";
import { CompleteSurah } from "@/lib/data/complete-surahs";

interface SurahContentProps {
  surah: CompleteSurah;
  sampleVerses: any[];
}

export default function SurahContent({ surah, sampleVerses }: SurahContentProps) {
  const language = useLanguage();

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary font-semibold mb-4">
              {language === 'en' ? 'Surah' : 'Suuraa'} {surah.number}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{surah.name}</h1>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 arabic-text text-primary">{surah.nameAr}</h2>
            <p className="text-xl text-muted-foreground">
              {language === 'en' ? surah.meaning.en : surah.meaning.om} • {surah.verses} {language === 'en' ? 'verses' : 'aayatoota'}
            </p>
          </div>

          {/* Summary */}
          <section className="mb-12 bg-card rounded-lg p-8 border border-border">
            <div className="flex items-center mb-4">
              <BookOpen className="w-6 h-6 text-primary mr-3" />
              <h3 className="text-2xl font-bold">{language === 'en' ? 'Summary' : 'Cuunfaa'}</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              {language === 'en' ? surah.summary.en : surah.summary.om}
            </p>
          </section>

          {/* Key Themes */}
          {surah.themes && surah.themes.length > 0 && (
            <section className="mb-12 bg-card rounded-lg p-8 border border-border">
              <div className="flex items-center mb-6">
                <Lightbulb className="w-6 h-6 text-primary mr-3" />
                <h3 className="text-2xl font-bold">{language === 'en' ? 'Key Themes' : 'Mata-dureewwan Ijoo'}</h3>
              </div>
              <ul className="space-y-3">
                {surah.themes.map((theme: any, index: number) => (
                  <li key={index} className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      {language === 'en' ? theme.en : theme.om}
                    </span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Sample Verses with Tafsir */}
          {sampleVerses.length > 0 && (
            <section className="mb-12">
              <h3 className="text-2xl font-bold mb-6">
                {language === 'en' ? 'Selected Verses & Explanations' : 'Aayatoota Filatamoo fi Ibsa'}
              </h3>
              <div className="space-y-8">
                {sampleVerses.map((verse: any) => (
                  <div key={verse.number} className="bg-card rounded-lg p-8 border border-border">
                    <div className="mb-4">
                      <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
                        {language === 'en' ? 'Verse' : 'Aayata'} {verse.number}
                      </span>
                    </div>
                    <div className="arabic-text text-3xl mb-6 leading-loose text-primary">
                      {verse.arabic}
                    </div>
                    <div className="mb-6 p-4 bg-secondary/50 rounded-lg">
                      <p className="text-lg italic">
                        {language === 'en' ? verse.translation.en : verse.translation.om}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-primary">
                        {language === 'en' ? 'Tafsir:' : 'Ibsa:'}
                      </h4>
                      <p className="text-muted-foreground leading-relaxed">
                        {language === 'en' ? verse.tafsir.en : verse.tafsir.om}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Key Lessons */}
          {surah.keyLessons && surah.keyLessons.length > 0 && (
            <section className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg p-8 border border-border">
              <div className="flex items-center mb-6">
                <Heart className="w-6 h-6 text-primary mr-3" />
                <h3 className="text-2xl font-bold">
                  {language === 'en' ? 'Key Lessons' : 'Barnoota Ijoo'}
                </h3>
              </div>
              <div className="space-y-4">
                {surah.keyLessons.map((lesson: any, index: number) => (
                  <div key={index} className="flex items-start">
                    <span className="inline-block w-8 h-8 bg-primary/10 text-primary rounded-full flex items-center justify-center font-semibold mr-4 flex-shrink-0">
                      {index + 1}
                    </span>
                    <p className="text-muted-foreground pt-1">
                      {language === 'en' ? lesson.en : lesson.om}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Note for other Surahs */}
          {sampleVerses.length === 0 && (
            <div className="bg-card rounded-lg p-8 border border-border text-center">
              <p className="text-muted-foreground mb-4">
                {language === 'en' 
                  ? 'Detailed verse-by-verse tafsir for this Surah is being prepared.'
                  : 'Ibsi bal\'aa aayata aayataan suuraa kanaaf qophaa\'aa jira.'
                }
              </p>
              <p className="text-sm text-muted-foreground">
                {language === 'en'
                  ? 'Summary and key themes are available above.'
                  : 'Cuunfaa fi mata-dureewwan ijoo armaan olitti argamu.'
                }
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
