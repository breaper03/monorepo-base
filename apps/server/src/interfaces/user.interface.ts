import { Types } from "mongoose"

export interface IUser {
  id?: Types.ObjectId
  name: string
  password: string
  signed: string
  createdAt?: Date
  updatedAt?: Date
}

