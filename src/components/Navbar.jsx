"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { X, Mail, Phone } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // detects current route
  const router = useRouter();
  const handleScrollToSection = (id) => {
    if (pathname === "/") {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      router.push(`/?scrollTo=${id}`);
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full z-10 flex items-center justify-center bg-[#0b2341]">
      <div className="container mx-auto flex items-center justify-between py-2 px-6 md:px-10 lg:px-20">
        {/* Logo + Brand Name */}
        <Link href="/">
          <div className="flex items-center gap-3">
            <div className="relative w-[50px] h-[50px] md:w-[70px] md:h-[70px]">
              <Image
                src="/images/logo.png"
                alt="logo"
                fill
                className="object-contain"
              />
            </div>
            <span
              href="/"
              className="text-orange-400 text-xl md:text-2xl font-semibold tracking-wide"
            >
              ROOSTER
            </span>
          </div>
        </Link>

        {/* Nav Links */}
        <ul className="hidden md:flex gap-7 text-white">
          <Link href="/" className="cursor-pointer hover:text-gray-400">
            Home
          </Link>
          <button
            onClick={() => {
              handleScrollToSection("about");
            }}
            className="cursor-pointer hover:text-gray-400"
          >
            About
          </button>
          <Link href="/services" className="cursor-pointer hover:text-gray-400">
            Services
          </Link>
          <Link href="/projects" className="cursor-pointer hover:text-gray-400">
            Projects
          </Link>
          <Link href="/contact" className="cursor-pointer hover:text-gray-400">
            Contact
          </Link>
        </ul>

        {/* CTA + Mobile Menu Button */}
        <div className="flex items-center gap-3">
          <a href="mailto:roostertechsa@gmail.com">
            <button className="bg-gray-100  rounded-full p-1 md:p-2">
              <Mail className="text-orange-400 w-4 h-4 md:w-5 md:h-5" />
            </button>
          </a>
          <a href="tel:+6591364098">
            <button className="bg-gray-100  rounded-full p-1 md:p-2">
              <Phone className="text-orange-400 w-4 h-4 md:w-5 md:h-5" />
            </button>
          </a>

          <button
            className="md:hidden block"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Image
              src="/images/menu_icon.svg"
              alt="menu-icon"
              width={28}
              height={28}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden  fixed top-0 left-0 w-full h-full bg-[#0b2341] text-white z-20 transition-all duration-300 ">
          <div
            className="flex text-white justify-end p-6 cursor-pointer"
            onClick={() => setIsOpen(false)}
          >
            <X className="w-[28px] h-[28px]" />
          </div>
          <ul className="flex flex-col mt-2 items-center gap-5 text-xl font-semibold">
            <Link href="/" onClick={() => setIsOpen(false)}>
              Home
            </Link>
            <button
              onClick={() => {
                handleScrollToSection("about");
                setIsOpen(false);
              }}
            >
              About
            </button>
            <Link href="/services" onClick={() => setIsOpen(false)}>
              Services
            </Link>
            <Link href="/projects" onClick={() => setIsOpen(false)}>
              Projects
            </Link>
            <Link href="/contact" onClick={() => setIsOpen(false)}>
              Contact
            </Link>
          </ul>
        </div>
      )}
    </div>
  );
}
