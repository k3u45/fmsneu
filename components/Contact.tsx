export default function Contact() {
  return (
    <section className="py-24 bg-[#0a0a0a] text-white" id="kontakt">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16">
        <div>
          <h2 className="text-4xl font-bold uppercase">Kontaktieren Sie uns</h2>
          <p className="mt-4 text-gray-400">Fragen Sie jetzt unverbindlich Ihr Projekt an.</p>
          
          <div className="mt-12 space-y-6">
            <div>
              <p className="text-red-600 font-bold uppercase text-xs tracking-widest">Adresse</p>
              <p className="text-lg">Hochlarmarkstraße 67, 45661 Recklinghausen</p>
            </div>

            <div>
              <p className="text-red-600 font-bold uppercase text-xs tracking-widest">Telefonnummer:</p>
              <p className="text-lg">0176 70224310</p>
            </div>
            <div>
              <p className="text-red-600 font-bold uppercase text-xs tracking-widest">Erreichbarkeit</p>
              <p className="text-lg italic">Mo – Fr: 08:00 – 18:00 Uhr</p>
            </div>
          </div>
        </div>

        <form className="bg-white p-8 space-y-4 rounded-sm">
          <input type="text" placeholder="Name" className="w-full p-4 bg-gray-50 border border-gray-200 text-black focus:border-red-600 outline-none" required />
          <div className="grid md:grid-cols-2 gap-4">
            <input type="email" placeholder="E-Mail" className="w-full p-4 bg-gray-50 border border-gray-200 text-black focus:border-red-600 outline-none" required />
            <input type="tel" placeholder="Telefonnummer" className="w-full p-4 bg-gray-50 border border-gray-200 text-black focus:border-red-600 outline-none" required />
          </div>
          <textarea placeholder="Ihre Nachricht" rows={4} className="w-full p-4 bg-gray-50 border border-gray-200 text-black focus:border-red-600 outline-none" required />
          <button className="w-full bg-red-600 text-white font-bold py-4 hover:bg-black transition-all uppercase tracking-widest">
            Kostenloses Angebot anfordern
          </button>
        </form>
      </div>
    </section>
  );
}