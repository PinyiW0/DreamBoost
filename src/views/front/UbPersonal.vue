<template>
  <main>
    <!-- 使用者上傳圖片區塊 -->
    <section class="container pt-20 mx-auto">
      <div class="col-7 d-flex flex-column flex-lg-row align-items-center justify-content-center mx-auto mb-14">
        <img
          :src="userInfo.userAvatarImage"
          id="userAvatarImage"
          class="rounded-circle img-fluid object-fit-cover d-block me-0 me-lg-14 mb-6 mb-lg-0"
          style="width: 180px;height: 180px;"
          alt="會員自行上傳的圖像">
        <div class="d-flex flex-column justify-content-center align-items-center align-items-lg-start">
          <div class="d-flex flex-column flex-lg-row align-items-center align-items-lg-baseline">
            <h1 class="fs-3 text-primary mb-0 mb-lg-20 me-0 me-lg-2">個人資料</h1>
            <p class="fs-5 text-primary-light mb-5 mb-lg-0">Personal Information</p>
          </div>
          <button
            type="button"
            class="btn border-0 fs-4 fs-lg-5 fw-medium text-primary ps-0 pe-1 py-0 mb-2"
            @click.prevent="userUploadImage"
            >
            上傳圖片
            <span >
              <UpLoad class="upload-hover"></UpLoad>
            </span>
          </button>
          <p class="mb-0">請上傳 2MB 以內的 JPEG 或 PNG 檔</p>
        </div>
      </div>
    </section>
    <!-- 基本資料填寫 -->
    <section class="container col-11 col-lg-6 mx-auto">
      <div class="col-12 col-lg-10 mb-9 mx-auto">
        <label for="addressee" class="form-label fw-medium text-gray-500">
          註冊信箱
        </label>
        <input class="form-control fs-6 border-primary-light py-2" id="addressee" :placeholder="userMail" disabled>
        <p class="fs-6 text-gray-500 mt-1">此為您的登入帳號</p>
      </div>
      <div class="col-12 col-lg-10 mb-6 mb-lg-11 mx-auto">
        <label for="contact-email" class="form-label fw-medium">
          聯絡信箱
        </label>
        <input
          class="form-control fs-6 border-primary-light text-gray-500 py-2"
          id="contact-email"
          v-model="userInfo.customizeProperty.contactEmail"
          :placeholder="placeholderText"
          >
      </div>
      <div class="col-12 col-lg-10 mb-17 mx-auto">
        <div class="row gy-3">
          <div class="col-12 col-lg-6 mb-6">
            <label for="start-time" class="form-label lh-md fw-medium">
              生日
            </label>
            <input
              type="date"
              class="form-control border-primary-light text-gray-500"
              id="birth"
              v-model="userInfo.userBirthday"
            />
          </div>
          <div class="col-12 col-lg-6">
            <label for="gender" class="form-label fw-medium lh-md">性別</label>
            <select
              class="form-select border-primary-light fs-6 text-gray-500 py-2"
              aria-label="male-or-female"
              id="ID-gender" v-model="userInfo.userGender">
              <option selected disabled value="choose">請選擇</option>
              <option value="male">男性</option>
              <option value="female">女性</option>
            </select>
          </div>
        </div>
      </div>
      <div class="col-12 col-lg-6 mb-25 mx-auto">
        <button
          type="submit"
          class="btn btn-primary w-100"
          @click.prevent="updateUserProfile"
          >
          修改並儲存
        </button>
      </div>
    </section>
  </main>
</template>

<script>
import UpLoad from '@/components/icons/UpLoad.vue';
import FullScreenLoading from '@/mixins/FullScreenLoading';

const { VITE_URL } = import.meta.env;

export default {
  components: {
    UpLoad,
  },
  data() {
    return {
      userMail: '',
      placeholderText: 'abc@mail.com',
      userInfo: {
        userTelephone: '09123456789',
        userGender: '',
        userAvatarImage: '',
        userBirthday: '',
        customizeProperty: {
          contactEmail: '',
        },
      },
    };
  },
  mixins: [FullScreenLoading],
  mounted() {
    this.showFullScreenLoading({ backgroundColor: '#258794' });
    this.checkUser();
    this.getUserData();
    setTimeout(() => {
      this.hideFullScreenLoading();
    }, 1500);
  },
  methods: {
    // API限制所以要先驗證登入狀態並填入所有欄位資料
    checkUser() {
      const token = document.cookie.replace(/(?:(?:^|.*;\s*)db\s*=\s*([^;]*).*$)|^.*$/, '$1');
      this.$http.defaults.headers.common.Authorization = token;
      this.$http.post(`${VITE_URL}/dreamboost/checktoken`)
        .then((res) => {
          if (res.data.success) {
            this.userMail = res.data.data.result.username;
          }
        })
        .catch(() => {
          this.$router.push({ name: 'member' });
        });
    },
    userUploadImage() {
      const token = document.cookie.replace(/(?:(?:^|.*;\s*)db\s*=\s*([^;]*).*$)|^.*$/, '$1');
      this.$http.defaults.headers.common.Authorization = token;
      // 創建一個隱藏的 input[type="file"] 元素
      const input = document.createElement('input');
      input.type = 'file';
      input.style.display = 'none';
      // 當選擇檔案時執行的處理函數
      input.addEventListener('change', (event) => {
        const file = event.target.files[0];
        const formData = new FormData();
        formData.append('image', file);
        this.$http.post(`${VITE_URL}/dreamboost/upload`, formData, { Authorization: token })
          .then((res) => {
            if (res.data.success) {
              console.log(res.data.data.result);
              this.userInfo.userAvatarImage = res.data.data.result;
            }
          })
          .catch((err) => {
            console.log(err, '沒有上傳成功');
          });
      });
      input.click();
    },
    updateUserProfile() {
      const token = document.cookie.replace(/(?:(?:^|.*;\s*)db\s*=\s*([^;]*).*$)|^.*$/, '$1');
      this.$http.defaults.headers.common.Authorization = token;
      this.$http.post(`${VITE_URL}/dreamboost/user/normal/userprofile`, this.userInfo)
        .then((res) => {
          if (res.data.success) {
            console.log(res.data);
          } else {
            console.error('更新使用者資料失敗：', res.data.message);
          }
        })
        .catch((err) => {
          console.error('更新使用者資料失敗：', err);
        });
    },
    getUserData() {
      const token = document.cookie.replace(/(?:(?:^|.*;\s*)db\s*=\s*([^;]*).*$)|^.*$/, '$1');
      this.$http.defaults.headers.common.Authorization = token;
      this.$http.get(`${VITE_URL}/dreamboost/user/normal/userprofile`)
        .then((res) => {
          if (res.data.success) {
            this.userInfo = res.data.data.result;
            if (!this.userInfo.customizeProperty) {
              this.userInfo.customizeProperty = { contactEmail: '' };
              this.placeholderText = this.userInfo.customizeProperty.contactEmail;
            } else {
              console.warn('取得既有的使用者資料失敗：', res);
            }
          } else {
            console.error('更新使用者資料失敗：', res.data.message);
          }
        })
        .catch((err) => {
          console.error('更新使用者資料失敗：', err);
        });
    },
  },
};

</script>

<style lang="scss">
.upload-hover {
  color: var(--bs-primary);

  &:hover {
    transform: translate3d(0, -.125rem, 0);
    transition: opacity 0.3s, transform 0.3s;
  }
}
</style>
