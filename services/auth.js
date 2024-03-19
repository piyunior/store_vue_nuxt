import axios from 'axios';

const URL_API = 'http://127.0.0.1:8000'

async function registerUser(payload) {
    try {
        const response = await axios.post(URL_API, payload);
        return response;
    } catch (error) {
        return null;
    }
}

async function loginUser(payload) {
    try {
        const response = await axios.post(URL_API, payload);
        return response;
    } catch (error) {
        return null
    }
}

export {
    registerUser
}