import Link from "next/link";

export default function AboutCTA() {
  return (
    <section className="py-24 pb-36 bg-gradient-to-r from-[#0F2D6B] to-[#163d8c]">
      <div className="max-w-[1400px] mx-auto px-8 text-center">

        <h2 className="text-6xl font-bold text-white">
          Ready to Build Your Career?
        </h2>

        <p className="mt-6 text-2xl text-gray-200 max-w-2xl mx-auto leading-9">
          Join thousands of students and professionals discovering internships,
          jobs, and career opportunities with ApplyOrbitA.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-5">

          <Link href="/careers">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-5 rounded-full font-semibold transition-all duration-300 hover:scale-105">
              Explore Careers
            </button>
          </Link>

          <Link href="/contact">
            <button className="bg-white text-[#0F2D6B] px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300">
              Contact Us
            </button>
          </Link>

        </div>

      </div>
    </section>
  );
}