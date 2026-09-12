"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "Which pricing plan is best for me?",
    answer:
      "The Professional plan is suitable for candidates who want comprehensive application support, while the Executive plan is designed for candidates looking for a more extensive recruitment and career support package.",
  },
  {
    question: "Do I need to pay every month?",
    answer:
      "No. The pricing packages shown here are one-time packages. There are no monthly subscription charges.",
  },
  {
    question: "Do you guarantee a job?",
    answer:
      "No recruitment company can guarantee a job. ApplyOrbitA helps improve your chances through job applications, resume support, recruiter outreach, interview preparation and career guidance.",
  },
  {
    question: "Can I upgrade my plan later?",
    answer:
      "Yes. If your career requirements change, you can contact our support team to discuss upgrading your package.",
  },
  {
    question: "Which country does this pricing apply to?",
    answer:
      "These pricing plans are specifically designed for recruitment opportunities in the United States.",
  },
  {
    question: "When will my application process begin?",
    answer:
      "After your purchase and required document verification, our recruitment team will begin processing your applications.",
  },
];

export default function PricingFAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-24 bg-gray-50">

      <div className="max-w-5xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">

          <span className="uppercase tracking-[3px] text-orange-500 font-bold">
            FAQ
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-extrabold text-black">
            Frequently Asked Questions
          </h2>

          <p className="mt-5 text-lg text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our USA pricing plans
            and recruitment services.
          </p>

        </div>

        {/* FAQs */}
        <div className="space-y-4">

          {faqs.map((faq, index) => {

            const isOpen = open === index;

            return (
              <div
                key={index}
                className={`bg-white border rounded-2xl overflow-hidden transition-all duration-300 ${
                  isOpen
                    ? "border-black shadow-md"
                    : "border-gray-200"
                }`}
              >

                <button
                  onClick={() =>
                    setOpen(isOpen ? null : index)
                  }
                  className="w-full flex items-center justify-between gap-5 px-6 md:px-8 py-6 text-left"
                >

                  <h3 className="text-lg md:text-xl font-bold text-black">
                    {faq.question}
                  </h3>

                  <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center flex-shrink-0">

                    {isOpen ? (
                      <Minus size={19} />
                    ) : (
                      <Plus size={19} />
                    )}

                  </div>

                </button>

                <div
                  className={`grid transition-all duration-300 ${
                    isOpen
                      ? "grid-rows-[1fr]"
                      : "grid-rows-[0fr]"
                  }`}
                >

                  <div className="overflow-hidden">

                    <p className="px-6 md:px-8 pb-7 text-gray-600 leading-7">
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