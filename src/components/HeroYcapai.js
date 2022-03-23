import React from 'react';

const HeroYcapai = () => {
  return (
    <div className='flex lg:flex-row flex-col-reverse w-screen h-full lg:h-[800px] my-10 gap-10 items-center'>
      <h2
        className='lg:w-1/2 w-full font-bold
      2xl:text-7xl xl:text-6xl md:text-5xl sm:text-3xl text-2xl text-[#223f96] text-center'
      >
        Yayasan Pendidikan
        <br />
        Cikal Media Putra
        <br />
        Indonesia (YPCAPAI)
      </h2>
      <div className='w-1/2 flex justify-center'>
        <img
          className='xl:w-96 xl:h-96 object-cover'
          src='/images/logo-yayasan.jpeg'
          alt='Logo YPCAPAI'
        />
      </div>
    </div>
  );
};

export default HeroYcapai;
