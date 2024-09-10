import { IUser } from "@/interfaces/Api"
import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { TableDeports } from "../components";
import { Filter } from "@/components";




interface Props {
  user: IUser;
}


const testDeports: string[] = [
  'futbol', 'basquetbol', 'voleibol', 'tenis', 'natación', 'atletismo', 'béisbol', 'rugby', 'ciclismo', 'boxeo',
  'golf', 'hockey', 'esgrima', 'remo', 'surf', 'escalada', 'karate', 'judo', 'taekwondo', 'lucha libre',
  'patinaje', 'snowboard', 'esquí', 'triatlón', 'pentatlón', 'bádminton', 'ping-pong', 'cricket', 'softbol', 'handball',
  'waterpolo', 'polo', 'motociclismo', 'automovilismo', 'skateboarding', 'parkour', 'kickboxing', 'muay thai', 'sumo', 'kendo',
  'lacrosse', 'floorball', 'ultimate frisbee', 'dardos', 'billar', 'bolos', 'pesca deportiva', 'tiro con arco', 'tiro deportivo', 'equitación',
  'fútbol americano', 'balonmano', 'hockey sobre hielo', 'hockey sobre césped', 'bobsleigh', 'curling', 'rugby league', 'rugby union', 'netball', 'squash',
  'tenis de mesa', 'badminton', 'fútbol sala', 'fútbol playa', 'kitesurf', 'windsurf', 'parapente', 'paracaidismo', 'buceo', 'espeleología',
  'canotaje', 'kayak', 'rafting', 'vela', 'windsurf', 'kitesurf', 'bobsleigh', 'skeleton', 'luge', 'curling',
  'esquí de fondo', 'biatlón', 'trineo', 'patinaje artístico', 'patinaje de velocidad', 'patinaje en línea', 'roller derby', 'hockey sobre patines',
  'hockey subacuático', 'rugby subacuático','fútbol gaélico', 'hurling', 'camogie', 'shinty', 'pesäpallo', 'bandy', 'floorball', 'korfball', 'netball', 'pickleball'
];



export const UpdatedProfile = ( { user }: Props ) => {
  const [newImageProfile, setNewImageProfile] = useState('https://static-00.iconduck.com/assets.00/profile-default-icon-2048x2045-u3j7s5nj.png');
  const inputFileRef = useRef<HTMLInputElement>(null);
  const [deports, setDeports] = useState<Set<string>>(new Set( user.deports.map( d => d.deport.toLowerCase() ) ));


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



  return (
    <main>
      <h2 className="text-center text-5xl text-indigo-600 mt-16 font-bold">Actualiza tu informacion</h2>

      <form className="flex flex-col gap-12 px-8 py-4 mt-20 max-w-2xl mx-auto bg-white">

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

        <hr />

        <div>
          <h4 className="text-center text-2xl font-medium">⚽Actualiza tus deportes⚽</h4>

          <div className="w-full flex flex-col gap-1 justify-center my-4">
            <Filter onAddValue={onAddDeport} onDeleteValue={onDeleteDeport} title="Deports" defaultValues={deports} values={testDeports}/>
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

