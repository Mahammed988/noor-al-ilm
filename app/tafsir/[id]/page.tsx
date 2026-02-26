import { notFound } from "next/navigation";
import { getAllSurahs } from "@/lib/data/complete-surahs";
import SurahContent from "@/components/SurahContent";

// Enable dynamic rendering for routes not pre-generated
export const dynamicParams = true;

// Tell Next.js to generate all Surah pages at build time
export function generateStaticParams() {
  return Array.from({ length: 114 }, (_, i) => ({
    id: String(i + 1)
  }));
}

export default function SurahPage({ params }: { params: { id: string } }) {
  const allSurahs = getAllSurahs();
  const surahNumber = parseInt(params.id);
  
  // Validate surah number
  if (isNaN(surahNumber) || surahNumber < 1 || surahNumber > 114) {
    notFound();
  }
  
  const surah = allSurahs.find(s => s.number === surahNumber);

  if (!surah) {
    notFound();
  }

  // Sample verses for Al-Fatihah (you can expand this)
  const sampleVerses = params.id === "1" ? [
    {
      number: 1,
      arabic: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
      translation: {
        en: "In the name of Allah, the Most Gracious, the Most Merciful",
        om: "Maqaa Rabbii, Araaraa Guddaa, Araaraa Dhugaa"
      },
      tafsir: {
        en: "This verse establishes the foundation of beginning every action with Allah's name, invoking His mercy and compassion. The two names Ar-Rahman and Ar-Rahim emphasize Allah's encompassing mercy.",
        om: "Aayanni kun bu'uura hojii hunda maqaa Rabbiitiin jalqabuu, araaraa fi gara laafina Isaa kadhachuu hundeessa. Maqoonni lamaan Ar-Rahman fi Ar-Rahim araaraa Rabbii bal'aa ta'e cimsanii agarsiisu."
      }
    },
    {
      number: 5,
      arabic: "إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ",
      translation: {
        en: "You alone we worship, and You alone we ask for help",
        om: "Si qofa waaqeffanna, Si qofa gargaarsa kadhanna"
      },
      tafsir: {
        en: "This verse represents the core of Islamic monotheism (Tawhid). It combines both worship and reliance solely on Allah, rejecting all forms of shirk (associating partners with Allah).",
        om: "Aayanni kun bu'uura Rabbii tokkicha ta'uu Islaamaa (Tawhid) bakka bu'a. Waaqeffannaa fi Rabbitti amanachuu qofa walitti makuun, bifa shirka (Rabbitti waan biraa makuu) hunda dida."
      }
    },
    {
      number: 6,
      arabic: "اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ",
      translation: {
        en: "Guide us to the straight path",
        om: "Karaa qajeelaa nuuf agarsiisi"
      },
      tafsir: {
        en: "The straight path refers to Islam and the way of those who follow Allah's guidance. This is a continuous supplication that Muslims make in every prayer, acknowledging constant need for Allah's guidance.",
        om: "Karaan qajeelaan Islaama fi karaa warra qajeelfama Rabbii hordofan agarsiisa. Kun kadhannaa Musliimoonni salaata hunda keessatti godhan yoo ta'u, barbaachisummaa qajeelfama Rabbii yeroo hunda akka barbaachisu beekuu dha."
      }
    }
  ] : [];

  return <SurahContent surah={surah} sampleVerses={sampleVerses} />;
}
