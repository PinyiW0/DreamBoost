<template>
  <div class="container mt-10">
    <swiper-container :slides-per-view="1" :space-between="spaceBetween" :centered-slides="true" :breakpoints="{
      768: {
        slidesPerView: 1,
      },
    }" @swiperprogress="onProgress" @swiperslidechange="onSlideChange">
      <swiper-slide>
        <div class="clip-path-bg"></div>
      </swiper-slide>
      <swiper-slide>
        <div class=""></div>
      </swiper-slide>
      <swiper-slide>
        <div class=""></div>
      </swiper-slide>
    </swiper-container>
  </div>
</template>

<style scoped>
.clip-path-bg {
  width: 100%;
  height: 600px;
  border-radius: 35px;
  background: url('/public/images/home/test1.jpg') no-repeat center center fixed;
  background-size: cover;
  overflow: hidden;
  clip-path: polygon(0% 0%, 100% 0%, 100% 85%, 68% 85%, 68% 100%, 0 100%);
  background-color: var(--bs-white); /* 背景透明度，根据需要调整 */
}
/* clip-path: polygon(0% 0%, 100% 0%, 100% 85%, 68% 85%, 68% 100%, 0 100%); */
</style>

<script>
/* eslint-disable no-unused-vars */

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

      return {
        spaceBetween,
        onProgress,
      };
    },
  },
};
</script>
