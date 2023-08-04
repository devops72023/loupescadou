import { useContext } from "react"
import { AppContext } from "../../App"
import Login from "../Auth/Login"
import { Navigate, Outlet, redirect, useNavigate } from "react-router-dom"

export default function Locked({ children }){
    const { isAuth } = useContext(AppContext)
    const navigate = useNavigate();
    return (
        isAuth == true
        ? <Navigate to='/user-profile' />
        : <Outlet />
    )
}