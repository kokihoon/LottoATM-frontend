import axios from "axios";

const Api = axios.create({
  baseURL: "http://localhost:8080/",
  headers: {
    "Content-Type": "application/json",
    Authorization: ""
  }
});

export default Api;
