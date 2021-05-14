import React from "react";
import { useHistory } from "react-router-dom";
import "./Table.css";

const Table = (props) => {
  console.log(props.tableData);
  const history = useHistory();
  const handleRowClick = (res) => {
    history.push(`/details/${res.id}`);
  } 
  return (
    <div className="table-reponsive-sm">
      <table className="table table-reponsive table-striped text-center ">
        <thead>
          <tr>
            <th scope="col">AccountId</th>
            <th scope="col">AccountType</th>
            <th scope="col">DisplayName</th>
            <th scope="col">Role</th>
            <th scope="col">Price</th>
          </tr>
        </thead>

        <tbody>
          {props.tableData
            ? props.tableData.map((res, id) => {
                return (
           
                  
                  <tr className="table-primary" key={id} onClick={()=> handleRowClick(res)} >
                    <th scope="row">{res.accountId}</th>
                    <td>{res.accountType}</td>
                    <td>{res.displayName}</td>
                    <td>{res.role}</td>
                    <td>{res.price}</td>
                  </tr>
              
                );
              })
            : "There is no data check it out !"}
        </tbody>
      
      </table>
    </div>
  );
};

// acceptedTradeQuantity: 30.7262760361826
// accountId: 4073
// accountType: "Retail"
// displayName: "ACC4073"
// id: 665610
// price: 15.9194680051689
// quantity: 7
// role: "Sell"
// tradeDate: "2019-07-16T00:00:00"
// volume: 111.436276036183

export default Table;
