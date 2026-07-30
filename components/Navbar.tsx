"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/pricing", label: "Pricing" },
    { href: "/careers", label: "Careers" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <nav className="max-w-[1500px] mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-10 h-[72px] lg:h-[88px]">
        {/* Logo */}
        <Link href="/" className="flex items-center shrink-0">
          <h1 className="text-[24px] sm:text-[28px] lg:text-[34px] font-black tracking-tight leading-none">
            <span className="text-black">Apply</span>
            <span className="text-orange-500">OrbitA</span>
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8 lg:gap-16 text-[16px] lg:text-[18px] font-semibold">
          {navLinks.map((link, i) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={
                  i === 0
                    ? "text-orange-500 hover:text-orange-600 transition"
                    : "hover:text-orange-500 transition"
                }
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA button */}
        <Link
          href="/contact"
          className="hidden md:inline-block bg-orange-500 text-white px-6 lg:px-8 py-3 lg:py-4 rounded-full font-semibold shadow-lg hover:bg-orange-600 transition-all duration-300 text-[15px] lg:text-[16px]"
        >
          Get Started →
        </Link>

        {/* Mobile hamburger button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile menu dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-4 py-4">
          <ul className="flex flex-col gap-4 text-[17px] font-semibold">
            {navLinks.map((link, i) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={
                    i === 0
                      ? "text-orange-500 block"
                      : "hover:text-orange-500 transition block"
                  }
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="mt-4 block text-center bg-orange-500 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-orange-600 transition-all duration-300"
          >
            Get Started →
          </Link>
        </div>
      )}
    </header>
  );
}
