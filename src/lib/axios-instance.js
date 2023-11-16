import axios from "axios";

const instance = axios.create({
    baseURL: 'https://express-wage.onrender.com',
    timeout: 3600,
    headers: {
        'Content-Type': 'application/json',
    },
  });

  export default instance;