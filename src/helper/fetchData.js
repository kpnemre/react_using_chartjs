import axios from "axios";

const { REACT_APP_BASE_URL } = process.env;


export const fetchData = async () => {
  const response = await axios.get(`${REACT_APP_BASE_URL}`);
  return response?.data;
};
