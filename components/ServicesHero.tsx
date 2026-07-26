import Link from "next/link";
import { ArrowRight, BriefcaseBusiness } from "lucide-react";

export default function ServicesHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-white to-blue-50 py-28">

      {/* Background Blur */}
      <div className="absolute -top-32 -left-32 h-72 w-72 rounded-full bg-orange-300/20 blur-3xl"></div>

      <div className="absolute -bottom-32 -right-32 h-72 w-72 rounded-full bg-blue-300/20 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Side */}

          <div>

            <span className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-5 py-2 text-orange-600 font-semibold">

              <BriefcaseBusiness size={18} />

              Professional Career Services

            </span>

            <h1 className="mt-8 text-5xl lg:text-7xl font-bold text-[#0F2D6B] leading-tight">

              Everything You Need
              <br />
              To Land Your
              <br />
              Dream Job Abroad.

            </h1>

            <p className="mt-8 text-lg text-gray-600 leading-8 max-w-xl">

              ApplyOrbitA offers complete career support—from
              Resume Optimization and LinkedIn Profile Enhancement
              to Reverse Recruitment, Interview Preparation,
              and Weekly Progress Tracking.

            </p>

            <div className="mt-10 flex flex-wrap gap-5">

              <Link
                href="#services"
                className="inline-flex items-center gap-3 rounded-xl bg-orange-500 px-8 py-4 text-white font-semibold transition hover:bg-orange-600"
              >
                Explore Services

                <ArrowRight size={18} />

              </Link>

              <Link
                href="/contact"
                className="rounded-xl border-2 border-[#0F2D6B] px-8 py-4 font-semibold text-[#0F2D6B] transition hover:bg-[#0F2D6B] hover:text-white"
              >
                Contact Us
              </Link>

            </div>

          </div>

          {/* Right Side */}

          <div className="flex justify-center">

            <div className="relative">

              {/* Main Card */}

              <div className="w-[420px] rounded-[35px] bg-white p-10 shadow-2xl border border-gray-100">

                <div className="flex justify-center">

                  <div className="h-24 w-24 rounded-full bg-orange-100 flex items-center justify-center">

                    <BriefcaseBusiness
                      size={50}
                      className="text-orange-500"
                    />

                  </div>

                </div>

                <h3 className="mt-8 text-3xl font-bold text-center text-[#0F2D6B]">

                  Career Success Starts Here

                </h3>

                <p className="mt-5 text-center text-gray-600 leading-8">

                  From your first resume to your final job offer,
                  our experts support you at every stage of your
                  international career journey.

                </p>

                <div className="mt-10 space-y-4">

                  <div className="flex items-center gap-3">

                    <span className="text-green-500 text-xl">✔</span>

                    <p>ATS-Friendly Resume</p>

                  </div>

                  <div className="flex items-center gap-3">

                    <span className="text-green-500 text-xl">✔</span>

                    <p>LinkedIn Optimization</p>

                  </div>

                  <div className="flex items-center gap-3">

                    <span className="text-green-500 text-xl">✔</span>

                    <p>Reverse Recruitment</p>

                  </div>

                  <div className="flex items-center gap-3">

                    <span className="text-green-500 text-xl">✔</span>

                    <p>Interview Preparation</p>

                  </div>

                </div>

              </div>

              {/* Floating Badge */}

              <div className="absolute -top-5 -right-5 rounded-2xl bg-orange-500 px-5 py-3 text-white shadow-xl">

                🌍 USA • UK • Australia

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}