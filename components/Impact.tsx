"use client";

import { Users, Globe, Briefcase } from "lucide-react";

const impacts = [
  {
    icon: Users,
    title: "10K+ Students Connected",
    description:
      "Thousands of students and fresh graduates have trusted ApplyOrbitA to discover internships and full-time opportunities that match their career goals.",
  },
  {
    icon: Briefcase,
    title: "5000+ Job Applications",
    description:
      "Our dedicated recruitment team helps candidates apply to relevant jobs across multiple industries, increasing their chances of getting noticed.",
  },
  {
    icon: Globe,
    title: "India , USA , UK , Australia",
    description:
      "ApplyOrbitA connects talented candidates with verified employers across four countries, opening doors to global career opportunities.",
  },
];

export default function Impact() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <p className="text-orange-500 uppercase tracking-[4px] font-semibold">
            Our Impact
          </p>

          <h2 className="text-5xl font-bold text-[#0F2D6B] mt-4">
            Helping Students Build Successful Careers
          </h2>

          <p className="text-gray-500 text-lg mt-5 max-w-3xl mx-auto">
            We are committed to connecting talented students with trusted
            employers and creating opportunities that shape successful careers.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {impacts.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="bg-black rounded-3xl p-10 text-white hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-xl bg-orange-500/20 flex items-center justify-center mb-8">
                  <Icon size={34} className="text-orange-500" />
                </div>

                <h3 className="text-3xl font-bold leading-tight">
                  <span className="text-orange-500">
                    {item.title.split(" ")[0]}
                  </span>{" "}
                  {item.title.replace(item.title.split(" ")[0], "")}
                </h3>

                <p className="mt-6 text-gray-300 leading-8">
                  {item.description}
                </p>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}