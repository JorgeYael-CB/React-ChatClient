import { Navigate, Outlet } from "react-router-dom";
import { AuthStore } from "../../store";



export const Auth = () => {
  const { isLogged } = AuthStore();


  return (
    <div>
      {
        !isLogged
        ? <Outlet/>
        : <Navigate to='/'/>
      }
    </div>
  )
}
