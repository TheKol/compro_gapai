import React from 'react';
import ItemCard from './cards/ItemCard';

const SUPPLY_ITEMS = [
  {
    namaItem: 'Koper',
    harga: 180000,
    deskripsi:
      'Sebuah koper berukuran 30x10cm yang terbuat dari bahan alumunium dengan tingkat ketahanan tinggi disertai kunci pengaman.',
    imageItem: 'images/barang/kebutuhan2-sekolah.png',
  },
  {
    namaItem: 'Laptop',
    harga: 5000000,
    deskripsi:
      'Laptop Acer Aspire 3 dengan spesifikasi yang mendukung untuk keperluan siswa dan kegiatan administratif lainnya.',
    imageItem: 'images/barang/kebutuhan1-sekolah.png',
  },
  {
    namaItem: 'Papan Tulis Pulih',
    harga: 450000,
    deskripsi: 'Papan tulis berukuran 100x40cm yang terbuat dari kayu Mindi.',
    imageItem: 'images/barang/kebutuhan3-sekolah.png',
  },
  {
    namaItem: 'Meja Komputer',
    harga: 700000,
    deskripsi:
      'Meja kayu berukuran 50x30 dengan tinggi 40cm yang tahan digunakan untuk menyimpan set kumputer.',
    imageItem: 'images/barang/kebutuhan4-sekolah.png',
  },
  {
    namaItem: 'Lemari Dokumen',
    harga: 1800000,
    deskripsi:
      'Lemari kayu dengan tinggi 70cm dan lebar 50cm yang dibuat dengan kokoh untuk menampung berat dari banyak arsip dokumen.',
    imageItem: 'images/barang/kebutuhan5-sekolah.png',
  },
  {
    namaItem: 'Proyektor',
    harga: 2500000,
    deskripsi:
      'Proyektor dari brand Epson yang cukup untuk menampilkan proyeksi dengan jelas.',
    imageItem: 'images/barang/kebutuhan6-sekolah.png',
  },
  {
    namaItem: 'Hand Soap 5ltr',
    harga: 200000,
    deskripsi:
      'Sabun untuk mensterilisasikan tangan dari virus dan bakteri selama beraktivitas.',
    imageItem: 'images/barang/barang1.png',
  },
  {
    namaItem: 'Botol Dispenser Hand Sanitizer 300ml dan Dudukan',
    harga: 300000,
    deskripsi:
      'Botol isi ulang cairan Hand Sanitiziter yang dilengkapi dudukan untuk menyimpannya ditempat-tempat tertentu.',
    imageItem: 'images/barang/barang2.png',
  },
  {
    namaItem: 'Hand Sanitizer 5ltr',
    harga: 200000,
    deskripsi:
      'Proyektor dari brand Epson yang cukup untuk menampilkan proyeksi dengan jelas.',
    imageItem: 'images/barang/barang3.png',
  },
  {
    namaItem: 'Dispenser Hand Sanitizer 300ml',
    harga: 80000,
    deskripsi:
      'Botol isi ulang cairan Hand Sanitiziter yang dilengkapi dengan pengait untuk memudahkan penyimpanan seperti di dinding dan tempat-tempat tertentu.',
    imageItem: 'images/barang/barang4.png',
  },
  {
    namaItem: 'Ballpoint',
    harga: 2000,
    deskripsi:
      'Ballpoint hitam dengan pegas untuk menjaga kondisi ballpoint dan agar tidak mengotori pakaian saat dimasukan kedalam saku.',
    imageItem: 'images/barang/barang5.png',
  },
  {
    namaItem: 'Tong Sampah 20ltr',
    harga: 60000,
    deskripsi:
      'Tong sampah pastik yang disertai dengan tutup untuk membantu menjaga agar sampah tidak mencuat keluar dan menutupi aroma tidak sedap dari sampah.',
    imageItem: 'images/barang/barang6.png',
  },
  {
    namaItem: 'Sapu Ijuk / Plastik',
    harga: 30000,
    deskripsi:
      'Pegangan sapu dibuat dengan bahan plastik dengan kualitas yang tahan lama.',
    imageItem: 'images/barang/barang7.png',
  },
  {
    namaItem: 'Bintex',
    harga: 100000,
    deskripsi: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    imageItem: 'images/barang/barang8.png',
  },
  {
    namaItem: 'Kertas A4',
    harga: 50000,
    deskripsi: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    imageItem: 'images/barang/barang9.png',
  },
  {
    namaItem: 'Tinta Printer Epson / Canon / Brother / HP',
    harga: 200000,
    deskripsi: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    imageItem: 'images/barang/barang10.png',
  },
  {
    namaItem: 'Tabung Gas Oksigen 1m3',
    harga: 900000,
    deskripsi: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    imageItem: 'images/barang/barang11.png',
  },
  {
    namaItem: 'Bintex',
    harga: 100000,
    deskripsi: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    imageItem: 'images/barang/barang12.png',
  },
  {
    namaItem: 'UPS',
    harga: 1000000,
    deskripsi: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    imageItem: 'images/barang/barang13.png',
  },
  {
    namaItem: 'Komputer CPU',
    harga: 2000000,
    deskripsi: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    imageItem: 'images/barang/barang14.png',
  },
  {
    namaItem: 'Kabel RJ-45',
    harga: 40000,
    deskripsi: '',
    imageItem: 'images/barang/barang15.png',
  },
  {
    namaItem: 'TP-LINK',
    harga: 3000000,
    deskripsi: '',
    imageItem: 'images/barang/barang16.png',
  },
  {
    namaItem: 'Arduino Mega 2560 Dot Matrix',
    harga: 3000000,
    deskripsi: '',
    imageItem: 'images/barang/barang17.png',
  },
  {
    namaItem: 'Bracket Infocus Manual',
    harga: 3000000,
    deskripsi: '',
    imageItem: 'images/barang/barang18.png',
  },
  {
    namaItem: 'Bracket Infocus Otomatis',
    harga: 3000000,
    deskripsi: '',
    imageItem: 'images/barang/barang19.png',
  },
  {
    namaItem: 'SSD',
    harga: 3000000,
    deskripsi: '',
    imageItem: 'images/barang/barang20.png',
  },
  {
    namaItem: 'Layar Infocus Standar',
    harga: 3000000,
    deskripsi: '',
    imageItem: 'images/barang/barang21.png',
  },
  {
    namaItem: 'Infocus Epson',
    harga: 3000000,
    deskripsi: '',
    imageItem: 'images/barang/barang22.png',
  },
  {
    namaItem: 'Infocus Epson',
    harga: 3000000,
    deskripsi: '',
    imageItem: 'images/barang/barang23.png',
  },
  {
    namaItem: 'Meja dan Kursi Guru',
    harga: 1000000,
    deskripsi: '',
    imageItem: 'images/barang/barang24.png',
  },
  {
    namaItem: 'Meja dan Kursi Siswa',
    harga: 1000000,
    deskripsi: '',
    imageItem: 'images/barang/barang25.png',
  },
  {
    namaItem: 'Meja Komputer',
    harga: 1000000,
    deskripsi: '',
    imageItem: 'images/barang/barang26.png',
  },
  {
    namaItem: 'White Board Multiplex',
    harga: 1000000,
    deskripsi: '',
    imageItem: 'images/barang/barang27.png',
  },
  {
    namaItem: 'Meja Guru',
    harga: 1000000,
    deskripsi: '',
    imageItem: 'images/barang/barang28.png',
  },
  {
    namaItem: 'Meja Komputer',
    harga: 1000000,
    deskripsi: '',
    imageItem: 'images/barang/barang29.png',
  },
  {
    namaItem: 'Meja Komputer',
    harga: 1000000,
    deskripsi: '',
    imageItem: 'images/barang/barang30.png',
  },
  {
    namaItem: 'Meja Siswa',
    harga: 1000000,
    deskripsi: '',
    imageItem: 'images/barang/barang31.png',
  },
  {
    namaItem: 'Meja Siswa',
    harga: 3000000,
    deskripsi: '',
    imageItem: 'images/barang/barang32.png',
  },
  {
    namaItem: 'Meja Kantor',
    harga: 1000000,
    deskripsi: '',
    imageItem: 'images/barang/barang33.png',
  },
  {
    namaItem: 'Meja Kantor',
    harga: 1000000,
    deskripsi: '',
    imageItem: 'images/barang/barang34.png',
  },
  {
    namaItem: 'Meja Kantor',
    harga: 1000000,
    deskripsi: '',
    imageItem: 'images/barang/barang35.png',
  },
  {
    namaItem: 'Rak / Lemari Buku',
    harga: 1000000,
    deskripsi: '',
    imageItem: 'images/barang/barang36.png',
  },
  {
    namaItem: 'Meja dan Kursi Siswa',
    harga: 1000000,
    deskripsi: '',
    imageItem: 'images/barang/barang37.png',
  },
  {
    namaItem: 'Meja dan Kursi Guru',
    harga: 1000000,
    deskripsi: '',
    imageItem: 'images/barang/barang38.png',
  },
  {
    namaItem: 'Kursi Plastik',
    harga: 1000000,
    deskripsi: '',
    imageItem: 'images/barang/barang39.png',
  },
  {
    namaItem: 'Kursi Guru',
    harga: 1000000,
    deskripsi: '',
    imageItem: 'images/barang/barang40.png',
  },
  {
    namaItem: 'Kursi Kantor',
    harga: 1000000,
    deskripsi: '',
    imageItem: 'images/barang/barang41.png',
  },
  {
    namaItem: 'Kursi Plastik',
    harga: 1000000,
    deskripsi: '',
    imageItem: 'images/barang/barang42.png',
  },
  {
    namaItem: 'Kursi Plastik',
    harga: 1000000,
    deskripsi: '',
    imageItem: 'images/barang/barang43.png',
  },
  {
    namaItem: 'Kursi Besi',
    harga: 1000000,
    deskripsi: '',
    imageItem: 'images/barang/barang44.png',
  },
  {
    namaItem: 'Laptop',
    harga: 1000000,
    deskripsi: '',
    imageItem: 'images/barang/barang45.png',
  },
  {
    namaItem: 'Kursi Kantor',
    harga: 1000000,
    deskripsi: '',
    imageItem: 'images/barang/barang46.png',
  },
  {
    namaItem: 'Kursi Guru',
    harga: 1000000,
    deskripsi: '',
    imageItem: 'images/barang/barang47.png',
  },
  {
    namaItem: 'White Board Kaca 240x100cm',
    harga: 1000000,
    deskripsi: '',
    imageItem: 'images/barang/barang48.png',
  },
  {
    namaItem: 'White Board Kaca 120x90cm',
    harga: 1000000,
    deskripsi: '',
    imageItem: 'images/barang/barang49.png',
  },
  {
    namaItem: 'Infocus Acer',
    harga: 1000000,
    deskripsi: '',
    imageItem: 'images/barang/barang50.png',
  },
  {
    namaItem: 'SSD',
    harga: 1000000,
    deskripsi: '',
    imageItem: 'images/barang/barang51.png',
  },
  {
    namaItem: 'HUB Switch 16 Port',
    harga: 1000000,
    deskripsi: '',
    imageItem: 'images/barang/barang52.png',
  },
  {
    namaItem: 'HUB Switch 24 Port',
    harga: 1000000,
    deskripsi: '',
    imageItem: 'images/barang/barang53.png',
  },
  {
    namaItem: 'Infocus Acer',
    harga: 1000000,
    deskripsi: '',
    imageItem: 'images/barang/barang54.png',
  },
  {
    namaItem: 'Infocus Benq',
    harga: 1000000,
    deskripsi: '',
    imageItem: 'images/barang/barang55.png',
  },
  {
    namaItem: 'Router TP-Link',
    harga: 1000000,
    deskripsi: '',
    imageItem: 'images/barang/barang56.png',
  },
  {
    namaItem: 'Infocus Epson',
    harga: 3000000,
    deskripsi: '',
    imageItem: 'images/barang/barang57.png',
  },
  {
    namaItem: 'Infocus Epson',
    harga: 3000000,
    deskripsi: '',
    imageItem: 'images/barang/barang58.png',
  },
  {
    namaItem: 'Thermogun',
    harga: 1000000,
    deskripsi: '',
    imageItem: 'images/barang/barang59.png',
  },
  {
    namaItem: 'Thermogun Stand',
    harga: 1000000,
    deskripsi: '',
    imageItem: 'images/barang/barang60.png',
  },
  {
    namaItem: 'Buku Administrasi Tatap Muka Siswa',
    harga: 1000000,
    deskripsi: '',
    imageItem: 'images/barang/barang61.png',
  },
  {
    namaItem: 'Buku Administrasi Guru Kelas',
    harga: 1000000,
    deskripsi: '',
    imageItem: 'images/barang/barang62.png',
  },
  {
    namaItem: 'Buku Agenda Guru',
    harga: 1000000,
    deskripsi: '',
    imageItem: 'images/barang/barang63.png',
  },
  {
    namaItem: 'Buku Agenda Kelas',
    harga: 1000000,
    deskripsi: '',
    imageItem: 'images/barang/barang64.png',
  },
  {
    namaItem: 'Buku Administrasi Kelas',
    harga: 1000000,
    deskripsi: '',
    imageItem: 'images/barang/barang65.png',
  },
  {
    namaItem: 'Buku Induk Guru / Pegawai',
    harga: 1000000,
    deskripsi: '',
    imageItem: 'images/barang/barang66.png',
  },
  {
    namaItem: 'Buku Catatan Barang Non-Inventaris',
    harga: 1000000,
    deskripsi: '',
    imageItem: 'images/barang/barang67.png',
  },
  {
    namaItem: 'Buku Catatan Penerimaan Barang',
    harga: 1000000,
    deskripsi: '',
    imageItem: 'images/barang/barang68.png',
  },
  {
    namaItem: 'Buku Catatan Pengeluaran Barang',
    harga: 1000000,
    deskripsi: '',
    imageItem: 'images/barang/barang69.png',
  },
  {
    namaItem: 'Buku Induk Golongan Barang',
    harga: 1000000,
    deskripsi: '',
    imageItem: 'images/barang/barang70.png',
  },
  {
    namaItem: 'Buku Catatan Penghapusan Barang',
    harga: 1000000,
    deskripsi: '',
    imageItem: 'images/barang/barang71.png',
  },
  {
    namaItem: 'Buku Daftar Nilai',
    harga: 1000000,
    deskripsi: '',
    imageItem: 'images/barang/barang72.png',
  },
  {
    namaItem: 'Buku Induk Barang Inventaris',
    harga: 1000000,
    deskripsi: '',
    imageItem: 'images/barang/barang73.png',
  },
  {
    namaItem: 'Buku Induk Perpustakaan',
    harga: 1000000,
    deskripsi: '',
    imageItem: 'images/barang/barang74.png',
  },
  {
    namaItem: 'Buku Induk Register Peserta Didik (MI)',
    harga: 1000000,
    deskripsi: '',
    imageItem: 'images/barang/barang75.png',
  },
  {
    namaItem: 'Buku Induk Register Peserta Didik (MI)',
    harga: 1000000,
    deskripsi: '',
    imageItem: 'images/barang/barang76.png',
  },
  {
    namaItem: 'Buku Induk Register Peserta Didik (SD)',
    harga: 1000000,
    deskripsi: '',
    imageItem: 'images/barang/barang77.png',
  },
  {
    namaItem: 'Buku Induk Register Peserta Didik (TK/RA)',
    harga: 1000000,
    deskripsi: '',
    imageItem: 'images/barang/barang78.png',
  },
  {
    namaItem: 'Buku Klapper Siswa',
    harga: 1000000,
    deskripsi: '',
    imageItem: 'images/barang/barang79.png',
  },
  {
    namaItem: 'Buku Induk Register Peserta Didik (SMA)',
    harga: 1000000,
    deskripsi: '',
    imageItem: 'images/barang/barang80.png',
  },
  {
    namaItem: 'Buku Administrasi Kepala Sekolah (SD)',
    harga: 1000000,
    deskripsi: '',
    imageItem: 'images/barang/barang81.png',
  },
  {
    namaItem: 'Buku Induk Register Peserta Didik (SMK)',
    harga: 1000000,
    deskripsi: '',
    imageItem: 'images/barang/barang82.png',
  },
  {
    namaItem: 'Buku Mutasi Siswa',
    harga: 1000000,
    deskripsi: '',
    imageItem: 'images/barang/barang84.png',
  },
  {
    namaItem: 'Buku Perangkat Administrasi Sekolah (SD)',
    harga: 1000000,
    deskripsi: '',
    imageItem: 'images/barang/barang85.png',
  },
  {
    namaItem: 'Buku Perangkat Administrasi Sekolah (MI)',
    harga: 1000000,
    deskripsi: '',
    imageItem: 'images/barang/barang86.png',
  },
  {
    namaItem: 'Buku Piket Guru / Pegawai',
    harga: 1000000,
    deskripsi: '',
    imageItem: 'images/barang/barang87.png',
  },
  {
    namaItem: 'Buku Tamu (Umum)',
    harga: 1000000,
    deskripsi: '',
    imageItem: 'images/barang/barang88.png',
  },
  {
    namaItem: 'Buku Hadir Siswa',
    harga: 1000000,
    deskripsi: '',
    imageItem: 'images/barang/barang89.png',
  },
  {
    namaItem: 'CCTV 4 Camera Indoor',
    harga: 1000000,
    deskripsi: '',
    imageItem: 'images/barang/barang90.png',
  },
  {
    namaItem: 'CCTV 4 Camera Indoor',
    harga: 1000000,
    deskripsi: '',
    imageItem: 'images/barang/barang91.png',
  },
  {
    namaItem: 'CCTV 3 Camera Indoor',
    harga: 1000000,
    deskripsi: '',
    imageItem: 'images/barang/barang92.png',
  },
  {
    namaItem: 'CCTV 4 Camera Indoor',
    harga: 1000000,
    deskripsi: '',
    imageItem: 'images/barang/barang93.png',
  },
  {
    namaItem:
      'Paket Khusus CCTV Colorvu 24 Jam Full Color Alram Strene dan Lampu Strobe',
    harga: 1000000,
    deskripsi: '',
    imageItem: 'images/barang/barang94.png',
  },
  {
    namaItem: 'Layar Infocus Remote',
    harga: 3000000,
    deskripsi: '',
    imageItem: 'images/barang/barang95.png',
  },
];

const ListSupply = () => {
  return (
    <div className='flex flex-col items-center'>
      <h3 className='mb-8 text-2xl font-bold'>Items</h3>
      <div className='grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 mb-16'>
        {SUPPLY_ITEMS.map((item) => (
          <ItemCard />
        ))}
      </div>
    </div>
  );
};

export default ListSupply;
