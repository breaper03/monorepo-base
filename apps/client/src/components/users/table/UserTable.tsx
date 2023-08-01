import { useMemo } from "react";
import { useUser } from "../../../context/users/useUser";
import moment from "moment";
export const UsersTable = () => {

  const { usersList } = useUser()

  const columns = useMemo(() => [
    {field: 'name', headerName: 'Nombre'},
    {field: 'lastname', headerName: 'Apellido'},
    {field: 'userName', headerName: 'Usuario'},
    {field: 'email', headerName: 'Email'},
    {field: 'phone', headerName: 'Telefono'},
    {field: 'signed', headerName: 'IP'}
  ], [])

  const rows = usersList;

  return ( 
    <>
      <div className="w-[800px] mx-auto mt-10">
        <div className="flex flex-wrap px-4 py-3 w-full items-center justify-between text-white">
          <div className="font-semibold">
            <h1>Users:</h1>
          </div>
        </div>
        <div className="overflow-x-auto shadow-2xl rounded-lg mx-auto">
            <table className="w-full text-sm text-left text-slate-600 dark:text-gray-600 mx-auto">
              <thead className="text-xs text-gray-600 uppercase bg-[#A5B4FC] mx-0">
                <tr>
                    {
                      columns.map((col) => (
                        <th scope="col" className="px-4 py-3" key={Math.random()}>
                          {col.field}
                        </th>
                      ))
                    }
                </tr>
              </thead>
              <tbody className="bg-indigo-600">
                {
                  rows.length
                    ? (
                        rows.map((row) => {
                          return (
                            <tr key={Math.random()} className="border-b font-semibold delay-75 h-[90px] transition bg-slate-300 border-gray-400 hover:bg-[#cbd5e1de] hover:text-indigo-500">
                              <th scope="row" className="px-4 py-4 font-mediumwhitespace-nowrap text-indigo-500" key={Math.random()}>
                                  {row.name}
                              </th>
                              <td className="px-6 py-4" key={Math.random()}>
                                  {row.lastname}
                              </td>
                              <td className="px-6 py-4" key={Math.random()}>
                                  {row.userName}
                              </td>
                              <td className="px-6 py-4" key={Math.random()}>
                                  {row.email}
                              </td>
                              <td className="px-6 py-4" key={Math.random()}>
                                  {row.phone}
                              </td>
                              <td className="px-6 py-4" key={Math.random()}>
                                  {row.signed}
                              </td>
                            </tr>
                          )
                        })
                      ) : (
                        <tr className="border-b font-semibold delay-75 transition bg-slate-300 border-gray-400 hover:bg-[#cbd5e1de] hover:text-indigo-500">
                          <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap text-indigo-500" key={Math.random()}>
                              "N/A"
                          </th>
                          <td className="px-6 py-4" key={Math.random()}>
                              "N/A"
                          </td>
                          <td className="px-6 py-4" key={Math.random()}>
                              "N/A"
                          </td>
                          <td className="px-6 py-4" key={Math.random()}>
                              "N/A"
                          </td>
                        </tr>
                      )
                }
              </tbody>
            </table>
        </div>
      </div>
    </>
  )
}