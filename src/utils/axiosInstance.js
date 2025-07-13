// src/utils/axiosInstance.js
import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:80',
    withCredentials: true,
});

export default instance;
