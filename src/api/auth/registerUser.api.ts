import { IRegisterUser } from "../interfaces";
import { envs } from "@/config";
import { IResponseAuth } from "./interfaces/IResponseAuth";



export const RegisterUserApi = async( user: IRegisterUser ): Promise<IResponseAuth> => {
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
