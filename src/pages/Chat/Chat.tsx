import { Input } from "@/components/ui/input";
import { IMessage, IUser } from "@/interfaces/Api";
import { useEffect, useState } from "react";
import { IoIosSend } from "react-icons/io";
import { ChatBubble, UserList } from "./components";
import { useParams } from "react-router-dom";



export const Chat = () => {
  const { id } = useParams();
  const [messages, setMessages] = useState<IMessage[]>([
    {
      content: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.',
      createdAt: new Date(),
      emojis: null,
      id: Math.random(),
      isEdited: false,
      isValid: true,
      server: 1,
      updatedAt: new Date(),
      user: {
        profileImage: 'https://play-lh.googleusercontent.com/z-ppwF62-FuXHMO7q20rrBMZeOnHfx1t9UPkUqtyouuGW7WbeUZECmyeNHAus2Jcxw=w526-h296-rw',
        age: 18,
        canUploadImages: true,
        country: 'MX',
        createdAt: new Date(),
        deports: ['Futbol'],
        description: 'Hi, mi name is...',
        donations: 0,
        email: 'correo@correo.com',
        id: Math.random(),
        images: [],
        IsActive: true,
        name: 'Jorge Yael',
        roles: ['ADMIN'],
        updatedAt: new Date(),
      }
    }
  ]);

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
        images: [],
        IsActive: true,
        name: 'John Doe',
        roles: ['USER'],
        updatedAt: new Date(),
      },
      {
        profileImage: 'https://randomuser.me/api/portraits/women/2.jpg',
        age: 30,
        canUploadImages: true,
        country: 'CA',
        createdAt: new Date(),
        deports: ['Tennis'],
        description: 'Hello! I am Jane Smith.',
        donations: 10,
        email: 'jane.smith@example.com',
        id: Math.random(),
        images: [],
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

  return (
    <main className='h-screen grid grid-cols-4'>
      <section className="col-span-1 h-screen bg-black overflow-x-auto overflow-y-scroll">
        <h2 className="text-white">User list</h2>

        <div>
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
              <ChatBubble key={msg.id} msg={msg}/>
            ))
          }
        </div>

        <form className="flex gap-3 items-center">
          <Input className="bg-gray-200" placeholder="Escribe un mensaje..."/>
          <button>
            <IoIosSend className="w-8 h-8 transition-colors text-blue-700 hover:text-blue-500"/>
          </button>
        </form>
      </section>
    </main>
  )
}
