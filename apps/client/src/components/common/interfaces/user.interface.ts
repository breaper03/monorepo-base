export interface User {
  _id?: string
  userName: string,
  password: string,
  name: string,
  lastname: string,
  email: string,
  phone: string
  signed?: string
  token?: string
  createdAt?: Date
  updatedAt?: Date
}

export interface CurrentUser {
  _id?: string
  userName: string,
  password: string,
  name: string,
  lastname: string,
  email: string,
  phone: string
  signed?: string
  token?: string
  createdAt?: Date
  updatedAt?: Date
}