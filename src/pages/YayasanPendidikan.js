import React from 'react';
import HeroYcapai from '../components/HeroYcapai';
import Layout from '../components/Layout';
import MotoCapai from '../components/MotoCapai';
import SekolahBinaan from '../components/SekolahBinaan';
import VisiMisi from '../components/VisiMisi';

const YayasanPendidikan = () => {
  return (
    <Layout
      company='PT. Garda Media Putra Indonesia'
      subCompany='YAYASAN PENDIDIKAN CIKAL MEDIA PUTRA INDONESIA'
      logoSrc='images/logo-yayasan.jpeg'
      logoAlt='Logo YP CAPAI'
    >
      <HeroYcapai />
      <MotoCapai />
      <SekolahBinaan />
    </Layout>
  );
};

export default YayasanPendidikan;
