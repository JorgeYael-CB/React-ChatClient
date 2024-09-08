import { FormEvent, useEffect, useState } from 'react';
import { IMessage, IMessageCreate, IMessageServer, styleServerMessage } from '../../../interfaces/Api/Message.interface';
import { ShowProfile } from './ShowProfile';


interface Props {
  msg: IMessage | IMessageCreate | IMessageServer;
}


export const ChatBubble = ({ msg }: Props) => {
  const [formatDate, setFormatDate] = useState<string>();
  const [showModalProfile, setShowModalProfile] = useState(false);



  useEffect(() => {
    if( 'id' in msg ){ // validar campos
      setFormatDate(new Date(msg.createdAt).toString());
    }
  }, []);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShowModalProfile(true);
  }

  const bgColorStyle = (style: styleServerMessage): string => {
    if( style === 'ALERT' ){
      return 'bg-yellow-500';
    } else if( style === 'DANGER' ){
      return 'bg-red-700';
    } else if( style === 'NOTIFY' ){
      return 'bg-blue-700';
    } else if( style === 'SUCCES' ){
      return 'bg-green-600';
    }

    return 'bg-black'
  }

  return (
    <>
      {
        'id' in msg
        ?
        <>
          {
            showModalProfile
            &&
            <ShowProfile onChange={setShowModalProfile} open={showModalProfile} user={msg.user}/>
          }
          <form onSubmit={onSubmit} className='flex gap-2 my-2'>
            <div className='rounded-full h-12 w-12'>
              <button>
                <img src={msg.user.profileImage} alt={`Image user ${msg.user.name}`} />
              </button>
            </div>

            <div>
              <div className='flex gap-4 items-center'>
                <button className='font-medium text-sm opacity-60 hover:underline'>{msg.user.name}</button>
                <p className='text-sm opacity-60'>{formatDate}</p>
              </div>
              <p
                className='bg-gray-500 text-white rounded-md px-3 py-3 max-w-3xl'
              >{msg.content}</p>
            </div>
          </form>
        </>
        : 'user' in msg
          ?<main className='flex gap-2 my-2 opacity-50 justify-end'>
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
          :<div className={`py-1.5 text-white text-center font-medium text-sm rounded-md ${bgColorStyle(msg.style)}`}>
            {
              msg.title
              &&
              <h3 className='my-0.5 text-base font-bold'>{msg.title}</h3>
            }
            <p>{msg.content}</p>
          </div>
      }
    </>
  );
};
