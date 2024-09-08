import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle
} from "@/components/ui/drawer";
import { IUser } from "@/interfaces/Api";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";



interface Props {
  open: boolean;
  onChange: (value: boolean) => void;
  user: IUser;
}

export const ShowProfile = ({ open, onChange, user }: Props) => {
  const isAdmin = user.roles.includes('ADMIN');

  return (
    <Drawer open={open} onOpenChange={onChange}>
      <DrawerContent className="bg-white rounded-lg shadow-lg max-w-2xl mx-auto p-6">
        <DrawerHeader className="flex flex-col items-center">
          <DrawerTitle className={`text-center text-2xl ${isAdmin ? 'text-red-600 font-bold' : 'text-gray-800'} mb-2`}>
            {isAdmin ? "🌟" : ""} User Profile: {user.name}
          </DrawerTitle>
          <DrawerDescription className="text-center text-sm text-gray-500 mb-4">
            {user.description}
          </DrawerDescription>
          {user.images && user.images.length > 0 && (
            <Carousel showArrows={true} autoPlay infiniteLoop showThumbs={false} className="w-full max-w-sm mb-4">
              {user.images.map((image, index) => (
                <div key={index}>
                  <img
                    className="h-56 w-full object-cover rounded-lg"
                    src={image}
                    alt={`User image ${index + 1}`}
                  />
                </div>
              ))}
            </Carousel>
          )}
        </DrawerHeader>
        <div className="flex flex-col items-center px-4">
          <img
            className="h-28 w-28 mb-4 rounded-full border-4 border-gray-200 shadow-md object-cover"
            src={user.profileImage}
            alt={`User image ${user.name}`}
          />
          <p className="text-lg font-semibold text-gray-700 mb-1">{user.name}, {user.age} years old</p>
          <div className="flex gap-3 items-center my-2">
            <p className="text-sm text-gray-500 mb-1">Country: </p>
            <img className="w-6 h-4 mt-1 mb-0.5" src={`/countrys/${user.country.toLocaleLowerCase()}.png`} alt={`country of ${user.name}`} />
          </div>
          {user.deports && user.deports.length > 0 && (
            <p className="text-sm text-blue-500 mb-2">Sports: <span className="text-gray-500">{user.deports.join(", ")}</span></p>
          )}
        </div>
        <DrawerFooter className="flex justify-center">
          <DrawerClose className="bg-gray-800 text-white max-w-xl px-4 py-2 rounded-full w-full mx-auto transition-colors hover:bg-gray-700">
            Close
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
