import axios from 'axios';

export default axios.create({
    //baseURL: 'ngrok.io',
    baseURL: 'http://localhost:8080',
    headers: {"ngrok-skip-browser-warning": "true"}
});