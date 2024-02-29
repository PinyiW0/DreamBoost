<template>
  <div class="l-gridCard text-center">
    <!-- 專案狀態 -->
    <div
      class="l-gridCard--centerChild l-gridCard__status bg-primary text-white px-5 d-flex align-items-center justify-content-center">
      創建中專案</div>
    <!-- 專案名稱 -->
    <div class="l-gridCard--centerChild l-gridCard__titleName border-top border-bottom border-primary bg-bgc-paper">
      專案名稱</div>
    <div class="l-gridCard__contentName border-bottom border-primary text-start">
      <div class="py-4 px-4 d-flex align-items-center">
        <img src="https://picsum.photos/id/684/600/400" alt="" width="120" height="90">
        <p class="mb-0 ms-3">PetBreeze：給您心愛寵物的專屬舒適吹風機</p>
      </div>
    </div>
    <!-- 目標金額 -->
    <div class="l-gridCard--centerChild l-gridCard__titleTarget border-top border-bottom border-primary bg-bgc-paper">
      目標金額</div>
    <div class="l-gridCard--centerChild l-gridCard__contentTarget border-bottom border-primary">$2000</div>
    <!-- 創建日期 -->
    <div
      class="l-gridCard--centerChild l-gridCard__titleCreatedDate border-top border-bottom border-primary bg-bgc-paper">
      創建日期</div>
    <div class="l-gridCard--centerChild l-gridCard__contentCreatedDate border-bottom border-primary">2023.12.31
    </div>
    <!-- 提交日期 -->
    <div class="l-gridCard--centerChild l-gridCard__titleSubmitDate border-top border-bottom border-primary bg-bgc-paper">
      提交日期</div>
    <div class="l-gridCard--centerChild l-gridCard__contentSubmitDate border-bottom border-primary">2023.12.31</div>
    <!-- 上次修改日期 -->
    <div class="l-gridCard--centerChild l-gridCard__titleUpdateDate border-top border-bottom border-primary bg-bgc-paper">
      上次修改日期</div>
    <div class="l-gridCard--centerChild l-gridCard__contentUpdateDate border-bottom border-primary">2023.12.31</div>
    <!-- 按鈕區塊 -->
    <div class="l-gridCard--centerChild l-gridCard__btnDeleteProposal ">
      <button type="button"
        class="btn btn-light rounded-0 p-0 h-100 w-100 l-btn-close border border-primary  border-bottom-">
        <CloseButtonIcon></CloseButtonIcon>
      </button>
    </div>
    <div class="l-gridCard--centerChild l-gridCard__btnViewDetail ">
      <button type="button"
        class="btn p-0 rounded-0 bg-primary-light w-100 h-100 l-btn-detail border border-primary border-top-0"
        data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
        <DoubleAngleDownIcon width="24" height="24"></DoubleAngleDownIcon>
      </button>
    </div>
    <div class="collapse" id="collapseExample">
      <p>展開內容</p>
    </div>
  </div>
</template>
<script>
import CloseButtonIcon from '@/components/icons/CloseButton.vue';
import DoubleAngleDownIcon from '@/components/icons/DoubleAngleDown.vue';

export default {
  data() {
    return {
    };
  },
  methods: {
  },
  components: {
    DoubleAngleDownIcon,
    CloseButtonIcon,
  },
};
</script>
<style scope lang="scss">
.l-btn-close {
  &:hover {
    color: var(--bs-primary) !important;
  }
}

.l-btn-detail {
  &:hover {
    background-color: var(--bs-primary) !important;
    color: var(--bs-secondary) !important;
  }
}

.l-proposalCardGapY {
  .l-gridCard+.l-gridCard {
    margin-top: 40px;
  }
}

.l-gridCard {
  display: grid;
  grid-template-columns: 54px 3fr repeat(4, 1fr) 54px;
  grid-template-rows: 48px minmax(124px, auto);
  grid-template-areas:
    "status titleName titleTarget titleCreatedDate titleSubmitDate titleUpdateDate btnDeleteProposal"
    "status contentName contentTarget contentCreatedDate contentSubmitDate contentUpdateDate btnViewDetail";
}

.l-gridCard--centerChild {
  display: flex;
  justify-content: center;
  align-items: center;
}

.l-gridCard__status {
  grid-area: status;
}

.l-gridCard__titleName {
  grid-area: titleName;
}

.l-gridCard__contentName {
  grid-area: contentName;
}

.l-gridCard__titleTarget {
  grid-area: titleTarget;
}

.l-gridCard__contentTarget {
  grid-area: contentTarget;
}

.l-gridCard__titleCreatedDate {
  grid-area: titleCreatedDate;
}

.l-gridCard__contentCreatedDate {
  grid-area: contentCreatedDate;
}

.l-gridCard__titleSubmitDate {
  grid-area: titleSubmitDate;
}

.l-gridCard__contentSubmitDate {
  grid-area: contentSubmitDate;
}

.l-gridCard__titleUpdateDate {
  grid-area: titleUpdateDate;
}

.l-gridCard__contentUpdateDate {
  grid-area: contentUpdateDate;
}

.l-gridCard__btnDeleteProposal {
  grid-area: btnDeleteProposal;
}

.l-gridCard__btnViewDetail {
  grid-area: btnViewDetail;
}

// 以下沒有使用到
.l-vertical-rl {
  writing-mode: vertical-rl;
}

.l-margin-inline-start-0 {
  margin-inline-start: 0;
}

.l-margin-inline-end-0 {
  margin-inline-end: 0;
}

.l-margin-block-start-0 {
  margin-block-start: 0;
}

.l-margin-block-end-0 {
  margin-block-end: 0;
}

.l-letter-spacing-1 {
  letter-spacing: 1px;
}

.l-letter-spacing-2 {
  letter-spacing: 2px;
}

.l-letter-spacing-3 {
  letter-spacing: 3px;
}

.l-letter-spacing-4 {
  letter-spacing: 4px;
}
</style>
