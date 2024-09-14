import { Errors } from "@/components/forms";
import { inputValue } from "@/hooks";
import { AuthStore } from "@/store";
import { useState, FormEvent } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { IUser } from "@/interfaces/Api";
import { getErrorsValidations, RegisterUserApi } from "@/api/auth";




const testUser:IUser = {
  canUploadImages: false,
  country: 'MX',
  createdAt: new Date(),
  description: 'Hello World',
  id: 1,
  images: [],
  IsActive: false,
  name: 'Jorge Yael',
  profileImage: 'https://mrwallpaper.com/images/hd/cool-profile-pictures-panda-man-gsl2ntkjj3hrk84s.jpg',
  roles: ['USER', 'ADMIN'],
  updatedAt: new Date(),
  age: 18,
  activities: [
    {
      createdAt: new Date(),
      deport: 'Basquetbol',
      id: 1,
      updatedAt: new Date(),
    },
    {
      createdAt: new Date(),
      deport: 'Futbol',
      id: 2,
      updatedAt: new Date(),
    },
  ],
  email: 'correo@correo.com',
}


export const Register = () => {
  const { isLogged, login } = AuthStore();
  const nav = useNavigate();
  const [password, setPassword] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [userName, setUserName] = useState('');
  const [errors, setErrors] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const emailValidations = inputValue({fieldName: 'Email', value: email, validationType: 'EMAIL'});
  const passValidations = inputValue({fieldName: 'Password', value: password, validationType: 'PASSWORD'});
  const nameValidations = inputValue({fieldName: 'Name', value: userName, maxLength: 100, minLength: 2});


  const onSubmit = async( e: FormEvent<HTMLFormElement> ) => {
    e.preventDefault();
    if( isLogged ) nav('/');
    setIsLoading(true);

    const data = await RegisterUserApi({email, name: userName, password});
    setIsLoading(false);

    if( data.error || data.errors || !data.user || !data.token ){
      setErrors(getErrorsValidations(data.error, data.errors));
      return;
    }

    login(data.user, data.token);
  }


  return (
    <>
      <main>
        <h2 className="font-black text-center mt-40 mb-16 text-5xl">Create account</h2>

        <form onSubmit={onSubmit} className="max-w-lg mx-auto flex flex-col gap-5 px-8 py-8 bg-white shadow-md rounded-lg">
          <h2 className="text-center font-black text-3xl mb-6">Sign up</h2>

          <div className="flex flex-col gap-1.5">
            <input
              onChange={ e => setUserName(e.target.value) }
              placeholder="User name"
              className='focus:outline-2 outline-blue-600 bg-gray-200 font-medium px-3 py-1 rounded-lg w-full'
              type="text"
              value={userName}
            />
            <Errors errors={nameValidations.errors}/>
          </div>

          <div className="flex flex-col gap-1.5">
            <input
              value={email}
              onChange={ e => setEmail(e.target.value) }
              placeholder="Email address"
              className='focus:outline-2 outline-blue-600 bg-gray-200 font-medium px-3 py-1 rounded-lg w-full'
              type="email"
            />
            <Errors errors={emailValidations.errors}/>
          </div>

          <div className="flex flex-col gap-1.5">
            <input
              value={password}
              onChange={ e => setPassword(e.target.value) }
              placeholder="Password"
              className='focus:outline-2 outline-blue-600 bg-gray-200 font-medium px-3 py-1 rounded-lg w-full'
              type="password"
            />
            <Errors errors={passValidations.errors}/>
          </div>

          <hr/>

          <p className="text-center">
            Ya tienes una cuenta?{' '}
            <NavLink to='/auth/login' className='text-blue-600 underline'>Inicia sesion</NavLink>
          </p>

          <button
            disabled={!passValidations.isValid || !emailValidations.isValid || isLoading}
            className='w-full bg-black rounded-lg text-white px-3 py-1.5 font-semibold text-lg transition-colors hover:bg-gray-800 disabled:opacity-20'
          >Sign up</button>

          {
            errors.length > 0
              &&
            <Errors errors={errors}/>
          }
        </form>
      </main>
    </>
  )
}
