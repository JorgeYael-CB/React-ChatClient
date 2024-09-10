

interface Props {
  errors: string[];
}

export const Errors = ( { errors }: Props ) => {


  return (
    <>
      {
        errors.length > 0
        &&
        <ul className="py-1 font-medium space-y-2">
          {
            errors.map( (err, index) => (
              err.trim().length > 0
                &&
              <li key={index} className="text-white text-center bg-red-600 rounded-md transition-colors hover:bg-red-700">{err}</li>
            ))
          }
        </ul>
      }
    </>
  )
}

