"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star, ShieldCheck } from "lucide-react";

// Kompakter Google-Brand für die Karten
const GoogleBrandSmall = () => (
  <div className="flex items-center gap-1">
    <svg width="14" height="14" viewBox="0 0 24 24">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Google</span>
  </div>
);

const reviews = [
  { name: "Thomas Müller", text: "Hervorragende Arbeit bei der Sanierung. Pünktlich & sauber.", stars: 5, color: "bg-[#EA4335]", initials: "TM" },
  { name: "Sabine Weber", text: "Der Winterdienst ist absolut zuverlässig. Top Service!", stars: 3, color: "bg-[#4285F4]", initials: "SW" },
  { name: "Jan Kirchhoff", text: "Gründliche Gebäudereinigung. Kommunikation ist 1A.", stars: 4, color: "bg-[#34A853]", initials: "JK" },
  { name: "Lena Schmidt", text: "Sehr freundliche Mitarbeiter. Gerne wieder!", stars: 5, color: "bg-[#FBBC05]", initials: "LS" },
];

// Liste für nahtlosen Übergang verdreifachen
const doubledReviews = [...reviews, ...reviews, ...reviews];

export default function TrustBanner() {
  return (
    <section className="py-8 bg-white  overflow-hidden">
      <div className="relative flex">
        <motion.div 
          className="flex gap-6 items-center"
          animate={{ x: ["0%", "-33.33%"] }}
          transition={{ 
            ease: "linear", 
            duration: 25, // Geschwindigkeit
            repeat: Infinity 
          }}
          whileHover={{ transition: { duration: 60 } }} // Verlangsamt sich bei Hover (optional)
        >
          {doubledReviews.map((review, i) => (
            <div 
              key={i} 
              className="w-[300px] flex-shrink-0 bg-white border border-[#dadce0] rounded-xl p-5 shadow-sm"
            >
              {/* Header in der Karte */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <div className={`w-8 h-8 rounded-full ${review.color} flex items-center justify-center text-white font-bold text-xs`}>
                    {review.initials}
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-center gap-1">
                      <span className="font-bold text-xs text-gray-900">{review.name}</span>
                      <ShieldCheck size={12} className="text-[#4285F4]" />
                    </div>
                  </div>
                </div>
                <GoogleBrandSmall />
              </div>

              {/* Sterne */}
              <div className="flex gap-0.5 mb-2">
                {[...Array(5)].map((_, s) => (
                  <Star key={s} size={12} fill="#FBBC05" stroke="none" />
                ))}
              </div>

              {/* Text */}
              <p className="text-[13px] text-gray-600 leading-snug line-clamp-2 italic">
                "{review.text}"
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}