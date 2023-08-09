import { bottomFadeIn } from "./motion-animations";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const Footer = () => {
  const footerRef = useRef(null);
  const isFooterInView = useInView(footerRef);
  const [ settings, setSettings ] = useState({});
  useEffect(()=>{
    fetch(`${import.meta.env.VITE_API}/settings`)
    .then(res => res.json())
    .then(res => {
      setSettings(res);
    })
  },[])
  return (
    <motion.div 
      className="text-white glass bottom-0 font-sans mt-5 mb-[100px] w-[90%] max-w-[1434px] m-auto rounded-[20px] md:mb-3"
      ref={footerRef}
      animate={isFooterInView ? bottomFadeIn : {}}
    >
      <div className="container p-3 lg:flex-row flex justify-evenly flex-col">
        <div className="flex flex-col">
          <h3 className='text-2xl mb-3 font-["Dancing_Script"]'>Infos</h3>
          <a href="#" className="mb-2 hover:text-white hover:tracking-wide duration-300">
            <i className="fa-solid fa-location-dot me-2 text-lg"></i>
            {
              settings.adresse ? settings.adresse : 'Lorem ipsum dolor sit amet.'
            }
          </a>
          <a href="#" className="mb-2 hover:text-white hover:tracking-wide duration-300">
            <i className="fa-solid fa-phone me-2 text-lg"></i>{
              settings.phone ? settings.phone : '+ 00 000 000 000' }
          </a>
          <a href="#" className="mb-2 hover:text-white hover:tracking-wide duration-300">
            <i className="fa-solid fa-envelope me-2 text-lg"></i>
            {
              settings.email ? settings.email : 'contact@loupescadeau.com'
            }
          </a>
        </div>

        <div className="flex flex-col">
          <h3 className='text-2xl mb-3 font-["Dancing_Script"]'>
            Liens utiles
          </h3>
          <a href="#" className="mb-2 hover:text-white hover:tracking-wide duration-300">
            <i className="fa-solid fa-fish me-2 text-lg"></i>
            Pourquoi nous
          </a>
          <a href="#" className="mb-2 hover:text-white hover:tracking-wide duration-300">
            <i className="fa-solid fa-fish me-2 text-lg"></i>
            Caractéristiques
          </a>
          <a href="#" className="hover:text-white hover:tracking-wide duration-300">
            <i className="fa-solid fa-fish me-2 text-lg"></i>
            Quoi de neuf
          </a>
        </div>

        <div className="flex flex-col">
          <h3 className='text-2xl mb-3 font-["Dancing_Script"]'>Suivez-nous</h3>
          <div className="w-[180px] flex text-3xl justify-between flex-wrap">
            <a href="#" className="rounded-[5px] w-[40px] h-[40px] flex justify-center items-center hover:text-[#0165E1] bg-[#0165E1] hover:bg-white duration-300">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a href="#" className="rounded-[5px] w-[40px] h-[40px] flex justify-center items-center hover:text-white duration-300  
            bg-gradient-to-b from-[#405de6] via-[#fd1d1d] to-[#ffdc80] hover:bg-gradient-to-r">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="#" className="rounded-[5px] w-[40px] h-[40px] flex justify-center items-center hover:text-[#1da1f2]   bg-[#1da1f2] hover:bg-white duration-300">
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a href="#" className="rounded-[5px] w-[40px] h-[40px] flex justify-center items-center hover:text-[#0a66c2] bg-[#0a66c2] hover:bg-white duration-300">
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
          </div>
          <h3 className="mt-3 text-5xl font-['Dancing_Script'] font-semibold">Lou Pescadeau</h3>
        </div>
      </div>
      <hr className="container" />
      <div className="container text-center p-3">
        © Copyright 2023 Lou Pescadeau. Tous les droits sont réservés.
      </div>
    </motion.div>
  );
};

export default Footer;
