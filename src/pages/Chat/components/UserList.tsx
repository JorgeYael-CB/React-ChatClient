import { IUser } from "@/interfaces/Api"
import { FormEvent, useState } from "react"
import { ShowProfile } from "./ShowProfile";


export const UserList = ( {user, user: { country, id, name, profileImage }}: {user: IUser} ) => {

  const [showModalProfile, setShowModalProfile] = useState(false);

  function onSubmit( e:FormEvent<HTMLFormElement> ){
    e.preventDefault();

    setShowModalProfile(true);
  }


  return (
    <>
      {
        showModalProfile
        &&
        <ShowProfile user={user} open onChange={ setShowModalProfile }/>
      }
      <form className='mx-3 my-4 flex items-center shadow-md bg-white p-3 rounded-sm' onSubmit={onSubmit}>

      <button type="submit">
        <img
          className='rounded-full w-12 h-12'
          src={`${profileImage}`} alt={`Profile image of ${name}`} />
      </button>

      <div className='flex text-black font-light flex-col ml-6'>
        <button type="submit" className="font-normal hover:underline">{name}</button>
        <img className="w-6 h-4 mt-1" src={`/countrys/${country.toLocaleLowerCase()}.png`} alt={`country of ${name}`} />
      </div>

      </form>
    </>
  )
}
