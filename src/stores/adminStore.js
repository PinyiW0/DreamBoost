import { defineStore } from 'pinia';

// const { VITE_URL } = import.meta.env;

// defineStore有兩個參數。1.Store名稱;2.屬性參數
export default defineStore('adminStore', {
  // 對應Data，這邊可以直接使用箭頭函式撰寫
  state: () => ({
    denyProposalData: '',
    name: 'adminStore',
  }),
  // 對應Computed
  getters: {
    // 變數名稱state不是固定的，但是取state比較直觀。
    getUserName: (state) => `傳出的內容為${state.name}`,
  },
  // 對應Methods
  actions: {
    updateDenyModalData(proposalData) {
      this.denyProposalData = proposalData;
    },
  },
});
