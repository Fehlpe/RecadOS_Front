import axios from "axios";

const api = axios.create({
  baseURL: "https://recados-api.vercel.app",
  headers: {
    "Content-type": "application/json",
  },
});

export { api };
