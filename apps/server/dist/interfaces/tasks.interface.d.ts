import { Types } from "mongoose";
export interface IUser {
    id?: Types.ObjectId;
    name: string;
    description: string;
    type: string;
    price: number;
    place: string;
    userId?: Types.ObjectId;
    createdAt?: Date;
    updatedAt?: Date;
}
