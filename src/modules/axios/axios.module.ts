import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'https://pzh7jkmkhe.execute-api.us-east-1.amazonaws.com/dev/',
})

export default axiosInstance
