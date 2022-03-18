import React from 'react';
import Layout from '../components/Layout';

const DiklatSatpam = () => {
  return (
    <Layout
      company='PT. Garda Media Putra Indonesia'
      subCompany='GAPAI GUARD'
      logoSrc='images/logo_gapai_security.png'
      logoAlt='Logo gapai security'
    >
      <div className='flex flex-col items-center text-center bg-gradient-to-t from-[#071d2b] to-[#467999] text-white'>
        <div className='flex items-center pt-16 pb-8'>
          <svg
            width='40'
            height='40'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <g
              stroke-width='1.35'
              stroke-linecap='round'
              stroke-linejoin='round'
            >
              <path
                d='M6.937 17.042a22.519 22.519 0 00.789 6.078c1.43 5.136 5.937 8.71 10.489 11.25 1.11.62 2.46.62 3.57 0 4.552-2.54 9.059-6.114 10.489-11.25a22.52 22.52 0 00.789-6.078c-.014-1.769-.01-3.538-.006-5.307a3.97 3.97 0 00-2.831-3.818c-2.84-.848-5.688-1.676-8.533-2.509a6.024 6.024 0 00-3.386 0c-2.845.833-5.692 1.661-8.533 2.51a3.97 3.97 0 00-2.831 3.817c.004 1.77.008 3.538-.006 5.307z'
                fill='#67bd50'
                stroke='#67bd50'
              />
              <path
                d='M22.846 18.846l2.798-2.055c.125-.095.057-.309-.101-.309h-3.435c-.416 0-.592-.146-.712-.539l-1.069-3.314c-.064-.13-.365-.164-.407 0l-1.068 3.314c-.142.373-.302.54-.712.54h-3.435c-.18 0-.246.199-.101.308l2.773 2.055c.308.218.401.463.254.822l-1.069 3.314c-.03.156.136.314.28.205l2.799-2.055c.33-.211.619-.227.94 0l2.825 2.055c.129.13.312-.059.254-.206l-1.068-3.313c-.12-.366-.063-.6.254-.822z'
                stroke='#fff'
              />
            </g>
          </svg>
          <h2 className='text-3xl font-bold'>Diklat Satpam</h2>
        </div>
        <p className='text-xl mb-8'>
          Training security dan pelatihan satpam adalah pendidikan dan pelatihan
          dasar wajib bagi calon anggota satpam.{' '}
        </p>
        <div className='flex gap-5'>
          <div className='text-black bg-white rounded-3xl'>
            <div className='flex'>
              <div className='text-left bg-gray-200 rounded-l-3xl px-10 py-14'>
                <h3 className='text-xl font-bold mb-2'>Fasilitas Pelatihan:</h3>
                <ul className='list-disc ml-5'>
                  <li>Baju Kaos Satpam</li>
                  <li>Topi Satpam</li>
                  <li>Pin Gada Pratama</li>
                  <li>Ijazah Gada Pratama</li>
                  <li>KTA Satpam</li>
                  <li>Snack dan Makan Siang</li>
                </ul>
              </div>
              <div className='flex flex-col px-20 py-8 font-bold gap-8'>
                <h3>Pelatihan Gada Pratama</h3>
                <p>Durasi</p>
                <p>Rp.0.000.000</p>
                <div className='bg-[#0070f6] py-2 px-4 text-sm text-white rounded-full'>
                  <p>Ambil paket Pelatihan</p>
                </div>
              </div>
            </div>
          </div>

          <div className='text-black bg-white rounded-3xl'>
            <div className='flex'>
              <div className='text-left bg-gray-200 rounded-l-3xl px-10 py-14'>
                <h3 className='text-xl font-bold mb-2'>Fasilitas Pelatihan:</h3>
                <ul className='list-disc ml-5'>
                  <li>Baju Kaos Satpam</li>
                  <li>Topi Satpam</li>
                  <li>Pin Gada Pratama</li>
                  <li>Ijazah Gada Pratama</li>
                  <li>KTA Satpam</li>
                  <li>Snack dan Makan Siang</li>
                </ul>
              </div>
              <div className='flex flex-col px-20 py-8 font-bold gap-8'>
                <h3>Pelatihan Gada Pratama</h3>
                <p>Durasi</p>
                <p>Rp.0.000.000</p>
                <div className='bg-[#0070f6] py-2 px-4 text-sm text-white rounded-full'>
                  <p>Ambil paket Pelatihan</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DiklatSatpam;
