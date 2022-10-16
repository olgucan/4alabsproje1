import React from 'react'
import { Bar,Line,Pie } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
const  BarChart2 = ({charData}) => {
  return (
    <>
      <Bar data={charData} />;
    </>
  )
}
const  LineChart2 = ({charData}) => {
    return (
      <>
        <Line data={charData} />;
      </>
    )
  }
  const  PieChart2 = ({charData}) => {
    return (
      <>
        <Pie data={charData} />;
      </>
    )
  }
export {BarChart2,LineChart2,PieChart2}


