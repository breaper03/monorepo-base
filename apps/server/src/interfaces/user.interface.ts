import { Types } from "mongoose"

export interface IUser {
  id?: Types.ObjectId
  userName: string
  name: string
  lastname: string
  email: string
  phone: string
  password: string
  signed: string
  createdAt?: Date
  updatedAt?: Date
}

