<template>
  <div
    class="card card-shadow pt-6 pb-9 px-6 rounded-3 border-2 border-primary"
  >
    <div
      class="d-flex flex-column flex-lg-row justify-content-between align-items-lg-center py-7 px-6 mb-6 bg-primary rounded-1 text-white"
    >
      <h3 class="card-title fs-5 mb-0">募資期間優惠</h3>
      <p class="d-flex align-items-end column-gap-1 mb-0 fs-5 lh-md">
        只要
        <span class="color-changing-text fs-3 fw-bold lterSpc-8 lh-1">
          NT${{ feedbacks?.feedbackSettingMoney }}
        </span>
      </p>
    </div>
    <img
      class="img-fluid mb-6 w-100 rounded-3 border"
      :src="feedbacks?.feedbackImage"
      v-if="!feedbackPayment"
      alt=""
    />
    <div
      class="d-flex flex-column flex-lg-row justify-content-between align-items-lg-center mb-6"
    >
      <div>
        <h4 class="mb-1 fw-bold text-primary">
          {{ feedbacks?.feedbackTitle }}
        </h4>
        <!-- <p class="mb-0 fs-6 text-gray-500">
          預定售價 NT$ 5,290 ，現省 NT$ 2,710
        </p> -->
      </div>
      <div class="d-flex align-items-center column-gap-3">
        <!-- <span class="badge px-3 text-danger border border-danger rounded-pill">
          48 折
        </span> -->
        <button
          type="button"
          class="btn btn-empty d-flex align-items-center p-3"
        >
          <i style="width: 24px">
            <StarHollow />
          </i>
          <i class="d-none" style="width: 24px">
            <StarFull />
          </i>
        </button>
      </div>
    </div>
    <!-- <div class="d-flex text-white mb-8">
      <p class="mb-0 py-1 px-2 border-2 border-end border-secondary-light bg-primary lh-md">
        剩餘
        <span class="text-secondary-light">7</span>
        份
      </p>
      <p class="mb-0 py-1 px-2 bg-primary lh-md">
        已經被贊助
        <span class="text-secondary-light">83</span>
        / 90 次
      </p>
    </div> -->
    <div class="mb-9">
      <h5 class="mb-3">【 方案內容 】</h5>
      <ul class="d-flex flex-column row-gap-3 text-gray-600">
        <li>{{ feedbacks?.feedbackArticle }}</li>
      </ul>
    </div>
    <div class="mb-7 py-4 px-3 border-top border-bottom border-primary-light">
      <ul class="row gy-4 list-unstyled fs-6">
        <li class="col-lg-6 d-flex align-items-center column-gap-1">
          <div
            class="d-flex align-items-center mb-1 rounded-circle bg-primary"
            style="width: 28px; height: 28px"
          >
            <i
              class="mx-auto text-secondary-light"
              style="width: 24px; height: 24px"
            >
              <CheckIcon />
            </i>
          </div>
          <p class="mb-0 text-gray-600">本島免運，可寄離島</p>
        </li>
        <li class="col-lg-6 d-flex align-items-center column-gap-1">
          <div
            class="d-flex align-items-center mb-1 rounded-circle bg-primary"
            style="width: 28px; height: 28px"
          >
            <i
              class="mx-auto text-secondary-light"
              style="width: 24px; height: 24px"
            >
              <CheckIcon />
            </i>
          </div>
          <p class="mb-0 text-gray-600">信用卡享 3 期零利率</p>
        </li>
      </ul>
    </div>
    <RouterLink
      :to="`/product/${$route.params.id}/choose`"
      v-if="feedbackPayment"
    >
      <button
        type="button"
        class="btn btn-primary d-flex align-items-center justify-content-center column-gap-1 mb-4 px-14 w-100 lterSpc-5"
      >
        更改回饋方案
        <i class="ms-2" style="width: 18px; margin-top: -3px">
          <RightArrow />
        </i>
      </button>
    </RouterLink>
    <RouterLink
      :to="`/product/${$route.params.id}/choose/${feedbacks?.feedbackID}/payinfo`"
      v-else
    >
      <button
        type="button"
        class="btn btn-primary d-flex align-items-center justify-content-center column-gap-1 mb-4 px-14 w-100 lterSpc-5"
      >
        贊助專案
        <i class="ms-2" style="width: 18px; margin-top: -3px">
          <RightArrow />
        </i>
      </button>
    </RouterLink>
    <p class="mb-0 fs-12 text-center text-gray-500">
      預計於 {{ feedbacks?.customizeProperty.shippingTime }} 實現
    </p>
  </div>
</template>

<style lang="scss" scoped>
.color-changing-text {
  animation: changeColor 1s infinite;
}

@keyframes changeColor {
  0% {
    color: var(--bs-secondary-light);
  }

  50% {
    color: var(--bs-secondary-light);
  }

  100% {
    color: var(--bs-white);
  }
}
</style>

<script>
import { mapState, mapActions } from 'pinia';
import exploreStore from '@/stores/exploreStore';
import CheckIcon from '@/components/icons/CheckIcon.vue';
import RightArrow from '@/components/icons/RightArrow.vue';
import StarHollow from '@/components/icons/StarHollow.vue';
import StarFull from '@/components/icons/StarFull.vue';

export default {
  props: {
    feedbacks: Object,
    feedbackPayment: Boolean,
  },
  components: {
    CheckIcon,
    RightArrow,
    StarHollow,
    StarFull,
  },
  computed: {
    ...mapState(exploreStore, ['singleProposal']),
  },
  methods: {
    ...mapActions(exploreStore, ['getProposals']),
    ...mapActions(exploreStore, ['getProposalID']),
  },
};
</script>

<style lang="scss">
.card-shadow {
  transition: box-shadow 0.2s ease;

  &:hover {
    box-shadow: 2px 4px 6px rgba(57, 87, 132, 0.4);
    cursor: pointer;
  }
}
</style>
