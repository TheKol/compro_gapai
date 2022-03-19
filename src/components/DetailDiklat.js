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

function DetailDiklat() {
  return (
    <div className='px-8 py-28'>
      <h2 className='text-center text-5xl font-bold mb-28'>
        PENDIDIKAN DAN PELATIHAN
        <br />
        GADA PRATAMA
      </h2>
      <div className='flex justify-evenly'>
        <div className='w-1/3'>
          <h2 className='text-3xl font-bold mb-2'>Gada Pratama</h2>
          <p className='mb-2 text-xl text-justify'>
            Training security dan{' '}
            <span className='font-bold'>pelatihan satpam Gada Pratama</span>{' '}
            adalah pendidikan dan pelatihan dasar wajib bagi calon anggota
            satpam. Dalam pelatihan ini peserta akan belajar untuk mengetahui
            bagaimana wewenang serta kewajiban seorang satpam.
          </p>
          <div>
            <div>
              <p className='font-bold text-xl mt-5'>Fasilitas Training :</p>
              <ul className='list-disc text-xl ml-5 mt-2'>
                <li>Baju Kaos Satpam</li>
                <li>Topi Satpam</li>
                <li>Pin Gada Pratama</li>
                <li>Ijazah Gada Pratama</li>
                <li>KTA Satpam</li>
                <li>Snack dan Makan Siang</li>
              </ul>
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-12 w-1/3'>
          <div className='bg-[#0070f6] text-white p-8 rounded-3xl h-fit shadow-lg shadow-[#2d89f8]'>
            <p className='font-bold text-3xl'>Syarat Pendaftaran Training :</p>
            <ul className='list-disc text-xl ml-5 mt-2 font-semibold'>
              <li>Fotocopy KTP</li>
              <li>Fotocopy Ijazah (Minimal SMA / Sederajat)</li>
              <li>Fotocopy Kartu Keluarga</li>
              <li>Surat Keterangan Sehat</li>
              <li>Fotocopy SKCK / Rumus Sidik Jari</li>
              <li>
                Foto Latar Biru Pakaian PDH Satpam 2x3, 3x4 &amp; 4x6
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

export default DetailDiklat;
