import { defineStore } from 'pinia'
import axios from 'axios';

const URL_API = 'http://127.0.0.1:8000'

export const authStore = defineStore('auth', {
    state: () => ({
        isRegister: false
    }),
    getters: {
        register: (state) => state.isRegister
    },
    actions: {
        changeStateRegister() {
            this.isRegister = !this.isRegister ? true : false;
        },
        async sendRegister(body) {
            try {
                const response = await axios.post(`${URL_API}/api/login`, body);
            } catch (error) {
                console.log('Error')
            }
        },
        async sendLogin(body) {
            try {
                const response = await axios.post(`${URL_API}/api/login`, body);
                if (response.status == 200) {
                    sessionStorage.setItem('token', response.data.token);
                    return true;
                }
            } catch (error) {
                console.log(error)
            }
        }
    }
})