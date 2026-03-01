import { notFound } from "next/navigation";
import { getJuzByNumber } from "@/lib/data/juz";
import { getAllSurahs } from "@/lib/data/complete-surahs";
import JuzContent from "@/components/JuzContent";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function JuzDetailPage(props: PageProps) {
  const params = await props.params;
  const { id } = params;
  const juzNumber = parseInt(id);
  
  if (isNaN(juzNumber) || juzNumber < 1 || juzNumber > 30) {
    notFound();
  }
  
  const juz = getJuzByNumber(juzNumber);
  
  if (!juz) {
    notFound();
  }

  const allSurahs = getAllSurahs();
  const surahsInJuz = allSurahs.filter(
    s => s.number >= juz.startSurah && s.number <= juz.endSurah
  );

  return <JuzContent juz={juz} surahsInJuz={surahsInJuz} />;
}
