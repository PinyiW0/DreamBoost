import { defineStore } from 'pinia';

// const { VITE_URL } = import.meta.env;

// defineStore有兩個參數。1.Store名稱;2.屬性參數
export default defineStore('adminStore', {
  // 對應Data，這邊可以直接使用箭頭函式撰寫
  state: () => ({
    denyProposalID: '',
    denyProposalByUserID: '',
    denyProposalTitle: '',
    shouldLoading: false,
    shouldClose: false,
  }),
  // 對應Computed
  getters: {
    // 變數名稱state不是固定的，但是取state比較直觀。
    getUserName: (state) => `傳出的內容為${state.name}`,
  },
  // 對應Methods
  actions: {
    updateDenyModalData(proposalID, proposalByUserID) {
      this.denyProposalID = proposalID;
      this.denyProposalByUserID = proposalByUserID;
    },
    denyProposal() {
      this.shouldLoading = true;
      setTimeout(() => { this.shouldLoading = false; this.shouldClose = true; }, 5000);
      // this.$http.post(`${VITE_URL}/dreamboost/proposal/admin/changeToDraft`, { proposalID: this.denyProposalID });

      // this.$http.post(`${VITE_URL}/dreamboost/message/admin/message`, {
      //   messageToUserID: `${this.denyProposalByUserID}`,
      //   messageTitle: '提案進度變更',
      //   messageContent: `提案退回：${messages}`,
      //   messsageTime: new Date().getTime(),
      // });

      // Promise.all([
      //   this.$http.post(`${VITE_URL}/dreamboost/proposal/admin/changeToDraft`, { proposalID: this.denyProposalID }),
      //   this.$http.post(`${VITE_URL}/dreamboost/message/admin/message`, {
      //     messageToUserID: `${this.denyProposalByUserID}`,
      //     messageTitle: '提案進度變更',
      //     messageContent: `提案退回：${messages}`,
      //     messsageTime: new Date().getTime(),
      //   }),
      // ])
      // .then();
    },
  },
});
