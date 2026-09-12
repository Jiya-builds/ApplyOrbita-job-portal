"use client";

import Link from "next/link";
import { Check, Zap } from "lucide-react";

const plans = [
  {
    title: "PROFESSIONAL",
    oldPrice: "$449",
    price: "$349",
    save: "Save 22%",
    badge: "ECONOMICAL",

    features: [
      {
        title: "500 Applications",
        description: "We apply to suitable USA job opportunities for you",
        orange: true,
      },
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
        description: "We find and apply to jobs for you",
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
    oldPrice: "$699",
    price: "$599",
    save: "Save 14%",
    badge: "MOST POPULAR",

    features: [
      {
        title: "1200 Applications",
        description: "Extensive job application support for USA opportunities",
        orange: true,
      },
      {
        title: "Everything in Professional +",
        description: "",
        orange: false,
      },
      {
        title: "1 Cover Letter",
        description: "One professionally prepared cover letter",
        orange: false,
      },
      {
        title: "Emailing Recruiters",
        description:
          "We personally reach out to recruiters for you",
        orange: false,
      },
      {
        title: "Portfolio Website",
        description:
          "We build a personal website to showcase your projects, skills and achievements",
        orange: false,
      },
    ],
  },
];

export default function Pricing() {
  return (
    <section
      id="plans"
      className="relative overflow-hidden bg-white py-24"
    >
      {/* Background dots */}
      <div className="absolute right-0 top-10 h-72 w-72 opacity-20 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:18px_18px]" />

      <div className="absolute bottom-0 left-0 h-72 w-72 opacity-20 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:18px_18px]" />

      <div className="relative mx-auto max-w-6xl px-6">

        {/* Section Heading */}
        <div className="mb-20 text-center">

          <span className="font-bold uppercase tracking-[3px] text-orange-500">
            USA Pricing
          </span>

          <h2 className="mt-5 text-4xl font-extrabold text-black md:text-5xl">
            Choose Your USA Plan
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-600">
            Simple and transparent pricing plans designed to help you
            move closer to your career goals in the United States.
          </p>

        </div>

        {/* Pricing Cards */}
        <div className="grid items-start gap-10 lg:grid-cols-2">

          {plans.map((plan) => (
            <div
              key={plan.title}
              className="relative pt-8"
            >

              {/* Black Plan Label */}
              <div className="absolute left-0 top-0 z-10">

                <div className="relative bg-black px-7 py-3 text-sm font-bold tracking-wide text-white md:text-base">

                  {plan.title}

                  {/* Right extension */}
                  <div className="absolute right-[-18px] top-0 h-full w-[18px] bg-black" />

                  {/* Bottom extension */}
                  <div className="absolute bottom-0 right-[-32px] h-[7px] w-[32px] bg-black" />

                  {/* Small square */}
                  <div className="absolute bottom-0 right-[-58px] h-4 w-4 bg-black" />

                </div>

              </div>

              {/* Card */}
              <div className="overflow-hidden rounded-[18px] border border-gray-300 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

                {/* Orange Top Border */}
                <div className="h-1.5 bg-orange-500" />

                <div className="p-7 md:p-9">

                  {/* Badge */}
                  <div className="flex min-h-[32px] justify-end">

                    <span
                      className={`rounded-md px-4 py-2 text-xs font-bold text-white ${
                        plan.badge === "MOST POPULAR"
                          ? "bg-orange-500"
                          : "bg-black"
                      }`}
                    >
                      {plan.badge}
                    </span>

                  </div>

                  {/* Price */}
                  <div className="mt-4">

                    <div className="flex items-center gap-3">

                      <span className="text-sm text-gray-400 line-through md:text-base">
                        {plan.oldPrice}
                      </span>

                      <span className="rounded-full bg-orange-50 px-3 py-1 text-xs font-semibold text-orange-600">
                        {plan.save}
                      </span>

                    </div>

                    <h3 className="mt-1 text-5xl font-extrabold text-black md:text-6xl">
                      {plan.price}
                    </h3>

                    <p className="mt-2 text-sm text-gray-500">
                      One-time payment
                    </p>

                  </div>

                  {/* Divider */}
                  <div className="mt-7 border-t border-gray-200" />

                  {/* Features */}
                  <div className="mt-7 space-y-6">

                    {plan.features.map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-4"
                      >

                        <div className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-orange-50">
                          <Zap
                            size={14}
                            fill="currentColor"
                            className="text-orange-500"
                          />
                        </div>

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
                            <p className="mt-1 text-sm leading-6 text-gray-500">
                              {feature.description}
                            </p>
                          )}

                        </div>

                      </div>
                    ))}

                  </div>

                  {/* Start Now */}
                  <Link
                    href="/contact"
                    className="mt-10 block w-full rounded-lg bg-black py-4 text-center font-bold text-white transition-all duration-300 hover:bg-orange-500"
                  >
                    Start Now
                  </Link>

                </div>

              </div>

            </div>
          ))}

        </div>

        {/* Trust Strip */}
        <div className="mt-14 rounded-2xl bg-gray-100 px-6 py-7">

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {/* Secure Payment */}
            <div className="flex items-center justify-center gap-4 lg:justify-start">

              <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-black text-white">
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

            {/* No Hidden Charges */}
            <div className="flex items-center justify-center gap-4 lg:justify-start">

              <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-black text-white">
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

            {/* Expert Support */}
            <div className="flex items-center justify-center gap-4 lg:justify-start">

              <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-black text-white">
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

            {/* Money Back */}
            <div className="flex items-center justify-center gap-4 lg:justify-start">

              <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-black text-white">
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