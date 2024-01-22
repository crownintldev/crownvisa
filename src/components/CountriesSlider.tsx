//@ts-nocheck
import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { Avatar } from "antd";
import { AiFillLeftCircle, AiFillRightCircle } from "react-icons/ai";
import Image from "next/image";
import axios from "axios";
import Link from "next/link";

export default function CountriesSlider() {
  const [swiperRef, setSwiperRef] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [fileprocessing, setfileprocessing] = useState([]);

  useEffect(() => {
    const fetchfileprocessing = async () => {
      try {
        const response = await axios.get(
          "/api/fileprocessingapi/fileprocessing"
        );
        setfileprocessing(response.data.fileprocessing); // Update the state with fetched countries
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };

    fetchfileprocessing();
  }, []);

  return (
    <div className="countries-slider mb-10 antialiased">
      {/* Custom Navigation Buttons */}
      <div className="flex justify-between">
        <div>
          <h2 className="font-bold text-[25px]">File Processing</h2>
        </div>
        <div>
          <button onClick={() => swiperRef && swiperRef.slidePrev()}>
            <AiFillLeftCircle size={35} style={{ color: "#fe720f" }} />
          </button>
          <button onClick={() => swiperRef && swiperRef.slideNext()}>
            <AiFillRightCircle size={35} style={{ color: "#fe720f" }} />
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
            spaceBetween: 40,
          },
        }}
        autoplay={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        {fileprocessing.map((fileprocessing, index) => (
          <SwiperSlide
            key={fileprocessing.id}
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
            <Link href={`/FileProcessingDescriptionPage/${fileprocessing.id}`}>
              <div className="rounded-xl">
                <Image
                  src={fileprocessing.countrybgurl}
                  alt=""
                  className="cover-image rounded-xl h-[350px]"
                  width={250}
                  height={350}
                />
                {/* <div className="gradient-overlay rounded-xl"></div> */}
                <div className="centered-content">
                  <Avatar
                    className="absolute top-1/5 right-1/5 group-hover:absolute transition-all duration-500"
                    src={
                      <Image
                        src={fileprocessing.countryflagurl}
                        alt="avatar"
                        width={50}
                        height={50}
                      />
                    }
                    size={85}
                  />
                  <h2
                    className=" text-white font-bold text-[25px] absolute bottom-[-40px] right-1/5 group-hover:absolute group-hover:bottom-[50px] transition-all duration-500"
                    style={{
                      background: "transparent",
                      textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                    }}
                  >
                    {fileprocessing.title}
                  </h2>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
