import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    <div className="bg-[#0b2341] w-full text-white pt-10 px-6 md:px-10 lg:px-32 overflow-hidden" id="footer">
     <div className="container mx-auto flex flex-col md:flex-row justify-between items-start ">
                 <div className="w-full md:w-1/3 mb-8 md:mb-0">
                      <Image src="/images/logo.png" alt="logo" width={70} height={70} />
                      <p className="mt-4"><span className="text-orange-400">Our success</span> is driven by our team of qualified engineers, technicians, and support staff.
                         Our professionals are certified, safety-trained, and committed to quality workmanship
                         and on-time delivery.
                      </p>
                 </div>   
                 <div className="w-full md:w-1/5 mb-8 md:mb-0">
                      <h3 className="text-2xl font-bold mb-4 text-orange-400">Our Services</h3>
                      <ul className="flex flex-col gap-2">
                           <a>Air-Conditioning Services</a>
                           <a>Servicing & Maintenance</a>
                           <a>Electrical Services</a>
                           <a>Plumbing Services</a>
                           <a>Wiring & Rewiring</a> 
                           <a>Sanitary Fixture Installation</a>
                           <a>Leak Repairs</a>
                      </ul>
                 </div>  
                
                 <div className="w-full md:w-1/3 ">
                      <h3 className="text-2xl font-bold mb-4 text-orange-400">Get In Touch</h3>
                       <p className="mb-2"><span className="font-semibold space-x-0.5">Rooster Tech M&E  Pte  Ltd</span></p>
      <p className="mb-2">📍 5 Soon Lee Street, #06-28 Pioneer Point, Singapore 627607</p>
      <p className="mb-2">📧 <a href="mailto:roostertechsa@gmail.com" className="text-blue-300 hover:underline">roostertechsa@gmail.com</a></p>
      <p className="mb-2">📞 <a href="tel:+6591364098" className="hover:underline">+65 91364098</a></p>
                 </div>        
            </div>
           
     <div className="border-t border-orange-400 mt-10 py-4 text-center">
         © <span className="text-orange-400">Rooster Tech</span> | All Right Reserved | crafted by Sharmila-Frontend Developer   
      </div>
    </div>
  );
}
