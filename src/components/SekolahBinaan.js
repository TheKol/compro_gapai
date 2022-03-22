import React from 'react';

const SEKOLAH_BINAAN = [
  {
    name: 'Madrasah Aliyah Kejuruan CAPAI',
    address: 'Kp. Bojongkoneng RT. 04 RW. 05 Ds. Rongga Kab. Bandung Barat.',
    tlp: '083156752021',
    logo: 'images/logo-mak-capai.jpg',
  },
  {
    name: 'Sekolah Menengah Pertama CAPAI',
    address: 'Kp. Bojongkoneng RT. 04 RW. 05 Ds. Rongga Kab. Bandung Barat.',
    tlp: '083156752021',

    logo: 'images/logo-smp-capai.jpg',
  },
];

const SekolahCard = ({ sekolah }) => (
  <div className='shadow-xl flex flex-row p-16 gap-8 transition ease-in-out duration-300 delay-75 hover:-translate-y-1 hover:scale-110'>
    <img
      src={sekolah.logo}
      alt={sekolah.name}
      className='w-48 h-48 object-cover'
    />
    <div className='flex flex-col gap-2 py-6'>
      <h3 className='text-3xl font-bold'>{sekolah.name}</h3>
      <p className='text-lg'>{sekolah.address}</p>
      <p className='text-lg'>
        Pendaftaran Hubungi:{' '}
        <span className='font-bold text-xl'>{sekolah.tlp}</span>
      </p>
    </div>
  </div>
);

const SekolahBinaan = () => {
  return (
    <div className='w-screen flex flex-col items-center gap-16 pt-8 pb-16'>
      <div className='flex flex-col items-center gap-4'>
        <h2 className='text-[#223f96] font-semibold text-5xl'>
          SEKOLAH BINAAN
        </h2>
        <div className='border-b-2 border-[#223f96] w-80'></div>
      </div>
      <div className='flex flex-col gap-4 w-1/2'>
        {SEKOLAH_BINAAN.map((sekolah) => (
          <SekolahCard sekolah={sekolah} key={sekolah.name} />
        ))}
      </div>
    </div>
  );
};

export default SekolahBinaan;
