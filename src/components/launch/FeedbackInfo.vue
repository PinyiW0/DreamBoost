<template>
  <div
    class="modal fade"
    id="staticBackdrop"
    tabindex="-1"
    aria-labelledby="staticBackdropLabel"
    aria-hidden="true"
    ref="feedbackInfoModal"
  >
    <div class="modal-dialog modal-dialog-centered modal-xl">
      <div class="modal-content">
        <div class="modal-header flex-column row-gap-3 border-0">
          <button
            type="button"
            class="btn-close"
            aria-label="Close"
            @click="closeModal"
          ></button>
          <h1 class="modal-title fs-3 text-primary fw-normal">編輯回饋資訊</h1>
        </div>
        <VForm
          class="modal-body mx-xl-7 px-lg-26 border-2 border-top border-primary-light text-gray-800"
          v-if="showForm"
          v-slot="{ errors }"
          @submit="saveFeedback"
        >
          <div class="row gy-4 mb-10">
            <div class="col-lg-6">
              <div class="mb-4">
                <label for="feedbackName" class="form-label">
                  回饋名稱
                  <span class="text-danger"> * </span>
                </label>
                <VField
                  type="text"
                  id="feedbackName"
                  name="回饋名稱"
                  class="form-control mb-1 py-3"
                  :class="{ 'is-invalid': errors['回饋名稱'] }"
                  v-model="copyTempData.feedbackName"
                  rules="required"
                  placeholder="請輸入回饋名稱"
                ></VField>
                <ErrorMessage
                  class="invalid-feedback"
                  name="回饋名稱"
                ></ErrorMessage>
              </div>
              <div class="mb-4">
                <label for="feedbackPrice" class="form-label">
                  回饋金額
                  <span class="text-danger"> * </span>
                </label>
                <VField
                  type="number"
                  id="feedbackPrice"
                  name="回饋金額"
                  class="form-control mb-1 py-3"
                  :class="{ 'is-invalid': errors['回饋金額'] }"
                  v-model="copyTempData.feedbackSettingMoney"
                  rules="required|min_value:100"
                  placeholder="100"
                  min="100"
                ></VField>
                <ErrorMessage
                  class="invalid-feedback"
                  name="回饋金額"
                ></ErrorMessage>
                <p class="fs-6 text-gray-400">最低金額為 $100 元</p>
              </div>
              <div class="mb-4">
                <label for="abstract" class="form-label">
                  內容摘要
                  <span class="text-danger"> * </span>
                </label>
                <VField
                  id="abstract"
                  name="內容摘要"
                  class="form-control mb-0"
                  :class="{ 'is-invalid': errors['內容摘要'] }"
                  v-model="copyTempData.feedbackArticle"
                  rules="required|max:150"
                  as="textarea"
                  placeholder="請在150字內"
                  rows="10"
                ></VField>
                <ErrorMessage
                  class="invalid-feedback"
                  name="內容摘要"
                ></ErrorMessage>
              </div>
              <template v-if="copyTempData.customizeProperty">
                <div class="mb-4">
                  <label for="shippingArea" class="form-label">
                    寄送區域
                    <span class="text-danger"> * </span>
                  </label>
                  <VField
                    id="shippingArea"
                    name="寄送區域"
                    class="form-select py-3"
                    :class="{ 'is-invalid': errors['寄送區域'] }"
                    v-model="copyTempData.customizeProperty.shippingArea"
                    rules="required"
                    as="select"
                  >
                    <option value="" selected disabled>請選擇一個區域</option>
                    <option value="台灣">台灣</option>
                  </VField>
                  <ErrorMessage
                    class="invalid-feedback"
                    name="寄送區域"
                  ></ErrorMessage>
                </div>
                <div>
                  <label for="shippingTime" class="form-label">
                    預計寄送時間
                    <span class="text-danger"> * </span>
                  </label>
                  <VField
                    type="date"
                    id="shippingTime"
                    name="預計寄送時間"
                    class="form-control py-3"
                    :class="{ 'is-invalid': errors['預計寄送時間'] }"
                    v-model="copyTempData.customizeProperty.shippingTime"
                    rules="required"
                  ></VField>
                  <ErrorMessage
                    class="invalid-feedback position-absolute"
                    name="預計寄送時間"
                  ></ErrorMessage>
                </div>
              </template>
            </div>
            <div class="col-lg-6 d-flex flex-column">
              <div class="mb-4">
                <label for="feedbackTitle" class="form-label">
                  回饋標題
                  <span class="text-danger"> * </span>
                </label>
                <VField
                  type="text"
                  id="feedbackTitle"
                  name="回饋標題"
                  class="form-control mb-1 py-3"
                  :class="{ 'is-invalid': errors['回饋標題'] }"
                  v-model="copyTempData.feedbackTitle"
                  rules="required"
                  placeholder="請輸入回饋標題"
                ></VField>
                <ErrorMessage
                  class="invalid-feedback"
                  name="回饋標題"
                ></ErrorMessage>
              </div>
              <p>
                回饋封面
                <span class="text-danger"> * </span>
              </p>
              <img
                :src="
                  copyTempData.feedbackImage || 'https://fakeimg.pl/1200x800'
                "
                class="img-fluid mb-4"
                alt="提案回饋圖片"
              />
              <p>
                請提供 JPEG 或 PNG 檔，圖片尺寸至少 1200x 800 PX (3:2)； 2MB
                以內。
              </p>
              <VField
                type="file"
                id="feedbackImg"
                name="圖片上傳"
                class="d-none"
                :class="{ 'is-invalid': errors['圖片上傳'] }"
                @change="imageHandler"
                :rules="checkFeedbackImage"
              ></VField>
              <label
                for="feedbackImg"
                class="btn btn-primary d-flex justify-content-center gap-2 px-8 w-100"
                :class="{ 'border-danger': errors['圖片上傳'] }"
              >
                <i style="width: 20px; margin-top: -2px">
                  <CameraIcon />
                </i>
                上傳封面照片
              </label>
              <ErrorMessage
                class="invalid-feedback"
                name="圖片上傳"
              ></ErrorMessage>
              <div class="mt-auto">
                <label for="feedbackQtyText" class="form-label"
                  >回饋數量限制
                </label>
                <div class="input-group border-primary-light">
                  <div
                    class="input-group-text gap-1 py-3 bg-transparent border-primary-light"
                  >
                    <input
                      class="form-check-input mt-0"
                      type="checkbox"
                      id="feedbackQty"
                      v-if="copyTempData.customizeProperty"
                      v-model="copyTempData.customizeProperty.limitNum"
                    />
                    <label for="feedbackQty" class="text-gray-400 lh-1"
                      >限量
                    </label>
                  </div>
                  <input
                    type="number"
                    id="feedbackQtyText"
                    class="form-control py-3 border-primary-light"
                    aria-label="Text input with checkbox"
                    placeholder="0"
                    :disabled="!copyTempData.customizeProperty?.limitNum"
                    v-model.number="copyTempData.feedbackLimitAmount"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="mb-10">
            <label for="feedbackTime" class="form-label fw-medium me-2 mb-0">
              限時回饋設定
            </label>
            <input
              type="checkbox"
              id="feedbackTime"
              class="form-check-input me-1"
              style="margin-top: 2px"
              v-model="copyTempData.feedbackLimitTime"
              true-value="啟用"
              false-value="未啟用"
            />
            <label for="feedbackTime" class="form-label mb-0">
              啟用限時回饋
            </label>
          </div>
          <div
            class="row gy-3 mb-13"
            v-show="copyTempData.feedbackLimitTime === '啟用'"
          >
            <div class="col-lg-6">
              <label for="startDate" class="form-label mb-3">開始時間</label>
              <input
                type="date"
                id="startDate"
                class="form-control border-primary-light py-3 mb-6"
                v-model="copyTempData.feedbackStartTime"
              />
              <div class="input-group">
                <span
                  class="input-group-text py-3 border-primary-light bg-transparent"
                  id="startTime"
                  >開始時間
                </span>
                <input
                  type="time"
                  class="form-control py-3 border-primary-light"
                  id="startTime"
                />
              </div>
            </div>
            <div class="col-lg-6">
              <label for="endDate" class="form-label mb-3">結束日期</label>
              <input
                type="date"
                id="endDate"
                class="form-control border-primary-light py-3 mb-6"
                v-model="copyTempData.feedbackEndTime"
              />
              <div class="input-group">
                <span
                  class="input-group-text py-3 border-primary-light bg-transparent"
                  id="endTime"
                  >結束時間</span
                >
                <input
                  type="time"
                  class="form-control py-3 border-primary-light"
                  id="endTime"
                />
              </div>
            </div>
          </div>
          <div class="row gy-3 justify-content-end">
            <div class="col-lg-3">
              <button
                type="button"
                class="btn btn-gray-400 px-0 w-100"
                @click="closeModal"
              >
                放棄修改
              </button>
            </div>
            <div class="col-lg-3">
              <button type="submit" class="btn btn-primary px-0 w-100">
                儲存回饋
              </button>
            </div>
          </div>
        </VForm>
      </div>
    </div>
  </div>
