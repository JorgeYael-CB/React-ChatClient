import { IUser } from "@/interfaces/Api"
import { FormEvent, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Filter } from "@/components";
import { Errors, UploadImage } from "@/components/forms";
import { UpdateAccount } from "@/api/auth/updateAccount";
import { IUpdateUser } from "@/api/auth/interfaces";
import { getErrorsValidations } from "@/api/auth";




interface Props {
  user: IUser;
}


const testActivities: string[] = ['futbol', 'basquetbol', 'voleibol', 'tenis', 'natación'];



export const UpdatedProfile = ( { user }: Props ) => {
  const [activities, setActivities] = useState<Set<string>>(new Set( user.activities.map( d => d.activity.toLowerCase() ) ));
  const [fileImage, setFileImage] = useState<File>();
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);
  const nav = useNavigate();



  const onDeleteDeport = ( deport: string ) => {
    const newActivity = new Set(activities);
    newActivity.delete(deport);

    setActivities(newActivity);
  }

  const onAddDeport = ( deport: string ) => {
    const newActivity = new Set(activities);
    newActivity.add(deport)

    setActivities(newActivity);
  }

  const getNewProfileImage = (_: string, file:File) => {
    setFileImage(file);
  }

  const onSubmit = async(e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    //TODO: actualizar el perfil.
    setIsLoading(true);
    const profile: IUpdateUser = {
      profileImage: fileImage
    };

    const data = await UpdateAccount({data:profile, id: user.id});
    setIsLoading(false);

    if( data.error || data.errors ){
      setErrors(getErrorsValidations(data.error, data.errors));
      return;
    }

    nav('/');
  }



  return (
    <main>
      <h2 className="text-center md:text-4xl text-2xl text-indigo-600 mt-8 font-bold">Actualiza tu informacion</h2>

      <form onSubmit={ onSubmit } className="flex flex-col gap-8 px-8 py-4 mt-20 max-w-2xl mx-auto bg-white">
        <UploadImage onChangeImage={getNewProfileImage} title="Actualiza tu foto de perfil." prevImage={user.profileImage}/>
        <hr />

        <div>
          <h4 className="text-center text-2xl font-medium">⚽Actualiza tus deportes⚽</h4>

          <div className="w-full flex flex-col gap-1 justify-center mt-4 mb-2">
            <Filter onAddValue={onAddDeport} onDeleteValue={onDeleteDeport} title="Activities" defaultValues={activities} values={testActivities}/>
          </div>
        </div>

        {
          errors.length > 0
          &&
          <Errors errors={errors}/>
        }

        <div className="flex flex-row items-center justify-center gap-7 mt-3">
          <NavLink className='bg-red-500 transition-colors hover:bg-red-600 text-white font-semibold px-4 rounded-md py-1' to='/'>Cancelar</NavLink>
          <button
            disabled={isLoading}
            className='bg-green-500 transition-colors hover:bg-green-600 text-white font-semibold px-4 rounded-md py-1 disabled:opacity-30'>Update</button>
        </div>
      </form>
    </main>
  )
}

