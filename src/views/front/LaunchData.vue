<template>
  <LaunchNav current-page="提案資料" />
  <main class="container">
    <div class="col-xl-8 mx-auto mb-26">
      <p class="fs-6">
        在這個區塊您將撰寫提案者需要提供的個人資料及身份驗證，在填寫提案團隊資訊的同時，您可以增加更多和本次專案相關的資訊連結及粉絲專頁，讓瀏覽者對您有更多的了解。
      </p>
      <VForm class="row gy-6" v-slot="{ errors }" @submit="nextStep">
        <div class="col-lg-6">
          <label for="launchLeader" class="form-label">
            提案負責人姓名
            <span class="text-danger"> * </span>
          </label>
          <VField
            type="text"
            id="launchLeader"
            name="提案負責人"
            class="form-control py-3"
            :class="{ 'is-invalid': errors['提案負責人'] }"
            v-model="launchData.customizeProperty.userName"
            rules="required"
            placeholder="為核實及平台提案資料留存用，請填寫真實姓名。"
          ></VField>
          <ErrorMessage
            class="invalid-feedback"
            name="提案負責人"
          ></ErrorMessage>
        </div>
        <div class="col-12">
          <div class="row gy-3">
            <div class="col-md-6">
              <label for="launchEmail" class="form-label">
                電子郵件
                <span class="text-danger"> * </span>
              </label>
              <input
                type="email"
                id="launchEmail"
                name="email"
                class="form-control py-3"
                placeholder="預設帶入會員的電子郵件"
                disabled
                :value="launchData.customizeProperty.userEmail"
              />
            </div>
            <div class="col-md-6 align-self-end">
              <button
                type="button"
                class="btn btn-primary-light w-100 w-md-auto"
                disabled
              >
                發送驗證信
              </button>
            </div>
          </div>
        </div>
        <div class="col-12">
          <div class="row gy-3">
            <div class="col-md-6">
              <label for="tel" class="form-label">
                行動電話
                <span class="text-danger"> * </span>
              </label>
              <VField
                type="tel"
                id="tel"
                name="行動電話"
                class="form-control py-3"
                :class="{ 'is-invalid': errors['行動電話'] }"
                v-model="launchData.customizeProperty.userTel"
                rules="required"
                placeholder="+8869-XX-XXX-XXX"
              ></VField>
              <ErrorMessage
                class="invalid-feedback"
                name="行動電話"
              ></ErrorMessage>
            </div>
            <div class="col-md-6 align-self-end">
              <button
                type="button"
                class="btn btn-primary-light w-100 w-md-auto"
                disabled
              >
                發送驗證碼
              </button>
            </div>
          </div>
        </div>
        <div class="col-12">
          <div class="row">
            <div class="col-md-6">
              <label for="represent" class="form-label">
                提案人身份
                <span class="text-danger"> * </span>
              </label>
              <div class="d-flex flex-wrap column-gap-2">
                <select
                  id="represent"
                  class="form-select w-25"
                  v-model="launchData.customizeProperty.userRepresent"
                  :class="{ 'border-danger': errors['提案人身份'] }"
                >
                  <option value="" selected disabled>選擇</option>
                  <option value="個人">個人</option>
                  <option value="公司">公司</option>
                </select>
                <VField
                  type="text"
                  id="identity"
                  name="提案人身份"
                  class="form-control flex-grow-1 w-50 py-3"
                  :class="{ 'is-invalid': errors['提案人身份'] }"
                  v-model="launchData.customizeProperty.userIdentity"
                  rules="required"
                  :placeholder="
                    launchData.customizeProperty.userRepresent === '公司'
                      ? '請輸入公司統一編號'
                      : '請輸入身分證字號'
                  "
                  :disabled="!launchData.customizeProperty.userRepresent"
                ></VField>
                <ErrorMessage
                  class="invalid-feedback"
                  name="提案人身份"
                ></ErrorMessage>
              </div>
              <p class="mt-1 fs-12 text-gray-300">
                提案者必須是具備完全行為能力的自然人、合法登記的法人或團體。
              </p>
            </div>
            <div class="col-md-6">
              <label for="registerName" class="form-label">
                登記名稱
                <span class="text-danger"> * </span>
              </label>
              <VField
                type="text"
                id="registerName"
                name="登記名稱"
                class="form-control py-3"
                :class="{ 'is-invalid': errors['登記名稱'] }"
                v-model="launchData.customizeProperty.registerName"
                rules="required"
              ></VField>
              <ErrorMessage
                class="invalid-feedback"
                name="登記名稱"
              ></ErrorMessage>
              <p class="mt-1 fs-6 text-gray-300">
                請填寫與上方身分證字號 /
                統一編號資料相符之登記名稱。如您的提案身份為公司 /
                非營利組織，提案人身份及登記名稱將揭露於專案頁面中。
              </p>
            </div>
          </div>
        </div>
        <div class="col-12">
          <div class="row">
            <div class="col-md-6">
              <div class="d-flex align-items-center mb-9">
                <img
                  :src="
                    launchData.customizeProperty.userImage ||
                    'https://fakeimg.pl/120x120'
                  "
                  class="flex-shrink-0 me-7 img-fluid object-fit-cover"
                  style="width: 120px; height: 120px"
                  alt="使用者圖片"
                />
                <div>
                  <h5 class="mt-0 mb-1 fs-6">2MB 以內的 JPEG 或 PNG 檔</h5>
                  <p class="mb-2 fs-6">
                    圖片為目前的會員圖片，建議更新為適合此專案的個人或團隊照片。
                  </p>
                  <input
                    type="file"
                    id="feedbackImg"
                    class="d-none"
                    @change="imageHandler"
                  />
                  <label
                    for="feedbackImg"
                    class="btn btn-primary d-flex justify-content-center gap-2 px-0 py-2 w-100 rounded-0"
                  >
                    <i style="width: 20px; margin-top: -2px">
                      <CameraIcon />
                    </i>
                    上傳封面照片
                  </label>
                </div>
              </div>
              <div>
                <label for="displayName" class="form-label">
                  顯示名稱
                  <span class="text-danger"> * </span>
                </label>
                <VField
                  type="text"
                  id="displayName"
                  name="顯示名稱"
                  class="form-control py-3"
                  :class="{ 'is-invalid': errors['顯示名稱'] }"
                  v-model="launchData.customizeProperty.displayName"
                  rules="required"
                  placeholder="預設帶入會員名稱"
                ></VField>
                <ErrorMessage
                  class="invalid-feedback"
                  name="顯示名稱"
                ></ErrorMessage>
                <p class="mt-1 fs-6 text-gray-300">
                  顯示名稱將會被瀏覽者視為此計畫的執行團隊。此名稱為您目前的會員名稱，建議更新為適合此專案的個人或團隊名稱。
                </p>
              </div>
            </div>
            <div class="col-md-6">
              <label for="selfIntroduction" class="form-label">
                自我介紹
                <span class="text-danger"> * </span>
              </label>
              <VField
                id="selfIntroduction"
                name="自我介紹"
                class="form-control py-3"
                :class="{ 'is-invalid': errors['自我介紹'] }"
                v-model="launchData.customizeProperty.introduction"
                rules="required"
                as="textarea"
                rows="10"
              ></VField>
              <ErrorMessage
                class="invalid-feedback"
                name="自我介紹"
              ></ErrorMessage>
            </div>
          </div>
        </div>
        <div class="col-12">
          <label for="fansPage" class="form-label"> 粉絲專頁 </label>
          <input
            type="text"
            id="fansPage"
            name="fansPage"
            class="form-control border-primary-light py-3"
            placeholder="如果有和計畫相關的粉絲專頁，請直接貼上完整網址。"
            v-model="launchData.customizeProperty.fanPage"
          />
        </div>
        <div class="col-12">
          <label for="projectPage" class="form-label"> 專案網頁 </label>
          <input
            type="text"
            id="projectPage"
            name="fansPage"
            class="form-control border-primary-light py-3"
            placeholder="如果有和計畫相關的粉絲專頁，請直接貼上完整網址。"
            v-model="launchData.customizeProperty.projectPage"
          />
        </div>
        <div class="col-12 mt-17">
          <div class="row justify-content-end">
            <div class="d-flex flex-column flex-md-row justify-content-end">
              <button
                type="button"
                class="btn btn-primary-light col-md-3 px-0 mb-4 mb-md-0 me-md-6"
                @click="$router.go(-1)"
              >
                上一步
              </button>
              <button type="submit" class="btn btn-primary col-md-3 px-0">
                儲存並新增回饋
              </button>
            </div>
          </div>
        </div>
      </VForm>
    </div>
  </main>
