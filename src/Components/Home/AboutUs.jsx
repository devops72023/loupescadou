import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'
import { leftFadeIn, rightFadeIn } from '../Global/motion-animations'
import img1 from '../../assets/Icons/icone3.png'
import img2 from '../../assets/Icons/icone1.png'
import img3 from '../../assets/Icons/icone2.png'

function AboutUs() {
  const titleRef = useRef()
  const paragraphRef = useRef()
  const titleInView = useInView(titleRef)
  const paragraphInView = useInView(paragraphRef)
  return (
    <div className="flex flex-col relative">
      <div className="absolute top-0 left-0 w-full h-full">
        <img src={img1} className='w-[120px] md:w-[150px] absolute left-[50%] translate-x-[-50%] top-0 md:top-[30px]'/>
        <img src={img2} className='w-[60px] md:w-[80px] absolute right-0 top-[200px]'/>
        <img src={img3} className='w-[120px] absolute left-[-20px] top-[160px]'/>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 81 1440 239"><path fill="#ffffff" fillOpacity="1" d="M0,224L60,234.7C120,245,240,267,360,250.7C480,235,600,181,720,144C840,107,960,85,1080,96C1200,107,1320,149,1380,170.7L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
      <div className="w-full h-fit py-3 flex overflow-hidden flex-col justify-center items-center gap-5 font-dancing bg-gradient-to-b from-white via-white to-transparent">
      <motion.h3
          ref={titleRef}
          animate={ titleInView ? leftFadeIn : {} }
          className="text-3xl text-center w-[80%] md:text-7xl m-auto md:pt-0 text-dark-blue-500">
          Notre <span className="text-[#79c8f5]">histoire</span>
        </motion.h3>
        <motion.p
          ref={paragraphRef}
          animate={ paragraphInView ? rightFadeIn : {} }
          className="text-lg text-justify md:text-center lg:text-3xl xl:text-4xl w-[80%] m-auto text-dark-blue-400"
        >
          Plongez dans notre sélection de poissons frais en ligne ! Lou Pescadou
          vous propose une sélection exceptionnelle de poissons frais et de
          fruits de mer de qualité supérieure, livrés directement chez vous.
          Notre processus de commande en ligne est simple et rapide. Vous pouvez
          facilement parcourir notre sélection de produits frais, ajouter des
          articles à votre panier, et passer votre commande en quelques clics
          seulement. Nous offrons également une livraison rapide et fiable pour
          assurer la fraîcheur de nos produits.
          <Link to="/histoire" className="underline text-[#79c8f5] text-2xl">
            Voir Plus.
          </Link>
        </motion.p>
        <div className="flex container justify-center w-full h-fit px-3">         
          <iframe src="https://player.vimeo.com/video/840106920?h=b60fa3592c" 
          className="rounded-xl overflow-hidden h-[200px] md:h-[576px] w-full" width="1024" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen></iframe>
        </div>
      </div>
    </div>
  )
}

export default AboutUs