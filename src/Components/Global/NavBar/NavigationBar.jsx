import React from 'react'
import logo from '../../../assets/logo.png'
import TopPart from './TopPart'
import Menu from './Menu'
import useMeasure from 'react-use-measure'
import PhoneMenu from './PhoneMenu'

const NavigationBar = () => {
  const [ ref, bounds ] = useMeasure()
  return (
    <div
      ref={ref} 
      className={`flex flex-col ${ bounds.width > 720 ? 'fixed' : '-mt-[136px] mb-[20px]' } top-0 left-0 w-full z-40`}>
        {
          bounds.width > 720 
          ? <>
              <TopPart />
              <Menu />
            </>
          : <>
              <div className="flex w-fit mx-auto bg-black bg-opacity-5 backdrop-blur-md px-5 rounded-b-[90px] overflow-hidden">
                <img src={logo} alt="" className='h-[120px] -mt-5' />
              </div>
              <PhoneMenu />
            </>
        }
    </div>
  )
}

export default NavigationBar