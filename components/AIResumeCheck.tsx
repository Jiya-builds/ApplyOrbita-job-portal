import Link from "next/link";
import { FileText, Target, Sparkles, ArrowRight } from "lucide-react";

export default function AIResumeCheck() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-orange-50 via-white to-blue-50 border border-orange-100 shadow-lg">
          
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-orange-200/40 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-blue-200/40 rounded-full blur-3xl" />

          <div className="relative px-8 py-14 md:px-16 md:py-16">
            
            <div className="text-center max-w-3xl mx-auto">
              <span className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-5 py-2 rounded-full font-semibold">
                <Sparkles size={18} />
                Free AI Resume Check
              </span>

              <h2 className="mt-6 text-4xl md:text-5xl font-bold text-[#0F2D6B]">
                Get Your Resume Ready
                <br />
                <span className="text-orange-500">Before You Apply</span>
              </h2>

              <p className="mt-6 text-lg md:text-xl text-gray-600 leading-8">
                Analyze your resume with AI and get useful insights to
                improve your resume, ATS compatibility, and overall
                job-readiness.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-12 max-w-5xl mx-auto">
              
              <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
                <div className="w-12 h-12 rounded-xl bg-orange-100 text-orange-500 flex items-center justify-center">
                  <FileText size={24} />
                </div>

                <h3 className="mt-5 text-xl font-bold text-[#0F2D6B]">
                  Resume Analysis
                </h3>

                <p className="mt-3 text-gray-600 leading-7">
                  Get an AI-powered review of your resume and identify areas
                  that can be improved.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
                <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center">
                  <Target size={24} />
                </div>

                <h3 className="mt-5 text-xl font-bold text-[#0F2D6B]">
                  ATS Check
                </h3>

                <p className="mt-3 text-gray-600 leading-7">
                  Understand how well your resume is optimized for
                  applicant tracking systems.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
                <div className="w-12 h-12 rounded-xl bg-orange-100 text-orange-500 flex items-center justify-center">
                  <Sparkles size={24} />
                </div>

                <h3 className="mt-5 text-xl font-bold text-[#0F2D6B]">
                  Smart Suggestions
                </h3>

                <p className="mt-3 text-gray-600 leading-7">
                  Discover practical suggestions to make your resume
                  stronger and more job-ready.
                </p>
              </div>

            </div>

            <div className="mt-12 text-center">
              <Link
                href="https://placement-pilot-ai-dbx5.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                Check My Resume — Free
                <ArrowRight size={20} />
              </Link>

              <p className="mt-4 text-sm text-gray-500">
                Powered by PlacementPilot-AI
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}