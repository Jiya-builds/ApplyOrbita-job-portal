import {
  ShieldCheck,
  Briefcase,
  Sparkles,
  MousePointerClick,
  GraduationCap,
  BarChart3,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Verified Companies",
    desc: "Every company on ApplyOrbitA is carefully verified before posting opportunities, ensuring students apply only to trusted internships and genuine job openings with complete transparency and reliability.",
  },
  {
    icon: Briefcase,
    title: "Internship & Job Opportunities",
    desc: "Explore thousands of internships and full-time job opportunities from startups, leading MNCs, and rapidly growing companies across multiple industries and technology domains.",
  },
  {
    icon: Sparkles,
    title: "Smart AI Job Matching",
    desc: "Our AI-powered recommendation system analyzes your skills, interests, education, and profile to suggest the most relevant internships and career opportunities.",
  },
  {
    icon: MousePointerClick,
    title: "Quick & Easy Applications",
    desc: "Apply to multiple internships and jobs with a simple one-click application process designed to save time while keeping your profile professional and recruiter-ready.",
  },
  {
    icon: GraduationCap,
    title: "Career Guidance & Mentorship",
    desc: "Get expert guidance on resume building, interview preparation, career planning, and skill development to confidently secure your dream internship or job.",
  },
  {
    icon: BarChart3,
    title: "Application Tracking Dashboard",
    desc: "Monitor every application in one place, track hiring progress, receive recruiter updates, and stay informed throughout your complete recruitment journey.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-16">

          <p className="text-orange-500 font-semibold uppercase tracking-[4px]">
            WHY CHOOSE APPLYORBITA?
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold text-[#0F2D6B] leading-tight">
            Everything You Need To
            <br />
            Build Your Career
          </h2>

          <p className="mt-6 text-lg text-gray-500 max-w-3xl mx-auto leading-8">
            ApplyOrbitA empowers students and professionals with trusted
            opportunities, AI-powered recommendations, career guidance,
            and seamless application management to help them achieve
            their career goals faster.
          </p>

        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="group h-full border border-gray-200 rounded-2xl p-8 bg-white hover:border-orange-500 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 flex flex-col"
              >
                {/* Icon */}

                <div className="w-16 h-16 rounded-2xl bg-orange-100 flex items-center justify-center group-hover:bg-orange-500 transition duration-300">

                  <Icon
                    size={32}
                    className="text-orange-500 group-hover:text-white transition duration-300"
                  />

                </div>

                {/* Title */}

                <h3 className="mt-8 text-2xl font-bold text-[#0F2D6B] leading-snug">
                  {feature.title}
                </h3>

                {/* Description */}

                <p className="mt-5 text-gray-500 leading-8 text-[16px] flex-1">
                  {feature.desc}
                </p>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}