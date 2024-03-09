import { defineStore } from 'pinia';

import launchStore from './launchStore';

export default defineStore('dateStore', {
  actions: {
    minDay() {
      const { launchData } = launchStore();
      let date;
      if (launchData.proposalStartTime) {
        date = new Date(launchData.proposalStartTime);
      } else {
        date = new Date();
      }
      date.setDate(date.getDate() + 7);
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      return `${year}-${month}-${day}`;
    },

    currentDay() {
      const date = new Date();
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      return `${year}-${month}-${day}`;
    },
  },
});
