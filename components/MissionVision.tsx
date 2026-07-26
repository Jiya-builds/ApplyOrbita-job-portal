import { Target, Eye } from "lucide-react";

export default function MissionVision() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-[1400px] mx-auto px-8">

        <div className="text-center mb-16">
          <span className="text-orange-500 font-semibold uppercase tracking-wider">
            Our Purpose
          </span>

          <h2 className="mt-4 text-5xl font-bold text-[#0F2D6B]">
            Mission & Vision
          </h2>

          <p className="mt-5 text-lg text-gray-600 max-w-2xl mx-auto">
            We aim to empower students and professionals by connecting
            them with meaningful career opportunities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">

          {/* Mission Card */}
          <div className="bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">

            <div className="w-16 h-16 rounded-2xl bg-orange-100 flex items-center justify-center">
              <Target size={34} className="text-orange-500" />
            </div>

            <h3 className="mt-8 text-3xl font-bold text-[#0F2D6B]">
              Our Mission
            </h3>

            <p className="mt-5 text-gray-600 leading-8">
              To connect talented students and professionals with
              trusted companies by providing internships, jobs,
              career guidance and opportunities that help them grow.
            </p>

          </div>

          {/* Vision Card */}
          <div className="bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">

            <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center">
              <Eye size={34} className="text-[#0F2D6B]" />
            </div>

            <h3 className="mt-8 text-3xl font-bold text-[#0F2D6B]">
              Our Vision
            </h3>

            <p className="mt-5 text-gray-600 leading-8">
              To become India's most trusted platform for internships,
              jobs and career development by helping millions build
              successful futures.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}