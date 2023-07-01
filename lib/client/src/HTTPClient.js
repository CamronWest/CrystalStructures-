import axios from 'axios';
const HTTPClient = axios.create({
    withCredentials: true,
})

export default HTTPClient;
