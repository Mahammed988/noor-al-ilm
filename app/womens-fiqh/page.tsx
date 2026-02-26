import Link from "next/link";
import { Droplets, HandHeart, Moon, Users, BookOpen, HelpCircle } from "lucide-react";

export default function WomensFiqhPage() {
  const sections = [
    {
      icon: Droplets,
      title: "Taharah (Purification)",
      href: "/womens-fiqh/taharah",
      description: "Rules of purification, wudu, ghusl, and related matters specific to women",
      topics: ["Menstruation", "Post-natal bleeding", "Istihadah", "Ghusl", "Wudu"]
    },
    {
      icon: HandHeart,
      title: "Salah (Prayer)",
      href: "/womens-fiqh/salah",
      description: "Prayer rulings for women including congregation, leading prayer, and special circumstances",
      topics: ["Prayer during menses", "Congregation", "Jumu'ah", "Eid prayers", "Clothing"]
    },
    {
      icon: Moon,
      title: "Fasting",
      href: "/womens-fiqh/fasting",
      description: "Fasting rules including exemptions, making up missed fasts, and pregnancy-related issues",
      topics: ["Menstruation", "Pregnancy", "Breastfeeding", "Making up fasts", "Fidyah"]
    },
    {
      icon: Users,
      title: "Marriage & Family",
      href: "/womens-fiqh/family",
      description: "Islamic guidance on marriage, family relations, and women's rights",
      topics: ["Marriage rights", "Divorce", "Custody", "Inheritance", "Family relations"]
    },
    {
      icon: BookOpen,
      title: "Modesty & Dress",
      href: "/womens-fiqh/modesty",
      description: "Guidelines on hijab, appropriate dress, and interaction with non-mahrams",
      topics: ["Hijab requirements", "Awrah", "Interaction guidelines", "Adornment"]
    },
    {
      icon: HelpCircle,
      title: "Common Questions",
      href: "/womens-fiqh/faq",
      description: "Answers to frequently asked questions about women's fiqh issues",
      topics: ["Prayer", "Fasting", "Hajj", "Daily life", "Worship"]
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-4xl mx-auto mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Women's Fiqh</h1>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 arabic-text text-primary">فقه النساء</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive Islamic rulings and guidance specifically addressing matters relevant to Muslim women
          </p>
        </div>

        {/* Introduction */}
        <div className="max-w-4xl mx-auto mb-12 bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg p-8 border border-border">
          <h3 className="text-xl font-semibold mb-4">About This Section</h3>
          <p className="text-muted-foreground mb-4">
            This section provides authentic Islamic rulings on matters specific to women, drawn from the Quran, 
            Sunnah, and the understanding of classical scholars. Topics are organized to address common questions 
            and situations that Muslim women encounter in their daily worship and life.
          </p>
          <p className="text-muted-foreground">
            All rulings are based on mainstream Sunni scholarship, with references to evidence where applicable. 
            For complex personal situations, we always recommend consulting a qualified local scholar.
          </p>
        </div>

        {/* Main Sections */}
        <div className="max-w-5xl mx-auto mb-12">
          <h3 className="text-2xl font-bold mb-6">Browse Topics</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {sections.map((section) => (
              <Link
                key={section.href}
                href={section.href}
                className="group bg-card rounded-lg p-6 border border-border hover:border-primary transition-all hover:shadow-lg"
              >
                <div className="flex items-start mb-4">
                  <section.icon className="w-10 h-10 text-primary mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {section.title}
                    </h4>
                    <p className="text-sm text-muted-foreground mb-4">{section.description}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {section.topics.map((topic) => (
                    <span
                      key={topic}
                      className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-xs"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Quick Reference */}
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl font-bold mb-6">Quick Reference Guide</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-card rounded-lg p-6 border border-border">
              <h4 className="font-semibold mb-4 text-primary">During Menstruation</h4>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="font-medium mb-1">Not Required:</p>
                  <ul className="text-muted-foreground space-y-1">
                    <li>• Salah (prayer)</li>
                    <li>• Fasting</li>
                    <li>• Tawaf around Ka'bah</li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium mb-1">Still Encouraged:</p>
                  <ul className="text-muted-foreground space-y-1">
                    <li>• Dhikr & du'a</li>
                    <li>• Listening to Quran</li>
                    <li>• Seeking knowledge</li>
                    <li>• Charity</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg p-6 border border-border">
              <h4 className="font-semibold mb-4 text-primary">Prayer Exemptions</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>Women are exempt from:</p>
                <ul className="space-y-1">
                  <li>• Jumu'ah (Friday prayer)</li>
                  <li>• Congregation in masjid</li>
                  <li>• Prayer during menses</li>
                  <li>• Prayer during post-natal bleeding</li>
                </ul>
                <p className="mt-3 text-xs">
                  Note: Exemption doesn't mean prohibition. Women may attend if they wish and it's safe.
                </p>
              </div>
            </div>

            <div className="bg-card rounded-lg p-6 border border-border">
              <h4 className="font-semibold mb-4 text-primary">Making Up Missed Acts</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p className="font-medium text-foreground">Must Make Up:</p>
                <ul className="space-y-1 mb-3">
                  <li>• Missed fasts from Ramadan</li>
                  <li>• Obligatory prayers (if missed for valid reason)</li>
                </ul>
                <p className="font-medium text-foreground">No Make Up Required:</p>
                <ul className="space-y-1">
                  <li>• Prayers missed during menses</li>
                  <li>• Fasts during menses</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
