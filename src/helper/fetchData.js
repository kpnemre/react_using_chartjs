import axios from "axios";

const { REACT_APP_BASE_URL } = process.env;


export const fetchData = async () => {
  console.log("env:", process.env);

  const response = await axios.get(`${REACT_APP_BASE_URL}`);
  console.log(response);
  return response?.data;
};
