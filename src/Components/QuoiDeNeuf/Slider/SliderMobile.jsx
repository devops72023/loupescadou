import React, { useState } from 'react'
import { xyz, XyzTransition } from '@animxyz/react'
import img1 from '../../../assets/quoideneuf/food-img-1.png';
import img2 from '../../../assets/quoideneuf/food-img-2.png';
import img3 from '../../../assets/quoideneuf/food-img-3.png';
import img4 from '../../../assets/quoideneuf/food-img-4.png';
import img5 from '../../../assets/quoideneuf/food-img-5.png';


import droit from '../../../assets/quoideneuf/droit.png';
import gauche from '../../../assets/quoideneuf/guache.png';

export default function SliderMobile() {

    const initialImages = [
        img1,
        img2,
        img3,
        img4,
        img5,
      ];
      const [images, setImages] = useState(initialImages);
      const [selectedImage, setSelectedImage] = useState(images[0]);
      const [selectedIndex, setSelectedIndex] = useState(0);
      const [animationKey, setAnimationKey] = useState(Date.now());
    
      const handleImageClick = (imageUrl, index) => {
        setSelectedImage(imageUrl);
        setSelectedIndex(index);
      };

    const handleLeftArrowClick = () => {
        const newIndex = (selectedIndex - 1 + images.length) % images.length;
        const newImages = [
          images[newIndex],
          ...images.slice(0, newIndex),
          ...images.slice(newIndex + 1),
        ];
        setSelectedImage(images[newIndex]);
        setSelectedIndex(newIndex);
        setImages(newImages);
        setAnimationKey(Date.now());
      };
    
      const handleRightArrowClick = () => {
        const newIndex = (selectedIndex + 1) % images.length;
        const newImages = [
          images[newIndex],
          ...images.slice(0, newIndex),
          ...images.slice(newIndex + 1),
        ];
        setSelectedImage(images[newIndex]);
        setSelectedIndex(newIndex);
        setImages(newImages);
        setAnimationKey(Date.now());
      };

      const xyzUtilities = {
        'rotate-right': false,
      }
    

  return (
    <div className='relative  md:hidden flex flex-col items-center z-20 text-black' >

        <div className="flex items-center rounded-full justify-center relative md:top-[20rem] top-[10rem] md:left-[16rem] left-[20rem] w-[16rem] md:w-[39rem]">

            <div className="hidden items-center md:flex">
                {
                    images.map((imageUrl, index) => (
                        <a
                        key={index}
                        href="#"
                        data-index={index + 1}
                        className={selectedIndex === index ? 'slide active' : 'slide'}
                        >
                            <XyzTransition appear mode="out-in">
                                <img
                                src={imageUrl}
                                className='h-10'
                                xyz={xyz('fade up-1 rotate-left-50% stagger', xyzUtilities)} alt="" key={animationKey} 
                                onClick={() => handleImageClick(imageUrl, index)}
                                />
                            </XyzTransition>
                        </a>
                    ))}
            </div>
        </div>

        <div className="mt-20">
            <XyzTransition appear mode="out-in" >
             <img src={selectedImage} className={`h-56  top-[2rem] left-[3rem]`} xyz='fade out-small-50% out-duration-10' alt="" key={animationKey}  /> 
            </XyzTransition>
        </div>
        <div className="flex px-5 items-center justify-between w-full">
            <button onClick={handleLeftArrowClick} className=''>
                <img src={droit} alt="" width={100} height={100} />
            </button>
            <button onClick={handleRightArrowClick} className=''>
                <img src={gauche} alt="" width={100} height={100} />
            </button>
        </div>
    </div>
  )
}
