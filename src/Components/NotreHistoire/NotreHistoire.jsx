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
                Lou Pescadou <i onClick={()=>{setIsOpenedImage(false)}} className="fas fa-close text-white text-lg cursor-pointer hover:text-2xl transition-300 w-[40px] h-[40px] rounded-full flex justify-center items-center"></i>
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
          Une évolution continuelle
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
              En 2009 et 2013, Pierre-Marc et son père ouvrirent deux nouveaux points de vente, afin d'étendre
              leur activité. <br />
              La Maison de la Mer, première créée et aujourd’hui cédée, s'établit à Saint-Cyr-sur-Mer, ville
              voisine de La Ciotat, tandis qu'un second Lou Pescadou est ouvert à La Ciotat, dans une halle
              marchande où sont rassemblés plusieurs commerçants connus dans la ville.
              Dans nos deux poissonneries, nous proposons les produits de notre pêche quotidienne, que ce
              soient des lottes, des bars, des grondins, ou alors, comme nous les appelons ici, des baudroies,
              des loups et des galinettes. Des daurades royales aux rougets, beaucoup de merveilles de la Mer,
              au goût exceptionnel, sont présentes sur notre étal.
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
              Pierre-Marc Riba, ayant aussi suivi une formation de cuisinier, a rapidement cherché à développer
              des plats autour des produits de la Mer. Encornets farcis, cannelés au crabe, thon à la catalane,
              beaucoup de plats typiques sont élaborés ou revisités par le Lou Pescadou. <br />
              La plus célèbre de ces spécialités reste la paella aux fruits de mer, dont la belle odeur aux accents
              safranés parcourt la rue des Poilus, et enchante les touristes estivants. <br />
              Pierre-Marc a aussi développé une recette de soupe de poissons, qu'il fabrique aujourd'hui dans
              son laboratoire de La Maison de la Mer, et grâce à la pêche quotidienne de son père. Un produit
              100% maison, en somme.
            </p>
          </div>
        </div>
        <div className="flex glass p-5 rounded-2xl">
          <div className="flex flex-col gap-4 w-full h-full text-white font-poppins">
            <p
            >
              Aujourd'hui, il cherche à correspondre aux nouvelles habitudes de la clientèle et aux nouveaux
              modes de consommation, et il peut pour cela compter sur son fils Anthony, qui a suivi des études
              de commerce et qui a ce que les jeunes aiment appeler...le regard jeune. <br />
              Anthony a ainsi développé les ventes promotionnelles par messages et la présence sur Internet,
              et assiste son père pour améliorer la communication de la société à travers la ville, la région et
              plus encore. <br />
              Ensemble, Pierre-Marc et Anthony développent l'activité d'avitaillement de yachts, que le Lou
              Pescadou a démarré il y a une dizaine d'années.
              Ainsi, l'évolution du Lou Pescadou, c'est avant tout une histoire de générations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotreHistoire;
