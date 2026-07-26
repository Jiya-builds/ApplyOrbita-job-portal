import {
  Package,
  Upload,
  Sparkles,
  BriefcaseBusiness,
  BarChart3,
  Trophy,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Choose Your Service",
    description:
      "Select the career package that best matches your goals and destination.",
    icon: Package,
  },
  {
    number: "02",
    title: "Share Your Resume",
    description:
      "Upload your existing resume along with your career preferences.",
    icon: Upload,
  },
  {
    number: "03",
    title: "Profile Optimization",
    description:
      "Our experts optimize your Resume, LinkedIn profile, and Cover Letter.",
    icon: Sparkles,
  },
  {
    number: "04",
    title: "Job Applications",
    description:
      "We search, manage, and apply to verified job opportunities on your behalf.",
    icon: BriefcaseBusiness,
  },
  {
    number: "05",
    title: "Weekly Progress",
    description:
      "Receive weekly updates about applications, recruiter responses, and interviews.",
    icon: BarChart3,
  },
  {
    number: "06",
    title: "Get Hired",
    description:
      "Attend interviews confidently and secure your dream international job.",
    icon: Trophy,
  },
];

export default function HowItWorks() {
  return (
    <section className="py-28 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">

          <span className="uppercase tracking-[4px] text-orange-500 font-semibold">
            Process
          </span>

          <h2 className="mt-5 text-5xl font-bold text-[#0F2D6B]">
            How ApplyOrbitA Works
          </h2>

          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto leading-8">
            Our simple step-by-step recruitment process is designed to
            help you land your dream job with complete professional support.
          </p>

        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mt-20">

          {steps.map((step) => {

            const Icon = step.icon;

            return (

              <div
                key={step.number}
                className="group rounded-[30px] border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-3 hover:border-orange-500 hover:shadow-2xl"
              >

                <div className="flex items-center justify-between">

                  <div className="w-16 h-16 rounded-2xl bg-orange-100 flex items-center justify-center group-hover:bg-orange-500 transition">

                    <Icon
                      size={30}
                      className="text-orange-500 group-hover:text-white transition"
                    />

                  </div>

                  <span className="text-4xl font-extrabold text-gray-200">
                    {step.number}
                  </span>

                </div>

                <h3 className="mt-8 text-2xl font-bold text-[#0F2D6B]">
                  {step.title}
                </h3>

                <p className="mt-5 text-gray-600 leading-8">
                  {step.description}
                </p>

              </div>

            );

          })}

        </div>

      </div>

    </section>
  );
}