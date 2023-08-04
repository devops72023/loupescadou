import React, { useContext } from "react";
import { AppContext } from "../../../App";

function BasketItem({item}) {
  const { basket, setBasket } = useContext(AppContext)
  const addQuantity = () => {
    let arr = Array.from(basket)
    basket.map((productItem, index) => {
        if ( productItem.product._id == item.product._id ){
            setBasket(prv=>{
                arr[index].quantity = arr[index].quantity + 1;
                return arr;
            });
        }
    })
  }
  const decreaseQuantity = () => {
    let arr = Array.from(basket)
    basket.map((productItem, index) => {
        if ( productItem.product._id == item.product._id ){
            setBasket(prv=>{
                arr[index].quantity = arr[index].quantity - 1;
                return arr;
            });
        }
    })
  }
  return (
    <div
      className="w-full flex flex-col justify-center items-center border-gray-400 rounded-xl border-[1px]
                    @[390px]/item:flex-row @[390px]/item:h-fit @[390px]/item:justify-start"
    >
      <img
        className="h-28 object-contain max-w-[100px] md:h-full w-2/3 items-center md:w-full rounded-2xl"
        src={`${import.meta.env.VITE_ASSETS}/Products-images/${item.product.photo}`}
        alt=""
      />

      <div className="flex text-white relative items-center space-y-1 md:space-y-0 md:items-start w-full flex-col md:gap-y-3 p-3 md:p-4">
        <p className=" text-2xl md:text-2xl line-clamp-1">{item.product.title}</p>
        <p className="text-sm line-clamp-1">{item.product.description}</p>
        <div className="flex md:self-end justify-evenly md:justify-between w-full items-center">
          <button
            onClick={decreaseQuantity}
            className="flex w-7 md:w-10 font-black rounded-[10px] text-3xl h-7 md:h-10 text-black justify-center items-center bg-white cursor-pointer"
          >
            <p>
              <i className="fa-solid fa-minus fa-xs" />
            </p>
          </button>
          <div className="flex w-28 md:w-32 rounded-full text-xl md:h-10 h-7 text-white justify-center items-center bg-transparent border-white border-[1px]">
            <p>{item.quantity}</p>
          </div>
          <div className="flex w-7 md:w-10 font-black rounded-[10px] text-3xl h-7 md:h-10 text-black justify-center items-center bg-white cursor-pointer">
            <p onClick={addQuantity}>
              <i className="fa-solid fa-plus fa-xs"></i>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BasketItem;
