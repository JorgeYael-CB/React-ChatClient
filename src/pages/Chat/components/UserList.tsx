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
    <>
      <div key={id} className={`user-card ${IsActive ? 'active' : 'inactive'} p-4 mb-4 rounded-lg border shadow-md`}>
        <form onSubmit={ onSubmit } className="flex items-center mb-2">
          <button type="submit">
            <img
              src={profileImage}
              alt={`Profile of ${name}`}
              className="rounded-full h-12 w-12 mr-3"
            />
          </button>
          <div>
            <button type="submit" className="text-lg font-semibold text-white hover:underline">{name}</button>
            <p className="text-sm text-gray-500">{email}</p>
          </div>
        </form>
        <p className="text-sm text-gray-700 mb-2">Country: {country}</p>
        <p className="text-sm text-gray-700 mb-2">Age: {age}</p>
        <p className="text-sm text-gray-700 mb-2">Description: {description}</p>
        <p className="text-sm text-gray-700 mb-2">Donations: ${donations}</p>
        <p className="text-sm text-gray-500">Roles: {roles.join(', ')}</p>
        <p className="text-xs text-gray-400">Joined: {new Date(createdAt).toLocaleDateString()}</p>
        <p className="text-xs text-gray-400">Last Updated: {new Date(updatedAt).toLocaleDateString()}</p>
        <div className="flex gap-2 mt-3">
          {canUploadImages ? (
            <button className="text-sm px-4 py-2 bg-blue-500 text-white rounded">Upload Images</button>
          ) : (
            <button className="text-sm px-4 py-2 bg-gray-300 text-gray-700 rounded" disabled>
              Cannot Upload Images
            </button>
          )}
          <button className="text-sm px-4 py-2 bg-red-500 text-white rounded">
            {IsActive ? 'Deactivate' : 'Activate'}
          </button>
        </div>
      </div>
    </>
  )
}
