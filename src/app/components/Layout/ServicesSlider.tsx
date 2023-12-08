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
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import Image from 'next/image';

export default function ServicesSlider() {
  const [swiperRef, setSwiperRef] = useState(null);

  return (
    <div className="countries-slider mb-10">
      {/* Custom Navigation Buttons */}
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
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
        autoplay={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        {[...Array(9)].map((_, index) => (
          <SwiperSlide
            key={index}
            className="relative group cursor-pointer card-shadow slide-with-gradient"
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
            <div>
              <Image
                src="https://www.crownintltravels.com/wp-content/uploads/2023/09/3405911-936597760.jpg"
                alt=""
                className="cover-image hover:blur-sm group-hover:blur-sm"
                width={400}
                height={400}
              />
              <div className="group">
                <BsFillArrowRightCircleFill
                  size={25}
                  className="absolute top-[10px] right-[10px] group-hover:top-[-30px]"
                  style={{ color: '#FFC224', fontSize: '24px' }}
                />
                <h2
                  className="text-start text-[25px] text-white font-bold absolute bottom-[20px] left-[10px] z-10 group-hover:z-0"
                  style={{
                    background: 'transparent',
                    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
                  }}
                >
                  Take IELTS
                </h2>
                <div className="bg-white absolute bottom-[-100px] right-0 mx-2 px-2 py-4 z-0 group-hover:z-10 group-hover:bottom-[10px] group-hover:right-0 transition-all duration-500">
                  <div className="relative">
                    <h2 className="text-start text-[15px] font-bold">
                      Take IELTS
                    </h2>
                    <p className="text-start text-[12px]">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Sequi ratione{' '}
                    </p>
                    <BsFillArrowRightCircleFill
                      size={25}
                      className="absolute top-0 right-0"
                      style={{ color: '#FFC224', fontSize: '24px' }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
