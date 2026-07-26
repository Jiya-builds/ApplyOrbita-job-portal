import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#0F2D6B] text-white">

      <div className="max-w-[1280px] mx-auto px-6 py-16">

        <div className="grid md:grid-cols-4 gap-12">

          {/* Company */}
          <div>
            <Image
              src="/logo.jpeg"
              alt="ApplyOrbitA Logo"
              width={180}
              height={60}
              className="bg-white rounded-lg p-2"
            />

            <p className="mt-6 text-gray-300 leading-7">
              ApplyOrbitA helps students and professionals discover
              internships, jobs, and career opportunities with ease.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-xl font-semibold mb-5">
              Company
            </h3>

            <ul className="space-y-3 text-gray-300">

              <li className="hover:text-orange-400 cursor-pointer">
                About
              </li>

              <li className="hover:text-orange-400 cursor-pointer">
                Services
              </li>

              <li className="hover:text-orange-400 cursor-pointer">
                Careers
              </li>

              <li className="hover:text-orange-400 cursor-pointer">
                Contact
              </li>

            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray-300">

              <li className="hover:text-orange-400 cursor-pointer">
                Privacy Policy
              </li>

              <li className="hover:text-orange-400 cursor-pointer">
                Terms & Conditions
              </li>

              <li className="hover:text-orange-400 cursor-pointer">
                Support
              </li>

              <li className="hover:text-orange-400 cursor-pointer">
                FAQs
              </li>

            </ul>
          </div>

          {/* Contact */}
          <div>

            <h3 className="text-xl font-semibold mb-5">
              Contact
            </h3>

            <p className="text-gray-300">
              support@applyorbita.com
            </p>

            <p className="mt-3 text-gray-300">
              India
            </p>

            <div className="flex gap-4 mt-8">

              <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center cursor-pointer hover:scale-110 transition">
                F
              </div>

              <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center cursor-pointer hover:scale-110 transition">
                L
              </div>

              <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center cursor-pointer hover:scale-110 transition">
                I
              </div>

            </div>

          </div>

        </div>

        <div className="border-t border-gray-700 mt-14 pt-8 text-center text-gray-400">
          © 2026 ApplyOrbitA. All Rights Reserved.
        </div>

      </div>

    </footer>
  );
}