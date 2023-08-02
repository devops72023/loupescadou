import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

const Card = ({category, animatedFish, setAnimatedFish}) => {
    const card = useRef();
    card.current?.addEventListener('mouseover', () => {
        setAnimatedFish({_id: category._id});
      });
    return (
        <Link
            ref={card}
            className={`${animatedFish._id == category._id ? 'opacity-100 blur-0' : 'opacity-60 blur-[1px]' } glass max-w-[280px] flex flex-col gap-3 justify-between px-5 py-3 rounded-xl font-dancing text-center transition-opacity shadow-xl hover:opacity-100 hover:blur-0`}>
            <img src={`${import.meta.env.VITE_ASSETS}/Category-images/${category.image}`} alt="" />
            <h3 className='text-white text-4xl'>{category.name}</h3>
            <p className='text-white text-lg line-clamp-3'>{category.description}</p>
            <i className='fas fa-arrow-right py-2 w-fit mx-auto px-10 bg-white rounded-3xl text-dark-blue-500 text-2xl'></i>
        </Link>
    )
}

function CatgoriesCard() {
    const [categories, setCategories] = useState([{}]) 
    const [animatedFish, setAnimatedFish] = useState(categories[0]);
  
    const changeAnimatedFish = () => {
        console.log(animatedFish);
      if(animatedFish._id != categories[categories.length - 1]._id){
        let index = categories.findIndex(p => p._id==animatedFish._id);
        setAnimatedFish(categories[index + 1]);
      }else{
        setAnimatedFish(categories[0]);
      };
    };
    useEffect(() =>{
        fetch(`${import.meta.env.VITE_API}/categories`)
        .then(res=>res.json())
        .then(res=>setCategories(res))
    },[])
    useEffect(() =>{
        const intervalid = setInterval(changeAnimatedFish, 5000);
        return () => clearInterval(intervalid);
    }, [animatedFish])
    return (
        <div className='flex flex-col gap-4 w-full justify-center'>
            <h1 className='text-white text-7xl font-dancing text-center'>Meilleur site de poisson en France</h1>
            <div className="w-full justify-center @container/cats">
                <div className="flex gap-3 w-full justify-center">
                    {
                        categories.map(category => (<Card category={category} setAnimatedFish={setAnimatedFish} animatedFish={animatedFish} />))
                    }
                </div>
            </div>
        </div>
    )
}

export default CatgoriesCard