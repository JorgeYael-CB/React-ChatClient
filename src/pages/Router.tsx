import { createBrowserRouter } from "react-router-dom";
import { Home } from "./Home";
import { IRoute } from "../interfaces/routes";
import { Auth, Login, Register } from "./Auth";
import { Terms } from "./Terms";
import { NavBar } from "../components";
import { Faq } from "./Faq";
import { Privacy } from "./Privacy";
import { AuthChat, Chat } from "./Chat";



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
    {
        path: '/privacy',
        element: <Privacy/>,
        title: 'Privacy'
    },
    {
        path: '/faq',
        element: <Faq/>,
        title: 'F.A.Q.'
    },
];

export const routesAuth: IRoute[] = [
    {
        element: <Login/>,
        path: '/auth/login',
        title: 'Sign in'
    },
    {
        element: <Register/>,
        path: '/auth/register',
        title: 'register'
    },
];


export const routesChat: IRoute [] = [
    {
        element: <Chat/>,
        path: '/chat/:id',
        title: 'Chat'
    }
];



export const router = createBrowserRouter([
    {
        path: '',
        element: <NavBar routes={routes}/>,
        children: routes
    },
    {
        path: '/auth',
        element: <Auth/>,
        children: routesAuth
    },
    {
        path: '/chat',
        element: <AuthChat/>,
        children: routesChat
    }
])
