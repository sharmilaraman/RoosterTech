import React from "react";
import {
  Award,
  BadgeCheck,
  ShieldCheck,
  Handshake,
  Landmark,
  Hammer,
  Building2,
} from "lucide-react";
export default function About() {
  return (
    <div
      id="about"
      className="scroll-mt-28 flex flex-col items-center justify-center container mx-auto p-10 w-full overflow-hidden md:px-10 lg:px-32"
    >
      <h1 className="text-2xl sm:text-4xl text-center font-bold mt-2 mb-2">
        About{" "}
        <span className="text-orange-400 underline underline-offset-4 decoration-1 under font-light">
          Our Company Overview
        </span>
      </h1>
      <p className="text-[#0b2341]  text-center mb-8 max-w-80 text-xl">
        To provide high-quality, reliable M&E services.
      </p>
      <div className="flex flex-col md:flex-row items-center md:items-start  md:gap-20 ">
        <img
          src="/images/wiring2.jpg"
          alt="about-img"
          className="w-full md:w-1/2 "
        />

        <div className="flex flex-col  md:items-start mt-2 text-[#0b2341]">
          <div className="">
            <p className=" text-xl">
              Our company was majorly involves in M&E based like Mechanical,
              Electrical, Plumbing and Sanitary sectors where ever we taken the
              new/ renovation/ maintenance troubleshooting project works. Our
              projects are given good quality and timely to our valuable
              clients.
            </p>
          </div>
          <div className="mt-5">
            <h2 className="text-2xl font-medium mb-4">
              Certifications & Accreditations
            </h2>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <BadgeCheck size={20} className="text-orange-500" />
                Company Approved by BCA
              </li>
              <li className="flex items-center gap-2">
                <ShieldCheck size={20} className="text-orange-500" />
                Company Certification of Biz safe 2
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
