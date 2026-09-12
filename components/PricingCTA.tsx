"use client";

import Link from "next/link";
import {
  ArrowRight,
  PhoneCall,
  Mail,
} from "lucide-react";

export default function PricingCTA() {
  return (
    <section className="relative overflow-hidden bg-black py-24">

      {/* Orange background glow */}
      <div className="absolute -left-32 top-10 h-72 w-72 rounded-full bg-orange-500/20 blur-3xl" />

      <div className="absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-orange-500/20 blur-3xl" />

      {/* Dots */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="relative max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* Left */}
          <div>

            <span className="inline-block bg-orange-500 text-white px-5 py-2 rounded-full font-bold">
              Ready To Get Started?
            </span>

            <h2 className="mt-7 text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
              Let's Build
              <br />
              Your Career Together
            </h2>

            <p className="mt-7 text-lg md:text-xl text-gray-300 leading-8 max-w-xl">
              Ready to take the next step toward your career in the USA?
              Our team is here to support you throughout your recruitment journey.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">

              <Link
                href="/contact"
                className="bg-orange-500 hover:bg-orange-600 text-white px-7 py-4 rounded-xl font-bold flex items-center gap-3 transition"
              >
                Contact Our Team
                <ArrowRight size={18} />
              </Link>

              <Link
                href="/services"
                className="border border-white text-white hover:bg-white hover:text-black px-7 py-4 rounded-xl font-bold transition"
              >
                Explore Services
              </Link>

            </div>

          </div>

          {/* Right */}
          <div className="bg-white rounded-3xl p-8 md:p-10">

            <h3 className="text-3xl font-extrabold text-black">
              Need Personal Guidance?
            </h3>

            <p className="mt-4 text-gray-600 leading-7">
              Speak with our career experts and receive personalized
              recommendations based on your profile and career goals.
            </p>

            <div className="mt-9 space-y-6">

              {/* Phone */}
              <div className="flex items-center gap-5">

                <div className="h-14 w-14 rounded-full bg-black flex items-center justify-center flex-shrink-0">
                  <PhoneCall className="text-white" size={21} />
                </div>

                <div>

                  <p className="text-gray-500 text-sm">
                    Call Us
                  </p>

                  <h4 className="text-black font-bold text-lg md:text-xl">
                    +91 87978 05091
                  </h4>

                </div>

              </div>

              {/* Email */}
              <div className="flex items-center gap-5">

                <div className="h-14 w-14 rounded-full bg-black flex items-center justify-center flex-shrink-0">
                  <Mail className="text-white" size={21} />
                </div>

                <div>

                  <p className="text-gray-500 text-sm">
                    Email
                  </p>

                  <h4 className="text-black font-bold text-base md:text-xl break-all">
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