import { FormEvent, useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthStore } from "../../../store";
import { inputValue } from "@/hooks";
import { Errors } from "@/components/forms";



export const Login = () => {
  const { isLogged } = AuthStore();
  const [password, setPassword] = useState<string>('');
  const [email, setEmail] = useState<string>('');

  const emailValidations = inputValue({fieldName: 'Email', value: email, validationType: 'EMAIL'});
  const passValidations = inputValue({fieldName: 'Password', value: password, validationType: 'PASSWORD'});
  const nav = useNavigate();


  const onSubmit = ( e: FormEvent<HTMLFormElement> ) => {
    e.preventDefault();
    if( isLogged ) nav('/');

    //TODO: hacer el login
  }


  return (
    <main>
      <h2 className="font-black text-center mt-40 mb-16 text-5xl">Welcome back!</h2>

      <form onSubmit={onSubmit} className="max-w-lg mx-auto flex flex-col gap-5 px-8 py-8 bg-white shadow-md rounded-lg">
        <h2 className="text-center font-black text-3xl mb-6">Sign in</h2>

        <input
          onChange={ e => setEmail(e.target.value) }
          placeholder="Email address"
          className='focus:outline-2 outline-blue-600 bg-gray-200 font-medium px-3 py-1 rounded-lg w-full'
          type="email"
        />

        <input
          onChange={ e => setPassword(e.target.value) }
          placeholder="Password"
          className='focus:outline-2 outline-blue-600 bg-gray-200 font-medium px-3 py-1 rounded-lg w-full'
          type="password"
        />

        <NavLink to='/forgot-password' className='text-xs text-blue-600 underline'>
          Forgot password?
        </NavLink>

        <hr/>

        <p className="text-center">
          No tienes una cuenta?{' '}
          <NavLink to='/auth/register' className='text-blue-600 underline'>Crea una</NavLink>
        </p>

        <button
          disabled={!passValidations.isValid || !emailValidations.isValid}
          className='w-full bg-black rounded-lg text-white px-3 py-1.5 font-semibold text-lg transition-colors hover:bg-gray-800 disabled:opacity-20'
        >Log in</button>

        <Errors errors={[...emailValidations.errors, ...passValidations.errors]}/>
      </form>

    </main>
  )
}
