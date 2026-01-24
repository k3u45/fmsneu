// components/Navbar.tsx
export default function Navbar() {
  return (
    <nav className="fixed w-full z-50 bg-black/90 backdrop-blur-md py-4 border-b border-white/5">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="text-2xl font-black tracking-tighter text-white">
          FMS-<span className="text-red-600">SERVICE</span>
        </div>
        <div className="hidden md:flex gap-8 text-sm font-bold uppercase text-gray-300">
          {/* Das / sorgt dafür, dass er erst zur Startseite geht und dann zum Anker */}
          <a href="/#About" className="hover:text-red-600 transition-colors">Über uns</a>
          <a href="/#leistungen" className="hover:text-red-600 transition-colors">Leistungen</a>
          <a href="/#kontakt" className="hover:text-red-600 transition-colors">Kontakt</a>
        </div>
        {/* Button für Mobile oder Schnellkontakt */}
        <a href="tel:017670224310" className="md:hidden text-red-600 font-bold text-sm">
          Anrufen
        </a>
      </div>
    </nav>
  );
}
  