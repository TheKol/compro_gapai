import React from 'react';
import Layout from '../components/Layout';
import ListSupply from '../components/ListSupply';

const PengadaanBarang = () => {
  return (
    <div>
      <Layout
        company='PT. Garda Media Putra Indonesia'
        subCompany='PT GARDA MEDIA PUTRA INDONESIA'
        logoSrc='images/logo-pt-gapai.jpeg'
        logoAlt='Logo PT GAPAI'
      >
        <div className='w-screen h-44 bg-slate-400'></div>
        <div className='flex flex-col items-center'>
          <h2 className='lg:text-4xl md:text-3xl sm:text-2xl text-lg text-center font-extrabold my-7'>
            Jelajahi Katalog Supply Kebutuhan Sekolah
          </h2>
          <p className='lg:w-[760px] w-full p-5 text-center mb-4'>
            PT. Garda Media Putra Indonesia menyediakan jasa yang tepat untuk
            kebutuhan Sekolah Anda. Kami menyediakan produk kebutuhan Sekolah
            dengan harga bersaing.
          </p>
          <p className='w-[760px] p-5 text-center mb-4'></p>
        </div>
        <ListSupply />
      </Layout>
    </div>
  );
};

export default PengadaanBarang;
