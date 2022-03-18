import { Splide, SplideSlide } from '@splidejs/react-splide';
import React from 'react';

const MITRAS = [
  {
    imageSrc: 'images/sma-angkasa-husaein.jpeg',
    imageAlt: 'SMA Angkasa',
  },
  {
    imageSrc: 'images/smk-bandung-selatan1.jpeg',
    imageAlt: 'SMK Bandung Selatan 1',
  },
  {
    imageSrc: 'images/smk-binawarga.jpeg',
    imageAlt: 'SMK Bina Warga',
  },
  {
    imageSrc: 'images/smk-kiansantang-bandung.jpeg',
    imageAlt: 'SMK Kian Santang',
  },
  {
    imageSrc: 'images/smk-kp3-majalaya.jpeg',
    imageAlt: 'SMK KP3 Majalaya',
  },
  {
    imageSrc: 'images/smk-perkasa1-sumedang.jpeg',
    imageAlt: 'SMK Perkasa 1 Sumedang',
  },
  {
    imageSrc: 'images/smk-putra-gunung-halu-kkb.jpeg',
    imageAlt: 'SMK Putra Gungun Halu KKB',
  },
  {
    imageSrc: 'images/smk-angkasa.jpeg',
    imageAlt: 'SMK Angkasa',
  },
  {
    imageSrc: 'images/smp-angkasa-husain.jpeg',
    imageAlt: 'SMP Agkasa Husain',
  },
];

const MitraKerja = () => {
  return (
    <div className='w-screen flex flex-col items-center py-8 gap-8'>
      <h2 className='font-bold text-xl'>Mitra</h2>
      <div className='w-4/5'>
        <Splide
          options={{
            perPage: 5,
            type: 'loop',
            autoplay: true,
            resetProgress: false,
            arrows: false,
            pagination: false,
          }}
          hasSliderWrapper
        >
          {MITRAS.map((mitra) => (
            <SplideSlide key={mitra.imageSrc}>
              <img
                src={mitra.imageSrc}
                alt={mitra.imageAlt}
                className='object-cover w-52 h-52 rounded-2xl'
              />
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  );
};

export default MitraKerja;
