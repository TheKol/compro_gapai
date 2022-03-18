import React from 'react';

const ServiceCard = ({
  serviceImg,
  serviceTitle,
  serviceDesk,
  serviceButton,
  serviceUsed,
}) => {
  return (
    <div
      className='group h-[750px] w-[500px] flex flex-col items-center rounded-b-[40px]
    rounded-tr-[40px] gap-10 justify-center bg-[#f8f9fa] hover:bg-white hover:shadow-xl
    ease-in-out duration-300'
    >
      <img
        className='rounded-full w-[264px] h-[264px]'
        src={serviceImg}
        alt={serviceTitle}
      />
      <div className='px-12 flex flex-col items-center text-center gap-6 h-56'>
        <p className='bg-[#ffddbf] rounded-full py-1 px-4 font-semibold text-sm'>
          {serviceUsed}
        </p>
        <h3 className='text-2xl font-bold'>{serviceTitle}</h3>
        <p className='text-lg'>{serviceDesk}</p>
      </div>
      {serviceButton}
    </div>
  );
};

export default ServiceCard;
