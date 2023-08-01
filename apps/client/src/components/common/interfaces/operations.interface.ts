export interface Operations {
  initialMount: number
  date: Date | string
  gainLose: number
  lote: number
}

export interface UpdateOperations {
  initialMount?: number
  date?: Date
  gainLose?: number
  lote?: number
}