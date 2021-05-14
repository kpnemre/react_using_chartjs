import React from "react";
import {Line, Bar} from "react-chartjs-2";
import "./LineChart.css";


const LineChart = ({ chartData }) => {

  
// Change time format "2019-07-05T00:00:00" to "2019-07-04"
  const date = chartData.map((res) => {
    const time = new Date(res.date);
    var mydate = time.toISOString().slice(0, 10);
    return mydate;
  });


  const equity = chartData.map((res) => res.equity);


  const quantity = chartData.map((res) => res.quantity);


  const saleCount = chartData.map((res) => res.saleCount);


  return (
    <>
<div className="flex-row">

<div className="d-flex flex-wrap justify-content-around ">
      <div className="lineChart m-5">
        <Line
          data={{
            label: "Choose ",
            labels: date,
            datasets: [
              {
                label: "Equity versus Time",
                data: equity,
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgb(255, 99, 132)',
              },
              {
                label: "SalesCount versus Time",
                data: saleCount,
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgb(75, 192, 192)',
              },
              {
                label: "Quantity versus Time",
                data: quantity,
                backgroundColor: 'rgba(153, 102, 255, 0.2)',
                borderColor: 'rgb(153, 102, 255)',
              },
            ],
          }}
          width={400}
          height={600}
          options={{ maintainAspectRatio: false }}
        />
      </div>

      <div className="lineChart m-5">
        <Bar
          data={{
            label: "Choose ",
            labels: date,
            datasets: [
              {
                label: "Equity versus Time",
                data: equity,
                backgroundColor: 'rgba(255, 99, 132, 0.8)',
                borderColor: 'rgb(255, 99, 132)',
              },
              {
                label: "SalesCount versus Time",
                data: saleCount,
                backgroundColor: 'rgba(75, 192, 192, 0.8)',
                borderColor: 'rgb(75, 192, 192)',
              },
              {
                label: "Quantity versus Time",
                data: quantity,
                backgroundColor: 'rgba(153, 102, 255, 0.6)',
                borderColor: 'rgb(153, 102, 255)',
              },
            ],
          }}
          width={400}
          height={600}
          options={{ maintainAspectRatio: false }}
        />
      </div>
      
      </div>
      <div className="d-flex justify-content-start mx-5 flex-column">
        <p> <u>NOTE: </u>Equity, SalesConut, Quantity versus Time buttons are clickable.</p>
        <p> When some of them is clicked, It causes to dissapper related values</p>
      </div>
      </div>
    </>
  );
};

export default LineChart;
