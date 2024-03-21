<template>
  <!-- 指定專案資訊區 -->
  <section class="container pt-19 mb-15 mb-md-21">
    <div class="row gx-0 gx-lg-8 d-flex align-items-center align-items-lg-stretch justify-content-center">
      <div class="col-12 col-lg-4 mb-8 mb-lg-0">
        <img :src="singleProposal?.proposalMainImage" class="img-fluid w-100 rounded-3 object-fit-cover" alt=""
          style="min-height: 236px;">
      </div>
      <div class="col-12 col-lg-6 d-flex flex-column justify-content-lg-between mt-2 ps-2 ps-md-0 ms-lg-6">
        <div class="mb-4 mb-lg-0">
          <span class="badge bg-primary rounded-pill mb-2">
            <p class="fs-5 fw-normal mb-0 py-1 px-1">{{ singleProposal.proposalCategory }}</p>
          </span>
          <h1 class="fs-3 text-primary-dark">{{ singleProposal.proposalTitle }}</h1>
          <div class="d-flex align-items-center mt-3">
            <img :src="singleProposal.customizeProperty?.userImage" class="img-fluid rounded-circle me-3 object-fit-cover" alt=""
              style="height: 36px;">
            <p class="fs-lg-6 mb-0">發起人：{{ singleProposal.customizeProperty?.displayName }}</p>
          </div>
        </div>
        <div>
          <p class="text-gray-600 mb-2">專案時間：{{ singleProposal.proposalStartTime }} ~ {{ singleProposal.proposalEndTime
            }}</p>
          <div class="d-flex align-items-end">
            <p class="fs-3 fw-bold lh-1 text-danger mb-0 me-3">NT $ 2,250,005</p>
            <p class="text-gray-600 mb-0">/目標 NT$ {{ singleProposal.proposalTargetMoney }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <div class="border-bottom border-3 border-primary-light"></div>
  <!-- <hr class="border-2 border-primary-light"> -->
</template>

<script>
import { mapActions, mapState } from 'pinia';
import exploreStore from '@/stores/exploreStore';

export default {
  props: {
    proposals: {
      type: Object,
      required: true,
    },
  },
  computed: {
    ...mapState(exploreStore, ['singleProposal']),
  },
  mounted() {
    this.getProposals();
  },
  methods: {
    ...mapActions(exploreStore, ['getProposals']),
  },
};

</script>
