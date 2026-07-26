import { Lightbulb, Handshake, TrendingUp, Award } from "lucide-react";

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We continuously innovate to create better opportunities for students and companies.",
    color: "bg-orange-100 text-orange-500",
  },
  {
    icon: Handshake,
    title: "Trust",
    description:
      "Building long-term relationships through transparency and reliability.",
    color: "bg-blue-100 text-blue-700",
  },
  {
    icon: TrendingUp,
    title: "Growth",
    description:
      "Helping individuals and organizations grow together through meaningful careers.",
    color: "bg-green-100 text-green-600",
  },
  {
    icon: Award,
    title: "Excellence",
    description:
      "Delivering high-quality services with professionalism and dedication.",
    color: "bg-purple-100 text-purple-600",
  },
];

export default function CoreValues() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1400px] mx-auto px-8">

        <div className="text-center mb-16">
          <span className="text-orange-500 font-semibold uppercase">
            Our Values
          </span>

          <h2 className="mt-4 text-5xl font-bold text-[#0F2D6B]">
            What We Believe In
          </h2>

          <p className="mt-5 text-lg text-gray-600 max-w-2xl mx-auto">
            Our core values guide every decision we make and every opportunity we create.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;

            return (
              <div
                key={index}
                className="bg-gray-50 rounded-3xl p-8 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${value.color}`}>
                  <Icon size={32} />
                </div>

                <h3 className="mt-6 text-2xl font-bold text-[#0F2D6B]">
                  {value.title}
                </h3>

                <p className="mt-4 text-gray-600 leading-7">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}