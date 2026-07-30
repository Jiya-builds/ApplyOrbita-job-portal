"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "How can I contact ApplyOrbitA?",
    answer:
      "You can contact our team by filling out the contact form, emailing us, or reaching out through our support channels.",
  },
  {
    question: "How long does it take to receive a response?",
    answer:
      "Our team usually responds within 24 hours after receiving your query.",
  },
  {
    question: "Can I get a consultation before choosing a service?",
    answer:
      "Yes, our experts can guide you and help you choose the right service based on your career goals.",
  },
  {
    question: "Which countries do you provide support for?",
    answer:
      "We currently support career opportunities and recruitment services for the USA, UK, and Australia.",
  },
  {
    question: "Can I track my job application progress?",
    answer:
      "Yes, candidates receive regular updates and progress reports regarding their applications.",
  },
  {
    question: "Do you help with interviews also?",
    answer:
      "Yes, we provide interview preparation, career guidance, and expert support to improve your chances of success.",
  },
];

export default function ContactFAQ() {

  const [openIndex, setOpenIndex] = useState<number | null>(0);


  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };


  return (
    <section
  id="faq"
  className="py-28 bg-white"
>

      <div className="max-w-5xl mx-auto px-6">


        {/* Heading */}

        <div className="text-center">

          <span className="uppercase tracking-[4px] text-orange-500 font-semibold">
            FAQs
          </span>


          <h2 className="mt-5 text-5xl font-bold text-[#0F2D6B]">
            Frequently Asked Questions
          </h2>


          <p className="mt-6 text-lg text-gray-600 leading-8">
            Find answers to common questions about contacting our team
            and our recruitment services.
          </p>

        </div>



        {/* FAQ Items */}

        <div className="mt-16 space-y-5">


          {faqs.map((faq, index) => {

            const isOpen = openIndex === index;


            return (

              <div
                key={index}
                className="rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden transition hover:shadow-md"
              >


                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >

                  <h3 className="text-lg font-semibold text-[#0F2D6B]">
                    {faq.question}
                  </h3>


                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100">

                    {isOpen ? (
                      <Minus
                        size={20}
                        className="text-orange-500"
                      />
                    ) : (
                      <Plus
                        size={20}
                        className="text-orange-500"
                      />
                    )}

                  </div>


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