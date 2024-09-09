import { IUser } from "@/interfaces/Api"
import { useRef, useState } from "react";
import { NavLink } from "react-router-dom";


interface Props {
  user: IUser;
}


export const UpdatedProfile = ( { user }: Props ) => {
  const [newImageProfile, setNewImageProfile] = useState('https://static-00.iconduck.com/assets.00/profile-default-icon-2048x2045-u3j7s5nj.png');
  const inputFileRef = useRef<HTMLInputElement>(null);




  return (
    <main>
      <h2 className="text-center text-5xl text-indigo-600 mt-16 font-bold">Actualiza tu informacion</h2>

      <form className="flex flex-col gap-16 px-8 py-4 mt-20 max-w-2xl mx-auto bg-white">

        <div className="flex flex-col gap-3">
          <h4 className="text-center text-2xl font-medium">Actualiza tu foto de perfil</h4>

          <div className="flex flex-row justify-around">
            <img
              className="w-52 h-56 transition-all cursor-pointer border p-4 bg-white rounded-sm"
              src={`${user.profileImage}`}
              alt={`Profile image ${user.name}`}
            />
            <img
              className="w-52 h-56 transition-all cursor-pointer border p-4 bg-white rounded-sm"
              src={`${newImageProfile}`}
              alt={`New image default`}
            />
          </div>

          <div className="mt-6 flex justify-center">
            <input
              ref={inputFileRef}
              type="file"
              className="hidden"
            />
            <p
              onClick={ () => inputFileRef?.current?.click() }
              className='transition-colors bg-green-500 hover:bg-green-700 text-white md:w-1/2 font-semibold px-4 rounded-md py-1 text-center hover:cursor-pointer'
            >Update profile image
            </p>
          </div>
        </div>

        <div>
          <h4 className="text-center text-2xl font-medium">⚽Actualiza tus deportes⚽</h4>

          <select name="deportes" id="deportes">
            <option value="futbol">Futbol</option>
            <option value="basquetbol">basquetbol</option>
            <option value="karate">karate</option>
            <option value="boxeo">boxeo</option>
          </select>

          <div className="flex gap-14 justify-center">
            <ul id="misDeportes">
              {user.deports?.map( d => (
                <li key={d.id}>{d.deport}</li>
              ))}
            </ul>

            <ul id="nuevosDeportes">
              <li>Boxeo</li>
            </ul>
          </div>
        </div>


        <div className="flex flex-row items-center justify-center gap-7 mt-4">
          <NavLink className='bg-red-500 text-white font-semibold px-4 rounded-md py-1' to='/'>Cancelar</NavLink>
          <button className='bg-green-500 text-white font-semibold px-4 rounded-md py-1'>Update</button>
        </div>
      </form>
    </main>
  )
}

