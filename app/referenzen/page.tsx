"use client";

import React, { useState } from "react";
import Link from "next/link"; // Hinzugefügt für die Verlinkung
import { Phone, Mail, ArrowRight } from "lucide-react"; // Icons für den CTA

// Diese Liste enthält deine 10 Projekte. 
const allProjects = [
  { title: "Fassadenreinigung Zentrum", before: "/images/fassade1-vor.jpg", after: "/images/fassade1-nach.jpg" },
  { title: "Industrieboden Halle A", before: "/images/boden1-vor.jpg", after: "/images/boden1-nach.jpg" },
  { title: "Glasreinigung Bürokomplex", before: "/images/glas-vor.jpg", after: "/images/glas-nach.jpg" },
  { title: "Treppenhaus Sanierung", before: "/images/treppe-vor.jpg", after: "/images/treppe-nach.jpg" },
  { title: "Dachreinigung EFH", before: "/images/dach-vor.jpg", after: "/images/dach-nach.jpg" },
  { title: "Winterdienst Parkplatz", before: "/images/winter1-vor.jpg", after: "/images/winter1-nach.jpg" },
  { title: "Graffitientfernung Altstadt", before: "/images/graffiti-vor.jpg", after: "/images/graffiti-nach.jpg" },
  { title: "Teppichbodenreinigung", before: "/images/teppich-vor.jpg", after: "/images/teppich-nach.jpg" },
  { title: "Solaranlagen Reinigung", before: "/images/solar-vor.jpg", after: "/images/solar-nach.jpg" },
];

const SliderItem = ({ before, after, title }: { before: string, after: string, title: string }) => {
  const [sliderPos, setSliderPos] = useState(50);

  const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
    const container = e.currentTarget.getBoundingClientRect();
    const x = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const position = ((x - container.left) / container.width) * 100;
    setSliderPos(Math.max(0, Math.min(100, position)));
  };

  return (
    <div className="w-full">
      <div 
        className="relative aspect-[4/3] overflow-hidden rounded-lg border border-gray-200 shadow-sm cursor-ew-resize select-none touch-none"
        onMouseMove={handleMove}
        onTouchMove={handleMove}
      >
        <img src={after} alt="Nachher" className="absolute inset-0 w-full h-full object-cover" />
        <div 
          className="absolute inset-0 w-full h-full overflow-hidden border-r-2 border-white" 
          style={{ width: `${sliderPos}%` }}
        >
          <img src={before} alt="Vorher" className="absolute inset-0 w-full h-full object-cover max-w-none" />
        </div>

        <div className="absolute top-2 left-2 bg-black/50 text-[10px] text-white px-2 py-0.5 uppercase font-bold rounded">Vorher</div>
        <div className="absolute top-2 right-2 bg-red-600 text-[10px] text-white px-2 py-0.5 uppercase font-bold rounded">Nachher</div>

        <div className="absolute inset-y-0" style={{ left: `${sliderPos}%`, transform: 'translateX(-50%)' }}>
          <div className="h-full w-0.5 bg-white flex items-center justify-center">
            <div className="w-6 h-6 bg-white rounded-full shadow-md flex items-center justify-center">
              <div className="flex gap-0.5">
                <div className="w-[1.5px] h-2 bg-red-600"></div>
                <div className="w-[1.5px] h-2 bg-red-600"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h3 className="mt-3 text-[13px] font-bold uppercase italic text-gray-800 text-center tracking-tight">
        {title}
      </h3>
    </div>
  );
};

export default function ReferenzenPage() {
  return (
    <section className="pt-32 pb-12 bg-white min-h-screen">
      <div className="container mx-auto px-20">
        {/* Header-Bereich */}
        <div className="flex flex-col items-center mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold italic uppercase tracking-tighter">
            Unsere Referenzen
          </h1>
          <div className="h-1.5 w-20 bg-red-600 mt-4"></div>
          <p className="text-gray-500 mt-6 max-w-2xl uppercase text-xs font-bold tracking-[0.2em]">
            Visuelle Beweise unserer täglichen Arbeit in Recklinghausen & Umgebung
          </p>
        </div>

        {/* 10er Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 max-w-6xl mx-auto mb-20">
          {allProjects.map((project, i) => (
            <SliderItem key={i} {...project} />
          ))}
        </div>

        {/* CTA SECTION - Direkt unter der Galerie */}
        <div className="max-w-5xl mx-auto rounded-3xl p-8 md:p-16 text-center text-blackshadow-2xl overflow-hidden relative">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold italic uppercase mb-4 tracking-tighter">
              Ihr Projekt ist unser <span className="text-red-600">nächster Erfolg</span>
            </h2>
            <p className="text-black mb-10 max-w-xl mx-auto text-sm md:text-base">
              Haben Sie eine ähnliche Herausforderung? Lassen Sie uns gemeinsam für Sauberkeit und Werterhalt sorgen.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link 
                href="/#kontakt" 
                className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white px-8 py-4 font-bold uppercase italic transition-all flex items-center justify-center gap-2 group"
              >
                Kostenlose Anfrage
              
              </Link>
              
              <a 
                href="tel:+49123456789" 
                className="w-full sm:w-auto border-2 border-red-600 hover:border text-black px-8 py-4 font-bold uppercase italic transition-all flex items-center justify-center gap-2"
              >
                <Phone size={18} />
                Jetzt anrufen
              </a>
            </div>
          </div>
          
          {/* Dezenter Hintergrund-Effekt */}
        
        </div>
      </div>
    </section>
  );
}