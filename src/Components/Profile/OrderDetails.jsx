import { Dialog, Transition } from '@headlessui/react';
import React, { Fragment, useRef } from 'react'

export default function OrderDetails( { setOpen , open , order } ) {

    const ref = useRef(null);

    function convertSqlDateToJavascriptDate(sqlDate){
        let date = new Date(sqlDate);
        return date.toLocaleDateString()
    };

    const scroll = (scrollOffset) => {
        ref.current.scrollLeft += scrollOffset;
    };


  return (
    <Transition.Root show = {open} as={Fragment} >
        <Dialog as = "div"
                className='fixed z-50 inset-0 overflow-y-auto text-white'
                onClose={setOpen} >
            <div className = "flex items-end justify-center min-h-[800px] sm:min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0 " >
                <Transition.Child 
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                    >
                        <Dialog.Overlay className = "fixed inset-0 bg-blue-900 bg-opacity-90 transition-opacity">
                            {/* <Bubbles2 /> */}
                        </Dialog.Overlay>
                </Transition.Child>
+
                <span className = "hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden = "true" >
                    &#8203;
                </span>

                <Transition.Child 
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    enterTo="opacity-100 translate-y-0 sm:scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                    leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                >
                    <div className = " font-poppins inline-block glass rounded-lg px-4 py-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-md sm:w-full sm:p-6" >

                        <div className='w-full flex flex-col items-center space-y-5' >
                            <div className=' flex items-center space-x-3 mx-auto container glass justify-center text-white py-2 text-center rounded'>
                                <i class="fa-solid fa-box-open text-3xl"></i> 
                                <p>RÉCAPITULATIF DE LA COMMANDE</p> 
                            </div>

                            <div className=' flex flex-col items-center pt-2 pb-3 mx-auto container space-y-1 border-b' >
                                <p className='text-gray-50 font-semibold text-sm'>Votre Commande nº </p>
                                <span className='font-semibold text-sm text-red-500' >#{order._id}</span>
                            </div>

                            <div className='flex flex-col items-center pb-1 mx-auto container space-y-2' >
                                <i class="fa-solid text-2xl fa-calendar-days"></i>
                                <span className=' text-red-100 font-semibold' >{convertSqlDateToJavascriptDate(order.createdAt)}</span>
                            </div>

                            <div className='relative flex flex-col space-y-1 items-center pt-4 pb-2 mx-auto container border-t space-x-4' >

                                <div className='flex items-center justify-between w-full space-x-2' >
                                    <p className='text-gray-50 font-semibold text-sm '>Votre Produits :  </p>
                                    <span className='font-semibold text-red-100' >{ order.products.length }</span>
                                </div>

                                <button onClick={() => scroll(-50)} className='z-10 top-1/2 absolute -left-5 border rounded-full px-2' >
                                    <i class="text-xl fa-solid fa-arrow-left"></i>
                                </button>
                                
                                <button onClick={() => scroll(+50)} className='z-10 top-1/2 absolute -right-5 border  rounded-full px-2' >
                                    <i class="text-xl fa-solid fa-arrow-right"></i>
                                </button>

                                <div ref={ref} className='relative w-full flex  gap-3 overflow-x-scroll scrollbar-hide' >

                                    {
                                        order.products.map(item => {
                                            const product = item.product
                                            return (
                                                <div key={product._id} className=' flex flex-col glass items-center space-y-1 rounded px-2 py-2'>
                                                    <img className='h-12' src={ `${import.meta.env.VITE_ASSETS}/Products-images/${product.photo}` } alt="" /> 
                                                    <h1 className='text-xs line-clamp-1' >{ product.title }</h1>
                                                    <p className='text-xs w-full' > Quantity : <span className='font-semibold' >{ item.quantity }</span> </p>
                                                </div>
                                            
                                            )
                                        })
                                    }
                                </div>
                            </div>

                            <div className='flex pt-4 pb-3 mx-auto container border-t space-x-4 border-b' >
                                <p className='text-gray-50 font-semibold text-sm '>Status :  </p>
                                <span className='font-semibold text-red-100' >{ order.status }</span>
                            </div>

                            <strong className='text-4xl text-red-100 font-semibold' >{ order.amount }€</strong>

                        </div>

                    </div>
                </Transition.Child>

            </div>

        </Dialog>


    </Transition.Root>
  )
}
