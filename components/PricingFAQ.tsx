"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "Which pricing plan is best for me?",
    answer:
      "If you're a student or fresher, the USA Starter, UK Graduate, or Australia plan is a great choice. Experienced professionals looking for dedicated support should choose the UK Professional plan.",
  },
  {
    question: "Do I need to pay every month?",
    answer:
      "No. All plans shown here are one-time packages. There are no monthly subscription charges.",
  },
  {
    question: "Do you guarantee a job?",
    answer:
      "No recruitment company can guarantee a job. We help improve your chances through resume optimization, verified applications, interview preparation, and expert guidance.",
  },
  {
    question: "Can I upgrade my plan later?",
    answer:
      "Yes. If your career goals change, you can upgrade to a higher plan at any time by contacting our support team.",
  },
  {
    question: "Which countries do you support?",
    answer:
      "Currently ApplyOrbitA provides recruitment support for opportunities across the USA, United Kingdom, and Australia.",
  },
  {
    question: "How soon will my application process begin?",
    answer:
      "After your purchase and document verification, our recruitment team begins processing your applications as quickly as possible.",
  },
];

export default function PricingFAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-28 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-5xl mx-auto px-6">

        <div className="text-center mb-16">

          <span className="uppercase tracking-[4px] text-orange-500 font-semibold">
            FAQ
          </span>

          <h2 className="mt-4 text-5xl font-bold text-[#0F2D6B]">
            Frequently Asked Questions
          </h2>

          <p className="mt-5 text-lg text-gray-600 max-w-2xl mx-auto">
            Find answers to the most common questions about our pricing plans
            and recruitment services.
          </p>

        </div>

        <div className="space-y-6">

          {faqs.map((faq, index) => {

            const isOpen = open === index;

            return (

              <div
                key={index}
                className="bg-white rounded-3xl shadow-lg border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-xl"
              >

                <button
                  onClick={() => setOpen(isOpen ? null : index)}
                  className="w-full flex justify-between items-center px-8 py-7 text-left"
                >

                  <h3 className="text-xl font-semibold text-[#0F2D6B] pr-5">
                    {faq.question}
                  </h3>

                  <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                    {isOpen ? (
                      <Minus className="text-orange-500" size={20} />
                    ) : (
                      <Plus className="text-orange-500" size={20} />
                    )}
                  </div>

                </button>

                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr]"
                      : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-8 pb-8 text-gray-600 leading-8">
                      {faq.answer}
                    </p>
                  </div>
                </div>

              </div>

            );

          })}

        </div>

      </div>
    </section>
  );
}