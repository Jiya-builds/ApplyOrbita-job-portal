"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What services does ApplyOrbitA provide?",
    answer:
      "We offer Resume Optimization, LinkedIn Profile Optimization, Reverse Recruitment, Job Application Management, Cover Letter Assistance, Interview Preparation, Career Guidance, and Weekly Progress Reports.",
  },
  {
    question: "What is Reverse Recruitment?",
    answer:
      "Instead of searching and applying for jobs yourself, our experts actively find suitable opportunities and submit applications on your behalf.",
  },
  {
    question: "Do you apply only to verified companies?",
    answer:
      "Yes. We carefully select verified employers and trusted opportunities to ensure quality and authenticity.",
  },
  {
    question: "Will I receive updates about my applications?",
    answer:
      "Absolutely. You'll receive weekly progress reports with updates on submitted applications, recruiter responses, and interview invitations.",
  },
  {
    question: "Can you optimize my existing resume and LinkedIn profile?",
    answer:
      "Yes. Our experts improve your resume and LinkedIn profile to make them ATS-friendly and more attractive to recruiters.",
  },
  {
    question: "Which countries do you currently support?",
    answer:
      "We currently provide recruitment support for opportunities in the USA, United Kingdom, and Australia.",
  },
];

export default function ServicesFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-28 bg-gradient-to-b from-white to-orange-50/30">

      <div className="max-w-5xl mx-auto px-6">

        <div className="text-center">

          <span className="uppercase tracking-[4px] text-orange-500 font-semibold">
            FAQs
          </span>

          <h2 className="mt-5 text-5xl font-bold text-[#0F2D6B]">
            Frequently Asked Questions
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-8">
            Find answers to the most common questions about our recruitment services.
          </p>

        </div>

        <div className="mt-16 space-y-5">

          {faqs.map((faq, index) => {

            const isOpen = openIndex === index;

            return (

              <div
                key={index}
                className="rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden"
              >

                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >

                  <h3 className="text-lg font-semibold text-[#0F2D6B]">
                    {faq.question}
                  </h3>

                  {isOpen ? (
                    <Minus className="text-orange-500" />
                  ) : (
                    <Plus className="text-orange-500" />
                  )}

                </button>

                {isOpen && (
                  <div className="px-6 pb-6">

                    <p className="text-gray-600 leading-8">
                      {faq.answer}
                    </p>

                  </div>
                )}

              </div>

            );

          })}

        </div>

      </div>

    </section>
  );
}