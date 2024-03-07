<template>
  <LaunchNav current-page="回饋設定" />
  <main class="container">
    <div class="col-xl-8 mx-auto mb-8">
      <p class="mb-7">
        在這個區塊您將制定本次募資專案提供的回饋項目，回饋內容可以十分多元，但是必須清楚寫明回饋金額、內容說明、運費及寄送時間等必要資訊。
      </p>
      <p class="lh-md">
        回饋列表
        <span class="text-danger"> * </span>
      </p>
      <nav
        class="d-flex flex-column flex-md-row justify-content-between align-items-lg-center gap-7 mb-2"
      >
        <ul class="navbar-nav flex-row gap-2 gap-md-6 text-center">
          <li
            class="nav-item p-4 py-lg-6 px-md-10 px-lg-16 border-bottom border-2 fw-medium w-50 w-md-auto"
          >
            可贊助
          </li>
          <li
            class="nav-item p-4 py-lg-6 px-md-10 px-lg-16 border-bottom border-2 fw-medium w-50 w-md-auto"
          >
            已額滿/到期
          </li>
        </ul>
        <button type="button" class="btn btn-primary" @click="sortModal">
          自訂排序回饋
        </button>
      </nav>
    </div>
    <div class="col-xl-9 mx-auto mb-27">
      <div
        class="p-7 p-lg-13 mb-9 border border-gray-700 rounded-3"
        v-for="feedback in feedbackSet"
        :key="feedback.feedbackID"
      >
        <div class="row gx-11 gy-7">
          <div class="col-md-6 col-lg-7">
            <div class="card py-9 px-6 border-2 border-primary">
              <div
                class="d-flex flex-column flex-lg-row justify-content-between align-items-lg-center py-7 px-6 mb-6 bg-primary rounded-2 text-white"
              >
                <h3 class="card-title fs-5 mb-0">
                  {{ feedback.feedbackTitle }}
                </h3>
                <p class="d-flex align-items-end column-gap-1 mb-0 fs-5 lh-md">
                  只要
                  <span
                    class="fs-3 text-secondary-light fw-bold lterSpc-8 lh-1"
                  >
                    NT$ {{ feedback.feedbackSettingMoney }}
                  </span>
                </p>
              </div>
              <img
                class="img-fluid mb-3 w-100 rounded-3 object-fit-cover"
                :src="feedback.feedbackImage"
                :alt="feedback.feedbackName"
              />
              <div
                class="d-flex flex-column flex-lg-row justify-content-between align-items-lg-center mb-6"
              >
                <div>
                  <h4 class="mb-0 fw-bold text-primary">
                    {{ feedback.feedbackName }}
                  </h4>
                </div>
              </div>
              <div class="d-flex text-white mb-8">
                <p
                  class="mb-0 py-1 px-2 border-2 border-end border-secondary-light bg-primary lh-md"
                >
                  剩餘
                  <span class="text-secondary-light">{{
                    feedback.feedbackLimitAmount
                  }}</span>
                  份
                </p>
                <p class="mb-0 py-1 px-2 bg-primary lh-md">
                  已經被贊助
                  <span class="text-secondary-light">0</span>
                  / {{ feedback.feedbackLimitAmount }} 次
                </p>
              </div>
              <div class="mb-8">
                <h5 class="mb-3">【方案內容】</h5>
                {{ feedback.feedbackArticle }}
              </div>
              <button
                type="button"
                class="btn btn-primary d-flex align-items-center justify-content-center column-gap-1 mb-4 px-14 fw-bold disabled"
              >
                贊助專案
              </button>
            </div>
          </div>
          <div class="col-md-6 col-lg-5 align-self-end">
            <div class="row gy-7">
              <div class="col-12">
                <button
                  type="button"
                  class="btn btn-primary w-100"
                  @click="infoModal('edit', feedback)"
                >
                  編輯回饋資訊
                </button>
              </div>
              <div class="col-12">
                <a href="#" class="btn btn-gray-600 w-100"> 隱藏此回饋 </a>
              </div>
              <div class="col-lg-6">
                <button
                  type="button"
                  class="btn btn-gray-400 px-0 w-100"
                  @click="deleteFeedback(feedback.feedbackID)"
                >
                  刪除回饋
                </button>
              </div>
              <div class="col-lg-6">
                <button
                  type="button"
                  class="btn btn-primary-light px-0 w-100"
                  @click="
                    () => {
                      currentState = 'copy';
                      feedbackHandler(feedback);
                    }
                  "
                >
                  複製此回饋
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        type="button"
        class="btn btn-outline-primary d-flex justify-content-center align-items-center gap-2 mb-13 w-100"
        @click="infoModal('add')"
      >
        新增一個回饋
        <i style="width: 16px; margin-top: -6px">
          <PlusIcon />
        </i>
      </button>
      <div class="row justify-content-lg-end gy-7">
        <div class="col-md-6 col-lg-3">
          <button
            type="button"
            class="btn btn-primary-light px-0 w-100"
            @click="previousStep"
          >
            上一步
          </button>
        </div>
        <div class="col-md-6 col-lg-3">
          <button
            type="button"
            class="btn btn-primary px-0 w-100"
            @click="finishLaunch"
          >
            送出提案
          </button>
        </div>
      </div>
    </div>
  </main>
  <FeedbackInfo
    ref="feedbackInfo"
    :temp-data="tempData"
    @feedback-handler="feedbackHandler"
  />
  <FeedbackSort ref="feedbackSort" />
