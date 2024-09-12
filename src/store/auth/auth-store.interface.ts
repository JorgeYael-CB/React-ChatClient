import { IUser } from '../../interfaces/Api';


export interface IAuthStore {
    isLogged: boolean;
    userData?: {
        email: string;
        id: string | number;
        jwt: string;
        name: string;
        image: string;
    };

    login: ( user:IUser, token: string ) => void;
}
