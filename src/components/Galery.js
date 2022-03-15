import React from 'react';
import Carousel from './Carousel';

const Galery = () => {
  return (
    <div className='flex flex-col items-center pt-20 gap-16 h-[1100px]'>
      <div>
        <h2 className='max-w-[1000px] font-bold text-5xl text-center'>
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
