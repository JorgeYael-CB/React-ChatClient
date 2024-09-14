import { FileToBase64 } from "@/config";
import { ChangeEvent, useRef, useState } from "react"
import { Errors } from "./Errors";


interface Props {
  defaultImage?: string;
  prevImage: string;
  title: string;
  onChangeImage?: (base64: string, File: File) => void;
}

const imgDefault: string = "https://static-00.iconduck.com/assets.00/profile-default-icon-2048x2045-u3j7s5nj.png";



export const UploadImage = ( { defaultImage = imgDefault, prevImage, title, onChangeImage }: Props ) => {
  const inputFileRef = useRef<HTMLInputElement>(null);
  const [newImageSelected, setNewImageSelected] = useState<string>(defaultImage);
  const [isLoadingNewImage, setIsLoadingNewImage] = useState<boolean>(false);
  const [errorImage, setErrorImage] = useState<string>();


  const onChangeNewImage = async( e:ChangeEvent<HTMLInputElement> ) => {
    setIsLoadingNewImage(true);
    const file:File = e.target.files![0];

    try {
      const res = await FileToBase64({file});
      setIsLoadingNewImage(false);
      setNewImageSelected(res);

      if( onChangeImage ){
        onChangeImage(res, file);
      }

      setErrorImage(undefined);
    } catch (error) {
      setErrorImage('Ocurrio un error al asignar la nueva imagen, intenta de nuevo mas tarde.');
    }
  }



  return (
    <div className="flex flex-col gap-3">
      <h4 className="text-center text-2xl font-medium">{title}</h4>
      {
        errorImage
        &&
        <Errors errors={[errorImage]}/>
      }

      <div className="flex flex-row gap-12 justify-center mt-3">
        <div className="w-full">
          <p className="text-center text-sm">Previus image</p>
          <img
            className="w-52 h-56 transition-all border p-4 bg-white rounded-sm mx-auto"
            src={prevImage}
            alt={`Profile image ${prevImage}`}
          />
        </div>
        <div className="w-full">
          <p className="text-center text-sm">New image</p>
          <img
            onClick={ () => inputFileRef?.current?.click() }
            className="w-52 h-56 transition-all cursor-pointer border p-4 bg-white rounded-sm mx-auto"
            src={`${newImageSelected}`}
            alt={`New image default`}
          />
        </div>
      </div>

      <div className="mt-6 flex justify-center">
        <input
          disabled={isLoadingNewImage}
          accept="image/*"
          onChange={ onChangeNewImage }
          ref={inputFileRef}
          type="file"
          className="hidden"
        />
        <button
          type="button"
          disabled={ isLoadingNewImage }
          onClick={ () => inputFileRef?.current?.click() }
          className='transition-colors bg-green-500 disabled:opacity-40 hover:bg-green-700 text-white md:w-1/2 font-semibold px-4 rounded-md py-1 text-center hover:cursor-pointer'
        >Select new image
        </button>
      </div>
    </div>
  )
}

