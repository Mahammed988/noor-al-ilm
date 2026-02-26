import { BookOpen, Heart, Users, Shield } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">About نور العلم</h1>
          <p className="text-xl text-center text-muted-foreground mb-12">Path of Knowledge</p>

          <div className="prose prose-lg max-w-none">
            <div className="bg-card rounded-lg p-8 border border-border mb-8">
              <p className="text-lg text-muted-foreground leading-relaxed">
                نور العلم (Noor al-Ilm) - Path of Knowledge is a comprehensive Islamic learning platform 
                dedicated to making authentic Islamic knowledge accessible to students of knowledge at all levels. 
                Our mission is to provide structured, reliable, and spiritually enriching content from the Quran and Sunnah.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="bg-card rounded-lg p-6 border border-border">
                <BookOpen className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">Our Mission</h3>
                <p className="text-muted-foreground">
                  To facilitate the seeking of beneficial Islamic knowledge through organized, authentic sources 
                  and clear presentation, making it easy for Muslims to learn and practice their faith.
                </p>
              </div>

              <div className="bg-card rounded-lg p-6 border border-border">
                <Heart className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">Our Approach</h3>
                <p className="text-muted-foreground">
                  We present Islamic knowledge with spiritual depth, clarity, and authenticity, following 
                  mainstream Sunni scholarship and classical sources while maintaining accessibility for modern learners.
                </p>
              </div>

              <div className="bg-card rounded-lg p-6 border border-border">
                <Users className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">Who We Serve</h3>
                <p className="text-muted-foreground">
                  Students of knowledge from beginners to intermediate levels, seeking structured learning 
                  in Tafsir, Hadith, Fiqh, and Islamic sciences with authentic references.
                </p>
              </div>

              <div className="bg-card rounded-lg p-6 border border-border">
                <Shield className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">Our Sources</h3>
                <p className="text-muted-foreground">
                  All content is derived from the Quran, authentic Hadith collections, and classical scholarly 
                  works including Tafsir Ibn Kathir, Sahih al-Bukhari, Sahih Muslim, and other trusted sources.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg p-8 border border-border">
              <h3 className="text-2xl font-bold mb-4 text-center">Our Commitment</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  We are committed to presenting Islamic knowledge with accuracy, respect for scholarly tradition, 
                  and sensitivity to the needs of contemporary Muslims. Every piece of content is carefully researched 
                  and referenced to authentic sources.
                </p>
                <p>
                  This platform is created for the sake of Allah, seeking His pleasure and the benefit of the Muslim ummah. 
                  We ask Allah to make this a source of beneficial knowledge and to accept it from us.
                </p>
                <p className="text-center arabic-text text-2xl text-primary mt-6">
                  رَبَّنَا تَقَبَّلْ مِنَّا إِنَّكَ أَنتَ السَّمِيعُ الْعَلِيمُ
                </p>
                <p className="text-center italic">
                  "Our Lord, accept this from us. Indeed, You are the Hearing, the Knowing"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
