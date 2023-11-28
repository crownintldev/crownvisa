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
import { Avatar } from 'antd';
import { AiFillLeftCircle, AiFillRightCircle } from 'react-icons/ai';

export default function CountriesSlider() {
  const [swiperRef, setSwiperRef] = useState(null);

  return (
    <div className="countries-slider">
      {/* Custom Navigation Buttons */}
      <div className="flex justify-between">
        <div>
          <h2 className="font-bold text-[25px]">Countries</h2>
        </div>
        <div>
          <button onClick={() => swiperRef && swiperRef.slidePrev()}>
            <AiFillLeftCircle size={35} />
          </button>
          <button onClick={() => swiperRef && swiperRef.slideNext()}>
            <AiFillRightCircle size={35} />
          </button>
        </div>
      </div>
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
            className="relative bg-cover bg-center bg-no-repeat group cursor-pointer card-shadow parent-div"
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
              <img
                src="https://www.crownintltravels.com/wp-content/uploads/2023/09/3405911-936597760.jpg"
                alt=""
                className="cover-image"
              />
              <div className="gradient-overlay"></div>
              <div className="centered-content">
                <Avatar
                  className="absolute bottom-1/3 right-1/5 0group-hover:absolute transition-all duration-500"
                  src={
                    <img
                      src="https://www.crownintltravels.com/wp-content/uploads/2023/08/indonesia-512.webp"
                      alt="avatar"
                    />
                  }
                  size={85}
                />
                <h2
                  className=" text-white font-bold text-[25px] absolute bottom-[-40px] right-1/5 group-hover:absolute group-hover:bottom-1/4 transition-all duration-500"
                  style={{
                    background: 'transparent',
                    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
                  }}
                >
                  Malaysia
                </h2>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
