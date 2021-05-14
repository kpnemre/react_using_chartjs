import React, { useState, useEffect } from "react";
import { fetchData } from "../helper/fetchData";
import { useParams } from "react-router-dom";

export default function TableDetail() {
  const [datas, setDatas] = useState([]);


  useEffect(() => {
    fetchData()
      .then((res) => setDatas(res.nodes))
      .catch((err) => console.log(err));
 
  }, []);

  const { id } = useParams();
  const ids = parseInt(id);
  const data = datas.filter((f) => f.id === ids)[0];


  return (
    <div className="container mt-5">
      <ul className="list-group">
        <li className="list-group-item">
          <strong>displayName: </strong>
          {data?.displayName}
        </li>
        <li className="list-group-item">
          <strong>acceptedTradeQuantity: </strong>
          {data?.acceptedTradeQuantity}
        </li>
        <li className="list-group-item">
          <strong>accountId: </strong>
          {data?.accountId}
        </li>
        <li className="list-group-item">
          <strong>accountType: </strong>
          {data?.accountType}
        </li>
        <li className="list-group-item">
          <strong>id: </strong>
          {data?.id}
        </li>
        <li className="list-group-item">
          <strong>price: </strong>
          {data?.price}
        </li>

        <li className="list-group-item">
          <strong>quantity: </strong>
          {data?.quantity}
        </li>

        <li className="list-group-item">
          <strong>role: </strong>
          {data?.role}
        </li>
        <li className="list-group-item">
          <strong>tradeDate: </strong>
          {data?.tradeDate}
        </li>
        <li className="list-group-item">
          <strong>volume: </strong>
          {data?.volume}
        </li>

      </ul>
    </div>
  );
}
