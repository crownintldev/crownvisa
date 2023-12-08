//@ts-nocheck
import React, { useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import Image from 'next/image';

export default function CompaniesSlider() {
  const [swiperRef, setSwiperRef] = useState(null);

  return (
    <div className='mb-10'>
      <div className="flex justify-center items center">
        <h2 className="text-[25px] font-bold">Our Clients & Partners</h2>
      </div>
      <div className="companies-slider">
        <Swiper
          //@ts-ignore
          onSwiper={setSwiperRef}
          slidesPerView={1}
          spaceBetween={30}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 30,
            },
          }}
          autoplay={true}
          modules={[Pagination, Navigation, Autoplay]}
          className="mySwiper flex justify-center"
        >
          {[...Array(9)].map((_, index) => (
            <SwiperSlide
              className="bg-white"
              key={index}
              onMouseEnter={() => {
                if (swiperRef && swiperRef.autoplay) {
                  swiperRef.autoplay.stop();
                }
              }}
              onMouseLeave={() => {
                if (swiperRef && swiperRef.autoplay) {
                  swiperRef.autoplay.start();
                }
              }}
            >
              <Image
                src="amazon.svg"
                alt=""
                className="mx-auto"
                width={150}
                height={150}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
