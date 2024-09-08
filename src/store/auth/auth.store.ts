import { create } from "zustand";
import { IAuthStore } from "./auth-store.interface";



export const AuthStore = create<IAuthStore>( (store) => (
    {
        isLogged: false,
        userData: {
            email: 'correo@correo.com',
            id: Math.random(),
            image: 'https://t3.ftcdn.net/jpg/05/87/76/66/360_F_587766653_PkBNyGx7mQh9l1XXPtCAq1lBgOsLl6xH.jpg',
            jwt: '123',
            name: 'Un usuario de prueba'
        }
    }
))
