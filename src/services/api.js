import axios from 'axios';

// json-server --watch -d 180 --host 192.168.15.164 db.json

const api = axios.create({
    baseURL: 'http://192.168.15.164:3000'
});

export { api };