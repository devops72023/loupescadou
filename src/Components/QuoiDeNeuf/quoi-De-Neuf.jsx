import SideText from "./SideText/sideText";
import SliderMobile from "./Slider/SliderMobile";
import Slider from "./Slider/Slider";

import '../../assets/styles/Slider.css';
import { AppContext } from "../../App";
import { useContext, useEffect } from "react";
import AwesomeSlider from "./Slider/AwesomeSlider";

import slide_image_1 from '../../assets/quoideneuf/food-img-1.png';
import slide_image_2 from '../../assets/quoideneuf/food-img-2.png';
import slide_image_3 from '../../assets/quoideneuf/food-img-3.png';
import slide_image_4 from '../../assets/quoideneuf/food-img-4.png';
import slide_image_5 from '../../assets/quoideneuf/food-img-5.png';

export default function QuoiDeNeuf(){
  const { setLoaded } = useContext(AppContext);
  const images = [
    slide_image_1,
    slide_image_2,
    slide_image_3,
    slide_image_4,
    slide_image_5
  ];
  useEffect(() => {
    setLoaded(true)
    console.log("Loaded")
  },[]);
  return (
    <div className='relative overflow-hidden w-full @container/quoi'>
        <div className='max-w-[1434px] w-[90%] flex-col gap-[40px] @[1235px]/quoi:flex-row mx-auto md:justify-between space-y-10 min-h-[650px] flex md:flex-row items-center' >
            <SideText className="flex flex-col font-dancing justify-center items-center gap-5 w-full text-center" />
            <div className="w-full">
              <AwesomeSlider images={images} />
            </div>
        </div>
      <div className="bg-pes"></div>
    </div>
  )
}
