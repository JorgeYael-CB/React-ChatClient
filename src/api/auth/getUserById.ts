import { envs } from "@/config";
import { IResponseAuth } from "./interfaces/IResponseAuth";





export const getUserById = async( id: number | string ): Promise<IResponseAuth> => {
    try {
        const url:string = `${envs.api}/auth/${id}`;
        const res = await fetch(url);

        return res.json();
    } catch (error) {
        return {
            status: 500,
            error: 'unexpected error, please try again later',
        }
    }
}
