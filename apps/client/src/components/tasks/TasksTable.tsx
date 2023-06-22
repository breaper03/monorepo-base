import { useTasks } from "../../context/tasks/useTasks";
import { Table } from "../common/Table/Table";
export const TaskTable = () => {

  const { tasksList } = useTasks()

  const heads = ['Nombre', 'Descripcion', 'Tipo', 'Tienda', 'Precio', 'Acciones']

  const rows = tasksList;

  return ( 
    <>
      <Table heads={heads} rows={rows}/>
    </>
  )
}