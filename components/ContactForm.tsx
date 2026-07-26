"use client";

import { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {

  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "apply_orbita", 
        "template_wemaw2k",
        form.current!,
        "ZlOMo-E1-MC_Vy26O"
      )
      .then(
        () => {
          alert("Message sent successfully!");
          form.current?.reset();
        },
        () => {
          alert("Failed to send message!");
        }
      );
  };


  return (
    <section
      id="contact-form"
      className="py-28 bg-gradient-to-b from-white via-orange-50/30 to-white"
    >

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-12 items-start">


          {/* Left Form */}

          <div className="rounded-[32px] bg-white border border-gray-200 shadow-xl p-10">

            <span className="uppercase tracking-[4px] text-orange-500 font-semibold">
              Contact Form
            </span>


            <h2 className="mt-5 text-5xl font-bold text-[#0F2D6B] leading-tight">
              Let's Build
              <br />
              Your Career
              <br />
              Together
            </h2>


            <p className="mt-6 text-gray-600 leading-8">
              Fill out the form and our recruitment experts will get
              back to you with the right guidance.
            </p>



            <form
              ref={form}
              onSubmit={sendEmail}
              className="mt-12 space-y-6"
            >


              <div>

                <label className="mb-2 block font-medium text-[#0F2D6B]">
                  Full Name
                </label>

                <input
                  name="user_name"
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full rounded-2xl border border-gray-300 px-5 py-4 outline-none focus:border-orange-500"
                  required
                />

              </div>



              <div>

                <label className="mb-2 block font-medium text-[#0F2D6B]">
                  Email Address
                </label>

                <input
                  name="user_email"
                  type="email"
                  placeholder="example@email.com"
                  className="w-full rounded-2xl border border-gray-300 px-5 py-4 outline-none focus:border-orange-500"
                  required
                />

              </div>



              <div>

                <label className="mb-2 block font-medium text-[#0F2D6B]">
                  Phone Number
                </label>

                <input
                  name="user_phone"
                  type="tel"
                  placeholder="+44 1234 567890"
                  className="w-full rounded-2xl border border-gray-300 px-5 py-4 outline-none focus:border-orange-500"
                />

              </div>



              <div>

                <label className="mb-2 block font-medium text-[#0F2D6B]">
                  Preferred Country
                </label>

                <select
                  name="country"
                  className="w-full rounded-2xl border border-gray-300 px-5 py-4 outline-none focus:border-orange-500"
                >

                  <option>Select Country</option>
                  <option>United Kingdom</option>
                  <option>United States</option>
                  <option>Australia</option>

                </select>

              </div>
              
              <div>

                <label className="mb-2 block font-medium text-[#0F2D6B]">
                  Select Service
                </label>

                <select
                  name="service"
                  className="w-full rounded-2xl border border-gray-300 px-5 py-4 outline-none focus:border-orange-500"
                >

                  <option>Select a Service</option>
                  <option>Resume Optimization</option>
                  <option>LinkedIn Profile Optimization</option>
                  <option>Reverse Recruitment</option>
                  <option>Job Application Management</option>
                  <option>Cover Letter Assistance</option>
                  <option>Interview Preparation</option>
                  <option>Career Guidance</option>
                  <option>Weekly Progress Reports</option>

                </select>

              </div>



              <div>

                <label className="mb-2 block font-medium text-[#0F2D6B]">
                  Message
                </label>

                <textarea
                  name="message"
                  rows={5}
                  placeholder="Tell us about your career goals..."
                  className="w-full rounded-2xl border border-gray-300 px-5 py-4 outline-none resize-none focus:border-orange-500"
                  required
                />

              </div>



              <button
                type="submit"
                className="w-full rounded-2xl bg-orange-500 py-4 text-lg font-semibold text-white transition hover:bg-orange-600"
              >
                Send Message
              </button>


            </form>

          </div>




          {/* Right Side Contact Information */}


          <div className="space-y-8">


            <div className="rounded-[32px] bg-[#0F2D6B] p-10 text-white shadow-2xl">


              <span className="uppercase tracking-[4px] text-orange-400 font-semibold">
                Contact Information
              </span>


              <h3 className="mt-5 text-4xl font-bold">
                We're Here To Help
              </h3>


              <p className="mt-5 text-blue-100 leading-8">
                Have questions about our services? Connect with our
                recruitment experts and get personalized guidance.
              </p>



              <div className="mt-10 space-y-7">


                <div className="flex gap-4">

                  <div className="h-14 w-14 rounded-2xl bg-orange-500 flex items-center justify-center text-xl">
                    ✉️
                  </div>


                  <div>

                    <h4 className="font-semibold text-lg">
                      Email Support
                    </h4>

                    <p className="text-blue-100">
                      applyorbita@gmail.com
                    </p>

                  </div>

                </div>




                <div className="flex gap-4">

                  <div className="h-14 w-14 rounded-2xl bg-orange-500 flex items-center justify-center text-xl">
                    📞
                  </div>


                  <div>

                    <h4 className="font-semibold text-lg">
                      Phone Support
                    </h4>

                    <p className="text-blue-100">
                      +44 7577 011891
                    </p>

                  </div>

                </div>




                <div className="flex gap-4">

                  <div className="h-14 w-14 rounded-2xl bg-orange-500 flex items-center justify-center text-xl">
                    ⏰
                  </div>


                  <div>

                    <h4 className="font-semibold text-lg">
                      Working Hours
                    </h4>

                    <p className="text-blue-100">
                      Monday - Friday
                    </p>

                    <p className="text-blue-100">
                      9:00 AM - 6:00 PM
                    </p>

                  </div>

                </div>


              </div>


            </div>




            <div className="rounded-[32px] bg-orange-50 border border-orange-200 p-8">


              <h3 className="text-2xl font-bold text-[#0F2D6B]">
                Quick Support
              </h3>


              <p className="mt-4 text-gray-600 leading-8">
                Our team usually responds within 24 hours and helps
                you choose the right career service.
              </p>


              <div className="mt-6 flex items-center gap-3">

                <span className="h-3 w-3 rounded-full bg-green-500"></span>

                <span className="font-semibold text-[#0F2D6B]">
                  Team Available
                </span>

              </div>


            </div>


          </div>



        </div>


      </div>


    </section>
  );
}