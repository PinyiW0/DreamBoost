<template>
  <div @click.stop="$router.push(`/product/${proposals.proposalID}/info`)">
    <div
      class="card py-8 px-7 mb-16 border-2 border-primary rounded-4 card-shadow"
    >
      <div class="position-relative">
        <img
          :src="proposals.proposalMainImage"
          class="card-img-top rounded-3 mb-12 object-fit-cover"
          alt="提案主要照片"
          style="height: 250px"
        />
        <button
          type="button"
          class="border-0 btn btn-empty d-flex align-items-center p-3 position-absolute top-0 end-0"
          style="z-index: 10"
          @click.stop="$emit('favorite')"
        >
          <i class="" style="width: 24px; margin-top: -2px">
            <StarHollow />
          </i>
          <i class="d-none" style="width: 24px; margin-top: -2px">
            <StarFull />
          </i>
        </button>
      </div>
      <div class="card-body p-0">
        <span class="fs-6 text-primary">#{{ proposals.proposalCategory }}</span>
        <a href="" class="title-hover">
          <h3 class="card-title title-hover mb-7 fs-5 fw-semibold">
            {{ proposals.proposalTitle }}
          </h3>
        </a>
        <h4
          class="d-flex align-items-center gap-3 mb-7 fw-normal text-gray-600 fs-5"
        >
          <span
            class="d-flex justify-content-center align-items-center bg-primary rounded-circle"
            style="width: 35px; height: 35px"
          >
            <img
              src="/images/home/userIcon36.svg"
              class="img-fluid"
              alt="DreamBoost Logo"
            />
          </span>
          發起人：{{ proposals.customizeProperty?.displayName }}
        </h4>
        <div
          class="progress bg-secondary-light mb-7 rounded-pill"
          style="height: 10px; width: 100%"
          role="progressbar"
          aria-label="Basic example"
          aria-valuenow="80"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          <div
            class="progress-bar text-white bg-primary-dark rounded-pill"
            style="width: 80%"
          ></div>
        </div>
        <div class="d-flex justify-content-between align-items-center">
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
          <router-link :to="`/product/${proposals.proposalID}/info`">
            <span class="share-hover">
              <i class="d-block" style="width: 20px; margin-top: -2px">
                <ArrowUpRight />
              </i>
            </span>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MessageIcon from '@/components/icons/MessageIcon.vue';
import ArrowUpRight from '@/components/icons/ArrowUpRight.vue';
import StarFull from '@/components/icons/StarFull.vue';
import StarHollow from '@/components/icons/StarHollow.vue';
// import exploreStore from '@/stores/exploreStore';
// import { mapState } from 'pinia';

export default {
  // props: ['proposals'],
  props: {
    proposals: {
      type: Object,
      required: true,
    },
  },
  components: {
    MessageIcon,
    StarFull,
    StarHollow,
    ArrowUpRight,
  },
  data() {
    return {};
  },
  // computed: {
  //   ...mapState(exploreStore, ['proposals']),
  // },
  mounted() {},
  methods: {},
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
