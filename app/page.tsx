import Link from "next/link";
import { BookOpen, Book, Moon, Users } from "lucide-react";

export default function Home() {
  const features = [
    {
      icon: BookOpen,
      title: "Tafsir",
      titleAr: "التفسير",
      description: "Explore classical Qur'anic exegesis with structured commentary from Ibn Kathir and Al-Jalalayn",
      href: "/tafsir",
      color: "from-emerald-500 to-teal-600"
    },
    {
      icon: Book,
      title: "Hadith Collections",
      titleAr: "الحديث",
      description: "Access authentic hadith from Sahih al-Bukhari, Sahih Muslim, and Riyad as-Salihin",
      href: "/hadith",
      color: "from-blue-500 to-indigo-600"
    },
    {
      icon: Moon,
      title: "Ramadan Fiqh",
      titleAr: "فقه رمضان",
      description: "Comprehensive guide to fasting rules, Laylatul Qadr, and Ramadan worship",
      href: "/ramadan",
      color: "from-purple-500 to-pink-600"
    },
    {
      icon: Users,
      title: "Women's Fiqh",
      titleAr: "فقه النساء",
      description: "Detailed rulings on purification, prayer, fasting, and family matters",
      href: "/womens-fiqh",
      color: "from-amber-500 to-orange-600"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 pattern-islamic">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-primary">
              نور العلم
            </h1>
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">
              Path of Knowledge
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              A comprehensive Islamic learning platform designed for students of knowledge. 
              Explore authentic sources with clarity and spiritual depth.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link 
                href="/tafsir"
                className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity font-semibold"
              >
                Start Learning
              </Link>
              <Link 
                href="/about"
                className="px-8 py-3 bg-secondary text-secondary-foreground rounded-lg hover:opacity-90 transition-opacity font-semibold"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Explore Our Sections</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Structured Islamic knowledge from authentic sources, organized for easy learning and reference
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {features.map((feature) => (
              <Link 
                key={feature.href}
                href={feature.href}
                className="group relative overflow-hidden rounded-xl bg-gradient-to-br p-[2px] hover:scale-[1.02] transition-transform"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity`} />
                <div className="relative bg-card rounded-xl p-8 h-full">
                  <feature.icon className="w-12 h-12 mb-4 text-primary" />
                  <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
                  <p className="arabic-text text-xl mb-4 text-primary">{feature.titleAr}</p>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 pattern-dots">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <blockquote className="text-2xl md:text-3xl font-semibold mb-6 arabic-text">
              طَلَبُ الْعِلْمِ فَرِيضَةٌ عَلَى كُلِّ مُسْلِمٍ
            </blockquote>
            <p className="text-lg text-muted-foreground">
              "Seeking knowledge is an obligation upon every Muslim"
            </p>
            <p className="text-sm text-muted-foreground mt-2">- Hadith (Ibn Majah)</p>
          </div>
        </div>
      </section>
    </div>
  );
}
