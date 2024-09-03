import { createBrowserRouter } from "react-router-dom";
import { Home } from "./Home";
import { IRoute } from "../interfaces/routes";
import { Login } from "./Auth";
import { Terms } from "./Terms";
import { NavBar } from "../components";



export const routes:IRoute[] = [
    {
        path: '',
        element: <Home/>,
        title: 'Home'
    },
    {
        path: '/terms',
        element: <Terms/>,
        title: 'Terms'
    },
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
        element: <NavBar routes={routes}/>,
        children: routes
    },
])
