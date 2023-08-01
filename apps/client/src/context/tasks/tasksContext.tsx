/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { createContext, useEffect, useState } from "react";
import { CreateTask, GroupedTypeTasks, Task } from "../../components/common/interfaces/tasks.interface";
import { addTask, getAllTask, editTask, deleteTask } from "../../api/tasks";
import { useUser } from "../users/useUser";
import moment from "moment";

interface TaskContextValue {
  tasksList: Task[],
  getUserTask:() => Task[],
  createTask: (task: CreateTask) => Promise<void>
  updateTask: (task: Task, id: string) => Promise<void>
  removeTask: (id: string) => Promise<void>
}

export const TasksContext = createContext<TaskContextValue>({
  tasksList: [],
  getUserTask:() => [],
  createTask: async (_task: CreateTask) => {},
  updateTask: async (_task: Task, _id: string) => {},
  removeTask: async (_id: string) => {}
})

interface Props {
  children: React.ReactNode
}

export const TasksProvider: React.FC<Props> = ({children}) => {
  const {currentUser} = useUser()
  const [tasksList, setTasksList] = useState<Task[]>([])

  useEffect(() => {
    getAllTask()
      .then(data => {
        setTasksList([...data])
      })
  }, [])

  const getUserTask = () => 
    tasksList.filter((task) => task.userId === currentUser._id)
  

  const createTask = async (task: CreateTask) => {
    if (currentUser._id) {
      const res = await addTask({...task, userId: currentUser._id})
      const data: Task = await res.json()
      setTasksList([...tasksList, data])
    } else {
      throw new Error("Por favor inicia sesion");
      
    }
  }
  

  const updateTask = async (task:Task, id: string) => {
    const res = await editTask(task, id)
    const data = await res.json()
    console.log('updateData', data)
    getAllTask().then(data => setTasksList([...data]))
  }

  const removeTask = async (id: string) => {
    await deleteTask(id);
    getAllTask().then(data => setTasksList([...data]))
  }

  return(
    <TasksContext.Provider value={{tasksList, getUserTask, createTask, updateTask, removeTask}}>
      {children}
    </TasksContext.Provider>
  )
}