import { notFound } from "next/navigation";
import { getAllSurahs } from "@/lib/data/complete-surahs";
import SurahContent from "@/components/SurahContent";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function SurahPage(props: PageProps) {
  const params = await props.params;
  const { id } = params;
  const allSurahs = getAllSurahs();
  const surahNumber = parseInt(id);
  
  if (isNaN(surahNumber) || surahNumber < 1 || surahNumber > 114) {
    notFound();
  }
  
  const surah = allSurahs.find(s => s.number === surahNumber);

  if (!surah) {
    notFound();
  }

  const sampleVerses = id === "1" ? [
    {
      number: 1,
      arabic: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
      translation: {
        en: "In the name of Allah, the Most Gracious, the Most Merciful",
        om: "Maqaa Rabbii, Araaraa Guddaa, Araaraa Dhugaa"
      },
      tafsir: {
        en: "This verse establishes the foundation of beginning every action with Allah's name, invoking His mercy and compassion.",
        om: "Aayanni kun bu'uura hojii hunda maqaa Rabbiitiin jalqabuu hundeessa."
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
        en: "This verse represents the core of Islamic monotheism (Tawhid).",
        om: "Aayanni kun bu'uura Rabbii tokkicha ta'uu Islaamaa (Tawhid) bakka bu'a."
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
        en: "The straight path refers to Islam and the way of those who follow Allah's guidance.",
        om: "Karaan qajeelaan Islaama fi karaa warra qajeelfama Rabbii hordofan agarsiisa."
      }
    }
  ] : [];

  return <SurahContent surah={surah} sampleVerses={sampleVerses} />;
}
