import { NavLink } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

// TODO: icons-url = https://react-icons.github.io/react-icons/



export const Hero = () => {
  return (
    <section className="p-6 bg-white">
      <div className="text-center mt-16 mb-8">
        <h1 className="font-bold md:text-5xl text-3xl my-4">Meet people from anywhere in the world</h1>
        <p
          className="max-w-2xl mx-auto"
        > Meet new people nearby or from the other side of the world. This is the perfect place to connect, 
          where everyone is eager to get to know you! Join groups with shared interests, start meaningful conversations, 
          and create new friendships. Dive into a community that welcomes you with open arms. Don’t miss out {' '}
          <NavLink className='underline text-blue-600' to='/auth/login'>log in</NavLink> to start your journey today!
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
