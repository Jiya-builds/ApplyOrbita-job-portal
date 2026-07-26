import { ArrowRight } from "lucide-react";

const countries = [
  {
    flag: "🇺🇸",
    title: "United States",
    description:
      "Explore opportunities with leading companies across technology, healthcare, finance, and engineering sectors.",
    jobs: "1000+ Opportunities",
  },
  {
    flag: "🇬🇧",
    title: "United Kingdom",
    description:
      "Discover graduate schemes, internships, and professional roles with trusted UK employers.",
    jobs: "700+ Opportunities",
  },
  {
    flag: "🇦🇺",
    title: "Australia",
    description:
      "Apply for high-demand positions with verified Australian companies across multiple industries.",
    jobs: "500+ Opportunities",
  },
];

export default function Countries() {
  return (
    <section className="py-28 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">

          <span className="uppercase tracking-[4px] text-orange-500 font-semibold">
            Global Opportunities
          </span>

          <h2 className="mt-5 text-5xl font-bold text-[#0F2D6B]">
            Countries We Support
          </h2>

          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto leading-8">
            Our recruitment experts help candidates apply for verified
            opportunities across the world's most popular career destinations.
          </p>

        </div>

        <div className="grid lg:grid-cols-3 gap-8 mt-20">

          {countries.map((country, index) => (

            <div
              key={index}
              className="group rounded-[30px] border border-gray-200 bg-white p-8 transition-all duration-500 hover:-translate-y-3 hover:border-orange-500 hover:shadow-2xl"
            >

              <div className="text-6xl">
                {country.flag}
              </div>

              <h3 className="mt-6 text-3xl font-bold text-[#0F2D6B]">
                {country.title}
              </h3>

              <p className="mt-5 text-gray-600 leading-8">
                {country.description}
              </p>

              <div className="mt-8 inline-block rounded-full bg-orange-100 px-5 py-2 text-orange-600 font-semibold">
                {country.jobs}
              </div>

              <button className="mt-10 flex items-center gap-2 text-orange-500 font-semibold transition-all duration-300 group-hover:gap-4">
                Explore Opportunities
                <ArrowRight size={18} />
              </button>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}