/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext, useEffect, useState } from "react";
import { CurrentTask, Task } from "../../interfaces/tasks.interface";
import { addTask, getAllTask } from "../../api/tasks";
import { useUser } from "../users/useUser";

interface TaskContextValue {
  tasksList: Task[],
  createTask: (userId: string, task: Task) => Promise<void>
}

export const TasksContext = createContext<TaskContextValue>({
  tasksList: [],
  createTask: async (userId: string, task: Task) => {}
})

interface Props {
  children: React.ReactNode
}

export const TasksProvider: React.FC<Props> = ({children}) => {
  
  const {currentUser} = useUser()
  const [tasksList, setTasksList] = useState<Task[]>([])
  const [currentTask, setCurrentTask] = useState<CurrentTask>({
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

  return(
    <TasksContext.Provider value={{tasksList, createTask}}>
      {children}
    </TasksContext.Provider>
  )
}