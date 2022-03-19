import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';

const SATPAM = [
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

function DetailDiklatMadya() {
  return (
    <div className='px-8 py-28 bg-gray-200'>
      <h2 className='text-center text-5xl font-bold mb-28'>
        PENDIDIKAN DAN PELATIHAN
        <br />
        GADA MADYA
      </h2>
      <div className='flex flex-row-reverse justify-evenly'>
        <div className='max-w-2xl'>
          <h2 className='text-3xl font-bold mb-2'>Gada Madya</h2>
          <p className='mb-5 text-xl text-justify'>
            Gada Madya adalah training yang diberikan kepada calon supervisor
            security yang bertujuan untuk memberikan kemampuan membentuk team
            security yang solid, memiliki kemampuan managerial dan leadership
            serta memenuhi kualifikasi supervisor security.
          </p>

          <div>
            <p className='font-bold text-xl mt-2'>Fasilitas Training :</p>
            <ul className='list-disc text-xl ml-5 mt-2'>
              <li>Baju Kaos Diklat (2 Buah)</li>
              <li>Topi Satpam</li>
              <li>Tas</li>
              <li>Pin Gada Madya</li>
              <li>Nama Bordir</li>
              <li>Ijazah Gada Madya</li>
              <li>KTA Gada Madya</li>
              <li>Snack dan Makan Siang</li>
            </ul>
          </div>
        </div>
        <div className='flex flex-col gap-12 w-1/3'>
          <div className='bg-[#0070f6] text-white p-8 rounded-3xl h-fit shadow-lg shadow-[#2d89f8]'>
            <p className='font-bold text-3xl'>Syarat Pendaftaran Training :</p>
            <ul className='list-disc text-xl ml-5 mt-2 font-semibold'>
              <li>Fotocopy KTP</li>
              <li>Fotocopy Ijazah (Minimal SMA)</li>
              <li>
                Fotocopy Ijazah Gada Pratama / Surat Keterangan dari Tempat
                Kerja
              </li>
              <li>Fotocopy Kartu Keluarga</li>
              <li>Surat Keterangan Sehat</li>
              <li>Fotocopy SKCK / Rumus Sidik Jari</li>
              <li>
                Foto Latar Kuning Pakaian PDH Satpam 2x3, 3x4 &amp; 4x6
                Masing-Masing 4 Lembar
              </li>
            </ul>
          </div>
          <div className='items-center'>
            <Splide
              options={{
                perPage: 4,
                type: 'loop',
                autoplay: true,
                resetProgress: false,
                arrows: false,
                pagination: false,
              }}
              hasSliderWrapper
            >
              {SATPAM.map((mitra) => (
                <SplideSlide key={mitra.imageSrc}>
                  <img
                    src={mitra.imageSrc}
                    alt={mitra.imageAlt}
                    className='object-cover w-32 h-32 rounded-2x1'
                  />
                </SplideSlide>
              ))}
            </Splide>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailDiklatMadya;
