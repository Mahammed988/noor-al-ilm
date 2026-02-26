import Link from "next/link";
import { Moon, Star, BookOpen, HelpCircle } from "lucide-react";

export default function RamadanPage() {
  const sections = [
    {
      icon: BookOpen,
      title: "Fasting Rules & Obligations",
      href: "/ramadan/fasting-rules",
      description: "Complete guide to the fiqh of fasting including conditions, pillars, and nullifiers"
    },
    {
      icon: Moon,
      title: "Laylatul Qadr Guide",
      href: "/ramadan/laylatul-qadr",
      description: "Everything about the Night of Power - its virtues, signs, and recommended worship"
    },
    {
      icon: Star,
      title: "Zakat al-Fitr",
      href: "/ramadan/zakat-fitr",
      description: "Rules and calculations for the obligatory charity at the end of Ramadan"
    },
    {
      icon: HelpCircle,
      title: "Common Questions",
      href: "/ramadan/faq",
      description: "Answers to frequently asked questions about fasting and Ramadan"
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-4xl mx-auto mb-12 text-center">
          <div className="flex justify-center mb-6">
            <Moon className="w-16 h-16 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Ramadan Fiqh</h1>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 arabic-text text-primary">فقه رمضان</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive guidance on the rulings of fasting, Ramadan worship, and maximizing the blessed month
          </p>
        </div>

        {/* Hadith Quote */}
        <div className="max-w-3xl mx-auto mb-12 bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg p-8 border border-border">
          <blockquote className="text-center">
            <p className="arabic-text text-2xl mb-4 text-primary leading-loose">
              مَنْ صَامَ رَمَضَانَ إِيمَانًا وَاحْتِسَابًا غُفِرَ لَهُ مَا تَقَدَّمَ مِنْ ذَنْبِهِ
            </p>
            <p className="text-lg mb-2">
              "Whoever fasts Ramadan out of faith and seeking reward, his previous sins will be forgiven"
            </p>
            <cite className="text-sm text-muted-foreground">- Sahih al-Bukhari</cite>
          </blockquote>
        </div>

        {/* Main Sections */}
        <div className="max-w-5xl mx-auto mb-12">
          <div className="grid md:grid-cols-2 gap-6">
            {sections.map((section) => (
              <Link
                key={section.href}
                href={section.href}
                className="group bg-card rounded-lg p-8 border border-border hover:border-primary transition-all hover:shadow-lg"
              >
                <section.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {section.title}
                </h3>
                <p className="text-muted-foreground">{section.description}</p>
              </Link>
            ))}
          </div>
        </div>

        {/* Quick Tips */}
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl font-bold mb-6">Essential Ramadan Tips</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-card rounded-lg p-6 border border-border">
              <h4 className="font-semibold mb-3 text-primary">Before Fajr</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Eat suhoor (pre-dawn meal)</li>
                <li>• Make intention for fasting</li>
                <li>• Delay suhoor as much as possible</li>
                <li>• Make du'a before Fajr</li>
              </ul>
            </div>
            <div className="bg-card rounded-lg p-6 border border-border">
              <h4 className="font-semibold mb-3 text-primary">During the Day</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Increase Quran recitation</li>
                <li>• Make abundant dhikr</li>
                <li>• Guard your tongue and actions</li>
                <li>• Give charity generously</li>
              </ul>
            </div>
            <div className="bg-card rounded-lg p-6 border border-border">
              <h4 className="font-semibold mb-3 text-primary">After Maghrib</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Break fast with dates and water</li>
                <li>• Make du'a at time of iftar</li>
                <li>• Pray Maghrib promptly</li>
                <li>• Attend Taraweeh prayers</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
