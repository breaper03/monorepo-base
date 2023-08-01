import { useMemo, useState } from "react";
import { useTasks } from "../../context/tasks/useTasks";
import { MdOutlineBlock, MdOutlineDelete } from "react-icons/md"
import { TasksUpdate } from "./actions/TasksUpdate";
import { TaskAdd } from "./actions/TaskAdd";
import { TransactionTypeEnum } from "../../enums/TransactionTypeEnum";
import "./style.css"
import moment from "moment";
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion, {AccordionProps} from '@mui/material/Accordion';
import MuiAccordionSummary, {AccordionSummaryProps} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import { styled } from "@mui/material";

const Accordion = styled((props : AccordionProps) => (<MuiAccordion disableGutters elevation={0} square TransitionProps={{ unmountOnExit: true }} {...props}/>))(({theme}) => ({
  // border: `2px solid #6366F1`,
  margin: 5,
  backgroundColor: "transparent",
  color: "white",
  borderRadius: "1em",
  '&:not(:last-child)': {
    // borderBottom: 0
  },
  '&:before': {
    display: 'none',
  }
}));

const AccordionSummary = styled((props : AccordionSummaryProps) => (
    <MuiAccordionSummary
      expandIcon={< ArrowForwardIosSharpIcon sx = {{ color: "#fafafa", fontSize: '0.9rem' }}/>}
      {...props}/>
  )) (({theme}) => ({
    color: "#fafafa",
    flexDirection: 'row-reverse',
    borderRadius: "1em",  
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
      color: "#fafafa",
      transform: 'rotate(90deg)'

    },
    '& .MuiAccordionSummary-content': {
      color: "#fafafa",
      marginLeft: theme.spacing(1)
    },
    '&:hover': {
      backgroundColor: "#3f4d5f",
    }
  }));

