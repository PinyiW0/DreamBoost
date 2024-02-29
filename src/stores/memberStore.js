import { defineStore } from 'pinia';

const { VITE_URL } = import.meta.env;

export default defineStore('memberStore', {
  state: () => ({
    userData: {
      name: '',
      username: '',
      password: '',
    },
  }),

  actions: {
    // 登入功能
    async postLogin() {
      try {
        const res = await this.$http.post(`${VITE_URL}/dreamboost/login`, this.userData);
        const { token, expired } = res.data.data;
        document.cookie = `db=${token}; expires=${new Date(expired * 1000)};`;
        this.$router.push('/home');
      } catch (error) {
        console.log(error.response.data.message);
      }
    },

    // 註冊功能
    async postSignup() {
      try {
        const res = await this.$http.post(`${VITE_URL}/dreamboost/signup`, this.userData);
        const { message } = res.data;
        console.log(message);
      } catch (error) {
        console.log(error);
      }
    },
  },
});
