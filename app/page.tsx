import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustedBy from "@/components/TrustedBy";
import Services from "@/components/Services";
import WhyChoose from "@/components/WhyChoose";
import Stats from "@/components/Stats";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";


export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <TrustedBy />
      <Services />
      <WhyChoose />
      <FAQ/>
      <Stats />
      <CTA />
      
      <Footer />
    </main>
  );
}