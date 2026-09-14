"use client";

import Link from "next/link";
import { ArrowRight, Globe, Users, Briefcase, Star } from "lucide-react";

export default function PricingHero() {
  return (
    <section className="relative overflow-hidden bg-white py-24">

      {/* Background dots */}
      <div className="absolute top-0 right-0 h-80 w-80 opacity-30 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:18px_18px]" />

      <div className="absolute bottom-0 left-0 h-64 w-64 opacity-20 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:18px_18px]" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center">

          <span className="inline-block text-orange-500 font-bold tracking-wide uppercase">
            Pricing Plans
          </span>

          <h1 className="mt-5 text-5xl md:text-6xl lg:text-7xl font-extrabold text-black leading-tight">
            Choose Your Perfect Career Plan
          </h1>

          <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-gray-600 leading-8">
            We offer simple and transparent pricing plans to help you
            land your dream job.
          </p>

          {/* Career Plans badge */}
          <div className="mt-8 inline-flex items-center gap-3 rounded-full bg-gray-100 px-6 py-3">
            <span className="text-2xl">🌍</span>
            <span className="font-semibold text-black">
              Global Career Plans
            </span>
          </div>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap justify-center gap-4">

            <Link
              href="#plans"
              className="bg-black hover:bg-orange-500 text-white px-8 py-4 rounded-xl font-semibold flex items-center gap-2 transition-all duration-300"
            >
              View Plans
              <ArrowRight size={18} />
            </Link>

            <Link
              href="/contact"
              className="border-2 border-black text-black px-8 py-4 rounded-xl font-semibold hover:bg-black hover:text-white transition-all duration-300"
            >
              Contact Team
            </Link>

          </div>

        </div>

        {/* Stats */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-20">

          <div className="bg-white border border-gray-200 rounded-2xl p-7 shadow-sm hover:shadow-lg transition">
            <Globe size={38} className="text-orange-500" />

            <h3 className="mt-5 text-3xl font-extrabold text-black">
              3
            </h3>

            <p className="mt-2 text-gray-500">
              Destinations Supported
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-7 shadow-sm hover:shadow-lg transition">
            <Users size={38} className="text-orange-500" />

            <h3 className="mt-5 text-3xl font-extrabold text-black">
              1000+
            </h3>

            <p className="mt-2 text-gray-500">
              Candidates Supported
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-7 shadow-sm hover:shadow-lg transition">
            <Briefcase size={38} className="text-orange-500" />

            <h3 className="mt-5 text-3xl font-extrabold text-black">
              500+
            </h3>

            <p className="mt-2 text-gray-500">
              Opportunities
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-7 shadow-sm hover:shadow-lg transition">
            <Star size={38} className="text-orange-500" />

            <h3 className="mt-5 text-3xl font-extrabold text-black">
              Expert
            </h3>

            <p className="mt-2 text-gray-500">
              Career Guidance
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}