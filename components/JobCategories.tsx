"use client";

import {
  Laptop2,
  BarChart3,
  Megaphone,
  Palette,
  Users,
  Briefcase,
} from "lucide-react";

interface JobCategoriesProps {
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
}

const categories = [
  {
    title: "Technology",
    jobs: "250+ Jobs",
    icon: Laptop2,
    color: "bg-blue-100 text-blue-600",
  },
  {
    title: "Finance",
    jobs: "120+ Jobs",
    icon: BarChart3,
    color: "bg-green-100 text-green-600",
  },
  {
    title: "Marketing",
    jobs: "180+ Jobs",
    icon: Megaphone,
    color: "bg-pink-100 text-pink-600",
  },
  {
    title: "Design",
    jobs: "90+ Jobs",
    icon: Palette,
    color: "bg-purple-100 text-purple-600",
  },
  {
    title: "Human Resources",
    jobs: "75+ Jobs",
    icon: Users,
    color: "bg-yellow-100 text-yellow-600",
  },
  {
    title: "Business Development",
    jobs: "110+ Jobs",
    icon: Briefcase,
    color: "bg-orange-100 text-orange-600",
  },
];

export default function JobCategories({
  setSelectedCategory,
}: JobCategoriesProps) {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}

        <div className="text-center">
          <span className="uppercase tracking-[4px] text-orange-500 font-semibold">
            Explore Careers
          </span>

          <h2 className="mt-5 text-5xl font-bold text-[#0F2D6B]">
            Browse By Category
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-600 leading-8">
            Discover exciting opportunities across different industries and
            choose the career path that matches your skills.
          </p>
        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
          {categories.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="group rounded-[30px] border border-gray-200 bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-3 hover:border-orange-500 hover:shadow-2xl"
              >
                <div
                  className={`flex h-16 w-16 items-center justify-center rounded-2xl ${item.color}`}
                >
                  <Icon size={30} />
                </div>

                <h3 className="mt-8 text-2xl font-bold text-[#0F2D6B]">
                  {item.title}
                </h3>

                <p className="mt-3 text-gray-600">
                  {item.jobs} Available
                </p>

                <button
                  onClick={() => {
                    setSelectedCategory(item.title);

                    document
                      .getElementById("featured-jobs")
                      ?.scrollIntoView({
                        behavior: "smooth",
                      });
                  }}
                  className="mt-8 rounded-xl bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-600"
                >
                  View Jobs
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}