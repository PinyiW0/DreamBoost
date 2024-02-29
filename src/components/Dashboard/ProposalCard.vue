<template>
  <div class="card bg-transparent border-0">
    <div class="card-body bg-transparent py-3 ps-8 pe-3 border rounded d-flex justify-content-between">
      <div class="d-flex align-items-stretch">
        <img src="https://picsum.photos/id/684/600/400" alt="" class="rounded-pill me-10" width="48" height="48">
        <div class="d-flex flex-column justify-content-center text-white">
          <p class="mb-0  fs-12 lh-sm mb-1">2024.02.13</p>
          <p class="mb-0  ">小智的 MIT 夢 - 台灣學生的教育之旅</p>
        </div>
      </div>
      <template v-if="proposalData">
        <div class="d-flex" v-if="proposalData.proposalStatus==='review'">
          <button class="btn btn-outline-dark-pr px-8">查看</button>
          <button class="btn btn-outline-dark-pr px-8 ms-4">通過</button>
          <button class="btn btn-outline-dark-pr px-8 ms-4">退回</button>
        </div>
        <div class="d-flex align-items-center" v-else-if="proposalData.proposalStatus==='active'">
          <p class="mb-0 text-secondary-light">審查通過</p>
          <button class="btn btn-outline-dark-pr px-8 ms-9">查看</button>
        </div>
      </template>
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
  },
};
</script>
<style scoped></style>
