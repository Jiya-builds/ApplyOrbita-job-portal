
import ServiceCard from "./ServiceCard";
import {
  FileText,
  BriefcaseBusiness,
  Target,
  Handshake,
} from "lucide-react";

export default function Services() {
  return (
    <section className="bg-gray-50 py-24">
      <div className="mx-auto max-w-[1280px] px-6">
        <div className="text-center">
          <span className="font-semibold uppercase tracking-wider text-orange-500">
            Our Services
          </span>

          <h2 className="mt-4 text-5xl font-bold text-[#0F2D6B]">
            Everything You Need
            <br />
            To Build Your Career
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-xl text-gray-600">
            ApplyOrbitA helps students and professionals find the
            right opportunities while helping companies hire the
            right talent efficiently.
          </p>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <ServiceCard
            icon={<FileText size={32} strokeWidth={1.8} />}
            title="Resume Building"
            description="Create professional ATS-friendly resumes that increase your chances of getting shortlisted."
          />

          <ServiceCard
            icon={<BriefcaseBusiness size={32} strokeWidth={1.8} />}
            title="Internships"
            description="Discover exciting internship opportunities from startups and leading companies."
          />

          <ServiceCard
            icon={<Target size={32} strokeWidth={1.8} />}
            title="Job Matching"
            description="Get personalized job recommendations based on your skills and interests."
          />

          <ServiceCard
            icon={<Handshake size={32} strokeWidth={1.8} />}
            title="Career Guidance"
            description="Receive expert guidance to prepare for interviews and grow your career."
          />
        </div>
      </div>
    </section>
  );
}
