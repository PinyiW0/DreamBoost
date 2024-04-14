<template>
  <section class="container py-17">
    <div
      class="accordion p-4 border border-primary rounded-3"
      id="qaAccordion"
    >
      <div
        v-for="faq in test.proposalFAQs"
        :key="faq.id"
        class="accordion-item border-0 border-bottom border-primary-light rounded-0"
      >
        <h2 class="accordion-header">
          <button
            class="accordion-button bg-transparent text-primary shadow-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
          >
            {{ faq.question }}
          </button>
        </h2>
        <div
          id="collapseOne"
          class="accordion-collapse collapse show"
          data-bs-parent="#qaAccordion"
        >
          <div class="accordion-body">
            {{ faq.answer }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// 解構 Pinia
import { mapState, mapActions } from 'pinia';
// store 載入
import exploreStore from '@/stores/exploreStore';
// mixins 載入
import mixinFullScreenLoading from '@/mixins/mixinFullScreenLoading';
import mixinSwalToast from '@/mixins/mixinSwalToast';

const { VITE_URL } = import.meta.env;

export default {
  // mixins 引用
  mixins: [mixinFullScreenLoading, mixinSwalToast],
  data() {
    return {
      productList: null,
      productId: '',
      test: '',
    };
  },
  computed: {
    ...mapState(exploreStore, ['singleProposal']),
  },
  async created() {
    await this.showFullScreenLoading();
    await this.getProposals();
    setTimeout(() => {
      this.hideFullScreenLoading();
    }, 300);
  },
  mounted() {},
  methods: {
    ...mapActions(exploreStore, ['getProposals']),
    async getProposals() {
      await this.$http
        .get(`${VITE_URL}/dreamboost/proposal/guest/inActiveProposals`)
        .then((res) => {
          if (res.data.success) {
            this.test = res.data.data.result[this.$route.params.id];
          }
        })
        .catch(() => {
          this.addToast({
            style: 'warning',
            content: '資料提取錯誤，請重新載入',
          });
        });
    },
  },
};
</script>
