import {
  Globe2,
  TrendingUp,
  Users,
  ShieldCheck,
} from "lucide-react";

const benefits = [
  {
    title: "Global Opportunities",
    description:
      "Access verified job opportunities across the UK, USA, and Australia.",
    icon: Globe2,
  },
  {
    title: "Career Growth",
    description:
      "Find roles that match your skills and help you grow professionally.",
    icon: TrendingUp,
  },
  {
    title: "Expert Guidance",
    description:
      "Receive personalized support for resumes, interviews, and job applications.",
    icon: Users,
  },
  {
    title: "Trusted Employers",
    description:
      "Connect with reputable companies and secure long-term career opportunities.",
    icon: ShieldCheck,
  },
];

export default function WhyJoinUs() {
  return (
    <section className="py-28 bg-gray-50">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center">

          <span className="uppercase tracking-[4px] text-orange-500 font-semibold">
            Why Choose ApplyOrbitA
          </span>

          <h2 className="mt-5 text-5xl font-bold text-[#0F2D6B]">
            Why Join Through Us?
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-lg leading-8 text-gray-600">
            We make your international job search simple, transparent,
            and successful with personalized career support.
          </p>

        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">

          {benefits.map((item, index) => {

            const Icon = item.icon;

            return (

              <div
                key={index}
                className="rounded-[28px] bg-white border border-gray-200 p-8 shadow-sm transition-all duration-500 hover:-translate-y-3 hover:border-orange-500 hover:shadow-xl"
              >

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-100">

                  <Icon
                    size={30}
                    className="text-orange-500"
                  />

                </div>

                <h3 className="mt-8 text-2xl font-bold text-[#0F2D6B]">
                  {item.title}
                </h3>

                <p className="mt-4 text-gray-600 leading-7">
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