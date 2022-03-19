import React from 'react';

const Layout = ({ logoSrc, logoAlt, children, subCompany, company }) => {
  return (
    <>
      <header className='w-screen px-8 py-4 border-b drop-shadow'>
        <div className='flex flex-row items-center gap-2'>
          <img src={logoSrc} alt={logoAlt} className='object-cover w-12 h-12' />
          <p className='uppercase font-extrabold text-2xl'>{subCompany}</p>
        </div>
      </header>
      {children}
      <footer className='bg-[#071d2b] text-white flex flex-col items-center pb-4'>
        <div className='flex flex-row items-center gap-2 py-16 2xl:w-[1520px] xl:w-[1210px] lg:w-[980px] md:w-[780px] sm:w-[550px] w-[350px] border-b-[.5px] border-gray-500'>
          <img src={logoSrc} alt={logoAlt} className='object-cover w-12 h-12' />
          <p className='uppercase font-extrabold text-2xl'>{subCompany}</p>
        </div>
        <div className='flex flex-row items-center gap-2 pt-16  2xl:w-[1520px] xl:w-[1210px] lg:w-[980px] md:w-[780px] sm:w-[550px] w-[350px] '>
          <p className='text-gray-300'>2021-2022 Copyright {company}</p>
        </div>
      </footer>
    </>
  );
};

export default Layout;
