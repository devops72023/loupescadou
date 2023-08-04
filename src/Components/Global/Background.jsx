import React from 'react'
import { Outlet } from 'react-router-dom';
import background from '../../assets/images/background/bg.png'
import Basket from './Basket/Basket';

function Background () {
  return (
    <div className='fixed top-0 -z-30 flex justify-center items-center flex-col w-full h-full @container/bg'>
        <img src={background} className='absolute min-h-screen h-screen w-full object-center object-fit' />
        <iframe
            className="fixed bottom-0 min-h-screen w-full -z-0"
            src="/src/assets/bubbles-css/index.html" />
    </div>
  )
}

function BackgroundLayout() {
  return (
    <>
        <Background />
        <Basket />
        <div className="mt-[136px]">
            <Outlet/>
        </div>
    </>
  )
}

export default BackgroundLayout