</template>

<script>
// pinia 載入
import { mapWritableState, mapActions } from 'pinia';
import launchStore from '@/stores/launchStore';
// mixins 引入
import mixinUploadImage from '@/mixins/mixinUploadImage';
import mixinVeeValidate from '@/mixins/mixinVeeValidate';
import mixinFullScreenLoading from '@/mixins/mixinFullScreenLoading';

// 元件載入
import LaunchNav from '@/components/launch/LaunchNav.vue';
// icon 引入
import CameraIcon from '@/components/icons/CameraIcon.vue';

export default {
  mixins: [mixinUploadImage, mixinVeeValidate, mixinFullScreenLoading],

  methods: {
    ...mapActions(launchStore, ['postLaunch', 'putLaunch']),

    // 圖片上傳
    async imageHandler(value) {
      this.showFullScreenLoading();
      this.launchData.customizeProperty.userImage = await this.uploadImage(
        value,
      );
      this.hideFullScreenLoading();
    },

    // 呼叫新增、修改提案
    async nextStep() {
      let state;
      this.showFullScreenLoading();
      if (this.launchState === 'put') {
        const launchID = sessionStorage.getItem('launchID');
        state = await this.putLaunch(launchID);
      } else {
        state = await this.postLaunch();
      }

      if (state) {
        this.launchState = '';
        this.$router.push('/launch/feedback');
      }
      this.hideFullScreenLoading();
    },
  },

  computed: {
    ...mapWritableState(launchStore, ['launchData', 'launchState']),
  },

  components: {
    LaunchNav,
    CameraIcon,
  },
};
</script>
