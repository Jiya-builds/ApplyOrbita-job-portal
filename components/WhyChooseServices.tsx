import {
  BadgeCheck,
  Users,
  Globe,
  BarChart3,
  ShieldCheck,
  Headset,
} from "lucide-react";

const features = [
  {
    title: "ATS-Friendly Documents",
    description:
      "Your resume, LinkedIn profile, and cover letter are optimized for modern ATS systems.",
    icon: BadgeCheck,
  },
  {
    title: "Career Experts",
    description:
      "Work with experienced professionals who understand international recruitment.",
    icon: Users,
  },
  {
    title: "Global Opportunities",
    description:
      "Access verified opportunities across the USA, UK, and Australia.",
    icon: Globe,
  },
  {
    title: "Weekly Progress Reports",
    description:
      "Track your applications, recruiter responses, and interview updates every week.",
    icon: BarChart3,
  },
  {
    title: "Verified Employers",
    description:
      "We apply only to trusted employers and genuine international opportunities.",
    icon: ShieldCheck,
  },
  {
    title: "Dedicated Support",
    description:
      "Our team is available throughout your job search journey to guide you.",
    icon: Headset,
  },
];

export default function WhyChooseServices() {
  return (
    <section className="py-28 bg-gradient-to-b from-orange-50/40 to-white">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center">

          <span className="uppercase tracking-[4px] text-orange-500 font-semibold">
            Why Choose Us
          </span>

          <h2 className="mt-5 text-5xl font-bold text-[#0F2D6B]">
            Why Choose ApplyOrbitA?
          </h2>

          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto leading-8">
            We don't just help you apply for jobs—we support you throughout
            your career journey with personalized guidance and expert recruitment
            services.
          </p>

        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mt-20">

          {features.map((feature, index) => {

            const Icon = feature.icon;

            return (

              <div
                key={index}
                className="group rounded-[30px] bg-white border border-gray-200 p-8 shadow-sm transition-all duration-500 hover:-translate-y-3 hover:border-orange-500 hover:shadow-2xl"
              >

                <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-orange-100 group-hover:bg-orange-500 transition">

                  <Icon
                    size={30}
                    className="text-orange-500 group-hover:text-white transition"
                  />

                </div>

                <h3 className="mt-8 text-2xl font-bold text-[#0F2D6B]">
                  {feature.title}
                </h3>

                <p className="mt-5 text-gray-600 leading-8">
                  {feature.description}
                </p>

              </div>

            );

          })}

        </div>

      </div>

    </section>
  );
}