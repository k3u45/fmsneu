"use client";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-white py-12 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
          <div>
            <h3 className="text-xl font-bold mb-4 text-red-600 italic">FMS SERVICE</h3>
            <p className="text-gray-400 text-sm">
              Ihr Partner für Sauberkeit und Werterhalt in Recklinghausen und Umgebung.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4 uppercase">Kontakt</h4>
            <p className="text-gray-400 text-sm leading-loose">
              Hochlarmarkstraße 11<br />
              45661 Recklinghausen<br />
              Tel: 0176 70224310
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4 uppercase">Rechtliches</h4>
            <ul className="text-gray-400 text-sm space-y-2">
              <li><a href="impressum" className="hover:text-red-600 transition-colors">Impressum</a></li>
              <li><a href="datenschutz" className="hover:text-red-600 transition-colors">Datenschutz</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/5 text-center text-gray-500 text-xs">
          © {new Date().getFullYear()} FMS Service. Alle Rechte vorbehalten.
        </div>
      </div>
    </footer>
  );
}