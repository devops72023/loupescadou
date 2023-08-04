import React, { useContext } from 'react'
import { Outlet } from 'react-router-dom';
import NavigationBar from './NavigationBar';
import { AppContext } from '../../../App';
import Loading from '../Loading';
import Footer from '../Footer';

function NavbarLayout() {
  
  const { loaded } = useContext(AppContext)
  return (
    <>
        <NavigationBar />
        <Outlet />
        { !loaded ? (<Loading />) : ''}
        <Footer />
    </>
  )
}

export default NavbarLayout