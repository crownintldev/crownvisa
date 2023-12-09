//@ts-nocheck
import { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Avatar, Badge } from "antd";
import Image from "next/image";
import { FaStar } from "react-icons/fa6";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

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

const title=[
  "Malaysian Visa",
  "Vietnam Visa",
  "Indonesian Visa",
  "Thailand Visa",
  "Singapore Visa",
  "SriLanka Visa",
  "Nepal Visa",
  "Cambodia Visa",
  "Azerbaijan Visa",
  "Tajikistan Visa",
  "Uzbekistan Visa",
  "Egypt Visa",
  "Kenya Visa",
  "Turkey Visa",
]

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
    `${
      index === activeIndex
        ? "text-black border border-[#FFC224] bg-[#FFC224] focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-base font-medium px-4 py-1.5 text-center me-3 mb-3 dark:border-blue-500 dark:text-blue-500 dark:hover:bg-blue-500 dark:bg-gray-900 dark:focus:ring-blue-800"
        : "text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-4 py-1.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800"
    }`;

  return (
    <div className="mb-10">
      <div className="flex justify-center my-2">
        <button
          type="button"
          className={buttonClass(1)}
          onClick={moveToSlide(1)}
        >
          All categories
        </button>
        <button
          type="button"
          className={buttonClass(5)}
          onClick={moveToSlide(5)}
        >
          Shoes
        </button>
        <button
          type="button"
          className={buttonClass(9)}
          onClick={moveToSlide(9)}
        >
          Bags
        </button>
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
          <SwiperSlide key={index - 1} >
            <div className=" max-w-sm my-5 relative">
              <div className="relative hover:scale-105 transition-all">
                <a href="/VisaDescription">
                  <Badge.Ribbon
                    text="Visa Application Center"
                    color="#FFC224"
                    className="p-1 pr-3"
                  >
                    <Image
                      src={imgurl[index]}
                      alt="Kuala Lumpur"
                      width={350}
                      height={250}
                      className="rounded-xl transition duration-300 w-full"
                    />
                  </Badge.Ribbon>
                </a>
                <div className="absolute bottom-[-10px] right-[25px]  bg-white p-[2px] rounded-full shadow">
                  <Avatar
                    src={
                      <Image
                        src="https://www.crownintltravels.com/wp-content/uploads/2023/03/circle-flag-of-malaysia-free-png.webp"
                        alt="avatar"
                        width={100}
                        height={100}
                      />
                    }
                    size={55}
                  />
                </div>
              </div>
              <div>
                <div className="flex justify-center items-center mb-2">
                  <div className="card-shadow p-2 w-[93%]">
                    <div className="flex">
                      <h2 className="text-xl font-semibold mt-2">
                        <a
                          href="/VisaDescription"
                          className="no-underline hover:text-black"
                        >
                          {title[index]}
                        </a>
                      </h2>
                      <div className="flex space-x-2 mx-2">
                        <div className="flex  items-center  space-x-1">
                          <FaStar className="text-[#FFC224]" size={13} />
                          <FaStar className="text-[#FFC224]" size={13} />
                          <FaStar className="text-[#FFC224]" size={13} />
                          <FaStar className="text-[#FFC224]" size={13} />
                          <FaStar className="text-[#FFC224]" size={13} />
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600 mt-1">
                      <a
                        href="/VisaDescription"
                        className="no-underline hover:text-black"
                      >
                        Officially Authorized Visa Application Center
                      </a>
                    </p>
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
