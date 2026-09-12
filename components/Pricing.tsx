"use client";

import Link from "next/link";
import { Check, Zap } from "lucide-react";

const plans = [
  {
    title: "PROFESSIONAL",

    price: "$349",

    badge: "ECONOMICAL",

    features: [
      
      {
        title: "Everything in Ignite +",
        description: "",
        orange: false,
      },
      {
        title: "No Time Constraint",
        description: "Until your applications are completed",
        orange: false,
      },
      {
        title: "We Find Jobs",
        description: "We find & apply to jobs for you",
        orange: false,
      },
      {
        title: "LinkedIn Makeover",
        description: "Let recruiters come to you",
        orange: false,
      },
      {
        title: "Interview Prep Material",
        description: "Resources to help you ace interviews",
        orange: false,
      },
    ],
  },

  {
    title: "EXECUTIVE",

    price: "$599",

    badge: "MOST POPULAR",

    features: [

      {
        title: "Everything in Professional +",
        description: "",
        orange: false,
      },
      {
        title: "1 Cover Letter",
        description: "1 cover letter used for all applications",
        orange: false,
      },
      {
        title: "Emailing Recruiters",
        description: "We personally reach out to recruiters for you",
        orange: false,
      },
      {
        title: "Portfolio Website",
        description:
          "We build a personal site to showcase your projects, skills & achievements",
        orange: false,
      },
    ],
  },
];

export default function Pricing() {
  return (
    <section
      id="plans"
      className="relative bg-white py-24 overflow-hidden"
    >
      {/* Background dots */}
      <div className="absolute top-10 right-0 h-72 w-72 opacity-20 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:18px_18px]" />

      <div className="absolute bottom-0 left-0 h-72 w-72 opacity-20 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:18px_18px]" />

      <div className="relative max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-20">

          <span className="text-orange-500 font-bold uppercase tracking-[3px]">
            USA Pricing
          </span>

          <h2 className="mt-5 text-4xl md:text-5xl font-extrabold text-black">
            Simple & Transparent Pricing
          </h2>

          <p className="mt-5 max-w-2xl mx-auto text-gray-600 text-lg">
            Choose the recruitment package that best matches your
            career goals in the United States.
          </p>

        </div>

        {/* Cards */}
        <div className="grid lg:grid-cols-2 gap-10 items-start">

          {plans.map((plan) => (
            <div
              key={plan.title}
              className="relative pt-8"
            >

              {/* Black top tab */}
              <div className="absolute left-0 top-0 z-10">

                <div className="relative bg-black text-white px-7 py-3 font-bold text-sm md:text-base">

                  {plan.title}

                  {/* tab extension */}
                  <div className="absolute right-[-18px] top-0 h-full w-[18px] bg-black" />

                  {/* lower extension */}
                  <div className="absolute right-[-32px] bottom-0 h-[7px] w-[32px] bg-black" />

                  {/* square decoration */}
                  <div className="absolute right-[-58px] bottom-0 h-4 w-4 bg-black" />

                </div>

              </div>

              {/* Card */}
              <div className="relative bg-white border border-black rounded-[18px] shadow-sm overflow-hidden">

                {/* Orange top line */}
                <div className="h-1.5 bg-orange-500" />

                <div className="p-7 md:p-9">

                  {/* Badge */}
                  <div className="flex justify-end min-h-[32px]">

                    <span
                      className={`px-4 py-2 rounded-md text-xs font-bold text-white ${
                        plan.badge === "MOST POPULAR"
                          ? "bg-orange-500"
                          : "bg-black"
                      }`}
                    >
                      {plan.badge}
                    </span>

                  </div>

                  {/* Price */}
                  <div className="mt-2">

                    <div className="flex items-center gap-3">

                      <span className="text-gray-400 line-through text-sm md:text-base">
                        {plan.oldPrice}
                      </span>

                      <span className="bg-orange-50 text-orange-600 px-3 py-1 rounded-full text-xs font-semibold">
                        {plan.save}
                      </span>

                    </div>

                    <h3 className="mt-1 text-5xl md:text-6xl font-extrabold text-black">
                      {plan.price}
                    </h3>

                  </div>

                  {/* Divider */}
                  <div className="mt-6 border-t border-gray-300" />

                  {/* Features */}
                  <div className="mt-6 space-y-6">

                    {plan.features.map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-4"
                      >

                        <Zap
                          size={20}
                          fill="currentColor"
                          className="mt-0.5 flex-shrink-0 text-orange-500"
                        />

                        <div>

                          <p
                            className={`font-semibold leading-6 ${
                              feature.orange
                                ? "text-orange-500"
                                : "text-gray-800"
                            }`}
                          >
                            {feature.title}
                          </p>

                          {feature.description && (
                            <p className="mt-1 text-sm text-gray-500 leading-5">
                              {feature.description}
                            </p>
                          )}

                        </div>

                      </div>
                    ))}

                  </div>

                  {/* Button */}
                  <Link
                    href="/contact"
                    className="mt-9 w-full bg-black hover:bg-orange-500 text-white py-4 rounded-lg font-bold text-center block transition-all duration-300"
                  >
                    Start Now
                  </Link>

                </div>

              </div>

            </div>
          ))}

        </div>

        {/* Trust Strip */}
        <div className="mt-14 bg-gray-100 rounded-2xl px-6 py-7">

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

            <div className="flex items-center gap-4 justify-center lg:justify-start">

              <div className="w-11 h-11 rounded-full bg-black text-white flex items-center justify-center">
                <Check size={20} />
              </div>

              <div>
                <p className="font-bold text-black">
                  Secure Payment
                </p>

                <p className="text-sm text-gray-500">
                  100% safe & secure
                </p>
              </div>

            </div>

            <div className="flex items-center gap-4 justify-center lg:justify-start">

              <div className="w-11 h-11 rounded-full bg-black text-white flex items-center justify-center">
                <Check size={20} />
              </div>

              <div>
                <p className="font-bold text-black">
                  No Hidden Charges
                </p>

                <p className="text-sm text-gray-500">
                  Transparent pricing
                </p>
              </div>

            </div>

            <div className="flex items-center gap-4 justify-center lg:justify-start">

              <div className="w-11 h-11 rounded-full bg-black text-white flex items-center justify-center">
                <Check size={20} />
              </div>

              <div>
                <p className="font-bold text-black">
                  Expert Support
                </p>

                <p className="text-sm text-gray-500">
                  We're here to help
                </p>
              </div>

            </div>

            <div className="flex items-center gap-4 justify-center lg:justify-start">

              <div className="w-11 h-11 rounded-full bg-black text-white flex items-center justify-center">
                <Check size={20} />
              </div>

              <div>
                <p className="font-bold text-black">
                  Money-Back Policy
                </p>

                <p className="text-sm text-gray-500">
                  7-day guarantee
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}