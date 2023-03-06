import axios from "axios";

const API = axios.create({
  baseURL: "http://127.0.0.1:3001/api",
  headers: {
    "Content-Type": "application/json",
    "Authorization": window.localStorage.getItem('JSONToken'),
  },
});

export default API;
