"use client";

import React, { useState } from "react";
import Link from "next/link";

const highlights = [
  {
    title: "Winterdienst",
    before: "/vorhernachher/winterdienstnacher.png",
    after: "/vorhernachher/winterdienstvorher.png",
  },
  {
    title: "Treppenreinigung",
    after: "/vorhernachher/treppenhausvorher.png",
    before: "/vorhernachher/treppenhausnacher.png",
  }
];

const SmallSlider = ({ before, after, title }: any) => {
  const [sliderPos, setSliderPos] = useState(50);

  const handleMove = (e: any) => {
    const container = e.currentTarget.getBoundingClientRect();
    const x = e.touches ? e.touches[0].clientX : e.clientX;
    const position = ((x - container.left) / container.width) * 100;
    setSliderPos(Math.max(0, Math.min(100, position)));
  };

  return (
    <div className="w-full max-w-[450px] mx-auto">
      <div 
        className="relative aspect-[4/3] overflow-hidden rounded-lg border border-gray-200 shadow-sm cursor-ew-resize select-none touch-none"
        onMouseMove={handleMove}
        onTouchMove={handleMove}
      >
        <img src={after} alt="Nachher" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 w-full h-full overflow-hidden border-r-2 border-white" style={{ width: `${sliderPos}%` }}>
          <img src={before} alt="Vorher" className="absolute inset-0 w-[90vw] md:w-[450px] h-full object-cover max-w-none" />
        </div>
        <div className="absolute top-2 left-2 bg-black/50 text-[10px] text-white px-2 py-0.5 uppercase font-bold rounded">Vorher</div>
        <div className="absolute top-2 right-2 bg-red-600 text-[10px] text-white px-2 py-0.5 uppercase font-bold rounded">Nacher</div>
        <div className="absolute inset-y-0" style={{ left: `${sliderPos}%`, transform: 'translateX(-50%)' }}>
          <div className="h-full w-0.5 bg-white flex items-center justify-center">
             <div className="w-6 h-6 bg-white rounded-full shadow-md flex items-center justify-center">
                <div className="flex gap-0.5"><div className="w-0.5 h-2 bg-red-600"></div><div className="w-0.5 h-2 bg-red-600"></div></div>
             </div>
          </div>
        </div>
      </div>
      <h3 className="mt-3 text-sm font-bold uppercase italic text-center text-gray-800">{title}</h3>
    </div>
  );
};

export default function VorherNachherTeaser() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center mb-10 text-center">
          <h2 className="text-3xl font-bold italic uppercase tracking-tighter">Unsere Ergebnisse</h2>
          <div className="h-1 w-12 bg-red-600 mt-2"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 justify-center max-w-4xl mx-auto">
          {highlights.map((p, i) => <SmallSlider key={i} {...p} />)}
        </div>

        <div className="mt-12 text-center">
          <Link 
            href="/referenzen" 
            className="inline-block border-2 border-red-600 text-red-600 px-10 py-3.5 font-bold uppercase hover:bg-red-600 hover:text-white transition-all italic text-sm tracking-widest"
          >
            Alle Referenzen ansehen
          </Link>
        </div>
      </div>
    </section>
  );
}