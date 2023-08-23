import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";

const Swipper = (props) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={0}
      slidesPerView={4}
      autoplay={{delay : 2000}}
      navigation
      pagination={{ clickable: true }}
    >
      {props.brand.map((e, i) => {
        return (
          <SwiperSlide className="w-fit flex">
            <img className="w-[200px]" src={props.brand[i].path}></img>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Swipper;
