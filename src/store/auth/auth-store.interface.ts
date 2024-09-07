

export interface IAuthStore {
    isLogged: boolean;
    userData?: {
        email: string;
        id: string | number;
        jwt: string;
        name: string;
        image: string;
    };
}
