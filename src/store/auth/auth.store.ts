import { create } from "zustand";
import { IAuthStore } from "./auth-store.interface";



export const AuthStore = create<IAuthStore>( (store) => (
    {
        isLogged: true,
    }
))
