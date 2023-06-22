import { useContext } from "react";
import { TasksContext } from "./tasksContext";
export const useTasks = () => {
  const context = useContext(TasksContext)
  if (!context) throw new Error('las tareas deberian estar dentro de un task provider')
  return context
}