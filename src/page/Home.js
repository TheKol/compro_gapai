import Carousel from '../component/Carousel';
import Hero from '../component/Hero';
import Layout from '../component/Layout';

const Home = () => {
  return (
    <>
      <div className='flex flex-row gap-2 items-center justify-center bg-[#071d2b] py-4'>
        <img
          src='images/sale-discount-price.svg'
          alt='discount'
          className='w-10 h-10'
        />
        <p className='text-white text-xl underline'>Discount</p>
      </div>
      <Layout
        logoSrc='images/logo_gapai_security.png'
        logoAlt='Logo gapai security'
      >
        <Hero />
        <div className='max-w-[800px] mx-auto'>
          <Carousel />
        </div>
      </Layout>
    </>
  );
};

export default Home;
