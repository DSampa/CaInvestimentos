import axios from "axios";
import { getToken } from './auth';
const api = axios.create({
    baseURL: "http://127.0.0.1:8000/v1"
});

api.interceptors.request.use(async config => {
    const token = getToken();
    if (token || token !== undefined || token !== null) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default api;