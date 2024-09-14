

export interface IRegisterUser {
    name: string;
    password: string;
    email: string;
}

export interface IUpdateUser {
    name?: string;
    password?: string;
    email?: string;
    profileImage?: File;
    activities?: string[];
}
