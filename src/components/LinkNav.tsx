import { NavLink } from "react-router-dom"
import { IRoute } from "../interfaces/routes"



export const LinkNav = ({element}: {element: IRoute}) => {
  return (
    <li>
        <NavLink
          to={element.path}
          className={ (e) => `block py-2 px-3 md:p-0 text-white ${e.isActive ? 'bg-blue-700' : ''} rounded md:bg-transparent md:text-blue-700 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent` }
          aria-current="page">{element.title}
        </NavLink>
    </li>
  )
}
