import React, { useContext, useEffect } from 'react'
import CatgoriesCard from './CatgoriesCard'
import { AppContext } from '../../App'
import AboutUs from './AboutUs'
import PopularProducts from '../Global/ProductCard'
import Livraison from './livraison';

function Home() {
  const { setLoaded } = useContext(AppContext)
  useEffect(() => {
    setLoaded(true)
console.log("Loaded")
  },[]);
  return (
    <div className='flex flex-col justify-center gap-12 mt-4'>
      <CatgoriesCard />
      <Livraison />
      <AboutUs />
      <PopularProducts />
    </div>
  )
}

export default Home