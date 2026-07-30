import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center bg-gradient-to-br from-orange-50 via-white to-blue-50 overflow-x-hidden">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-20 py-16 sm:py-20 lg:py-28 grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">

        {/* Left Content */}
        <div>

          <span className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-lg rounded-full font-semibold shadow-sm">
            🚀 Trusted by Students & Startups
          </span>

          <h1 className="mt-6 sm:mt-8 text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-[96px] font-extrabold leading-[1.1] sm:leading-[1.05] text-[#0F2D6B]">
            Find Your Dream
            <br />
            <span className="text-orange-500">
              Internship & Job
            </span>
          </h1>

          <p className="mt-6 sm:mt-8 text-base sm:text-xl lg:text-2xl text-gray-600 leading-7 sm:leading-9 lg:leading-10 max-w-xl">
            ApplyOrbitA connects talented students and professionals
            with internships, jobs, and career opportunities while
            helping companies hire the right talent faster.
          </p>

          <div className="mt-8 sm:mt-12 flex flex-wrap gap-4 sm:gap-6">

            <Link
              href="/contact"
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 sm:px-10 py-3 sm:py-5 text-sm sm:text-lg rounded-full font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 inline-flex items-center justify-center"
            >
              Get Started
            </Link>

            <Link
              href="/careers"
              className="border-2 border-[#0F2D6B] text-[#0F2D6B] px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base rounded-full font-semibold hover:bg-[#0F2D6B] hover:text-white transition-all duration-300 inline-flex items-center justify-center"
            >
              Explore Jobs
            </Link>

          </div>

        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <div className="relative w-full max-w-[380px] sm:max-w-[450px] lg:max-w-[600px] aspect-[550/650]">

            {/* Background Glow */}
            <div className="absolute -top-10 -left-10 w-40 sm:w-72 h-40 sm:h-72 rounded-full bg-orange-100 blur-3xl opacity-40"></div>
            <div className="absolute bottom-0 right-0 w-40 sm:w-72 h-40 sm:h-72 rounded-full bg-blue-100 blur-3xl opacity-40"></div>

            {/* Main Image */}
            <div className="relative w-full h-full overflow-hidden rounded-[24px] sm:rounded-[35px] shadow-2xl">
              <Image
                src="/images/office.jpg"
                alt="Students Working"
                fill
                className="object-cover"
              />
            </div>

            {/* Floating Cards */}

            <div className="absolute top-3 left-1 sm:top-8 sm:-left-10 bg-white rounded-xl sm:rounded-2xl px-3 sm:px-6 py-2 sm:py-5 shadow-xl">
              <h3 className="text-lg sm:text-3xl font-bold text-orange-500">5000+</h3>
              <p className="text-[10px] sm:text-base text-gray-500">Jobs Posted</p>
            </div>

            <div className="absolute top-3 right-1 sm:top-10 sm:-right-8 bg-white rounded-xl sm:rounded-2xl px-3 sm:px-6 py-2 sm:py-5 shadow-xl">
              <h3 className="text-lg sm:text-3xl font-bold text-blue-700">1000+</h3>
              <p className="text-[10px] sm:text-base text-gray-500">Companies</p>
            </div>

            <div className="absolute bottom-3 left-1 sm:bottom-10 sm:-left-8 bg-white rounded-xl sm:rounded-2xl px-3 sm:px-6 py-2 sm:py-5 shadow-xl">
              <h3 className="text-lg sm:text-3xl font-bold text-orange-500">15000+</h3>
              <p className="text-[10px] sm:text-base text-gray-500">Students</p>
            </div>

            <div className="absolute bottom-3 right-1 sm:bottom-8 sm:-right-10 bg-white rounded-xl sm:rounded-2xl px-3 sm:px-6 py-2 sm:py-5 shadow-xl">
              <h3 className="text-lg sm:text-3xl font-bold text-blue-700">95%</h3>
              <p className="text-[10px] sm:text-base text-gray-500">Success Rate</p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
