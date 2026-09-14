"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, Zap } from "lucide-react";

type CountryKey = "usa" | "uk" | "australia";

type Feature = {
  title: string;
  description: string;
  orange: boolean;
};

type Plan = {
  title: string;
  oldPrice: string;
  price: string;
  save: string;
  badge: string;
  features: Feature[];
};

const pricingData: Record<
  CountryKey,
  {
    country: string;
    flag: string;
    description: string;
    plans: Plan[];
  }
> = {
  usa: {
    country: "United States",
    flag: "🇺🇸",
    description:
      "Choose the recruitment package that best matches your career goals in the United States.",

    plans: [
      {
        title: "PROFESSIONAL",
        oldPrice: "$449",
        price: "$349",
        save: "Save 22%",
        badge: "ECONOMICAL",
        features: [
          {
            title: "500 Applications",
            description: "We find & apply to suitable USA jobs for you",
            orange: true,
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
        oldPrice: "$699",
        price: "$599",
        save: "Save 14%",
        badge: "MOST POPULAR",
        features: [
          {
            title: "1200 Applications",
            description: "Extensive application support across the USA",
            orange: true,
          },
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
    ],
  },

  uk: {
    country: "United Kingdom",
    flag: "🇬🇧",
    description:
      "Choose the recruitment package that best matches your career goals in the United Kingdom.",

    plans: [
      {
        title: "PROFESSIONAL",
        oldPrice: "£379",
        price: "£299",
        save: "Save 21%",
        badge: "ECONOMICAL",
        features: [
          {
            title: "400 Applications",
            description: "We find & apply to suitable UK jobs for you",
            orange: true,
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
        oldPrice: "£579",
        price: "£499",
        save: "Save 14%",
        badge: "MOST POPULAR",
        features: [
          {
            title: "900 Applications",
            description: "Extensive application support across the UK",
            orange: true,
          },
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
    ],
  },

  australia: {
    country: "Australia",
    flag: "🇦🇺",
    description:
      "Choose the recruitment package that best matches your career goals in Australia.",

    plans: [
      {
        title: "PROFESSIONAL",
        oldPrice: "A$599",
        price: "A$499",
        save: "Save 17%",
        badge: "ECONOMICAL",
        features: [
          {
            title: "400 Applications",
            description: "We find & apply to suitable Australian jobs for you",
            orange: true,
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
        oldPrice: "A$899",
        price: "A$799",
        save: "Save 11%",
        badge: "MOST POPULAR",
        features: [
          {
            title: "1000 Applications",
            description: "Extensive application support across Australia",
            orange: true,
          },
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
    ],
  },
};

export default function Pricing() {
  const [selectedCountry, setSelectedCountry] =
    useState<CountryKey>("usa");

  const current = pricingData[selectedCountry];

  const countries = [
    {
      key: "usa" as CountryKey,
      flag: "🇺🇸",
      title: "United States",
      subtitle: "USA Career Opportunities",
    },
    {
      key: "uk" as CountryKey,
      flag: "🇬🇧",
      title: "United Kingdom",
      subtitle: "UK Career Opportunities",
    },
    {
      key: "australia" as CountryKey,
      flag: "🇦🇺",
      title: "Australia",
      subtitle: "Australian Career Opportunities",
    },
  ];

  return (
    <section
      id="plans"
      className="relative overflow-hidden bg-white py-24"
    >
      {/* Background dots */}

      <div className="absolute right-0 top-10 h-72 w-72 opacity-20 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:18px_18px]" />

      <div className="absolute bottom-0 left-0 h-72 w-72 opacity-20 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:18px_18px]" />

      <div className="relative mx-auto max-w-6xl px-6">

        {/* Heading */}

        <div className="mb-12 text-center">

          <span className="font-bold uppercase tracking-[3px] text-orange-500">
            Career Packages
          </span>

          <h2 className="mt-5 text-4xl font-extrabold text-black md:text-5xl">
            Choose Your Destination
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-gray-600">
            Select your preferred destination and explore the
            recruitment package designed for your career goals.
          </p>

        </div>

        {/* Country Selector */}

        <div className="mb-20 grid gap-5 md:grid-cols-3">

          {countries.map((country) => {

            const isSelected =
              selectedCountry === country.key;

            return (
              <button
                key={country.key}
                onClick={() =>
                  setSelectedCountry(country.key)
                }
                className={`relative overflow-hidden rounded-2xl border p-6 text-left transition-all duration-300 ${
                  isSelected
                    ? "border-black bg-black text-white shadow-xl -translate-y-1"
                    : "border-gray-200 bg-white text-black hover:border-orange-500 hover:-translate-y-1 hover:shadow-lg"
                }`}
              >

                <div className="flex items-center gap-4">

                  <div className="text-4xl">
                    {country.flag}
                  </div>

                  <div>

                    <h3 className="text-xl font-bold">
                      {country.title}
                    </h3>

                    <p
                      className={`mt-1 text-sm ${
                        isSelected
                          ? "text-gray-300"
                          : "text-gray-500"
                      }`}
                    >
                      {country.subtitle}
                    </p>

                  </div>

                </div>

                {isSelected && (
                  <div className="absolute bottom-0 left-0 h-1 w-full bg-orange-500" />
                )}

              </button>
            );

          })}

        </div>

        {/* Selected Country */}

        <div className="mb-14 text-center">

          <div className="text-5xl">
            {current.flag}
          </div>

          <h3 className="mt-4 text-3xl font-extrabold text-black md:text-4xl">
            {current.country} Plans
          </h3>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            {current.description}
          </p>

        </div>

        {/* Pricing Cards */}

        <div className="grid items-start gap-10 lg:grid-cols-2">

          {current.plans.map((plan) => (

            <div
              key={plan.title}
              className="relative pt-8"
            >

              {/* Black Top Tab */}

              <div className="absolute left-0 top-0 z-10">

                <div className="relative bg-black px-7 py-3 text-sm font-bold text-white md:text-base">

                  {plan.title}

                  <div className="absolute right-[-18px] top-0 h-full w-[18px] bg-black" />

                  <div className="absolute bottom-0 right-[-32px] h-[7px] w-[32px] bg-black" />

                  <div className="absolute bottom-0 right-[-58px] h-4 w-4 bg-black" />

                </div>

              </div>

              {/* Card */}

              <div className="relative overflow-hidden rounded-[18px] border border-black bg-white shadow-sm">

                {/* Orange Top Line */}

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

                  <div className="mt-2">

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
                            <p className="mt-1 text-sm leading-5 text-gray-500">
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
                    className="mt-9 block w-full rounded-lg bg-black py-4 text-center font-bold text-white transition-all duration-300 hover:bg-orange-500"
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

            <div className="flex items-center justify-center gap-4 lg:justify-start">

              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-black text-white">
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

            <div className="flex items-center justify-center gap-4 lg:justify-start">

              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-black text-white">
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

            <div className="flex items-center justify-center gap-4 lg:justify-start">

              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-black text-white">
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

            <div className="flex items-center justify-center gap-4 lg:justify-start">

              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-black text-white">
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