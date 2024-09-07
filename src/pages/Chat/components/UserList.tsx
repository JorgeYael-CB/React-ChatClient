import { IUser } from "@/interfaces/Api"
import { FormEvent } from "react"


export const UserList = ( {user: {
  IsActive,
  canUploadImages,
  country,
  createdAt,
  description,
  id,
  images,
  name,
  profileImage,
  roles,
  updatedAt,
  age,
  deports,
  donations,
  email,
  emojis,
  points
}}: {user: IUser} ) => {



  function onSubmit( e:FormEvent<HTMLFormElement> ){
    e.preventDefault();

    console.log(`Diste click al usuario: ${id}`);
    //TODO: traer la data de la base de datos del usuario y mostrar el componente "ShowProfile";
  }


  return (
    <form className='mx-3 my-4 flex items-center shadow-md bg-white p-3 rounded-sm' onSubmit={onSubmit}>

      <button type="submit">
        <img
          className='rounded-full w-12 h-12'
          src={`${profileImage}`} alt={`Profile image of ${name}`} />
      </button>

      <div className='flex text-black font-light flex-col ml-6'>
        <button type="submit" className="font-normal hover:underline">{name}</button>
        <p>{country}</p>
      </div>

    </form>
  )
}
