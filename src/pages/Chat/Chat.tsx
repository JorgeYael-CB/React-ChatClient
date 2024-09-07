import { IMessage, IMessageCreate, IMessageServer, IUser } from "@/interfaces/Api";
import { useEffect, useState } from "react";
import { ChatBubble, InputMessage, UserList } from "./components";
import { useParams } from "react-router-dom";
import { AuthStore } from "@/store";



export const Chat = () => {
  const { id } = useParams();
  const { userData } = AuthStore();
  const [messages, setMessages] = useState<(IMessage | IMessageCreate | IMessageServer)[]>([]);
  const [isActiveInputMessage, setIsActiveInputMessage] = useState(true);
  const [userList, setUserList] = useState<IUser[]>([]);


  useEffect(() => {
    //TODO: obtener la data del servidor mediante el ID
    console.log(id);

    setUserList([
      {
        profileImage: 'https://randomuser.me/api/portraits/men/1.jpg',
        age: 25,
        canUploadImages: true,
        country: 'US',
        createdAt: new Date(),
        deports: ['Basketball'],
        description: 'Hi, my name is John Doe.',
        donations: 5,
        email: 'john.doe@example.com',
        id: Math.random(),
        images: [
          "https://i.pinimg.com/236x/70/71/71/707171e258b8e7a4f875d19aa8ca31ea.jpg",
          "https://i.pinimg.com/originals/a0/5f/35/a05f3518fdbd4d8b50279abb61c4693d.jpg",
        ],
        IsActive: true,
        name: 'John Doe',
        roles: ['USER'],
        updatedAt: new Date(),
      },
      {
        profileImage: 'https://i.pinimg.com/280x280_RS/d7/63/ec/d763ecd7a81ab64aa5d401174803f4b0.jpg',
        age: 30,
        canUploadImages: true,
        country: 'CA',
        createdAt: new Date(),
        deports: ['Tennis', 'Basquetbol', 'Futbol', 'Boxeo'],
        description: 'Hello! I am Jane Smith.',
        donations: 10,
        email: 'jane.smith@example.com',
        id: Math.random(),
        images: [
          "https://androidphoria.com/wp-content/uploads/imagen-anime-bonita-para-foto-de-perfil-de-whatsapp-para-mujeres-2024.jpg",
          "https://i.pinimg.com/236x/56/76/c8/5676c898e220849a3413de6d86242f9d.jpg",
          "https://i.pinimg.com/280x280_RS/d7/63/ec/d763ecd7a81ab64aa5d401174803f4b0.jpg",
          "https://i.pinimg.com/236x/db/2a/67/db2a67f87db15a085652b4672ce1cc28.jpg"
        ],
        IsActive: true,
        name: 'Jane Smith',
        roles: ['ADMIN'],
        updatedAt: new Date(),
      },
      {
        profileImage: 'https://randomuser.me/api/portraits/men/3.jpg',
        age: 28,
        canUploadImages: false,
        country: 'GB',
        createdAt: new Date(),
        deports: ['Rugby'],
        description: 'I am Mike Brown, and I love sports.',
        donations: 0,
        email: 'mike.brown@example.com',
        id: Math.random(),
        images: [],
        IsActive: false,
        name: 'Mike Brown',
        roles: ['USER'],
        updatedAt: new Date(),
      },
      {
        profileImage: 'https://randomuser.me/api/portraits/women/4.jpg',
        age: 22,
        canUploadImages: true,
        country: 'CA',
        createdAt: new Date(),
        deports: ['Swimming'],
        description: 'G’day! I am Emma Williams.',
        donations: 15,
        email: 'emma.williams@example.com',
        id: Math.random(),
        images: [],
        IsActive: true,
        name: 'Emma Williams',
        roles: ['USER'],
        updatedAt: new Date(),
      },
      {
        profileImage: 'https://randomuser.me/api/portraits/men/5.jpg',
        age: 35,
        canUploadImages: true,
        country: 'FR',
        createdAt: new Date(),
        deports: ['Cycling'],
        description: 'Bonjour! I am Pierre Dubois.',
        donations: 20,
        email: 'pierre.dubois@example.com',
        id: Math.random(),
        images: [],
        IsActive: true,
        name: 'Pierre Dubois',
        roles: ['ADMIN'],
        updatedAt: new Date(),
      }
    ]);
  }, [id]);


  const onSendMessage = async(value: string) => {
    if( !userData ) return;

    const newMessageLoading: IMessageCreate = {
      content: value,
      user: {
        image: userData.image,
        name:  userData.name
      }
    }

    setMessages( [...messages, {...newMessageLoading}] );

    //TODO: enviar el mensaje a la peticion Http
    setIsActiveInputMessage(false);

    setTimeout(() => {
      setIsActiveInputMessage(true);
      setMessages( messages.filter( m => 'id' in m ));
    }, 2000);
  }


  return (
    <main className='h-screen grid grid-cols-4'>
      <section className="col-span-1 h-screen bg-gray-200 overflow-x-auto overflow-y-scroll">
        <h2 className="text-gray-700 text-3xl font-bold ml-4 mt-4">User list</h2>

        <div className='mt-8'>
          {
            userList.map( u => (
              <UserList key={u.id} user={u}/>
            ))
          }
        </div>
      </section>


      <section className="col-span-3 h-screen bg-white px-8 py-4 flex flex-col justify-between overflow-x-auto overflow-y-scroll">
        <div className="mb-8">
          {
            messages.map( msg => (
              'id' in msg
              ? <ChatBubble key={msg.id} msg={msg}/>
              : <ChatBubble key={Math.random()} msg={msg}/>
            ))
          }
        </div>

        <InputMessage onSubmit={ onSendMessage } inputActive={ isActiveInputMessage }/>
      </section>
    </main>
  )
}
