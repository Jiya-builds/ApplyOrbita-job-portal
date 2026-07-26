export default function Stats() {
  const stats = [
    { number: "5000+", label: "Jobs Posted" },
    { number: "15000+", label: "Students Registered" },
    { number: "1000+", label: "Hiring Companies" },
    { number: "95%", label: "Success Rate" },
  ];

  return (
    <section className="py-24 bg-[#0F2D6B]">
      <div className="max-w-[1280px] mx-auto px-6">

        <div className="text-center text-white">
          <h2 className="text-5xl font-bold">
            Our Impact in Numbers
          </h2>

          <p className="mt-5 text-lg text-gray-300">
            Thousands of students trust ApplyOrbitA to kickstart their careers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

          {stats.map((item) => (
            <div
              key={item.label}
              className="bg-white rounded-2xl p-8 text-center hover:-translate-y-2 transition-all duration-300 shadow-xl"
            >
              <h3 className="text-5xl font-bold text-orange-500">
                {item.number}
              </h3>

              <p className="mt-4 text-gray-600 font-medium">
                {item.label}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}