import React, { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './slider.css'

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';


function AwesomeSlider({ images }) {
    const ref = useRef();
    const prev = useRef();

    useEffect(() => {
        console.log(ref.current);
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
    <div className="max-w-[577px] mx-auto">
      <Swiper
        ref={ref}
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 10,
          stretch: 50,
          depth: 300,
          modifier: 2.5,
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
            images.map(image => {
                return (
                    <SwiperSlide className='w-[90%] flex justify-center items-center blur-sm'>
                        <img src={image} alt="slide_image" className='w-[80%]' />
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
