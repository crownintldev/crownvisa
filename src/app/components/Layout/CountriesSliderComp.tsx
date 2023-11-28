//@ts-nocheck
// Import Swiper React components
import React, { FC, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Avatar } from 'antd';

interface CardProps {
  index: number;
  imageUrl: string;
  flagUrl: string;
  altText: string;
  title: string;
}

const CountriesSliderComp: React.FC<CardProps> = ({
  index,
  imageUrl,
  altText,
  title,
  flagUrl,
}) => {
  const [swiperRef, setSwiperRef] = useState(null);
  return (
    <SwiperSlide
      key={index}
      className="relative rounded-3xl bg-cover bg-center bg-no-repeat group cursor-pointer hover:opacity-70 card-shadow"
      style={{
        backgroundImage: `url(${imageUrl})`,
        // backgroundImage: `url(https://www.crownintltravels.com/wp-content/uploads/2023/09/3405911-936597760.jpg)`,
      }}
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
      <div className="centered-content">
        <Avatar
          className="absolute bottom-[40px] right-[110px] group-hover:absolute group-hover:bottom-[70px] transition-all duration-500"
          src={
            <img
              src={flagUrl}
              alt={altText}
              //   src="https://www.crownintltravels.com/wp-content/uploads/2023/08/indonesia-512.webp"
              //   alt="avatar"
            />
          }
          size={65}
        />
        <h2 className="text-white font-bold absolute bottom-[-40px] right-[100px] group-hover:absolute group-hover:bottom-[40px] transition-all duration-500">
          {title}
        </h2>
      </div>
    </SwiperSlide>
  );
};

export default CountriesSliderComp;
