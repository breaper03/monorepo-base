import { CreateTask, Task } from "../components/common/interfaces/tasks.interface";

const API = `http://localhost:9999/tasks`
export const getAllTask = async () => {
    const res = await fetch(API)
    const data = await res.json()
    return data
  
}

export const addTask = async (task: CreateTask) => {
  return await fetch(`${API}/create`, {
    method: 'POST',
    body: JSON.stringify(task),
    headers: {
      'Content-Type': 'application/json'
    }
  })
}

export const editTask = async (task: Task, id: string) => 
  await fetch(`${API}/update/${id}`, {
    method: 'PUT',
    body: JSON.stringify(task),
    headers: {
      'Content-Type': 'application/json'
    }
  })

export const deleteTask = async (id: string) => 
  await fetch(`${API}/delete/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  })

