"use client";

import React from "react";
import { 
  Hammer, 
  Snowflake, 
  Building2, 
  Wind, 
  Home, 
  Brush, 
  Briefcase, 
  Zap 
} from "lucide-react";

const services = [
  { title: "Sanierung", desc: "Fassaden, Dächer, Schimmelbeseitigung & Balkone.", icon: Hammer },
  { title: "Winterdienst", desc: "Sichere Straßen & Wege bei Schnee und Eis.", icon: Snowflake },
  { title: "Gebäudereinigung", desc: "Grund- & Unterhaltsreinigung für Ihre Objekte.", icon: Building2 },
  { title: "Glasreinigung", desc: "Streifenfreie Fenster & Schaufenster.", icon: Wind },
  { title: "Treppenreinigung", desc: "Saubere Aufgänge für einen guten ersten Eindruck.", icon: Brush },
  { title: "Büroreinigung", desc: "Individuelle Pläne für saubere Arbeitsplätze.", icon: Briefcase },
  { title: "Grundreinigung", desc: "Tiefenreinigung bis in die kleinste Ecke.", icon: Zap },
  { title: "Haushaltsreinigung", desc: "Diskret & gründlich für Ihr Zuhause.", icon: Home },
];

export default function Services() {
  return (
    <section className="py-24 bg-white" id="leistungen">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold italic uppercase">Unsere Leistungen</h2>
          <div className="h-1 w-20 bg-red-600 mx-auto mt-4" />
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <div key={i} className="p-8 border border-gray-100 hover:border-red-600 transition-colors group">
                <Icon className="text-red-600 mb-6 group-hover:scale-110 transition-transform" size={40} />
                <h3 className="text-xl font-bold mb-3 uppercase">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}