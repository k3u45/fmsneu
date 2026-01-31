"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function Datenschutz() {
  return (
    <div className="bg-white text-black min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-6 pt-32 pb-20 max-w-4xl">
        {/* Zurück Button */}
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-gray-400 hover:text-red-600 transition-colors mb-8 group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span>Zurück zur Startseite</span>
        </Link>

        <h1 className="text-4xl md:text-5xl font-black mb-10 italic uppercase">
          Daten<span className="text-black">schutz</span>
        </h1>

        <div className="space-y-12 text-gray-600 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-black mb-4">1. Datenschutz auf einen Blick</h2>
            <p>
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen.
            </p>
          </section>

          <section className="">
            <h2 className="text-2xl font-bold text-black mb-4">2. Wer ist verantwortlich?</h2>
            <p>
              Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber:<br /><br />
              FMS Service<br />
              Hochlarmarkstraße 11<br />
              45661 Recklinghausen
            </p>
          </section>
          
          {/* Hier kannst du bei Bedarf weitere Sektionen hinzufügen */}
        </div>
      </main>
      <Footer />
    </div>
  );
}