import { defineStore } from 'pinia';

const { VITE_URL } = import.meta.env;

export default defineStore('userStore', {
  state: () => ({
    userData: {
      userAvatarImage: '',
      userBirthday: '',
      userGender: '',
      userTelephone: '',
    },
  }),

  actions: {
    getUserData() {
      this.$http
        .get(`${VITE_URL}/dreamboost/user/normal/userprofile`)
        .then((res) => {
          this.userData = res.data.data.result;
        })
        .catch(() => {
          throw new Error('資料未新增');
        });
    },

    postUserData() {
      this.$http
        .post(`${VITE_URL}/dreamboost/user/normal/userprofile`, this.userData)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
});
