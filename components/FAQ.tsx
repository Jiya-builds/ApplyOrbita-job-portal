"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What is ApplyOrbitA?",
    answer:
      "ApplyOrbitA is a career platform that helps students and professionals find internships and job opportunities across India, the USA, the UK, and Australia.",
  },
  {
    question: "How does ApplyOrbitA work?",
    answer:
      "Students can create their profile, explore suitable opportunities, and apply for internships and jobs with support from ApplyOrbitA.",
  },
  {
    question: "Which countries do you support?",
    answer:
      "ApplyOrbitA provides career opportunities for candidates from India, USA, UK, and Australia.",
  },
  {
    question: "Can freshers apply?",
    answer:
      "Yes, freshers, students, and early career professionals can apply for internships and job opportunities through ApplyOrbitA.",
  },
  {
    question: "Do you help with resume building?",
    answer:
      "Yes, ApplyOrbitA helps candidates improve their resumes and prepare better for interviews and career opportunities.",
  },
  {
    question: "How can I find suitable opportunities?",
    answer:
      "Our platform connects your skills and interests with relevant internship and job opportunities from trusted companies.",
  },
  {
    question: "Are opportunities verified?",
    answer:
      "Yes, we focus on providing genuine opportunities from trusted companies and organizations.",
  },
  {
    question: "How can companies hire talent?",
    answer:
      "Companies can connect with skilled students and professionals to find the right candidates for their requirements.",
  },
];

export default function FAQ() {

  const [openIndex, setOpenIndex] = useState<number | null>(null);


  const toggleFAQ = (index:number) => {
    setOpenIndex(openIndex === index ? null : index);
  };


  return (
    <section className="bg-[#fffaf5] py-24">

      <div className="max-w-4xl mx-auto px-6">


        {/* Heading */}
        <div className="text-center mb-14">

          <p className="text-orange-500 font-semibold uppercase tracking-widest">
            FAQ
          </p>


          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-[#0F2D6B]">
            Frequently Asked Questions
          </h2>


          <p className="mt-5 text-gray-600 text-lg">
            Everything you need to know about ApplyOrbitA.
          </p>

        </div>



        {/* FAQ Cards */}
        <div className="space-y-4">


          {faqs.map((faq,index)=>(

            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl overflow-hidden"
            >


              <button

                onClick={()=>toggleFAQ(index)}

                className="w-full flex justify-between items-center px-6 py-5 text-left cursor-pointer"

              >


                <h3 className="text-lg md:text-xl font-semibold text-[#0F2D6B]">

                  {faq.question}

                </h3>



                {
                  openIndex === index ?

                  <Minus 
                    size={24}
                    className="text-orange-500"
                  />

                  :

                  <Plus
                    size={24}
                    className="text-orange-500"
                  />

                }


              </button>




              <div

                className={`grid transition-all duration-300 ${
                  
                  openIndex === index
                  ?
                  "grid-rows-[1fr] opacity-100"
                  :
                  "grid-rows-[0fr] opacity-0"

                }`}

              >

                <div className="overflow-hidden">


                  <p className="px-6 pb-6 text-gray-600 text-base leading-7">

                    {faq.answer}

                  </p>


                </div>

              </div>



            </div>

          ))}


        </div>


      </div>


    </section>
  );
}