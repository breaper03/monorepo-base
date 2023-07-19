import { useMemo, useState } from "react";
import { useTasks } from "../../context/tasks/useTasks";
import { MdModeEditOutline, MdOutlineDelete } from "react-icons/md"
import { TaskActions } from "./actions/TasksActions";

export const TaskTable = () => {

  const { tasksList, removeTask} = useTasks()

  const [openModal, setOpenModal] = useState(false)

  const columns = useMemo(() => [
    {field: 'name', headerName: 'Nombre', width: 150},
    {field: 'description', headerName: 'Descripcion', width: 150},
    {field: 'type', headerName: 'Tipo', width: 150},
    {field: 'place', headerName: 'Tienda', width: 150},
    {field: 'price', headerName: 'Precio', width: 150},
    {field: 'actions', headerName: 'Acciones', width: 150},
  ], [])

  const rows = tasksList;

  return ( 
    <>
      <div className="w-[800px] mx-auto mt-10">

        <div className="flex flex-wrap px-4 py-3 w-full items-center justify-between text-white">
          <div className="font-semibold">
            <h1>Transactions:</h1>
          </div>
          <button className="bg-indigo-500 px-4 py-2 rounded-lg text-sm">add transaction</button>
        </div>
        <div className="relative overflow-x-auto shadow-2xl sm:rounded-lg mx-auto">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-slate-700 dark:text-gray-400">
                <tr>
                    {
                      columns.map((col) => (
                        <th scope="col" className="px-6 py-3">
                          {col.field}
                        </th>
                      ))
                    }
                </tr>
              </thead>
                {
                  rows.map((row) => (
                    <tbody key={row._id}>
                      <tr className="border-b font-semibold delay-75 transition bg-gray-900 border-gray-700 hover:bg-[#1f2937ea] hover:text-indigo-500">
                        <th scope="row" className="px-6 py-4 font-mediumwhitespace-nowrap text-indigo-500">
                            {row.name}
                        </th>
                        <td className="px-6 py-4">
                            {row.description}
                        </td>
                        <td className="px-6 py-4">
                            {row.type}
                        </td>
                        <td className="px-6 py-4">
                            {row.place}
                        </td>
                        <td className="px-6 py-4">
                            {row.price}
                        </td>
                        <td className="px-5 py-4 flex mx-auto text-[1.5em]">
                          <button onClick={() => setOpenModal(true)} className="hover:text-slate-100 mr-1"><TaskActions value={row}/></button>
                          <button 
                            className="hover:text-slate-100"
                            onClick={() => removeTask(row._id)}
                          ><MdOutlineDelete/></button>
                        </td>
                      </tr>
                    </tbody>
                  ))
                }
            </table>
            <nav className="flex items-center justify-between pt-4 mx-auto px-3 py-2 bg-gray-900" aria-label="Table navigation">
              <span className="text-sm font-normal text-gray-500 dark:text-gray-400">Showing <span className="font-semibold text-gray-900 dark:text-white">1-10</span> of <span className="font-semibold text-gray-900 dark:text-white">1000</span></span>
              <ul className="inline-flex -space-x-px text-sm h-8">
                  <li>
                      <a href="#" className="flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</a>
                  </li>
                  <li>
                      <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
                  </li>
                  <li>
                      <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
                  </li>
                  <li>
                      <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</a>
                  </li>
              </ul>
          </nav>
        </div>
      </div>

    </>
  )
}