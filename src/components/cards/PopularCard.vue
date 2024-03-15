<template>
  <div class="d-flex justify-content-center mb-6 d-block d-xl-none position-relative">
    <div class="mb-5 mb-lg-3">
      <h2 class="title-center text-center position-relative">當前熱門專案</h2>
      <p class="fs-6 text-primary-light text-center mb-0">Current Hot Projects</p>
    </div>
  </div>
  <div @click.prevent="$router.push(`/product/${this.popularProjects.proposalID}/info`)" class="popularcard-hover">
    <img :src="popularProjects?.proposalMainImage" class="imgcover img-fluid rounded-3 mb-7 col-12 h-100" style=""
      alt="">
    <p class="fs-6 text-primary mb-3">#&nbsp;{{ popularProjects?.proposalCategory }}</p>
    <a class="title-hover" @click.prevent="$router.push(`/product/${this.popularProjects?.proposalID}/info`)">
      <h4 class="mb-3">{{ popularProjects?.proposalTitle }}</h4>
    </a>
    <p class="mb-9">{{ popularProjects?.customizeProperty?.introduction }}
    </p>
    <div class="progress bg-secondary-light mb-7" style="height: 10px;">
      <div class="progress-bar bg-primary-dark rounded-pill" role="progressbar"
        :style="{ width: randomValue + 70 + '%' }" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
    <div class="d-flex align-items-center justify-content-between">
      <div class="d-flex align-items-center">
        <img :src="popularProjects?.customizeProperty?.userImage" class="img-fluid me-6 rounded-5 border"
          style="max-width: 36px;" alt="會員頭貼">
        <p class="mb-0">發起人：{{ popularProjects?.customizeProperty?.displayName }}</p>
      </div>
      <div class="d-flex">
        <div class="d-flex me-3">
          <p class="mb-0 me-1">已募資</p>
          <p class="fw-bold text-danger mb-0">{{ randomValue + 70 }}%</p>
        </div>
        <div class="d-flex align-items-center gap-3">
          <a href="">
            <span class="d-flex gap-1 message-star-hover">{{ randomValue }}
              <i class="d-block text-primary-dark" style="width: 14px; margin-top: -1px">
                <MessageIcon />
              </i>
            </span>
          </a>
          <a href="">
            <span class="d-flex gap-1 message-star-hover">
              {{ randomValue + 2 }}
              <i class="d-block text-secondary-dark" style="width: 16px; margin-top: -2px">
                <StarFull />
              </i>
            </span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import StarFull from '@/components/icons/StarFull.vue';
import MessageIcon from '@/components/icons/MessageIcon.vue';

export default {
  props: {
    popularProjects: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      randomValue: 0,
    };
  },
  components: {
    StarFull,
    MessageIcon,
  },
  mounted() {
    this.randomValue = Math.floor(Math.random() * 20);
  },
};
</script>

<style lang="scss" scoped>
//卡片 icon 留言＋星星 hover 效果
.message-star-hover {
  color: var(--bs-gray-700);

  :hover {
    color: var(--bs-primary);
  }
}
.popularcard-hover {
  &:hover {
    cursor: pointer;
  }
}
</style>
