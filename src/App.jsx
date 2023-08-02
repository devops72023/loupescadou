import { createContext, useContext, useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavbarLayout from './Components/Global/NavBar/NavbarLayout';
import BackgroundLayout from './Components/Global/Background';
import './App.css'
import Home from './Components/Home/Home';

const AppContext = createContext()
const AppProvider = ({children})=>{
  const [ activeTab, setActiveTab ] = useState("Accueil")
  const [ isAuth, setIsAuth ] = useState(true)
  const [ currentUser, setCurrentUser ] = useState({})
  const [ loaded, setLoaded ] = useState(false)

  const stateStore = {
    activeTab,setActiveTab,
    isAuth,setIsAuth,
    currentUser,setCurrentUser,
    loaded,setLoaded,
  }
  async function checkAuth(){

    await fetch(`${import.meta.env.VITE_API_URL}auth/verifyToken`, {
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
  useEffect(() => {
    checkAuth();
  },[]);
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

        <Routes>
          <Route element={<BackgroundLayout />}>
            <Route element={<NavbarLayout />}>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<h1>About us</h1>} />
            </Route>
            
            <Route path='/login' element={<h1>login</h1>} />
          </Route>
        </Routes> 

      </AppProvider>
    </BrowserRouter>
  )
}

export default App
export { AppContext }