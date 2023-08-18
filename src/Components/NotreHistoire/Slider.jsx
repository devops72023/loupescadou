import React, { useEffect, useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

const Slider = (props) => {
  const { images, className, openImage } = props;
  const ref = useRef();
  const prev = useRef();
  const slider = useRef();
  useEffect(() => {
    let toRemove1 = Array.from(ref.current.querySelectorAll('.swiper-slide-shadow-left'))
    let toRemove2 = Array.from(ref.current.querySelectorAll('.swiper-slide-shadow-right'))
    toRemove1.map((el) => {
        el.style.display = 'none';
    })
    toRemove2.map((el) => {
        el.style.display = 'none';
    })
    const interval = setInterval(() => {
        prev.current.click()
    }, 3000)
    return () => clearInterval(interval)
},[])
  return (
    <div className="w-full">
      <Swiper
        ref={ref}
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 10,
          stretch: 150,
          depth: 100,
          modifier: 2,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="w-full max-w-[400px]"
      >
        {images?.map((image, index) => {
          return (
              <SwiperSlide key={index} className="max-w-[400px] my-auto  blur-sm">
                <img
                    onClick={() => {
                      openImage(
                        `${import.meta.env.VITE_ASSETS}/Histoire/${image}`
                      );
                    }}
                    src={`${import.meta.env.VITE_ASSETS}/Histoire/${image}`}
                    className={`w-full max-w-[400px] rounded-2xl shadow-2xl`}
                  />
              </SwiperSlide>
          );
        })}
        <div className="slider-controler mt-10">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div ref={prev} className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
};

export default Slider;
