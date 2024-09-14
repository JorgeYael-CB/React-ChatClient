import { envs } from "@/config";
import { IResponseAuth, IUpdateUser } from "./interfaces";
import { toFormData } from "../funciones";


interface Props {
    id: number | string;
    data: IUpdateUser;
}


export const UpdateAccount = async( {data, id}: Props ):Promise<IResponseAuth> => {
    const form = toFormData(data);

    try {
        const url:string = `${envs.api}/auth/${id}`;
        const res = await fetch(url, {
            method: 'PUT',
            body: form,
        });

        return res.json();
    } catch (error) {
        return {
            status: 500,
            error: 'Unexpected error, please try again later'
        }
    }

}
