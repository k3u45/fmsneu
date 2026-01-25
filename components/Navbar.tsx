"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react"; // Installiere lucide-react, falls noch nicht geschehen

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Hilfsfunktion zum Schließen des Menüs beim Klicken auf einen Link
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed w-full z-50 bg-black/90 backdrop-blur-md py-4 border-b border-white/5">
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-black tracking-tighter text-white">
          FMS-<span className="text-red-600">SERVICE</span>
        </Link>

        {/* Desktop Menü (Bleibt wie es war) */}
        <div className="hidden md:flex gap-8 text-sm font-bold uppercase text-gray-300">
          <a href="/#About" className="hover:text-red-600 transition-colors">Über uns</a>
          <a href="/#leistungen" className="hover:text-red-600 transition-colors">Leistungen</a>
          <a href="/#kontakt" className="hover:text-red-600 transition-colors">Kontakt</a>
        </div>

        {/* Hamburger Icon (Nur Mobil sichtbar) */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={toggleMenu}
            className="text-white focus:outline-none"
            aria-label="Menü öffnen"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobiles Dropdown Menü */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black border-b border-white/10 flex flex-col p-6 space-y-4 animate-in fade-in slide-in-from-top-5 duration-200">
          <a href="/#About" onClick={toggleMenu} className="text-white text-lg font-bold uppercase">Über uns</a>
          <a href="/#leistungen" onClick={toggleMenu} className="text-white text-lg font-bold uppercase">Leistungen</a>
          <a href="/#kontakt" onClick={toggleMenu} className="text-white text-lg font-bold uppercase">Kontakt</a>
          
          <hr className="border-white/10" />
          
          <a 
            href="tel:017670224310" 
            className="flex items-center gap-2 text-red-600 font-black uppercase italic"
          >
            <Phone size={20} /> Jetzt anrufen
          </a>
        </div>
      )}
    </nav>
  );
}