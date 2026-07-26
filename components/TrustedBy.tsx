import Image from "next/image";

const companies = [
  "/logos/google.png",
  "/logos/microsoft.png",
  "/logos/amazon.png",
  "/logos/tcs.png",
  "/logos/infosys.png",
  "/logos/wipro.png",
];

export default function TrustedBy() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-[1400px] mx-auto px-8">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-orange-500 font-semibold uppercase tracking-[4px]">
            Trusted Partners
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-[#0F2D6B]">
            Trusted by 1000+ Hiring Companies
          </h2>

          <p className="mt-5 text-lg text-gray-500">
            Top companies hire talented students through ApplyOrbitA.
          </p>
        </div>

        {/* Company Logos */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">

          {companies.map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center h-32 bg-white rounded-3xl border border-gray-200 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer"
            >
              <Image
                src={logo}
                alt="Company Logo"
                width={120}
                height={60}
                className="object-contain transition-all duration-300 hover:scale-110"
              />
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}