"use client";
import React, { useEffect, useRef } from "react"; // useRef und useEffect ergänzt
import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";

export default function Hero() {
  // Ref erstellen, um direkt auf das Video-Element zuzugreifen
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      videoRef.current.play();
    }
  }, []);

  return (
    <section id="start" className="relative min-h-[80vh] flex items-start bg-white text-black overflow-hidden pt-32 lg:pt-40 pb-20">
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 z-10">
        
        {/* Linke Seite: Text */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-left"
        >
          <span className="text-red-600 font-bold tracking-widest uppercase text-xs md:text-sm">
            Meisterbetrieb in Recklinghausen
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mt-4 leading-[1.1] uppercase italic">
            QUALITÄT DIE <br /><span className="text-red-600">GLÄNZT.</span>
          </h1>
          <p className="mt-6 text-gray-600 text-base md:text-lg max-w-lg font-medium">
            Ihre Experten für Sanierung, Reinigung und Winterdienst. Wir erhalten Werte und schaffen Sauberkeit.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-start">
            <a href="#kontakt" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 font-bold flex items-center justify-center gap-2 transition-all w-full sm:w-auto uppercase italic tracking-tighter shadow-lg shadow-red-600/20">
              Angebot anfordern <ArrowRight size={20} />
            </a>
            <a href="tel:017670224310" className="border-2 border-black/10 hover:border-black/30 px-8 py-4 font-bold flex items-center justify-center gap-2 transition-all w-full sm:w-auto uppercase italic tracking-tighter">
              <Phone size={20} className="shrink-0 text-red-600" /> 
              <span className="tabular-nums font-bold">0176 70224310</span>
            </a>
          </div>
        </motion.div>

        {/* Rechte Seite: Video */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative w-full"
        >
          <div className="relative w-full h-[250px] md:h-[350px] lg:h-[420px] overflow-hidden rounded-[2rem] shadow-xl border border-gray-100 bg-gray-50">
            <video
              ref={videoRef}      // Die Referenz wird hier verknüpft
              autoPlay
              loop
              muted               // Standard-Attribut
              playsInline         // Wichtig für Mobilgeräte
              preload="auto"
              className="w-full h-full object-cover"
            >
              <source src="/hero-loop.mp4" type="video/mp4" />
              Ihr Browser unterstützt kein Video.
            </video>
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
          </div>

          <div className="absolute -bottom-4 right-6 bg-white py-2 px-4 shadow-lg rounded-full border border-gray-50 flex items-center gap-2">
            <span className="text-[10px] font-bold uppercase tracking-widest text-red-600">15+ Jahre Erfahrung</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}