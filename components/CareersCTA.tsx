import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CareersCTA() {
  return (
    <section className="relative overflow-hidden py-28">

      {/* Background */}

      <div className="absolute inset-0 bg-[#0F2D6B]"></div>

      {/* Blur Effects */}

      <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-orange-500/20 blur-3xl"></div>
      <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-white/10 blur-3xl"></div>

      <div className="relative max-w-6xl mx-auto px-6 text-center">

        <span className="uppercase tracking-[4px] text-orange-400 font-semibold">
          Start Your Journey
        </span>

        <h2 className="mt-6 text-5xl lg:text-6xl font-bold leading-tight text-white">
          Your Dream Career
          <br />
          Starts Today
        </h2>

        <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-blue-100">
          Explore verified international opportunities and let
          ApplyOrbitA help you build a successful career in the
          UK, USA, or Australia.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-5">

          <Link
            href="/contact"
            className="inline-flex items-center gap-3 rounded-xl bg-orange-500 px-8 py-4 font-semibold text-white transition hover:bg-orange-600"
          >
            Apply Now
            <ArrowRight size={18} />
          </Link>

          <Link
            href="/services"
            className="rounded-xl border-2 border-white px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-[#0F2D6B]"
          >
            Explore Services
          </Link>

        </div>

      </div>

    </section>
  );
}