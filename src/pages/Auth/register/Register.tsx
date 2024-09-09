import { Errors } from "@/components/forms";
import { inputValue } from "@/hooks";
import { AuthStore } from "@/store";
import { useState, FormEvent } from "react";
import { NavLink, useNavigate } from "react-router-dom";




export const Register = () => {
  const { isLogged } = AuthStore();
  const nav = useNavigate();
  const [password, setPassword] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [userName, setUserName] = useState('');

  const emailValidations = inputValue({fieldName: 'Email', value: email, validationType: 'EMAIL'});
  const passValidations = inputValue({fieldName: 'Password', value: password, validationType: 'PASSWORD'});
  const nameValidations = inputValue({fieldName: 'Name', value: userName, maxLength: 100, minLength: 2});


  const onSubmit = ( e: FormEvent<HTMLFormElement> ) => {
    e.preventDefault();
    if( isLogged ) nav('/');

    //TODO: hacer el login
  }


  return (
    <main>
      <h2 className="font-black text-center mt-40 mb-16 text-5xl">Create account</h2>

      <form onSubmit={onSubmit} className="max-w-lg mx-auto flex flex-col gap-5 px-8 py-8 bg-white shadow-md rounded-lg">
        <h2 className="text-center font-black text-3xl mb-6">Sign up</h2>

        <input
          onChange={ e => setUserName(e.target.value) }
          placeholder="User name"
          className='focus:outline-2 outline-blue-600 bg-gray-200 font-medium px-3 py-1 rounded-lg w-full'
          type="text"
          value={userName}
        />

        <input
          value={email}
          onChange={ e => setEmail(e.target.value) }
          placeholder="Email address"
          className='focus:outline-2 outline-blue-600 bg-gray-200 font-medium px-3 py-1 rounded-lg w-full'
          type="email"
        />

        <input
          value={password}
          onChange={ e => setPassword(e.target.value) }
          placeholder="Password"
          className='focus:outline-2 outline-blue-600 bg-gray-200 font-medium px-3 py-1 rounded-lg w-full'
          type="password"
        />

        <hr/>

        <p className="text-center">
          Ya tienes una cuenta?{' '}
          <NavLink to='/auth/login' className='text-blue-600 underline'>Inicia sesion</NavLink>
        </p>

        <button
          disabled={!passValidations.isValid || !emailValidations.isValid}
          className='w-full bg-black rounded-lg text-white px-3 py-1.5 font-semibold text-lg transition-colors hover:bg-gray-800 disabled:opacity-20'
        >Sign up</button>

        <Errors errors={[...nameValidations.errors,...emailValidations.errors, ...passValidations.errors]}/>
      </form>

    </main>
  )
}
