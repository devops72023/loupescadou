import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { leftFadeIn, rightFadeIn } from "../Global/motion-animations";
import ReactPlayer from "react-player";
import img1 from "../../assets/Icons/icone3.png";
import img2 from "../../assets/Icons/icone1.png";
import img3 from "../../assets/Icons/icone2.png";

function AboutUs() {
  const titleRef = useRef();
  const paragraphRef = useRef();
  const titleInView = useInView(titleRef);
  const paragraphInView = useInView(paragraphRef);
  return (
    <div className="flex flex-col relative">
      <div className="absolute top-0 left-0 w-full">
        <img
          src={img1}
          className="w-[150px] md:w-[150px] absolute left-[50%] translate-x-[-50%] top-0 md:top-[60px]"
        />
        <img
          src={img2}
          className="w-[60px] md:w-[80px] absolute right-0 top-[200px]"
        />
        <img
          src={img3}
          className="w-[120px] absolute left-[-20px] top-[160px]"
        />
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 81 1440 239">
        <path
          fill="#ffffff"
          fillOpacity="1"
          d="M0,224L60,234.7C120,245,240,267,360,250.7C480,235,600,181,720,144C840,107,960,85,1080,96C1200,107,1320,149,1380,170.7L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg>
      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#ffffff" fill-opacity="1" d="M0,288L12.6,282.7C25.3,277,51,267,76,234.7C101.1,203,126,149,152,106.7C176.8,64,202,32,227,58.7C252.6,85,278,171,303,213.3C328.4,256,354,256,379,266.7C404.2,277,429,299,455,256C480,213,505,107,531,90.7C555.8,75,581,149,606,192C631.6,235,657,245,682,224C707.4,203,733,149,758,144C783.2,139,808,181,834,186.7C858.9,192,884,160,909,170.7C934.7,181,960,235,985,245.3C1010.5,256,1036,224,1061,218.7C1086.3,213,1112,235,1137,202.7C1162.1,171,1187,85,1213,74.7C1237.9,64,1263,128,1288,149.3C1313.7,171,1339,149,1364,154.7C1389.5,160,1415,192,1427,208L1440,224L1440,320L1427.4,320C1414.7,320,1389,320,1364,320C1338.9,320,1314,320,1288,320C1263.2,320,1238,320,1213,320C1187.4,320,1162,320,1137,320C1111.6,320,1086,320,1061,320C1035.8,320,1011,320,985,320C960,320,935,320,909,320C884.2,320,859,320,834,320C808.4,320,783,320,758,320C732.6,320,707,320,682,320C656.8,320,632,320,606,320C581.1,320,556,320,531,320C505.3,320,480,320,455,320C429.5,320,404,320,379,320C353.7,320,328,320,303,320C277.9,320,253,320,227,320C202.1,320,177,320,152,320C126.3,320,101,320,76,320C50.5,320,25,320,13,320L0,320Z"></path>
      </svg> */}
      {/* bg-gradient-to-b from-white via-white to-transparent */}
      <div className="w-full h-fit py-3 flex overflow-hidden justify-center items-center bg-white gap-5 font-dancing pb-5">
        <div className="flex gap-3 flex-col lg:flex-row max-w-[1434px] w-[90%] justify-center items-center">
          <div className="flex flex-col w-full">
            <motion.h3
              ref={titleRef}
              animate={titleInView ? leftFadeIn : {}}
              className="text-3xl  w-full md:text-7xl md:pt-0 px-4 text-dark-blue-500"
            >
              Notre <span className="text-[#79c8f5]">histoire</span>
            </motion.h3>
            <motion.p
              ref={paragraphRef}
              animate={paragraphInView ? rightFadeIn : {}}
              className="text-lg text-justify md:text-left lg:text-3xl xl:text-4xl px-4 m-auto text-dark-blue-400 font-dancing"
            >
              De l'étal aux plats cuisinés, des produits authentiques !
              Chez Lou Pescadou, votre poissonnier-traiteur à La
              Ciotat, nous travaillons sans relâche à développer une
              multitude de produits ayant pour point commun la Mer.
              Outre notre magnifique étal de poissons fraîchement
              pêchés, vous trouverez des plat typiques
              méditerranéens tels que la paella aux fruits de mer, les
              encornets farcis, la salade de poulpe ou encore les
              cannelloni aux fruits de mer.
              <Link to="/notre-histoire" className="underline text-[#79c8f5] text-2xl">
                Voir Plus.
              </Link>
            </motion.p>
          </div>
          <div className="flex container justify-center w-full h-fit px-3">
            <video
              src="https://lou-pescadou.fr/videos/pescadou.mp4"
              controls
              className="w-full rounded-xl bg-black"
            />
          </div>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 81 1440 239" className="rotate-180 -mt-1">
        <path
          fill="#ffffff"
          fillOpacity="1"
          d="M0,224L60,234.7C120,245,240,267,360,250.7C480,235,600,181,720,144C840,107,960,85,1080,96C1200,107,1320,149,1380,170.7L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
}

export default AboutUs;
