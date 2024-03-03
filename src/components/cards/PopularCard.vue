<template>
    <div class="d-flex justify-content-center mb-6 d-block d-xl-none position-relative">
      <div class="mb-5 mb-lg-3">
        <h2 class="title-center text-center position-relative">當前熱門專案</h2>
        <p class="fs-6 text-primary-light text-center mb-0">Current Hot Projects</p>
      </div>
    </div>
    <img src="/images/home/liver.jpg" class="imgcover img-fluid rounded-3 mb-7 col-12" alt="">
    <p class="fs-6 text-primary mb-3">#&nbsp;健康生活</p>
    <a class="title-hover" href="">
      <h4 class="mb-3">CodeGuardian - 工程師顧肝必備良品：LiverCare</h4>
    </a>
    <p class="mb-9">讓 CodeGuardian - 肝心（LiverCare）來了解解解解解解解（解酒解肝解痛苦）你！我們希望能為前端工程師提供一個超酷的、有趣的、關心你肝臟的數字助手！
      <br><br>不只守護你的程式碼，更守護你的肝臟！從忙碌的工作間隙中，讓你的肝臟放個假！我們關注你工作時肝臟的健康，讓你在敲程式碼的同時感受到樂趣與關懷！
    </p>
    <div class="progress bg-secondary-light mb-7" style="height: 10px;">
      <div class="progress-bar bg-primary-dark rounded-pill" role="progressbar" style="width: 80%;;" aria-valuenow="50" aria-valuemin="0"
        aria-valuemax="100"></div>
    </div>
    <div class="d-flex align-items-center justify-content-between">
      <div class="d-flex align-items-center">
        <img src="/images/home/userIcon36.svg" class="img-fluid me-6 rounded-5" style="max-width: 36px;" alt="會員頭貼">
        <p class="mb-0">發起人：樂樂</p>
      </div>
      <div class="d-flex">
        <div class="d-flex me-3">
          <p class="mb-0 me-1">已募資</p>
          <p class="fw-bold text-danger mb-0">80%</p>
        </div>
        <div class="d-flex align-items-center gap-3">
        <a href="">
          <span class="d-flex gap-1 message-star-hover"
            >11
            <i
              class="d-block text-primary-dark"
              style="width: 14px; margin-top: -1px"
            >
              <MessageIcon />
            </i>
          </span>
        </a>
        <a href="">
          <span class="d-flex gap-1 message-star-hover">
            18
            <i
              class="d-block text-secondary-dark"
              style="width: 16px; margin-top: -2px"
            >
              <StarFull />
            </i>
          </span>
        </a>
      </div>
      </div>
    </div>
</template>

<style lang="scss" scoped>
//卡片 icon 留言＋星星 hover 效果
.message-star-hover {
  color: var(--bs-gray-700);

  :hover {
    color: var(--bs-primary);
  }
}
</style>

<script>
import StarFull from '@/components/icons/StarFull.vue';
import MessageIcon from '@/components/icons/MessageIcon.vue';

export default {
  components: {
    StarFull,
    MessageIcon,
  },
};
</script>
