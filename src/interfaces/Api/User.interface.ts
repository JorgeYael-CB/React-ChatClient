import { IDb, IEmoji } from "./";



export type roles = 'ADMIN' | 'USER' | 'SUPER_USER' | 'DEVELOPER';
export type country = "MX" | "US" | "UK" | "CA" | "GB" | "FR";

export interface IDeport extends IDb, IDeportCreacion { // relacion de muchos a muchos
}

export interface IDeportCreacion {
    deport: string;
}


export interface IUserPreferences extends IDb {
    User: IUser;
    IsEdited: boolean;
    deport: string;
    country: country;
    lenguaje: string;
    age: number;
}

export interface IDataUser {
    name: string;
    email?: string;
    password?: string;
    roles: roles[];
    profileImage: string;
    images: string[];
    description: string;
    country: country;
    age?: number;
    deports: IDeport[];
}

export interface IUser extends IDb, IDataUser {
    points?: number;
    emojis?: IEmoji;
    canUploadImages: boolean;
    IsActive: boolean;

    //TODO: pendiente
    donations?: any;
}
