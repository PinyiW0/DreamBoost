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
        <div class="l-gridCard text-center">
          <div class="l-gridCard__status bg-primary text-white px-5 d-flex align-items-center justify-content-center">創建中專案</div>
          <!-- 要測試一下vertical-rl 為什麼左方會有一個空白，跟使用padding去強制變成一行有什麼不一樣（需要雙螢幕測試） -->
          <!-- <div class="l-gridCard__status bg-primary px-5 d-flex align-items-center">創建中專案</div> -->
          <div class="l-gridCard__titleName">專案名稱</div>
          <div class="l-gridCard__titleTarget">目標金額</div>
          <div class="l-gridCard__titleCreatedDate">創建日期</div>
          <div class="l-gridCard__titleSubmitDate">提交日期</div>
          <div class="l-gridCard__titleUpdateDate">上次修改日期</div>
          <div class="l-gridCard__btnDeleteProposal"><button type="button" class="btn rounded-0 p-0 h-100 w-100">X</button></div>
          <div class="l-gridCard__contentName">專案內容</div>
          <div class="l-gridCard__contentTarget">$2000</div>
          <div class="l-gridCard__contentCreatedDate">2023.12.31</div>
          <div class="l-gridCard__contentSubmitDate">2023.12.31</div>
          <div class="l-gridCard__contentUpdateDate">2023.12.31</div>
          <div class="l-gridCard__btnViewDetail"><button type="button" class="btn p-0 rounded-0 bg-primary-light w-100 h-100">V</button></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  components: {
  },
};

</script>
<style scope lang="scss">
.l-proposalCardGapY{
  .l-proposalCardContainer + .l-proposalCardContainer{
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
.l-vertical-rl{
    writing-mode: vertical-rl;
}
// .l-margin-inline-start-0{
//   margin-inline-start: 0;
// }
// .l-margin-inline-end-0{
//   margin-inline-end: 0;
// }
*{
  // outline: 1px solid red;
}
</style>
