import React from 'react'
import logo from '../../../assets/logo.png'
import TopPart from './TopPart'
import Menu from './Menu'

const NavigationBar = () => {
  return (
    <div className="flex flex-col ">
        <TopPart />
        <Menu />
    </div>
  )
}

export default NavigationBar