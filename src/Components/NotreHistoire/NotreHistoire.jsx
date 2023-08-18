import React, { useContext, useEffect, useState } from "react";
import SideText from "./sideText";
import image1 from '../../assets/notre-histoire/Ellipse 11.png'
import { AppContext } from "../../App";
import Slider from './Slider';
import useMeasure from "react-use-measure";
import AwesomeSlider from "./Slider/AwesomeSlider";
import { AnimatePresence, motion } from 'framer-motion';

function NotreHistoire() {
  const { setLoaded } = useContext(AppContext)
  const [isImageOpened, setIsOpenedImage] = useState(false);
  const [openedImage, setOpenedImage] = useState("");
  let ServicesItems = [
    {
      title: "Livraison Rapide",
      slug: "promesse de livraison sous 30 min",
      icon: "fa-solid fa-person-biking",
    },
    {
      title: "Détecter",
      slug: "livraison par ramassage à votre porte",
      icon: "fa-sharp fa-solid fa-bag-shopping",
    },
    {
      title: "Manger sur place",
      slug: "dégustez vos plats frais et chauds",
      icon: "fa-solid fa-utensils",
    },
  ];
  const openImage = (src) => {
    setOpenedImage(src);
    setIsOpenedImage(true);
  };
  const closeImage = () => {
    setOpenedImage("");
    setIsOpenedImage(false);
  };
  useEffect(() => {
    setLoaded(true)
  },[]);
  return (
    <div className="w-full flex justify-center items-center relative">
      <AnimatePresence >
        {isImageOpened && (
          <motion.div
            initial={{ opacity: 0 }} // Set initial opacity for entrance animation
            animate={{ opacity: 1 }} // Animate opacity on entrance
            exit={{ opacity: 0 }} //
            onClick={closeImage}
            className="w-full min-h-screen overflow-auto top-0 bg-black bg-opacity-10 backdrop-blur-lg left-0 flex justify-center items-center fixed  px-[20px] py-10 z-30"
          >
            <motion.div
              initial={{scale: 0}}
              animate={{scale: 1}}
              exit={{scale: 0}}
              onClick={(e) => {
                e.stopPropagation();
              }}
              className="flex flex-col gap-5 glass max-w-[500px] w-full h-fit p-5 rounded-xl overflow-hidden"
            >
              <h1 className="text-white font-dancing text-center w-full text-3xl flex justify-between">
                Lou-Pescadou <i onClick={()=>{setIsOpenedImage(false)}} className="fas fa-close text-white text-lg cursor-pointer hover:text-2xl transition-300 w-[40px] h-[40px] rounded-full flex justify-center items-center"></i>
              </h1>
              <img src={openedImage} className="rounded-lg" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex flex-col gap-5 max-w-[1434px] w-[90%]">
        <div className="@container/histoire flex w-full h-fit gap-2">
          <div className="justify-evenly w-full md:px-8 flex flex-col gap-3 @[980px]/histoire:flex-row items-center">
            <SideText />
            <AwesomeSlider />
          </div>
        </div>
        
        <h1 className="text-5xl font-dancing text-white text-center py-5">
          Lou Pescadou, une histoire de générations
        </h1>
        <div className="flex gap-6 flex-col-reverse md:flex-row justify-center items-start glass p-5 rounded-2xl">
          <Slider
            images={['DSC00501.JPG', 'DSC00502.JPG', 'DSC00527.JPG']}
            className='w-full h-[300px] rounded-xl overflow-hidden bg-transparent'
            openImage={openImage}
          />
          <div className="flex flex-col gap-4 w-full h-full text-white font-poppins">
            <p
            >
              André Riba, celui que beaucoup appelaient "Dédé", était le grand père de Pierre-Marc Riba. À 18 ans déjà, il menait des chalutiers, et c'est en 1952 qu'il démarre son activité de pêche conjointement avec son beau-père, Michel Passera, et leur barque, le Michel-Pierre.
              Vendant d'abord leur pêche quotidienne sur les quais du port de La Ciotat, ils décident en 1958 d'ouvrir leur point de vente sobrement intitulé "Chez Dédé".
              Rapidement, ils achètent plusieurs barques successives, puis font construire en 1966 le Pierre-Michel, leur premier chalutier de 16 mètres.
              C'est enfin en 1967 que notre cher Lou Pescadou voit le jour dans la célèbre rue des Poilus, à La Ciotat.
            </p>
          </div>
        </div>
        <div className="flex gap-6 flex-col-reverse md:flex-row-reverse justify-center items-start glass p-5 rounded-2xl">
          <Slider
            images={['DSC00523.JPG', 'DSC00526.JPG', 'DSC00523.JPG', 'DSC00526.JPG', 'DSC00527.JPG']}
            className='w-full h-[300px] rounded-xl overflow-hidden bg-transparent'
            openImage={openImage}
          />
          <div className="flex flex-col gap-4 w-full h-full text-white font-poppins">
            <p
            >
              Pierre Riba suit les traces de son père André, et démarre très tôt la pêche à l'âge de 8 ans. A 14 ans, il est déjà en train de mener le Pierre-Michel, et ce ne sont pas les périodes de mauvais temps en mer qui l'effraient.
            Avec son père, il fait construire en 1975 le Méditerranée, puis en 1977, le Marie-Michel, premier chalutier en fibre de verre et résine de 25 mètres, et en 1981, le Pierre-Marc, un chalutier de 21 mètres en l'honneur de son fils.
            Enfin, en 1998, Pierre Riba fait construire le Marie-Pierre-André, notre chalutier actuel de 18,5 mètres, spécialement étudié pour la pêche au large de La Ciotat.
            Ses caractéristiques nous permettent une pêche sélective, avec des "coups de chalut très courts", comme l'explique si bien Pierre, dans des fonds riches d’épaves.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotreHistoire;
