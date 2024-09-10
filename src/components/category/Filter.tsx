import { useState } from "react";

interface Props {
  values: string[];
  defaultValues?: Set<string>;
  title: string;
  onAddValue: (value: string, index: number) => void;
  onDeleteValue: (value: string, index: number) => void;
}


export const Filter = ( { values, onAddValue, onDeleteValue, defaultValues, title }: Props ) => {
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
        onChange={e => setSearchValue(e.target.value)}
        placeholder="Search deport..."
        className="bg-gray-100 text-gray-800 font-semibold py-2 px-3 rounded-lg border border-purple-500 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-600 transition"
        type="text"
      />
      <table className="min-w-full border-collapse mt-2 bg-white shadow-md rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-gradient-to-r from-purple-500 to-purple-700 text-white">
            <th className="border-b-2 border-gray-300 px-6 py-3 text-left font-medium tracking-wider">{title}</th>
            <th className="border-b-2 border-gray-300 px-6 py-3 font-medium tracking-wider">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {values.map((value, index) =>
            value.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1 && (
              <tr
                key={index}
                className={`border-b border-gray-200 ${
                  originValues.has(value) ? 'bg-purple-50' : 'bg-white'
                } hover:bg-gray-100 transition`}
              >
                <td className={`border-r border-gray-300 px-6 py-3 font-semibold ${originValues.has(value) ? 'text-blue-600' : 'text-gray-700'}`}>
                  {value}
                </td>
                <td className="border-r border-gray-300 px-6 py-3 flex gap-2">
                  <button
                    type="button"
                    disabled={originValues.has(value)}
                    onClick={() => onAdd(value, index)}
                    className={`${
                      originValues.has(value) ? 'bg-gray-300' : 'bg-green-500 hover:bg-green-600'
                    } text-white font-bold py-2 px-4 rounded-full shadow-md transition disabled:opacity-50`}
                  >
                    Agregar
                  </button>
                  <button
                    type="button"
                    disabled={!originValues.has(value)}
                    onClick={() => onDelete(value, index)}
                    className={`${
                      !originValues.has(value) ? 'bg-gray-300' : 'bg-red-500 hover:bg-red-600'
                    } text-white font-bold py-2 px-4 rounded-full shadow-md transition disabled:opacity-50`}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </>
  )
}

