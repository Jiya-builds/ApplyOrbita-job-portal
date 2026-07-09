export default function Hero() {
  return (
    <section className="bg-white min-h-[90vh] flex items-center">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* Left Content */}
        <div>
          <span className="bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold">
            🚀 Empowering Careers
          </span>

          <h1 className="mt-6 text-5xl md:text-6xl font-bold leading-tight">
            Build Your Future with{" "}
            <span className="text-orange-500">ApplyOrbitA</span>
          </h1>

          <p className="mt-6 text-gray-600 text-lg">
            Connecting students and professionals with internships,
            jobs, and career opportunities while helping companies
            hire top talent.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-600 transition">
              Get Started
            </button>

            <button className="border border-orange-500 text-orange-500 px-6 py-3 rounded-full hover:bg-orange-50 transition">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Content */}
        <div className="flex justify-center">
          <div className="w-[450px] h-[450px] bg-orange-100 rounded-3xl flex items-center justify-center">
            <h2 className="text-2xl font-bold text-orange-500">
              Illustration Here
            </h2>
          </div>
        </div>

      </div>
    </section>
  );
}