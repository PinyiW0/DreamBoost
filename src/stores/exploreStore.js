import { defineStore } from 'pinia';

const { VITE_URL } = import.meta.env;

export default defineStore('prposalsStore', {
  // data,methods, computed
  // state,actions, getters
  state: () => ({
    proposals: [],
    product: null,
  }),

  actions: {
    // 取得所有上架的提案資料
    getProposals() {
      this.$http
        .get(`${VITE_URL}/dreamboost/proposal/guest/inActiveProposals`)
        .then((res) => {
          if (res.data.success) {
            this.proposals = res.data.data.result;
          }
        })
        .catch((err) => {
          throw new Error(err);
        });
    },
  },

  getters: {
    useProposals: ({ proposals }) => proposals,

    // 選出單一產品
    singleProposal: ({ proposals, $route }) => proposals[$route.params.id],

    // 取出單一回饋
    singleFeedback: ({ proposals, $route }) => {
      const singleProposal = proposals[$route.params.id];
      return singleProposal?.proposalFeedbacks[$route.params.item];
    },
  },
});
