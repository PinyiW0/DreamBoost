<template>
  <header>
    <VisitorHeaderAd2></VisitorHeaderAd2>
    <VisitorHeader></VisitorHeader>
  </header>
  <main>
    <section class="container" style="height: 100vh;">
      <div class="py-25">
        <h1 class="text-center fs-3 text-primary mb-lg-1">忘記密碼</h1>
        <p class="text-center fs-6 text-primary-light mb-9">Forget the Password</p>
        <div class="row flex-column align-items-center">
          <div class="col-12 col-md-7 col-lg-4">
            <p class="mb-2 fs-4 fs-lg-5 fw-medium">重設密碼</p>
            <p class="fs-6 text-gray-600 mb-lg-3">請輸入您的註冊帳號時輸入的電子信箱地址，我們會透過電子郵件向您寄送重設密碼的連結。</p>
            <input type="email" placeholder="電子郵件" class="w-100 mb-12 mb-lg-12 p-3 rounded-3 border border-primary-light">
            <div class="d-flex flex-column-reverse flex-md-row align-items-center justify-content-end">
              <router-link to="member" class="me-6 text-gray-600">返回登入頁面</router-link>
              <button class="btn btn-primary py-lg-3 px-lg-9 mb-6 mb-md-0 col-12 col-md-8 col-lg-7">發送重設連結</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
  <!-- footer 區域 -->
  <div class="fixed-bottom">
    <UserFooter></UserFooter>
  </div>
</template>

<style scope>
</style>

<script>
import VisitorHeaderAd2 from '@/components/header/VisitorHeaderAd2.vue';
import VisitorHeader from '@/components/header/VisitorHeader.vue';
import UserFooter from '@/components/footer/UserFooter.vue';

export default {
  components: {
    VisitorHeader,
    VisitorHeaderAd2,
    UserFooter,
  },
};

</script>
