import ServiceCard from "./ServiceCard";

export default function Services() {
  return (
    <section className="py-24 bg-gray-50">

      <div className="max-w-[1280px] mx-auto px-6">

        <div className="text-center">

          <span className="text-orange-500 font-semibold uppercase tracking-wider">
            Our Services
          </span>

          <h2 className="mt-4 text-5xl font-bold text-[#0F2D6B]">
            Everything You Need
            <br />
            To Build Your Career
          </h2>

          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
            ApplyOrbitA helps students and professionals find the
            right opportunities while helping companies hire the
            right talent efficiently.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">

          <ServiceCard
            icon="📄"
            title="Resume Building"
            description="Create professional ATS-friendly resumes that increase your chances of getting shortlisted."
          />

          <ServiceCard
            icon="💼"
            title="Internships"
            description="Discover exciting internship opportunities from startups and leading companies."
          />

          <ServiceCard
            icon="🎯"
            title="Job Matching"
            description="Get personalized job recommendations based on your skills and interests."
          />

          <ServiceCard
            icon="🤝"
            title="Career Guidance"
            description="Receive expert guidance to prepare for interviews and grow your career."
          />

        </div>

      </div>

    </section>
  );
}