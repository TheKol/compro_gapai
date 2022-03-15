import React from 'react';
import ServiceCard from './cards/ServiceCard';

const SERVICES = [
  {
    serviceTitle: 'Jasa pengamanan kapanpun dibutuhkan',
    serviceImg: 'images/kegiatan7-crop.jpeg',
    serviceDesk:
      'Menyediakan jasa petugas keamanan pribadi, perlindungan esekutif Body Guard dan keamanan kegiatan khusus',
    serviceButton: 'PENGAMANAN PRIBADI',
    serviceUsed: 'UNTUK PRIBADI',
  },
  {
    serviceTitle: 'Jasa petugas keamanan untuk usaha anda',
    serviceImg: 'images/kegiatan9-crop.jpeg',
    serviceDesk:
      'Menyediakan jasa petugas keamanan SATPAM untuk Perusahaan, perlidungan terhadap usaha 24 jam, 365 hari.',
    serviceButton: 'PENGAMANAN PERUSAHAAN',
    serviceUsed: 'UNTUK PERUSAHAAN',
  },
  {
    serviceTitle: 'Pengadaan diklat SATPAM untuk karir anda',
    serviceImg: 'images/diklat-satpam-crop.jpg',
    serviceDesk:
      'Menyediakan pelatihan diklat SATPAM, untuk membuka kesempatan anda berkarir dan membuka peluang kerja.',
    serviceButton: 'DIKLAT SATPAM',
    serviceUsed: 'UNTUK KARIR',
  },
];

const Services = () => {
  return (
    <div className='flex flex-col items-center w-screen h-[1100px] pt-20 gap-8 bg-[#f8f9fa]'>
      <h2 className='font-bold text-5xl'>Membuat situasi yang aman</h2>
      <div className='flex flex-row'>
        {SERVICES.map((service) => (
          <ServiceCard
            serviceTitle={service.serviceTitle}
            serviceImg={service.serviceImg}
            serviceDesk={service.serviceDesk}
            serviceButton={service.serviceButton}
            serviceUsed={service.serviceUsed}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
