<template>
  <footer class="bg-primary-dark d-flex flex-column justify-content-center align-items-center">
    <!-- logo區 -->
    <div class="container-fluid border-bottom border-primary-light">
      <div class="container d-flex justify-content-center">
        <img
          src="/images/home/wt-big-logo.svg"
          class="img-fluid pt-6 pb-2"
          alt="dream boost 白色logo">
      </div>
    </div>
    <!-- 資訊區 -->
    <div class="container d-flex flex-column-reverse flex-lg-row justify-content-center align-items-center">
      <!-- 左-版權說明 -->
      <div class="d-flex flex-column align-items-center pe-0 pe-lg-10 pb-8 pb-lg-6 py-lg-6 border-end-lg border-primary-light">
        <p class="fs-6 text-gray-200 mb-1 text-nowrap">Copyright ©2024 DreamBoost. All rights reserve</p>
        <p class="fs-10 text-gray-200 mb-0">本專題僅為學習用途,不做任何商業使用 , 圖片來源請見 Readme</p>
      </div>
      <!-- 中-跑馬燈宗旨 -->
      <div class="d-none d-lg-block p-6">
        <div class="container-fluid bg-primary-dark d-flex justify-content-center">
        <div style="height: 28px;">
          <Vue3Marquee  :scrollamount="4000"
          class=""
          style="--duration: 10s; --delay: 6s;"
          >
              <span
                  v-for="(word, index) in adArray"
                  :key="index"
                  class="fs-5 text-secondary-light mb-0 lterSpc-10 me-16 mt-1"
              >
                  {{ word }}
              </span>
          </Vue3Marquee>
        </div>
      </div>
      </div>
      <!-- 右-社群聯繫 -->
      <div class="border-start-lg border-primary-light d-flex justify-content-center align-items-center ps-0 ps-lg-4 ps-xl-10 py-6">
        <a href="https://zh-tw.facebook.com/login/device-based/regular/login/?login_attempt=1"
          class="link-hover">
          <FaceBook class="fs-3 me-4 text-white" style="width:32px;"></FaceBook>
        </a>
        <a href="https://access.line.me/oauth2/v2.1/login?returnUri=%2Foauth2%2Fv2.1%2Fauthorize%2Fconsent%3Fapp_id%3D1429440178-lwY6XWYD%26client_id%3D1429440178%26scope%3Dchat_message.write%2Bopenid%2Bprofile%2Bgroups%2Bfriends%2Bmessage.write%26state%3D5TEnGtLYBr6i%26response_type%3Dcode%26code_challenge_method%3DS256%26code_challenge%3DWvUyL2aKO4YOm4q0pF-yDv2644sRXsr9r1JxRO-73C0%26liff_sdk_version%3D2.21.4%26type%3DL%26redirect_uri%3Dhttps%253A%252F%252Fgiftshop-tw.line.me&loginChannelId=1429440178&loginState=LKiBzJ9tm1V2ML4BHuxR0l#/"
          class="link-hover">
          <LineIcon class="fs-3 me-4 text-white" style="width:32px;"></LineIcon>
        </a>
        <a href="https://www.instagram.com/accounts/login/?next=%2Fchin_goods%2F&source=desktop_nav"
          class="link-hover">
          <InstaGram class="fs-3 me-4 text-white" style="width:32px;"></InstaGram>
        </a>
        <a href="https://www.linkedin.com/login/zh-tw"
          class="link-hover">
          <LinkeDin class="fs-3 me-4 text-white" style="width:32px;"></LinkeDin>
        </a>
        <a href="https://twitter.com/i/flow/login"
          class="link-hover">
          <TwitterIcon class="fs-3 text-white" style="width:32px;"></TwitterIcon>
        </a>
      </div>
    </div>
  </footer>
</template>

<script>
import { Vue3Marquee } from 'vue3-marquee';
import FaceBook from '@/components/icons/FaceBook.vue';
import InstaGram from '@/components/icons/InstaGram.vue';
import LinkeDin from '@/components/icons/LinkeDin.vue';
import TwitterIcon from '@/components/icons/TwitterIcon.vue';
import LineIcon from '@/components/icons/LineIcon.vue';

export default {
  data() {
    return {
      adArray: [],
    };
  },
  methods: {
    adData() {
      this.adArray = ['與 DreamBoost 攜手，實現你的夢想！成為我們的一份子，推動夢想不是夢 !'];
    },
  },
  mounted() {
    this.adData();
  },
  components: {
    Vue3Marquee,
    FaceBook,
    InstaGram,
    LinkeDin,
    TwitterIcon,
    LineIcon,
  },
};
</script>

<style lang="scss">
.link-hover {
  color: var(--bs-secondary-light);

  &:hover {
    opacity: 0.6;
    transform: translate3d(0, -.125rem, 0);
    transition: opacity 0.3s, transform 0.3s;
  }
}
</style>
