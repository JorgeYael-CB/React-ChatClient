import { getErrorsValidations } from "@/api/auth";
import { getUserById } from "@/api/auth/getUserById";
import { IUser } from "@/interfaces/Api";
import { AuthStore } from "@/store"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UpdatedProfile } from "../Auth/register/UpdatedProfile";
import { Errors } from "@/components/forms";
import { Loading } from "@/components";


export const UpdateProfile = () => {
  const { userData } = AuthStore();
  const nav = useNavigate();
  const [user, setUser] = useState<IUser>();
  const [errors, setErrors] = useState<string[]>([]);


  async function getUser(){
    const data = await getUserById(userData!.id);

    if( data.error || data.errors ){
      setErrors(getErrorsValidations(data.error, data.errors));
      return;
    }

    setUser( data.user );
  }


  useEffect(() => {
    if( !userData || !userData.id ){
      nav('/auth/register');
      return;
    }

    //TODO: obtener la data del usuario mediante su Id
    getUser();

    //TODO: obtener las actividades para mostrar.
  }, []);


  return (
    <>
      {
        (!user && errors.length <= 0)
        && <div className="mt-40"><Loading/></div>
      }
      {
        user
        &&
        <UpdatedProfile user={user}/>
      }
      {
        errors.length > 0
        &&
        <Errors errors={errors}/>
      }
    </>
  )
}

