//@ts-nocheck
import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { Avatar, Badge, Button, Rate } from "antd";
import { FaStar } from "react-icons/fa6";

const imgurl = [
  "https://www.crownintltravels.com/wp-content/uploads/2023/09/1000_F_100218316_WbRzPWf4xNTI2xUfljBxKv7R3RILjVq6-e1695710038465.jpg",
  "https://www.crownintltravels.com/wp-content/uploads/2023/09/1976339-e1695710085269.jpg",
  "https://www.crownintltravels.com/wp-content/uploads/2023/09/3405911-936597760.jpg",
  "https://www.crownintltravels.com/wp-content/uploads/2023/09/1000_F_100218316_WbRzPWf4xNTI2xUfljBxKv7R3RILjVq6-e1695710038465.jpg",
  "https://www.crownintltravels.com/wp-content/uploads/2023/09/1000_F_100218316_WbRzPWf4xNTI2xUfljBxKv7R3RILjVq6-e1695710038465.jpg",
  "https://www.crownintltravels.com/wp-content/uploads/2023/09/1000_F_100218316_WbRzPWf4xNTI2xUfljBxKv7R3RILjVq6-e1695710038465.jpg",
  "https://www.crownintltravels.com/wp-content/uploads/2023/09/1000_F_100218316_WbRzPWf4xNTI2xUfljBxKv7R3RILjVq6-e1695710038465.jpg",
  "https://www.crownintltravels.com/wp-content/uploads/2023/09/1000_F_100218316_WbRzPWf4xNTI2xUfljBxKv7R3RILjVq6-e1695710038465.jpg",
  "https://www.crownintltravels.com/wp-content/uploads/2023/09/1000_F_100218316_WbRzPWf4xNTI2xUfljBxKv7R3RILjVq6-e1695710038465.jpg",
  "https://www.crownintltravels.com/wp-content/uploads/2023/09/1000_F_100218316_WbRzPWf4xNTI2xUfljBxKv7R3RILjVq6-e1695710038465.jpg",
  "https://www.crownintltravels.com/wp-content/uploads/2023/09/1000_F_100218316_WbRzPWf4xNTI2xUfljBxKv7R3RILjVq6-e1695710038465.jpg",
  "https://www.crownintltravels.com/wp-content/uploads/2023/09/1000_F_100218316_WbRzPWf4xNTI2xUfljBxKv7R3RILjVq6-e1695710038465.jpg",
  "https://www.crownintltravels.com/wp-content/uploads/2023/09/1000_F_100218316_WbRzPWf4xNTI2xUfljBxKv7R3RILjVq6-e1695710038465.jpg",
];

export default function VisaSlider() {
  const [swiperRef, setSwiperRef] = useState(null);
  const [activeIndex, setActiveIndex] = useState(1); // State to track the active index

  // Swiper update event to set active slide index
  const onSwiperUpdate = (swiper) => {
    setActiveIndex(swiper.activeIndex);
  };
  const moveToSlide = (index) => () => {
    if (swiperRef) {
      swiperRef.slideTo(index);
    }
  };

  const buttonClass = (index) =>
    `btn ${index === activeIndex ? "bg-blue-500 text-white" : "bg-gray-300"}`;

  return (
    <div>
      <div className="flex justify-center my-2">
        <Button className={buttonClass(1)} onClick={moveToSlide(1)}>
          Default Button
        </Button>
        <Button className={buttonClass(5)} onClick={moveToSlide(5)}>
          Default Button
        </Button>
        <Button className={buttonClass(9)} onClick={moveToSlide(9)}>
          Default Button
        </Button>
        {/* <Button onClick={moveToSlide}>Default Button</Button> */}
      </div>
      <Swiper
        //@ts-ignore
        onSwiper={setSwiperRef}
        onSlideChange={onSwiperUpdate} // Add this to track slide changes
        slidesPerView={1}
        spaceBetween={30}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
        autoplay={false}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper container mx-auto px-4"
      >
        {[...Array(13)].map((_, index) => (
          <SwiperSlide key={index - 1}>
            <Badge.Ribbon text="Visa Application Center" color="#D6AA33" className="p-1">
              <div className="border bg-white rounded-lg overflow-hidden max-w-sm p-5 my-5 relative border-2 border-white card-shadow">
                <div className="relative">
                  <a href="/VisaDescription">
                    <img
                      src={imgurl[index]}
                      alt="Kuala Lumpur"
                      width={350}
                      height={250}
                      className="rounded hover:scale-105 transition duration-300"
                    />
                  </a>
                  <Avatar
                    src={
                      <img
                        src="https://www.crownintltravels.com/wp-content/uploads/2023/03/circle-flag-of-malaysia-free-png.webp"
                        alt="avatar"
                      />
                    }
                    size={35}
                    className="absolute bottom-[-10px] right-[16px]"
                  />
                </div>
                <div>
                  <div className="flex justify-between items-center">
                    <div>
                      <h2 className="text-xl font-semibold mt-2">
                        <a
                          href="/VisaDescription"
                          className="no-underline hover:text-black"
                        >
                          Malaysia Visa
                        </a>
                      </h2>
                      <p className="text-gray-600 mt-1">
                        <a
                          href="/VisaDescription"
                          className="no-underline hover:text-black"
                        >
                          Officially Authorized Visa Application Centre
                        </a>
                      </p>
                      <div className="flex space-x-2">
                        <div className="flex  items-center  space-x-1">
                          <FaStar className="text-black-500" size={10} />
                          <FaStar className="text-black-500" size={10} />
                          <FaStar className="text-black-500" size={10} />
                          <FaStar className="text-black-500" size={10} />
                          <FaStar className="text-black-500" size={10} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Badge.Ribbon>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
