import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';

const SATPAM = [
  {
    imageSrc: 'images/kegiatan1.jpeg',
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
    <div className='px-8 lg:py-28 py-10 bg-gray-200'>
      <div className='flex flex-col-reverse lg:flex-row-reverse justify-evenly'>
        <div className='flex flex-col lg:flex-grow w-full lg:max-w-2xl mb-7 lg:ml-10 xl:ml-24'>
          <h2 className='text-3xl font-bold mb-2'>
            PENDIDIKAN DAN PELATIHAN GADA MADYA
          </h2>
          <p className='text-xl text-justify'>
            Gada Madya adalah training yang diberikan kepada calon supervisor
            security yang bertujuan untuk memberikan kemampuan membentuk team
            security yang solid, memiliki kemampuan managerial dan leadership
            serta memenuhi kualifikasi supervisor security.
          </p>

          <div className='p-6 mt-6 rounded-3xl bg-white border-2 h-fit shadow-lg'>
            <div>
              <p className='font-bold text-base'>Fasilitas Training :</p>
              <ul className='list-disc text-sm font-semibold ml-5'>
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
            <div>
              <p className='font-bold text-base mt-6'>
                Syarat Pendaftaran Training :
              </p>
              <ul className='list-disc ml-5 text-sm font-semibold'>
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
          </div>
        </div>
        <div className='self-center xl:bg-slate-500 w-full xl:w-1/3 lg:w-lg lg:max-h-[600px] lg:h-96 md:h-[600px] sm:h-[400px] h-72 my-8 rounded-xl'>
          <Splide
            options={{
              perPage: 1,
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
                  className='object-cover lg:h-96 md:h-[600px] sm:h-[400px] h-72 w-[450px] xl:w-[1300px] md:w-[1000px] sm:w-[700px] rounded-xl'
                />
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </div>
    </div>
  );
}

export default DetailDiklatMadya;
