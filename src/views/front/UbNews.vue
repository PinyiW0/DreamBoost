<template>
  <main>
    <section class="container">
      <div class="rounded-3 py-14 px-20 my-20 shadow">
        <!-- 標題 -->
        <div class="d-flex flex-column mb-7">
          <h1 class="fs-3 text-primary mb-0">最新通知</h1>
          <p class="fs-6 text-primary-light mb-0">News for you</p>
        </div>
        <!-- 最新消息區 -->
        <template v-if="apiUserMessages">
          <div class="accordion p-4 pb-11 border border-primary-light rounded-3" id="messageAccordion">
            <AccordionItem v-for="(item, index) in messagesSorted" :key="`${index}-AccordionList`" :message-data="item">
            </AccordionItem>
          </div>
          <div class="d-flex flex-column mt-5">
            <button type="button" class="btn border-0 angle-down">
              <span class="d-flex flex-column align-items-center fs-5 fw-blod">載入更多
                <AnglesDown class="mb-0" style="width: 18px;"></AnglesDown>
              </span>
            </button>
          </div>
        </template>
        <template v-else>
          <p>目前沒有任何通知</p>
        </template>
      </div>
    </section>
  </main>
</template>

<script>
import AnglesDown from '@/components/icons/AnglesDown.vue';

import AccordionItem from '@/components/member/NewsAccordionItem.vue';

import mixinFullScreenLoading from '@/mixins/mixinFullScreenLoading';
import mixinSwalToast from '@/mixins/mixinSwalToast';

const { VITE_URL } = import.meta.env;

export default {
  data() {
    return {
      apiUserMessages: '',
    };
  },
  computed: {
    messagesSorted() {
      return this.apiUserMessages.slice().sort((a, b) => b.messageTime - a.messageTime);
    },
  },
  methods: {
    getUserMessages() {
      const token = document.cookie.replace(/(?:(?:^|.*;\s*)db\s*=\s*([^;]*).*$)|^.*$/, '$1');
      this.showFullScreenLoading({ canCancel: false });
      this.$http.get(`${VITE_URL}/dreamboost/message/normal/messages`, {
        headers: {
          Authorization: token,
        },
      })
        .then((res) => {
          this.apiUserMessages = Object.values(res.data.data.result);
          this.hideFullScreenLoading();
        })
        .catch(() => {
          this.hideFullScreenLoading();
        });
    },
  },
  components: {
    AnglesDown,
    AccordionItem,
  },
  mounted() {
    this.getUserMessages();
  },
  mixins: [mixinSwalToast, mixinFullScreenLoading],
};
</script>

<style lang="scss">
.angle-down {
  :hover {
    color: var(--bs-primary);
  }
}
</style>
