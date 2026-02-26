import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="font-bold text-lg mb-4">نور العلم</h3>
            <p className="text-sm text-muted-foreground">
              A comprehensive Islamic learning platform dedicated to authentic knowledge from the Quran and Sunnah.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/tafsir" className="text-muted-foreground hover:text-primary">Tafsir</Link></li>
              <li><Link href="/hadith" className="text-muted-foreground hover:text-primary">Hadith</Link></li>
              <li><Link href="/ramadan" className="text-muted-foreground hover:text-primary">Ramadan</Link></li>
              <li><Link href="/womens-fiqh" className="text-muted-foreground hover:text-primary">Women's Fiqh</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="text-muted-foreground hover:text-primary">About Us</Link></li>
              <li><Link href="/methodology" className="text-muted-foreground hover:text-primary">Methodology</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-primary">Contact</Link></li>
              <li><Link href="/privacy" className="text-muted-foreground hover:text-primary">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Join our community of knowledge seekers
            </p>
            <div className="arabic-text text-primary text-lg">
              بارك الله فيكم
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} نور العلم - Path of Knowledge. All rights reserved.</p>
          <p className="mt-2">For the sake of Allah, seeking beneficial knowledge</p>
        </div>
      </div>
    </footer>
  );
}
