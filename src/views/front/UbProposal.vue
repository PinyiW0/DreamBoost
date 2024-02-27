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
        <div class="l-proposalCardContainer">
          <div class="item-1">slkdfjd</div>
          <div class="item-2">slkdjf</div>
          <div class="item-3">slkdjf</div>
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

.l-proposalCardContainer{
  display: grid;
  grid-template-columns: 54px 2fr repeat(4,1fr) 54px ;
  grid-template-rows: 48px auto;
  grid-template-areas:
  "status titleName titleTarget titleCreatedDate titleSubmitDate titleUpdateDate btnDeleteProposal"
  "status contentName contentTarget contentCreatedDate contentSubmitDate contentUpdateDate btnView";
}
.item-1{
  grid-area:status;
  background-color: blue;
}
.item-2{
  grid-area: titleName;
  background-color: red;
}
.item-3{
  grid-area:contentName;
  background-color: gray;
}
</style>
