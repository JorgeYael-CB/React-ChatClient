import { NavLink } from "react-router-dom"
import { IRoute } from "../interfaces/routes"



export const LinkNav = ({element}: {element: IRoute}) => {
  return (
    <li>
        <NavLink
          to={element.path}
          className={
            (e) => (
              `transition-all block py-2 px-3 md:p-0 text-gray-500 font-normal
              ${e.isActive ? 'bg-blue-200 md:text-black md:dark:bg-transparent' : ''}
              rounded md:bg-transparent`
            )
          }
          aria-current="page">{element.title}
        </NavLink>
    </li>
  )
}
