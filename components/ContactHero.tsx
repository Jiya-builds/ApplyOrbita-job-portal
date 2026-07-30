"use client";
import { ArrowRight, MessageCircle } from "lucide-react";
import Link from "next/link";

export default function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-orange-50/50 to-white py-28">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-12 items-center">


          {/* Left Content */}

          <div>

            <span className="inline-block rounded-full bg-orange-100 px-5 py-2 text-sm font-semibold text-orange-500">
              Contact Us
            </span>


            <h1 className="mt-6 text-6xl font-bold leading-tight text-[#0F2D6B]">

              Let's Build Your
              <span className="text-orange-500">
                {" "}Career
              </span>

              <br />

              Together

            </h1>


            <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">

              Have questions about our services or need help finding the
              right career opportunity? Our experts are here to guide you
              at every step.

            </p>


            <div className="mt-10 flex flex-wrap gap-5">


              <Link
                href="#contact-form"
                className="flex items-center gap-3 rounded-xl bg-orange-500 px-8 py-4 font-semibold text-white transition hover:bg-orange-600"
              >
                Contact Us
                <ArrowRight size={18}/>
              </Link>


              <button
  onClick={() => {
    const faq = document.getElementById("faq");

    if (faq) {
      faq.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }}
  className="flex items-center gap-3 rounded-xl border-2 border-[#0F2D6B] px-8 py-4 font-semibold text-[#0F2D6B] transition hover:bg-[#0F2D6B] hover:text-white"
>
  View FAQs
</button>


            </div>


          </div>



          {/* Right Card */}

          <div className="relative">


            <div className="rounded-[35px] bg-[#0F2D6B] p-10 text-white shadow-2xl">


              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-500">

                <MessageCircle size={32}/>

              </div>


              <h3 className="mt-8 text-3xl font-bold">

                Need Career Assistance?

              </h3>


              <p className="mt-5 text-blue-100 leading-8">

                Connect with our experts and get personalized guidance
                for your international career journey.

              </p>



              <div className="mt-8 space-y-4">


                <div className="rounded-xl bg-white/10 p-4">
                  Resume & LinkedIn Support
                </div>


                <div className="rounded-xl bg-white/10 p-4">
                  Job Application Assistance
                </div>


                <div className="rounded-xl bg-white/10 p-4">
                  Interview Preparation
                </div>


              </div>


            </div>


          </div>


        </div>

      </div>

    </section>
  );
}