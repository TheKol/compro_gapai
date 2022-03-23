import React from 'react';
import MotoCard from './cards/MotoCard';

const MOTO_CAPAI = [
  {
    title: 'Cerdas',
    descMoto: 'Membentuk anak didik yang berfikir cerdas',
    image: 'images/smart_book-removebg-preview.png',
  },
  {
    title: 'Agamis',
    descMoto: 'Membentuk anak didik yang menjunjung tinggi agama',
    image: 'images/smart_book-removebg-preview.png',
  },
  {
    title: 'Produktif',
    descMoto: 'Membentuk anak didik yang produktif dalam dunia kerja',
    image: 'images/smart_book-removebg-preview.png',
  },
  {
    title: 'Aktif',
    descMoto: 'Membentuk karakter yang berperan aktif dalam lingkungan',
    image: 'images/smart_book-removebg-preview.png',
  },
  {
    title: 'Inovatif',
    descMoto:
      'Membentuk karakter yang inovatif dan menciptakan sesuatu yang baru',
    image: 'images/smart_book-removebg-preview.png',
  },
];

const MotoCapai = () => {
  return (
    <div className='flex flex-col items-center p-16 gap-8 bg-[#f8f9fa]'>
      <div className='flex flex-col items-center gap-4'>
        <h2 className='text-[#223f96] font-semibold sm:text-5xl text-4xl'>
          MOTO CAPAI
        </h2>
        <div className='border-b-2 border-[#223f96] w-64'></div>
      </div>
      <p className='text-center sm:text-xl text-lg font-medium'>
        Menjadi Sebuah Yayasan Pendidikan yang bermutu dengan standar nasional,
        <br /> untuk membentuk insan yang berkarakter, dalam membangun negara
        bangsa dan agama.
        <br /> Menyelenggarakan pendidikan berstandar Nasional. Mengembangkan
        sistem pembinaan, dalam bentuk insan yang berkarakter, dalam membangun
        negara bangsa dan agama.
      </p>
      <div className='grid grid-flow-row sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4 '>
        {MOTO_CAPAI.map((moto) => (
          <MotoCard key={moto.title} data={moto} />
        ))}
      </div>
    </div>
  );
};

export default MotoCapai;
