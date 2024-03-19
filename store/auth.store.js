import { defineStore } from 'pinia'
import { registerUser } from '~/services/auth';

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
                await registerUser(body);
            } catch (error) {

            }
        },
        async sendLogin(body) {
            try {
                await loginUser(body);
            } catch (error) {

            }
        }
    }
})