import { defineStore } from 'pinia';

import sweetAlert2Store from './sweetAlert2Store';

const { successAlert, errorAlert, confirmAlert } = sweetAlert2Store();
const { VITE_URL } = import.meta.env;

function getLaunchID() {
  return sessionStorage.getItem('launchID');
}

export default defineStore('feedbackStore', {
  state: () => ({
    feedbackSet: {},
  }),

  actions: {
    // 取得所有回饋
    getFeedback() {
      this.$http
        .get(
          `${VITE_URL}/dreamboost/proposal/admin/feedbacks?proposalID=${getLaunchID()}`,
        )
        .then((res) => {
          this.feedbackSet = res.data.data.result;
        })
        .catch((err) => {
          errorAlert(err.response.data.message);
          this.$router.push('/launch');
        });
    },

    // 新增回饋
    async postFeedback(data) {
      let state;
      try {
        const res = await this.$http.post(
          `${VITE_URL}/dreamboost/proposal/normal/feedback?proposalID=${getLaunchID()}`,
          data,
        );
        this.getFeedback();
        successAlert('已新增回饋');
        state = res.data.success;
      } catch (error) {
        errorAlert(error.response.data.message);
      }
      return state;
    },

    // 修改回饋
    async putFeedback(data, feedbackID) {
      let state;
      try {
        const res = await this.$http.put(
          `${VITE_URL}/dreamboost/proposal/admin/feedback/${feedbackID}?proposalID=${getLaunchID()}`,
          data,
        );
        this.getFeedback();
        successAlert('成功修改回饋');
        state = res.data.success;
      } catch (error) {
        errorAlert(error.response.data.message);
      }
      return state;
    },

    // 刪除回饋
    deleteFeedback(feedbackID) {
      confirmAlert('確定要刪除嗎').then((result) => {
        if (result.isConfirmed) {
          this.$http
            .delete(
              `${VITE_URL}/dreamboost/proposal/admin/feedback/${feedbackID}?proposalID=${getLaunchID()}`,
            )
            .then(() => {
              successAlert('成功刪除提案');
              this.getFeedback();
            })
            .catch((err) => {
              errorAlert(err.response.data.message);
            });
        }
      });
    },
  },
});
