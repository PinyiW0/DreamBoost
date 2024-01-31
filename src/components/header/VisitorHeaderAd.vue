<template>
  <div>
    <!-- Swiper Container Ad -->
    <div class="'visitorHdrAdSp'">
      <!-- ... 其他 Swiper 內容 ... -->
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <span class="me-3">即刻成為會員，立享$100 折價券！金額不限，全額折抵！</span>
          <img src="../../../public/headerdb-logo-hdr.svg" alt="logo">
        </div>
        <div class="swiper-slide">Slide 2</div>
        <div class="swiper-slide">Slide 3</div>
      </div>
    </div>
     <swiper-container
      :slides-per-view="3"
      :space-between="spaceBetween"
      :centered-slides="true"
      :pagination="{
        hideOnClick: true
      }"
      :breakpoints="{
        768: {
          slidesPerView: 3,
        },
      }"
      @swiperprogress="onProgress"
      @swiperslidechange="onSlideChange"
    >
      <swiper-slide>Slide 1</swiper-slide>
      <swiper-slide>Slide 2</swiper-slide>
      <swiper-slide>Slide 3</swiper-slide>
    </swiper-container>
  </div>
</template>

<script>
/* eslint-disable no-unused-vars */
// 引入 Swiper
// import SwiperCore, { Pagination, Navigation } from 'swiper/core';
// import 'swiper/swiper-bundle.css';
// import headerswiper from '路徑';

// // 使用所需的 Swiper 模組
// SwiperCore.use([Pagination, Navigation]);

// export default {
//   data() {
//     return {
//       modules: [Navigation, Pagination],
//     };
//   },
//   components: {
//     aaa: headerswiper;
//   },
//   name: 'visitorHdrAdSp',
//   mounted() {
//     // 初始化 Swiper
//     const visitorHdrAdSp = new SwiperCore('.visitorHdrAdSp', {
//       // ... Swiper 選項/配置 ...
//       allowTouchMove: false,
//       slidesPerView: 'auto',
//       speed: 18000,
//       loop: true,
//       autoplay: {
//         delay: 0,
//         disableOnInteraction: false,
//       },
//     });
//   },
// };
import { register } from 'swiper/element/bundle';

register();

export default {
  mounted() {
    this.setup();
  },
  created() {
    // this.setup();
  },
  methods: {
    setup() {
      const spaceBetween = 10;
      const onProgress = (e) => {
        const [swiper, progress] = e.detail;
      };

      const onSlideChange = (e) => {
      };

      return {
        spaceBetween,
        onProgress,
        onSlideChange,
      };
    },
  },
};
</script>
