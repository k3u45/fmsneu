// components/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-black py-8 border-t border-white/5 text-center text-gray-500 text-xs">
      © {new Date().getFullYear()} Reinigung & Sanierung Recklinghausen. Alle Rechte vorbehalten.
    </footer>
  );
}