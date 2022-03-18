import { Link } from 'react-router-dom';

export const SERVICES = [
  {
    serviceTitle: 'Jasa pengamanan kapanpun dibutuhkan',
    serviceImg: 'images/kegiatan7-crop.jpeg',
    serviceDesk:
      'Menyediakan jasa petugas keamanan pribadi, perlindungan esekutif Body Guard dan keamanan kegiatan khusus',
    serviceButton: (
      <a
        href='#contact'
        className='border-2 border-[#0070f6] py-4 px-6 rounded-full text-[#0070f6]
          font-bold group-hover:bg-[#0070f6] group-hover:text-white ease-in-out duration-300'
      >
        PENGAMANAN PRIBADI
      </a>
    ),
    serviceUsed: 'UNTUK PRIBADI',
  },
  {
    serviceTitle: 'Jasa petugas keamanan untuk usaha anda',
    serviceImg: 'images/kegiatan9-crop.jpeg',
    serviceDesk:
      'Menyediakan jasa petugas keamanan SATPAM untuk Perusahaan, perlidungan terhadap usaha 24 jam, 365 hari.',
    serviceButton: (
      <a
        href='#contact'
        className='border-2 border-[#0070f6] py-4 px-6 rounded-full text-[#0070f6]
          font-bold group-hover:bg-[#0070f6] group-hover:text-white ease-in-out duration-300'
      >
        PENGAMANAN PERUSAHAAN
      </a>
    ),
    serviceUsed: 'UNTUK PERUSAHAAN',
  },
  {
    serviceTitle: 'Pengadaan diklat SATPAM untuk karir anda',
    serviceImg: 'images/diklat-satpam-crop.jpg',
    serviceDesk:
      'Menyediakan pelatihan diklat SATPAM, untuk membuka kesempatan anda berkarir dan membuka peluang kerja.',
    serviceButton: (
      <Link
        to='/diklat'
        className='border-2 border-[#0070f6] py-4 px-6 rounded-full text-[#0070f6]
          font-bold group-hover:bg-[#0070f6] group-hover:text-white ease-in-out duration-300'
      >
        DIKLAT SATPAM
      </Link>
    ),
    serviceUsed: 'UNTUK KARIR',
  },
];
