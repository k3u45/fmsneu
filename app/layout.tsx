// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

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
        {children}
      </body>
    </html>
  );
}
