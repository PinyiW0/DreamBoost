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
      </div>
    </div>
  </section>
</template>

<script>
import ProposalRecordCard from '@/components/member/ProposalRecordCard.vue';

export default {
  components: {
    ProposalRecordCard,
  },
};

</script>
<style scope lang="scss">
.l-btn-close{
  &:hover{
    color:var(--bs-primary) !important;
  }
}
.l-btn-detail{
  &:hover{
    background-color: var(--bs-primary) !important;
    color:var(--bs-secondary) !important;
  }
}

.l-proposalCardGapY{
  .l-gridCard + .l-gridCard{
    margin-top: 40px;
  }
}
.l-gridCard{
  display: grid;
  grid-template-columns: 54px 3fr repeat(4,1fr) 54px ;
  grid-template-rows: 48px minmax(124px,auto);
    grid-template-areas:
    "status titleName titleTarget titleCreatedDate titleSubmitDate titleUpdateDate btnDeleteProposal"
    "status contentName contentTarget contentCreatedDate contentSubmitDate contentUpdateDate btnViewDetail";
}
.l-gridCard--centerChild{
  display: flex;
  justify-content: center;
  align-items: center;
}

.l-gridCard__status{
  grid-area:status;
}
.l-gridCard__titleName{
  grid-area: titleName;
}
.l-gridCard__contentName{
  grid-area:contentName;
}
.l-gridCard__titleTarget{
  grid-area:titleTarget;
}
.l-gridCard__contentTarget{
  grid-area:contentTarget;
}
.l-gridCard__titleCreatedDate{
  grid-area:titleCreatedDate;
}
.l-gridCard__contentCreatedDate{
  grid-area:contentCreatedDate;
}
.l-gridCard__titleSubmitDate{
  grid-area:titleSubmitDate;
}
.l-gridCard__contentSubmitDate{
  grid-area:contentSubmitDate;
}
.l-gridCard__titleUpdateDate{
  grid-area:titleUpdateDate;
}
.l-gridCard__contentUpdateDate{
  grid-area:contentUpdateDate;
}
.l-gridCard__btnDeleteProposal{
  grid-area:btnDeleteProposal;
}
.l-gridCard__btnViewDetail{
  grid-area:btnViewDetail;
}
// 以下沒有使用到
.l-vertical-rl{
    writing-mode: vertical-rl;
}
.l-margin-inline-start-0{
  margin-inline-start: 0;
}
.l-margin-inline-end-0{
  margin-inline-end: 0;
}
.l-margin-block-start-0{
  margin-block-start: 0;
}
.l-margin-block-end-0{
  margin-block-end: 0;
}
.l-letter-spacing-1{
  letter-spacing: 1px;
}
.l-letter-spacing-2{
  letter-spacing: 2px;
}
.l-letter-spacing-3{
  letter-spacing: 3px;
}
.l-letter-spacing-4{
  letter-spacing: 4px;
}
</style>
