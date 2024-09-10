import { IUser } from "@/interfaces/Api"
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Filter } from "@/components";
import { UploadImage } from "@/components/forms";




interface Props {
  user: IUser;
}


const testDeports: string[] = ['futbol', 'basquetbol', 'voleibol', 'tenis', 'natación'];



export const UpdatedProfile = ( { user }: Props ) => {
  const [deports, setDeports] = useState<Set<string>>(new Set( user.deports.map( d => d.deport.toLowerCase() ) ));
  const [imageProfile, setImageProfile] = useState<string>();


  const onDeleteDeport = ( deport: string ) => {
    const newDeports = new Set(deports);
    newDeports.delete(deport);

    setDeports(newDeports);
  }

  const onAddDeport = ( deport: string ) => {
    const newDeports = new Set(deports);
    newDeports.add(deport)

    setDeports(newDeports);
  }

  const getNewProfileImage = (img: string, file:File) => {
    console.log({file, img});
    setImageProfile(img);
  }



  return (
    <main>
      <h2 className="text-center md:text-4xl text-2xl text-indigo-600 mt-8 font-bold">Actualiza tu informacion</h2>

      <form className="flex flex-col gap-8 px-8 py-4 mt-20 max-w-2xl mx-auto bg-white">
        <UploadImage onChangeImage={getNewProfileImage} title="Actualiza tu foto de perfil." prevImage={user.profileImage}/>
        <hr />

        <div>
          <h4 className="text-center text-2xl font-medium">⚽Actualiza tus deportes⚽</h4>

          <div className="w-full flex flex-col gap-1 justify-center my-4">
            <Filter onAddValue={onAddDeport} onDeleteValue={onDeleteDeport} title="Deports" defaultValues={deports} values={testDeports}/>
          </div>
        </div>


        <div className="flex flex-row items-center justify-center gap-7 mt-4">
          <NavLink className='bg-red-500 transition-colors hover:bg-red-600 text-white font-semibold px-4 rounded-md py-1' to='/'>Cancelar</NavLink>
          <button className='bg-green-500 transition-colors hover:bg-green-600 text-white font-semibold px-4 rounded-md py-1'>Update</button>
        </div>
      </form>
    </main>
  )
}

