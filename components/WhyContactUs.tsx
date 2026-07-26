import {
  Zap,
  UserRoundCheck,
  Globe2,
  Handshake,
} from "lucide-react";

const reasons = [
  {
    title: "Quick Response",
    description:
      "Our team responds quickly to understand your requirements and provide the right career guidance.",
    icon: Zap,
  },
  {
    title: "Expert Guidance",
    description:
      "Get personalized support from recruitment professionals who understand global job markets.",
    icon: UserRoundCheck,
  },
  {
    title: "Global Opportunities",
    description:
      "Explore career opportunities across USA, UK, and Australia with our dedicated support.",
    icon: Globe2,
  },
  {
    title: "Dedicated Support",
    description:
      "We stay with you throughout your journey, from application to interview preparation.",
    icon: Handshake,
  },
];

export default function WhyContactUs() {
  return (
    <section className="py-28 bg-gradient-to-b from-orange-50/40 to-white">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center">

          <span className="uppercase tracking-[4px] text-orange-500 font-semibold">
            Why Contact Us
          </span>

          <h2 className="mt-5 text-5xl font-bold text-[#0F2D6B]">
            How We Help You
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-600 leading-8">
            Our team provides complete career support and guidance to help
            you move closer to your dream job.
          </p>

        </div>


        {/* Cards */}

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 mt-20">

          {reasons.map((reason, index) => {

            const Icon = reason.icon;

            return (

              <div
                key={index}
                className="group rounded-[30px] bg-white border border-gray-200 p-8 shadow-sm transition-all duration-500 hover:-translate-y-3 hover:border-orange-500 hover:shadow-2xl"
              >

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-100 transition group-hover:bg-orange-500">

                  <Icon
                    size={30}
                    className="text-orange-500 transition group-hover:text-white"
                  />

                </div>


                <h3 className="mt-8 text-2xl font-bold text-[#0F2D6B]">
                  {reason.title}
                </h3>


                <p className="mt-5 text-gray-600 leading-8">
                  {reason.description}
                </p>


              </div>

            );

          })}

        </div>

      </div>

    </section>
  );
}