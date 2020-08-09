import axios from "axios";

const api = axios.create({
  baseURL: "http://172.20.10.4:3333",
});

export default api;
