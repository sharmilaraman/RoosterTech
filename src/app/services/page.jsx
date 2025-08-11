"use client";
import React from "react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
const SERVICES = [
  {
    title: "Air-Conditioning Services",
    image: "/images/ac2.jpg",
    description:
      "Installation, servicing, and troubleshooting for residential and commercial AC systems.",
  },
  {
    title: "Servicing & Maintenance",
    image: "/images/header2.jpg",
    description:
      "Planned preventive maintenance to keep your systems running safely and efficiently.",
  },
  {
    title: "Electrical Services",
    image: "/images/wiring.jpg",
    description:
      "Certified electrical works including installations, testing, and safety upgrades.",
  },
  {
    title: "Plumbing Services",
    image: "/images/plumbing-header.jpg",
    description:
      "End‑to‑end plumbing works for homes and businesses, done right the first time.",
  },
  {
    title: "Wiring & Rewiring",
    image: "/images/wiring3.jpg",
    description:
      "New wiring, rewiring, and cabling solutions that meet current safety standards.",
  },
  {
    title: "Sanitary Fixture Installation",
    image: "/images/plumb.jpg",
    description:
      "Professional installation of sanitary fixtures with neat finishing and compliance.",
  },
 
];

export default function Services() {
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

  return (
    <div id="services" className="w-full overflow-hidden">
      <div className="container mx-auto px-6 md:px-10 lg:px-20 py-10">
        <div className="text-center mb-10">
          <h1 className="text-2xl sm:text-4xl font-bold">
            Our <span className="text-orange-400 underline underline-offset-4 decoration-1 under font-light">Services</span>
          </h1>
          <p className="text-[#0b2341] text-xl mt-3 max-w-2xl mx-auto">
            Comprehensive M&E solutions delivered by certified professionals with a focus on quality and safety.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.title}
              className="group bg-white rounded-xl overflow-hidden border border-gray-200 hover:border-orange-400 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="relative h-40 sm:h-48 w-full">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                  priority={false}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              <div className="p-5">
                <h3 className="text-lg font-semibold text-[20px] text-[#0b2341]">
                  {service.title}
                </h3>
                <p className="text-gray-600 mt-2 text-[17px] leading-relaxed">
                  {service.description}
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <button
                    onClick={() => handleScrollToSection("contact")}
                    className="inline-flex items-center gap-2 text-md cursor-pointer font-medium text-white bg-[#0b2341] px-4 py-2 rounded hover:bg-[#0d2850] transition-colors"
                  >
                    Get Quote
                  </button>
                  <button
                    onClick={() => handleScrollToSection("projects")}
                    className="text-md cursor-pointer text-orange-500 hover:text-orange-600 font-medium"
                    
                  >
                    View Projects
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

