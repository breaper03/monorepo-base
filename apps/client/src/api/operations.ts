import { Operations } from "../components/common/interfaces/operations.interface";

const API = `http://localhost:9999/operations`

export const getAllOperations = async (): Promise<Operations[]> => {
  const res = await fetch(API)
  const data = await res.json()
  return data
}

export const addOperation = async (operation: Operations) => {
  return await fetch(`${API}/create`, {
    method: 'POST',
    body: JSON.stringify(operation),
    headers: {
      'Content-Type': 'application/json'
    }
  })
}