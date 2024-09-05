import { AuthStore } from "@/store"
import { Navigate, Outlet } from "react-router-dom";



export const AuthChat = () => {
  const { isLogged } = AuthStore();


  return (
    <>
      {
        isLogged
        ? <Outlet/>
        : <Navigate to='/auth/login'/>
      }
    </>
  )
}
