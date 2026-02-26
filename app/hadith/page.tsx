import Link from "next/link";
import { Book, Search } from "lucide-react";

const collections = [
  {
    id: "bukhari",
    name: "Sahih al-Bukhari",
    nameAr: "صحيح البخاري",
    author: "Imam Muhammad al-Bukhari",
    hadithCount: "7,563",
    description: "The most authentic collection of hadith, compiled by Imam Bukhari. Known for its rigorous authentication standards.",
    topics: ["Faith", "Knowledge", "Prayer", "Zakat", "Fasting", "Hajj"]
  },
  {
    id: "muslim",
    name: "Sahih Muslim",
    nameAr: "صحيح مسلم",
    author: "Imam Muslim ibn al-Hajjaj",
    hadithCount: "7,190",
    description: "The second most authentic hadith collection, organized by legal topics with excellent chain verification.",
    topics: ["Faith", "Purification", "Prayer", "Charity", "Fasting", "Pilgrimage"]
  },
  {
    id: "riyadh",
    name: "Riyad as-Salihin",
    nameAr: "رياض الصالحين",
    author: "Imam an-Nawawi",
    hadithCount: "1,900+",
    description: "A collection focused on ethics, manners, and spiritual development. Excellent for daily reading and reflection.",
    topics: ["Sincerity", "Repentance", "Patience", "Truthfulness", "Good Character", "Remembrance"]
  }
];

const popularTopics = [
  "Prayer (Salah)",
  "Fasting (Sawm)",
  "Charity (Zakat)",
  "Good Character",
  "Seeking Knowledge",
  "Patience & Gratitude",
  "Family Relations",
  "Business Ethics"
];

export default function HadithPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-4xl mx-auto mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Hadith Collections</h1>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 arabic-text text-primary">الحديث النبوي</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore authentic sayings and actions of Prophet Muhammad ﷺ from the most trusted collections
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <input
              type="text"
              placeholder="Search hadith by topic, keyword, or narrator..."
              className="w-full pl-12 pr-4 py-4 rounded-lg border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>

        {/* Collections */}
        <div className="max-w-5xl mx-auto mb-12">
          <h3 className="text-2xl font-bold mb-6">Major Collections</h3>
          <div className="grid md:grid-cols-1 gap-6">
            {collections.map((collection) => (
              <Link
                key={collection.id}
                href={`/hadith/${collection.id}`}
                className="block bg-card rounded-lg p-8 border border-border hover:border-primary transition-colors group"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div className="mb-4 md:mb-0">
                    <h4 className="text-2xl font-bold group-hover:text-primary transition-colors mb-2">
                      {collection.name}
                    </h4>
                    <p className="arabic-text text-xl text-primary mb-2">{collection.nameAr}</p>
                    <p className="text-sm text-muted-foreground">by {collection.author}</p>
                  </div>
                  <div className="text-right">
                    <div className="inline-block px-4 py-2 bg-primary/10 rounded-full">
                      <span className="text-primary font-semibold">{collection.hadithCount} hadith</span>
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">{collection.description}</p>
                <div className="flex flex-wrap gap-2">
                  {collection.topics.map((topic) => (
                    <span
                      key={topic}
                      className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Popular Topics */}
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl font-bold mb-6">Browse by Topic</h3>
          <div className="bg-card rounded-lg p-8 border border-border">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {popularTopics.map((topic) => (
                <Link
                  key={topic}
                  href={`/hadith/topic/${topic.toLowerCase().replace(/\s+/g, '-')}`}
                  className="flex items-center p-4 rounded-lg hover:bg-secondary transition-colors group"
                >
                  <Book className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                  <span className="text-sm group-hover:text-primary transition-colors">{topic}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
