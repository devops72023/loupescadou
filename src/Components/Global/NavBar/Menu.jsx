import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../../assets/logo.png'
import { AppContext } from '../../../App'

function Menu() {
    const { activeTab, setActiveTab, isAuth } = useContext(AppContext)
    const tabs = [
        { to : '/', txt : 'Accueil'},
        { to : '/histoire', txt : 'Notre Histoire'},
        { to : '/call', txt : 'Vente en ligne'},
        { to : '/quoi-De-Neuf', txt : 'Quoi de neuf'},
      ]
    
    const handleTabs = (activeTab) => {
        setActiveTab(activeTab)
    }
    return (
        <div className="w-full flex @container/menu px-5">
            <div className="max-w-[1444px] w-full mx-auto h-[60px] bg-black bg-opacity-70 backdrop-blur-md rounded-2xl flex items-center justify-between mt-3 p-0 shadow-xl">
                <div className="h-[60px] bg-white rounded-2xl">
                    <Link to="/">
                        <img src={logo}className="w-full h-[60px]" />
                    </Link>
                </div>

                {
                tabs.map(tab => (
                    <Link key={tab.to} onClick={() => handleTabs(tab.txt)} to={tab.to} className={` ${activeTab == tab.txt && 'activeItem'} h-fit`}>
                    <h4 className="font-dancing text-light-blue-100 transition-all hover:text-light-blue-400"> { tab.txt } </h4>
                    </Link>
                ))
                }
                {
                !isAuth && (
                    <>
                    <Link onClick={() => handleTabs('Connexion')} to="/Login" className={` ${activeTab == 'Connexion' && 'activeItem'} h-fit`} >
                        <h4 className="font-dancing text-light-blue-100 transition-all hover:text-light-blue-400">Connexion</h4>
                    </Link>

                    <Link onClick={() => handleTabs('Sinscrire')} to="/Signup" className={` ${activeTab == 'Sinscrire' && 'activeItem'} h-fit`} >
                        <h4 className="font-dancing text-light-blue-100 transition-all hover:text-light-blue-400">Sinscrire</h4>
                    </Link>
                    </>

                )
                }
                <div className="flex gap-4 justify-center items-center bg-white py-2 px-3 rounded-xl mr-3">
                <div
                    className="text-[#79c8f5] cursor-pointer relative baskect"
                    onClick={() => dispatch(openBasket({ toggled: true }))}
                >
                    <i className="fa-solid fa-cart-shopping transition-all hover:text-light-blue-700" style={{fontSize:'20px'}}></i>
                    {5 > 0 && (
                    <div className="rounded-full w-5 h-5 bg-[#f07e86] text-white text-xs flex justify-center items-center absolute -top-2 -right-3">
                        <p>{5}</p>
                    </div>
                    )}
                </div>
                <i className='fas fa-search cursor-pointer text-light-blue-400 transition-all hover:text-light-blue-700' style={{fontSize: '20px'}}></i>
                </div>
            </div>
        </div>
    )
}

export default Menu