import ContactUs from '../components/ContactUs';
import Galery from '../components/Galery';
import Hero from '../components/Hero';
import Layout from '../components/Layout';
import MitraKerja from '../components/MitraKerja';
import Services from '../components/Services';

const Home = () => {
  return (
    <>
      <div className='flex flex-row gap-2 items-center justify-center bg-[#071d2b] py-4'>
        <img
          src='images/sale-discount-price.svg'
          alt='discount'
          className='w-10 h-10'
        />
        <p className='text-white text-xl font-semibold underline'>Discount</p>
      </div>
      <Layout
        company='PT. Garda Media Putra Indonesia'
        subCompany='GAPAI GUARD'
        logoSrc='images/logo_gapai_security.png'
        logoAlt='Logo gapai security'
      >
        <Hero />
        <Services />
        <MitraKerja />
        <Galery />
        <ContactUs />
      </Layout>
    </>
  );
};

export default Home;
