import React from 'react';
import MotoCard from './cards/MotoCard';

const MOTO_CAPAI = [
  {
    title: 'Cerdas',
    descMoto: 'Membentuk anak didik yang berfikir cerdas',
  },
  {
    title: 'Agamis',
    descMoto: 'Membentuk anak didik yang menjunjung tinggi agama',
  },
  {
    title: 'Produktif',
    descMoto: 'Membentuk anak didik yang produktif dalam dunia kerja',
  },
  {
    title: 'Aktif',
    descMoto: 'Membentuk karakter yang berperan aktif dalam lingkungan',
  },
  {
    title: 'Inovatif',
    descMoto:
      'Membentuk karakter yang inovatif dan menciptakan sesuatu yang baru',
  },
];

const MotoCapai = () => {
  return (
    <div className='flex flex-col items-center p-16 gap-8'>
      <div className='flex flex-col items-center gap-4'>
        <h2 className='text-[#223f96] font-semibold text-5xl'>MOTO CAPAI</h2>
        <div className='border-b-2 border-[#223f96] w-64'></div>
      </div>
      <div className='flex flex-row gap-4'>
        {MOTO_CAPAI.map((moto) => (
          <MotoCard key={moto.title} data={moto} />
        ))}
      </div>
    </div>
  );
};

export default MotoCapai;
