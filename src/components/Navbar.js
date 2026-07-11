"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="sticky top-0 w-full z-50 bg-[#030712]/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center h-24">
        {/* Logo */}
        <Link
          href="/"
          className="text-3xl font-extrabold tracking-tight text-white flex items-center"
        >
          EA<span className="text-emerald-500">.</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className="relative text-sm font-medium text-slate-300 hover:text-white transition-colors py-2 group"
            >
              {link.name}
              {/* Active Hover */}
              <span
                className={`absolute left-0 bottom-0 w-full h-0.5 bg-emerald-500 transition-transform origin-left ${
                  pathname === link.path
                    ? "scale-x-100"
                    : "scale-x-0 group-hover:scale-x-100"
                }`}
              ></span>
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-slate-300 hover:text-white focus:outline-none"
            aria-label="Toggle mobile menu"
          >
            {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden absolute top-24 left-0 w-full h-[calc(100vh-6rem)] bg-[#030712] flex flex-col items-center pt-20 space-y-8 z-40">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              onClick={() => setIsOpen(false)}
              className={`text-2xl font-semibold transition-colors ${
                pathname === link.path
                  ? "text-emerald-500"
                  : "text-slate-300 hover:text-white"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
