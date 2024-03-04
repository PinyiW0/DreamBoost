import { defineStore } from 'pinia';

const { VITE_URL } = import.meta.env;

export default defineStore('launchStore', {
  state: () => ({
    launchData: {
      proposalTitle: '',
      proposalMainImage: '',
      proposalCategory: '',
      proposalTargetMoney: 5000,
      proposalArticle: '',
      proposalSummary: '',
      proposalStartTime: '',
      proposalEndTime: '',
      proposalFAQs: [],
      proposalImages: [],
    },
  }),

  actions: {
    async postLaunch() {
      try {
        const res = await this.$http.post(
          `${VITE_URL}/dreamboost/proposal/normal/proposal`,
          this.launchData,
        );
        sessionStorage.setItem('launchID', res.data.data.proposalID);
      } catch (error) {
        console.log(error);
      }
    },
  },
});
