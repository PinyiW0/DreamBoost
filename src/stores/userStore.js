import { defineStore } from 'pinia';

import memberStore from './memberStore';

const { VITE_URL } = import.meta.env;

export default defineStore('userStore', {
  state: () => ({
    userData: {
      userAvatarImage: '',
      userBirthday: '1970/01/01',
      userGender: 'male',
      userTelephone: '',
      customizeProperty: {
        userEmail: '',
        launchLeader: '',
        launchIdentity: '',
        registerName: '',
        displayName: '',
        introduction: '',
        fanPage: '',
        projectPage: '',
      },
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
          const { userEmail } = memberStore();
          this.userData.customizeProperty.userEmail = userEmail;
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
