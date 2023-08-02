import React from 'react'
import { Outlet } from 'react-router-dom';
import NavigationBar from './NavigationBar';

function NavbarLayout() {
  return (
    <>
        <NavigationBar />
        <Outlet />
    </>
  )
}

export default NavbarLayout