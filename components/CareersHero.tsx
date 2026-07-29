"use client";

import Link from "next/link";
import { Search, ArrowRight, Briefcase, Globe2 } from "lucide-react";

interface CareersHeroProps {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}

export default function CareersHero({
  searchTerm,
  setSearchTerm,
}: CareersHeroProps) {
  const handleSearch = () => {
    const section = document.getElementById("featured-jobs");

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-orange-50 via-white to-white py-28">

      <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-orange-200/40 blur-3xl"></div>

      <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-blue-200/30 blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}

          <div>

            <span className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-5 py-2 text-sm font-semibold text-orange-600">
              🚀 Careers at ApplyOrbitA
            </span>

            <h1 className="mt-8 text-5xl md:text-6xl font-bold leading-tight text-[#0F2D6B]">
              Find Your
              <span className="text-orange-500">
                {" "}
                Dream Job{" "}
              </span>
              Across The Globe
            </h1>

            <p className="mt-6 text-lg leading-8 text-gray-600 max-w-xl">
              Explore exciting career opportunities in the UK, USA and
              Australia. Whether you're a fresher or an experienced
              professional, ApplyOrbitA helps you connect with the right
              employers.
            </p>

            {/* SEARCH */}

            <div className="mt-10 flex flex-col sm:flex-row gap-4">

              <div className="relative flex-1">

                <Search
                  className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400"
                  size={20}
                />

                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) =>
                    setSearchTerm(e.target.value)
                  }
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleSearch();
                    }
                  }}
                  placeholder="Search by Job, Company or Location..."
                  className="w-full rounded-2xl border border-gray-300 bg-white py-4 pl-14 pr-4 outline-none transition focus:border-orange-500"
                />

              </div>

              <button
                onClick={handleSearch}
                className="rounded-2xl bg-orange-500 px-8 py-4 font-semibold text-white transition hover:bg-orange-600"
              >
                Search
              </button>

            </div>

            <div className="mt-8 flex flex-wrap gap-4">

              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-xl border-2 border-[#0F2D6B] px-6 py-3 font-semibold text-[#0F2D6B] transition hover:bg-[#0F2D6B] hover:text-white"
              >
                Explore Services
                <ArrowRight size={18} />
              </Link>

            </div>

          </div>

          {/* RIGHT */}

          <div>

            <div className="rounded-[35px] bg-[#0F2D6B] p-10 shadow-2xl">

              <h3 className="text-3xl font-bold text-white">
                Your Career Starts Here
              </h3>

              <p className="mt-4 text-blue-100 leading-8">
                Join thousands of candidates who have found international
                opportunities with ApplyOrbitA.
              </p>

              <div className="mt-10 space-y-5">

                <div className="flex items-center gap-4 rounded-2xl bg-white/10 p-5">

                  <div className="rounded-xl bg-orange-500 p-3">

                    <Briefcase
                      className="text-white"
                      size={24}
                    />

                  </div>

                  <div>

                    <h4 className="font-semibold text-white">
                      1000+ Active Jobs
                    </h4>

                    <p className="text-sm text-blue-100">
                      New opportunities every week.
                    </p>

                  </div>

                </div>

                <div className="flex items-center gap-4 rounded-2xl bg-white/10 p-5">

                  <div className="rounded-xl bg-orange-500 p-3">

                    <Globe2
                      className="text-white"
                      size={24}
                    />

                  </div>

                  <div>

                    <h4 className="font-semibold text-white">
                      Global Opportunities
                    </h4>

                    <p className="text-sm text-blue-100">
                      Jobs across UK, USA & Australia.
                    </p>

                  </div>

                </div>

              </div>

              <div className="mt-10 rounded-2xl bg-orange-500 p-6 text-center">

                <h2 className="text-4xl font-bold text-white">
                  10K+
                </h2>

                <p className="mt-2 text-orange-100">
                  Successful Placements
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}