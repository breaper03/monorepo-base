import { useEffect, useState } from "react"
import { Operations } from "../common/interfaces/operations.interface"
import { getAllOperations } from "../../api/operations"
import { OperationsAdd } from "./actions/OperationsAdd"
import { BsGraphUpArrow, BsGraphDownArrow, BsCalendar3 } from "react-icons/bs"
import { FaCoins } from "react-icons/fa";
import { OperationsChart } from "./actions/OperationsChart"
import moment from "moment"
import { Tooltip } from "@mui/material"
import { useTasks } from "../../context/tasks/useTasks"
import { Task } from "../common/interfaces/tasks.interface"
export const OperationsList = () => {

  const [operationsList, setOperationsList] = useState<Operations[]>([])

  const {tasksList} = useTasks()

  const BalanceDeriv = tasksList.filter((x: Task) => x.name.includes("Deriv")).map((x: Task) => x.price).reduce((a, b) => a + b, 0)
  const BalanceTotal = operationsList
                      .filter((op) => op.gainLose > 0)
                      .map((x) => x.gainLose)
                      .reduce((a, b) => a + b, 0) 
                      + 
                    operationsList
                      .filter((op) => op.gainLose < 0)
                      .map((x) => x.gainLose)
                      .reduce((a, b) => a + b, 0)

  const total =  BalanceTotal - BalanceDeriv


  useEffect(() => {
    getAllOperations()
      .then((data) => {
        setOperationsList([...data])
      })
  }, [])
  
  return (
    <>
      <div className="bg-gray-700 p-5 w-full rounded-lg">
        {/* top */}
        <div className="flex flex-wrap items-center justify-between font-semibold text-white">
          <h1>Operaciones:</h1>
          <OperationsAdd />
        </div>
        <div className="flex flex-wrap items-center justify-around mt-2 font-semibold text-white">
          <span>
            Balance: {BalanceTotal}
          </span>
          {
            total > 0 
              ? <span className="text-green-400 border-2 border-green-400 px-2 rounded-lg">Ganando: {total}</span>
              : <span className="text-red-400 border-2 border-red-400 px-2 rounded-lg">Perdiendo: {total}</span>
          }
          <span>
            Fondo Base: {BalanceDeriv}
          </span>
        </div>
        {/* botton and list */}
        <div className="flex flex-col  p-1 mt-5">
          <OperationsChart operationsList={operationsList}/>
          <div className="flex flex-col justify-space-between mt-2 items-center w-full">
            {operationsList.map((op: Operations) => (
              <div 
                key={Math.random()}
                className="bg-slate-600 my-2 py-2 px-6 text-[0.9em] rounded-lg shadow-lg flex items-center jsutify-center gap-2 text-indigo-300 cursor-pointer"
              >
                <BsCalendar3/><Tooltip title="Fecha">{moment(op.date).format("D, MMM YY, LT")},</Tooltip>
                {
                  op.gainLose > 0 
                    ? <Tooltip title="Ganancia"><span className="text-green-400 mx-2 flex gap-2 items-center"><BsGraphUpArrow/> +{op.gainLose}</span></Tooltip>
                    : <Tooltip title="Perdida"><span className="text-red-400 mx-2 flex gap-2 items-center"><BsGraphDownArrow/> {op.gainLose}</span></Tooltip>
                }
                <Tooltip title="Lotaje" sx={{display: "flex", flexDirection: "row", justifyContent: "center"}}>
                  {op.lote}<FaCoins/>
                </Tooltip>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
