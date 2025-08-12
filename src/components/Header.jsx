"use client";
import { usePathname, useRouter } from "next/navigation";

import React, { useEffect, useState } from "react";

const data = [
  {
    id: 1,
    image: "/images/header2.jpg",
    title: "Expert Servicing & Reliable Maintenance"
  },
  {
    id: 2,
    image: "/images/wiring3.jpg",
    title: "Professional Wiring & Safe Rewiring Solutions"
  },
  {
    id: 3,
    image: "/images/ac2.jpg",
    title: "Efficient Air-Conditioning Installation & Care"
  },
  {
    id: 4,
    image: "/images/aircone.jpg",
    title: "Comprehensive Electrical Services You Trust"
  },
];

export default function Header() {
  const [currentSlide, setCurrentSlide] = useState(0);
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

  useEffect(() => {
    const interval = setInterval(
      () =>
        setCurrentSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1)),
      2500 
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="h-screen  bg-cover bg-center flex items-center w-full overflow-hidden"
      style={{ backgroundImage: `url('${data[currentSlide].image}')` }}
    >
      <div className="container text-end mx-auto py-4 px-6 md:px-10 lg:px-20 flex flex-col items-end">
        <h2 className="text-white uppercase text-5xl sm:text-6xl md:text-[82px] inline-block max-w-3xl pt-20 font-semibold">
          Explore our services
        </h2>
        <div className="flex flex-col items-end mt-10 gap-6 w-full max-w-xl">
          <div className="space-x-6 mt-8">
            <button
              onClick={() => handleScrollToSection("projects")}
              className="border border-[#0b2341] px-5 py-3 md:px-8 md:py-3 rounded"
            >
              Projects
            </button>
            <button
              onClick={() => handleScrollToSection("contact")}
              className="border border-[#0b2341] text-white px-5 py-3 md:px-8 md:py-3 rounded bg-[#0b2341]"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
