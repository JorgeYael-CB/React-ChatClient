import { useEffect, useState } from 'react';
import { IMessage, IMessageCreate } from '../../../interfaces/Api/Message.interface';


interface Props {
  msg: IMessage | IMessageCreate;
}


export const ChatBubble = ({ msg }: Props) => {
  const [formatDate, setFormatDate] = useState<string>();



  useEffect(() => {
    if( 'id' in msg ){ // validar campos
      setFormatDate(new Date(msg.createdAt).toString());
    }
  }, []);


  return (
    <>
      {
        'id' in msg
        ?
        <main className='flex gap-2 my-2'>
          <form className='rounded-full h-12 w-12'>
            <button>
              <img src={msg.user.profileImage} alt={`Image user ${msg.user.name}`} />
            </button>
          </form>

          <div>
            <form className='flex gap-4 items-center'>
              <button className='font-medium text-sm opacity-60 hover:underline'>{msg.user.name}</button>
              <p className='text-sm opacity-60'>{formatDate}</p>
            </form>
            <p
              className='bg-gray-500 text-white rounded-md px-3 py-3 max-w-3xl'
            >{msg.content}</p>
          </div>
        </main>
        :
        <main className='flex gap-2 my-2 opacity-50 justify-end'>
          <div>
            <div className='flex gap-4 items-center'>
              <p className='font-medium text-sm opacity-60'>{msg.user.name}</p>
            </div>
            <p
              className='bg-gray-500 text-white rounded-md px-3 py-3 max-w-3xl'
            >{msg.content}</p>
          </div>

          <div className='rounded-full h-12 w-12'>
            <p>
              <img src={msg.user.image} alt={`Image user ${msg.user.name}`} />
            </p>
          </div>
        </main>
      }
    </>
  );
};
