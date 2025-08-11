import React from 'react';
import { Building2 } from 'lucide-react';
export default function Projects() {
  const companyClients = [
    'Energy Engineering Contractors Pvt Ltd',
    'Savils Property Management Pte Ltd',
    'DIGIWORZ Pte Ltd',
    'EBI Pacific Pte Ltd',
    'G2 Ocean Singapore',
    'Spawn Line Pte Ltd',
    'Jland Engineering Pte Ltd',
    'WSH Experts Pvt Ltd',
    'AIS M&E Pte Ltd',
    
  ];

  return (
    <div className='container mb-4 mx-auto py-4 pt-10 px-6 md:px-10 lg:px-20 w-full overflow-hidden' id='projects'>
     <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>Our<span className='underline underline-offset-4 
      decoration-1  
      text-orange-400 under font-light'>  Project Clients</span></h1>
      <p className='text-center text-xl text-[#0b2341] max-w-100 mx-auto mb-8'>
        We have Successfully Completed the Projects and Maintenance Work for the following companies:
      </p>

      {/* Grid of client cards */}
       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {companyClients.map((company, index) => (
          <div
            key={index}
            className="border border-orange-400 rounded-xl p-4 text-center shadow-md hover:shadow-lg transition-shadow bg-white hover:scale-105 transform duration-300 ease-in-out"
          >
            <div className="flex justify-center mb-4">
              <Building2 className="h-10 w-10 text-orange-400" />
            </div>
            <p className="text-lg font-semibold text-[#0b2341]">{company}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
