import { Input } from "@/components/ui/input"
import { FormEvent, useEffect, useState } from "react"
import { IoIosSend } from "react-icons/io"


interface Props {
  onSubmit( value: string ): void;
  inputActive?: boolean;
}


export const InputMessage = ( {onSubmit, inputActive = true}: Props ) => {
  const [inputValue, setInputValue] = useState('');


  function onSendMessage(e: FormEvent<HTMLFormElement>){
    e.preventDefault();
    if( inputValue.trim().length < 1 || !inputActive ) return;

    setInputValue('');
    onSubmit(inputValue);
  }

  useEffect(() => {
    //TODO: emitir evento de si esta escribiendo o no
    if( inputValue.trim().length > 0 ){
      console.log('Alguien esta escribiendo');
      return;
    }

    console.log('Alguien dejo de escribir...');
  }, [inputValue]);


  return (
    <>
      <form onSubmit={ onSendMessage }>
        <div className="flex gap-3 items-center">
          <Input value={inputValue} onChange={ e => setInputValue(e.target.value) } className="bg-gray-200" placeholder="Escribe un mensaje..."/>
          <button>
            <IoIosSend className="w-8 h-8 transition-colors text-blue-700 hover:text-blue-500"/>
          </button>
        </div>
      </form>
    </>
  )
}
