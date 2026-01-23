"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-[#0a0a0a] text-white overflow-hidden py-20 lg:py-0">
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center lg:text-left"
        >
          <span className="text-red-600 font-bold tracking-widest uppercase text-xs md:text-sm">
            Meisterbetrieb in Recklinghausen
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mt-4 leading-[1.1]">
            QUALITÄT, DIE <br /><span className="text-red-600">GLÄNZT.</span>
          </h1>
          <p className="mt-6 text-gray-400 text-base md:text-lg max-w-lg mx-auto lg:mx-0">
            Ihre Experten für Sanierung, Reinigung und Winterdienst. Wir erhalten Werte und schaffen Sauberkeit.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
            <a href="#kontakt" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 font-bold flex items-center justify-center gap-2 transition-all w-full sm:w-auto">
              Angebot anfordern <ArrowRight size={20} />
            </a>
            <a href="tel:017670224310" className="border border-white/20 hover:bg-white/10 px-8 py-4 font-bold flex items-center justify-center gap-2 transition-all w-full sm:w-auto">
              <Phone size={20} /> 0176 70224310
            </a>
          </div>
        </motion.div>
      </div>
      {/* Hintergrund-Deko: Auf Mobile ausgeblendet, damit der Text lesbar bleibt */}
      <div className="absolute right-0 top-0 w-1/2 h-full bg-red-600/5 skew-x-12 translate-x-32 hidden lg:block" />
    </section>
  );
}