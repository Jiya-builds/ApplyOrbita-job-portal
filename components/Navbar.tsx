import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <nav className="max-w-[1500px] mx-auto flex items-center justify-between px-10 h-[88px]">

        {/* Logo */}
        <Link href="/" className="flex items-center">
  <h1 className="text-[34px] font-black tracking-tight leading-none">
  <span className="text-black">Apply</span>
  <span className="text-orange-500">OrbitA</span>
</h1>
</Link>

        {/* Navigation */}
        <ul className="hidden md:flex items-center gap-16 text-[18px] font-semibold">

          <li>
            <Link
              href="/"
              className="text-orange-500 hover:text-orange-600 transition"
            >
              Home
            </Link>
          </li>

          <li>
            <Link href="/about" className="hover:text-orange-500 transition">
              About
            </Link>
          </li>

          <li>
            <Link href="/services" className="hover:text-orange-500 transition">
              Services
            </Link>
          </li>

          <li>
            <Link
              href="/pricing"
              className="transition hover:text-orange-500"
              >
              Pricing
            </Link>
          </li>

          <li>
            <Link href="/careers" className="hover:text-orange-500 transition">
              Careers
            </Link>
          </li>

          <li>
            <Link href="/contact" className="hover:text-orange-500 transition">
              Contact
            </Link>
          </li>

        </ul>

        {/* Button */}
        <button className="bg-orange-500 text-white px-10 h-[54px] rounded-2xl text-[18px] font-semibold shadow-[0_6px_0_#111] hover:-translate-y-1 transition-all">
  Get Started →
</button>

      </nav>
    </header>
  );
}