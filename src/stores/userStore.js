import { defineStore } from 'pinia';

const { VITE_URL } = import.meta.env;

export default defineStore('userStore', {
  state: () => ({
    userData: {
      userAvatarImage: '',
      userBirthday: '1970/01/01',
      userGender: 'male',
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
        .catch((err) => {
          console.log(err);
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
