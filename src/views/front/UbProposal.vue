<template>
  <section class="mt-17 container">
    <div class="text-center">
      <h3 class="text-primary mb-1 text-center">提案紀錄</h3>
      <p class="text-primary-light">Proposal Record</p>
    </div>
    <template v-if="userProposals">
      <div class="row g-0 mt-9">
        <div class="col-3">
          <p class="text-gray-600 mb-1">專案狀態</p>
          <select class="form-select border border-primary-light text-gray-500" aria-label="Default select">
            <option value="all">全部專案</option>
            <option value="draft">草稿</option>
            <option value="review">審核中</option>
            <option value="active">已上架</option>
          </select>
        </div>
      </div>
      <div class="row mt-13">
        <div class="col-12">
          <div class="l-proposalCardGapY">
            <ProposalRecordCard v-for="item in userProposals" :key="item.proposalID" :proposal-data="item"></ProposalRecordCard>
          </div>
          <button class="d-flex m-auto btn btn-primary px-13 mt-20 mb-30 align-items-center">
            <span class="lh-1">載入更多</span>
            <OutlineCubeIcon width="24" height="24" class="ms-2"></OutlineCubeIcon>
          </button>
        </div>
      </div>
    </template>
    <template v-else>
      <p>目前沒有任何提案</p>
    </template>
  </section>
</template>

<script>
import mixinFullScreenLoading from '@/mixins/mixinFullScreenLoading';
import mixinSwalToast from '@/mixins/mixinSwalToast';

import ProposalRecordCard from '@/components/member/ProposalRecordCard.vue';
import OutlineCubeIcon from '@/components/icons/OutlineCubeIcon.vue';

const { VITE_URL } = import.meta.env;

export default {
  data() {
    return {
      userProposals: '',
    };
  },
  methods: {
    getUserProposals() {
      const token = document.cookie.replace(/(?:(?:^|.*;\s*)db\s*=\s*([^;]*).*$)|^.*$/, '$1');
      this.showFullScreenLoading({ canCancel: false });
      this.$http.get(`${VITE_URL}/dreamboost/proposal/normal/proposals`, { headers: { Authorization: token } })
        .then((res) => {
          this.hideFullScreenLoading();
          this.userProposals = Object.values(res.data.data.result);
          console.log(Object.values(res.data.data.result));
        })
        .catch((err) => {
          this.hideFullScreenLoading();
          this.addToast({ content: '取得提案失敗，請重新整理再次嘗試。如果持續出現相同錯誤請聯繫工程師', style: 'error' });
          console.log(err);
        });
    },
  },
  components: {
    ProposalRecordCard,
    OutlineCubeIcon,
  },
  mounted() {
    this.getUserProposals();
  },
  mixins: [mixinFullScreenLoading, mixinSwalToast],
};

</script>
<style scope lang="scss">

.l-proposalCardGapY{
  > .l-cardContainer + .l-cardContainer{
    margin-top: 40px;
  }
}
</style>
