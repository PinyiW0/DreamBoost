import { defineStore } from 'pinia';

const { VITE_URL } = import.meta.env;

export default defineStore('memberStore', {
  state: () => ({
    userData: {
      name: '',
      username: '',
      password: '',
    },
    userEmail: '',
  }),

  actions: {
    // 登入功能
    async postLogin() {
      try {
        const res = await this.$http.post(`${VITE_URL}/dreamboost/login`, this.userData);
        const { token, expired } = res.data.data;
        document.cookie = `db=${token}; expires=${new Date(expired * 1000)};`;
        this.$router.go(-1);
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

    // 檢查使用者是否登入
    async postCheckToken() {
      const token = document.cookie
        .split('; ')
        .find((row) => row.startsWith('db'))
        ?.split('=')[1];
      this.$http.defaults.headers.common.Authorization = token;
      try {
        const res = await this.$http.post(`${VITE_URL}/dreamboost/checktoken`);
        this.userEmail = await res.data.data.result.username;
      } catch (error) {
        this.$router.push('/member');
      }
    },
  },
});
