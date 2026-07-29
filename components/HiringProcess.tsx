import {
  FileText,
  SearchCheck,
  MessageSquare,
  BadgeCheck,
} from "lucide-react";

const steps = [
  {
    title: "Apply",
    description:
      "Submit your application with an optimized resume through ApplyOrbitA.",
    icon: FileText,
  },
  {
    title: "Resume Review",
    description:
      "Our experts review your profile and match you with the best opportunities.",
    icon: SearchCheck,
  },
  {
    title: "Interview",
    description:
      "Prepare confidently with interview guidance and employer scheduling.",
    icon: MessageSquare,
  },
  {
    title: "Get Hired",
    description:
      "Receive your offer letter and begin your international career journey.",
    icon: BadgeCheck,
  },
];

export default function HiringProcess() {
  return (
    <section className="py-28 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center">

          <span className="uppercase tracking-[4px] text-orange-500 font-semibold">
            Hiring Process
          </span>

          <h2 className="mt-5 text-5xl font-bold text-[#0F2D6B]">
            Your Journey In 4 Simple Steps
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-600 leading-8">
            From applying for a job to receiving your offer letter,
            we guide you through every stage of the recruitment process.
          </p>

        </div>

        {/* Timeline */}

        <div className="relative mt-24">

          {/* Horizontal Line */}

          <div className="hidden lg:block absolute top-12 left-0 right-0 h-1 bg-orange-200"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

            {steps.map((step, index) => {

              const Icon = step.icon;

              return (

                <div
                  key={index}
                  className="relative text-center"
                >

                  {/* Circle */}

                  <div className="relative z-10 mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-orange-500 shadow-xl">

                    <Icon
                      size={38}
                      className="text-white"
                    />

                  </div>

                  {/* Step Number */}

                  <span className="mt-6 inline-block rounded-full bg-orange-100 px-4 py-1 text-sm font-semibold text-orange-600">

                    Step {index + 1}

                  </span>

                  <h3 className="mt-5 text-2xl font-bold text-[#0F2D6B]">
                    {step.title}
                  </h3>

                  <p className="mt-4 text-gray-600 leading-7">
                    {step.description}
                  </p>

                </div>

              );

            })}

          </div>

        </div>

      </div>

    </section>
  );
}