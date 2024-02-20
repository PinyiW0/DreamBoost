<template>
  <LaunchNav current-page="回饋設定" />
  <div class="container">
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
        <button type="button" class="btn btn-primary" @click="sortModal">自訂排序回饋</button>
      </nav>
    </div>
    <div class="col-xl-9 mx-auto mb-27">
      <div class="p-7 p-lg-13 mb-9 border border-gray-700 rounded-3">
        <div class="row gx-11 gy-7">
          <div class="col-md-6 col-lg-7">
            <div class="card p-7 p-lg-9 border-primary border-2 shadow">
              <img
                src="https://fakeimg.pl/350x250"
                class="card-img-top mb-12 rounded-2"
                alt="..."
              />
              <div class="card-body">
                <span class="text-primary fs-6"> #類別 </span>
                <h5 class="card-title mb-7 text-gray-700 fw-bold">
                  40字以內的標題
                </h5>
                <div class="card-text d-flex justify-content-between fs-6">
                  <p class="mb-0">
                    寄送地點 <br />
                    只寄送台灣本島
                  </p>
                  <p class="mb-0">
                    預計寄送時間 <br />
                    2024/12
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-5 align-self-end">
            <div class="row gy-7">
              <div class="col-12">
                <a
                  href="#"
                  class="btn btn-primary w-100"
                  @click.prevent="infoModal"
                >
                  編輯回饋資訊
                </a>
              </div>
              <div class="col-12">
                <a href="#" class="btn btn-gray-600 w-100"> 隱藏此回饋 </a>
              </div>
              <div class="col-lg-6">
                <a href="#" class="btn btn-gray-400 px-0 w-100"> 刪除回饋 </a>
              </div>
              <div class="col-lg-6">
                <a href="#" class="btn btn-primary-light px-0 w-100">
                  複製此回饋
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a
        href="#"
        class="btn btn-outline-primary d-flex justify-content-center align-items-center gap-2 mb-13"
        @click.prevent="infoModal"
      >
        新增一個回饋
        <i style="width: 16px; margin-top: -6px">
          <PlusIcon />
        </i>
      </a>
      <div class="row justify-content-lg-end gy-7">
        <div class="col-md-6 col-lg-4">
          <a href="#" class="btn btn-primary-light w-100">上一步</a>
        </div>
        <div class="col-md-6 col-lg-4">
          <a href="#" class="btn btn-primary w-100">下一步</a>
        </div>
      </div>
    </div>
  </div>
  <FeedbackInfo ref="feedbackInfo" />
  <FeedbackSort ref="feedbackSort" />
</template>

<script>
// component 引入
import LaunchNav from '@/components/launch/LaunchNav.vue';
import FeedbackInfo from '@/components/launch/FeedbackInfo.vue';
import FeedbackSort from '@/components/launch/FeedbackSort.vue';

// Icon 引入
import PlusIcon from '@/components/icons/PlusIcon.vue';

export default {
  methods: {
    infoModal() {
      this.$refs.feedbackInfo.openModal();
    },

    sortModal() {
      this.$refs.feedbackSort.openModal();
    },
  },

  components: {
    LaunchNav,
    PlusIcon,
    FeedbackInfo,
    FeedbackSort,
  },
};
</script>
