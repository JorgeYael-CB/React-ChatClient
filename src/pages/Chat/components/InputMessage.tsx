import { Input } from "@/components/ui/input"
import { FormEvent, useState } from "react"
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


  return (
    <form onSubmit={ onSendMessage } className="flex gap-3 items-center">
      <Input value={inputValue} onChange={ e => setInputValue(e.target.value) } className="bg-gray-200" placeholder="Escribe un mensaje..."/>
      <button disabled={ !inputActive } className="disabled:opacity-40">
        <IoIosSend className="w-8 h-8 transition-colors text-blue-700 hover:text-blue-500"/>
      </button>
    </form>
  )
}
