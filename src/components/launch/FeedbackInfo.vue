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
        <div
          class="modal-body mx-xl-7 px-lg-26 border-2 border-top border-primary-light text-gray-800"
        >
          <div class="row gy-4 mb-10">
            <div class="col-lg-6">
              <div class="mb-4">
                <label for="feedbackPrice" class="form-label">
                  回饋金額
                  <span class="text-danger"> * </span>
                </label>
                <input
                  type="text"
                  id="feedbackPrice"
                  class="form-control border-primary-light mb-1 py-3"
                  placeholder="100"
                />
                <p class="fs-6 text-gray-400">最低金額為 $100 元</p>
              </div>
              <div class="mb-4">
                <label for="abstract" class="form-label">
                  內容摘要
                  <span class="text-danger"> * </span>
                </label>
                <textarea
                  class="form-control border-primary-light mb-0"
                  id="abstract"
                  rows="10"
                  placeholder="請在150字內"
                ></textarea>
              </div>
              <div class="mb-4">
                <label for="shippingArea" class="form-label">
                  寄送區域
                  <span class="text-danger"> * </span>
                </label>
                <select
                  name=""
                  id="shippingArea"
                  class="form-select border-primary-light py-3"
                >
                  <option value="" selected disabled>請選擇一個區域</option>
                  <option value="">苗栗</option>
                  <option value="">台中</option>
                </select>
              </div>
              <div>
                <label for="shippingTime" class="form-label">
                  預計寄送時間
                  <span class="text-danger"> * </span>
                </label>
                <input
                  type="date"
                  id="shippingTime"
                  class="form-control border-primary-light py-3"
                />
              </div>
            </div>
            <div class="col-lg-6 d-flex flex-column">
              <p>
                回饋封面
                <span class="text-danger"> * </span>
              </p>
              <img
                src="https://fakeimg.pl/1200x800"
                class="img-fluid mb-4"
                alt=""
              />
              <p>
                請提供 JPEG 或 PNG 檔，圖片尺寸至少 1200x 800 PX (3:2)； 2MB
                以內。
              </p>
              <input type="file" id="feedbackImg" class="d-none" />
              <label
                for="feedbackImg"
                class="btn btn-primary d-flex justify-content-center gap-2 px-8 w-100 mb-3"
              >
                <i style="width: 20px; margin-top: -2px">
                  <CameraIcon />
                </i>
                上傳封面照片
              </label>
              <div class="mt-auto">
                <label for="feedbackQtyText" class="form-label"
                  >回饋數量限制</label
                >
                <div class="input-group border-primary-light">
                  <div
                    class="input-group-text gap-1 py-3 bg-transparent border-primary-light"
                  >
                    <input
                      class="form-check-input mt-0"
                      type="checkbox"
                      id="feedbackQty"
                      value=""
                    />
                    <label for="feedbackQty" class="text-gray-400 lh-1"
                      >限量</label
                    >
                  </div>
                  <input
                    type="text"
                    id="feedbackQtyText"
                    class="form-control py-3 border-primary-light"
                    aria-label="Text input with checkbox"
                    placeholder="0"
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
            />
            <label for="feedbackTime" class="form-label mb-0">
              啟用限時回饋
            </label>
          </div>
          <div class="row gy-3 mb-13">
            <div class="col-lg-6">
              <label for="startDate" class="form-label mb-3">開始時間</label>
              <input
                type="date"
                id="startDate"
                class="form-control border-primary-light py-3 mb-6"
              />
              <div class="input-group">
                <span
                  class="input-group-text py-3 border-primary-light bg-transparent"
                  id="startTime"
                  >開始時間</span
                >
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
              <button type="button" class="btn btn-primary px-0 w-100">
                儲存回饋
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CameraIcon from '../icons/CameraIcon.vue';

export default {
  data() {
    return {
      feedbackModal: null,
    };
  },

  methods: {
    openModal() {
      this.feedbackModal.show();
    },

    closeModal() {
      this.feedbackModal.hide();
    },
  },

  mounted() {
    this.feedbackModal = new this.$bs.Modal(this.$refs.feedbackInfoModal, {
      backdrop: 'static',
    });
  },

  components: {
    CameraIcon,
  },
};
</script>
