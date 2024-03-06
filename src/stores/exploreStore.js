import { defineStore } from 'pinia';

const { VITE_URL } = import.meta.env;

export default defineStore('prposalsStore', {
  // data,methods, computed
  // state,actions, getters
  state: () => ({
    proposals: [],
  }),

  actions: {
    // 取得所有上架的提案資料
    getProposals() {
      this.$http
        .get(`${VITE_URL}/dreamboost/proposal/guest/inActiveProposals`)
        .then((res) => {
          if (res.data.success) {
            this.proposals = res.data.data.result;
            console.log(this.proposals);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    filterProposal() {},
  },

  getters: {
    useProposals: ({ proposals }) => proposals,
  },
});
