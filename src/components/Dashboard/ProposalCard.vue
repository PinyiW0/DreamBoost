<template>
  <div class="card bg-transparent border-0">
    <div class="card-body bg-transparent py-3 px-6 px-lg-10 border rounded d-flex justify-content-between align-items-center">
      <div class="d-flex align-items-center">
        <img src="https://picsum.photos/id/684/600/400" alt="" class="rounded-pill me-2 me-lg-4" width="48" height="48">
        <div class="d-flex flex-column justify-content-center text-white">
          <p class="mb-0  fs-12 lh-sm mb-1">2024.02.13</p>
          <p class="mb-0  ">{{proposalData.proposalTitle}}</p>
        </div>
      </div>
      <!-- 按鈕 -->
      <div class="d-flex" v-if="proposalData.proposalStatus==='review'">
        <button class="btn btn-outline-dark-pr px-8">查看</button>
        <button class="btn btn-outline-dark-pr px-8 ms-4" @click="emitActive">通過</button>
        <button class="btn btn-outline-dark-pr px-8 ms-4">退回</button>
      </div>
      <div class="d-flex align-items-center" v-else-if="proposalData.proposalStatus==='active'">
        <p class="mb-0 text-secondary-light">審查通過</p>
        <button class="btn btn-outline-dark-pr px-8 ms-9">查看</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['proposalData'],
  data() {
    return {
    };
  },
  methods: {
    emitActive() {
      this.$emit('emitActive', this.proposalData.proposalID, this.proposalData.proposalTitle);
    },
    emitDeny() {
      this.$emit('emitDeny', this.proposalData.proposalID);
    },
  },
};
</script>
<style scoped></style>
