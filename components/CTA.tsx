import Link from "next/link";
export default function CTA() {
  return (
    <section className="py-24 bg-gradient-to-r from-orange-500 to-orange-600">
      <div className="max-w-[1280px] mx-auto px-6 text-center">

        <h2 className="text-5xl font-bold text-white">
          Ready to Start Your Career Journey?
        </h2>

        <p className="mt-6 text-xl text-orange-100 max-w-3xl mx-auto leading-8">
          Join thousands of students and professionals who trust
          ApplyOrbitA to discover internships, jobs, and career opportunities.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-5">

          <Link
  href="/contact"
  className="bg-white text-orange-500 px-8 py-4 rounded-full font-semibold shadow-lg hover:scale-105 transition-all duration-300 inline-flex items-center justify-center"
>
  Get Started
</Link>

<Link
  href="/careers"
  className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-orange-500 transition-all duration-300 inline-flex items-center justify-center"
>
  Browse Jobs
</Link>

        </div>

      </div>
    </section>
  );
}