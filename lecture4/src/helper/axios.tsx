import axios from "axios";

const httpClient = axios.create({
  baseURL: "http://localhost:5000"
})
export default httpClient;