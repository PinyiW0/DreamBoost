<template>
  <div class="modal fade" ref="modalInstance" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
    aria-labelledby="staticBackdropLabel" aria-hidden="true"
    style="background-color:rgba(11, 17, 28, 0.6);">
    <div class="modal-dialog modal-lg modal-dialog-centered">
      <div class="modal-content bg-gray-700 border border-light">
        <div class="modal-header border-bottom-0">
          <!-- <h1 class="modal-title fs-5" id="staticBackdropLabel">Modal title</h1> -->
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="border-bottom">
            <h2 class="mb-4 text-white fw-nromal text-center">退回專案</h2>
            <p class="mb-8 text-dark-pr text-center fs-18">請輸入退回原因</p>
          </div>
          <!-- 我覺得這段寬度很亂，看有沒有需要調整一下 -->
          <div class="mt-12 px-10">
            <div class="card bg-transparent border-0">
              <div class="card-body bg-transparent py-3 ps-8 pe-3 border-bottom d-flex justify-content-between">
                <div class="d-flex align-items-stretch">
                  <img src="https://picsum.photos/id/684/600/400" alt="" class="rounded-pill me-10" width="48"
                    height="48">
                  <div class="d-flex flex-column justify-content-center text-white">
                    <p class="mb-0  fs-12 lh-sm mb-1">2024.02.13</p>
                    <p class="mb-0  ">小智的 MIT 夢 - 台灣學生的教育之旅</p>
                  </div>
                </div>
              </div>
            </div>
            <textarea class="form-control bg-transparent text-white mt-16" placeholder="輸入退回原因" id="" style="height: 150px"></textarea>
          </div>
        </div>
        <div class="modal-footer border-top-0">
          <!-- <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button> -->
          <button type="button" class="btn btn-dark-pr py-3 px-16">儲存並關閉</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  data() {
    return {
      modalInstance: '',
    };
  },
  methods: {
    show() {
      this.modalInstance.show();
    },
    hide() {
      this.modalInstance.hide();
    },
  },
  mounted() {
    this.modalInstance = new this.$bs.Modal(this.$refs.modalInstance);
  },
  components: {
  },
};
</script>
<style scoped lang="scss">
.btn-close {
  --bs-btn-close-bg: url("data:image/svg+xml,%0A%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23FFF'%3E%3Cpath d='M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414z'/%3E%3C/svg%3E");
}

textarea::placeholder{
  color:white
}

* {
  // outline: 1px solid red;
}
</style>
