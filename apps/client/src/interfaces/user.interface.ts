export interface User {
  _id?: string
  name: string,
  password: string,
  signed?: string
  token?: string
}

export interface CurrentUser {
  _id?: string
  name: string,
  password: string,
  signed?: string
  token?: string
}