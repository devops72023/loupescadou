import { createContext, useContext, useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavbarLayout from './Components/Global/NavBar/NavbarLayout';
import BackgroundLayout from './Components/Global/Background';
import './App.css'
import Home from './Components/Home/Home';
import { AnimatePresence } from 'framer-motion';
import Login from './Components/Auth/Login';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProtectedRoute from './Components/Global/Protected';
import Register from './Components/Auth/Register';
import Locked from './Components/Auth/LockedRoute';
import Profile from './Components/Profile/Profile';
import Category from './Components/Category/Category';
import Product from './Components/Product/Product';
import Call from './Components/Call/Call';
import NotreHistoire from './Components/NotreHistoire/NotreHistoire';
import MyOrders from './Components/Profile/MyOrders';
import QuoiDeNeuf from './Components/QuoiDeNeuf/quoi-De-Neuf';
import Success from './Components/StripeRedirected/Success';

const AppContext = createContext()
const AppProvider = ({children})=>{
  const [ activeTab, setActiveTab ] = useState("Accueil")
  const [ isAuth, setIsAuth ] = useState(false)
  const [ currentUser, setCurrentUser ] = useState({})
  const [ loaded, setLoaded ] = useState(false)
  const [ isBasketOpen, setIsBasketOpen ] = useState(false)
  const oldState = JSON.parse(localStorage.getItem('state')) || [];
  const [ basket, setBasket ] = useState(oldState)

  const stateStore = {
    activeTab,setActiveTab,
    isAuth,setIsAuth,
    currentUser,setCurrentUser,
    loaded,setLoaded,
    isBasketOpen,setIsBasketOpen,
    basket,setBasket,
  }

  async function checkAuth(){

    await fetch(`${import.meta.env.VITE_API}/auth/verify-token`, {
        method: 'GET',
        headers: { 'Authorization': 'Bearer ' + localStorage.getItem('jwt') },
    })
    .then(res => res.json())
    .then(res => {
        if (res._id !== undefined) {
          setCurrentUser(res)
          setIsAuth(true);
          setLoaded(true);
        }else{
          setIsAuth(false);
          setLoaded(true);
        }
    })
    .catch(err => {
        console.error(err);
        setIsAuth(false);
        setLoaded(true);
    });
  }
  useEffect(()=>{
    localStorage.setItem('state', JSON.stringify(basket));
    let arr = Array.from(basket);
    basket.map((item, index) => {
      if (!(item.quantity > 0)){
          setBasket(prv=>{
              arr.splice(index, 1);
              return arr;
          });
      }
  })
  }, [basket])
  useEffect(() => {
    checkAuth();
  },[loaded]);
  return (
    <AppContext.Provider value={stateStore} >
      {children}
    </AppContext.Provider>
  )
}

function App() {

  return (
    <BrowserRouter>
      <AppProvider>

        <ToastContainer />

        <AnimatePresence>
          <Routes>
            <Route element={<BackgroundLayout />}>
              <Route element={<NavbarLayout />}>
                <Route path='/' element={<Home />} />
                <Route path='/notre-histoire' element={<NotreHistoire />} />
                <Route path='/quoi-de-neuf' element={<QuoiDeNeuf />} />
                <Route path='/categories/:id' element={<Category />} />
                <Route path='/products/:id' element={<Product />} />
                <Route path='/success' element={<Success />} />
                <Route path='/call' element={<Call />} />
                {/* these two routes are locked when the user is logged in */}
                <Route element={<Locked />}>
                  <Route path='/login' element={<Login />} />
                  <Route path='/register' element={<Register />} />
                </Route>
                <Route element={<ProtectedRoute />}>
                  <Route path='/user-profile' element={<Profile />} />
                  <Route path='/user-profile/orders' element={<MyOrders />} />
                </Route>
              </Route>
              
            </Route>
          </Routes> 
        </AnimatePresence>

      </AppProvider>
    </BrowserRouter>
  )
}

export default App
export { AppContext }