"use client";

import Link from "next/link";
import { ArrowRight, PhoneCall, Mail } from "lucide-react";

export default function PricingCTA() {
  return (
    <section className="relative overflow-hidden py-28">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0F2D6B] via-[#163d91] to-[#0F2D6B]" />

      {/* Orange Blur */}
      <div className="absolute -left-32 top-10 h-72 w-72 rounded-full bg-orange-500/20 blur-3xl"></div>

      <div className="absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-orange-400/20 blur-3xl"></div>

      {/* Grid */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="relative max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* Left */}

          <div>

            <span className="bg-orange-500 text-white px-5 py-2 rounded-full font-semibold">
              Ready To Get Started?
            </span>

            <h2 className="mt-8 text-5xl lg:text-6xl font-bold text-white leading-tight">

              Let's Build
              <br />
              Your Career Together

            </h2>

            <p className="mt-8 text-xl text-gray-300 leading-9">

              Whether you're planning to work in the USA,
              UK or Australia, ApplyOrbitA is here to
              guide your entire recruitment journey.

            </p>

            <div className="mt-12 flex flex-wrap gap-5">

              <Link
                href="/contact"
                className="bg-orange-500 hover:bg-orange-600 transition px-8 py-4 rounded-xl text-white font-semibold flex items-center gap-3"
              >
                Contact Our Team
                <ArrowRight size={18} />
              </Link>

              <Link
                href="/services"
                className="border border-white text-white hover:bg-white hover:text-[#0F2D6B] transition px-8 py-4 rounded-xl font-semibold"
              >
                Explore Services
              </Link>

            </div>

          </div>

          {/* Right */}

          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-[30px] p-10">

            <h3 className="text-3xl font-bold text-white">
              Need Personal Guidance?
            </h3>

            <p className="mt-4 text-gray-300 leading-8">
              Speak with our career experts and receive personalized
              recommendations based on your profile and destination.
            </p>

            <div className="mt-10 space-y-6">

              <div className="flex items-center gap-5">

                <div className="h-14 w-14 rounded-full bg-orange-500 flex items-center justify-center">

                  <PhoneCall className="text-white" />

                </div>

                <div>

                  <p className="text-gray-300 text-sm">
                    Call Us
                  </p>

                  <h4 className="text-white font-semibold text-xl">
                    +91 87978 05091
                  </h4>

                </div>

              </div>

              <div className="flex items-center gap-5">

                <div className="h-14 w-14 rounded-full bg-orange-500 flex items-center justify-center">

                  <Mail className="text-white" />

                </div>

                <div>

                  <p className="text-gray-300 text-sm">
                    Email
                  </p>

                  <h4 className="text-white font-semibold text-xl">
                    support@applyorbita.com
                  </h4>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}