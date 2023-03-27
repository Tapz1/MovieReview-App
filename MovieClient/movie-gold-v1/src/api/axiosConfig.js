import axios from 'axios';

export default axios.create({
    baseURL: 'https://bc63-2601-18d-8d7f-960-e50a-fee-d8aa-176f.ngrok.io',
    //baseURL: 'http://localhost:8080',
    headers: {"ngrok-skip-browser-warning": "true"}
});