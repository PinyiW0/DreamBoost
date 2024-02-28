<template>
  <div class="container py-15 bg-white">
    <swiper
      ref="swiper"
      :modules="modules"
      :slides-per-view="3"
      :space-between="120"
      :centered-slides="true"
      :breakpoints="{
          390: {
            slidesPerView: 1,
          },
        }"
      :autoplay="{
        delay: 6000,
        disableOnInteraction: false,
      }"
      :effect="fade"
      @swiperprogress="onProgress"
      @swiperslidechange="onSlideChange"
      class="rounded-5 col-12 object-fit-cover"
      style="max-height: 650px;"
    >
      <swiper-slide>
        <div class="rounded-5">
          <div class="d-flex flex-column justify-content-center align-items-center">
            <RouterLink to="/member" class="position-relative col-12 rounded-5 shadow">
              <img
                src="/images/home/bn_01.jpg"
                class="img-fluid rounded-5 w-100 object-fit-cover"
                style="max-height: 650px;"
                alt="推動夢想不是夢概念圖">
              <div class="bg-primary-dark col-12 py-7 rounded-bottom-5 position-absolute bottom-0">
                <h4 class="text-secondary-light text-center lterSpc-10 mb-0 mx-8 bn-hover">
                  立刻加入會員，一起追夢去
                  <span>
                    <RightArrow style="width:24px;color: var(--bs-secondary-light);margin-top: -2 px;" ></RightArrow>
                  </span>
                </h4>
              </div>
            </RouterLink>
            <div class="d-flex flex-column align-items-center position-absolute top-24 top-sm-24 px-10">
              <img
                src="/images/home/w-biglogo.svg"
                class="img-fluid mb-5 col-12"
                alt="">
              <p class="fs-3 fw-light text-white mb-0 lterSpc-10">推動夢想不是夢 !</p>
            </div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="rounded-5">
          <div class="d-flex flex-column justify-content-center align-items-center">
            <RouterLink to="/member" class="position-relative col-12 rounded-5 shadow">
              <img
                src="/images/home/bn_02.jpg"
                class="img-fluid rounded-5 w-100 object-fit-cover"
                style="max-height: 650px;"
                alt="推動夢想不是夢概念圖">
              <div class="bg-primary-dark col-12 py-7 rounded-bottom-5 position-absolute bottom-0">
                <h4 class="text-secondary-light text-center lterSpc-10 mb-0 mx-8 bn-hover">
                  立刻加入會員，一起追夢去
                  <span>
                    <RightArrow style="width:24px;color: var(--bs-secondary-light);margin-top: -2 px;" ></RightArrow>
                  </span>
                </h4>
              </div>
            </RouterLink>
            <div class="d-flex flex-column align-items-center position-absolute top-24 top-sm-24 px-10">
              <img
                src="/images/home/w-biglogo.svg"
                class="img-fluid mb-5 col-12"
                alt="">
              <p class="fs-3 fw-light text-white mb-0 lterSpc-10">推動夢想不是夢 !</p>
            </div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="rounded-5">
          <div class="d-flex flex-column justify-content-center align-items-center">
            <RouterLink to="/member" class="position-relative col-12 rounded-5 shadow">
              <img
                src="/images/home/bn_03.jpg"
                class="img-fluid rounded-5 w-100 object-fit-cover"
                style="max-height: 650px;"
                alt="推動夢想不是夢概念圖">
              <div class="bg-primary-dark col-12 py-7 rounded-bottom-5 position-absolute bottom-0">
                <h4 class="text-secondary-light text-center lterSpc-10 mb-0 mx-8 bn-hover">
                  立刻加入會員，一起追夢去
                  <span>
                    <RightArrow style="width:24px;color: var(--bs-secondary-light);margin-top: -2 px;" ></RightArrow>
                  </span>
                </h4>
              </div>
            </RouterLink>
            <div class="d-flex flex-column align-items-center position-absolute top-24 top-sm-24 px-10">
              <img
                src="/images/home/w-biglogo.svg"
                class="img-fluid mb-5 col-12"
                alt="">
              <p class="fs-3 fw-light text-white mb-0 lterSpc-10">推動夢想不是夢 !</p>
            </div>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<style lang="scss" scoped>
.bn-hover {
  &:hover {
    transform: scale(1.05);
    transition: transform 0.3s ease;
    cursor: pointer;
  }
}
</style>

<script>
/* eslint-disable no-unused-vars */

import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Navigation } from 'swiper/modules';
import RightArrow from '@/components/icons/RightArrow.vue';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default {
  data() {
    return {
      modules: [Navigation, Pagination],
    };
  },
  mounted() {
  },
  created() {
  },
  methods: {
  },
  components: {
    RightArrow,
    Swiper,
    SwiperSlide,
  },
};
</script>

<style scoped>

.swiper-slide img {
  display: block;
}
</style>
