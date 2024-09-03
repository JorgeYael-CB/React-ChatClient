import { NavLink } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

// TODO: icons-url = https://react-icons.github.io/react-icons/



export const Hero = () => {
  return (
    <section className="p-6 bg-white">
      <div className="text-center my-12">
        <h1 className="font-bold md:text-5xl text-3xl my-4">Conoce gente de cualquier parte del mundo</h1>
        <p
          className="max-w-2xl mx-auto"
        >Podras conocer a gente cerca de ti o del otro lado del mundo. Aqui es el lugar perfecto para conocer gente, el lugar donde todos estan 
          dispuestos a conocerte, <NavLink className='underline text-blue-600' to='/auth/login'>inicia sesion</NavLink> para empezar!.
        </p>
      </div>

      <div className="mb-6 flex justify-center gap-6">
        <NavLink
          to='/auth/login'
          className="bg-blue-600 text-white font-semibold text-center rounded-lg px-4 py-1 transition-colors hover:bg-blue-700"
        >
          Start <FaArrowRight className="inline ml-0.5" />
        </NavLink>

        <NavLink
          to='#about'
          className="bg-white border border-blue-600 text-gray-600 font-semibold text-center rounded-lg px-4 py-1 transition-colors hover:border-blue-700"
        >
          Read more<FaArrowRight className="inline ml-0.5" />
        </NavLink>
      </div>

      <div className="max-w-xl mx-auto">
        <img src="social-media.gif" alt="Hero image" />
      </div>
    </section>
  )
}
