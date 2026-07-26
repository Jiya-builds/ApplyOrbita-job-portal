"use client";

import { useState } from "react";
import { Check } from "lucide-react";

const pricingData = {
  usa: {
    country: "United States",
    flag: "🇺🇸",
    description:
      "Choose the right package to maximize your chances of getting hired in the USA.",

    plans: [
      {
        title: "Starter",
        price: "$99",
        badge: "",
        features: [
          "ATS Resume",
          "150 Job Applications",
          "Cover Letter",
          "LinkedIn Review",
          "Email Support",
        ],
      },

      {
        title: "Professional",
        price: "$199",
        badge: "POPULAR",

        features: [
          "300 Job Applications",
          "Resume Optimization",
          "Priority Applications",
          "Interview Preparation",
          "Recruiter Support",
        ],
      },

      {
        title: "Premium",
        price: "$299",

        badge: "",

        features: [
          "Unlimited Applications",
          "Dedicated Recruiter",
          "Career Consultation",
          "Interview Coaching",
          "Priority Support",
        ],
      },
    ],
  },

  uk: {
    country: "United Kingdom",
    flag: "🇬🇧",

    description:
      "Professional recruitment packages designed for UK careers.",

    plans: [
      {
        title: "Starter",

        price: "£79",

        badge: "",

        features: [
          "ATS Resume",
          "150 Applications",
          "UK CV Review",
          "Email Support",
          "Interview Tips",
        ],
      },

      {
        title: "Professional",

        price: "£149",

        badge: "POPULAR",

        features: [
          "300 Applications",
          "Priority Matching",
          "Recruiter Guidance",
          "LinkedIn Review",
          "Interview Preparation",
        ],
      },

      {
        title: "Premium",

        price: "£249",

        badge: "",

        features: [
          "Unlimited Applications",
          "Dedicated Recruiter",
          "Career Coach",
          "Priority Processing",
          "Everything Included",
        ],
      },
    ],
  },

  australia: {
    country: "Australia",

    flag: "🇦🇺",

    description:
      "Apply confidently for verified opportunities across Australia.",

    plans: [
      {
        title: "Starter",

        price: "A$99",

        badge: "",

        features: [
          "ATS Resume",
          "150 Applications",
          "Resume Review",
          "Email Support",
          "Verified Employers",
        ],
      },

      {
        title: "Professional",

        price: "A$179",

        badge: "POPULAR",

        features: [
          "300 Applications",
          "Priority Matching",
          "LinkedIn Optimization",
          "Interview Preparation",
          "Recruiter Support",
        ],
      },

      {
        title: "Premium",

        price: "A$279",

        badge: "",

        features: [
          "Unlimited Applications",
          "Career Consultation",
          "Dedicated Recruiter",
          "Fast Processing",
          "Premium Support",
        ],
      },
    ],
  },
};

