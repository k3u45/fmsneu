// app/page.tsx
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About  from "@/components/About"
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import GoogleReviews from "@/components/GoogleReviews";
import VorherNachher from "@/components/VorherNacher";
export default function Home() {
  return (
    <main>
     
      <Hero />
      <About />
      <Services />
      <VorherNachher />
      <GoogleReviews />
      <Contact />
      
    </main>
  );
}