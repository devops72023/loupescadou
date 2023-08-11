import { useContext, useEffect } from "react"
import { AppContext } from "../../App"
import Login from "../Auth/Login"
import { Outlet } from "react-router-dom"

export default function ProtectedRoute({ children }){
    const { isAuth, setLoaded } = useContext(AppContext)
    useEffect(() => {
        setLoaded(true)
console.log("Loaded")
      },[]);
    return (
        isAuth 
        ? <Outlet /> 
        : <Login />
    )
}