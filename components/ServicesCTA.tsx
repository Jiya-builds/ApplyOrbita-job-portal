import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ServicesCTA() {
  return (
    <section className="relative overflow-hidden py-28">

      {/* Background */}

      <div className="absolute inset-0 bg-[#0F2D6B]"></div>

      <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-orange-500/20 blur-3xl"></div>

      <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-white/10 blur-3xl"></div>

      <div className="relative max-w-6xl mx-auto px-6 text-center">

        <span className="uppercase tracking-[4px] text-orange-400 font-semibold">
          Ready To Begin?
        </span>

        <h2 className="mt-6 text-5xl lg:text-6xl font-bold text-white leading-tight">
          Take The Next Step
          <br />
          Towards Your Dream Career
        </h2>

        <p className="mt-8 text-lg text-blue-100 max-w-3xl mx-auto leading-8">
          Whether you're looking for Resume Optimization, Reverse Recruitment,
          Interview Preparation, or complete Job Application Management,
          ApplyOrbitA is here to help you succeed.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-5">

          <Link
            href="/pricing"
            className="inline-flex items-center gap-3 rounded-xl bg-orange-500 px-8 py-4 text-white font-semibold transition hover:bg-orange-600"
          >
            View Pricing
            <ArrowRight size={18} />
          </Link>

          <Link
            href="/contact"
            className="rounded-xl border-2 border-white px-8 py-4 text-white font-semibold transition hover:bg-white hover:text-[#0F2D6B]"
          >
            Contact Us
          </Link>

        </div>

      </div>

    </section>
  );
}