import { defineStore } from 'pinia';
import sweetAlert2Store from './sweetAlert2Store';

const { successAlert } = sweetAlert2Store();

const { VITE_URL } = import.meta.env;

export default defineStore('transactionsStore', {
  state: () => ({
    transactionsData: {
      transactionProposalID: '',
      transactionFeedbackID: '',
      transactionTime: new Date().getTime(),
      transactionShipMethod: '黑喵宅急便',
      transactionStatus: '尚未出貨',
      transactionSponsorName: '',
      transactionSponsorTelephone: '',
      transactionrInvoice: 'personalticket',
      transactionCouponCode: '',
      customizeProperty: {
        // transactionPayment: '',
        // transactionBonus: '',
        transactionLocation: 'main-island',
        // receiverAreaCode: '',
        // receiverCity: '',
        // receiverAddress: '',
        // transactionNote: '',
      },
    },
  }),

  actions: {
    async postTransaction() {
      try {
        const res = await this.$http.post(`${VITE_URL}/dreamboost/transaction/normal/transaction`, this.transactionsData);
        successAlert(`${res.data.message},前往付款畫面`);
      } catch (error) {
        throw new Error(error);
      }
    },

    setDataId() {
      this.transactionsData.transactionProposalID = this.$route.params.id;
      this.transactionsData.transactionFeedbackID = this.$route.params.item;
    },
  },
});