</template>

<script>
// mixins 載入
import mixinUploadImage from '@/mixins/mixinUploadImage';
import mixinVeeValidate from '@/mixins/mixinVeeValidate';
import FullScreenLoading from '@/mixins/FullScreenLoading';

// Icon 載入
import CameraIcon from '../icons/CameraIcon.vue';

export default {
  props: ['tempData'],
  mixins: [mixinUploadImage, mixinVeeValidate, FullScreenLoading],

  data() {
    return {
      feedbackModal: null,
      copyTempData: {},
      showForm: false,
    };
  },

  methods: {
    saveFeedback() {
      this.$emit('feedback-handler', this.copyTempData);
    },

    async imageHandler(value) {
      this.showFullScreenLoading();
      this.copyTempData.feedbackImage = await this.uploadImage(value);
      this.hideFullScreenLoading();
    },

    openModal() {
      this.feedbackModal.show();
      this.showForm = !this.showForm;
    },

    closeModal() {
      this.feedbackModal.hide();
      setTimeout(() => {
        this.showForm = !this.showForm;
      }, 500);
    },
  },

  mounted() {
    this.feedbackModal = new this.$bs.Modal(this.$refs.feedbackInfoModal, {
      backdrop: 'static',
    });
  },

  watch: {
    tempData() {
      this.copyTempData = JSON.parse(JSON.stringify(this.tempData));
    },
  },

  components: {
    CameraIcon,
  },
};
</script>
