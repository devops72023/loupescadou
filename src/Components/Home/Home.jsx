import React, { useContext, useEffect } from 'react'
import CatgoriesCard from './CatgoriesCard'
import { AppContext } from '../../App'
import AboutUs from './AboutUs'
import PopularProducts from '../Global/ProductCard'

function Home() {
  const { setLoaded } = useContext(AppContext)
  useEffect(()=>{
    setTimeout(()=>{setLoaded(true)},500)
  })
  return (
    <div className='flex flex-col justify-center gap-12 mt-[136px]'>
      <CatgoriesCard />
      <AboutUs />
      <PopularProducts />
    </div>
  )
}

export default Home