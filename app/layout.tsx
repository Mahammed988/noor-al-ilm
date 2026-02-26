import type { Metadata } from "next";
import { Amiri, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const amiri = Amiri({ 
  weight: ["400", "700"],
  subsets: ["arabic", "latin"],
  variable: "--font-amiri"
});

export const metadata: Metadata = {
  title: "نور العلم - Path of Knowledge | Islamic Learning Platform",
  description: "A comprehensive Islamic learning platform featuring Tafsir, Hadith collections, Ramadan Fiqh, and Women's Fiqh",
  keywords: "Islamic learning, Tafsir, Hadith, Ramadan, Fiqh, Quran, Islamic education",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${amiri.variable} antialiased`}>
        <ThemeProvider>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
