import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000",
});

// 192.168.5.124
export default api;
