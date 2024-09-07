import { IUser } from "./User.interface";

export interface IMessage {
    id: string | number;
    user: IUser;
    content: string;
    createdAt: Date;
    updatedAt: Date;
    isValid: boolean;
    isEdited: boolean;

    //TODO: pendientes
    server: any;
    emojis?: any;
}


export interface IMessageCreate {
    content: string;
    user: {
        name: string,
        image: string
    };
}
