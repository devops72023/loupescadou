import SideText from "./SideText/sideText";
import SliderMobile from "./Slider/SliderMobile";
import Slider from "./Slider/Slider";

import '../../assets/styles/Slider.css';
import { AppContext } from "../../App";
import { useContext, useEffect } from "react";
// import '../../assets/styles/slide.css';
// import '../../assets/styles/SideText.css';
// import '../../assets/styles/quoiDeNeuf.css';
// import '../../assets/styles/mobile.css';
// import '../../assets/styles/Home.module.css';
// import '../../assets/styles/globals.css';
// import '../../assets/styles/components.css';


export default function QuoiDeNeuf(){
  const { setLoaded } = useContext(AppContext);
  useEffect(() => {
    setLoaded(true)
    console.log("Loaded")
  },[]);
  return (
    <div className='relative overflow-hidden w-full @container/quoi'>

        <div className='max-w-[1434px] w-[90%] flex-col @[1235px]/quoi:flex-row mx-auto md:justify-between space-y-10 min-h-[650px] flex md:flex-row items-center' >

            <SideText display="hidden md:flex w-full" />

            <div className="w-full md:w-full ">
                {/* <div className='bg-white w-[30rem] h-[30rem] md:w-[120rem] md:h-[120rem] -left-8 md:left-[44rem] -top-56 md:-top-[80rem] absolute z-0 rounded-full' /> */}
                <Slider />
                <SliderMobile />
                {/* <div className='hidden md:flex top-[6rem] justify-between w-1/2 absolute' >
                    <img loading='lazy' className=" h-32 z-10 " src="/assets/icone3.png" alt=""  />
                    <img className=" h-32 z-10 " src="/assets/icone2.png" alt=""  />
                    <img className=" h-32 z-10" src="/assets/icone1.png" alt=""  />
                </div> */}
            </div>

            <SideText display = "flex w-full md:hidden" />
            

        </div>
      <div className="bg-pes"></div>
    </div>
  )
}
