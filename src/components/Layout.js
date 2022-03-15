import React from 'react';

const Layout = ({ logoSrc, logoAlt, children }) => {
  return (
    <>
      <header className='w-screen px-8 py-4 border-b drop-shadow'>
        <div className='flex flex-row items-center gap-2'>
          <img src={logoSrc} alt={logoAlt} className='object-cover w-12 h-12' />
          <p className='uppercase font-extrabold text-2xl'>Gapai Guard</p>
        </div>
      </header>
      {children}
      <footer className='bg-[#071d2b] text-white flex flex-col items-center pb-4'>
        <div className='flex flex-row items-center gap-2 py-16 w-[1600px] border-b-[.5px] border-gray-500'>
          <img src={logoSrc} alt={logoAlt} className='object-cover w-12 h-12' />
          <p className='uppercase font-extrabold text-2xl'>Gapai Guard</p>
        </div>
        <div className='flex flex-row items-center gap-2 pt-16 w-[1600px]'>
          <p className='text-gray-300'>
            2021-2022 Copyright PT. Garda Media Putra Indonesia
          </p>
        </div>
      </footer>
    </>
  );
};

export default Layout;
