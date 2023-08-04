import React from 'react'
import logo from '../../../assets/logo.png'
import TopPart from './TopPart'
import Menu from './Menu'

const NavigationBar = () => {
  return (
    <div className="flex flex-col fixed top-0 left-0 w-full z-40">
        <TopPart />
        <Menu />
    </div>
  )
}

export default NavigationBar