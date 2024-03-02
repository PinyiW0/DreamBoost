<template>
  <section class="mt-17 container">
    <div class="text-center">
      <h3 class="text-primary mb-1 text-center">提案紀錄</h3>
      <p class="text-primary-light">Proposal Record</p>
    </div>
    <div class="row g-0 mt-9">
      <div class="col-3">
        <p class="text-gray-600 mb-1">專案狀態</p>
        <!-- <input type="email" placeholder="電子郵件" class="w-100 mb-12 mb-lg-12 p-3 rounded-3 border border-primary-light"> -->
        <select class="form-select border border-primary-light text-gray-500" aria-label="Default select">
          <option value="1">全部專案</option>
        </select>
      </div>
    </div>
    <div class="mt-13">
      <div class="l-proposalCardGapY">
        <ProposalRecordCard></ProposalRecordCard>
        <ProposalRecordCard></ProposalRecordCard>
      </div>
      <button class="d-flex m-auto btn btn-primary px-13 mt-20 mb-30 align-items-center"><span class="lh-1">載入更多</span><OutlineCubeIcon width="24" height="24" class="ms-2"></OutlineCubeIcon></button>
    </div>
  </section>
</template>

<script>
import ProposalRecordCard from '@/components/member/ProposalRecordCard.vue';
import OutlineCubeIcon from '@/components/icons/OutlineCubeIcon.vue';

export default {
  components: {
    ProposalRecordCard,
    OutlineCubeIcon,
  },
};

</script>
<style scope lang="scss">
.l-proposalCardGapY{
  .l-gridCard + .l-gridCard{
    margin-top: 40px;
  }
}
</style>
