import React from 'react'
import { Link } from 'react-router-dom'

function TopPart() {
  return (
    <div className="flex gap-3 px-5 py-3 justify-center items-center bg-dark-blue-500">
        <p className="text-white text-sm ml-auto mr-auto">! Livraison a domicile poissons frais partout en France en 24H </p>
        {/* <p className='text-white'>|</p> */}
        <div className="flex gap-3">
          <Link
            to='/user-profile' 
            className="flex gap-2 justify-center items-center text-white text-sm">
            <i className="fas fa-user"></i>
            <p>Mon compte</p>
          </Link>
          <Link className="flex gap-2 justify-center items-center text-white text-sm">
            <i className="fas fa-box"></i>
            <p>Suivre ma commande</p>
          </Link>
        </div>
    </div>
  )
}

export default TopPart