<template>
  <div class="bg-primary-dark container-fluid">
     <swiper-container
      :slides-per-view="1"
      :space-between="spaceBetween"
      :centered-slides="true"
      :breakpoints = "{
        768: {
          slidesPerView: 1,
         },
      }"
      @swiperprogress="onProgress"
      @swiperslidechange="onSlideChange"
    >
      <swiper-slide>
        <div class="d-flex align-items-center justify-content-center">
          <span class="fs-6 text-white me-8 mb-0">即刻成為會員，立享&nbsp;$100 折價券！金額不限，全額折抵！</span>
          <img class="mb-0" src="/public/images/db-logo-hdr.svg" alt="logo">
        </div>
      </swiper-slide>
      <swiper-slide>
          <div class="d-flex align-items-center justify-content-center">
            <span class="fs-6 text-white me-8 mb-0">即刻成為會員，立享&nbsp;$100 折價券！金額不限，全額折抵！</span>
            <img class="mb-0" src="/public/images/db-logo-hdr.svg" alt="logo">
          </div>
      </swiper-slide>
      <swiper-slide>
          <div class="d-flex align-items-center justify-content-center">
            <span class="fs-6 text-white me-8 mb-0">即刻成為會員，立享&nbsp;$100 折價券！金額不限，全額折抵！</span>
            <img class="mb-0" src="/public/images/db-logo-hdr.svg" alt="logo">
          </div>
      </swiper-slide>
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
// 原本放在template裡: breakpoints = "{
// 768: {
//   slidesPerView: 3,
//         },
//       }"
// : pagination = "{
// hideOnClick: true
//       }"
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
      const spaceBetween = 60;
      const onProgress = (e) => {
        const [swiper, progress] = e.detail;
      };

      // const onSlideChange = (e) => {
      // };

      return {
        spaceBetween,
        onProgress,
        // onSlideChange,
      };
    },
  },
};
</script>
