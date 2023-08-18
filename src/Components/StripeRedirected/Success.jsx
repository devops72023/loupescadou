import React, { useContext, useEffect } from 'react'
import paymentImage from '../../assets/payment.webp'
import { Link } from 'react-router-dom'
import { AppContext } from '../../App';

function Success() {
    const { setLoaded } = useContext(AppContext)
    useEffect(() => {
        setLoaded(true)
      },[]);
  return (
    <div className="w-full flex justify-center items-center">
        <div className="glass max-w-[1434px] w-[90%] p-10 rounded-2xl flex flex-col md:flex-row">
            <div className="w-full">
                <img src={paymentImage} className='h-64 mx-auto w-full object-cover max-w-fit ' alt="" />
            </div>
            <div className='text-center w-full space-y-6 flex flex-col justify-center items-center font-dancing' >
                <h1 className='text-5xl text-gray-100' >Paiement réussi</h1>
                <p className='text-white leading-6 text-center '>Merci d&apos;avoir choisi Pescadou, nous vous enverrons une confirmation une fois votre article expédié, si vous souhaitez vérifier l&apos;état de votre commande, veuillez appuyer sur le lien ci-dessous</p>
                <div className=' font-poppins flex items-center flex-wrap gap-3 '>
                    <Link to={`/user-profile/orders`} className='min-w-fit mx-auto font-poppins text-white rounded py-2 px-5 border hover:bg-transparent duration-300' >Mes Commandes</Link>
                    <Link to='/' className='min-w-fit mx-auto font-poppins text-white rounded py-2 px-5 border border-transparent hover:border-white hover:bg-transparent duration-300' >Retour a l'Accueil</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Success