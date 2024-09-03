import { createBrowserRouter } from "react-router-dom";
import { Home } from "./Home";
import { IRoute } from "../interfaces/routes";
import { Login } from "./Auth";



export const routes:IRoute[] = [
    {
        path: '',
        element: <Home/>,
        title: 'Home'
    }
];

export const routesAuth: IRoute[] = [
    {
        element: <Login/>,
        path: '/login',
        title: 'Sign in'
    }
];



export const router = createBrowserRouter([
    {
        path: '',
        children: routes
    },
])
