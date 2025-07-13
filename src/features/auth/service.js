import axios from "../../utils/axiosInstance";

function login(username, password) {
    return axios.post("/auth/login", { username, password });
}

function register(user) {
    return axios.post("/auth/register", { ...user });
}

export { login, register };
