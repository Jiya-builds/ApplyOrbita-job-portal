"use client";

import Link from "next/link";
import { ArrowRight, Globe, Users, Briefcase, Star } from "lucide-react";

export default function PricingHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-white to-blue-50 py-28">

      {/* Background Blur */}
      <div className="absolute -top-32 -left-24 h-80 w-80 rounded-full bg-orange-300/20 blur-3xl"></div>

      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue-300/20 blur-3xl"></div>

      {/* Grid */}
      <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(#0F2D6B_1px,transparent_1px)] [background-size:22px_22px]" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center">

          <span className="inline-block bg-orange-100 text-orange-600 px-5 py-2 rounded-full font-semibold">
            Pricing Plans
          </span>

          <h1 className="mt-8 text-6xl lg:text-7xl font-extrabold leading-tight text-[#0F2D6B]">
            Choose Your
            <br />
            Perfect Career Plan
          </h1>

          <p className="mt-8 max-w-3xl mx-auto text-xl leading-9 text-gray-600">
            Whether you're applying for opportunities in the USA,
            UK or Australia, ApplyOrbitA offers carefully designed
            career packages to maximize your chances of getting hired.
          </p>

          {/* Buttons */}

          <div className="mt-12 flex flex-wrap justify-center gap-5">

            <Link
              href="#plans"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-semibold flex items-center gap-2 transition-all hover:scale-105"
            >
              View Plans
              <ArrowRight size={18} />
            </Link>

            <Link
              href="/contact"
              className="border-2 border-[#0F2D6B] text-[#0F2D6B] px-8 py-4 rounded-xl font-semibold hover:bg-[#0F2D6B] hover:text-white transition"
            >
              Contact Team
            </Link>

          </div>

        </div>

        {/* Stats */}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-24">

          <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-xl hover:-translate-y-2 transition duration-300">

            <Globe
              size={45}
              className="text-orange-500"
            />

            <h3 className="mt-5 text-4xl font-bold text-[#0F2D6B]">
              3+
            </h3>

            <p className="mt-2 text-gray-500">
              Countries Supported
            </p>

          </div>

          <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-xl hover:-translate-y-2 transition duration-300">

            <Users
              size={45}
              className="text-orange-500"
            />

            <h3 className="mt-5 text-4xl font-bold text-[#0F2D6B]">
              1000+
            </h3>

            <p className="mt-2 text-gray-500">
              Happy Candidates
            </p>

          </div>

          <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-xl hover:-translate-y-2 transition duration-300">

            <Briefcase
              size={45}
              className="text-orange-500"
            />

            <h3 className="mt-5 text-4xl font-bold text-[#0F2D6B]">
              500+
            </h3>

            <p className="mt-2 text-gray-500">
              Verified Opportunities
            </p>

          </div>

          <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-xl hover:-translate-y-2 transition duration-300">

            <Star
              size={45}
              className="text-orange-500"
            />

            <h3 className="mt-5 text-4xl font-bold text-[#0F2D6B]">
              95%
            </h3>

            <p className="mt-2 text-gray-500">
              Candidate Satisfaction
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}