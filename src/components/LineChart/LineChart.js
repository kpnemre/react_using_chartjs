import React from 'react'
import { Pie, Line, Bar} from 'react-chartjs-2'
import "./LineChart.css"
// defaults.global.tooltips.enabled = false
// defaults.global.legend.position = 'bottom'

const LineChart = ({chartData}) => {

    console.log("chart:", chartData);

    const date = chartData.map((res)=>res.date)
console.log("date:", date);



const equity = chartData.map((res)=>res.equity)
console.log("equity:", equity);

const quantity = chartData.map((res)=>res.quantity)
console.log("equity:", equity);

const saleCount = chartData.map((res)=>res.saleCount)
console.log("equity:", equity);

  return (
     <>
     <div>
         <p>You can choose any of them</p>
     </div>
    <div className="lineChart">
       
      <Line
       data={{
        
        label:"Choose ",
        labels: date,
        datasets: [
          {
            label: 'Equity versus Time',
            data: equity,
            backgroundColor: 'yellow',
            borderColor: 'blue',
            
          },
          {
            label: 'SalesCount versus Time',
            data: saleCount,
            backgroundColor: 'orange',
            borderColor: 'blue',
          },
          {
            label: 'Quantity versus Time',
            data: quantity,
            backgroundColor: 'red',
            borderColor: 'blue',
          },
        ],
       }}
       width={400}
       height={600}
       options={{ maintainAspectRatio: false }}
      />
    </div>
  

    </>
  )
}

export default LineChart;