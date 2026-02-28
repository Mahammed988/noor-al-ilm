import { notFound } from "next/navigation";
import { getJuzByNumber, getAllJuz } from "@/lib/data/juz";
import { getAllSurahs } from "@/lib/data/complete-surahs";
import JuzContent from "@/components/JuzContent";

export const dynamic = 'force-dynamic';

export default async function JuzDetailPage({ 
  params 
}: { 
  params: Promise<{ id: string }> 
}) {
  const { id } = await params;
  const juzNumber = parseInt(id);
  
  // Validate juz number
  if (isNaN(juzNumber) || juzNumber < 1 || juzNumber > 30) {
    notFound();
  }
  
  const juz = getJuzByNumber(juzNumber);
  
  if (!juz) {
    notFound();
  }

  // Get all surahs to display which ones are in this Juz
  const allSurahs = getAllSurahs();
  const surahsInJuz = allSurahs.filter(
    s => s.number >= juz.startSurah && s.number <= juz.endSurah
  );

  return <JuzContent juz={juz} surahsInJuz={surahsInJuz} />;
}
