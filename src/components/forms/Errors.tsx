
interface Props {
  errors: string[];
}

export const Errors = ( { errors }: Props ) => {
  return (
    <ul className="py-1 font-medium space-y-2">
      {
        errors.map( (err, index) => (
          <li key={index} className="text-white text-center bg-red-600 rounded-md transition-colors hover:bg-red-700">{err}</li>
        ))
      }
    </ul>
  )
}

