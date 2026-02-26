"use client";

import Link from "next/link";
import { BookOpen, ChevronRight } from "lucide-react";
import { useLanguage } from "@/components/LanguageSelector";
import { getAllExpandedSurahs } from "@/lib/data/expanded-surahs";

export default function TafsirPage() {
  const language = useLanguage();
  const surahs = getAllExpandedSurahs();

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-4xl mx-auto mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {language === 'en' ? 'Tafsir' : 'Tafsir'}
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 arabic-text text-primary">التفسير</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {language === 'en' 
              ? 'Explore the meanings and wisdom of the Quran through classical tafsir works including Tafsir Ibn Kathir and Tafsir al-Jalalayn'
              : 'Hiika fi ogummaa Qur\'aanaa hojii tafsir aadaa dabalatee Tafsir Ibn Kathir fi Tafsir al-Jalalayn keessaa qoradhu'
            }
          </p>
        </div>

        {/* Tafsir Sources */}
        <div className="max-w-4xl mx-auto mb-12">
          <h3 className="text-2xl font-bold mb-6">
            {language === 'en' ? 'Available Tafsir Sources' : 'Maddoota Tafsir Jiran'}
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card rounded-lg p-6 border border-border">
              <h4 className="text-xl font-semibold mb-2">Tafsir Ibn Kathir</h4>
              <p className="arabic-text text-primary mb-3">تفسير ابن كثير</p>
              <p className="text-sm text-muted-foreground">
                {language === 'en'
                  ? 'Comprehensive classical tafsir by Imam Ibn Kathir, known for its reliance on authentic hadith and scholarly interpretation'
                  : 'Tafsir aadaa bal\'aa Imam Ibn Kathir, hadith dhugaa fi ibsa ogeeyyii irratti hundaa\'uu isaatiin beekama'
                }
              </p>
            </div>
            <div className="bg-card rounded-lg p-6 border border-border">
              <h4 className="text-xl font-semibold mb-2">Tafsir al-Jalalayn</h4>
              <p className="arabic-text text-primary mb-3">تفسير الجلالين</p>
              <p className="text-sm text-muted-foreground">
                {language === 'en'
                  ? 'Concise and accessible tafsir by Jalal ad-Din al-Mahalli and Jalal ad-Din as-Suyuti, widely studied for its clarity'
                  : 'Tafsir gabaabaa fi dhaqqabamaa Jalal ad-Din al-Mahalli fi Jalal ad-Din as-Suyuti, ifa ta\'uu isaatiin bal\'inaan baratama'
                }
              </p>
            </div>
          </div>
        </div>

        {/* Surah List */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-6">
            {language === 'en' ? 'Browse by Surah' : 'Suuraadhaan Sakatta\'i'}
          </h3>
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
        </div>
      </div>
    </div>
  );
}