</template>

<script>
// pinia 載入
import { mapActions, mapState } from 'pinia';
import feedbackStore from '@/stores/feedbackStore';
import launchStore from '@/stores/launchStore';

// mixins 載入
import mixinFullScreenLoading from '@/mixins/mixinFullScreenLoading';

// component 載入
import LaunchNav from '@/components/launch/LaunchNav.vue';
import FeedbackInfo from '@/components/launch/FeedbackInfo.vue';
import FeedbackSort from '@/components/launch/FeedbackSort.vue';

// Icon 載入
import PlusIcon from '@/components/icons/PlusIcon.vue';

export default {
  mixins: [mixinFullScreenLoading],

  data() {
    return {
      tempData: {},
      currentState: '',
    };
  },

  methods: {
    // 取用 pinia store 資料
    ...mapActions(feedbackStore, [
      'getFeedback',
      'postFeedback',
      'putFeedback',
      'deleteFeedback',
    ]),
    ...mapActions(launchStore, ['submitLaunch']),

    // 呼叫新增回饋或修改回饋
    async feedbackHandler(data) {
      this.showFullScreenLoading();
      let state;
      if (this.currentState === 'add' || this.currentState === 'copy') {
        state = await this.postFeedback(data);
      } else {
        const { feedbackID } = data;
        state = await this.putFeedback(data, feedbackID);
      }

      if (state && this.currentState !== 'copy') {
        this.$refs.feedbackInfo.closeModal();
      }
      this.hideFullScreenLoading();
    },

    // 將資料寫入並打開 modal
    infoModal(state, currentData) {
      this.currentState = state;
      if (this.currentState === 'add') {
        this.tempData = {
          feedbackName: '',
          feedbackTitle: '',
          feedbackImage: '',
          feedbackSettingMoney: 100,
          feedbackArticle: '',
          feedbackLimitAmount: null,
          feedbackLimitTime: '未啟用',
          feedbackStartTime: '2024-01-01',
          feedbackEndTime: '2024-01-01',
          customizeProperty: {
            shippingArea: '',
            limitNum: false,
          },
        };
      } else {
        this.tempData = currentData;
      }
      this.$refs.feedbackInfo.openModal();
    },

    sortModal() {
      this.$refs.feedbackSort.openModal();
    },

    previousStep() {
      this.$router.go(-1);
    },

    async finishLaunch() {
      this.showFullScreenLoading();
      const state = await this.submitLaunch();
      if (state) this.$router.push('/');
      this.hideFullScreenLoading();
    },
  },

  computed: {
    ...mapState(feedbackStore, ['feedbackSet']),
  },

  async mounted() {
    this.showFullScreenLoading();
    await this.getFeedback();
    this.hideFullScreenLoading();
  },

  components: {
    LaunchNav,
    PlusIcon,
    FeedbackInfo,
    FeedbackSort,
  },
};
</script>
