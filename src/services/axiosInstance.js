import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: 'http://54.255.135.69:7005/v1/api/admin/'
  });