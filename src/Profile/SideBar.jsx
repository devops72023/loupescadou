import React, { useContext } from 'react'
import { AppContext } from '../App'

function SideBar() {
    const { currentUser, setIsAuth } = useContext(AppContext)
    const logout = () => {
        localStorage.removeItem('jwt')
        setIsAuth(false)
    }
  return (
    <div className='flex flex-col space-y-5 min-w-[200px] md:space-y-10 w-full md:w-1/3 font-poppins text-white border-b md:border-b-0 md:border-r border-gray-300'>
      <div className='flex flex-col space-y-1 items-center' >
          <div className=' rounded-full border-double shadow border-sky-500 border-4' >
            <img src={ `${ import.meta.env.VITE_ASSETS }/Profile-pictures/${currentUser?.image}` } className="h-32 rounded-full" alt="" />                    
          </div>
          <b className='font-bold text-2xl' > { currentUser?.name } </b>
          <p className='text-xs' ></p>
      </div>

      <ul className='flex md:flex-col justify-between space-x-3 md:space-x-0 rounded py-2 md:space-y-5 w-full md:px-5' >

          <li onClick={() => {}} className='w-1/3 md:w-full cursor-pointer hover:text-white duration-300 flex flex-col md:flex-row items-center text-gray-50 space-y-1 md:space-x-2' >
              <i className='fa-regular fa-user md:text-2xl'></i>
              <p className='text-center text-xs md:text-base md:text-left'>Modifier Profile</p>
          </li>

          <li className='w-1/3 md:w-full cursor-pointer hover:text-white duration-300 flex flex-col md:flex-row items-center text-gray-50 space-y-1 md:space-x-2' >
              <i className='fa-solid fa-cube md:text-2xl'></i>
              <p className='text-center text-[11px] md:text-base md:text-left' onClick={() => router.push('/userProfile/orders')} >Mes Commandes</p>
          </li>

          <li onClick={logout} className='w-1/3 md:w-full cursor-pointer hover:text-white duration-300 flex flex-col md:flex-row items-center text-gray-50 space-y-1 md:space-x-2' >
              <i className='fa-solid fa-right-from-bracket md:text-2xl'></i>
              <p className='text-center text-xs md:text-base md:text-left' >Se déconnecter</p>
          </li>
      </ul>

    </div>
  )
}

export default SideBar