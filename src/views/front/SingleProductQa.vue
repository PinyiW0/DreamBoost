<template>
  <section class="container py-17">
    <div class="accordion p-4 border border-primary rounded-3" id="accordionExample">
      <div v-for="(faq) in test.proposalFAQs" :key="faq.id"
        class="accordion-item border-0 border-bottom border-primary-light rounded-0">
        <h2 class="accordion-header">
          <button class="accordion-button bg-transparent text-primary shadow-none" type="button"
            data-bs-toggle="collapse" data-bs-target="#collapseOne">
            {{ faq.question}}
          </button>
        </h2>
        <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
          <div class="accordion-body">
            {{ faq.answer}}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import exploreStore from '@/stores/exploreStore';

const { VITE_URL } = import.meta.env;

export default {
  components: {
  },
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
    await this.getProposals();
  },
  mounted() {
  },
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
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
