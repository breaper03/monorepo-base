import { Doughnut, Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, BarElement, CategoryScale, LinearScale} from "chart.js";
import { useTasks } from "../../../context/tasks/useTasks";
import { Task } from "../../common/interfaces/tasks.interface";

ChartJS.register(ArcElement, Tooltip, Legend);

export const TaskChart = () => {
  const { getUserTask } = useTasks()

  const taskList = getUserTask()
  // const taskList = tasksList
  
  const grouped = taskList.reduce((result: any, transaction) => {
    const type = transaction.type;
    if (!result[type]) {
        result[type] = [];
    }
    result[type].push(transaction);
    return result;
  }, {})

  const investment = grouped.Inversion ? grouped.Inversion.map((e: Task) => e.price) : [0]
  const deposit = grouped.Deposito ? grouped.Deposito.map((e: Task) => e.price) : [0]
  const withdrawal = grouped.Retiro ? grouped.Retiro.map((e: Task) => e.price) : [0]
  console.log("investment", investment)

  const data = {
    labels:[],
    datasets: [
      {
        label:'',
        data: [
          investment !== undefined ? investment.reduce((a: number, b: number) => a + b, 0) : 0.1,
          deposit !== undefined ? deposit.reduce((a: number, b: number) => a + b, 0) : 0.1,
          withdrawal !== undefined ? withdrawal.reduce((a: number, b: number) => a + b, 0) : 0.1,
        ],
        backgroundColor: ["#57F28F", "#F2807C", "#EAF24B"],
        borderColor: ["#57F28F","#F2807C", "#EAF24B"],
        borderWidth: 1,
        RTCIceTransport: true
      },
    ],
  };

  const options = {}

  return (
    <div className="flex items-center justify-center w-full p-10">
        <div className="">
          <Pie data={data} options={options}/>
        </div>
    </div>
  )
}
