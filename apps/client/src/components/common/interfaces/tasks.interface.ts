export interface Task {
  _id: string
  name: string,
  description: string,
  type: string
  currency: string
  dateFrom: Date
  dateTo: Date
  price: number
  userId: string
}

export interface GroupedTypeTasks {
  Inversion: Task[],
  Retiro: Task[],
  Deposito: Task[]
}

export interface UpdateTask {
  _id?: string
  name?: string,
  description?: string,
  type?: string
  currency?: string
  dateFrom?: Date
  dateTo?: Date
  price: number
  userId?: string
}

export interface CreateTask {
  name: string,
  description: string,
  type: string
  currency: string
  dateFrom: Date | string
  dateTo: Date | string
  price: number
  userId: string
}

export interface CurrentTask {
  _id?: string
  name?: string,
  description?: string,
  type?: string
  currency?: string
  dateFrom?: Date
  dateTo?: Date 
  price?: number
  userId?: string
}