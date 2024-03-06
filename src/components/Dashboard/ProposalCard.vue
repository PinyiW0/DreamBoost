<template>
  <div class="card bg-transparent border-0">
    <div
      class="card-body bg-transparent py-2 px-3 py-md-3 px-md-6 px-lg-10 border rounded d-flex justify-content-between align-items-center">
      <div class="w-100 row align-items-center g-0">
        <div class="col-12 col-sm-7">
          <div class="d-flex align-items-center">
            <img src="https://picsum.photos/id/684/600/400" alt="" class="rounded-pill me-2 me-md-4 me-lg-8" width="48"
              height="48">
            <!-- <div class="flex-grow-1 flex-shrink-1 d-inline-flex flex-column justify-content-center text-white bg-primary align-items-stretch"> -->
            <div class="flex-grow-1 text-white text-truncate">
              <p class="mb-0 fs-12 lh-sm mb-1">2024.02.13</p>
              <p class="mb-0 fs-14 fs-md-5 text-truncate">{{proposalData.proposalTitle}}</p>
            </div>
          </div>
        </div>
        <div class="col-12 col-sm-5">
          <div class="d-flex justify-content-sm-end align-items-center" v-if="proposalData.proposalStatus==='review'">
            <button class="btn btn-outline-dark-pr px-2 px-md-4 px-lg-8">查看</button>
            <button class="btn btn-outline-dark-pr px-2 px-md-4 px-lg-8 ms-1 ms-sm-2 ms-md-4"
              @click="emitActive">通過</button>
            <button class="btn btn-outline-dark-pr px-2 px-md-4 px-lg-8 ms-1 ms-sm-2 ms-md-4" @click="emitDeny">退回</button>
          </div>
          <div class="d-flex justify-content-end align-items-center" v-else-if="proposalData.proposalStatus==='active'">
            <p class="mb-0 text-secondary-light">審查通過</p>
            <button class="btn btn-outline-dark-pr px-2 px-md-4 px-lg-8 ms-1 ms-sm-2 ms-md-4">查看</button>
          </div>
        </div>
      </div>
      <!-- <div class="d-flex align-items-center me-1 me-sm-2 md-md-4">
        <img src="https://picsum.photos/id/684/600/400" alt="" class="rounded-pill me-2 me-lg-4" width="48" height="48">
        <div class="d-flex flex-column justify-content-center text-white">
          <p class="mb-0  fs-12 lh-sm mb-1">2024.02.13</p>
          <p class="mb-0 fs-14 fs-md-3 ">{{proposalData.proposalTitle}}</p>
        </div>
      </div> -->
      <!-- 按鈕 -->
      <!-- <div class="d-flex" v-if="proposalData.proposalStatus==='review'">
        <button class="btn btn-outline-dark-pr px-2 px-md-8">查看</button>
        <button class="btn btn-outline-dark-pr px-2 px-md-8 ms-4" @click="emitActive">通過</button>
        <button class="btn btn-outline-dark-pr px-2 px-md-8 ms-4">退回</button>
      </div>
      <div class="d-flex align-items-center" v-else-if="proposalData.proposalStatus==='active'">
        <p class="mb-0 text-secondary-light">審查通過</p>
        <button class="btn btn-outline-dark-pr px-2 px-md-8 ms-2 ms-md-9">查看</button>
      </div> -->
    </div>
  </div>
</template>
<script>
import adminStore from '@/stores/adminStore';
import { mapActions } from 'pinia';

export default {
  props: ['proposalData'],
  data() {
    return {
    };
  },
  methods: {
    ...mapActions(adminStore, ['updateDenyModalData']),
    emitActive() {
      this.$emit('emitActive', this.proposalData.proposalID, this.proposalData.proposalTitle);
    },
    emitDeny() {
      this.updateDenyModalData(this.proposalData.proposalID, this.proposalData.proposalByUserID);
      this.$emit('emitDeny');
    },
  },
};
</script>
<style scoped></style>
