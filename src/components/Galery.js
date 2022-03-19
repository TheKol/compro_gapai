import React from 'react';
import Carousel from './Carousel';

const Galery = () => {
  return (
    <div className='flex flex-col bg-[#f8f9fa] items-center pt-20 gap-16 xl:h-[1100px] lg:h-[950px] md:h-[800px] sm:h-[635px] h-[550px]'>
      <div>
        <h2 className='max-w-[1000px] font-bold xl:text-5xl md:text-4xl sm:text-3xl text-2xl text-center'>
          Gapai Guard
          <br />
          layanan keamanan profesional
          <br />
          Kepuasan anda, Kebahagiaan kami
        </h2>
      </div>
      <div className='max-w-[1200px] max-h-screen mx-auto'>
        <Carousel />
      </div>
    </div>
  );
};

export default Galery;
