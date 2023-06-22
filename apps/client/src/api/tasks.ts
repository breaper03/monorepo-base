import { Task } from "../interfaces/tasks.interface";

const API = `http://localhost:3000/tasks`
export const getAllTask = async () => {
    const res = await fetch(API)
    const data = await res.json()
    return data
  
}

export const addTask = async (task: Task) => 
  await fetch(`${API}/create`, {
    method: 'POST',
    body: JSON.stringify(task),
    headers: {
      'Content-Type': 'application/json'
    }
  })
