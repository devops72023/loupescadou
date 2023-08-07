import React, { useContext, useEffect, useRef, useState } from 'react';
import {inView, motion, useInView} from 'framer-motion'
import { AppContext } from '../../App';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({product, delay}) => {
    const { setIsBasketOpen, basket, setBasket } = useContext(AppContext)
    const navigate = useNavigate()
    const addItemToBasket = () => {
        // check if the product is alredy in the basket
        let arr = Array.from(basket)
        let isIncreased = false;
        basket.map((item, index) => {
            if ( item.product._id == product._id ){
                setBasket(prv=>{
                    arr[index].quantity = arr[index].quantity + 1;
                    return arr;
                });
                setIsBasketOpen(true);
                isIncreased = true;
            }
        })
        if(!isIncreased ){
            setBasket(prv=>{
                return [...prv, { product: product, quantity: 1}]
            });
            setIsBasketOpen(true);
        }
    }
  return (
    <motion.li 
        onClick={()=>{navigate('/products/'+product._id)}}
        initial={{scale: 0, opacity: 0}}
        animate={{scale: 1, opacity: 1}}
        transition={{duration: .3, delay: delay}}
        data-aos="zoom-in"
        className='group item h-full max-h-[410px] mx-auto cursor-pointer glass space-y-4 shadow-lg duration-300 p-4 w-full rounded-3xl max-w-[300px]' 
    >
        <div onClick={() => {}} className='flex items-center justify-between w-full ' >
          <div className='flex items-center space-x-2' >
            <p className='font-semibold text-gray-800 text-3xl'>{ product.price }€</p> 
            <p className='text-red-800 line-through' >{ product.price + 10 }€</p> 
          </div>
           <i className="fa-solid active:scale-75 text-gray-800 border rounded-full p-2 border-gray-800 duration-300 cursor-pointer hover:shadow fa-bag-shopping"></i>   
        </div>

        <img onClick={() => router.push(`/Product/${product.title}`)} src={ `${import.meta.env.VITE_ASSETS}/Products-images/${product.photo}` } className='group-hover:scale-105 duration-300 md:h-36 w-full rounded items-center object-fill justify-center' alt="" />

        <div className='flex flex-col items-center w-full space-y-4 ' >
            <h1 className='text-gray-100 cursor-pointer text-3xl text-center w-full rounded-full line-clamp-1' >{ product.title }</h1>
            <p className='text-gray-100 font-poppins text-xs line-clamp-2' >{ product.description }</p>
            <button onClick={addItemToBasket} className='font-poppins text-sm bg-white w-full py-2 active:scale-75 duration-300 border rounded-full text-gray-800' >
                AJOUTER AU PANIER
            </button>
        </div>
    </motion.li>
  )
}

function PopularProducts() {
    const [ products, setProducts ] = useState([]);
    const popular = useRef();
    const popularInView = useInView(popular);
    useEffect(() =>{
        fetch(`${import.meta.env.VITE_API}/products/popular`)
        .then(res => res.json())
        .then(res => setProducts(res.success))
    },[])
    return (
        <motion.div
            className="flex flex-col justify-center gap-4 text-center font-dancing text-white">
            <h2 className="text-6xl">
                Le Plus Populaire
            </h2>
            <div
                ref={popular} 
                className="flex w-full @container/popular">
                {
                    popularInView
                    ? <ul className='w-full font-poppins place-items-center text-white flex flex-wrap flex-row justify-center gap-3 px-2 h-fit py-3' >
                        { products.map((product, index) => <ProductCard key={index} product={product} delay={0.3 * index} />)}
                    </ul>
                    : ''
                }
            </div>
        </motion.div>
    )
}

export default PopularProducts
export { ProductCard }