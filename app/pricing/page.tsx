import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import PricingHero from "@/components/PricingHero";
import Pricing from "@/components/Pricing";
import PricingFAQ from "@/components/PricingFAQ";
import PricingCTA from "@/components/PricingCTA";

export default function PricingPage() {
  return (
    <>
      <Navbar />

      <main>

        {/* Hero */}
        <PricingHero />

        {/* Pricing Cards */}
        <Pricing />

        {/* FAQ */}
        <PricingFAQ />

        {/* CTA */}
        <PricingCTA />

      </main>

      <Footer />
    </>
  );
}