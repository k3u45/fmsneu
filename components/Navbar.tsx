"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 py-4 border-b 
        ${scrolled 
          ? "bg-white border-gray-200 shadow-md" 
          : "bg-white border-transparent"
        }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        
        {/* Logo */}
        <div className="flex items-center h-12 w-40 md:w-56 relative"> 
          <Link href="/" className="absolute left-0 top-1/2 -translate-y-1/2 w-full">
            <Image 
              src="/logo.webp" 
              alt="FMS-Service Logo" 
              width={500} 
              height={150} 
              className="max-w-none h-20 md:h-28 w-auto object-contain" 
              priority 
            />
          </Link>
        </div>

        {/* Desktop Menü */}
        <div className="hidden md:flex gap-8 text-sm font-black uppercase text-gray-700">
          <a href="/#start" className="hover:text-red-600 transition-colors tracking-tight">Start</a>
          <a href="/#About" className="hover:text-red-600 transition-colors tracking-tight">Über uns</a>
          <a href="/#leistungen" className="hover:text-red-600 transition-colors tracking-tight">Leistungen</a>
          <a href="/#kontakt" className="hover:text-red-600 transition-colors tracking-tight">Kontakt</a>
        </div>

        {/* Hamburger Button */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={toggleMenu}
            className="text-black focus:outline-none p-2"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobiles Dropdown Menü - Komplett Weiß */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-200 flex flex-col p-6 space-y-4 shadow-2xl animate-in fade-in slide-in-from-top-5 duration-200">
          <a 
            href="/#About" 
            onClick={toggleMenu} 
            className="text-gray-900 text-lg font-black uppercase hover:text-red-600 transition-colors"
          >
            Über uns
          </a>
          <a 
            href="/#leistungen" 
            onClick={toggleMenu} 
            className="text-gray-900 text-lg font-black uppercase hover:text-red-600 transition-colors"
          >
            Leistungen
          </a>
          <a 
            href="/#kontakt" 
            onClick={toggleMenu} 
            className="text-gray-900 text-lg font-black uppercase hover:text-red-600 transition-colors"
          >
            Kontakt
          </a>
          
          <hr className="border-gray-100" />
          
          <a 
            href="tel:017670224310" 
            className="flex items-center gap-2 text-white bg-red-600 font-black uppercase italic p-4 rounded-xl shadow-sm active:scale-95 transition-all text-center justify-center"
          >
            <Phone size={20} /> Jetzt anrufen
          </a>
        </div>
      )}
    </nav>
  );
}