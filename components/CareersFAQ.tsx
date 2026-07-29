"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How do I apply for a job?",
    answer:
      "Browse available opportunities, select the role that matches your profile, and submit your application through ApplyOrbitA.",
  },
  {
    question: "Do I need prior work experience?",
    answer:
      "Not necessarily. We have opportunities for freshers as well as experienced professionals across multiple industries.",
  },
  {
    question: "Which countries do you provide jobs in?",
    answer:
      "We currently help candidates explore opportunities in the United Kingdom, the United States, and Australia.",
  },
  {
    question: "Will ApplyOrbitA help with interview preparation?",
    answer:
      "Yes. We provide interview guidance, resume optimization, LinkedIn profile improvement, and career coaching.",
  },
  {
    question: "Are the jobs verified?",
    answer:
      "Yes. We work with trusted employers and recruitment partners to provide genuine international opportunities.",
  },
];

export default function CareersFAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-28 bg-white">

      <div className="max-w-5xl mx-auto px-6">

        <div className="text-center">

          <span className="uppercase tracking-[4px] text-orange-500 font-semibold">
            FAQs
          </span>

          <h2 className="mt-5 text-5xl font-bold text-[#0F2D6B]">
            Frequently Asked Questions
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-8">
            Everything you need to know before applying for your next opportunity.
          </p>

        </div>

        <div className="mt-16 space-y-5">

          {faqs.map((faq, index) => (

            <div
              key={index}
              className="rounded-2xl border border-gray-200 bg-white shadow-sm"
            >

              <button
                onClick={() => setOpen(open === index ? null : index)}
                className="flex w-full items-center justify-between p-6 text-left"
              >

                <h3 className="text-lg font-semibold text-[#0F2D6B]">
                  {faq.question}
                </h3>

                <ChevronDown
                  className={`transition-transform duration-300 ${
                    open === index ? "rotate-180 text-orange-500" : ""
                  }`}
                />

              </button>

              {open === index && (

                <div className="px-6 pb-6">

                  <p className="leading-7 text-gray-600">
                    {faq.answer}
                  </p>

                </div>

              )}

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}