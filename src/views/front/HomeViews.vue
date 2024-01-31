<template>
  <header>
      <!-- Swiper Container Ad -->
      <div class="visitorHdrAdSp bg-primary-dark container-fluid">
        <!-- ... 其他 Swiper 內容 ... -->
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <div class="d-flex align-items-center">
              <span class="text-white me-8 mb-0">即刻成為會員，立享&nbsp;$100 折價券！金額不限，全額折抵！</span>
              <img class="mb-0" src="/public/images/db-logo-hdr.svg" alt="logo">
            </div>
          </div>
          <div class="swiper-slide">
            <div class="d-flex align-items-center">
                <span class="text-white me-8 mb-0">即刻成為會員，立享&nbsp;$100 折價券！金額不限，全額折抵！</span>
                <img class="mb-0" src="/public/images/db-logo-hdr.svg" alt="logo">
            </div>
          </div>
          <div class="swiper-slide">
            <div class="d-flex align-items-center">
                <span class="text-white me-8 mb-0">即刻成為會員，立享&nbsp;$100 折價券！金額不限，全額折抵！</span>
                <img class="mb-0" src="/public/images/db-logo-hdr.svg" alt="logo">
            </div>
            </div>
        </div>
      </div>
      <div class="container">
        <RouterLink to="/HomeViews">
          <a href="">
            <img src="/public/images/header/mainLogo.svg" alt="">
          </a>
        </RouterLink>
      </div>
      <swiperiii></swiperiii>
  </header>
</template>

<script>
import swiper1 from '../../components/header/VisitorHeaderAd.vue';

export default {
  components: {
    swiperiii: swiper1,
  },
};
</script>
