import { useContext } from "react"
import { AppContext } from "../../App"
import Login from "../Auth/Login"
import { Outlet } from "react-router-dom"

export default function ProtectedRoute({ children }){
    const { isAuth } = useContext(AppContext)

    return (
        isAuth 
        ? <Outlet /> 
        : <Login />
    )
}