import { defineStore } from 'pinia';
import sweetAlert2Store from './sweetAlert2Store';
import launchStore from './launchStore';

const { successAlert, errorAlert } = sweetAlert2Store();
const { setUserEmail } = launchStore();
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
        successAlert(res.data.message);
        setTimeout(() => {
          this.$router.go(-1);
        }, 1800);
      } catch (error) {
        errorAlert(error.response.data.message);
      }
    },

    // 註冊功能
    async postSignup() {
      let apiState;
      try {
        const res = await this.$http.post(`${VITE_URL}/dreamboost/signup`, this.userData);
        const { message, success } = res.data;
        apiState = success;
        successAlert(message);
      } catch (error) {
        errorAlert(error.response.data.message);
      }
      return apiState;
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
        const userEmail = res.data.data.result.username;
        setUserEmail(userEmail);
      } catch (error) {
        throw new Error(error);
      }
    },
  },
});
