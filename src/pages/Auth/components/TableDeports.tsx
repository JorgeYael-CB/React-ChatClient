


interface Props {
  deports: string[];
  onDelete?:( deport: string ) => void;
}


export const TableDeports = ({deports, onDelete}:Props) => {

  return (
    <table className="bg-white shadow-md rounded-lg w-full">
      <thead className="bg-gray-800 text-white">
        <tr>
          <th className="py-3 px-4 text-left">Deports</th>
          {
            onDelete
            &&
            <th className="py-3 px-4 text-left">Acciones</th>
          }
        </tr>
      </thead>
      <tbody>
        {
          deports.length > 0
          ?
          deports.map( (d, index) => (
            <tr key={index} className="border-b">
              <td className="py-3 px-4">{d}</td>
              {
                onDelete
                &&
                <td className="py-3 px-4">
                  <button type="button" onClick={ () => onDelete(d) } className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-700">Eliminar</button>
                </td>
              }
            </tr>
          ))
          :<tr>
            <td className="font-bold text-xl">No hay deportes.</td>
          </tr>
        }
      </tbody>
    </table>
  )
}

