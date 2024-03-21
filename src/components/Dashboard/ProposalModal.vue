<template>
  <div class="modal fade" ref="modalInstance" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
    aria-labelledby="staticBackdropLabel" aria-hidden="true" style="background-color:rgba(11, 17, 28, 0.6);">
    <div class="modal-dialog modal-lg modal-dialog-centered">
      <div class="modal-content bg-gray-700 border border-light">
        <div class="modal-header border-bottom-0">
          <button type="button" class="btn-close" aria-label="Close" @click="hide"></button>
        </div>
        <div class="modal-body">
          <div class="border-bottom">
            <h2 class="mb-4 text-white fw-nromal text-center">退回專案</h2>
            <p class="mb-8 text-dark-pr text-center fs-18">請輸入退回原因</p>
          </div>
          <div class="mt-12 px-10">
            <div class="card bg-transparent border-0">
              <div
                class="card-body bg-transparent pt-3 pb-6 ps-8 pe-3 border-gray-500 border-bottom d-flex justify-content-between">
                <div class="d-flex align-items-stretch">
                  <!-- <img src="https://picsum.photos/id/684/600/400" alt="" class="rounded-pill me-10" width="48" height="48"> -->
                  <img :src="denyProposalData.proposalMainImage" alt="主要圖片" class="rounded-pill me-10" width="48" height="48">
                  <div class="d-flex flex-column justify-content-center text-white">
                    <p class="mb-0  fs-12 lh-sm mb-1">2024.02.13</p>
                    <p class="mb-0  ">小智的 MIT 夢 - 台灣學生的教育之旅</p>
                  </div>
                </div>
              </div>
            </div>
            <textarea class="form-control bg-transparent text-white mt-16" placeholder="輸入退回原因" id=""
              style="height: 150px" v-model="denyMessages"></textarea>
          </div>
        </div>
        <div class="modal-footer border-top-0">
          <button type="button" class="btn btn-dark-pr py-3 px-16" @click="doubleCheck">儲存並關閉</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Swal from 'sweetalert2';

import adminStore from '@/stores/adminStore';
import { mapState } from 'pinia';

import mixinSwalToast from '@/mixins/mixinSwalToast';
import mixinFullScreenLoading from '@/mixins/mixinFullScreenLoading';

const { VITE_URL } = import.meta.env;

export default {
  data() {
    return {
      modalInstance: '',
      denyMessages: '',
    };
  },
  methods: {
    show() {
      // 每次打開的時候要清除訊息內容
      this.denyMessages = '';
      this.modalInstance.show();
    },
    hide() {
      this.modalInstance.hide();
    },
    doubleCheck() {
      Swal.fire({
        title: '確定要退回提案嗎？',
        icon: 'question',
        allowOutsideClick: false,
        showCancelButton: true,
        buttonsStyling: true,
        // customClass: {
        //   confirmButton: 'btn btn-primary',
        //   cancelButton: 'btn btn-outline-dark ms-3',
        // },
        confirmButtonText: '確認',
        cancelButtonText: '取消',
      })
        .then((result) => {
          if (result.isConfirmed) {
            this.denyProposal();
          }
          if (result.isDismissed) {
            // this.addToast({ content: '尚未退回提案', style: 'info' });
          }
        })
        .catch(() => {
          this.addToast({ content: '退回提案過程出現錯誤', style: 'error' });
        });
    },
    denyProposal() {
      this.showFullScreenLoading();

      Promise.all([
        this.$http.post(`${VITE_URL}/dreamboost/proposal/admin/changeToDraft`, { proposalID: this.denyProposalData.proposalID }),
        this.$http.post(`${VITE_URL}/dreamboost/message/admin/message`, {
          messageToUserID: `${this.denyProposalData.proposalByUserID}`,
          messageTitle: '提案審核失敗',
          messageContent: `退回原因：${this.denyMessages}`,
          messageTime: new Date().getTime(),
        }),
      ])
        .then(() => {
          this.hideFullScreenLoading();
          this.addToast({ content: '已經提案退回', style: 'info' });
          this.hide();
          this.$emit('updateProposalDatas');
        })
        .catch(() => {
          this.hideFullScreenLoading();
          this.addToast({ content: '退回提案過程出現錯誤，請聯繫工程師', style: 'error' });
        });
    },
  },
  mounted() {
    this.modalInstance = new this.$bs.Modal(this.$refs.modalInstance, {
      focus: false,
    });
  },
  computed: {
    ...mapState(adminStore, ['denyProposalData']),
  },
  components: {
  },
  watch: {
  },
  mixins: [mixinSwalToast, mixinFullScreenLoading],
};
</script>
<style scoped lang="scss">
.btn-close {
  --bs-btn-close-bg: url("data:image/svg+xml,%0A%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23FFF'%3E%3Cpath d='M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414z'/%3E%3C/svg%3E");
}

textarea::placeholder{
  color:white
}

</style>
