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
      <footer>
        <p>ini Footer</p>
      </footer>
    </>
  );
};

export default Layout;
