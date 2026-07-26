import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ContactCTA() {
  return (
    <section className="relative overflow-hidden py-28">

      {/* Background */}

      <div className="absolute inset-0 bg-[#0F2D6B]"></div>


      {/* Blur Effects */}

      <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-orange-500/20 blur-3xl"></div>

      <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-white/10 blur-3xl"></div>


      <div className="relative max-w-6xl mx-auto px-6 text-center">


        <span className="uppercase tracking-[4px] text-orange-400 font-semibold">
          Get Started
        </span>


        <h2 className="mt-6 text-5xl lg:text-6xl font-bold leading-tight text-white">

          Ready To Take The
          <br />
          Next Step In Your Career?

        </h2>


        <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-blue-100">

          Connect with ApplyOrbitA today and get expert support
          to move closer to your dream job opportunities.

        </p>


        <div className="mt-12 flex flex-wrap justify-center gap-5">


          <Link
            href="/services"
            className="inline-flex items-center gap-3 rounded-xl bg-orange-500 px-8 py-4 font-semibold text-white transition hover:bg-orange-600"
          >

            Explore Services

            <ArrowRight size={18}/>

          </Link>



          <Link
            href="/pricing"
            className="rounded-xl border-2 border-white px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-[#0F2D6B]"
          >

            View Pricing

          </Link>


        </div>


      </div>


    </section>
  );
}