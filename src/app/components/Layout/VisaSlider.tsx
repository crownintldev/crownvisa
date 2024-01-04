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
import Link from "next/link";

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

const title = [
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
];

export default function VisaSlider() {
  const [swiperRef, setSwiperRef] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  // State to track the active index

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
    `${index === activeIndex
      ? "text-black border border-[#fe720f] bg-[#fe720f] focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-base font-medium px-4 py-1.5 text-center me-3 mb-3 dark:border-blue-500 dark:text-blue-500 dark:hover:bg-blue-500 dark:bg-gray-900 dark:focus:ring-blue-800"
      : "text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-4 py-1.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800"
    }`;

  return (
    <div className="mb-10 antialiased">
      <h2 className="font-bold lg:text-[25px] md:text-[15px] text-center my-3">
        We Have Authorized Embassy Visa Application Centre & Dropbox
      </h2>
      <div className="flex justify-center my-2">
        <button
          type="button"
          className={buttonClass(0)}
          onClick={moveToSlide(0)}
        >
          All categories
        </button>
        <button
          type="button"
          className={buttonClass(4)}
          onClick={moveToSlide(4)}
        >
          Shoes
        </button>
        <button
          type="button"
          className={buttonClass(8)}
          onClick={moveToSlide(8)}
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
          <SwiperSlide key={index - 1}>
            <div className=" max-w-sm my-5 relative">
              <div className="relative hover:scale-105 transition-all mx-1 group">
                <Link href="/VisaDescription">
                  <Badge.Ribbon
                    text="Visa Application Center"
                    color="#fe720f"
                    className="p-1 pl-2"
                    placement="start"
                  >
                    <Image
                      src={imgurl[index]}
                      alt="Kuala Lumpur"
                      width={350}
                      height={250}
                      className="rounded-xl transition-all duration-300 w-full h-[350px]"
                    />
                  </Badge.Ribbon>
                </Link>
                <div className="absolute top-[10px] right-[15px] bg-white p-[2px] rounded-full shadow">
                  <Avatar
                    src={
                      <Image
                        src="https://www.crownintltravels.com/wp-content/uploads/2023/03/circle-flag-of-malaysia-free-png.webp"
                        alt="avatar"
                        width={100}
                        height={100}
                      />
                    }
                    size={45}
                  />
                </div>
                <div className="absolute bottom-0 left-0 z-10 mx-3">
                  <div className="flex justify-center items-center mb-2 bg-white">
                    <div className="p-2">
                      <div className="flex flex-col group">
                        <h2 className="text-md font-semibold mt-2 text-black">
                          <Link
                            href="/VisaDescription"
                            className="no-underline group hover-underline-animation transition-all duration-700"
                          >
                            {title[index]}
                          </Link>
                        </h2>
                        <p className="text-black mt-1 text-sm line-clamp-1">
                          <Link
                            href="/VisaDescription"
                            className="no-underline hover-underline-animation"
                          >
                            Officially Authorized Visa Application Center
                          </Link>
                        </p>
                        <div className="flex space-x-2 mt-1">
                          <div className="flex  items-center  space-x-1">
                            <FaStar className="text-[#fe720f]" size={12} />
                            <FaStar className="text-[#fe720f]" size={12} />
                            <FaStar className="text-[#fe720f]" size={12} />
                            <FaStar className="text-[#fe720f]" size={12} />
                            <FaStar className="text-[#fe720f]" size={12} />
                          </div>
                        </div>
                      </div>
                    </div>
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
