"use client";

import Link from "next/link";
import {
  FileText,
  Briefcase,
  Target,
  BriefcaseBusiness,
  PenSquare,
  Mic,
  Users,
  BarChart3,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

const services = [
  {
    title: "Resume Optimization",
    description:
      "ATS-friendly resumes tailored to maximize your chances of getting shortlisted by recruiters.",
    icon: FileText,
    featured: false,
  },
  {
    title: "LinkedIn Profile Optimization",
    description:
      "Build a recruiter-friendly LinkedIn profile that strengthens your professional presence.",
    icon: Briefcase,
    featured: false,
  },
  {
    title: "Reverse Recruitment",
    description:
      "Instead of searching yourself, our experts actively search and apply for jobs on your behalf.",
    icon: Target,
    featured: true,
  },
  {
    title: "Job Application Management",
    description:
      "We organize, track, and submit applications to verified employers across multiple countries.",
    icon: BriefcaseBusiness,
    featured: false,
  },
  {
    title: "Cover Letter Assistance",
    description:
      "Professionally written cover letters customized for every application you submit.",
    icon: PenSquare,
    featured: false,
  },
  {
    title: "Interview Preparation",
    description:
      "Mock interviews, HR guidance, and technical preparation to help you succeed.",
    icon: Mic,
    featured: false,
  },
  {
    title: "Career Guidance",
    description:
      "Personalized consultation sessions to help you choose the right international career path.",
    icon: Users,
    featured: false,
  },
  {
    title: "Weekly Progress Reports",
    description:
      "Receive weekly reports with updates on applications, recruiter responses, and interview status.",
    icon: BarChart3,
    featured: false,
  },
];

export default function ServicesGrid() {
  return (
    <section
      id="services"
      className="py-28 bg-gradient-to-b from-white via-orange-50/30 to-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center">

          <span className="uppercase tracking-[4px] text-orange-500 font-semibold">
            Our Services
          </span>

          <h2 className="mt-5 text-5xl font-bold text-[#0F2D6B]">
            Professional Career Solutions
          </h2>

          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto leading-8">
            We provide complete recruitment support, helping students and
            professionals secure opportunities in the USA, UK, and Australia.
          </p>

        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 mt-20">

          {services.map((service, index) => {

            const Icon = service.icon;

            return (

              <div
                key={index}
                className={`group relative rounded-[30px] p-8 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl ${
                  service.featured
                    ? "bg-[#0F2D6B] text-white"
                    : "bg-white border border-gray-200 hover:border-orange-500"
                }`}
              >

                {service.featured && (
                  <span className="absolute top-5 right-5 rounded-full bg-orange-500 px-3 py-1 text-xs font-bold text-white">
                    MOST POPULAR
                  </span>
                )}

                <div
                  className={`flex h-16 w-16 items-center justify-center rounded-2xl ${
                    service.featured
                      ? "bg-orange-500"
                      : "bg-orange-100 group-hover:bg-orange-500"
                  }`}
                >
                  <Icon
                    size={30}
                    className={`${
                      service.featured
                        ? "text-white"
                        : "text-orange-500 group-hover:text-white"
                    }`}
                  />
                </div>

                <h3 className="mt-8 text-2xl font-bold">
                  {service.title}
                </h3>

                <p
                  className={`mt-5 leading-8 ${
                    service.featured
                      ? "text-gray-200"
                      : "text-gray-600"
                  }`}
                >
                  {service.description}
                </p>

                <div className="mt-8 space-y-3">

                  <div className="flex items-center gap-2">
                    <CheckCircle
                      size={18}
                      className="text-orange-500"
                    />
                    <span>Expert Support</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <CheckCircle
                      size={18}
                      className="text-orange-500"
                    />
                    <span>Personalized Service</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <CheckCircle
                      size={18}
                      className="text-orange-500"
                    />
                    <span>Career Focused</span>
                  </div>

                </div>

                <Link
  href="/contact"
  className={`mt-10 inline-flex items-center gap-2 font-semibold transition ${
    service.featured
      ? "text-orange-400 hover:text-orange-300"
      : "text-orange-500 hover:gap-3"
  }`}
>
  Learn More
  <ArrowRight size={18} />
</Link>

              </div>

            );

          })}

        </div>

      </div>

    </section>
  );
}