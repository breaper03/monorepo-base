export interface Task {
  _id: string
  name: string,
  description: string,
  type: string
  place: string
  price: number
  userId: string
}

export interface UpdateTask {
  _id?: string
  name?: string,
  description?: string,
  type?: string
  place?: string
  price: number
  userId?: string
}

export interface CurrentTask {
  _id?: string
  name?: string,
  description?: string,
  type?: string
  place?: string
  price?: number
  userId?: string
}