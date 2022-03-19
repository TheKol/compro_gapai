import React from 'react';

const Hero = () => {
  return (
    <div className='flex md:flex-row flex-col md:h-[790px] h-[1580] w-full bg-gradient-to-r from-cyan-400 to-sky-800'>
      <div className='md:w-1/2 w-full flex md:justify-end md:items-center m-8'>
        <div className='w-3/4 h-3/4 flex flex-col justify-center sm:gap-10 gap-8'>
          <p className='md:text-5xl font-bold text-white text-2xl'>
            Layanan keamanan profesional
          </p>
          <p className='text-white md:text-2xl text-lg 2xl:text-left xl:text-left lg:text-left md:text-left sm:text-left text-justify'>
            Memberikan pelayanan kepada perusahaan dan karyawan yang bekerja
            sama dengan kami. Selain menjaga keamanan, satpam juga menjaga apa
            yang harus dilindungi seperti dokumen penting, barang berharga serta
            memastikan keadaan aman tanpa kendala dan selalu sigap menjaga
            keselamatan orang sekitar.
          </p>
          <a
            href='#contact'
            className='text-center text-white bg-slate-800 shadow-lg shadow-slate-800/50
          hover:bg-opacity-70 w-[300px] md:w-[250px] xl:w-[400px] py-4 rounded-full xl:text-lg md:text-base text-lg font-semibold'
          >
            HUBUNGI KAMI SEKARANG
          </a>
        </div>
      </div>
      <div className='md:w-1/2 w-full flex justify-center'>
        <img
          src='images/hero.png'
          alt='hero'
          className='sm:h-[800px] h-[400px] object-cover self-end'
        />
      </div>
    </div>
  );
};

export default Hero;
