import React, {useState, useEffect} from "react";
import './App.css';
import {fetchData} from "./helper/fetchData";
import LineChart from "./components/LineChart/LineChart"
import Table from "./components/Table/Table"




function App() {
  const [chart, setChart] = useState([])

  useEffect(() => {
    fetchData()
    .then((res) => setChart(res.graphData))
    .catch((err) => console.log(err))
  }, [])


  return (
    <div className="App">
     <h1>Emre</h1>
     <LineChart chartData={chart} />
     <Table />


    </div>
  );
}

export default App;
