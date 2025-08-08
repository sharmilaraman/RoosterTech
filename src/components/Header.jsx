"use client";
import Link from 'next/link';
import Image from "next/image";
import React, { useEffect, useState } from "react";

const data = [
  {
    id: 1,
//     title: "always fresh & always crispy & always hot",
    image: "/images/header2.jpg",
  },
  {
    id: 2,
//     title: "we deliver your order wherever you are in NY",
    image: "/images/aircone1.jpg",
  },
  {
    id: 3,
//     title: "the best pizza to share with your family",
    image: "/images/wiring3.jpg",
     },
     {
          id: 4,
          image:"/images/plumbing-header.jpg",
     },
     {
          id: 5,
          image: "/images/aircone.jpg",
     }
     
];

export default function Header() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setCurrentSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1)),
      1500 // 2.5 seconds for better readability
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-screen  bg-cover bg-center flex items-center w-full overflow-hidden" style={{ backgroundImage: `url('${data[currentSlide].image}')` }}>
      <div className="container text-end mx-auto py-4 px-6 md:px-10 lg:px-32 flex flex-col items-end">
        <h2 className="text-[#0b2341] uppercase text-5xl sm:text-6xl md:text-[82px] inline-block max-w-3xl pt-20 font-semibold">
          Explore our services
        </h2>
        <div className="flex flex-col items-end mt-10 gap-6 w-full max-w-xl">
          
          <div className="space-x-6 mt-8">
            <Link href="/projects" className="border border-[#0b2341] px-5 py-1 md:px-8 md:py-3 rounded">Projects</Link>
            <Link href="/contact" className="border border-[#0b2341] text-white px-5 py-1 md:px-8 md:py-3 rounded bg-[#0b2341]">Contact Us</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
