<template>
  <div class="card col-12 mb-3 border border-top-0 border-start-0 border-end-0 rounded-0 suggestcard-shadow"
    @click.prevent="$router.push(`/product/${this.proposals.proposalID}/info`)">
    <div class="row g-2 align-items-stretch">
      <div class="col-md-4 pb-4">
        <img :src="proposals.proposalMainImage" class="img-fluid object-fit-cover h-100 rounded-2" alt="">
      </div>
      <div class="col-md-8 pb-4 mt-0">
        <div class="card-body d-flex flex-column justify-items-between p-3">
          <div>
            <p class="card-text fs-6 text-primary mb-1">#&nbsp;{{ proposals.proposalCategory }}</p>
            <a class="title-hover" @click.prevent="$router.push(`/product/${this.proposals.proposalID}/info`)">
              <h4 class=" card-title fs-5 mb-11">{{ proposals.proposalTitle }}</h4>
            </a>
          </div>
          <div>
            <div class="progress bg-secondary-light mb-4" style="height: 6px;">
              <div class="progress-bar bg-primary-dark rounded-pill" role="progressbar" style="width: 65%;"
                aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <div class="d-flex justify-content-between align-items-center">
              <div class="d-flex me-3">
                <p class="fs-5 mb-0 me-1">已募資</p>
                <p class="fs-5 fw-bold text-danger mb-0">{{ randomValue + 50 }}%</p>
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
                    {{ randomValue +2 }}
                    <i class="d-block text-secondary-dark" style="width: 16px; margin-top: -2px">
                      <StarFull />
                    </i>
                  </span>
                </a>
              </div>
            </div>
          </div>
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
    proposals: {
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
.suggestcard-shadow {
  transition: box-shadow 0.2s ease;

  &:hover {
    box-shadow: 0px 5px 6px rgba(57, 87, 132, 0.1);
    cursor: pointer;
  }
}
</style>
