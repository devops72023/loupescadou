import { useContext, useEffect } from "react"
import { AppContext } from "../../App"
import Login from "../Auth/Login"
import { Navigate, Outlet, redirect, useNavigate } from "react-router-dom"

export default function Locked({ children }){
    const { isAuth, setLoaded } = useContext(AppContext)
    const navigate = useNavigate();
    useEffect(() => {
        setLoaded(true)
console.log("Loaded")
      },[]);
    return (
        isAuth == true
        ? <Navigate to='/user-profile' />
        : <Outlet />
    )
}