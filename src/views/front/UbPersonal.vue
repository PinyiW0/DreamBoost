<template>
  <main>
    <!-- 使用者上傳圖片區塊 -->
    <section class="container pt-20 mx-auto">
      <div class="col-7 d-flex flex-column flex-lg-row align-items-center justify-content-center mx-auto mb-14">
        <img
          src="https://fakeimg.pl/180x180"
          class="rounded-circle img-fluid d-block me-0 me-lg-14 mb-6 mb-lg-0"
          alt="">
        <div class="d-flex flex-column justify-content-center align-items-center align-items-lg-start">
          <div class="d-flex flex-column flex-lg-row align-items-center align-items-lg-baseline">
            <h1 class="fs-3 text-primary mb-0 mb-lg-20 me-0 me-lg-2">使用者名稱</h1>
            <p class="fs-5 text-primary-light mb-5 mb-lg-0">User Name</p>
          </div>
          <button
            type="button"
            class="btn border-0 fs-4 fs-lg-5 fw-medium text-primary ps-0 pe-1 py-0 mb-2"
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
        <input class="form-control fs-6 border-primary-light py-2" id="addressee" placeholder="abc@gmail.com.tw" disabled>
        <p class="fs-6 text-gray-500 mt-1">此為您的登入帳號</p>
      </div>
      <div class="col-12 col-lg-10 mb-6 mb-lg-11 mx-auto">
        <label for="addressee" class="form-label fw-medium">
          聯絡信箱
        </label>
        <input class="form-control fs-6 border-primary-light text-gray-500 py-2" id="addressee" placeholder="abc@mail.com">
      </div>
      <div class="col-12 col-lg-10 mb-17 mx-auto">
        <div class="row gy-3">
          <div class="col-12 col-lg-6 mb-6">
            <label for="start-time" class="form-label lh-md">
              生日
            </label>
            <input
              type="date"
              class="form-control border-primary-light text-gray-500"
              id="birth"
            />
          </div>
          <div class="col-12 col-lg-6">
            <label for="discount" class="form-label fw-medium lh-md">性別</label>
            <select class="form-select border-primary-light fs-6 text-gray-500 py-2" aria-label="inTwOrOut">
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
          >
          修改並儲存
        </button>
      </div>
    </section>
  </main>
</template>

<style lang="scss">
.upload-hover {
  color: var(--bs-primary);

  &:hover {
    transform: translate3d(0, -.125rem, 0);
    transition: opacity 0.3s, transform 0.3s;
  }
}
</style>

<script>
import UpLoad from '@/components/icons/UpLoad.vue';

export default {
  components: {
    UpLoad,
  },
};

</script>
