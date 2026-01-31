// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar"; // Import hinzufügen
import Footer from "@/components/Footer"; // Import hinzufügen

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Reinigung & Sanierung Recklinghausen | Ihr Profi vor Ort",
  description: "Professionelle Gebäudesanierung, Glasreinigung, Winterdienst und Büroreinigung in Recklinghausen. Jetzt kostenloses Angebot anfordern!",
  keywords: "Reinigung Recklinghausen, Sanierung, Winterdienst, Glasreinigung, Hausreinigung",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className="scroll-smooth">
      <body className={`${inter.className} bg-white text-slate-900`}>
        <Navbar /> {/* Erscheint oben auf jeder Seite */}
        
        <main>
          {children} {/* Hier wird der Inhalt von page.tsx (Home oder Referenzen) geladen */}
        </main>
        
        <Footer /> {/* Erscheint unten auf jeder Seite */}
      </body>
    </html>
  );
}