export default function Pricing() {
  const [selectedCountry, setSelectedCountry] =
    useState<keyof typeof pricingData>("uk");

  const current = pricingData[selectedCountry];

  return (
    <section
      id="plans"
      className="py-28 bg-gradient-to-b from-white via-orange-50/40 to-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center">

          <span className="uppercase tracking-[4px] text-orange-500 font-semibold">
            Career Packages
          </span>

          <h2 className="mt-5 text-5xl font-bold text-[#0F2D6B]">

            Choose Your Destination

          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-lg leading-8 text-gray-600">

            Select the country where you want to work.
            We'll show the most suitable recruitment
            packages for your destination.

          </p>

        </div>

        {/* Country Selector */}

<div className="grid md:grid-cols-3 gap-8 mt-16">

  {[
    {
      key: "usa",
      flag: "🇺🇸",
      title: "United States",
      subtitle: "For Students & Professionals",
    },
    {
      key: "uk",
      flag: "🇬🇧",
      title: "United Kingdom",
      subtitle: "Graduate & Professional Jobs",
    },
    {
      key: "australia",
      flag: "🇦🇺",
      title: "Australia",
      subtitle: "Career Opportunities",
    },
  ].map((country) => (

    <button
      key={country.key}
      onClick={() =>
        setSelectedCountry(country.key as keyof typeof pricingData)
      }
      className={`group relative overflow-hidden rounded-[30px] border p-8 text-left transition-all duration-500 ${
        selectedCountry === country.key
          ? "bg-[#0F2D6B] text-white border-[#0F2D6B] shadow-2xl scale-105"
          : "bg-white hover:border-orange-500 hover:-translate-y-2 hover:shadow-xl"
      }`}
    >

      {/* Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition"></div>

      <div className="relative">

        <div className="text-6xl">
          {country.flag}
        </div>

        <h3 className="mt-6 text-3xl font-bold">
          {country.title}
        </h3>

        <p className="mt-3 opacity-80 leading-7">
          {country.subtitle}
        </p>

        <div className="mt-8 flex items-center justify-between">

          <div>

            <p className="text-sm opacity-70">
              Available Plans
            </p>

            <h4 className="text-xl font-bold">
              3 Packages
            </h4>

          </div>

          <div
            className={`w-12 h-12 rounded-full flex items-center justify-center transition ${
              selectedCountry === country.key
                ? "bg-orange-500"
                : "bg-orange-100 text-orange-500 group-hover:bg-orange-500 group-hover:text-white"
            }`}
          >
            →
          </div>

        </div>

      </div>

    </button>

  ))}

</div>
        {/* Selected Country Heading */}

        <div className="text-center mt-20">

          <div className="text-6xl">
            {current.flag}
          </div>

          <h2 className="mt-5 text-4xl font-bold text-[#0F2D6B]">
            {current.country} Packages
          </h2>

          <p className="mt-5 text-lg text-gray-600 max-w-2xl mx-auto">
            {current.description}
          </p>

        </div>

        {/* Pricing Cards */}

        <div className="grid lg:grid-cols-3 gap-8 mt-16">
                    {current.plans.map((plan, index) => (

            <div
              key={index}
              className={`relative rounded-[30px] overflow-hidden transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl ${
                plan.badge
                  ? "bg-[#0F2D6B] text-white scale-105 shadow-2xl"
                  : "bg-white border border-gray-200 hover:border-orange-400"
              }`}
            >
              {/* Trust Strip */}

<div className="mt-20 rounded-[30px] bg-[#0F2D6B] px-10 py-8">

  <div className="grid md:grid-cols-4 gap-8 text-center text-white">

    <div>
      <h3 className="text-3xl">💳</h3>
      <p className="mt-3 font-semibold">
        One-Time Payment
      </p>
    </div>

    <div>
      <h3 className="text-3xl">🔒</h3>
      <p className="mt-3 font-semibold">
        No Hidden Charges
      </p>
    </div>

    <div>
      <h3 className="text-3xl">🌍</h3>
      <p className="mt-3 font-semibold">
        Verified Employers
      </p>
    </div>

    <div>
      <h3 className="text-3xl">🎯</h3>
      <p className="mt-3 font-semibold">
        Expert Career Guidance
      </p>
    </div>

  </div>

</div>

              {/* Popular Badge */}

              {plan.badge && (

                <div className="absolute top-5 right-5 bg-orange-500 text-white px-4 py-2 rounded-full text-xs font-bold tracking-wide">

                  ⭐ {plan.badge}

                </div>

              )}

              {/* Top Border */}

              <div className="h-2 bg-gradient-to-r from-orange-500 via-red-500 to-orange-400"></div>

              <div className="p-10">

                <h3 className="text-3xl font-bold">
                  {plan.title}
                </h3>

                <p className="mt-8 text-sm uppercase tracking-[3px] opacity-70">
                  Starting From
                </p>

                <h2 className="mt-2 text-6xl font-extrabold text-orange-500">
                  {plan.price}
                </h2>

                <p className="mt-2 opacity-70">
                  One-Time Package
                </p>

                <div className="my-10 border-t border-gray-300/20"></div>

                <div className="space-y-5">

                  {plan.features.map((feature, i) => (

                    <div
                      key={i}
                      className="flex items-center gap-4"
                    >

                      <div className="h-8 w-8 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">

                        <Check
                          size={16}
                          className="text-orange-500"
                        />

                      </div>

                      <span
                        className={`${
                          plan.badge
                            ? "text-white"
                            : "text-gray-700"
                        }`}
                      >
                        {feature}
                      </span>

                    </div>

                  ))}

                </div>

                <button
                  className={`mt-12 w-full rounded-xl py-4 font-semibold transition-all duration-300 ${
                    plan.badge
                      ? "bg-orange-500 hover:bg-orange-600 text-white"
                      : "bg-[#0F2D6B] hover:bg-orange-500 text-white"
                  }`}
                >
                  Choose Plan
                </button>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}