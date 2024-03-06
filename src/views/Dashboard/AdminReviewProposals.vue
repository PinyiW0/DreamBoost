<template>
  <ProposalModal ref="proposalModal"></ProposalModal>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-12 col-lg-10">
        <div class="d-flex mb-4">
          <p class="mb-0 fs-3 text-white mt-19">待審查方案</p>
          <!-- 之後可以放搜尋欄的位置，暫時先不做 -->
        </div>
        <div class="l-CardGapY">
          <ProposalCard v-for="item in reviewProposals" :proposal-data="item" :key="item.proposalID"
          @emit-active="activateProposal"
          >
          <!-- @emit-deny="denyProposal" -->
          </ProposalCard>
        </div>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-12 col-lg-10">
        <div class="d-flex mb-4">
          <p class="mb-0 fs-3 text-white mt-19">審查成功方案</p>
          <!-- 之後可以放搜尋欄的位置，暫時先不做 -->
        </div>
        <div class="l-CardGapY">
          <ProposalCard v-for="(item, index) in activeProposals" :proposal-data="item" :key="`${index}-list`">
          </ProposalCard>
        </div>
      </div>
    </div>
    <!-- 這塊應該沒辦法做，因為沒有可以看到退回方案的API。當初在規劃只有草稿(draft:使用者編輯階段),提交審核(review:管理員審核階段),上架(active:管理員通過審核後轉為active)三種。所以並沒有辦法取出使用者提交過，又退回的方案 -->
    <!-- <div class="row justify-content-center">
      <div class="col-10">
        <div class="d-flex mb-4 ">
          <p class="mb-0 fs-3 text-white mt-19">退回方案列表</p>
        </div>
        <div class="l-CardGapY">
          <ProposalCard v-for="(item, index) in activeProposals" :proposal-data="item" :key="`${index}-list`">
          </ProposalCard>
        </div>
      </div>
    </div> -->

    <!-- modal測試按鈕 -->
    <!-- <div class="row justify-content-center mt-20">
      <div class="col-10">
        <button type="button" class="btn btn-dark-pr" @click="showProposalModal">Modal測試按鈕</button>
      </div>
    </div> -->
  </div>
</template>
<script>
import Swal from 'sweetalert2';

import ProposalCard from '@/components/dashboard/ProposalCard.vue';
import ProposalModal from '@/components/dashboard/ProposalModal.vue';

import MixinFullScreenLoading from '@/mixins/mixinFullScreenLoading';
import MixinSwalToast from '@/mixins/mixinSwalToast';

const { VITE_URL } = import.meta.env;

export default {
  data() {
    return {
      reviewProposals: [],
      activeProposals: [],
    };
  },
  methods: {
    showProposalModal() {
      this.$refs.proposalModal.show();
    },
    // 分開取得的兩個方法
    // getReviewProposals() {
    //   // const token = document.cookie.replace(/(?:(?:^|.*;\s*)dreamboostAdminToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
    //   this.$http.get(`${VITE_URL}/dreamboost/proposal/admin/inReviewProposals`)
    //     .then((res) => {
    //       console.log(Object.values(res.data.data.result));
    //       // this.reviewProposals = Object.values(res.data.data.result);
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });
    // },
    // getActiveProposals() {
    //   this.$http.get(`${VITE_URL}/dreamboost/proposal/guest/inActiveProposals`)
    //     .then((res) => {
    //       console.log(res);
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });
    // },
    // 合併成一起取得的方法
    getDatas() {
      this.showFullScreenLoading();
      Promise.all([this.$http.get(`${VITE_URL}/dreamboost/proposal/admin/inReviewProposals`), this.$http.get(`${VITE_URL}/dreamboost/proposal/guest/inActiveProposals`)])
        .then((res) => {
          this.reviewProposals = res[0].data.data.result;
          this.activeProposals = res[1].data.data.result;
          this.addToast({ content: '提案資料取得完畢' });
          this.hideFullScreenLoading();
        })
        .catch(() => {
          this.addToast({ content: '取得API資料過程出現錯誤，請嘗試重新整理畫面再次取得。', style: 'error' });
          this.hideFullScreenLoading();
        });
    },
    activateProposal(proposalID, proposalTitle) {
      // console.log('activateProposal');
      console.log(proposalID, proposalTitle);
      Swal.fire({
        title: '確認審核？',
        text: `${proposalTitle}`,
        footer: '注意，一旦審核通過即不可再修改狀態了。',
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
            this.showFullScreenLoading();
            return this.$http.post(`${VITE_URL}/dreamboost/proposal/admin/changeToActive`, { proposalID });
          }
          // 使用者取消
          if (result.isDismissed) {
            return Promise.reject(new Error('User cancelled'));
          }

          return Promise.reject(new Error('其他錯誤狀況'));
        })
        .then(() => {
          this.addToast({ content: `${proposalID} 已上架完成` });
        })
        .catch((err) => {
          if (err.message !== 'User cancelled') {
            this.addToast({ content: '審核過程出現錯誤，請重新整理後再次操作。如果重複出現此提示請洽工程師。', style: 'error' });
          } else {
            this.addToast({ content: '取消通過審核流程。提案並未上架。', style: 'info' });
          }
        });
    },
    // denyProposal(proposalID) {
    // },
  },
  components: {
    ProposalCard,
    ProposalModal,
  },
  mounted() {
    // this.getReviewProposals();
    // this.getActiveProposals();
    this.getDatas();
  },
  watched: {

  },
  mixins: [MixinFullScreenLoading, MixinSwalToast],
};
</script>
<style scoped lang="scss">
.l-CardGapY {
  .card+.card {
    margin-top: 20px;
  }

}
</style>
