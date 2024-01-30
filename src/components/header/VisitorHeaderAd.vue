<template>
  <div class="header">
    <!-- Swiper Container Ad -->
    <div class="visitorHdrAdSp Visitor-Header-Ad">
      <!-- ... 其他 Swiper 內容 ... -->
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <span>即刻成為會員，立享$100 折價券！金額不限，全額折抵！</span>
          <img src="" alt="">
        </div>
        <div class="swiper-slide">Slide 2</div>
        <div class="swiper-slide">Slide 3</div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-unused-vars */
// 引入 Swiper
import SwiperCore, { Pagination, Navigation } from 'swiper/core';
import 'swiper/swiper-bundle.css';

// 使用所需的 Swiper 模組
SwiperCore.use([Pagination, Navigation]);

export default {
  name: 'visitorHdrAdSp',
  mounted() {
    // 初始化 Swiper
    const visitorHdrAdSp = new SwiperCore('.visitor-header-ad', {
      // ... Swiper 選項/配置 ...
      allowTouchMove: false,
      slidesPerView: 'auto',
      speed: 18000,
      loop: true,
      autoplay: {
        delay: 0,
        disableOnInteraction: false,
      },
    });
  },
};
</script>
