import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MissionVision from "@/components/MissionVision";
import CoreValues from "@/components/CoreValues";
import AboutCTA from "@/components/AboutCTA";
import Image from "next/image";
import Impact from "@/components/Impact";
export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main>

        {/* Hero */}
        <section className="bg-gradient-to-br from-orange-50 via-white to-blue-50 py-24">
          <div className="max-w-[1280px] mx-auto px-6 text-center">

            <span className="text-orange-500 font-semibold uppercase">
              About Us
            </span>

            <h1 className="mt-4 text-6xl font-bold text-[#0F2D6B]">
              Empowering Careers,
              <br />
              Building Futures
            </h1>

            <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
              ApplyOrbitA is committed to connecting talented students
              and professionals with the right internships and job
              opportunities while helping companies hire exceptional talent.
            </p>

          </div>
        </section>
        <section className="py-24 bg-white">

  <div className="max-w-[1280px] mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">

    <div className="flex justify-center">

  <div className="relative w-[520px] h-[520px] rounded-[32px] overflow-hidden shadow-2xl border-8 border-white">

    <Image
      src="/images/hr.jpg"
      alt="Our Story"
      fill
      className="object-cover hover:scale-105 transition duration-500"
      priority
    />

  </div>

</div>

    <div>

      <h2 className="text-5xl font-bold text-[#0F2D6B]">
        Our Story
        
      </h2>
      

      <p className="mt-6 text-lg text-gray-600 leading-8">
        ApplyOrbitA was founded with a simple goal —
        to bridge the gap between talented students,
        job seekers, and hiring companies.
      </p>

      <p className="mt-5 text-lg text-gray-600 leading-8">
        We believe every student deserves access to
        meaningful career opportunities and every
        company deserves access to talented individuals.
      </p>

    </div>
   

  </div>

</section>
 <MissionVision />
 <CoreValues/>
 <Impact/>
 <AboutCTA/>

      </main>

      <Footer />
    </>
  );
}