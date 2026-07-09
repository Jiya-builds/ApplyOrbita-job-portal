import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/logo .jpeg"
            alt="ApplyOrbitA Logo"
            width={180}
            height={60}
            className="object-contain"
          />
        </div>

        {/* Navigation */}
        <ul className="hidden md:flex items-center gap-8 font-medium text-gray-700">
          <li className="hover:text-orange-500 cursor-pointer">Home</li>
          <li className="hover:text-orange-500 cursor-pointer">About</li>
          <li className="hover:text-orange-500 cursor-pointer">Services</li>
          <li className="hover:text-orange-500 cursor-pointer">Careers</li>
          <li className="hover:text-orange-500 cursor-pointer">Contact</li>
        </ul>

        {/* Button */}
        <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full transition">
          Get Started
        </button>

      </div>
    </nav>
  );
}