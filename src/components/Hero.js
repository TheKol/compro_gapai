import React from 'react';

const Hero = () => {
  return (
    <div className='flex flex-row h-[790px] w-full bg-gradient-to-r from-cyan-400 to-sky-800'>
      <div className='w-1/2 flex justify-end items-center'>
        <div className='w-3/4 h-3/4 flex flex-col justify-center gap-10'>
          <p className='text-5xl font-bold text-white'>
            Layanan keamanan profesional
          </p>
          <p className='text-white text-2xl'>
            Memberikan pelayanan kepada perusahaan dan karyawan yang bekerja
            sama dengan kami. Selain menjaga keamanan, satpam juga menjaga apa
            yang harus dilindungi seperti dokumen penting, barang berharga serta
            memastikan keadaan aman tanpa kendala dan selalu sigap menjaga
            keselamatan orang sekitar.
          </p>
          <button
            className='text-white bg-slate-800 shadow-lg shadow-slate-800/50
          hover:bg-opacity-70 w-1/2 py-4 rounded-full text-lg font-semibold'
          >
            HUBUNGI KAMI SEKARANG
          </button>
        </div>
      </div>
      <div className='w-1/2 flex justify-center'>
        <img
          src='images/hero.png'
          alt='hero'
          className='h-[700px] object-cover self-end'
        />
      </div>
    </div>
  );
};

export default Hero;
