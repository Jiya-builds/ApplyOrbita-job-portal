import {
  BriefcaseBusiness,
  Users,
  Globe,
  Star,
} from "lucide-react";

const stats = [
  {
    number: "5,000+",
    title: "Applications Submitted",
    icon: BriefcaseBusiness,
  },
  {
    number: "1,000+",
    title: "Candidates Assisted",
    icon: Users,
  },
  {
    number: "3",
    title: "Countries Supported",
    icon: Globe,
  },
  {
    number: "95%",
    title: "Client Satisfaction",
    icon: Star,
  },
];

export default function SuccessStats() {
  return (
    <section className="py-24 bg-[#0F2D6B]">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">

          <span className="uppercase tracking-[4px] text-orange-400 font-semibold">
            Our Impact
          </span>

          <h2 className="mt-5 text-5xl font-bold text-white">
            Trusted by Career Aspirants
          </h2>

          <p className="mt-6 text-lg text-blue-100 max-w-3xl mx-auto leading-8">
            We are committed to helping students and professionals
            build successful careers through expert recruitment support.
          </p>

        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 mt-20">

          {stats.map((stat, index) => {

            const Icon = stat.icon;

            return (

              <div
                key={index}
                className="rounded-[30px] bg-white/10 backdrop-blur-md border border-white/20 p-8 text-center transition-all duration-500 hover:-translate-y-3 hover:bg-white/15"
              >

                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-500">

                  <Icon
                    size={30}
                    className="text-white"
                  />

                </div>

                <h3 className="mt-8 text-5xl font-bold text-white">
                  {stat.number}
                </h3>

                <p className="mt-4 text-blue-100 leading-7">
                  {stat.title}
                </p>

              </div>

            );

          })}

        </div>

      </div>

    </section>
  );
}