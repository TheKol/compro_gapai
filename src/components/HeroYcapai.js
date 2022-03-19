import React from 'react';

const HeroYcapai = () => {
  return (
    <div className='flex flex-row w-screen h-[800px] items-center'>
      <h2 className='w-1/2 font-bold text-8xl text-[#223f96] text-center'>
        Yayasan Pendidikan
        <br />
        Cikal Media Putra
        <br />
        Indonesia (YPCAPAI)
      </h2>
      <div className='w-1/2 flex justify-center'>
        <img
          className='w-96 h-96 object-cover'
          src='/images/logo-yayasan.jpeg'
          alt='Logo YPCAPAI'
        />
      </div>
    </div>
  );
};

export default HeroYcapai;
