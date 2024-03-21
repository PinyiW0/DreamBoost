<template>
  <main>
    <!-- 贊助方案列表 -->
    <section class="container mb6">
      <div class="bg-bgc-paper d-flex align-items-center justify-content-center mt-8">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor"
          class="bi bi-info-circle text-primary me-2" viewBox="0 0 16 16">
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
          <path
            d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
        </svg>
        <p class="text-primary py-2 mb-0 me-3">請選擇您想要贊助的金額與回饋</p>
      </div>
    </section>
    <section>
      <div class="container pb-20 overflow-hidden">
        <swiper v-if="test && test.proposalFeedbacks" ref="swiper" :modules="modules" :space-between="24"
          :centered-slides="true" :pagination="{
          type: 'progressbar',
        }" :slidesPerView="1" :breakpoints="{
          768: {
            slidesPerView: 1,
          },
          992: {
            slidesPerView: 3,
          },
        }" :autoplay="{
          delay: 6000,
          disableOnInteraction: false,
        }" class="mySwiper row container">
          <swiper-slide class="pt-10 mb-6 d-flex" v-for="(feedback, feedbackID) in test.proposalFeedbacks"
            :key="feedbackID">
            <PlanCard :feedbacks="feedback" class="col"></PlanCard>
          </swiper-slide>
        </swiper>
      </div>
    </section>
  </main>
</template>

<style lang="scss">
.swiper {
  overflow: initial;
}

.swiper-pagination {
  background-color: var(--bs-gray-200);

  &-progressbar-fill {
    background-color: var(--bs-primary) !important;
  }
}
</style>

<script>
import { mapState, mapActions, mapGetters } from 'pinia';
import exploreStore from '@/stores/exploreStore';
import PlanCard from '@/components/cards/PlanCard.vue';
// import DpInfo from '@/components/designedproject/DpInfo.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Scrollbar, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import mixinFullScreenLoading from '@/mixins/mixinFullScreenLoading';

const { VITE_URL } = import.meta.env;

export default {
  props: {
    feedbacks: Object,
  },
  data() {
    return {
      modules: [Navigation, Pagination, Scrollbar],
      test: { // 資料定義
        proposalFeedbacks: {},
      },
    };
  },
  components: {
    // DpInfo,
    PlanCard,
    Swiper,
    SwiperSlide,
  },
  computed: {
    ...mapState(exploreStore, ['singleProposal']),
    ...mapGetters('exploreStore', ['getProposalID']),
  },
  mixins: [mixinFullScreenLoading],
  async created() {
    await this.showFullScreenLoading();
    await this.getProposals();
    setTimeout(() => {
      this.hideFullScreenLoading();
    }, 800);
  },
  mounted() {
  },
  methods: {
    ...mapActions(exploreStore, ['getProposals']),
    async getProposals() {
      const routeId = this.$route.params.id;
      await this.$http
        .get(`${VITE_URL}/dreamboost/proposal/guest/inActiveProposals`)
        .then((res) => {
          if (res.data.success) {
            this.test = res.data.data.result[routeId];
          }
        })
        .catch((err) => {
          throw new Error(err);
        });
    },
  },
};
</script>
