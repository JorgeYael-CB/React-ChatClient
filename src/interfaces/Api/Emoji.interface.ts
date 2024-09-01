import { IDb } from "./";

export interface IEmoji extends IDb {
    content: string;
    IsValid: boolean;
    IsEdited: boolean;
}
