import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:3001/api",
  headers: {
    "Content-Type": "application/json",
    //Siempre que existe paso el JWtoken de login que esta en localstorage
    "Authorization": window.localStorage.getItem('JSONToken'),
  },
});

export default API;
