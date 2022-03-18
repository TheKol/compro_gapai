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
      <h2>Diklat Satpam</h2>
      <div>
        <h3>Pendidikan dan Pelatihan Gada Pratama</h3>
        <p>
          Traning security dan pelatihan satpam Gada Pratama adalah pendidikan
          &amp; pelatihan dasar wajib calon anggota satpam. Dalam pelatihan ini
          peserta akan belajar untuk mengetahui bagaimana wewenang serta
          kewajiban seorang satpam. Selain mendapat materi sesuai kurikulum dan
          silabus sesuai Perkap No 24 tahun 2007, siswa juga diberikan materi
          tambahan lainnya untuk menambah wawasan dan keterampilan anggota
          satpam, diantaranya :
        </p>
        <h3>Pendidikan dan Pelatihan Gada Madya</h3>
        <p>
          Gada Madya adalah training yang diberikan kepada calon supervisor
          security yang bertujuan untuk memberikan kemampuan membentuk team
          security yang solid, memiliki kemampuan managerial dan leadership
          serta memenuhi kualifikasi supervisor security.
        </p>
      </div>
    </Layout>
  );
};

export default DiklatSatpam;
