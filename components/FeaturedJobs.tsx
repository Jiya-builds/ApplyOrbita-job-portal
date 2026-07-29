"use client";

import Link from "next/link";
import { MapPin, Briefcase, DollarSign, ArrowRight } from "lucide-react";

interface FeaturedJobsProps {
  searchTerm: string;
  selectedCategory: string;
}

const jobs = [
  {
    title: "Frontend Developer",
    company: "Google",
    location: "London, UK",
    salary: "$65k - $80k",
    type: "Full Time",
    category: "Technology",
  },
  {
    title: "Software Engineer",
    company: "Microsoft",
    location: "New York, USA",
    salary: "$85k - $110k",
    type: "Remote",
    category: "Technology",
  },
  {
    title: "Backend Developer",
    company: "Netflix",
    location: "California, USA",
    salary: "$95k - $120k",
    type: "Remote",
    category: "Technology",
  },
  {
    title: "Data Analyst",
    company: "Amazon",
    location: "Sydney, Australia",
    salary: "$70k - $90k",
    type: "Hybrid",
    category: "Finance",
  },
  {
    title: "Financial Consultant",
    company: "Deloitte",
    location: "London, UK",
    salary: "$75k - $95k",
    type: "Full Time",
    category: "Finance",
  },
  {
    title: "Marketing Specialist",
    company: "Meta",
    location: "Toronto, Canada",
    salary: "$60k - $82k",
    type: "Hybrid",
    category: "Marketing",
  },
  {
    title: "Digital Marketing Manager",
    company: "HubSpot",
    location: "New York, USA",
    salary: "$80k - $105k",
    type: "Remote",
    category: "Marketing",
  },
  {
    title: "UI/UX Designer",
    company: "Adobe",
    location: "Melbourne, Australia",
    salary: "$60k - $78k",
    type: "Full Time",
    category: "Design",
  },
  {
    title: "Graphic Designer",
    company: "Canva",
    location: "Sydney, Australia",
    salary: "$55k - $70k",
    type: "Hybrid",
    category: "Design",
  },
  {
    title: "HR Executive",
    company: "Infosys",
    location: "Manchester, UK",
    salary: "$45k - $60k",
    type: "Full Time",
    category: "Human Resources",
  },
  {
    title: "Talent Acquisition Specialist",
    company: "TCS",
    location: "Birmingham, UK",
    salary: "$55k - $68k",
    type: "Full Time",
    category: "Human Resources",
  },
  {
    title: "Business Development Manager",
    company: "Oracle",
    location: "Chicago, USA",
    salary: "$90k - $120k",
    type: "Full Time",
    category: "Business Development",
  },
];

export default function FeaturedJobs({
  searchTerm,
  selectedCategory,
}: FeaturedJobsProps) {

  const filteredJobs = jobs.filter((job) => {

    const search = searchTerm.toLowerCase();

    const matchesSearch =
      job.title.toLowerCase().includes(search) ||
      job.company.toLowerCase().includes(search) ||
      job.location.toLowerCase().includes(search) ||
      job.type.toLowerCase().includes(search);

    const matchesCategory =
      selectedCategory === "" ||
      job.category === selectedCategory;

    return matchesSearch && matchesCategory;

  });

  return (
    <section
      id="featured-jobs"
      className="py-28 bg-gray-50"
    >

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">

          <span className="uppercase tracking-[4px] text-orange-500 font-semibold">
            Featured Jobs
          </span>

          <h2 className="mt-5 text-5xl font-bold text-[#0F2D6B]">
            Latest Career Opportunities
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-600 leading-8">
            Find the perfect international opportunity for your career.
          </p>

        </div>
                {filteredJobs.length === 0 ? (

          <div className="mt-20 text-center">

            <h2 className="text-3xl font-bold text-[#0F2D6B]">
              No Jobs Found 😔
            </h2>

            <p className="mt-4 text-gray-600">
              Try searching with another keyword or category.
            </p>

          </div>

        ) : (

          <div className="grid lg:grid-cols-2 gap-8 mt-20">

            {filteredJobs.map((job, index) => (

              <div
                key={index}
                className="rounded-[28px] bg-white border border-gray-200 p-8 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-orange-500 hover:shadow-xl"
              >

                <div className="flex items-center justify-between">

                  <div>

                    <h3 className="text-2xl font-bold text-[#0F2D6B]">
                      {job.title}
                    </h3>

                    <p className="mt-2 text-orange-500 font-semibold">
                      {job.company}
                    </p>

                  </div>

                  <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-600">
                    {job.type}
                  </span>

                </div>

                <div className="mt-8 space-y-4">

                  <div className="flex items-center gap-3 text-gray-600">
                    <MapPin size={18} />
                    <span>{job.location}</span>
                  </div>

                  <div className="flex items-center gap-3 text-gray-600">
                    <DollarSign size={18} />
                    <span>{job.salary}</span>
                  </div>

                  <div className="flex items-center gap-3 text-gray-600">
                    <Briefcase size={18} />
                    <span>2+ Years Experience</span>
                  </div>

                </div>

                <Link
                  href="/contact"
                  className="mt-10 inline-flex items-center gap-2 rounded-xl bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-600"
                >
                  Apply Now
                  <ArrowRight size={18} />
                </Link>

              </div>

            ))}

          </div>

        )}

      </div>

    </section>
  );
}