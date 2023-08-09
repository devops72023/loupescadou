import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../../App'
import { motion } from 'framer-motion'

function Product() {
    const { setIsBasketOpen, basket, setBasket } = useContext(AppContext)
    const [ product, setProduct ] = useState({})
    const [ count, setCount ] = useState(0)
    const [percent, setPercent ] = useState('100')
    const params = useParams()

    const increaseQuantity = () => {
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
      const decreaseQuantity = () => {
        let arr = Array.from(basket)
        let isIncreased = false;
        basket.map((item, index) => {
            if ( item.product._id == product._id ){
                setBasket(prv=>{
                    arr[index].quantity = arr[index].quantity - 1;
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
    useEffect(()=>{
        basket.map(item => {
            if ( item.product._id == product._id ){
                setCount(item.quantity)
            }
        })
    }, [basket])
    useEffect(() => {
        fetch(`${import.meta.env.VITE_API}/products/${params.id}`)
        .then(res => res.json())
        .then(res => {
            setProduct(res.product)
            setPercent((res.product.sold / (res.product.quantity + res.product.sold)) * 100)
        })
    }, [])
  return (
    <div className='max-w-[1434px] w-[90%] flex- justify-center items-center mx-auto'>
      <div className="glass w-full flex flex-col gap-4 md:flex-row p-5 rounded-3xl">
        <div className="w-full pt-8 relative flex justify-center" >
          <img src={`${import.meta.env.VITE_ASSETS}/Products-images/${product.photo}`} className='max-w-[400px] w-full rounded-xl h-fit object-cover object-center' />
          {/* <img src="/assets/fish-3.png" className="h-full object-contain w-5/6 mx-auto" /> */}
        </div>

        <div className="flex flex-col md:items-start w-full space-y-4 md:space-y-3 px-3 md:px-0" >

          <h1 className="text-3xl font-semibold text-white" >{ product?.title   }</h1>

          <small className="text-gray-100 text-xl" >{ product.category && product.category.name }</small>

          <div className="flex items-center space-x-5" >
            <strong className="text-gray-300 font-bold text-3xl" > { product.price}€ </strong>
            <span className=" text-red-600 line-through text-xl" > { product.price + 20 }€ </span>
          </div>

          <div className="w-full space-y-1" >
            <p className="text-sm text-white" >{ product.quantity } item left { product.quantity + product.sold }</p>
            <div className="w-full h-[8px] bg-light-blue-100 overflow-hidden rounded-lg">
                <div className={`h-full bg-dark-blue-500`} style={{width: percent+'%'}}></div>
            </div>       
          </div>

          <div className="flex flex-col items-start py-1 space-y-2 w-full" >
            <p className="text-white" >Description</p>

            <p className="text-gray-100 text-xs" >
              { product.description }
            </p>

            <div className="bg-gray-50 bg-opacity-10 px-4 md:px-10 mt-4 md:mt-3 border-gray-300 py-4 md:py-8 space-y-3 md:space-y-4 justify-center w-full border rounded-lg " >
              <div className="flex flex-col item-start space-y-1 relative w-full " >
                <label className="text-sm text-white">Quantity</label>
                <div className="w-full flex gap-3" >
                    <motion.button
                        whileTap={{scale: .9}}
                        onClick={decreaseQuantity} 
                        className="min-w-[40px] min-h-[40px] flex justify-center items-center text-white text-xl transition-300 hover:bg-white hover:text-dark-blue-500 rounded-full border border-white cursor-pointer ">
                      <i  className="fa-sharp fa-solid fa-minus " />
                    </motion.button>
                    <div className="border border-white w-full h-[40px] rounded-[30px] flex justify-center items-center text-white font-bold">{count} items</div>
                    <motion.button
                        whileTap={{scale: .9}}
                        onClick={increaseQuantity}
                        className='min-w-[40px] min-h-[40px] flex justify-center items-center text-white text-xl transition-300 hover:bg-white hover:text-dark-blue-500 rounded-full border border-white cursor-pointer '>
                        <i className="fa-solid fa-plus cursor-pointer"></i>
                    </motion.button>
                </div>
                <small className="text-gray-50" >Maximum purchase 5</small>
              </div>

              <button className="bg-blue-700 text-gray-50 py-2 w-full rounded" >
                Buy Now
              </button>

              <button
              onClick={increaseQuantity}
              className="w-full justify-center flex items-center py-2 space-x-2 border rounded border-blue-700 text-blue-50" >
                <i className="fa-solid fa-cart-shopping"></i>
                <span className="" >
                  Add To Cart
                </span>
              </button>

            </div>

          </div>
        </div>        
      </div>

    </div>
  )
}

export default Product