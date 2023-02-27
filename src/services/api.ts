import axios from "axios";

const api = axios.create({
  baseURL: "https://recad-os-db.vercel.app",
  headers: {
    "Content-type": "application/json",
  },
});

export { api };
