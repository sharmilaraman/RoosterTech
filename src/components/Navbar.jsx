"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { X, Mail, Phone, ArrowUpRight } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

const navItems = [ 
  { label: "Home", type: "link", href: "/" },
  { label: "About", type: "scroll", id: "about" },
  { label: "Services", type: "scroll", id: "services" },
  { label: "Projects", type: "scroll", id: "projects" },
  { label: "Contact", type: "scroll", id: "contact" },
];   

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
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

  const closeMenu = () => setIsOpen(false);

  const handleNav = (item) => {
    if (item.type === "scroll") {
      handleScrollToSection(item.id);
    }
    closeMenu();
  };

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

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
            <span className="text-orange-400 text-xl md:text-2xl font-semibold tracking-wide">
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
            onClick={() => handleScrollToSection("about")}
            className="cursor-pointer hover:text-gray-400"
          >
            About
          </button>
          <button
            className="cursor-pointer hover:text-gray-400"
            onClick={() => handleScrollToSection("services")}
          >
            Services
          </button>
          <button
            className="cursor-pointer hover:text-gray-400"
            onClick={() => handleScrollToSection("projects")}
          >
            Projects
          </button>
          <button
            className="cursor-pointer hover:text-gray-400"
            onClick={() => handleScrollToSection("contact")}
          >
            Contact
          </button>
        </ul>

        {/* CTA + Mobile Menu Button */}
        <div className="flex items-center gap-3">
          <a href="mailto:roostertechsa@gmail.com">
            <button className="bg-gray-100 cursor-pointer rounded-full p-1 md:p-2">
              <Mail className="text-orange-400 w-4 h-4 md:w-5 md:h-5" />
            </button>
          </a>
          <a href="tel:+6591364098">
            <button className="bg-gray-100 cursor-pointer rounded-full p-1 md:p-2">
              <Phone className="text-orange-400 w-4 h-4 md:w-5 md:h-5" />
            </button>
          </a>

          <button
            className="md:hidden block"
            onClick={() => setIsOpen(true)}
            aria-label="Open menu"
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

      {/* Mobile Menu — left editorial drawer */}
      <div
        className={`md:hidden fixed inset-0 z-30 transition-opacity duration-300 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!isOpen}
      >
        {/* Dimmed backdrop */}
        <button
          type="button"
          className="absolute inset-0 bg-[#061428]/70 backdrop-blur-[2px]"
          onClick={closeMenu}
          aria-label="Close menu backdrop"
        />

        {/* Left panel */}
        <aside
          className={`absolute top-0 left-0 h-full w-[min(88vw,340px)] bg-[#0b2341] text-white shadow-[20px_0_60px_rgba(0,0,0,0.35)] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* Accent rail */}
          <div className="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-orange-400 via-orange-500/40 to-transparent" />

          {/* Diagonal texture */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage:
                "repeating-linear-gradient(-45deg, transparent, transparent 12px, #fff 12px, #fff 13px)",
            }}
          />

          <div className="relative flex h-full flex-col px-7 py-6">
            {/* Top bar */}
            <div className="mb-10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-orange-400 animate-pulse" />
                <span className="text-[11px] uppercase tracking-[0.28em] text-orange-400/90">
                  Menu
                </span>
              </div>
              <button
                type="button"
                onClick={closeMenu}
                className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/20 transition hover:border-orange-400 hover:bg-orange-400/10"
                aria-label="Close menu"
              >
                <X className="h-5 w-5 transition group-hover:rotate-90 duration-300" />
              </button>
            </div>

            {/* Nav list */}
            <nav className="flex-1">
              <ul className="flex flex-col gap-1">
                {navItems.map((item, index) => {
                  const num = String(index + 1).padStart(2, "0");
                  const delay = isOpen ? `${80 + index * 70}ms` : "0ms";

                  const content = (
                    <span className="group flex w-full items-center gap-4 border-b border-white/10 py-3.5 text-left transition">
                      <span className="w-8 font-mono text-xs text-orange-400/80 tabular-nums">
                        {num}
                      </span>
                      <span className="flex-1 text-2xl font-semibold tracking-wide transition-transform duration-300 group-hover:translate-x-1.5 group-hover:text-orange-400">
                        {item.label}
                      </span>
                      <ArrowUpRight className="h-4 w-4 translate-y-1 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-hover:text-orange-400" />
                    </span>
                  );

                  return (
                    <li
                      key={item.label}
                      className={`transition-all duration-500 ease-out ${
                        isOpen
                          ? "translate-x-0 opacity-100"
                          : "-translate-x-6 opacity-0"
                      }`}
                      style={{ transitionDelay: delay }}
                    >
                      {item.type === "link" ? (
                        <Link href={item.href} onClick={closeMenu}>
                          {content}
                        </Link>
                      ) : (
                        <button
                          type="button"
                          className="w-full cursor-pointer"
                          onClick={() => handleNav(item)}
                        >
                          {content}
                        </button>
                      )}
                    </li>
                  );
                })}
              </ul>
            </nav>

            {/* Footer strip */}
            <div
              className={`mt-6 border-t border-white/10 pt-5 transition-all duration-500 ${
                isOpen
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              }`}
              style={{ transitionDelay: isOpen ? "420ms" : "0ms" }}
            >
              <p className="mb-3 text-[11px] uppercase tracking-[0.22em] text-white/45">
                Get in touch
              </p>
              <div className="flex gap-3">
                <a
                  href="mailto:roostertechsa@gmail.com"
                  className="flex flex-1 items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 py-2.5 text-sm transition hover:border-orange-400 hover:bg-orange-400/10"
                >
                  <Mail className="h-4 w-4 text-orange-400" />
                  Email
                </a>
                <a
                  href="tel:+6591364098"
                  className="flex flex-1 items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 py-2.5 text-sm transition hover:border-orange-400 hover:bg-orange-400/10"
                >
                  <Phone className="h-4 w-4 text-orange-400" />
                  Call
                </a>
              </div>
              <p className="mt-4 text-[10px] tracking-[0.18em] text-white/30 uppercase">
                Rooster Tech M&E
              </p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
