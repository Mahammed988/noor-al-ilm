import { Star, Moon, Heart, Clock } from "lucide-react";

export default function LaylatulQadrPage() {
  const signs = [
    "A peaceful, tranquil night",
    "Neither hot nor cold temperature",
    "A bright night with a sense of illumination",
    "Calm winds without disturbance",
    "The sun rises without strong rays the next morning",
    "A feeling of serenity and spiritual peace"
  ];

  const worship = [
    {
      title: "Quran Recitation",
      description: "Recite and reflect on the Quran with understanding",
      arabic: "قراءة القرآن"
    },
    {
      title: "Night Prayer (Qiyam)",
      description: "Stand in prayer for extended periods",
      arabic: "قيام الليل"
    },
    {
      title: "Du'a and Supplication",
      description: "Make abundant du'a, especially the recommended one",
      arabic: "الدعاء"
    },
    {
      title: "Dhikr (Remembrance)",
      description: "Engage in remembrance of Allah",
      arabic: "الذكر"
    },
    {
      title: "Seeking Forgiveness",
      description: "Ask Allah for forgiveness repeatedly",
      arabic: "الاستغفار"
    },
    {
      title: "Charity",
      description: "Give in charity for the sake of Allah",
      arabic: "الصدقة"
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <Star className="w-16 h-16 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Laylatul Qadr</h1>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 arabic-text text-primary">ليلة القدر</h2>
            <p className="text-xl text-muted-foreground">The Night of Power</p>
          </div>

          {/* Quranic Verse */}
          <div className="mb-12 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg p-8 border border-primary/20">
            <div className="arabic-text text-3xl mb-6 leading-loose text-center text-primary">
              إِنَّا أَنزَلْنَاهُ فِي لَيْلَةِ الْقَدْرِ ۝ وَمَا أَدْرَاكَ مَا لَيْلَةُ الْقَدْرِ ۝ لَيْلَةُ الْقَدْرِ خَيْرٌ مِّنْ أَلْفِ شَهْرٍ
            </div>
            <p className="text-center text-lg italic">
              "Indeed, We sent it down during the Night of Decree. And what can make you know what is the Night of Decree? 
              The Night of Decree is better than a thousand months."
            </p>
            <p className="text-center text-sm text-muted-foreground mt-2">- Surah Al-Qadr (97:1-3)</p>
          </div>

          {/* Virtues */}
          <section className="mb-12 bg-card rounded-lg p-8 border border-border">
            <div className="flex items-center mb-6">
              <Heart className="w-6 h-6 text-primary mr-3" />
              <h3 className="text-2xl font-bold">Virtues & Significance</h3>
            </div>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Laylatul Qadr is the most blessed night of the year, better than 1,000 months (over 83 years) of worship. 
                It was the night when the Quran began to be revealed to Prophet Muhammad ﷺ.
              </p>
              <p>
                Worship performed on this night is multiplied tremendously, and sincere supplication is more likely to be accepted. 
                The Prophet ﷺ said: "Whoever stands in prayer during Laylatul Qadr with faith and seeking reward, 
                his previous sins will be forgiven."
              </p>
              <p className="font-semibold text-foreground">
                It occurs in the last ten nights of Ramadan, most likely on the odd nights (21st, 23rd, 25th, 27th, or 29th).
              </p>
            </div>
          </section>

          {/* Signs */}
          <section className="mb-12 bg-card rounded-lg p-8 border border-border">
            <div className="flex items-center mb-6">
              <Moon className="w-6 h-6 text-primary mr-3" />
              <h3 className="text-2xl font-bold">Signs of Laylatul Qadr</h3>
            </div>
            <p className="text-muted-foreground mb-6">
              While the exact night is not definitively known, scholars have mentioned several signs:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {signs.map((sign, index) => (
                <div key={index} className="flex items-start p-4 bg-secondary/30 rounded-lg">
                  <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                  <span className="text-sm">{sign}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Recommended Du'a */}
          <section className="mb-12 bg-gradient-to-br from-accent/10 to-primary/10 rounded-lg p-8 border border-border">
            <h3 className="text-2xl font-bold mb-6 text-center">The Recommended Du'a</h3>
            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-4">
                Aisha (may Allah be pleased with her) asked the Prophet ﷺ: "If I know which night is Laylatul Qadr, what should I say?" 
                He replied:
              </p>
              <div className="arabic-text text-3xl mb-4 text-primary leading-loose">
                اللَّهُمَّ إِنَّكَ عَفُوٌّ تُحِبُّ الْعَفْوَ فَاعْفُ عَنِّي
              </div>
              <p className="text-xl mb-2 font-semibold">
                Allahumma innaka 'afuwwun tuhibbul 'afwa fa'fu 'anni
              </p>
              <p className="text-lg italic text-muted-foreground">
                "O Allah, You are Forgiving and love forgiveness, so forgive me"
              </p>
              <p className="text-sm text-muted-foreground mt-4">- Tirmidhi, Ibn Majah</p>
            </div>
          </section>

          {/* Acts of Worship */}
          <section className="mb-12">
            <div className="flex items-center mb-6">
              <Clock className="w-6 h-6 text-primary mr-3" />
              <h3 className="text-2xl font-bold">Recommended Acts of Worship</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {worship.map((act, index) => (
                <div key={index} className="bg-card rounded-lg p-6 border border-border">
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="font-semibold text-lg">{act.title}</h4>
                    <span className="arabic-text text-primary">{act.arabic}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{act.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Practical Schedule */}
          <section className="bg-card rounded-lg p-8 border border-border">
            <h3 className="text-2xl font-bold mb-6">Suggested Nightly Schedule</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="inline-block w-24 font-semibold text-primary flex-shrink-0">After Iftar</span>
                <span className="text-muted-foreground">Pray Maghrib, rest briefly, prepare for night worship</span>
              </div>
              <div className="flex items-start">
                <span className="inline-block w-24 font-semibold text-primary flex-shrink-0">After Isha</span>
                <span className="text-muted-foreground">Pray Taraweeh, make du'a, recite Quran</span>
              </div>
              <div className="flex items-start">
                <span className="inline-block w-24 font-semibold text-primary flex-shrink-0">Late Night</span>
                <span className="text-muted-foreground">Perform Tahajjud prayer, make abundant du'a and dhikr</span>
              </div>
              <div className="flex items-start">
                <span className="inline-block w-24 font-semibold text-primary flex-shrink-0">Before Fajr</span>
                <span className="text-muted-foreground">Seek forgiveness, make final du'as, eat suhoor</span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
