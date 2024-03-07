<template>
  <LaunchNav current-page="專案大綱" />
  <main class="container mb-26">
    <div class="col-xl-8 mx-auto">
      <!-- 表單 -->
      <VForm
        class="row align-items-center"
        v-slot="{ errors }"
        @submit="$router.push('/launch/content')"
      >
        <div class="col-12 mb-10">
          <div class="mb-2">
            <label
              for="file"
              class="form-label mb-0 text-gray-800 fs-5 fw-normal"
            >
              專案封面
              <span class="text-danger"> * </span>
            </label>
          </div>
          <p class="mb-0 fs-6">
            請提供 JPEG 或 PNG 檔，圖片尺寸至少 1200x 800 px (3:2)； 2MB 以內。
          </p>
          <label
            for="file"
            class="btn btn-primary-light d-flex justify-content-center align-items-center gap-2 text-gray-700 fs-6 rounded-0"
            :class="{ 'border-danger': errors['圖片上傳'] }"
          >
            <i style="width: 20px; margin-top: -2px">
              <CameraIcon />
            </i>
            上傳封面照片
          </label>
          <VField
            type="file"
            id="file"
            name="圖片上傳"
            class="form-control d-none"
            :class="{ 'is-invalid': errors['圖片上傳'] }"
            rules="image|required"
            @change="imageHandler"
          ></VField>
          <ErrorMessage class="invalid-feedback" name="圖片上傳"></ErrorMessage>
        </div>
        <div class="col-12 mb-11">
          <div class="row gy-3">
            <div class="col-md-6 col-lg-3">
              <label for="start-date" class="form-label lh-md">
                專案開始時間
                <span class="text-danger"> * </span>
              </label>
              <VField
                type="date"
                id="start-date"
                name="開始時間"
                class="form-control py-3"
                :class="{ 'is-invalid': errors['開始時間'] }"
                v-model="launchData.proposalStartTime"
                rules="required"
                :min="minDay()"
              ></VField>
              <ErrorMessage
                class="invalid-feedback"
                name="開始時間"
              ></ErrorMessage>
            </div>
            <div class="col-md-6 col-lg-3">
              <label for="end-date" class="form-label lh-md">
                專案結束時間
                <span class="text-danger"> * </span>
              </label>
              <VField
                type="date"
                id="end-date"
                name="結束時間"
                class="form-control py-3"
                :class="{ 'is-invalid': errors['結束時間'] }"
                v-model="launchData.proposalEndTime"
                rules="required"
                :disabled="!launchData.proposalStartTime"
                :min="minDay()"
              ></VField>
              <ErrorMessage
                class="invalid-feedback"
                name="結束時間"
              ></ErrorMessage>
            </div>
            <div class="col-lg-6">
              <p class="py-7 px-4 bg-bgc-paper fs-6 rounded-4 mb-0 lh-sm">
                專案提交後需要七個工作天進行內容檢視，所以開始時間至少為 7
                天後。募資天數最短為 7 天，最長為 60 天。系統預設募資開始時間為
                12:00，結束時間為
                23:59:59，如需調整請於提交後與您的專案經理討論。
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-5 align-self-start">
          <div class="mb-7">
            <label for="title" class="form-label lh-md lterSpc-2">
              專案標題
              <span class="text-danger"> * </span>
            </label>
            <VField
              type="text"
              id="title"
              name="標題"
              placeholder="40個字以內的標題"
              class="form-control py-3 fs-6"
              :class="{ 'is-invalid': errors['標題'] }"
              v-model="launchData.proposalTitle"
              rules="required"
            ></VField>
            <ErrorMessage class="invalid-feedback" name="標題"></ErrorMessage>
          </div>
          <div class="mb-7">
            <label for="category" class="form-label lh-md lterSpc-2">
              專案類別
              <span class="text-danger"> * </span>
            </label>
            <VField
              id="category"
              name="類別"
              class="form-select py-3 fs-6"
              :class="{ 'is-invalid': errors['類別'] }"
              v-model="launchData.proposalCategory"
              rules="required"
              as="select"
            >
              <option value="" disabled selected>請選擇一種類別</option>
              <option value="挺好夢">挺好夢</option>
              <option value="科技設計">科技設計</option>
              <option value="健康生活">健康生活</option>
              <option value="時尚">時尚</option>
              <option value="公共在地">公共在地</option>
              <option value="美妝">美妝</option>
            </VField>
            <ErrorMessage class="invalid-feedback" name="類別"></ErrorMessage>
          </div>
          <div class="mb-7">
            <label for="target" class="form-label lh-md lterSpc-2">
              募資目標
              <span class="text-danger"> * </span>
            </label>
            <VField
              type="number"
              id="target"
              name="募資目標"
              class="form-control mb-2 py-3 fs-6"
              :class="{ 'is-invalid': errors['募資目標'] }"
              v-model="launchData.proposalTargetMoney"
              rules="required|min_value:5000"
              placeholder="5000"
              min="5000"
            ></VField>
            <ErrorMessage
              class="invalid-feedback"
              name="募資目標"
            ></ErrorMessage>
            <p class="fs-6 mb-0 text-gray-500">
              募資目標金額最低為 $5,000
              元。設定目標金額時，除了考量專案執行的成本支出外，也必須考慮回饋項目的成本，總體而言必須滿足「最低計畫可執行資金」的門檻，才是合理的募資目標。
            </p>
          </div>
          <div class="mb-7">
            <label for="summary" class="form-label lh-md lterSpc-2">
              內容摘要
              <span class="text-danger"> * </span>
            </label>
            <VField
              id="summary"
              name="內容摘要"
              class="form-control py-3 fs-6"
              :class="{ 'is-invalid': errors['內容摘要'] }"
              v-model="launchData.proposalSummary"
              rules="required|max:65"
              as="textarea"
              placeholder="請在65個字以內簡短描述專案內容，吸引瀏覽者點擊你的專案"
              rows="6"
            ></VField>
            <ErrorMessage
              class="invalid-feedback"
              name="內容摘要"
            ></ErrorMessage>
          </div>
        </div>
        <div class="col-md-6 mx-auto">
          <p class="mb-7">專案卡片預覽</p>
          <div class="card py-9 px-7 mb-16 border-2 border-primary">
            <img
              :src="
                launchData.proposalMainImage || 'https://fakeimg.pl/350x250'
              "
              class="card-img-top object-fit-cover rounded-2 mb-12"
              alt="卡片預覽的圖片"
              style="height: 250px"
            />
            <div class="card-body p-0">
              <span class="d-block mb-1 fs-6 text-primary"
                ># {{ launchData.proposalCategory || '類別' }}</span
              >
              <h3 class="card-title mb-7 fs-5 fw-semibold text-gray-700">
                {{ launchData.proposalTitle || '產品名稱' }}
              </h3>
              <h4
                class="d-flex align-items-center gap-3 mb-7 fw-normal text-gray-600 fs-5"
              >
                <span
                  class="d-flex justify-content-center align-items-center bg-primary rounded-circle"
                  style="width: 35px; height: 35px"
                >
                  <img
                    src="/images/logoWhite.png"
                    class="img-fluid"
                    alt="DreamBoost Logo"
                  />
                </span>
                發起人：Andrea Blanchard
              </h4>
              <div
                class="progress bg-secondary-light mb-7 rounded-pill"
                role="progressbar"
                aria-label="Basic example"
                aria-valuenow="80"
                aria-valuemin="0"
                aria-valuemax="100"
                style="height: 10px; width: 100%"
              >
                <div
                  class="progress-bar text-white bg-primary-dark rounded-pill"
                  style="width: 80%"
                ></div>
              </div>
              <div class="d-flex justify-content-between align-items-center">
                <p class="mb-0 fs-5">
                  已募資
                  <span class="fw-bold text-danger mb-0">80%</span>
                </p>
                <div class="d-flex align-items-center gap-3">
                  <span class="d-flex gap-1"
                    >11
                    <i
                      class="d-block text-primary"
                      style="width: 13px; margin-top: -1px"
                    >
                      <MessageIcon />
                    </i>
                  </span>
                  <span class="d-flex gap-1">
                    18
                    <i
                      class="d-block text-secondary-dark"
                      style="width: 15px; margin-top: -2px"
                    >
                      <StarFull />
                    </i>
                  </span>
                </div>
                <i class="d-block" style="width: 20px">
                  <ShareIcon />
                </i>
              </div>
            </div>
          </div>
          <button type="submit" class="btn btn-primary w-100">下一步</button>
        </div>
      </VForm>
    </div>
  </main>
