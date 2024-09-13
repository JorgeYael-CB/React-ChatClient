import { IUser } from "@/interfaces/Api";



export interface IResponseAuth {
    token?: string,
    user?: IUser,
    status: number;
    errors?: {
        [key: string]: string[];
    };
    error?: string;
}