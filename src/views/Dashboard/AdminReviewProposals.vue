<template>
  <ProposalModal ref="proposalModal"></ProposalModal>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-12 col-lg-10">
        <div class="d-flex mb-4 ">
          <p class="mb-0 fs-3 text-white mt-19">待審查方案</p>
          <!-- 之後可以放搜尋欄的位置，暫時先不做 -->
        </div>
        <div class="l-CardGapY">
          <ProposalCard v-for="item in reviewProposals" :proposal-data="item" :key="item.proposalID">
          </ProposalCard>
        </div>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-10">
        <div class="d-flex mb-4 ">
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
import ProposalCard from '@/components/dashboard/ProposalCard.vue';
import ProposalModal from '@/components/dashboard/ProposalModal.vue';

const { VITE_URL } = import.meta.env;

export default {
  data() {
    return {
      reviewProposals: [],
      activeProposals: [{ proposalStatus: 'active' }, { proposalStatus: 'active' }],
    };
  },
  methods: {
    showProposalModal() {
      this.$refs.proposalModal.show();
    },
    getReviewProposals() {
      const token = document.cookie.replace(/(?:(?:^|.*;\s*)dreamboostAdminToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
      this.$http.get(`${VITE_URL}/dreamboost/proposal/admin/inReviewProposals`, {
        headers: { Authorization: token },
      })
        .then((res) => {
          console.log(Object.values(res.data.data.result));
          this.reviewProposals = Object.values(res.data.data.result);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  components: {
    ProposalCard,
    ProposalModal,
  },
  mounted() {
    this.getReviewProposals();
  },
};
</script>
<style scoped lang="scss">
.l-CardGapY {
  .card+.card {
    margin-top: 20px;
  }

}
</style>
