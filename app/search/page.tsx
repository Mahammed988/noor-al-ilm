"use client";

import { useState } from "react";
import { Search } from "lucide-react";

export default function SearchPage() {
  const [query, setQuery] = useState("");

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center">Search</h1>
          
          <div className="relative mb-12">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-6 h-6" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search across all sections..."
              className="w-full pl-14 pr-4 py-4 text-lg rounded-lg border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary"
              autoFocus
            />
          </div>

          {query ? (
            <div className="text-center text-muted-foreground">
              <p>Search functionality will be implemented with backend integration.</p>
              <p className="mt-2">Searching for: <span className="font-semibold text-foreground">{query}</span></p>
            </div>
          ) : (
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold mb-3">Popular Searches</h3>
                <div className="flex flex-wrap gap-2">
                  {["Prayer times", "Fasting rules", "Zakat calculation", "Tafsir Al-Fatihah", "Laylatul Qadr"].map((term) => (
                    <button
                      key={term}
                      onClick={() => setQuery(term)}
                      className="px-4 py-2 bg-secondary rounded-full text-sm hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      {term}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-3">Search Tips</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Use specific keywords for better results</li>
                  <li>• Search by Surah name, hadith topic, or fiqh ruling</li>
                  <li>• Try Arabic terms for more authentic sources</li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
