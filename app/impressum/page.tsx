"use client"; // Wichtig für den Router-Link
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function Impressum() {
  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-6 pt-32 pb-20">
        {/* Zurück Button */}
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-gray-400 hover:text-red-600 transition-colors mb-8 group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span>Zurück zur Startseite</span>
        </Link>

        <h1 className="text-4xl md:text-5xl font-black mb-10 italic uppercase">
          Impres<span className="text-red-600">sum</span>
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-gray-300">
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-white uppercase tracking-wider">Angaben gemäß § 5 TMG</h2>
            <p className="leading-relaxed">
              FMS Service<br />
              Hochlarmarkstraße 11<br />
              45661 Recklinghausen
            </p>
            
            <h2 className="text-xl font-bold text-white uppercase tracking-wider pt-4">Kontakt</h2>
            <p className="leading-relaxed">
              Telefon: 0176 70224310<br />
              E-Mail: [Deine E-Mail Adresse]<br />
              Website: www.fms-service.de
            </p>
          </section>

          <section className="space-y-4">
            
            
            
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}