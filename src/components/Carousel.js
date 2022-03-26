import { Splide, SplideSlide } from '@splidejs/react-splide';

import '@splidejs/splide/dist/css/themes/splide-skyblue.min.css';

const IMAGE_SLIDE = [
  {
    imageSrc: 'images/kegiatan1_800x480.jpeg',
    imageAlt: 'kegiatan 1',
  },
  {
    imageSrc: 'images/kegiatan4_800x480.jpeg',
    imageAlt: 'kegiatan 4',
  },
  {
    imageSrc: 'images/kegiatan5_800x480.jpeg',
    imageAlt: 'kegiatan 5',
  },
  {
    imageSrc: 'images/kegiatan8_800x480.jpeg',
    imageAlt: 'kegiatan 8',
  },
  {
    imageSrc: 'images/galery-certi.jpeg',
    imageAlt: 'kegiatan 9',
  },
];

const Carousel = () => {
  return (
    <Splide
      options={{
        type: 'loop',
        gap: '1rem',
        autoplay: true,
        resetProgress: false,
        arrows: 'slide',
      }}
      hasSliderWrapper
      hasAutoplayProgress
    >
      {IMAGE_SLIDE.map((slide) => (
        <SplideSlide key={slide.imageSrc}>
          <img
            src={slide.imageSrc}
            alt={slide.imageAlt}
            className='object-cover w-full h-full rounded-2xl'
          />
        </SplideSlide>
      ))}
    </Splide>
  );
};

export default Carousel;
