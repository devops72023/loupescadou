import React, { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './slider.css'

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';


function AwesomeSlider() {
    const ref = useRef();
    const prev = useRef();
    const images = [
      `${import.meta.env.VITE_ASSETS}/Histoire/tall1.JPG`,
      `${import.meta.env.VITE_ASSETS}/Histoire/tall2.JPG`,
      `${import.meta.env.VITE_ASSETS}/Histoire/tall1.JPG`,
      `${import.meta.env.VITE_ASSETS}/Histoire/tall2.JPG`,
      `${import.meta.env.VITE_ASSETS}/Histoire/tall3.JPG`,
    ];
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
    <div className="max-w-[577px] w-full mx-auto max-h-[300px]">
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
        className="swiper_container px-10 py-5"
      >
        {
            images.map((image, index) => {
                return (
                    <SwiperSlide key={index} className='w-[90%] max-h-[300px] flex justify-center items-center blur-sm'>
                        <img src={image} alt="slide_image" className='max-h-[300px] rounded-xl' />
                    </SwiperSlide>
                )
            })
        }

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
}

export default AwesomeSlider;