const AccordionDetails = styled(MuiAccordionDetails)(({theme}) => ({
    padding: theme.spacing(1),
    color: "#fafafa",
    // borderTop: '2px solid #8284FF',
}));
export const TaskTable = () => {

  const { getUserTask, removeTask } = useTasks()

  const columns = useMemo(() => [
    {field: 'name', headerName: 'Nombre'},
    {field: 'type', headerName: 'Tipo'},
    {field: 'price', headerName: 'Precio'},
    {field: 'ganancia', headerName: 'Descripcion'},
    {field: 'start - end', headerName: 'Moneda'},
    {field: 'actions', headerName: 'Acciones'},
  ], [])

  const [expanded, setExpanded] = useState<string | false>('panel0');

  const handleChange = (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
    setExpanded(newExpanded ? panel : false);
  };

  const rows = getUserTask();

  const investment = rows.filter((el) => el.type === TransactionTypeEnum[0])
  const deposit = rows.filter((el) => el.type === TransactionTypeEnum[1])
  const withdrawal = rows.filter((el) => el.type === TransactionTypeEnum[2])

  return ( 
    <>
      <div className="w-[770px] mx-auto mt-10">
        <div className="flex flex-wrap px-4 py-3 w-full items-center justify-between text-white">
          <div className="font-semibold">
            <h1>Transactions:</h1>
          </div>
          <TaskAdd />
        </div>
        {/* invesments */}
        <Accordion expanded={expanded === "panel1"} onChange={handleChange("panel1")}>
          <AccordionSummary>
            <div className="flex flex-wrap items-center justify-around">
              <span>Inversiones</span> <div className="bg-[#57F28F] w-[1.2em] h-[0.5em] rounded-xl ml-2"></div>
            </div>
          </AccordionSummary>
          <AccordionDetails>
            <div className="relative overflow-x-auto shadow-2xl sm:rounded-lg mx-auto table-scroll">
              <table className="w-full text-sm text-left text-slate-600 dark:text-gray-600">
                <thead className="text-xs text-gray-600 uppercase bg-[#A5B4FC]">
                  <tr>
                      {
                        columns.map((col) => (
                          <th scope="col" className="px-6 py-3" key={Math.random()}>
                            {col.field}
                          </th>
                        ))
                      }
                  </tr>
                </thead>
                <tbody className="bg-indigo-200">
                  {
                    investment.length
                      ? (
                        investment.map((row) => {
                            return (
                              <tr key={Math.random()} 
                                className={
                                  `border-b font-semibold delay-75 h-[90px] transition border-gray-400 bg-slate-300 ${
                                    moment(Date.now()) >= moment(row.dateTo)
                                      ? (`hover:bg-green-200 hover:bg-opacity-75`)
                                      : (`hover:bg-yellow-200 hover:bg-opacity-75`)
                                  }`
                                }
                              >
                                <th scope="row" className="px-6 py-4 font-mediumwhitespace-nowrap text-indigo-500" key={Math.random()}>
                                    {row.name}
                                </th>
                                <td className="px-6 py-4" key={Math.random()}>
                                    {row.type}
                                </td>
                                <td className="px-6 py-4" key={Math.random()}>
                                    ${row.price}
                                </td>
                                <td className="px-6 py-4" key={Math.random()}>
                                    <span className="flex justify-start">{row.description}</span>
                                    <span className="flex justify-start">-----</span>
                                    <span className="flex justify-start">
                                      {
                                        row.currency === "USD" 
                                          ? (`$${Math.round((+row.description.split("%")[0]/100 * row.price) + row.price)}`) 
                                          : (`Bs.${Math.round((+row.description.split("%")[0]/100 * row.price) + row.price)}`)
                                      }
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-center justify-between" key={Math.random()}>
                                  <span className="flex justify-start">
                                    {`${moment(row.dateFrom).format("DD-MMM-YY")}`}
                                  </span>
                                  <span className="flex justify-start"> --------- </span>
                                  <span className="flex justify-start">
                                    {`${moment(row.dateTo).format("DD-MMM-YY")}`}
                                  </span>
                                </td>
                                <td className="px-5 py-4 flex flex-wrap mx-auto text-[1.5em] items-center mt-3" key={Math.random()}>
                                  <div className="mt-1">
                                    <TasksUpdate value={row}/>
                                  </div>
                                  <button 
                                    className="hover:text-indigo-500 mx-auto"
                                    onClick={() => removeTask(row._id)}
                                  ><MdOutlineDelete/></button>
                                </td>
                              </tr>
                            )
                        })
                      ) : (
                        <tr className="border-b font-semibold delay-75 transition bg-slate-300 border-gray-400 hover:bg-[#cbd5e1de] hover:text-indigo-500">
                              <th scope="row" className="px-6 py-4 font-mediumwhitespace-nowrap text-indigo-500" key={Math.random()}>
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
                              <td className="px-6 py-4" key={Math.random()}>
                                  "N/A"
                              </td>
                              <td className="px-5 py-4 flex flex-wrap mx-auto text-[1.5em] items-center justify-start" key={Math.random()}>
                                <div className="">
                                  <MdOutlineBlock/>
                                </div>
                                <button 
                                  className="hover:text-slate-100 mx-auto"
                                ><MdOutlineBlock/></button>
                              </td>
                            </tr>
                      )
                  }
                </tbody>
              </table>
            </div>
          </AccordionDetails>
        </Accordion>
        {/* deposit */}
        <Accordion expanded={expanded === "panel2"} onChange={handleChange("panel2")}>
          <AccordionSummary>
            <div className="flex flex-wrap items-center justify-around">
              <span>Depositos</span> <div className="bg-[#F2807C] w-[1.2em] h-[0.5em] rounded-xl ml-2"></div>
            </div>
          </AccordionSummary>
          <AccordionDetails>
            <div className="relative overflow-x-auto shadow-2xl sm:rounded-lg mx-auto table-scroll">
              <table className="w-full text-sm text-left text-slate-600 dark:text-gray-600">
                <thead className="text-xs text-gray-600 uppercase bg-[#A5B4FC]">
                  <tr>
                      {
                        columns.map((col) => (
                          <th scope="col" className="px-6 py-3" key={Math.random()}>
                            {col.field}
                          </th>
                        ))
                      }
                  </tr>
                </thead>
                <tbody className="bg-indigo-200">
                  {
                    deposit.length
                      ? (
                        deposit.map((row) => {
                            return (
                              <tr key={Math.random()} 
                                className={
                                  `border-b font-semibold delay-75 h-[90px] transition border-gray-400 bg-slate-300 ${
                                    moment(Date.now()) >= moment(row.dateTo)
                                      ? (`hover:bg-green-200 hover:bg-opacity-75`)
                                      : (`hover:bg-yellow-200 hover:bg-opacity-75`)
                                  }`
                                }
                              >
                                <th scope="row" className="px-6 py-4 font-mediumwhitespace-nowrap text-indigo-500" key={Math.random()}>
                                    {row.name}
                                </th>
                                <td className="px-6 py-4" key={Math.random()}>
                                    {row.type}
                                </td>
                                <td className="px-6 py-4" key={Math.random()}>
                                    ${row.price}
                                </td>
                                <td className="px-6 py-4" key={Math.random()}>
                                    <span className="flex justify-start">{row.description}</span>
                                    <span className="flex justify-start">-----</span>
                                    <span className="flex justify-start">
                                      {
                                        row.currency === "USD" 
                                          ? (`$${Math.round((+row.description.split("%")[0]/100 * row.price) + row.price)}`) 
                                          : (`Bs.${Math.round((+row.description.split("%")[0]/100 * row.price) + row.price)}`)
                                      }
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-center justify-between" key={Math.random()}>
                                  <span className="flex justify-start">
                                    {`${moment(row.dateFrom).format("DD-MMM-YY")}`}
                                  </span>
                                  <span className="flex justify-start"> --------- </span>
                                  <span className="flex justify-start">
                                    {`${moment(row.dateTo).format("DD-MMM-YY")}`}
                                  </span>
                                </td>
                                <td className="px-5 py-4 flex flex-wrap mx-auto text-[1.5em] items-center mt-3" key={Math.random()}>
                                  <div className="mt-1">
                                    <TasksUpdate value={row}/>
                                  </div>
                                  <button 
                                    className="hover:text-indigo-500 mx-auto"
                                    onClick={() => removeTask(row._id)}
                                  ><MdOutlineDelete/></button>
                                </td>
                              </tr>
                            )
                        })
                      ) : (
                        <tr className="border-b font-semibold delay-75 transition bg-slate-300 border-gray-400 hover:bg-[#cbd5e1de] hover:text-indigo-500">
                              <th scope="row" className="px-6 py-4 font-mediumwhitespace-nowrap text-indigo-500" key={Math.random()}>
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
                              <td className="px-6 py-4" key={Math.random()}>
                                  "N/A"
                              </td>
                              <td className="px-5 py-4 flex flex-wrap mx-auto text-[1.5em] items-center justify-start" key={Math.random()}>
                                <div className="">
                                  <MdOutlineBlock/>
                                </div>
                                <button 
                                  className="hover:text-slate-100 mx-auto"
                                ><MdOutlineBlock/></button>
                              </td>
                            </tr>
                      )
                  }
                </tbody>
              </table>
            </div>
          </AccordionDetails>
        </Accordion>
        {/* withdrawal */}
        <Accordion expanded={expanded === "panel3"} onChange={handleChange("panel3")}>
          <AccordionSummary>
            <div className="flex flex-wrap items-center justify-around">
              <span>Retiros</span> <div className="bg-[#EAF24B] w-[1.2em] h-[0.5em] rounded-xl ml-2"></div>
            </div>
          </AccordionSummary>
          <AccordionDetails>
            <div className="relative overflow-x-auto shadow-2xl sm:rounded-lg mx-auto table-scroll">
              <table className="w-full text-sm text-left text-slate-600 dark:text-gray-600">
                <thead className="text-xs text-gray-600 uppercase bg-[#A5B4FC]">
                  <tr>
                      {
                        columns.map((col) => (
                          <th scope="col" className="px-6 py-3" key={Math.random()}>
                            {col.field}
                          </th>
                        ))
                      }
                  </tr>
                </thead>
                <tbody className="bg-indigo-200">
                  {
                    withdrawal.length
                      ? (
                        withdrawal.map((row) => {
                            return (
                              <tr key={Math.random()} 
                                className={
                                  `border-b font-semibold delay-75 h-[90px] transition border-gray-400 bg-slate-300 ${
                                    moment(Date.now()) >= moment(row.dateTo)
                                      ? (`hover:bg-green-200 hover:bg-opacity-75`)
                                      : (`hover:bg-yellow-200 hover:bg-opacity-75`)
                                  }`
                                }
                              >
                                <th scope="row" className="px-6 py-4 font-mediumwhitespace-nowrap text-indigo-500" key={Math.random()}>
                                    {row.name}
                                </th>
                                <td className="px-6 py-4" key={Math.random()}>
                                    {row.type}
                                </td>
                                <td className="px-6 py-4" key={Math.random()}>
                                    ${row.price}
                                </td>
                                <td className="px-6 py-4" key={Math.random()}>
                                    <span className="flex justify-start">{row.description}</span>
                                    <span className="flex justify-start">-----</span>
                                    <span className="flex justify-start">
                                      {
                                        row.currency === "USD" 
                                          ? (`$${Math.round((+row.description.split("%")[0]/100 * row.price) + row.price)}`) 
                                          : (`Bs.${Math.round((+row.description.split("%")[0]/100 * row.price) + row.price)}`)
                                      }
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-center justify-between" key={Math.random()}>
                                  <span className="flex justify-start">
                                    {`${moment(row.dateFrom).format("DD-MMM-YY")}`}
                                  </span>
                                  <span className="flex justify-start"> --------- </span>
                                  <span className="flex justify-start">
                                    {`${moment(row.dateTo).format("DD-MMM-YY")}`}
                                  </span>
                                </td>
                                <td className="px-5 py-4 flex flex-wrap mx-auto text-[1.5em] items-center mt-3" key={Math.random()}>
                                  <div className="mt-1">
                                    <TasksUpdate value={row}/>
                                  </div>
                                  <button 
                                    className="hover:text-indigo-500 mx-auto"
                                    onClick={() => removeTask(row._id)}
                                  ><MdOutlineDelete/></button>
                                </td>
                              </tr>
                            )
                        })
                      ) : (
                        <tr className="border-b font-semibold delay-75 transition bg-slate-300 border-gray-400 hover:bg-[#cbd5e1de] hover:text-indigo-500">
                              <th scope="row" className="px-6 py-4 font-mediumwhitespace-nowrap text-indigo-500" key={Math.random()}>
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
                              <td className="px-6 py-4" key={Math.random()}>
                                  "N/A"
                              </td>
                              <td className="px-5 py-4 flex flex-wrap mx-auto text-[1.5em] items-center justify-start" key={Math.random()}>
                                <div className="">
                                  <MdOutlineBlock/>
                                </div>
                                <button 
                                  className="hover:text-slate-100 mx-auto"
                                ><MdOutlineBlock/></button>
                              </td>
                            </tr>
                      )
                  }
                </tbody>
              </table>
            </div>
          </AccordionDetails>
        </Accordion>
      </div>
    </>
  )
}