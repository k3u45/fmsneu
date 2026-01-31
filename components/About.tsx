"use client";
import React from "react";
import { CheckCircle2 } from "lucide-react";

export default function About() {
  return (
    <section id="About" className="py-24 bg-white text-black">
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Text Bereich */}
        <div>
          <span className="text-red-600 font-bold uppercase tracking-[0.2em] text-sm italic">
            Unsere Geschichte
          </span>
          <h2 className="text-4xl md:text-5xl font-black mt-4 mb-8 leading-tight">
            MEISTERBETRIEB AUS <br />
            <span className="text-red-600 uppercase">RECKLINGHAUSEN</span>
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed mb-8">
            FMS Service steht für Zuverlässigkeit, Präzision und norddeutsche Gründlichkeit. 
            Was als kleiner Fachbetrieb begann, hat sich zu einem Full-Service-Partner 
            für Sanierung und Reinigung entwickelt. Unser Ziel ist nicht nur Sauberkeit, 
            sondern der langfristige Werterhalt Ihrer Immobilie.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Ehrliches Handwerk",
              "Pünktliche Ausführung",
              "Moderne Ausrüstung",
              "Festpreis-Garantie"
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <CheckCircle2 className="text-red-600" size={20} />
                <span className="font-bold text-sm uppercase">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Info Box / Bild Platzhalter */}
        <div className="relative">
          <div className="border-2 border-red-600 p-8 md:p-12 relative z-10 bg-white">
            <h3 className="text-6xl font-black text-red-600 mb-2 italic">10+</h3>
            <p className="text-xl text-black font-bold uppercase tracking-widest mb-4">Jahre Erfahrung</p>
            <p className="text-gray-400">
              In über einem Jahrzehnt haben wir hunderte Projekte erfolgreich abgeschlossen. 
              Wir kennen die Herausforderungen im Revier und finden für jeden Kunden 
              die passende Lösung.
            </p>
          </div>
        
        </div>
      </div>
    </section>
  );
}