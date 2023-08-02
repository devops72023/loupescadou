import React from 'react'
import { Outlet } from 'react-router-dom';
import background from '../../assets/images/background/bg.png'

function Background () {
  return (
    <div className='absolute -z-30 flex justify-center items-center flex-col w-full h-full'>
        <img src={background} className='absolute min-h-screen h-[4002px] w-full object-center object-fill' />
        <iframe
            className="fixed bottom-0 min-h-screen w-full -z-0"
            src="/src/assets/bubbles-css/index.html" />
    </div>
  )
}

function BackgroundLayout() {
    console.log('Background')
  return (
    <>
        <Background />
        <Outlet />
    </>
  )
}

export default BackgroundLayout