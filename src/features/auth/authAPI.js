import axios from '../../utils/axiosInstance';

function login(username, password) {
    return axios.post('/auth/login', { username, password });
}

export { login };
