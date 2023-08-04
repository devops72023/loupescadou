import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../../App'
import BasketItem from './BasketItem'

function Basket() {
  const { isBasketOpen, setIsBasketOpen, basket, setBasket } = useContext(AppContext)
  const [ total, setTotal ] = useState(0)
  const handleClose = () => {setIsBasketOpen(false)}
  useEffect(()=>{
    let TOTAL = 0;
    basket.map(item => {
      TOTAL = TOTAL + (item.quantity * item.product.price)
      setTotal(TOTAL)
    })
  }, [basket])
  return (
    <div
      onClick={handleClose} 
      className={`flex w-full h-screen fixed top-0 overflow-hidden trasnition-500 ${isBasketOpen ? 'left-0 w-full' : 'left-[-100%] w-0'} z-50 `}>

      {/* Basket */}
      <div
        onClick={(e)=>e.stopPropagation()} 
        className="absolute w-full max-w-[500px] h-screen bg-light-blue-500 bg-opacity-20 backdrop-blur-3xl font-dancing text-white px-5 py-7 shadow-3xl flex flex-col gap-6">
        <div className="flex items-center gap-3 h-fit">
          <img src="/src/assets/Basket-icons/basket.png" className='w-[50px] h-[40px] object-contain object-center' />
          <h2 className="text-4xl">Basket</h2>
          <i onClick={handleClose}  className="fas fa-close ml-auto w-[40px] h-[40px] flex justify-center items-center bg-white rounded-full text-dark-blue-500 text-3xl cursor-pointer"></i>
        </div>
        <div className="w-full @container/item mb-auto h-full overflow-hidden overflow-y-auto pr-3">
          <div className="flex flex-col justify-center gap-3 ">
          {
            basket && basket.map((item, index)=>{
              return <BasketItem key={index} item={item} />
            })
          }
          </div>
        </div>
        <div className="flex flex-col w-full h-fit gap-2">
          <div className="flex justify-between ">
            <p className="text-2xl">Total</p>
            <p className="text-3xl">{total} (€)</p>
          </div>
          <button className='w-full px-3 py-3 bg-white rounded-lg text-dark-blue-500 text-3xl'>
            Checkout
          </button>
        </div>
      </div>

    </div>
  )
}

export default Basket