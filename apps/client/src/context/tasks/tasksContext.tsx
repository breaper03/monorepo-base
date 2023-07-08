/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext, useEffect, useState } from "react";
import { CurrentTask, Task } from "../../interfaces/tasks.interface";
import { addTask, getAllTask, editTask } from "../../api/tasks";
import { useUser } from "../users/useUser";

interface TaskContextValue {
  tasksList: Task[],
  createTask: (userId: string, task: Task) => Promise<void>
  updateTask: (task: Task, id: string) => Promise<void>
}

export const TasksContext = createContext<TaskContextValue>({
  tasksList: [],
  createTask: async (userId: string, task: Task) => {},
  updateTask: async (task: Task, id: string) => {}
})

interface Props {
  children: React.ReactNode
}

export const TasksProvider: React.FC<Props> = ({children}) => {
  
  const {currentUser} = useUser()
  const [tasksList, setTasksList] = useState<Task[]>([])
  const [currentTask, setCurrentTask] = useState<CurrentTask>({
    _id: '', 
    name: '',
    description: '',
    type: '',
    place: '',
    price: 0,
    userId: ''
  })

  useEffect(() => {
    getAllTask()
      .then(data => {
        setTasksList([...data])
      })
  }, [])

  const createTask = async (userId: string, task: Task) => {
    const res = await addTask({...task, _id: userId})
    const data: Task = await res.json()
    setTasksList([...tasksList, data])
  }

  const updateTask = async (task:Task, id: string) => {
    const res = await editTask(task, id)
    const data = await res.json()
    setTasksList([...tasksList, data])
  }

  return(
    <TasksContext.Provider value={{tasksList, createTask, updateTask}}>
      {children}
    </TasksContext.Provider>
  )
}