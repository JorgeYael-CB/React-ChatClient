import { useState } from "react";

interface Props {
  values: string[];
  defaultValues?: Set<string>;
  onAddValue: (value: string, index: number) => void;
  onDeleteValue: (value: string, index: number) => void;
}


export const Filter = ( { values, onAddValue, onDeleteValue, defaultValues }: Props ) => {
  const [searchValue, setSearchValue] = useState('');
  const [originValues, setOriginValues] = useState(defaultValues || new Set<string>);


  const onAdd = (value:string, index: number) => {
    onAddValue(value, index);

    const newValues = new Set(originValues);
    newValues.add(value);

    setOriginValues(newValues);
  }

  const onDelete = (value: string, index: number) => {
    onDeleteValue(value, index);

    const newValues = new Set(originValues);
    newValues.delete(value);

    setOriginValues(newValues);

  }


  return (
    <>
      <input
        value={searchValue}
        onChange={ e => setSearchValue(e.target.value) }
        placeholder="Search deport..."
        className="bg-gray-200 text-black font-semibold py-1 px-2 rounded-lg outline outline-2 outline-purple-600"
        type="text"
      />
      <table className="min-w-full border-collapse border border-gray-200">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2 text-left">Deporte</th>
            <th className="border border-gray-300 px-4 py-2">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {values.map((value, index) =>
            value.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1
              &&
            ( <tr key={index} className="border border-gray-200">
              <td className="border border-gray-300 px-4 py-2">{value}</td>
              <td className="border border-gray-300 px-4 py-2 flex gap-2">
                <button
                  type="button"
                  disabled={ originValues.has(value) }
                  onClick={() => onAdd(value, index)}
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded disabled:opacity-40"
                >
                  Agregar
                </button>
                <button
                  type="button"
                  disabled={ !originValues.has(value) }
                  onClick={() => onDelete(value, index)}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded disabled:opacity-40"
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

