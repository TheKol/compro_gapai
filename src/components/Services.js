import React from 'react';
import ServiceCard from './cards/ServiceCard';
import { SERVICES } from '../datas/ServicesData';

const Services = () => {
  return (
    <div className='flex flex-col items-center w-screen h-[1100px] pt-20 gap-8 bg-[#f8f9fa]'>
      <h2 className='font-bold text-5xl'>Membuat situasi yang aman</h2>
      <div className='flex flex-row'>
        {SERVICES.map((service) => (
          <ServiceCard
            serviceTitle={service.serviceTitle}
            serviceImg={service.serviceImg}
            serviceDesk={service.serviceDesk}
            serviceButton={service.serviceButton}
            serviceUsed={service.serviceUsed}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
