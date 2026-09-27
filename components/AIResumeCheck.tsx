import Link from "next/link";
import { FileText, Target, Sparkles, ArrowRight } from "lucide-react";

export default function AIResumeCheck() {
  return (
    <section className="py-12 sm:py-16 md:py-24 bg-white">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-[24px] sm:rounded-[32px] bg-gradient-to-br from-orange-50 via-white to-blue-50 border border-orange-100 shadow-lg">

          <div className="absolute -top-16 -right-16 sm:-top-24 sm:-right-24 w-40 h-40 sm:w-72 sm:h-72 bg-orange-200/40 rounded-full blur-3xl" />

          <div className="absolute -bottom-16 -left-16 sm:-bottom-24 sm:-left-24 w-40 h-40 sm:w-72 sm:h-72 bg-blue-200/40 rounded-full blur-3xl" />

          <div className="relative px-5 py-10 sm:px-8 sm:py-14 md:px-16 md:py-16">

            {/* Heading */}
            <div className="text-center max-w-3xl mx-auto">

              <span className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-4 sm:px-5 py-2 rounded-full font-semibold text-sm sm:text-base">
                <Sparkles size={16} className="sm:w-[18px] sm:h-[18px]" />
                Free AI Resume Check
              </span>

              <h2 className="mt-5 sm:mt-6 text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-[#0F2D6B]">
                Get Your Resume Ready
                <br />
                <span className="text-orange-500">
                  Before You Apply
                </span>
              </h2>

              <p className="mt-5 sm:mt-6 text-base sm:text-lg md:text-xl text-gray-600 leading-7 sm:leading-8 max-w-2xl mx-auto">
                Analyze your resume with AI and get useful insights to
                improve your resume, ATS compatibility, and overall
                job-readiness.
              </p>

            </div>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-12 max-w-5xl mx-auto">

              <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-md border border-gray-100">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-orange-100 text-orange-500 flex items-center justify-center">
                  <FileText size={22} />
                </div>

                <h3 className="mt-4 sm:mt-5 text-lg sm:text-xl font-bold text-[#0F2D6B]">
                  Resume Analysis
                </h3>

                <p className="mt-2 sm:mt-3 text-sm sm:text-base text-gray-600 leading-6 sm:leading-7">
                  Get an AI-powered review of your resume and identify areas
                  that can be improved.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-md border border-gray-100">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center">
                  <Target size={22} />
                </div>

                <h3 className="mt-4 sm:mt-5 text-lg sm:text-xl font-bold text-[#0F2D6B]">
                  ATS Check
                </h3>

                <p className="mt-2 sm:mt-3 text-sm sm:text-base text-gray-600 leading-6 sm:leading-7">
                  Understand how well your resume is optimized for
                  applicant tracking systems.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-md border border-gray-100">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-orange-100 text-orange-500 flex items-center justify-center">
                  <Sparkles size={22} />
                </div>

                <h3 className="mt-4 sm:mt-5 text-lg sm:text-xl font-bold text-[#0F2D6B]">
                  Smart Suggestions
                </h3>

                <p className="mt-2 sm:mt-3 text-sm sm:text-base text-gray-600 leading-6 sm:leading-7">
                  Discover practical suggestions to make your resume
                  stronger and more job-ready.
                </p>
              </div>

            </div>

            {/* CTA */}
            <div className="mt-8 sm:mt-12 text-center">

              <Link
                href="https://placement-pilot-ai-dbx5.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 sm:gap-3 bg-orange-500 hover:bg-orange-600 text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-semibold text-base sm:text-lg shadow-lg hover:shadow-xl sm:hover:scale-105 transition-all duration-300"
              >
                Check My Resume — Free
                <ArrowRight size={19} />
              </Link>

              <p className="mt-3 sm:mt-4 text-xs sm:text-sm text-gray-500">
                Powered by PlacementPilot-AI
              </p>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}