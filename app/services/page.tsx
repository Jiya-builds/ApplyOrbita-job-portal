import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import ServicesHero from "@/components/ServicesHero";
import ServicesGrid from "@/components/ServicesGrid";
import HowItWorks from "@/components/HowItWorks";
import WhyChooseServices from "@/components/WhyChooseServices";
import Countries from "@/components/Countries";
import SuccessStats from "@/components/SuccessStats";
import ServicesFAQ from "@/components/ServicesFAQ";
import ServicesCTA from "@/components/ServicesCTA";

export default function ServicesPage() {
  return (
    <>
      <Navbar />

      <main>
        <ServicesHero />
        <ServicesGrid />
        <HowItWorks />
        <WhyChooseServices />
        <Countries />
        <SuccessStats />
        <ServicesFAQ />
        <ServicesCTA />
      </main>

      <Footer />
    </>
  );
}