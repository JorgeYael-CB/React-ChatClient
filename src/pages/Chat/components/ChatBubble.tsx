import { IMessage } from '../../../interfaces/Api/Message.interface';



export const ChatBubble = ({ msg }: { msg: IMessage }) => {
  const formattedDate = new Date(msg.createdAt).toLocaleString('es-ES', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true
  }).replace(',', '');


  return (
    <main className='flex gap-2'>
      <form className='rounded-full h-12 w-12'>
        <button>
          <img src={msg.user.profileImage} alt={`Image user ${msg.user.name}`} />
        </button>
      </form>

      <div>
        <form className='flex gap-4 items-center'>
          <button className='font-medium text-sm opacity-60 hover:underline'>{msg.user.name}</button>
          <p className='text-sm opacity-60'>{formattedDate}</p>
        </form>
        <p
          className='bg-gray-500 text-white rounded-md px-4 py-3 max-w-3xl w-full'
        >{msg.content}</p>
      </div>
    </main>
    );
};
