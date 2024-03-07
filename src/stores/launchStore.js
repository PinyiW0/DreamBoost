import { defineStore } from 'pinia';
import sweetAlert2Store from './sweetAlert2Store';

const { successAlert, errorAlert } = sweetAlert2Store();
const { VITE_URL } = import.meta.env;

const initialData = {
  proposalTitle: '',
  proposalMainImage: '',
  proposalCategory: '',
  proposalTargetMoney: 5000,
  proposalArticle: '',
  proposalSummary: '',
  proposalStartTime: '',
  proposalEndTime: '',
  proposalFAQs: [
    {
      question: '',
      answer: '',
    },
  ],
  proposalImages: ['temp'],
  customizeProperty: {
    userName: '',
    userEmail: '',
    userTel: '',
    userLeader: '',
    userIdentity: '',
    userImage: '',
    userRepresent: '',
    registerName: '',
    displayName: '',
    introduction: '',
    fanPage: '',
    projectPage: '',
  },
};

export default defineStore('launchStore', {
  state: () => ({
    // 定義提案格式
    launchData: JSON.parse(JSON.stringify(initialData)),
    launchState: '',
  }),

  actions: {
    // 新增提案
    async postLaunch() {
      let state;
      try {
        const res = await this.$http.post(
          `${VITE_URL}/dreamboost/proposal/normal/proposal`,
          this.launchData,
        );

        const { message, success } = res.data;
        sessionStorage.setItem('launchID', res.data.data.proposalID);
        successAlert(message);
        state = success;
      } catch (error) {
        errorAlert(error.response.data.message);
      }
      return state;
    },

    // 更新提案
    async putLaunch(launchID) {
      let state;
      try {
        const res = await this.$http.put(
          `${VITE_URL}/dreamboost/proposal/admin/proposal/${launchID}`,
          this.launchData,
        );
        const { message, success } = res.data;
        successAlert(message);
        state = success;
      } catch (error) {
        errorAlert(error.response.data.message);
      }
      return state;
    },

    // 取得指定提案
    async getLaunch(launchID) {
      try {
        const res = await this.$http.get(
          `${VITE_URL}/dreamboost/proposal/normal/proposal/${launchID}`,
        );
        this.launchData = res.data.data.result;
      } catch (error) {
        throw new Error(error);
      }
    },

    // 提交提案
    async submitLaunch() {
      let state;
      const launchID = sessionStorage.getItem('launchID');
      try {
        const res = await this.$http.post(
          `${VITE_URL}/dreamboost/proposal/admin/changeToReview`,
          {
            proposalID: launchID,
          },
        );
        state = res.data.success;
        successAlert('提案已提交審核');
        sessionStorage.removeItem('launchID');
        this.launchData = JSON.parse(JSON.stringify(initialData));
      } catch (error) {
        errorAlert(error.response.data.message);
      }
      return state;
    },

    // 設定 Email
    setUserEmail(memberEmail) {
      this.launchData.customizeProperty.userEmail = memberEmail;
    },
  },
});
