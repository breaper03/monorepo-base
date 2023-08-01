import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, PointElement} from "chart.js";
import { useEffect, useState } from "react";
import { getAllOperations } from "../../../api/operations";
import { Operations } from "../../common/interfaces/operations.interface";
import moment from "moment";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

interface Props {
  operationsList: Operations[]
}
export const OperationsChart = ({operationsList}: Props) => {
  
  const data = {
    labels: operationsList.map(x => moment(x.date).format("D-MM")),
    datasets: [
      {
        label:'lolazo',
        data: operationsList.map(x => x.gainLose),
        backgroundColor: "rgb(129 140 248)",
        borderColor: "rgb(129 140 248)",
        borderWidth: 1,
        fill: true,
        tension: 0.1
      },
    ],
  };

  const options = {
    plugins: {
      legend: false
    },
    scales: {
      y: {
        // min: 3,
        // max: 6
      }
    }
  }

  return (
    <Line data={data} options={options}></Line>
  )
}
