import { create } from "zustand";
import { IAuthStore } from "./auth-store.interface";
import { persist } from "zustand/middleware";



export const AuthStore = create( persist<IAuthStore>( set => ({
    isLogged: false,
    login( user, token ){
        set(({
            isLogged: true,
            userData: {
                email: user.email!,
                id: user.id,
                image: user.profileImage,
                jwt: token,
                name: user.name
            },
        }))
    }
}), {
    name: 'global-chat'
}));
