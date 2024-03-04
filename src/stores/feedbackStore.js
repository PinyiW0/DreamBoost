import { defineStore } from 'pinia';

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
        .get(`${VITE_URL}/dreamboost/proposal/admin/feedbacks?proposalID=${getLaunchID()}`)
        .then((res) => {
          console.log(res);
          this.feedbackSet = res.data.data.result;
        })
        .catch((err) => {
          console.log(err);
        });
    },

    // 新增回饋
    postFeedback(data) {
      this.$http
        .post(`${VITE_URL}/dreamboost/proposal/normal/feedback?proposalID=${getLaunchID()}`, data)
        .then((res) => {
          console.log('success', res);
          this.getFeedback();
        })
        .catch((err) => {
          console.log(err);
        });
    },

    // 修改回饋
    putFeedback(data, feedbackID) {
      this.$http
        .put(`${VITE_URL}/dreamboost/proposal/admin/feedback/${feedbackID}?proposalID=${getLaunchID()}`, data)
        .then((res) => {
          console.log(res);
          this.getFeedback();
        })
        .catch((err) => {
          console.log(err);
        });
    },

    // 刪除回饋
    deleteFeedback(feedbackID) {
      this.$http
        .delete(`${VITE_URL}/dreamboost/proposal/admin/feedback/${feedbackID}?proposalID=${getLaunchID()}`)
        .then((res) => {
          console.log(res);
          this.getFeedback();
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
});
