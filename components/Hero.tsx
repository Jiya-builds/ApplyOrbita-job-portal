
import Image from "next/image";
export default function Hero() {
  return (
    <section className="min-h-screen flex items-center bg-gradient-to-br from-orange-50 via-white to-blue-50">
      <div className="max-w-[1400px] mx-auto px-8 lg:px-20 py-28 grid lg:grid-cols-2 gap-24 items-center">

        {/* Left Content */}
        <div>

          <span className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-6 py-3 text-lg rounded-full font-semibold shadow-sm">
            🚀 Trusted by Students & Startups
          </span>

          <h1 className="mt-8 text-6xl md:text-7xl lg:text-8xl xl:text-[96px] font-extrabold leading-[1.05] text-[#0F2D6B]">
            Find Your Dream
            <br />
            <span className="text-orange-500">
              Internship & Job
            </span>
          </h1>

          <p className="mt-8 text-2xl text-gray-600 leading-10 max-w-xl">
            ApplyOrbitA connects talented students and professionals
            with internships, jobs, and career opportunities while
            helping companies hire the right talent faster.
          </p>

          <div className="mt-12 flex gap-6 flex wrap">

            <button className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-5 text-lg rounded-full font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
              Get Started
            </button>

            <button className="border-2 border-[#0F2D6B] text-[#0F2D6B] px-8 py-4 rounded-full font-semibold hover:bg-[#0F2D6B] hover:text-white transition-all duration-300">
              Explore Jobs
            </button>

          </div>

        </div>

        <div className="flex justify-center">
  <div className="relative w-[600px] h-[650px]">

    {/* Background Glow */}
    <div className="absolute -top-10 -left-10 w-72 h-72 rounded-full bg-orange-100 blur-3xl opacity-40"></div>
    <div className="absolute bottom-0 right-0 w-72 h-72 rounded-full bg-blue-100 blur-3xl opacity-40"></div>

    {/* Main Image */}
    <div className="relative w-full h-full overflow-hidden rounded-[35px] shadow-2xl">
      <Image
  src="/images/office.jpg"
  alt="Students Working"
  width={550}
  height={650}
  className="rounded-[35px] object-cover shadow-2xl"
/>
    </div>

    {/* Floating Cards */}

    <div className="absolute top-8 -left-10 bg-white rounded-2xl px-6 py-5 shadow-xl">
      <h3 className="text-3xl font-bold text-orange-500">5000+</h3>
      <p className="text-gray-500">Jobs Posted</p>
    </div>

    <div className="absolute top-10 -right-8 bg-white rounded-2xl px-6 py-5 shadow-xl">
      <h3 className="text-3xl font-bold text-blue-700">1000+</h3>
      <p className="text-gray-500">Companies</p>
    </div>

    <div className="absolute bottom-10 -left-8 bg-white rounded-2xl px-6 py-5 shadow-xl">
      <h3 className="text-3xl font-bold text-orange-500">15000+</h3>
      <p className="text-gray-500">Students</p>
    </div>

    <div className="absolute bottom-8 -right-10 bg-white rounded-2xl px-6 py-5 shadow-xl">
      <h3 className="text-3xl font-bold text-blue-700">95%</h3>
      <p className="text-gray-500">Success Rate</p>
    </div>

  </div>
</div>

      </div>
    </section>
  );
}