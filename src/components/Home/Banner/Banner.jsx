import React from "react";
// Import Swiper React components
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper";
//slider img
import slider1 from "../../../assets/images/banner/banner1.jpg";
import slider2 from "../../../assets/images/banner/banner2.jpg";
import slider3 from "../../../assets/images/banner/banner3.jpg";
import sliderFooter from "../../../assets/images/banner/slider-pattern.png";

export default function Banner() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 100000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="relative h-[calc(100vh-4rem)] w-full z-40  top-0">
            <img src={slider2} alt="" />
            <div className="absolute  flex justify-center flex-col items-start  left-0 right-0 bottom-0 top-0 bg-opacity-50">
              <div className="ml-[10%]">
                <h3 className="text-sec text-3xl font-normal mb-5  font-poppins">
                  Hot & Trendy
                </h3>
                <h1 className="text-6xl text-white font-nunito font-bold">
                  New Arrival Electric <br /> Remote Car
                </h1>
                <p className="capitalize mt-6 mb-4 text-gray-200 font-nunito">
                  Get Up to 30% of your on your first order
                </p>
                <AwesomeButton type="primary">Shop Now</AwesomeButton>
              </div>
            </div>
            <img src={sliderFooter} alt="" className="absolute w-full h-full" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative h-[calc(100vh-4rem)] w-full">
            <img src={slider3} alt="" />
            <div className="absolute  flex justify-center flex-col items-end bg-slate-950  left-0 right-0 bottom-0 top-0 bg-opacity-50">
              <div className="mr-20">
                <h3 className="text-sec text-3xl font-normal mb-5  font-poppins">
                  Hot & Trendy
                </h3>
                <h1 className="text-6xl text-black font-nunito font-bold">
                  New Arrival Electric <br /> Remote Car
                </h1>
                <p className="capitalize mt-6 mb-4 text-slate-900">
                  Get Up to 30% of your on your first order
                </p>
                <AwesomeButton type="primary">Shop Now</AwesomeButton>
              </div>
            </div>
            <img src={sliderFooter} alt="" className="absolute w-full h-full" />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative h-[calc(100vh-4rem)] w-full">
            <img src={slider1} alt="" />
            <div className="absolute  flex justify-center flex-col items-end bg-slate-950  left-0 right-0 bottom-0 top-0 bg-opacity-50">
              <div className="mr-20">
                <h3 className="text-sec text-3xl font-normal mb-5  font-poppins">
                  Hot & Trendy
                </h3>
                <h1 className="text-6xl text-black font-nunito font-bold">
                  New Arrival Electric <br /> Remote Car
                </h1>
                <p className="capitalize mt-6 mb-4 text-slate-900">
                  Get Up to 30% of your on your first order
                </p>
                <AwesomeButton type="primary">Shop Now</AwesomeButton>
              </div>
            </div>
            <img src={sliderFooter} alt="" className="absolute w-full h-full" />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