</template>

<script>
// pinia 載入
import { mapWritableState, mapActions } from 'pinia';

// pinia Store 載入
import launchStore from '@/stores/launchStore';
import dateStore from '@/stores/dateStore';
import memberStore from '@/stores/memberStore';

// mixins 載入
import mixinUploadImage from '@/mixins/mixinUploadImage';
import mixinVeeValidate from '@/mixins/mixinVeeValidate';
import mixinFullScreenLoading from '@/mixins/mixinFullScreenLoading';

// 元件載入
import LaunchNav from '@/components/launch/LaunchNav.vue';
import CameraIcon from '@/components/icons/CameraIcon.vue';
import ShareIcon from '@/components/icons/ShareIcon.vue';
import MessageIcon from '@/components/icons/MessageIcon.vue';
import StarFull from '@/components/icons/StarFull.vue';

export default {
  mixins: [mixinUploadImage, mixinVeeValidate, mixinFullScreenLoading],

  methods: {
    ...mapActions(launchStore, ['getLaunch']),
    ...mapActions(memberStore, ['postCheckToken']),
    ...mapActions(dateStore, ['minDay']),

    // 圖片上傳
    async imageHandler(e) {
      this.showFullScreenLoading();
      const imageUrl = await this.uploadImage(e);
      if (imageUrl) this.launchData.proposalMainImage = imageUrl;
      this.hideFullScreenLoading();
    },
  },

  computed: {
    ...mapWritableState(launchStore, ['launchData', 'launchState']),
  },

  async mounted() {
    this.showFullScreenLoading();
    this.postCheckToken();
    const launchID = sessionStorage.getItem('launchID');
    if (launchID) {
      await this.getLaunch(launchID);
      this.launchState = 'put';
    }
    this.hideFullScreenLoading();
  },

  components: {
    LaunchNav,
    ShareIcon,
    MessageIcon,
    StarFull,
    CameraIcon,
  },
};
</script>
