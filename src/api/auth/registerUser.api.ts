import { IUser } from "@/interfaces/Api"
import { IRegisterUser } from "../interfaces";
import { envs } from "@/config";


interface Props {
    token?: string,
    user?: IUser,
    status: number;
    errors?: {
        [key: string]: string[];
    };
    error?: string;
}


export const RegisterUserApi = async( user: IRegisterUser ): Promise<Props> => {
    try {
        const url = `${envs.api}/auth`;
        console.log(user);

        const res = await fetch(url, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        });
        const data = await res.json();

        return data;
    } catch (error) {
        console.log(error);

        return {
            status: 500,
            error: 'Unexpected error, please try again later'
        }
    }
}
