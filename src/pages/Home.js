import React, { useState, useEffect } from "react";
import { fetchData } from "../helper/fetchData";
import LineChart from "../components/LineChart/LineChart";
import Table from "../components/Table/Table";

const Home = () => {
    const [chart, setChart] = useState([]);
    const [table, setTable] = useState([]);
  
    useEffect(() => {
      fetchData()
        .then((res) => { return( setChart(res.graphData), setTable(res.nodes))})
        .catch((err) => console.log(err));
    }, []);

    return (
        <>
        <h1 className="text-center m-2">React Data Visualization</h1>
  
        <div className="flex-row">
          <h3 className="text-center mt-3">Charts</h3>
          <LineChart chartData={chart} />
          <h3 className="text-center">Table</h3>
  
          <Table tableData={table} />
        </div>
      </>
    )
}

export default Home
