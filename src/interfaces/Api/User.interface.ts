import { IDb, IEmoji } from "./";



export type roles = 'ADMIN' | 'USER' | 'SUPER_USER' | 'DEVELOPER';
export type country = "MX" | "US" | "UK";

export interface UserPreferences extends IDb {
    User: IUserApi;
    IsEdited: boolean;
    deport: string;
    country: country;
    lenguaje: string;
    age: number;
}

export interface IDataUser {
    name: string;
    email: string;
    password: string;
    roles: roles;
    profileImage: string;
    images: string[];
    description: string;
    country: country;
    age: number;
    deports: string[];
}

export interface IUserApi extends IDb, IDataUser {
    points: number;
    emojis: IEmoji;
    canUploadImages: boolean;
    IsActive: boolean;
    donations: any;
}
